(function () {
  const { vehicles, dtc, availability, states, updated } = window.LOTLESS;
  const $ = (s, el = document) => el.querySelector(s);

  const state = {
    query: "",
    body: "all",
    region: localStorage.getItem("lotless-state") || "GA",
    selected: null
  };

  const money = (n) =>
    n >= 1000 ? "$" + Math.round(n / 1000) + "k" : "$" + n.toLocaleString();

  function brandStatus(brand) {
    const a = availability[brand];
    if (!a) return { ok: true, coming: false };
    if (a.coming) return { ok: true, coming: true, note: a.note };
    const blocked = a.restricted.includes(state.region);
    return { ok: !blocked, coming: false, note: a.note, label: a.label };
  }

  function renderList() {
    const q = state.query.toLowerCase();
    const list = vehicles.filter((v) => {
      const hay = (v.name + " " + v.body + " " + v.job).toLowerCase();
      const okQ = !q || hay.includes(q);
      const okB = state.body === "all" || v.body.includes(state.body);
      return okQ && okB;
    });
    $("#count").textContent = list.length + " lot vehicles";
    $("#grid").innerHTML = list
      .map(
        (v) => `
      <button class="card" data-id="${v.id}">
        <div class="kicker">${v.lot}</div>
        <h3>${v.name}</h3>
        <p>${v.job}</p>
        <div class="meta">
          <span>${v.seats} seats</span>
          <span>${money(v.start)} start</span>
          <span>${v.tow ? v.tow.toLocaleString() + " lb tow" : "no tow"}</span>
        </div>
      </button>`
      )
      .join("");
    $("#grid").querySelectorAll(".card").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selected = btn.dataset.id;
        draw();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  function renderDetail(v) {
    const alts = v.alts
      .map((alt) => {
        const car = dtc[alt.id];
        if (!car) return "";
        const st = brandStatus(car.brand);
        const canOrder = st.ok && car.status === "now";
        const cta = canOrder
          ? `<a class="btn" href="${car.order}" target="_blank" rel="noopener">Order from the factory</a>`
          : st.coming || car.status === "coming"
          ? `<a class="btn ghost" href="${car.order}" target="_blank" rel="noopener">Reservation only</a>`
          : `<span class="blocked">Direct purchase restricted in ${state.region}. Gallery / out-of-state close may exist — verify with ${st.label || car.brand}.</span>`;

        return `
        <article class="alt">
          <div class="alt-top">
            <h3>${car.name}</h3>
            <span class="fit ${alt.fit}">${alt.fit} fit</span>
          </div>
          <p style="color:var(--muted);margin:8px 0 0;font-size:14px">${car.blurb}</p>
          <div class="split">
            <div class="why"><h4>Why</h4><p>${alt.why}</p></div>
            <div class="why"><h4>Why not</h4><p>${alt.whyNot}</p></div>
          </div>
          <div class="alt-foot">
            <div class="nums">${car.seats} seats · ${money(car.start)} start · ${car.range}${car.tow ? " · " + car.tow.toLocaleString() + " lb tow" : ""}</div>
            ${cta}
          </div>
        </article>`;
      })
      .join("");

    $("#detail").innerHTML = `
      <button class="back" id="back">← All lot vehicles</button>
      <section class="hero-panel">
        <div class="kicker">${v.lot} · still the franchise model</div>
        <h2>${v.name}</h2>
        <p class="job">${v.job}</p>
        <div class="stats">
          <div class="stat"><small>Seats</small><b>${v.seats}</b></div>
          <div class="stat"><small>Starts around</small><b>${money(v.start)}</b></div>
          <div class="stat"><small>Tow</small><b>${v.tow ? v.tow.toLocaleString() + " lb" : "—"}</b></div>
          <div class="stat"><small>Your state</small><b>${state.region}</b></div>
        </div>
      </section>
      <h3 style="font-family:var(--serif);font-weight:500;margin:8px 0 12px">Factory-direct alternatives</h3>
      <div class="alts">${alts}</div>
      <p class="note">Prices are starting MSRP, not out-the-door. Destination, tax, and title still exist in both channels. Dealer OTD adds doc fees, packed add-ons, and rate markup — that is the point of the comparison, not a promise that the EV is cheaper. Catalog updated ${updated}. Not legal advice.</p>
    `;
    $("#back").addEventListener("click", () => {
      state.selected = null;
      draw();
    });
  }

  function draw() {
    const v = vehicles.find((x) => x.id === state.selected);
    if (v) {
      $("#browse").style.display = "none";
      $("#detail").classList.add("show");
      renderDetail(v);
    } else {
      $("#browse").style.display = "block";
      $("#detail").classList.remove("show");
      $("#detail").innerHTML = "";
      renderList();
    }
  }

  function boot() {
    const sel = $("#state");
    sel.innerHTML = states.map((s) => `<option value="${s}">${s}</option>`).join("");
    sel.value = state.region;
    sel.addEventListener("change", () => {
      state.region = sel.value;
      localStorage.setItem("lotless-state", state.region);
      draw();
    });
    $("#q").addEventListener("input", (e) => {
      state.query = e.target.value;
      if (!state.selected) renderList();
    });
    document.querySelectorAll("[data-body]").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("[data-body]").forEach((c) => c.classList.remove("on"));
        chip.classList.add("on");
        state.body = chip.dataset.body;
        state.selected = null;
        draw();
      });
    });
    draw();
  }

  boot();
})();
