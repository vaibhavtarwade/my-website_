/**
 * MOTOX - Central Data Store
 * Contains verified specifications, gallery images, 20 interactive part components,
 * accessories, articles, offers, and brand directory.
 */

const MOTOX_DATA = {
  brands: [
    {
      id: "yamaha",
      name: "Yamaha",
      country: "Japan",
      tagline: "Revs Your Heart",
      logo: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.yamaha-motor-india.com",
      description: "Precision Japanese racing engineering and high-revving performance machines designed for the racetrack and the street."
    },
    {
      id: "ktm",
      name: "KTM",
      country: "Austria",
      tagline: "Ready to Race",
      logo: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.ktm.com",
      description: "Aggressive Austrian streetfighters and dirt championship winners built for raw power-to-weight superiority."
    },
    {
      id: "royal-enfield",
      name: "Royal Enfield",
      country: "India / UK",
      tagline: "Made Like a Gun",
      logo: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.royalenfield.com",
      description: "Timeless British heritage, long-stroke thumpers, and legendary modern classic cruisers built for pure motorcycling."
    },
    {
      id: "kawasaki",
      name: "Kawasaki",
      country: "Japan",
      tagline: "Let the Good Times Roll",
      logo: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://kawasaki-india.com",
      description: "Supercharged Ninja performance, high-displacement refinement, and legendary World Superbike dominators."
    },
    {
      id: "honda",
      name: "Honda",
      country: "Japan",
      tagline: "The Power of Dreams",
      logo: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.honda2wheelersindia.com",
      description: "Unrivaled mechanical reliability, buttery-smooth inline engines, and world-class road manners."
    },
    {
      id: "tvs",
      name: "TVS Motor",
      country: "India",
      tagline: "Track Born, Track Bred",
      logo: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.tvsmotor.com",
      description: "Cutting-edge racing technology, segment-first electronic rider aids, and track-engineered Apache dynamics."
    },
    {
      id: "triumph",
      name: "Triumph",
      country: "United Kingdom",
      tagline: "For the Ride",
      logo: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.triumphmotorcycles.in",
      description: "Iconic British craftsmanship, torque-rich modern classics, and triple-cylinder precision track weapons."
    },
    {
      id: "hero",
      name: "Hero MotoCorp",
      country: "India",
      tagline: "Hum Mein Hai Hero",
      logo: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.heromotocorp.com",
      description: "World's largest two-wheeler manufacturer, Dakar rally endurance champions, and rugged trail-conquering machines."
    },
    {
      id: "ola",
      name: "Ola Electric",
      country: "India",
      tagline: "End ICE Age",
      logo: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.olaelectric.com",
      description: "Next-generation electric motorcycles with hyper-performance software, liquid-cooled battery packs, and futuristic tech."
    },
    {
      id: "ducati",
      name: "Ducati",
      country: "Italy",
      tagline: "Style, Sophistication, Performance",
      logo: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.ducati.com",
      description: "Desmodromic Italian passion, aerodynamic monocoque racing chassis, and MotoGP championship engineering."
    },
    {
      id: "bmw",
      name: "BMW Motorrad",
      country: "Germany",
      tagline: "Make Life a Ride",
      logo: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80",
      officialUrl: "https://www.bmw-motorrad.in",
      description: "Pinnacle German engineering, ShiftCam boxer engines, and unmatched globetrotting adventure capability."
    }
  ],

  categories: [
    {
      id: "sports",
      name: "Sports",
      tagline: "Aero Fairings & Pure Track Thrills",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      count: 4,
      desc: "Aggressive clip-on handlebars, aerodynamic wind tunnels, and high-revving engines tuned for razor-sharp track apexes."
    },
    {
      id: "naked",
      name: "Naked / Street",
      tagline: "Raw Streetfighters with Aggressive Torque",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
      count: 3,
      desc: "Stripped-down bodywork, upright riding ergonomics, exposed trellis frames, and explosive low-to-mid range grunt for city dominance."
    },
    {
      id: "cruiser",
      name: "Cruiser",
      tagline: "Laid-back Ergonomics & Highway Thump",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      count: 2,
      desc: "Low seat height, forward-set footpegs, sweeping handlebars, and effortless long-distance torque for endless highway cruising."
    },
    {
      id: "adventure",
      name: "Adventure / Tourer",
      tagline: "Long-Travel Suspension & Trail Mastery",
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80",
      count: 3,
      desc: "High ground clearance, spoke wheels, upright endurance seating, and rugged crash protection to tackle unpaved mountain terrains."
    },
    {
      id: "retro",
      name: "Retro / Classic",
      tagline: "Timeless Aesthetics with Modern Reliability",
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=800&q=80",
      count: 2,
      desc: "Round headlamps, teardrop tanks, polished metal finishes, and vintage styling married to electronic fuel injection and dual-channel ABS."
    },
    {
      id: "electric",
      name: "Electric",
      tagline: "Instant Peak Torque & Zero Emissions",
      image: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=800&q=80",
      count: 1,
      desc: "Instant torque delivery from 0 RPM, silent propulsion, regenerative braking, digital touchscreen clusters, and smart IoT connectivity."
    },
    {
      id: "scooter",
      name: "Maxi-Scooter",
      tagline: "Urban Agility with Maximum Comfort",
      image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
      count: 1,
      desc: "Step-through or spine chassis, twist-and-go automatic CVT transmissions, ample under-seat storage, and effortless city commuting."
    }
  ],

  // 20 Core Motorcycle Parts with interactive coordinates, specs, and detailed mechanical explanations
  partsCatalog: {
    engine: {
      name: "Internal Combustion Engine / Powertrain",
      category: "Powertrain",
      hotspot: { x: 48, y: 62 },
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
      shortSummary: "The mechanical heart converting chemical combustion into high-RPM rotational torque.",
      details: {
        function: "Compresses fuel-air mixture and ignites it via spark timing to drive reciprocating pistons and crank rotational force.",
        maintenanceTip: "Check engine oil viscosity every 3,000 km. Use fully synthetic 10W-40 or 15W-50 oil.",
        specs: ["Variable Valve Actuation (VVA)", "Liquid-Cooled SOHC / DOHC", "High Compression Ratio"]
      }
    },
    fuelTank: {
      name: "Fuel Tank & Ergonomic Knee Recesses",
      category: "Chassis & Ergonomics",
      hotspot: { x: 42, y: 35 },
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Aerodynamically sculpted steel/composite cell with internal high-pressure fuel pump.",
      details: {
        function: "Stores high-octane fuel and provides structural knee-grip contours for rider cornering stability.",
        maintenanceTip: "Avoid running dry to protect the immersed electric fuel pump from overheating.",
        specs: ["Capacity: 11L - 20L", "Integrated Breather Valve", "Anti-Slosh Internal Baffling"]
      }
    },
    gearbox: {
      name: "Multi-Plate Assist & Slipper Gearbox",
      category: "Transmission",
      hotspot: { x: 44, y: 68 },
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Sequential 6-speed mesh with slip-assist ramps to prevent rear-wheel hopping during aggressive downshifts.",
      details: {
        function: "Transfers crank power via multiple gear ratios to optimize engine operating torque bands.",
        maintenanceTip: "Maintain correct clutch lever free-play (10-15mm) to prevent premature plate glazing.",
        specs: ["6-Speed Constant Mesh", "Wet Multi-Plate Assist Clutch", "Bi-Directional Quickshifter Ready"]
      }
    },
    frontSuspension: {
      name: "Inverted Upside-Down (USD) Front Forks",
      category: "Suspension",
      hotspot: { x: 26, y: 48 },
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Rigid 37mm-43mm inverted telescopic stanchions minimizing unsprung mass for sharper steering feedback.",
      details: {
        function: "Absorbs front wheel bumps, maintains tire contact patch, and prevents excessive dive under heavy braking.",
        maintenanceTip: "Inspect fork oil seals regularly for dirt ingress or fluid weeping.",
        specs: ["Diameter: 37mm - 43mm", "Cartridge Damping System", "130mm - 200mm Wheel Travel"]
      }
    },
    rearSuspension: {
      name: "Monoshock Absorber with Linkage",
      category: "Suspension",
      hotspot: { x: 62, y: 55 },
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Centrally positioned gas-charged monoshock with multi-step preload adjustment for pillion & cargo loads.",
      details: {
        function: "Damps rear swingarm articulation and ensures chassis stability during mid-corner acceleration.",
        maintenanceTip: "Adjust preload according to rider plus luggage payload to maintain correct steering geometry.",
        specs: ["Nitrogen Gas Charged", "Multi-Step Preload Adjustable", "Rising-Rate Pro-Link"]
      }
    },
    frontBrake: {
      name: "Radial Caliper & Floating Front Disc",
      category: "Braking",
      hotspot: { x: 22, y: 68 },
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Large diameter 282mm-320mm rotor clamped by Bybre/Brembo dual-piston calipers with ABS intervention.",
      details: {
        function: "Generates 70%+ of motorcycle deceleration stopping force through hydraulic friction clamping.",
        maintenanceTip: "Replace sintered brake pads before friction material wears below 1.5mm thickness.",
        specs: ["Disc Diameter: 282mm - 320mm", "Dual Channel Bosch ABS", "Radial Master Cylinder"]
      }
    },
    rearBrake: {
      name: "Hydraulic Disc with Cornering ABS",
      category: "Braking",
      hotspot: { x: 74, y: 68 },
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Single-piston floating caliper on 220mm-240mm disc for trail braking control and rear stabilization.",
      details: {
        function: "Stabilizes the bike during low-speed maneuvers and controls pitch while initiating turns.",
        maintenanceTip: "Flush brake fluid (DOT 4) every 24 months to prevent moisture-induced vapor lock.",
        specs: ["Disc Diameter: 220mm - 240mm", "Supermoto / Switchable ABS Mode"]
      }
    },
    frontTyre: {
      name: "High-Grip Radial Front Tyre",
      category: "Wheels & Rubber",
      hotspot: { x: 18, y: 72 },
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Silica-infused compound radial tire designed for precise directional steering and wet-weather water channeling.",
      details: {
        function: "Maintains mechanical adhesion, transmits steering inputs, and dissipates heat during high-speed cornering.",
        maintenanceTip: "Maintain cold tire pressure between 28-32 PSI for optimum tread longevity and grip.",
        specs: ["Size: 100/80-17 to 120/70-ZR17", "Tubeless Radial Ply", "Deep Tread Sipes"]
      }
    },
    rearTyre: {
      name: "Wide Low-Profile Radial Rear Tyre",
      category: "Wheels & Rubber",
      hotspot: { x: 80, y: 72 },
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Broad 140/70 to 180/55 cross-section tire transferring horsepower directly to asphalt with zero slippage.",
      details: {
        function: "Delivers propulsion thrust, resists straight-line wheelspin, and stabilizes lean angles up to 50 degrees.",
        maintenanceTip: "Inspect tread wear indicators (TWI) every month. Rotate or replace when flush.",
        specs: ["Size: 140/70-R17 to 180/55-ZR17", "Dual-Compound Rubber Structure"]
      }
    },
    chain: {
      name: "O-Ring / X-Ring Sealed Drive Chain",
      category: "Final Drive",
      hotspot: { x: 68, y: 72 },
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
      shortSummary: "High-tensile alloy steel link chain sealed with internal grease reservoirs between roller bushings.",
      details: {
        function: "Transmits rotary power from output countershaft sprocket to rear wheel sprocket with 97%+ efficiency.",
        maintenanceTip: "Clean with kerosene/chain cleaner and lubricate with dedicated chain wax every 500 km.",
        specs: ["Pitch: 520 / 525 Heavy Duty", "X-Ring Internal Lubrication", "Gold Anodized Links"]
      }
    },
    sprocket: {
      name: "Machined Rear Drive Sprocket",
      category: "Final Drive",
      hotspot: { x: 76, y: 72 },
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Hardened steel or aluminum alloy tooth gear determining final drive ratio and acceleration characteristics.",
      details: {
        function: "Engages roller chain to turn rear wheel hub; tooth count dictates top-speed vs low-end acceleration torque balance.",
        maintenanceTip: "Replace both front & rear sprockets simultaneously when installing a new drive chain.",
        specs: ["Teeth: 40T - 48T", "High-Carbon Steel / 7075-T6 Alloy", "Integrated Rubber Cush Drive"]
      }
    },
    exhaust: {
      name: "Tuned Stainless Steel Exhaust Header & Canister",
      category: "Exhaust System",
      hotspot: { x: 64, y: 78 },
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Catalytic converter equipped exhaust routing spent gases while generating an evocative engine acoustic note.",
      details: {
        function: "Evacuates burned gases, provides scavenge backpressure for cylinder filling, and satisfies strict BS6 Stage II / Euro 5 noise limits.",
        maintenanceTip: "Clean exhaust heat shields to prevent corrosive road grime buildup.",
        specs: ["Underbelly / Upswept Design", "BS6 Phase 2 / OBD-2 Compliant", "Tuned Resonator Chamber"]
      }
    },
    headlight: {
      name: "Bi-Functional Projector LED Headlamp",
      category: "Electricals & Lighting",
      hotspot: { x: 19, y: 35 },
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Class-D high-intensity LED projector flanked by menacing aerodynamic Daytime Running Lights (DRLs).",
      details: {
        function: "Illuminates distant road obstacles up to 180 meters while drawing minimal stator electrical current.",
        maintenanceTip: "Keep optical polycarbonate lens clean and adjust horizontal beam alignment when hauling heavy loads.",
        specs: ["Full LED Projector Unit", "Signature LED DRL Eyebrows", "Auto-Headlamp On (AHO)"]
      }
    },
    tailLight: {
      name: "Aerodynamic LED Tail Lamp & Indicators",
      category: "Electricals & Lighting",
      hotspot: { x: 88, y: 44 },
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Crystal-diffused LED light bar with integrated emergency hazard flashing under panic braking.",
      details: {
        function: "Provides unmistakable rear visibility to following traffic in dense fog, rain, or total night darkness.",
        maintenanceTip: "Inspect wiring harness connection inside under-seat tail fairing periodically.",
        specs: ["Dual LED Strip Array", "Dynamic Emergency Brake Strobe", "Sleek Integrated Fender"]
      }
    },
    digitalConsole: {
      name: "TFT Digital Instrument Console with Bluetooth",
      category: "Electronics",
      hotspot: { x: 30, y: 28 },
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Full-color 5-inch TFT cockpit display featuring smartphone pairing, turn-by-turn navigation, and lap timers.",
      details: {
        function: "Displays real-time speed, tachometer RPM bar, gear position, fuel range, ambient temp, traction control modes, and call/SMS alerts.",
        maintenanceTip: "Clean screen with a microfiber cloth; apply anti-glare screen protector.",
        specs: ["5.0-inch Color TFT Display", "Bluetooth Y-Connect / MyRide App", "Turn-by-Turn GPS Navigation"]
      }
    },
    seat: {
      name: "Split Ergonomic Rider & Pillion Seat",
      category: "Chassis & Ergonomics",
      hotspot: { x: 58, y: 42 },
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Dual-density molded polyurethane foam wrapped in textured non-slip weather-resistant leatherette.",
      details: {
        function: "Provides rider lumbar support and absorbs high-frequency chassis vibrations on extended highway journeys.",
        maintenanceTip: "Apply vinyl conditioner every 6 months to prevent sun UV cracking and water seepage.",
        specs: ["Seat Height: 790mm - 825mm", "Anti-Slip Textured Fabric", "Removable Pillion Cowl"]
      }
    },
    battery: {
      name: "Maintenance-Free AGM / Lithium-Ion Battery",
      category: "Electricals & Lighting",
      hotspot: { x: 50, y: 52 },
      image: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=600&q=80",
      shortSummary: "High-cold-cranking-amp (CCA) 12V sealed battery powering starter motor, EFI sensors, and ECU computers.",
      details: {
        function: "Supplies stable DC voltage to all onboard microprocessors, ignition coils, lights, and electronic rider safety aids.",
        maintenanceTip: "Connect to a smart trickle charger if storing the motorcycle unused for more than 3 weeks.",
        specs: ["12V 5Ah - 9Ah Sealed VRLA", "High CCA Starter Reliability", "Microprocessor Overcharge Protection"]
      }
    },
    frame: {
      name: "Deltabox / Steel Trellis Backbone Frame",
      category: "Chassis & Ergonomics",
      hotspot: { x: 38, y: 48 },
      image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=600&q=80",
      shortSummary: "High torsional rigidity frame geometry engineered to eliminate chassis flex and deliver razor-sharp turn-in agility.",
      details: {
        function: "Mounts steering head, engine as a stressed member, and rear swingarm pivot with optimal center of gravity balance.",
        maintenanceTip: "Inspect swingarm pivot bearing torque during major scheduled annual services.",
        specs: ["Deltabox / High-Strength Steel Trellis", "Optimized Flex-Rigidity Balance", "Die-Cast Aluminum Subframe"]
      }
    },
    radiator: {
      name: "High-Efficiency Aluminum Curved Radiator",
      category: "Cooling System",
      hotspot: { x: 34, y: 56 },
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Multi-channel brazed aluminum core dissipating engine heat via ambient airflow and electric thermostatic fan.",
      details: {
        function: "Circulates ethylene glycol coolant to keep cylinder heads at peak thermal efficiency under continuous high-RPM loads.",
        maintenanceTip: "Install an aftermarket radiator guard to shield delicate aluminum cooling fins from flying stone chips.",
        specs: ["Curved Fin Aerodynamic Design", "Thermostatically Controlled Electric Fan", "Corrosion Resistant Alloy"]
      }
    },
    coolingSystem: {
      name: "Thermostatically Controlled Liquid Cooling Jacket",
      category: "Cooling System",
      hotspot: { x: 42, y: 58 },
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
      shortSummary: "Water pump driven internal cylinder coolant channels maintaining consistent combustion temperatures.",
      details: {
        function: "Prevents cylinder thermal distortion, stabilizes horsepower output in peak summer heat, and extends engine component life.",
        maintenanceTip: "Replace organic acid technology (OAT) coolant every 2 years or 20,000 km.",
        specs: ["Closed Loop Pressure System", "Mechanical Impeller Water Pump", "Bypass Thermostat Valve"]
      }
    }
  },

  // Full Catalog of Real Motorcycles with Verified Specifications
  bikes: [
    {
      id: "yamaha-r15-v4",
      brand: "Yamaha",
      brandId: "yamaha",
      model: "YZF R15 V4",
      tagline: "Born of the Racing Spirit",
      category: "sports",
      categoryName: "Sports",
      price: 183000,
      priceDisplay: "₹1.83 Lakh",
      engine: "155cc",
      engineType: "Liquid-cooled, 4-stroke, SOHC, 4-valve, VVA",
      displacement: "155 cc",
      power: "18.4 PS",
      powerValue: 18.4,
      powerRpm: "@ 10,000 RPM",
      torque: "14.2 Nm",
      torqueValue: 14.2,
      torqueRpm: "@ 7,500 RPM",
      mileage: "45 km/l",
      mileageValue: 45,
      acceleration: "10.1s", // 0-100 km/h
      topSpeed: "140 km/h",
      topSpeedValue: 140,
      weight: "141 kg",
      fuelCapacity: "11 L",
      transmission: "6-Speed Manual with Assist & Slipper Clutch",
      fuelType: "Petrol (E20 Compliant)",
      rating: 4.8,
      ratingCount: 1420,
      badge: "Popular Track Weapon",
      officialUrl: "https://www.yamaha-motor-india.com/yamaha-r15v4.html",
      description: "The Yamaha R15 V4 brings world-class MotoGP aerodynamics, inverted USD forks, Traction Control System, and a quickshifter to the 155cc segment. Powered by the legendary liquid-cooled engine with Variable Valve Actuation (VVA).",
      colors: [
        { name: "Racing Blue", hex: "#0033a0", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" },
        { name: "Metallic Black", hex: "#111111", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80" },
        { name: "Vivid Magenta", hex: "#c2185b", image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80" },
        { name: "Intensity White", hex: "#f0f0f0", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "155 cc",
          "Max Power": "18.4 PS @ 10,000 rpm",
          "Max Torque": "14.2 Nm @ 7,500 rpm",
          "Cylinder Count": "Single Cylinder",
          "Valves Per Cylinder": "4 Valves, SOHC",
          "Cooling": "Liquid Cooled",
          "Fuel Delivery": "Electronic Fuel Injection",
          "Starting": "Self Start Only"
        },
        transmission: {
          "Clutch": "Wet Multi-plate Assist & Slipper",
          "Gearbox": "6-Speed Constant Mesh",
          "Quickshifter": "Standard (Upshift)",
          "Final Drive": "Sealed O-Ring Chain"
        },
        brakes: {
          "Front Brake": "282 mm Hydraulic Disc",
          "Rear Brake": "220 mm Hydraulic Disc",
          "ABS": "Dual Channel Bosch ABS",
          "Brake Caliper": "Bybre Twin-Piston Radial"
        },
        suspension: {
          "Front Suspension": "37 mm Telescopic Upside Down (USD) Forks",
          "Rear Suspension": "Linked-Type Monocross Suspension",
          "Front Travel": "130 mm",
          "Rear Travel": "120 mm"
        },
        dimensions: {
          "Overall Length": "1,990 mm",
          "Overall Width": "725 mm",
          "Overall Height": "1,135 mm",
          "Wheelbase": "1,325 mm",
          "Ground Clearance": "170 mm",
          "Seat Height": "815 mm",
          "Kerb Weight": "141 kg",
          "Fuel Tank": "11 Liters"
        },
        electronics: {
          "Instrument Cluster": "Digital LCD with Track & Street Modes",
          "Traction Control": "Yes (Switchable)",
          "Mobile Connectivity": "Bluetooth Y-Connect App",
          "Headlamp": "Bi-functional Class-D LED Projector",
          "Tail Lamp": "Aerodynamic LED"
        }
      },
      features: [
        "Variable Valve Actuation (VVA) for top-end surge",
        "Traction Control System (TCS)",
        "Standard Quick Shifter for clutchless upshifts",
        "Golden Inverted USD Front Forks",
        "Dual Channel ABS with Supermoto Mode",
        "Aerodynamic M1 MotoGP inspired cowl design"
      ]
    },

    {
      id: "ktm-duke-390",
      brand: "KTM",
      brandId: "ktm",
      model: "390 Duke",
      tagline: "The Corner Rocket",
      category: "naked",
      categoryName: "Naked",
      price: 310000,
      priceDisplay: "₹3.10 Lakh",
      engine: "399cc",
      engineType: "Liquid-cooled, Single Cylinder, 4-Valve, DOHC",
      displacement: "399 cc",
      power: "46.0 PS",
      powerValue: 46.0,
      powerRpm: "@ 8,500 RPM",
      torque: "39.0 Nm",
      torqueValue: 39.0,
      torqueRpm: "@ 6,500 RPM",
      mileage: "29 km/l",
      mileageValue: 29,
      acceleration: "5.4s",
      topSpeed: "167 km/h",
      topSpeedValue: 167,
      weight: "168 kg",
      fuelCapacity: "15 L",
      transmission: "6-Speed with Slipper Clutch & Quickshifter+",
      fuelType: "Petrol (OBD-2)",
      rating: 4.9,
      ratingCount: 2180,
      badge: "Performance King",
      officialUrl: "https://www.ktm.com/en-in/models/naked-bike/2024-ktm-390-duke.html",
      description: "The third-generation KTM 390 Duke is an unmatched hooligan on the street. Packing a fresh 399cc LC4c engine, adjustable WP APEX suspension at both ends, Cornering ABS, Launch Control, and a 5-inch bonded TFT display.",
      colors: [
        { name: "Electronic Orange", hex: "#ff6600", image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80" },
        { name: "Atlantic Blue", hex: "#1e3a8a", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" },
        { name: "Midnight Black", hex: "#18181b", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "398.63 cc",
          "Max Power": "46 PS @ 8,500 rpm",
          "Max Torque": "39 Nm @ 6,500 rpm",
          "Cylinder Count": "Single Cylinder",
          "Cooling": "Liquid Cooled with Curved Radiator",
          "Valves": "4 Valves DOHC",
          "Fuel Delivery": "Bosch EMS with Ride-by-Wire"
        },
        transmission: {
          "Clutch": "PASC Antihopping Slipper Clutch",
          "Gearbox": "6-Speed with Quickshifter+ Bi-directional",
          "Final Drive": "520 X-Ring Chain"
        },
        brakes: {
          "Front Brake": "320 mm Disc with Radially Mounted 4-Piston Caliper",
          "Rear Brake": "240 mm Disc with 2-Piston Floating Caliper",
          "ABS": "Cornering ABS + Supermoto Mode"
        },
        suspension: {
          "Front Suspension": "WP APEX 43mm Open Cartridge with 5-Click Compression & Rebound",
          "Rear Suspension": "WP APEX Separate Piston Monoshock (5-click Rebound & Preload)",
          "Travel Front/Rear": "150 mm / 150 mm"
        },
        dimensions: {
          "Ground Clearance": "183 mm",
          "Seat Height": "800 mm / 820 mm (Adjustable)",
          "Kerb Weight": "168 kg",
          "Fuel Tank": "15 Liters"
        },
        electronics: {
          "Display": "5-inch Bonded Color TFT Glass Display",
          "Riding Modes": "Street, Rain, Track",
          "Launch Control": "Standard",
          "Cornering Traction Control": "3-Stage Switchable MTC"
        }
      },
      features: [
        "Class-leading 46 PS horsepower from new 399cc engine",
        "Segment-first Launch Control System",
        "Fully adjustable WP APEX front and rear suspension",
        "Lean-sensitive Cornering ABS and Traction Control",
        "5-inch bonded glass TFT display with turn-by-turn navigation",
        "All-new lightweight steel trellis chassis with forged aluminum subframe"
      ]
    },

    {
      id: "royal-enfield-classic-350",
      brand: "Royal Enfield",
      brandId: "royal-enfield",
      model: "Classic 350",
      tagline: "Timeless Pure Motorcycling",
      category: "retro",
      categoryName: "Retro",
      price: 193000,
      priceDisplay: "₹1.93 Lakh",
      engine: "349cc",
      engineType: "Single Cylinder, 4-stroke, Air-Oil cooled, J-Series SOHC",
      displacement: "349 cc",
      power: "20.2 PS",
      powerValue: 20.2,
      powerRpm: "@ 6,100 RPM",
      torque: "27.0 Nm",
      torqueValue: 27.0,
      torqueRpm: "@ 4,000 RPM",
      mileage: "36 km/l",
      mileageValue: 36,
      acceleration: "14.2s",
      topSpeed: "115 km/h",
      topSpeedValue: 115,
      weight: "195 kg",
      fuelCapacity: "13 L",
      transmission: "5-Speed Constant Mesh",
      fuelType: "Petrol",
      rating: 4.7,
      ratingCount: 3890,
      badge: "Heritage Icon",
      officialUrl: "https://www.royalenfield.com/in/en/motorcycles/classic-350/",
      description: "Reborn on the modern J-platform, the Royal Enfield Classic 350 embodies the authentic heart and soul of British motorcycling. Featuring smooth counterbalanced engine thump, dual cradle frame, and timeless handcrafted styling.",
      colors: [
        { name: "Gunmetal Grey", hex: "#4a4a4a", image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80" },
        { name: "Halcyon Black", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" },
        { name: "Chrome Bronze", hex: "#8c6239", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" },
        { name: "Signals Desert Sand", hex: "#c2b280", image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "349 cc",
          "Max Power": "20.2 PS @ 6,100 rpm",
          "Max Torque": "27 Nm @ 4,000 rpm",
          "Cooling": "Air-Oil Cooled",
          "Valves": "2 Valves, SOHC with Primary Balancer Shaft",
          "Fuel Delivery": "Electronic Fuel Injection (EFI)"
        },
        transmission: {
          "Clutch": "Wet Multi-plate",
          "Gearbox": "5-Speed Constant Mesh",
          "Final Drive": "Open O-Ring Chain"
        },
        brakes: {
          "Front Brake": "300 mm Disc with Twin-Piston Floating Caliper",
          "Rear Brake": "270 mm Disc with Single-Piston Caliper",
          "ABS": "Dual Channel ABS"
        },
        suspension: {
          "Front Suspension": "41 mm Telescopic Forks (130mm Travel)",
          "Rear Suspension": "Twin Tube Emulsion Shock Absorbers with 6-step Adjustable Preload"
        },
        dimensions: {
          "Wheelbase": "1,390 mm",
          "Ground Clearance": "170 mm",
          "Seat Height": "805 mm",
          "Kerb Weight": "195 kg",
          "Fuel Tank": "13 Liters"
        },
        electronics: {
          "Cluster": "Digi-Analog Instrument with LCD display",
          "Navigation": "Tripper Navigation Pod (Optional)",
          "USB Charging": "Standard 2A Port on Handlebar"
        }
      },
      features: [
        "Vibration-free J-Series engine with counter balancer shaft",
        "Twin Downtube Spine Frame for exceptional road stability",
        "Classic teardrop tank with hand-painted pin stripes",
        "Dual Channel ABS with large 300mm front rotor",
        "Plush wide sprung rider seat for fatigue-free cruising",
        "Iconic thumping exhaust note engineered for touring"
      ]
    },

    {
      id: "kawasaki-ninja-500",
      brand: "Kawasaki",
      brandId: "kawasaki",
      model: "Ninja 500",
      tagline: "The New Supersport Benchmark",
      category: "sports",
      categoryName: "Sports",
      price: 524000,
      priceDisplay: "₹5.24 Lakh",
      engine: "451cc",
      engineType: "Parallel-Twin, Liquid-Cooled, 4-Stroke, DOHC 8-Valve",
      displacement: "451 cc",
      power: "45.4 PS",
      powerValue: 45.4,
      powerRpm: "@ 9,000 RPM",
      torque: "42.6 Nm",
      torqueValue: 42.6,
      torqueRpm: "@ 6,000 RPM",
      mileage: "26 km/l",
      mileageValue: 26,
      acceleration: "4.9s",
      topSpeed: "185 km/h",
      topSpeedValue: 185,
      weight: "171 kg",
      fuelCapacity: "14 L",
      transmission: "6-Speed Return with Assist & Slipper Clutch",
      fuelType: "Petrol (High Octane)",
      rating: 4.9,
      ratingCount: 940,
      badge: "Twin Cylinder Beast",
      officialUrl: "https://kawasaki-india.com/bikes/ninja-500/",
      description: "The all-new Kawasaki Ninja 500 combines legendary WorldSBK styling with a punchy 451cc parallel-twin engine. Lightweight steel trellis frame, smartphone connectivity, and effortless high-speed supersport agility.",
      colors: [
        { name: "Lime Green / Ebony", hex: "#00a651", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80" },
        { name: "Metallic Flat Spark Black", hex: "#1f1f1f", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "451 cc",
          "Engine Layout": "Parallel Twin Cylinders",
          "Max Power": "45.4 PS @ 9,000 rpm",
          "Max Torque": "42.6 Nm @ 6,000 rpm",
          "Bore x Stroke": "70.0 x 58.6 mm",
          "Cooling": "Liquid Cooled",
          "Valves": "8 Valves DOHC"
        },
        transmission: {
          "Clutch": "Wet Multi-plate Assist & Slipper",
          "Gearbox": "6-Speed Return",
          "Final Drive": "Sealed Chain"
        },
        brakes: {
          "Front Brake": "Semi-Floating 310 mm Disc with Dual-Piston Caliper",
          "Rear Brake": "220 mm Disc with Dual-Piston Caliper",
          "ABS": "Dual Channel ABS"
        },
        suspension: {
          "Front Suspension": "41 mm Telescopic Fork (120mm Travel)",
          "Rear Suspension": "Bottom-Link Uni-Trak with Gas-Charged Shock (Adjustable Preload)"
        },
        dimensions: {
          "Ground Clearance": "145 mm",
          "Seat Height": "785 mm",
          "Kerb Weight": "171 kg",
          "Fuel Tank": "14 Liters"
        },
        electronics: {
          "Display": "High-Contrast Full LCD / TFT Instrument Console",
          "Connectivity": "Kawasaki RIDEOLOGY THE APP",
          "Headlamp": "Compact Twin LED Projectors"
        }
      },
      features: [
        "Torque-rich 451cc Parallel Twin DOHC Engine",
        "Lightweight Trellis Frame inspired by the Ninja H2",
        "Accessible 785mm seat height for confident footing",
        "Dual LED Headlights with sharp Ninja family face",
        "Assist & Slipper clutch for feather-light lever action",
        "Smartphone connectivity with notifications and vehicle telemetry"
      ]
    },

    {
      id: "honda-cb650r",
      brand: "Honda",
      brandId: "honda",
      model: "CB650R Neo Sports Café",
      tagline: "Pure Inline-Four Symphony",
      category: "naked",
      categoryName: "Naked",
      price: 915000,
      priceDisplay: "₹9.15 Lakh",
      engine: "649cc",
      engineType: "Inline-4 Cylinder, Liquid-Cooled, 16-Valve DOHC",
      displacement: "649 cc",
      power: "87.0 PS",
      powerValue: 87.0,
      powerRpm: "@ 12,000 RPM",
      torque: "57.5 Nm",
      torqueValue: 57.5,
      torqueRpm: "@ 9,500 RPM",
      mileage: "20 km/l",
      mileageValue: 20,
      acceleration: "3.7s",
      topSpeed: "220 km/h",
      topSpeedValue: 220,
      weight: "206 kg",
      fuelCapacity: "15.4 L",
      transmission: "6-Speed with Honda E-Clutch & Slipper Clutch",
      fuelType: "Petrol",
      rating: 4.9,
      ratingCount: 820,
      badge: "Inline-4 Masterpiece",
      officialUrl: "https://www.honda2wheelersindia.com/bigwing/cb650r",
      description: "A breathtaking fusion of retro-minimalist café racer styling and screaming 649cc inline-four cylinder Japanese performance. Equipped with Showa SFF-BP USD forks, Honda Selectable Torque Control (HSTC), and full color TFT.",
      colors: [
        { name: "Matte Gunpowder Black", hex: "#222222", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" },
        { name: "Candy Chromosphere Red", hex: "#b71c1c", image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "648.72 cc",
          "Engine Layout": "Inline 4-Cylinder",
          "Max Power": "87 PS @ 12,000 rpm",
          "Max Torque": "57.5 Nm @ 9,500 rpm",
          "Valves": "16 Valves, DOHC",
          "Cooling": "Liquid Cooled with Curved Core"
        },
        transmission: {
          "Clutch": "Wet Multiplate with Honda E-Clutch Technology",
          "Gearbox": "6-Speed Manual",
          "Final Drive": "525 O-Ring Sealed Chain"
        },
        brakes: {
          "Front Brake": "Dual 310 mm Floating Discs with Radial 4-Piston Calipers",
          "Rear Brake": "240 mm Single Disc with Single-Piston Caliper",
          "ABS": "Dual Channel ABS"
        },
        suspension: {
          "Front Suspension": "Showa 41 mm Separate Function Fork Big Piston (SFF-BP) USD",
          "Rear Suspension": "Monoshock Damper with 10-Stage Adjustable Preload"
        },
        dimensions: {
          "Seat Height": "810 mm",
          "Kerb Weight": "206 kg",
          "Fuel Capacity": "15.4 Liters",
          "Ground Clearance": "150 mm"
        },
        electronics: {
          "Traction Control": "Honda Selectable Torque Control (HSTC)",
          "Display": "5-inch Full Color TFT Screen",
          "RoadSync": "Honda RoadSync Voice & Navigation Control"
        }
      },
      features: [
        "Glorious 649cc Inline 4-cylinder engine revving to 12,500 RPM",
        "Sculpted 4-into-1 sweeping exhaust header pipes",
        "Showa Separate Function Big Piston (SFF-BP) USD forks",
        "Honda E-Clutch technology allowing clutchless starts and shifts",
        "Radial-mount front brake calipers with dual 310mm floating rotors",
        "Neo Sports Café circular signature LED headlight ring"
      ]
    },

    {
      id: "tvs-apache-rtr-310",
      brand: "TVS Motor",
      brandId: "tvs",
      model: "Apache RTR 310",
      tagline: "Freestyle Street Performance",
      category: "naked",
      categoryName: "Naked",
      price: 243000,
      priceDisplay: "₹2.43 Lakh",
      engine: "312.2cc",
      engineType: "Single Cylinder, 4-Stroke, 4-Valve, Liquid-Cooled, DOHC Reverse Inclined",
      displacement: "312.2 cc",
      power: "35.6 PS",
      powerValue: 35.6,
      powerRpm: "@ 9,700 RPM",
      torque: "28.7 Nm",
      torqueValue: 28.7,
      torqueRpm: "@ 6,650 RPM",
      mileage: "30 km/l",
      mileageValue: 30,
      acceleration: "7.0s",
      topSpeed: "150 km/h",
      topSpeedValue: 150,
      weight: "169 kg",
      fuelCapacity: "11 L",
      transmission: "6-Speed with Bi-Directional Quickshifter",
      fuelType: "Petrol (E20)",
      rating: 4.8,
      ratingCount: 1120,
      badge: "Tech Supercharged",
      officialUrl: "https://www.tvsmotor.com/tvs-apache/apache-rtr-310",
      description: "The TVS Apache RTR 310 is packed with cutting-edge electronics never before seen in this segment: Climate-Controlled Heated/Cooled Seat, Cruise Control, Cornering ABS, Dynamic Stability Control (DSC), and a 5-inch horizontal TFT.",
      colors: [
        { name: "Fury Yellow", hex: "#ffcc00", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" },
        { name: "Arsenal Black", hex: "#1e1e1e", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" },
        { name: "Sepang Blue BTO", hex: "#0284c7", image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "312.2 cc",
          "Engine Layout": "Reverse Inclined Single Cylinder DOHC",
          "Max Power": "35.6 PS @ 9,700 rpm",
          "Max Torque": "28.7 Nm @ 6,650 rpm",
          "Cooling": "Liquid Cooled"
        },
        transmission: {
          "Clutch": "RT Slipper Clutch",
          "Quickshifter": "Bi-Directional Quickshifter (Up & Down)",
          "Gearbox": "6-Speed"
        },
        brakes: {
          "Front Brake": "300 mm Petal Disc with Radial Bybre Caliper",
          "Rear Brake": "240 mm Petal Disc",
          "ABS": "Linear & Cornering ABS with 6-Axis IMU"
        },
        suspension: {
          "Front Suspension": "KYB 41 mm Upside Down Forks (Adjustable Preload, Rebound & Compression on BTO)",
          "Rear Suspension": "Monotube Floating Piston Gas-Assisted Monoshock"
        },
        dimensions: {
          "Seat Height": "800 mm",
          "Kerb Weight": "169 kg",
          "Fuel Tank": "11 Liters",
          "Ground Clearance": "180 mm"
        },
        electronics: {
          "Display": "5.0-inch Horizontal TFT Display with GoPro Control",
          "Climate Seat": "Segment-First Heated & Cooled Rider Seat",
          "Rider Aids": "Cruise Control, Dynamic Stability Control, Wheelie Control, Tire Pressure Monitoring (TPMS)"
        }
      },
      features: [
        "Segment-first Climate Controlled (Heated & Cooled) Seat",
        "Electronic Cruise Control for long highway rides",
        "6-Axis IMU with Cornering ABS, Traction Control & Wheelie Control",
        "5 distinct Riding Modes: Track, Urban, Rain, Sport, Supermoto",
        "Bi-Directional Quickshifter for lightning fast clutchless shifting",
        "Tire Pressure Monitoring System (TPMS) integrated into TFT display"
      ]
    },

    {
      id: "triumph-speed-400",
      brand: "Triumph",
      brandId: "triumph",
      model: "Speed 400",
      tagline: "Modern Classic Road Dominance",
      category: "retro",
      categoryName: "Retro",
      price: 233000,
      priceDisplay: "₹2.33 Lakh",
      engine: "398cc",
      engineType: "Liquid-cooled, 4-valve, DOHC, Single-Cylinder TR-Series",
      displacement: "398.15 cc",
      power: "40.0 PS",
      powerValue: 40.0,
      powerRpm: "@ 8,000 RPM",
      torque: "37.5 Nm",
      torqueValue: 37.5,
      torqueRpm: "@ 6,500 RPM",
      mileage: "30 km/l",
      mileageValue: 30,
      acceleration: "6.7s",
      topSpeed: "155 km/h",
      topSpeedValue: 155,
      weight: "176 kg",
      fuelCapacity: "13 L",
      transmission: "6-Speed with Torque-Assist Slipper Clutch",
      fuelType: "Petrol",
      rating: 4.9,
      ratingCount: 1650,
      badge: "British Masterpiece",
      officialUrl: "https://www.triumphmotorcycles.in/motorcycles/classic/speed-400",
      description: "Co-developed with Bajaj, the Triumph Speed 400 delivers genuine Hinckley build quality, rich powder-coated finishes, all-new liquid-cooled TR-Series engine, big piston USD forks, and switchable traction control.",
      colors: [
        { name: "Carnival Red / Phantom Black", hex: "#c4151c", image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80" },
        { name: "Caspian Blue / Storm Grey", hex: "#1e3a5f", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" },
        { name: "Phantom Black / Pewter Grey", hex: "#2b2b2b", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "398.15 cc",
          "Max Power": "40 PS @ 8,000 rpm",
          "Max Torque": "37.5 Nm @ 6,500 rpm",
          "Valves": "4-Valve DOHC Single Cylinder",
          "Cooling": "Liquid Cooled with Machined Fins"
        },
        transmission: {
          "Clutch": "Wet, Multi-Plate Torque-Assist",
          "Gearbox": "6-Speed Manual",
          "Final Drive": "X-Ring Chain"
        },
        brakes: {
          "Front Brake": "300 mm Fixed Disc with 4-Piston Radial Caliper",
          "Rear Brake": "230 mm Fixed Disc with Floating Caliper",
          "ABS": "Dual Channel Bosch ABS"
        },
        suspension: {
          "Front Suspension": "43 mm Upside Down Big Piston Forks (140mm Travel)",
          "Rear Suspension": "Gas Monoshock RSU with External Reservoir and Preload Adjustment"
        },
        dimensions: {
          "Seat Height": "790 mm",
          "Kerb Weight": "176 kg",
          "Fuel Capacity": "13 Liters",
          "Wheelbase": "1,377 mm"
        },
        electronics: {
          "Traction Control": "Switchable Electronic Traction Control",
          "Display": "Analogue Speedometer with Integrated Multi-Function LCD",
          "Lighting": "Full LED with Signature DRL Headlight"
        }
      },
      features: [
        "All-new TR-Series fuel-injected DOHC 400cc engine",
        "Exquisite Triumph fit and finish with brushed aluminum accents",
        "Plush 43mm USD big-piston front suspension",
        "Switchable Traction Control and Dual-Channel ABS",
        "Torque-assist clutch for effortless traffic maneuvering",
        "Signature upswept twin-skin stainless steel silencer"
      ]
    },

    {
      id: "re-himalayan-450",
      brand: "Royal Enfield",
      brandId: "royal-enfield",
      model: "Himalayan 450",
      tagline: "Built by the Himalayas",
      category: "adventure",
      categoryName: "Adventure",
      price: 285000,
      priceDisplay: "₹2.85 Lakh",
      engine: "452cc",
      engineType: "Single-Cylinder, Liquid-Cooled, 4-Valve, DOHC Sherpa 450",
      displacement: "452 cc",
      power: "40.02 PS",
      powerValue: 40.02,
      powerRpm: "@ 8,000 RPM",
      torque: "40.0 Nm",
      torqueValue: 40.0,
      torqueRpm: "@ 5,500 RPM",
      mileage: "30 km/l",
      mileageValue: 30,
      acceleration: "6.8s",
      topSpeed: "155 km/h",
      topSpeedValue: 155,
      weight: "196 kg",
      fuelCapacity: "17 L",
      transmission: "6-Speed with Assist & Slipper Clutch",
      fuelType: "Petrol",
      rating: 4.9,
      ratingCount: 1980,
      badge: "Globetrotter Choice",
      officialUrl: "https://www.royalenfield.com/in/en/motorcycles/new-himalayan/",
      description: "Royal Enfield's first-ever liquid-cooled motorcycle: the Sherpa 452 engine. Engineered for Himalayan passes with 200mm Showa USD suspension travel, 230mm ground clearance, TripperDash full Google Maps navigation, and switchable rear ABS.",
      colors: [
        { name: "Hanle Black", hex: "#1c1c1e", image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80" },
        { name: "Kamet White", hex: "#e5e7eb", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80" },
        { name: "Kaza Brown", hex: "#78350f", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" },
        { name: "Slate Himalayan Salt", hex: "#94a3b8", image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "451.65 cc",
          "Engine Type": "Sherpa 450 Liquid Cooled DOHC 4-Valve",
          "Max Power": "40.02 PS @ 8,000 rpm",
          "Max Torque": "40 Nm @ 5,500 rpm",
          "Compression Ratio": "11.5:1",
          "Fuel System": "Ride-by-Wire Electronic Throttle"
        },
        transmission: {
          "Clutch": "Wet Multi-plate Slip & Assist",
          "Gearbox": "6-Speed Constant Mesh"
        },
        brakes: {
          "Front Brake": "320 mm Ventilated Disc with Hydraulic Caliper",
          "Rear Brake": "270 mm Ventilated Disc with Hydraulic Caliper",
          "ABS": "Dual Channel with Switchable Rear Wheel ABS"
        },
        suspension: {
          "Front Suspension": "Showa 43 mm Upside Down Separate Function Forks (200mm Travel)",
          "Rear Suspension": "Linkage Type Monoshock (200mm Travel)"
        },
        dimensions: {
          "Wheelbase": "1,510 mm",
          "Ground Clearance": "230 mm",
          "Seat Height": "825 mm (Adjustable to 805mm - 845mm)",
          "Kerb Weight": "196 kg",
          "Fuel Tank": "17 Liters",
          "Front Wheel": "21-inch Spoke Wheel (90/90-21)",
          "Rear Wheel": "17-inch Spoke Wheel (140/80-17)"
        },
        electronics: {
          "Display": "4-inch Round Full Color TFT TripperDash with Google Maps Full Screen Casting",
          "Riding Modes": "Performance & Eco Modes (with ABS On/Off)",
          "USB Port": "Type-C Fast Charging Port"
        }
      },
      features: [
        "Revolutionary 452cc liquid-cooled Sherpa 450 engine delivering 40 PS",
        "World's first 4-inch round TFT screen with full Google Maps mirroring",
        "Massive 200mm Showa USD suspension travel front and rear",
        "Rally-grade 21-inch front and 17-inch rear cross-spoke wheels",
        "Huge 17-liter fuel tank for over 450 km of uninterrupted adventure range",
        "Switchable Rear ABS mode for controlled dirt sliding"
      ]
    },

    {
      id: "hero-xpulse-200-4v",
      brand: "Hero",
      brandId: "hero",
      model: "XPulse 200 4V Pro",
      tagline: "Make New Tracks",
      category: "adventure",
      categoryName: "Adventure",
      price: 153000,
      priceDisplay: "₹1.53 Lakh",
      engine: "199.6cc",
      engineType: "Oil-Cooled, 4-Stroke, 4-Valve Single Cylinder OHC",
      displacement: "199.6 cc",
      power: "19.1 PS",
      powerValue: 19.1,
      powerRpm: "@ 8,500 RPM",
      torque: "17.35 Nm",
      torqueValue: 17.35,
      torqueRpm: "@ 6,500 RPM",
      mileage: "40 km/l",
      mileageValue: 40,
      acceleration: "12.5s",
      topSpeed: "120 km/h",
      topSpeedValue: 120,
      weight: "159 kg",
      fuelCapacity: "13 L",
      transmission: "5-Speed Constant Mesh",
      fuelType: "Petrol (OBD-2 / E20)",
      rating: 4.7,
      ratingCount: 2410,
      badge: "Trail Conquering Value",
      officialUrl: "https://www.heromotocorp.com/en-in/motorcycles/adventure/xpulse-200-4v.html",
      description: "The most accessible and capable dual-sport off-roader in the market. Featuring Dakar rally suspension travel, 270mm ground clearance on the Pro edition, high-mounted upswept exhaust, and 3 ABS terrain modes.",
      colors: [
        { name: "Rally Edition White / Red", hex: "#dc2626", image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80" },
        { name: "Matte Nexus Blue", hex: "#1d4ed8", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" },
        { name: "Techno Blue", hex: "#0284c7", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "199.6 cc",
          "Max Power": "19.1 PS @ 8,500 rpm",
          "Max Torque": "17.35 Nm @ 6,500 rpm",
          "Valves": "4 Valves per Cylinder",
          "Cooling": "Oil Cooled with Radiator"
        },
        transmission: {
          "Gearbox": "5-Speed Constant Mesh",
          "Clutch": "Multi-plate Wet"
        },
        brakes: {
          "Front Brake": "276 mm Petal Disc with Single Channel ABS",
          "Rear Brake": "220 mm Petal Disc",
          "ABS Modes": "Road, Off-Road, Rally"
        },
        suspension: {
          "Front Suspension": "Telescopic Forks with 250mm Stroke (Fully Adjustable Compression & Rebound on Pro)",
          "Rear Suspension": "Rectangular Swingarm with 10-step Preload Monoshock (220mm Travel)"
        },
        dimensions: {
          "Ground Clearance": "270 mm (Pro)",
          "Seat Height": "891 mm (Pro) / 825 mm (Standard)",
          "Kerb Weight": "159 kg",
          "Fuel Tank": "13 Liters"
        },
        electronics: {
          "Display": "Full LCD with Bluetooth Turn-by-Turn Navigation",
          "Headlamp": "Class-D Projector LED Headlamp with DRL",
          "USB": "Underseat USB Fast Charger"
        }
      },
      features: [
        "Massive 270mm ground clearance for extreme rock crawling",
        "Fully adjustable rally-spec suspension with 250mm front travel",
        "3 ABS modes: Road, Off-Road, and Rally",
        "Spoke wheels: 21-inch front and 18-inch rear with knobby dual-purpose tires",
        "Bluetooth connectivity with call alerts and turn-by-turn navigation",
        "Standard knuckle guards and aluminum bash plate engine protector"
      ]
    },

    {
      id: "ola-roadster-pro",
      brand: "Ola Electric",
      brandId: "ola",
      model: "Roadster Pro",
      tagline: "Hyper-Performance EV Future",
      category: "electric",
      categoryName: "Electric",
      price: 249999,
      priceDisplay: "₹2.50 Lakh",
      engine: "52 kW Electric Motor",
      engineType: "Interior Permanent Magnet (IPM) Liquid-Cooled Motor",
      displacement: "16 kWh Battery",
      power: "70.7 PS",
      powerValue: 70.7,
      powerRpm: "Peak Output",
      torque: "105.0 Nm",
      torqueValue: 105.0,
      torqueRpm: "@ 0 RPM (Instant)",
      mileage: "579 km IDC Range",
      mileageValue: 579,
      acceleration: "1.9s",
      topSpeed: "194 km/h",
      topSpeedValue: 194,
      weight: "172 kg",
      fuelCapacity: "16 kWh Li-Ion",
      transmission: "Single-Speed Direct Drive with Reverse Mode",
      fuelType: "Electric (Liquid-Cooled Battery Pack)",
      rating: 4.8,
      ratingCount: 1380,
      badge: "Electric Superbike",
      officialUrl: "https://www.olaelectric.com/roadster-pro",
      description: "The flagship Ola Roadster Pro redefines what electric motorcycles are capable of. Featuring an astonishing 52 kW peak motor, 16 kWh liquid-cooled battery pack, 194 km/h top speed, ADAS Level 2 safety, and a 10-inch capacitive touchscreen.",
      colors: [
        { name: "Liquid Silver", hex: "#cbd5e1", image: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=1200&q=80" },
        { name: "Cyberpunk Cyber Black", hex: "#09090b", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80" },
        { name: "Electric Crimson", hex: "#ef4444", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Motor Type": "52 kW IPM Liquid-Cooled Motor",
          "Peak Power": "70.7 PS (52 kW)",
          "Peak Torque": "105 Nm @ 0 RPM",
          "Battery Capacity": "16 kWh High-Energy Lithium-Ion Pack",
          "Certified IDC Range": "579 km on Single Charge",
          "Fast Charging": "10% to 80% in 35 mins via Hypercharger"
        },
        transmission: {
          "Type": "Direct Drive with Intelligent Electronic Gear Simulation",
          "Modes": "Eco, Normal, Sport, Hyper, Track"
        },
        brakes: {
          "Front Brake": "Dual 320 mm Discs with Brembo Radial Calipers",
          "Rear Brake": "240 mm Disc with Regenerative Braking System",
          "ABS": "Cornering ABS with Dynamic Brake Force Distribution"
        },
        suspension: {
          "Front Suspension": "Inverted USD Telescopic Forks",
          "Rear Suspension": "Link-type Monoshock with Preload Adjustment"
        },
        dimensions: {
          "Ground Clearance": "180 mm",
          "Seat Height": "800 mm",
          "Kerb Weight": "172 kg"
        },
        electronics: {
          "Display": "10.0-inch 2K Touchscreen Console running MoveOS 5",
          "ADAS": "Level 2 ADAS: Adaptive Cruise, Blind Spot Detection & Collision Warning",
          "Connectivity": "5G eSIM, Wi-Fi, OTA Software Updates, Krutrim AI Voice Assistant"
        }
      },
      features: [
        "Mind-bending 0 to 100 km/h acceleration in just 1.9 seconds",
        "Massive 579 km certified IDC range with 16 kWh battery pack",
        "10-inch 2K Touchscreen display with built-in Krutrim AI",
        "Level 2 ADAS with Adaptive Cruise Control and Collision Warning",
        "Four synthetic electronic sound profiles simulating superbike exhaust notes",
        "Hypercharger fast charging adding 100 km range in under 8 minutes"
      ]
    },

    {
      id: "ducati-panigale-v2",
      brand: "Ducati",
      brandId: "ducati",
      model: "Panigale V2",
      tagline: "The Red Essence of Speed",
      category: "sports",
      categoryName: "Sports",
      price: 2068000,
      priceDisplay: "₹20.68 Lakh",
      engine: "955cc",
      engineType: "Superquadro L-Twin Cylinder, 4-Valves per Cylinder, Desmodromic",
      displacement: "955 cc",
      power: "155.0 PS",
      powerValue: 155.0,
      powerRpm: "@ 10,750 RPM",
      torque: "104.0 Nm",
      torqueValue: 104.0,
      torqueRpm: "@ 9,000 RPM",
      mileage: "16 km/l",
      mileageValue: 16,
      acceleration: "3.2s",
      topSpeed: "270 km/h",
      topSpeedValue: 270,
      weight: "176 kg",
      fuelCapacity: "17 L",
      transmission: "6-Speed with Ducati Quick Shift (DQS) Up/Down EVO 2",
      fuelType: "Petrol (High Octane 98)",
      rating: 5.0,
      ratingCount: 650,
      badge: "Italian Superbike",
      officialUrl: "https://www.ducati.com/in/en/bikes/panigale/panigale-v2",
      description: "A masterwork of Italian aerodynamic art and racing pedigree. Powered by the 955cc Superquadro L-twin engine in an aluminum monocoque chassis, Showa BPF front forks, single-sided aluminum swingarm, and 6-axis Bosch IMU electronics.",
      colors: [
        { name: "Ducati Red", hex: "#cc0000", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80" },
        { name: "Black on Black", hex: "#111111", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80" },
        { name: "Star White Silk", hex: "#f8fafc", image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "955 cc",
          "Engine Architecture": "Superquadro 90-degree V2 Desmodromic",
          "Max Power": "155 PS @ 10,750 rpm",
          "Max Torque": "104 Nm @ 9,000 rpm",
          "Cooling": "Liquid Cooled"
        },
        transmission: {
          "Clutch": "Hydraulically Controlled Slipper Clutch",
          "Quickshifter": "Ducati Quick Shift (DQS) Up/Down EVO 2",
          "Gearbox": "6-Speed"
        },
        brakes: {
          "Front Brake": "Dual 320 mm Semi-Floating Discs with Radially Mounted Brembo Monobloc M4.32 Calipers",
          "Rear Brake": "245 mm Disc with 2-Piston Caliper",
          "ABS": "Bosch Cornering ABS EVO"
        },
        suspension: {
          "Front Suspension": "Fully Adjustable 43 mm Showa Big Piston Fork (BPF)",
          "Rear Suspension": "Fully Adjustable Sachs Monoshock on Aluminum Single-Sided Swingarm"
        },
        dimensions: {
          "Chassis": "Monocoque Aluminum",
          "Dry Weight": "176 kg",
          "Seat Height": "840 mm",
          "Fuel Capacity": "17 Liters"
        },
        electronics: {
          "Display": "4.3-inch Color TFT Display",
          "Safety Package": "Cornering ABS EVO, Ducati Traction Control (DTC) EVO 2, Wheelie Control (DWC) EVO, Engine Brake Control (EBC) EVO"
        }
      },
      features: [
        "155 PS Desmodromic 955cc Superquadro V2 Powerplant",
        "Exotic die-cast aluminum single-sided swingarm",
        "Compact aluminum monocoque chassis integrating airbox",
        "Brembo M4.32 monobloc front calipers for explosive braking power",
        "Full electronic suite with 6-axis Bosch IMU and DQS EVO 2 quickshifter",
        "Sensational dual-layer aerodynamic fairing with integrated ram-air ducts"
      ]
    },

    {
      id: "bmw-r-1250-gs",
      brand: "BMW Motorrad",
      brandId: "bmw",
      model: "R 1250 GS Adventure",
      tagline: "Unstoppable Global Explorer",
      category: "adventure",
      categoryName: "Adventure",
      price: 2250000,
      priceDisplay: "₹22.50 Lakh",
      engine: "1254cc",
      engineType: "Air/Liquid-Cooled 4-Stroke Boxer Twin with BMW ShiftCam",
      displacement: "1254 cc",
      power: "136.0 PS",
      powerValue: 136.0,
      powerRpm: "@ 7,750 RPM",
      torque: "143.0 Nm",
      torqueValue: 143.0,
      torqueRpm: "@ 6,250 RPM",
      mileage: "21 km/l",
      mileageValue: 21,
      acceleration: "3.6s",
      topSpeed: "205 km/h",
      topSpeedValue: 205,
      weight: "268 kg",
      fuelCapacity: "30 L",
      transmission: "6-Speed with Shaft Drive (Cardan)",
      fuelType: "Petrol (Super Unleaded)",
      rating: 5.0,
      ratingCount: 1470,
      badge: "Ultimate World Tourer",
      officialUrl: "https://www.bmw-motorrad.in/en/models/adventure/r1250gsadventure.html",
      description: "The undisputed king of around-the-world overland expeditions. Equipped with the iconic 1254cc ShiftCam boxer twin engine, maintenance-free shaft drive, massive 30-liter fuel tank, Telelever front suspension, and Dynamic ESA electronic damping.",
      colors: [
        { name: "Rallye Style Lightwhite / Racing Blue", hex: "#1e40af", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" },
        { name: "Triple Black", hex: "#18181b", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80" },
        { name: "Ice Grey", hex: "#d1d5db", image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80" }
      ],
      gallery: {
        hero: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        front: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        side: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        rear: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        dashboard: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
        detail: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80"
      },
      specifications: {
        engine: {
          "Displacement": "1254 cc",
          "Engine Architecture": "Two-Cylinder 4-Stroke Boxer with Variable Valve Timing (BMW ShiftCam)",
          "Max Power": "136 PS @ 7,750 rpm",
          "Max Torque": "143 Nm @ 6,250 rpm",
          "Cooling": "Precision Air/Liquid Cooling"
        },
        transmission: {
          "Clutch": "Wet Multi-Plate with Anti-Hopping",
          "Final Drive": "Shaft Drive (Cardan) - Zero Chain Maintenance",
          "Gearbox": "6-Speed Helical Synchromesh"
        },
        brakes: {
          "Front Brake": "Dual 305 mm Floating Discs with 4-Piston Radial Calipers",
          "Rear Brake": "Single 276 mm Disc with 2-Piston Floating Caliper",
          "ABS": "BMW Motorrad Integral ABS Pro (Cornering Optimized)"
        },
        suspension: {
          "Front Suspension": "BMW Telelever (Central Spring Strut with 210mm Travel)",
          "Rear Suspension": "Cast Aluminum Single-Sided Swingarm with BMW Paralever & Dynamic ESA (220mm Travel)"
        },
        dimensions: {
          "Seat Height": "890 mm / 910 mm",
          "Kerb Weight": "268 kg",
          "Fuel Capacity": "30 Liters (600+ km Range)",
          "Wheels": "Cross-Spoke Tubeless Wheels (120/70 R19 Front, 170/60 R17 Rear)"
        },
        electronics: {
          "Display": "6.5-inch Full Color TFT Connectivity Display",
          "Suspension Control": "Dynamic ESA (Electronic Suspension Adjustment with Auto Load Leveling)",
          "Riding Modes": "Eco, Rain, Road, Dynamic Pro, Enduro, Enduro Pro",
          "Lighting": "Full LED Adaptive Headlight with Swivelling Curve Light"
        }
      },
      features: [
        "Legendary 1254cc ShiftCam Boxer Engine with 143 Nm of torque",
        "Maintenance-free Cardan shaft drive system",
        "Enormous 30-liter aluminum fuel tank offering over 600 km endurance",
        "BMW Telelever & Paralever suspension eliminating front dive under heavy braking",
        "Dynamic ESA self-leveling electronic semi-active suspension",
        "Adaptive LED Headlamp that swivels directly into corners at night"
      ]
    }
  ],

  // Accessories Catalog
  accessories: [
    {
      id: "acc-helmet-carbon",
      name: "AeroPro Carbon Track Helmet",
      category: "Helmets",
      price: 24999,
      priceDisplay: "₹24,999",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
      description: "ECE 22.06 & DOT certified ultra-lightweight 100% 3K carbon-fiber full-face helmet with Pinlock 120 anti-fog visor and aerodynamic wind-tunnel spoiler.",
      specs: ["Weight: 1,280g", "Material: 3K Carbon Fiber", "Safety: ECE 22.06 / DOT", "Visor: Pinlock 120 Ready"]
    },
    {
      id: "acc-jacket-allweather",
      name: "Cordura All-Weather Touring Jacket",
      category: "Jackets",
      price: 14500,
      priceDisplay: "₹14,500",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
      description: "Heavy-duty 600D Cordura textile jacket with CE Level 2 armor at shoulders, elbows, and spine, thermal liner, and waterproof rain membrane.",
      specs: ["Material: 600D Cordura + Ripstop", "Armor: CE Level 2 SAS-TEC", "Waterproofing: 10,000mm Reissa", "Ventilation: 6 Zipper Vents"]
    },
    {
      id: "acc-gloves-racing",
      name: "Apex Gauntlet Leather Gloves",
      category: "Gloves",
      price: 5499,
      priceDisplay: "₹5,499",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80",
      description: "Full-grain goat leather gauntlet gloves with carbon-fiber knuckle sliders, scaphoid palm protection, and touchscreen sensitive fingertips.",
      specs: ["Material: Full-grain Goat Leather", "Sliders: Carbon-Fiber / TPU", "Touchscreen: Index & Thumb", "Stitch: Kevlar High Tensile"]
    },
    {
      id: "acc-boots-adventure",
      name: "Enduro Waterproof Adventure Boots",
      category: "Boots",
      price: 18999,
      priceDisplay: "₹18,999",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=600&q=80",
      description: "Rugged oiled leather dual-sport adventure boots with Vibram anti-slip lugged sole, reinforced steel shank, and aluminum cam buckles.",
      specs: ["Height: Full Shin Height", "Sole: Vibram Lugged Grip", "Waterproof: Drytex Breathable Membrane", "Closure: 3 Aluminum Cam Buckles"]
    },
    {
      id: "acc-phone-mount",
      name: "Vibration Dampening CNC Phone Mount",
      category: "Tech & Mounts",
      price: 3200,
      priceDisplay: "₹3,200",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
      description: "Aircraft-grade 6061 CNC aluminum phone cradle with integrated dual-elastomer vibration dampeners protecting smartphone optical image sensors (OIS).",
      specs: ["Material: 6061-T6 Billet Aluminum", "Dampening: Dual Silicone Bushings", "Phone Size: 4.7\" to 7.2\"", "Mounting: 22mm / 28mm / 32mm Bars"]
    },
    {
      id: "acc-saddlebags-touring",
      name: "Drypack 50L Waterproof Saddlebags",
      category: "Luggage",
      price: 8900,
      priceDisplay: "₹8,900",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
      description: "100% waterproof heavy-gauge PVC roll-top throw-over saddlebags with quick-release buckles and reflective 3M visibility stripes.",
      specs: ["Capacity: 2x 25L (50L Total)", "Waterproofing: IPX6 Submersible", "Mounting: Universal Fit Straps", "Heat Shield: Anti-Exhaust Base"]
    },
    {
      id: "acc-bike-cover",
      name: "Heavy-Duty All-Weather Bike Armor Cover",
      category: "Protection",
      price: 2499,
      priceDisplay: "₹2,499",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=600&q=80",
      description: "300D Oxford polyester waterproof UV-resistant cover with heat-resistant exhaust lining and reinforced lock holes.",
      specs: ["Fabric: 300D Oxford PU 3000mm", "Heat Shield: Up to 300°C", "Security: Dual Brass Grommets", "Wind Lock: Center Buckle Strap"]
    },
    {
      id: "acc-riding-goggles",
      name: "Outlaw MX Anti-Scratch Riding Goggles",
      category: "Helmets",
      price: 2899,
      priceDisplay: "₹2,899",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=600&q=80",
      description: "Wide-field tinted Lexan lens goggles with triple-layer moisture-wicking face foam and silicone beaded strap for helmet grip.",
      specs: ["Lens: Anti-Fog / Anti-Scratch UV400", "Foam: Triple Density Fleece", "Strap: 45mm Silicone Lined", "Tear-off Ready: Yes"]
    }
  ],

  // Marketing Offers with Real Countdown Timers
  offers: [
    {
      id: "offer-service-1yr",
      title: "Complimentary 1-Year Periodic Maintenance",
      badge: "Exclusive Dealer Benefit",
      category: "Service & Maintenance",
      discount: "100% OFF LABOR & OIL",
      expiryDate: "2026-10-31T23:59:59",
      code: "MOTOX-FREE-SERVICE",
      description: "Receive free scheduled service for 12 months including engine oil replacement, oil filter, chain tensioning, and 42-point safety check with selected authorized dealerships.",
      applicableBikes: ["Yamaha R15 V4", "Triumph Speed 400", "TVS Apache RTR 310", "Hero XPulse 200 4V"],
      terms: "Valid on test-ride bookings initiated through MOTOX discovery portal at participating certified dealer partner locations."
    },
    {
      id: "offer-exchange-bonus",
      title: "Festive Mega Exchange Bonus",
      badge: "Save Up To ₹20,000",
      category: "Exchange & Upgrade",
      discount: "UP TO ₹20,000 CASH BONUS",
      expiryDate: "2026-11-15T23:59:59",
      code: "MOTOX-EXCHANGE-20K",
      description: "Trade in any 2-wheeler of any age/brand and get an additional appraisal bonus up to ₹20,000 over market value when upgrading to high-performance machines.",
      applicableBikes: ["KTM 390 Duke", "Royal Enfield Himalayan 450", "Kawasaki Ninja 500", "Honda CB650R"],
      terms: "Subject to physical vehicle inspection and title verification at official OEM retail touchpoints."
    },
    {
      id: "offer-low-interest",
      title: "Subsidized 5.99% Low-Rate Super Finance",
      badge: "Zero Processing Fee",
      category: "Finance & EMI",
      discount: "5.99% INTEREST RATE",
      expiryDate: "2026-10-25T23:59:59",
      code: "MOTOX-FINANCE-599",
      description: "Partner banking finance scheme offering attractive interest rates starting from 5.99% per annum with flexible tenures from 12 to 60 months and instant digital approval.",
      applicableBikes: ["All Motorcycle Models Cataloged"],
      terms: "Loan sanctions subject to credit score evaluation by partner financial institutions."
    },
    {
      id: "offer-gear-voucher",
      title: "Free Premium Track Riding Gear Kit",
      badge: "Worth ₹15,000",
      category: "Riding Gear",
      discount: "FREE GEAR WORTH ₹15,000",
      expiryDate: "2026-10-18T23:59:59",
      code: "MOTOX-TRACK-GEAR",
      description: "Get an exclusive ECE 22.06 certified carbon helmet or armored Cordura jacket complimentary upon booking test-drives and purchasing flagship supersports.",
      applicableBikes: ["Ducati Panigale V2", "BMW R 1250 GS", "Kawasaki Ninja 500", "Honda CB650R"],
      terms: "Applicable on premium 400cc+ motorcycles during promotional window."
    }
  ],

  // Articles & Editorial Guides
  articles: [
    {
      id: "art-how-to-choose-first-bike",
      title: "How to Choose Your First Motorcycle: The Definitive Beginner's Guide",
      category: "Beginner Guides",
      readTime: "6 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      summary: "Selecting your first motorcycle is about balance: manageable power delivery, ergonomic confidence, accessible seat height, and low maintenance costs.",
      content: `
        <p>Stepping into the world of motorcycling is one of the most exhilarating decisions you will ever make. However, walking into a showroom without a clear understanding of engine displacement, chassis dynamics, and ergonomics can lead to buying a machine that is either intimidating or rapidly outgrown.</p>
        
        <h3>1. Engine Size and Power Characteristics</h3>
        <p>For beginners, modern 150cc to 400cc single-cylinder machines offer the sweetest spot. A bike like the <strong>Yamaha R15 V4</strong> or <strong>Triumph Speed 400</strong> delivers linear, predictable throttle response without sudden wheel-lifting power spikes, while still providing highway cruising capability.</p>

        <h3>2. Seat Height and Ergonomics</h3>
        <p>Being able to plant both feet flat on the tarmac when stopped builds immense confidence in heavy traffic. Look for seat heights between 780mm and 805mm if you are under 5'8", or dual-sport heights of 825mm+ if you are taller.</p>

        <h3>3. Essential Safety Electronics</h3>
        <p>Never compromise on <strong>Dual-Channel ABS</strong>. Anti-lock brakes prevent front wheel lockups during sudden emergency panic stops in wet or gravelly conditions, saving you from the most common beginner crashes.</p>
      `
    },
    {
      id: "art-sports-vs-naked",
      title: "Sports vs Naked Motorcycles: Aerodynamics, Ergonomics & Real-World Use",
      category: "Performance",
      readTime: "8 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      summary: "Full fairing supersport or aggressive naked streetfighter? We break down aerodynamic wind protection against upright daily comfort.",
      content: `
        <p>Should you buy a fully faired supersport like the Kawasaki Ninja 500 or an aggressive streetfighter like the KTM 390 Duke? Both share rapid acceleration, but their riding postures dictate completely different ownership experiences.</p>

        <h3>Aerodynamics at High Speed</h3>
        <p>Faired sports bikes channel oncoming gale force winds around the rider's helmet and shoulders, reducing chest fatigue above 110 km/h. Naked motorcycles, lacking windshields, expose your torso to direct airflow which acts as a natural speed limiter.</p>

        <h3>City Maneuverability & Pillion Comfort</h3>
        <p>Naked bikes feature wide one-piece handlebars providing superior leverage for flicking through gridlocked urban traffic. Clip-on handlebars on supersports force a forward-leaning wrist posture that can cause wrist fatigue during stop-and-go commuting.</p>
      `
    },
    {
      id: "art-touring-motorcycles",
      title: "Best Motorcycle Types for Long-Distance Touring Across Continents",
      category: "Touring",
      readTime: "7 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80",
      summary: "Explore the crucial differences between Adventure Tourers, Modern Classic Cruisers, and Sport Tourers for 1,000km+ highway journeys.",
      content: `
        <p>Cross-country motorcycle touring demands endurance from both rider and machine. Adventure motorcycles like the <strong>Royal Enfield Himalayan 450</strong> and <strong>BMW R 1250 GS</strong> have become the dominant choice for globetrotters.</p>

        <h3>Why ADVs Dominate the Touring Market</h3>
        <p>With long-travel 200mm suspension systems, large 19-to-21 inch front wheels, 17-to-30 liter fuel tanks, and commanding upright visibility, adventure tourers conquer broken mountain tarmac, deep gravel trails, and endless interstate highways effortlessly.</p>
      `
    },
    {
      id: "art-understanding-engines",
      title: "Understanding Motorcycle Engines: Singles, Twins, Triples & Inline-Fours",
      category: "Motorcycle Technology",
      readTime: "9 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      summary: "From low-end single-cylinder thumping torque to screaming 14,000 RPM inline-four symphonies, learn how engine cylinder configurations define bike soul.",
      content: `
        <p>The firing order, crankshaft balance, and cylinder configuration of an engine define the motorcycle's emotional personality and power delivery curve.</p>

        <h3>Single Cylinder (Thumpers)</h3>
        <p>Lightweight, torquey at low RPMs, and cheap to service. Perfect for city agility and trail riding (e.g. KTM 390 Duke, RE Classic 350).</p>

        <h3>Parallel-Twin & V-Twin</h3>
        <p>Balanced vibration, wide usable torque band, and rapid mid-range overtaking pull without extreme engine weight (e.g. Ninja 500, Panigale V2).</p>

        <h3>Inline-Four</h3>
        <p>Silky smooth at idle with a screaming, turbine-like high-revving top-end rush reaching 12,000+ RPM (e.g. Honda CB650R).</p>
      `
    },
    {
      id: "art-suspension-works",
      title: "How Motorcycle Suspension Works: USD Forks, Monoshocks & Preload Tuning",
      category: "Motorcycle Technology",
      readTime: "6 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
      summary: "Demystifying rebound, compression damping, sag setup, and why upside-down (USD) forks transform cornering confidence.",
      content: `
        <p>Your motorcycle's suspension is the only component keeping your contact patch glued to the road over bumps, braking dives, and mid-corner ripples.</p>

        <h3>Upside Down (USD) vs Conventional Telescopic Forks</h3>
        <p>USD forks place the thicker outer slider tubes at the top clamped into the triple tree, drastically reducing flex under hard braking and lowering unsprung mass for faster wheel reaction times.</p>
      `
    },
    {
      id: "art-electric-motorcycles",
      title: "Electric Motorcycles Explained: Instant Torque, Battery Chemistry & Charging",
      category: "EV Motorcycles",
      readTime: "7 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1558981854-325087796d88?auto=format&fit=crop&w=800&q=80",
      summary: "No gears, no clutch, 100% peak torque from 0 RPM. Discover how liquid-cooled battery packs and regenerative braking are reshaping motorcycling.",
      content: `
        <p>The dawn of high-voltage electric motorcycles like the <strong>Ola Roadster Pro</strong> delivers performance figures that challenge liter-class supercars: 0-100 km/h in under 2 seconds without changing a single gear.</p>

        <h3>The Magic of Flat Torque Curves</h3>
        <p>Electric motors deliver maximum rotational torque at 0 RPM immediately upon throttle tip-in, giving lightning fast roll-on acceleration that ICE engines need multiple downshifts to replicate.</p>
      `
    }
  ]
};

// Global helper methods
window.MOTOX_DATA = MOTOX_DATA;

function getBikeById(id) {
  return MOTOX_DATA.bikes.find(b => b.id === id) || null;
}

function getBrandById(id) {
  return MOTOX_DATA.brands.find(b => b.id === id) || null;
}

function getCategoryById(id) {
  return MOTOX_DATA.categories.find(c => c.id === id) || null;
}

function getArticleById(id) {
  return MOTOX_DATA.articles.find(a => a.id === id) || null;
}
