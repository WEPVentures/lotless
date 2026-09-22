/* Lotless catalog — factory-direct only.
   Franchise EVs (Ioniq 5, Lyriq, Mach-E, Equinox EV) are not in this file on purpose. */

window.LOTLESS = {
  updated: "2026-09-22",

  states: [
    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
    "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
    "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
    "VA","WA","WV","WI","WY","DC"
  ],

  availability: {
    tesla: {
      label: "Tesla",
      restricted: ["AL","AR","IA","KS","KY","LA","NE","ND","SC","WV","WI"],
      note: "Tesla pioneered the carve-out. A handful of states still block or hobble factory stores."
    },
    rivian: {
      label: "Rivian",
      restricted: ["AL","AR","IA","KS","KY","LA","NE","ND","SC","WV","WI","TX"],
      note: "Direct where the law allows a no-franchise OEM. Demo drives are not a completed sale."
    },
    lucid: {
      label: "Lucid",
      restricted: ["AL","AR","GA","IA","KS","KY","LA","NE","ND","SC","WV","WI","TX"],
      note: "Georgia kept the direct-sales ban in 2026; Tesla is grandfathered, Lucid is not."
    },
    slate: {
      label: "Slate",
      restricted: [],
      note: "Selling direct. Service is an independent network. Deliveries targeted late 2026."
    },
    scout: {
      label: "Scout",
      restricted: [],
      coming: true,
      note: "VW-owned, wants direct. First customer metal is 2027-28. A reservation is not Saturday delivery."
    }
  },

  dtc: {
    "tesla-3": { id: "tesla-3", brand: "tesla", name: "Tesla Model 3", seats: 5, tow: 0, start: 36990, body: "sedan", status: "now", range: "321 mi", order: "https://www.tesla.com/model3/design", blurb: "The default factory sedan. Posted price. Supercharger is the actual product." },
    "tesla-y": { id: "tesla-y", brand: "tesla", name: "Tesla Model Y", seats: 5, tow: 3500, start: 44990, body: "crossover", status: "now", range: "~320 mi", order: "https://www.tesla.com/modely/design", blurb: "America's best-selling EV. Five seats. Not a three-row." },
    "tesla-yl": { id: "tesla-yl", brand: "tesla", name: "Tesla Model Y L", seats: 6, tow: 3500, start: 49990, body: "crossover", status: "now", range: "~300 mi", order: "https://www.tesla.com/modely/design", blurb: "Longer Y with six seats. Kids in row three. Not a Tahoe cargo hold." },
    "tesla-ct": { id: "tesla-ct", brand: "tesla", name: "Tesla Cybertruck", seats: 5, tow: 11000, start: 69990, body: "truck", status: "now", range: "~320 mi", order: "https://www.tesla.com/cybertruck/design", blurb: "The only high-volume factory-direct truck you can take home this year." },
    "rivian-r1s": { id: "rivian-r1s", brand: "rivian", name: "Rivian R1S", seats: 7, tow: 7700, start: 76990, body: "suv", status: "now", range: "258-410 mi", order: "https://rivian.com/configurator/r1s", blurb: "Seven seats, or six with captains. Third row is for kids. Tow is real." },
    "rivian-r1t": { id: "rivian-r1t", brand: "rivian", name: "Rivian R1T", seats: 5, tow: 11000, start: 71990, body: "truck", status: "now", range: "~270-410 mi", order: "https://rivian.com/configurator/r1t", blurb: "Adventure truck, gear tunnel, serious tow. Not a work-truck bed." },
    "rivian-r2": { id: "rivian-r2", brand: "rivian", name: "Rivian R2", seats: 5, tow: 3500, start: 48490, body: "crossover", status: "now", range: "330 mi", order: "https://rivian.com/r2", blurb: "The midsize Rivian. Early cars are the dearer Performance trim." },
    "lucid-air": { id: "lucid-air", brand: "lucid", name: "Lucid Air", seats: 5, tow: 0, start: 70900, body: "sedan", status: "now", range: "420-516 mi", order: "https://www.lucidmotors.com/air", blurb: "Range king in a suit. Tiny service map." },
    "lucid-gravity": { id: "lucid-gravity", brand: "lucid", name: "Lucid Gravity", seats: 7, tow: 6000, start: 79900, body: "suv", status: "now", range: "337-450 mi", order: "https://www.lucidmotors.com/gravity", blurb: "Luxury three-row, 5/6/7 seats." },
    "slate-truck": { id: "slate-truck", brand: "slate", name: "Slate Truck", seats: 2, tow: 0, start: 24950, body: "truck", status: "now", range: "205 mi", order: "https://www.slate.auto/", blurb: "Cheapest new truck in America. Two seats. Not a half-ton." },
    "slate-suv": { id: "slate-suv", brand: "slate", name: "Slate SUV", seats: 5, tow: 0, start: 29950, body: "crossover", status: "now", range: "~200 mi", order: "https://www.slate.auto/", blurb: "The truck with the kit on. Five seats. Still a $30k appliance." },
    "scout-traveler": { id: "scout-traveler", brand: "scout", name: "Scout Traveler", seats: 5, tow: 7000, start: 59000, body: "suv", status: "coming", range: "350 EV / 500 EREV", order: "https://www.scoutmotors.com/", blurb: "Body-on-frame SUV, EREV first. Production 2027-28." },
    "scout-terra": { id: "scout-terra", brand: "scout", name: "Scout Terra", seats: 5, tow: 7500, start: 59000, body: "truck", status: "coming", range: "350 EV / 500 EREV", order: "https://www.scoutmotors.com/", blurb: "The factory-direct pickup people want when they say F-150 without a desk. Not for sale yet." }
  },

  vehicles: [
    { id: "tahoe", name: "Chevrolet Tahoe", lot: "GM dealer", start: 58900, seats: 8, tow: 8400, body: "full-size SUV", job: "Move a lot of people, maybe a trailer, look like a suburban headquarters.", alts: [
      { id: "rivian-r1s", fit: "partial", why: "You asked for seats. R1S does 7, or 6 with captains. Posted price. No F&I menu.", whyNot: "You lose a seat, cargo behind row three, and body-on-frame tow manners. Eight people plus a boat? This is not the car." },
      { id: "tesla-yl", fit: "partial", why: "Six seats exist without a Tahoe. Factory order. Supercharger network.", whyNot: "Row three is kids. Cargo with people inside loses to a GMT body. Tow is light-duty." },
      { id: "lucid-gravity", fit: "partial", why: "Luxury three-row, up to 7, factory price, class range.", whyNot: "Not a truck-based SUV. Service map is thin. Georgia buyers cannot treat this like an in-state retail sale." },
      { id: "scout-traveler", fit: "coming", why: "This is the product that actually rhymes with Tahoe: frame, space, EREV range, factory-direct intent.", whyNot: "2027-28. A $100 reservation is not a Saturday delivery." }
    ]},
    { id: "suburban", name: "Chevrolet Suburban", lot: "GM dealer", start: 61900, seats: 8, tow: 8300, body: "full-size SUV", job: "Tahoe, plus the extra cargo people actually bought the Suburban for.", alts: [
      { id: "rivian-r1s", fit: "weak", why: "Same factory-direct three-row story.", whyNot: "Suburban cargo volume is the whole point. R1S does not replace it." },
      { id: "scout-traveler", fit: "coming", why: "Closest future factory-direct full-sizer.", whyNot: "Not on sale." }
    ]},
    { id: "yukon", name: "GMC Yukon", lot: "GM dealer", start: 60900, seats: 8, tow: 8200, body: "full-size SUV", job: "Tahoe with better leather and a higher doc fee.", alts: [
      { id: "rivian-r1s", fit: "partial", why: "Same seats-and-pavement job, minus the desk.", whyNot: "Yukon buyers often want the brand theater." },
      { id: "lucid-gravity", fit: "partial", why: "If the job was luxury three-row, not towing.", whyNot: "Not body-on-frame. Sparse service." }
    ]},
    { id: "expedition", name: "Ford Expedition", lot: "Ford dealer", start: 57995, seats: 8, tow: 9600, body: "full-size SUV", job: "Family plus serious tow, Blue Oval service in every county.", alts: [
      { id: "rivian-r1s", fit: "partial", why: "7 seats, 7,700 lb tow, no packed F&I.", whyNot: "Ford still wins max tow and the national service net." },
      { id: "scout-traveler", fit: "coming", why: "EREV is the honest answer for people who tow and will not plan chargers.", whyNot: "Not built yet." }
    ]},
    { id: "sequoia", name: "Toyota Sequoia", lot: "Toyota dealer", start: 62365, seats: 8, tow: 9520, body: "full-size SUV", job: "Reliability religion plus eight seats.", alts: [
      { id: "rivian-r1s", fit: "partial", why: "Seats without allocation games or ADM.", whyNot: "Toyota service density and resale story is why people pay the desk." }
    ]},
    { id: "highlander", name: "Toyota Highlander", lot: "Toyota dealer", start: 40670, seats: 8, tow: 5000, body: "3-row crossover", job: "Three rows for a family that does not need a body-on-frame truck.", alts: [
      { id: "tesla-yl", fit: "strong", why: "Six seats, factory price, no market adjustment on a waitlist cousin.", whyNot: "Eight-seat shoppers lose two positions. Third row is tighter." },
      { id: "rivian-r2", fit: "partial", why: "Midsize factory-direct crossover in the real Highlander price band once optioned.", whyNot: "R2 is five seats. If the third row was the job, this is the wrong car." },
      { id: "rivian-r1s", fit: "partial", why: "Actual seven seats, posted price.", whyNot: "You just jumped a segment and $25k+." }
    ]},
    { id: "grand-highlander", name: "Toyota Grand Highlander", lot: "Toyota dealer", start: 43670, seats: 8, tow: 5000, body: "3-row crossover", job: "The Highlander that can actually fit adults in row three.", alts: [
      { id: "rivian-r1s", fit: "strong", why: "Cleanest swap if they wanted space, not a Toyota store. Seven seats, captains available.", whyNot: "Price walks up with battery pack. Toyota hybrid still wins the no-charger household." },
      { id: "lucid-gravity", fit: "partial", why: "If they were already stretching into luxury money.", whyNot: "Overkill and a thin service map." },
      { id: "tesla-yl", fit: "partial", why: "Six seats, cheaper, Superchargers.", whyNot: "Grand Highlander people bought it for the adult third-row test. Y L fails that test." }
    ]},
    { id: "pilot", name: "Honda Pilot", lot: "Honda dealer", start: 39900, seats: 8, tow: 5000, body: "3-row crossover", job: "Boring on purpose. Three rows. Honda dealer down the street.", alts: [
      { id: "tesla-yl", fit: "strong", why: "Six seats without sitting in F&I for nitrogen and a paint pen.", whyNot: "Honda service and eight-seat trim still exist for a reason." },
      { id: "rivian-r2", fit: "partial", why: "Factory midsize, honest price.", whyNot: "Five seats. Pilot shoppers usually need the third row." }
    ]},
    { id: "cx90", name: "Mazda CX-90", lot: "Mazda dealer", start: 38500, seats: 7, tow: 5000, body: "3-row crossover", job: "Three rows that feel expensive without a German badge.", alts: [
      { id: "tesla-yl", fit: "strong", why: "Same family job, factory price, better software.", whyNot: "CX-90 people often want a dealer loaner." },
      { id: "rivian-r1s", fit: "partial", why: "Proper adventure three-row if they were already looking up-market.", whyNot: "Price and charging." }
    ]},
    { id: "palisade", name: "Hyundai Palisade", lot: "Hyundai dealer", start: 37650, seats: 8, tow: 5000, body: "3-row crossover", job: "Max content per dollar in a three-row.", alts: [
      { id: "tesla-yl", fit: "strong", why: "You wanted six or seven seats and a bunch of features. Factory does that without a $799 doc fee.", whyNot: "Palisade Calligraphy is still a content bomb the Y L will not match." }
    ]},
    { id: "telluride", name: "Kia Telluride", lot: "Kia dealer", start: 37700, seats: 8, tow: 5000, body: "3-row crossover", job: "Palisade twin. Often marked up when hot.", alts: [
      { id: "tesla-yl", fit: "strong", why: "Same job. No ADM folklore.", whyNot: "Telluride residual and dealer convenience." },
      { id: "rivian-r2", fit: "weak", why: "If they never used the third row.", whyNot: "Most Telluride buyers used it." }
    ]},
    { id: "explorer", name: "Ford Explorer", lot: "Ford dealer", start: 39940, seats: 7, tow: 5600, body: "3-row crossover", job: "Default American three-row.", alts: [
      { id: "tesla-yl", fit: "strong", why: "Six seats, no ST tax, no desk.", whyNot: "Ford service if that was the real job." },
      { id: "rivian-r2", fit: "partial", why: "Five-seat daily in the same money after Explorer options.", whyNot: "Drops a row." }
    ]},
    { id: "rav4", name: "Toyota RAV4", lot: "Toyota dealer", start: 29875, seats: 5, tow: 3500, body: "compact SUV", job: "The default American crossover. Hybrid if they can find one without ADM.", alts: [
      { id: "rivian-r2", fit: "strong", why: "Midsize-compact utility, factory price, no allocation hostage situation.", whyNot: "R2 early builds cost more than a RAV4 LE. Toyota hybrid still wins households with no home charger." },
      { id: "tesla-y", fit: "strong", why: "Posted price, range, software. The volume answer.", whyNot: "Brand. Wants a Toyota dealer for the next 12 years." },
      { id: "slate-suv", fit: "partial", why: "If the job was cheap transportation with five seats.", whyNot: "205 miles, appliance interior. A RAV4 Limited buyer will laugh." }
    ]},
    { id: "crv", name: "Honda CR-V", lot: "Honda dealer", start: 29750, seats: 5, tow: 1500, body: "compact SUV", job: "RAV4 for people who prefer Honda.", alts: [
      { id: "tesla-y", fit: "strong", why: "Five seats, factory invoice is the sticker.", whyNot: "CR-V hybrid fueling is a hose. Tesla fueling is a plan." },
      { id: "rivian-r2", fit: "strong", why: "Same class, no desk.", whyNot: "Price and charging." },
      { id: "slate-suv", fit: "partial", why: "Cash price under a loaded CR-V.", whyNot: "Not the same vehicle except doors." }
    ]},
    { id: "cx5", name: "Mazda CX-5", lot: "Mazda dealer", start: 28800, seats: 5, tow: 2000, body: "compact SUV", job: "The one that still steers.", alts: [
      { id: "tesla-y", fit: "strong", why: "If the job was a daily five-seater, not a sports car.", whyNot: "CX-5 people bought the chassis. Model Y is not that." },
      { id: "rivian-r2", fit: "strong", why: "Closer in character than a Y for some buyers.", whyNot: "Money and range if they road-trip the Rockies." }
    ]},
    { id: "camry", name: "Toyota Camry", lot: "Toyota dealer", start: 28600, seats: 5, tow: 0, body: "sedan", job: "A car that starts for 15 years.", alts: [
      { id: "tesla-3", fit: "strong", why: "The sedan replacement that exists at factory price.", whyNot: "Camry hybrid plus any independent shop in America." }
    ]},
    { id: "accord", name: "Honda Accord", lot: "Honda dealer", start: 28900, seats: 5, tow: 0, body: "sedan", job: "Camry for people who still care about a chassis.", alts: [
      { id: "tesla-3", fit: "strong", why: "Same job, posted price, cheaper to fuel if you charge at home.", whyNot: "You will not get Accord seats and Honda dealer coffee." }
    ]},
    { id: "f150", name: "Ford F-150", lot: "Ford dealer", start: 38745, seats: 5, tow: 13000, body: "full-size truck", job: "America's work and identity vehicle.", alts: [
      { id: "tesla-ct", fit: "partial", why: "Factory-direct truck you can buy this year. 11,000 lb tow on the right spec.", whyNot: "Bed, payload, fifth-wheel, and every tool that assumes a steel F-150." },
      { id: "rivian-r1t", fit: "partial", why: "Best factory truck as a vehicle. Gear tunnel. Tow is real.", whyNot: "Not a jobsite truck. Price. Service." },
      { id: "slate-truck", fit: "weak", why: "If they said truck and meant cheap pickup for Home Depot.", whyNot: "Two seats, 205 miles, no real tow. This is not an F-150." },
      { id: "scout-terra", fit: "coming", why: "The one that might steal XLT volume — EREV, frame, factory-direct.", whyNot: "2027-28." }
    ]},
    { id: "silverado", name: "Chevrolet Silverado 1500", lot: "GM dealer", start: 37800, seats: 5, tow: 13300, body: "full-size truck", job: "F-150 if your last one was a Bowtie.", alts: [
      { id: "tesla-ct", fit: "partial", why: "Only in-market factory truck with volume.", whyNot: "Work truck it is not." },
      { id: "rivian-r1t", fit: "partial", why: "Lifestyle / ranch / mountains.", whyNot: "Fleet and plow guys stay at the Chevy store." },
      { id: "scout-terra", fit: "coming", why: "Intended replacement set.", whyNot: "Not for sale." }
    ]},
    { id: "ram", name: "Ram 1500", lot: "Stellantis dealer", start: 39920, seats: 5, tow: 11620, body: "full-size truck", job: "The comfortable one.", alts: [
      { id: "rivian-r1t", fit: "partial", why: "If they bought Ram for the cabin, not the Cummins cousin.", whyNot: "Ram still wins the couch." },
      { id: "tesla-ct", fit: "partial", why: "Factory truck, now.", whyNot: "Nothing about a Cybertruck is a Ram cabin." },
      { id: "scout-terra", fit: "coming", why: "EREV comfort plus direct.", whyNot: "Wait." }
    ]},
    { id: "tundra", name: "Toyota Tundra", lot: "Toyota dealer", start: 40965, seats: 5, tow: 12000, body: "full-size truck", job: "Full-size that is supposed to last.", alts: [
      { id: "rivian-r1t", fit: "partial", why: "Factory price vs Tundra allocation games.", whyNot: "Toyota resale religion." },
      { id: "scout-terra", fit: "coming", why: "The long-term direct pickup.", whyNot: "Not built." }
    ]},
    { id: "maverick", name: "Ford Maverick", lot: "Ford dealer", start: 29995, seats: 5, tow: 4000, body: "compact truck", job: "A truck for people who do not need a truck.", alts: [
      { id: "slate-truck", fit: "partial", why: "Cheaper. Factory-direct. Actual small truck energy.", whyNot: "Two seats unless they buy the SUV kit. Hybrid Maverick still sips gas with a hose." },
      { id: "slate-suv", fit: "partial", why: "If they never used the bed.", whyNot: "Then they did not need a Maverick." },
      { id: "rivian-r2", fit: "partial", why: "Better daily, factory price in the loaded-Maverick band.", whyNot: "No bed." }
    ]},
    { id: "tacoma", name: "Toyota Tacoma", lot: "Toyota dealer", start: 31500, seats: 5, tow: 6500, body: "midsize truck", job: "Midsize truck with a religion attached.", alts: [
      { id: "rivian-r1t", fit: "partial", why: "If they wanted capability more than a bed tax.", whyNot: "Tacoma people want a Tacoma. Price is also a jump." },
      { id: "slate-truck", fit: "weak", why: "Cheap and small.", whyNot: "Not midsize capability. Two seats." },
      { id: "scout-terra", fit: "coming", why: "Heritage off-road brand, direct.", whyNot: "Full-size-ish, and late." }
    ]},
    { id: "bronco", name: "Ford Bronco", lot: "Ford dealer", start: 39995, seats: 5, tow: 3500, body: "off-road SUV", job: "Look like you leave the pavement.", alts: [
      { id: "rivian-r2", fit: "strong", why: "Factory adventure crossover without Bronco order-bank grief.", whyNot: "Bronco two-door / Sasquatch is a different toy." },
      { id: "rivian-r1s", fit: "partial", why: "If they actually go off-road.", whyNot: "Money." },
      { id: "scout-traveler", fit: "coming", why: "This is the spiritual product.", whyNot: "Not on sale." }
    ]},
    { id: "wrangler", name: "Jeep Wrangler", lot: "Stellantis dealer", start: 34900, seats: 5, tow: 3500, body: "off-road SUV", job: "Doors off. Identity.", alts: [
      { id: "rivian-r2", fit: "weak", why: "Only if the Wrangler was a lifestyle sticker.", whyNot: "Nothing factory-direct currently is a Wrangler. Do not pretend." },
      { id: "scout-traveler", fit: "coming", why: "Closest future analog.", whyNot: "Still not a Wrangler." }
    ]},
    { id: "x5", name: "BMW X5", lot: "BMW dealer", start: 65900, seats: 5, tow: 7200, body: "luxury SUV", job: "Luxury daily with a service loaner and a badge.", alts: [
      { id: "lucid-gravity", fit: "strong", why: "Luxury three-row they will actually use. Factory price. No protection package.", whyNot: "BMW chassis and dealer theater." },
      { id: "rivian-r1s", fit: "strong", why: "Same money as a loaded X5, seven seats, posted price.", whyNot: "Not a BMW to drive. Service." },
      { id: "tesla-y", fit: "partial", why: "If the X5 was a five-seat daily and they will accept the brand.", whyNot: "X5 people often will not." }
    ]},
    { id: "gle", name: "Mercedes-Benz GLE", lot: "Mercedes dealer", start: 63900, seats: 5, tow: 7700, body: "luxury SUV", job: "X5, but the star.", alts: [
      { id: "lucid-gravity", fit: "strong", why: "Luxury packaging without MB F&I.", whyNot: "Star badge and dealer nursery." },
      { id: "rivian-r1s", fit: "strong", why: "More seats, more honest truck.", whyNot: "Ride and cabin perfume." }
    ]},
    { id: "cayenne", name: "Porsche Cayenne", lot: "Porsche dealer", start: 84300, seats: 5, tow: 7700, body: "luxury SUV", job: "The SUV a 911 owner is allowed to have.", alts: [
      { id: "lucid-gravity", fit: "partial", why: "Factory luxury, no allocation leash, no ADM conversation.", whyNot: "A Cayenne is a Porsche. Gravity is not. If they wanted a chassis, stay." },
      { id: "rivian-r1s", fit: "partial", why: "More usable third row. Posted price. No product consultant.", whyNot: "Wrong religion. Service. Sound." }
    ]},
    { id: "macan", name: "Porsche Macan", lot: "Porsche dealer", start: 63200, seats: 5, tow: 4400, body: "compact luxury SUV", job: "The first Porsche.", alts: [
      { id: "rivian-r2", fit: "partial", why: "Factory compact-mid, no desk.", whyNot: "Macan is the product. R2 is not a consolation Porsche." },
      { id: "tesla-y", fit: "partial", why: "Price and software.", whyNot: "Steering." }
    ]},
    { id: "model-y-dealer", name: "Hyundai Ioniq 5 / Ford Mach-E / Chevy Equinox EV", lot: "Still a franchise dealer", start: 35000, seats: 5, tow: 0, body: "crossover EV", job: "An electric car that still makes you sit in F&I.", alts: [
      { id: "tesla-y", fit: "strong", why: "Same job, factory price, actual charging network. This is the whole point of the app.", whyNot: "Some people want a Hyundai/Ford/Chevy badge and a local store. That is allowed. It is also still the dealer model." },
      { id: "rivian-r2", fit: "strong", why: "The non-Tesla factory midsize.", whyNot: "Volume and service vs Tesla." }
    ]}
  ]
};
