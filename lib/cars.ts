export interface Car {
  id: number;
  make: string;
  models: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    make: "Abarth",
    models: ["500", "Grande Punto", "Punto Evo", "500C", "695", "Punto"],
  },
  {
    id: 2,
    make: "Alfa Romeo",
    models: [
      "155",
      "156",
      "159",
      "164",
      "145",
      "147",
      "146",
      "Gtv",
      "Spider",
      "166",
      "Gt",
      "Crosswagon",
      "Brera",
      "90",
      "75",
      "33",
      "Giulietta",
      "Sprint",
      "Mito",
    ],
  },
  { id: 3, make: "Aro", models: ["Expander", "10", "24", "Dacia"] },
  { id: 4, make: "Asia", models: ["Rocsta"] },
  { id: 5, make: "Asia Motors", models: ["Rocsta"] },
  {
    id: 6,
    make: "Aston Martin",
    models: [
      "DB7",
      "V8",
      "Db9",
      "Vanquish",
      "V8 Vantage",
      "Vantage",
      "DBS",
      "Volante",
      "Virage",
      "Vantage V8",
      "Vantage V12",
      "Rapide",
      "Cygnet",
    ],
  },
  {
    id: 7,
    make: "Audi",
    models: [
      "80",
      "A4",
      "A6",
      "S6",
      "Coupe",
      "S2",
      "RS2",
      "A8",
      "Cabriolet",
      "S8",
      "A3",
      "S4",
      "Tt",
      "S3",
      "Allroad Quattro",
      "RS4",
      "A2",
      "RS6",
      "Q7",
      "R8",
      "A5",
      "S5",
      "V8",
      "200",
      "100",
      "90",
      "Tts",
      "Q5",
      "A4 Allroad Quattro",
      "TT RS",
      "RS5",
      "A1",
      "A7",
      "Rs3",
      "Q3",
      "A6 Allroad Quattro",
      "S7",
      "SQ5",
    ],
  },
  {
    id: 8,
    make: "Austin",
    models: ["Mini", "Montego", "Maestro", "Metro", "Mini Moke"],
  },
  { id: 9, make: "Auverland", models: ["Diesel"] },
  {
    id: 10,
    make: "Bentley",
    models: [
      "Brooklands",
      "Turbo",
      "Continental",
      "Azure",
      "Arnage",
      "Continental GT",
      "Continental Flying Spur",
      "Turbo R",
      "Mulsanne",
      "Eight",
      "Continental Gtc",
      "Continental Supersports",
    ],
  },
  { id: 11, make: "Bertone", models: ["Freeclimber Diesel"] },
  {
    id: 12,
    make: "BMW",
    models: [
      "Serie 3",
      "Serie 5",
      "Compact",
      "Serie 7",
      "Serie 8",
      "Z3",
      "Z4",
      "Z8",
      "X5",
      "Serie 6",
      "X3",
      "Serie 1",
      "Z1",
      "X6",
      "X1",
    ],
  },
  {
    id: 13,
    make: "Cadillac",
    models: [
      "Seville",
      "STS",
      "El Dorado",
      "CTS",
      "XLR",
      "SRX",
      "Escalade",
      "BLS",
    ],
  },
  {
    id: 14,
    make: "Chevrolet",
    models: [
      "Corvette",
      "Blazer",
      "Astro",
      "Nubira",
      "Evanda",
      "Trans Sport",
      "Camaro",
      "Matiz",
      "Alero",
      "Tahoe",
      "Tacuma",
      "Trailblazer",
      "Kalos",
      "Aveo",
      "Silverado 1500",
      "Lacetti",
      "Epica",
      "Captiva",
      "Hhr",
      "Cruze",
      "Spark",
      "Orlando",
      "Volt",
      "Malibu",
      "Corsa"
    ],
  },
  {
    id: 15,
    make: "Chrysler",
    models: [
      "Vision",
      "300M",
      "Grand Voyager",
      "Viper",
      "Neon",
      "Voyager",
      "Stratus",
      "Sebring",
      "Sebring 200C",
      "New Yorker",
      "Pt Cruiser",
      "Crossfire",
      "300C",
      "Le Baron",
      "Saratoga",
    ],
  },
  {
    id: 16,
    make: "Citroen",
    models: [
      "Xantia",
      "XM",
      "AX",
      "ZX",
      "Evasion",
      "C8",
      "Saxo",
      "C2",
      "Xsara",
      "C4",
      "Xsara Picasso",
      "C5",
      "C3",
      "C3 Pluriel",
      "C1",
      "C6",
      "Grand C4 Picasso",
      "C4 Picasso",
      "Ccrosser",
      "C15",
      "Jumper",
      "Jumpy",
      "Berlingo",
      "BX",
      "C25",
      "CX",
      "Gsa",
      "Visa",
      "LNA",
      "2CV",
      "Nemo",
      "C4 Sedan",
      "Berlingo First",
      "C3 Picasso",
      "DS3",
      "Czero",
      "DS4",
      "DS5",
      "C4 Aircross",
      "Celysee",
    ],
  },
  { id: 17, make: "Corvette", models: ["Corvette"] },
  {
    id: 18,
    make: "Dacia",
    models: ["Contac", "Logan", "Sandero", "Duster", "Lodgy"],
  },
  {
    id: 19,
    make: "Daewoo",
    models: [
      "Nexia",
      "Aranos",
      "Lanos",
      "Nubira",
      "Compact",
      "Nubira Compact",
      "Leganza",
      "Evanda",
      "Matiz",
      "Tacuma",
      "Kalos",
      "Lacetti",
    ],
  },
  {
    id: 20,
    make: "DAF",
    models: [
      "33",
      "44",
      "600",
      "XF",
      "55",
      "66",
      "CF",
      "XB",
      "XD",
      "Daffodil",
      "2600",
      "46",
      "750",
      "95",
      "CF 290",
      "LF",
      "MB200",
      "XG",
    ],
  },
  {
    id: 21,
    make: "Daihatsu",
    models: ["Applause", "Charade", "Rocky", "Feroza", "Terios", "Sirion"],
  },
  {
    id: 22,
    make: "Daimler",
    models: ["Serie XJ", "XJ", "Double Six", "Six", "Series III"],
  },
  {
    id: 23,
    make: "Dodge",
    models: ["Viper", "Caliber", "Nitro", "Avenger", "Journey"],
  },
  {
    id: 24,
    make: "Ferrari",
    models: [
      "F355",
      "360",
      "F430",
      "F512 M",
      "550 Maranello",
      "575m Maranello",
      "599",
      "456",
      "456m",
      "612",
      "F50",
      "Enzo",
      "Superamerica",
      "430",
      "348",
      "Testarossa",
      "512",
      "355",
      "F40",
      "412",
      "Mondial",
      "328",
      "California",
      "458",
      "FF",
    ],
  },
  {
    id: 25,
    make: "Fiat",
    models: [
      "Croma",
      "Cinquecento",
      "Seicento",
      "Punto",
      "Grande Punto",
      "Panda",
      "Tipo",
      "Coupe",
      "Uno",
      "Ulysse",
      "Tempra",
      "Marea",
      "Barchetta",
      "Bravo",
      "Stilo",
      "Brava",
      "Palio Weekend",
      "600",
      "Multipla",
      "Idea",
      "Sedici",
      "Linea",
      "500",
      "Fiorino",
      "Ducato",
      "Doblo Cargo",
      "Doblo",
      "Strada",
      "Regata",
      "Talento",
      "Argenta",
      "Ritmo",
      "Punto Classic",
      "Qubo",
      "Punto Evo",
      "500c",
      "Freemont",
      "Panda Classic",
      "500L",
    ],
  },
  {
    id: 26,
    make: "Ford",
    models: [
      "Maverick",
      "Escort",
      "Focus",
      "Mondeo",
      "Scorpio",
      "Fiesta",
      "Probe",
      "Explorer",
      "Escape",
      "Galaxy",
      "Ka",
      "Puma",
      "Cougar",
      "Focus Cmax",
      "Fusion",
      "Streetka",
      "Cmax",
      "Smax",
      "Transit",
      "Courier",
      "Ranger",
      "Sierra",
      "Orion",
      "Pick Up",
      "Capri",
      "Granada",
      "Kuga",
      "Grand Cmax",
      "Bmax",
      "Tourneo Custom",
    ],
  },
  { id: 27, make: "Galloper", models: ["Exceed", "Santamo", "Super Exceed"] },
  {
    id: 28,
    make: "GMC",
    models: [
      "Canyon",
      "Envoy",
      "Jimmy",
      "Savana",
      "Sierra 1500",
      "Sierra 2500HD",
      "Sierra 3500HD",
      "Yukon XL",
      "Terrain",
      "Yukón",
    ],
  },
  {
    id: 29,
    make: "Honda",
    models: [
      "Accord",
      "Civic",
      "CRX",
      "Prelude",
      "NSX",
      "Legend",
      "CRV",
      "HRV",
      "Logo",
      "S2000",
      "Stream",
      "Jazz",
      "FRV",
      "Concerto",
      "Insight",
      "CRZ",
    ],
  },
  { id: 30, make: "Hummer", models: ["H2", "H3", "H3T"] },
  {
    id: 31,
    make: "Hyundai",
    models: [
      "Lantra",
      "Sonata",
      "Elantra",
      "Accent",
      "Scoupe",
      "Coupe",
      "Atos",
      "H1",
      "Atos Prime",
      "XG",
      "Trajet",
      "Santa Fe",
      "Terracan",
      "Matrix",
      "Getz",
      "Tucson",
      "I30",
      "Pony",
      "Grandeur",
      "I10",
      "I800",
      "Sonata FL",
      "IX55",
      "I20",
      "IX35",
      "IX20",
      "Genesis",
      "I40",
      "Veloster",
    ],
  },
  { id: 32, make: "Infiniti", models: ["G", "EX", "FX", "M"] },
  { id: 33, make: "Innocenti", models: ["Elba", "Minitre"] },
  {
    id: 34,
    make: "Isuzu",
    models: ["Trooper", "Pick Up", "D Max", "Rodeo", "DMAX", "Trroper"],
  },
  { id: 35, make: "Iveco", models: ["Daily", "Massif"] },
  { id: 36, make: "Iveco-pegaso", models: ["Daily", "Duty"] },
  {
    id: 37,
    make: "Jaguar",
    models: ["Serie XJ", "Serie XK", "XJ", "Stype", "XF", "Xtype"],
  },
  {
    id: 38,
    make: "Jeep",
    models: [
      "Wrangler",
      "Cherokee",
      "Grand Cherokee",
      "Commander",
      "Compass",
      "Wrangler Unlimited",
      "Patriot",
    ],
  },
  {
    id: 39,
    make: "KIA",
    models: [
      "Sportage",
      "Sephia",
      "Sephia II",
      "Pride",
      "Clarus",
      "Shuma",
      "Carnival",
      "Joice",
      "Magentis",
      "Carens",
      "Rio",
      "Cerato",
      "Sorento",
      "Opirus",
      "Picanto",
      "Ceed",
      "Ceed Sporty Wagon",
      "Proceed",
      "K2500 Frontier",
      "K2500",
      "Soul",
      "Venga",
      "Optima",
      "Ceed Sportswagon",
    ],
  },
  {
    id: 40,
    make: "Lada",
    models: [
      "Samara",
      "Niva",
      "Sagona",
      "Stawra 2110",
      "214",
      "Kalina",
      "Serie 2100",
      "Priora",
    ],
  },
  {
    id: 41,
    make: "Lamborghini",
    models: ["Gallardo", "Murcielago", "Aventador"],
  },
  {
    id: 42,
    make: "Lancia",
    models: [
      "Delta",
      "K",
      "Y10",
      "Dedra",
      "Lybra",
      "Z",
      "Y",
      "Ypsilon",
      "Thesis",
      "Phedra",
      "Musa",
      "Thema",
      "Zeta",
      "Kappa",
      "Trevi",
      "Prisma",
      "A112",
      "Ypsilon Elefantino",
      "Voyager",
    ],
  },
  {
    id: 43,
    make: "Land-rover",
    models: [
      "Range Rover",
      "Defender",
      "Discovery",
      "Freelander",
      "Range Rover Sport",
      "Discovery 4",
      "Range Rover Evoque",
    ],
  },
  { id: 44, make: "Ldv", models: ["Maxus"] },
  {
    id: 45,
    make: "Lexus",
    models: [
      "LS400",
      "LS430",
      "GS300",
      "IS200",
      "RX300",
      "GS430",
      "GS460",
      "SC430",
      "IS300",
      "IS250",
      "Rx400h",
      "IS220d",
      "Rx350",
      "GS450h",
      "LS460",
      "LS600h",
      "LS",
      "GS",
      "IS",
      "SC",
      "RX",
      "CT",
    ],
  },
  { id: 46, make: "Lotus", models: ["Elise", "Exige"] },
  {
    id: 47,
    make: "Mahindra",
    models: ["Bolero Pickup", "Goa Pickup", "Goa", "Cj", "Pikup", "Thar"],
  },
  {
    id: 48,
    make: "Maserati",
    models: [
      "Ghibli",
      "Shamal",
      "Quattroporte",
      "3200 GT",
      "Coupe",
      "Spyder",
      "Gransport",
      "Granturismo",
      "430",
      "Biturbo",
      "228",
      "224",
      "Grancabrio",
    ],
  },
  { id: 49, make: "Maybach", models: ["Maybach"] },
  {
    id: 50,
    make: "Mazda",
    models: [
      "Xedos 6",
      "626",
      "121",
      "Xedos 9",
      "323",
      "MX3",
      "RX7",
      "MX5",
      "Mazda3",
      "MVP",
      "Demio",
      "Premacy",
      "Tribute",
      "Mazda6",
      "Mazda2",
      "RX8",
      "Mazda5",
      "CX7",
      "Serie B",
      "B2500",
      "BT50",
      "MX6",
      "929",
      "CX5",
    ],
  },
  {
    id: 51,
    make: "Mercedes-benz",
    models: [
      "CX5",
      "Clase C",
      "Clase E",
      "Clase SL",
      "Clase S",
      "Clase CL",
      "Clase G",
      "Clase SLK",
      "Clase V",
      "Viano",
      "Clase CLK",
      "Clase A",
      "Clase M",
      "Vaneo",
      "Slklasse",
      "SLR Mclaren",
      "Clase CLS",
      "Clase R",
      "Clase GL",
      "Clase B",
      "100D",
      "140D",
      "180D",
      "Sprinter",
      "Vito",
      "Transporter",
      "280",
      "220",
      "200",
      "190",
      "600",
      "400",
      "Clase SL R129",
      "300",
      "500",
      "420",
      "260",
      "230",
      "Clase CLC",
      "Clase GLK",
      "SLS AMG",
    ],
  },
  {
    id: 52,
    make: "MG",
    models: [
      "MGF",
      "TF",
      "ZR",
      "ZS",
      "ZT",
      "ZTT",
      "Mini",
      "Countryman",
      "Paceman",
    ],
  },
  { id: 53, make: "Mini", models: ["Mini", "Countryman", "Paceman"] },
  {
    id: 54,
    make: "Mitsubishi",
    models: [
      "Montero",
      "Galant",
      "Colt",
      "Space Wagon",
      "Space Runner",
      "Space Gear",
      "3000 GT",
      "Carisma",
      "Eclipse",
      "Space Star",
      "Montero Sport",
      "Montero IO",
      "Outlander",
      "Lancer",
      "Grandis",
      "L200",
      "Canter",
      "300 GT",
      "ASX",
      "Imiev",
    ],
  },
  {
    id: 55,
    make: "Morgan",
    models: ["44", "Plus 8", "Aero 8", "V6", "Roadster", "4", "Plus 4"],
  },
  {
    id: 56,
    make: "Nissan",
    models: [
      "Terrano II",
      "Terrano",
      "Micra",
      "Sunny",
      "Primera",
      "Serena",
      "Patrol",
      "Maxima QX",
      "200 SX",
      "300 ZX",
      "Patrol GR",
      "100 NX",
      "Almera",
      "Pathfinder",
      "Almera Tino",
      "Xtrail",
      "350Z",
      "Murano",
      "Note",
      "Qashqai",
      "Tiida",
      "Vanette",
      "Trade",
      "Vanette Cargo",
      "Pickup",
      "Navara",
      "Cabstar E",
      "Cabstar",
      "Maxima",
      "Camion",
      "Prairie",
      "Bluebird",
      "NP300 Pick Up",
      "Qashqai2",
      "Pixo",
      "GTR",
      "370Z",
      "Cube",
      "Juke",
      "Leaf",
      "Evalia",
      "Sentra"
    ],
  },
  {
    id: 57,
    make: "Opel",
    models: [
      "Astra",
      "Vectra",
      "Calibra",
      "Corsa",
      "Omega",
      "Frontera",
      "Tigra",
      "Monterey",
      "Sintra",
      "Zafira",
      "Agila",
      "Speedster",
      "Signum",
      "Meriva",
      "Antara",
      "GT",
      "Combo",
      "Movano",
      "Vivaro",
      "Kadett",
      "Monza",
      "Senator",
      "Rekord",
      "Manta",
      "Ascona",
      "Insignia",
      "Zafira Tourer",
      "Ampera",
      "Mokka",
      "Adam",
    ],
  },
  {
    id: 58,
    make: "Peugeot",
    models: [
      "306",
      "605",
      "106",
      "205",
      "405",
      "406",
      "806",
      "807",
      "407",
      "307",
      "206",
      "607",
      "308",
      "307 SW",
      "206 SW",
      "407 SW",
      "1007",
      "107",
      "207",
      "4007",
      "Boxer",
      "Partner",
      "J5",
      "604",
      "505",
      "309",
      "Bipper",
      "Partner Origin",
      "3008",
      "5008",
      "Rcz",
      "508",
      "Ion",
      "208",
      "4008",
    ],
  },
  { id: 59, make: "Pontiac", models: ["Trans Sport", "Firebird", "Trans AM"] },
  {
    id: 60,
    make: "Porsche",
    models: [
      "911",
      "Boxster",
      "Cayenne",
      "Carrera GT",
      "Cayman",
      "928",
      "968",
      "944",
      "924",
      "Panamera",
      "918",
    ],
  },
  {
    id: 61,
    make: "Renault",
    models: [
      "Megane",
      "Safrane",
      "Laguna",
      "Clio",
      "Twingo",
      "Nevada",
      "Espace",
      "Spider",
      "Scenic",
      "Grand Espace",
      "Avantime",
      "Vel Satis",
      "Grand Scenic",
      "Clio Campus",
      "Modus",
      "Express",
      "Trafic",
      "Master",
      "Kangoo",
      "Mascott",
      "Master Propulsion",
      "Maxity",
      "R19",
      "R25",
      "R5",
      "R21",
      "R4",
      "Alpine",
      "Fuego",
      "R18",
      "R11",
      "R9",
      "R6",
      "Grand Modus",
      "Kangoo Combi",
      "Koleos",
      "Fluence",
      "Wind",
      "Latitude",
      "Grand Kangoo Combi",
    ],
  },
  {
    id: 62,
    make: "Rolls-royce",
    models: [
      "Silver Dawn",
      "Silver Spur",
      "Park Ward",
      "Silver Seraph",
      "Corniche",
      "Phantom",
      "Touring",
      "Silvier",
    ],
  },
  {
    id: 63,
    make: "Rover",
    models: [
      "800",
      "600",
      "100",
      "200",
      "Coupe",
      "400",
      "45",
      "Cabriolet",
      "25",
      "Mini",
      "75",
      "Streetwise",
      "SD",
    ],
  },
  { id: 64, make: "Saab", models: ["900", "93", "9000", "95", "93X", "94X"] },
  {
    id: 65,
    make: "Santana",
    models: ["300", "350", "Anibal", "Anibal Pick Up"],
  },
  {
    id: 66,
    make: "Seat",
    models: [
      "Ibiza",
      "Cordoba",
      "Toledo",
      "Marbella",
      "Alhambra",
      "Arosa",
      "Leon",
      "Altea",
      "Altea XL",
      "Altea Freetrack",
      "Terra",
      "Inca",
      "Malaga",
      "Ronda",
      "Exeo",
      "MII",
    ],
  },
  {
    id: 67,
    make: "Skoda",
    models: [
      "Felicia",
      "Forman",
      "Octavia",
      "Octavia Tour",
      "Fabia",
      "Superb",
      "Roomster",
      "Scout",
      "Pickup",
      "Favorit",
      "130",
      "S",
      "Yeti",
      "Citigo",
      "Rapid",
    ],
  },
  {
    id: 68,
    make: "Smart",
    models: [
      "Smart",
      "Citycoupe",
      "Fortwo",
      "Cabrio",
      "Crossblade",
      "Roadster",
      "Forfour",
    ],
  },
  {
    id: 69,
    make: "Ssangyong",
    models: [
      "Korando",
      "Family",
      "K4D",
      "Musso",
      "Korando KJ",
      "Rexton",
      "Rexton II",
      "Rodius",
      "Kyron",
      "Actyon",
      "Sports Pick Up",
      "Actyon Sports Pick Up",
      "Kodando",
    ],
  },
  {
    id: 70,
    make: "Subaru",
    models: [
      "Ascent",
      "Legacy",
      "Impreza",
      "SVX",
      "Justy",
      "Outback",
      "Forester",
      "G3x Justy",
      "B9 Tribeca",
      "XT",
      "1800",
      "Tribeca",
      "Wrx Sti",
      "Trezia",
      "XV",
      "BRZ",
    ],
  },
  {
    id: 71,
    make: "Suzuki",
    models: [
      "Maruti",
      "Swift",
      "Vitara",
      "Baleno",
      "Samurai",
      "Alto",
      "Wagon R",
      "Jimny",
      "Grand Vitara",
      "Ignis",
      "Liana",
      "Grand Vitara Xl7",
      "SX4",
      "Splash",
      "Kizashi",
    ],
  },
  { id: 72, make: "Talbot", models: ["Samba", "Tagora", "Solara", "Horizon"] },
  {
    id: 73,
    make: "Tata",
    models: [
      "Telcosport",
      "Telco",
      "Sumo",
      "Safari",
      "Indica",
      "Indigo",
      "Grand Safari",
      "TL Pick Up",
      "Xenon Pick Up",
      "Vista",
      "Xenon",
      "Aria",
    ],
  },
  {
    id: 74,
    make: "Toyota",
    models: [
      "Carina E",
      "4runner",
      "Camry",
      "Rav4",
      "Celica",
      "Supra",
      "Paseo",
      "Land Cruiser 80",
      "Land Cruiser 100",
      "Land Cruiser",
      "Land Cruiser 90",
      "Corolla",
      "Auris",
      "Avensis",
      "Picnic",
      "Yaris",
      "Yaris Verso",
      "MR2",
      "Previa",
      "Prius",
      "Avensis Verso",
      "Corolla Verso",
      "Corolla Sedan",
      "Aygo",
      "Hilux",
      "Dyna",
      "Land Cruiser 200",
      "Verso",
      "IQ",
      "Urban Cruiser",
      "GT86",
    ],
  },
  { id: 75, make: "UMM", models: ["100", "121"] },
  {
    id: 76,
    make: "VAZ",
    models: ["214", "110 Stawra", "111 Stawra", "215", "112 Stawra"],
  },
  {
    id: 77,
    make: "Volkswagen",
    models: [
      "Passat",
      "Golf",
      "Vento",
      "Polo",
      "Corrado",
      "Sharan",
      "Lupo",
      "Bora",
      "Jetta",
      "New Beetle",
      "Phaeton",
      "Touareg",
      "Touran",
      "Multivan",
      "Caddy",
      "Golf Plus",
      "Fox",
      "Eos",
      "Caravelle",
      "Tiguan",
      "Transporter",
      "LT",
      "Taro",
      "Crafter",
      "California",
      "Santana",
      "Scirocco",
      "Passat CC",
      "Amarok",
      "Beetle",
      "UP",
      "CC",
    ],
  },
  {
    id: 78,
    make: "Volvo",
    models: [
      "440",
      "850",
      "S70",
      "V70",
      "V70 Classic",
      "940",
      "480",
      "460",
      "960",
      "S90",
      "V90",
      "Classic",
      "S40",
      "V40",
      "V50",
      "V70 XC",
      "XC70",
      "C70",
      "S80",
      "S60",
      "Xc90",
      "C30",
      "780",
      "760",
      "740",
      "240",
      "360",
      "340",
      "Xc60",
      "V60",
      "V40 Cross Country",
    ],
  },
  { id: 79, make: "Wartburg", models: ["353"] },
];
