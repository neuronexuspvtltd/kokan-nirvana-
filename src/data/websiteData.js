// Website data for Kokan Nirvana

export const BRAND_INFO = {
  name: "Kokan Nirvana",
  tagline: "Sea-Shore Property Specialist",
  legalEntity: "Kokan Nirvana Coastal Real Estate Developers & Consultants",
  experienceYears: "8+",
  locationsCount: "10+",
  clientsSatisfied: "500+",
  offices: [
    {
      title: "Dapoli Regional & Site Office",
      address: "B Wing, Ainarkar Heights, Near BSNL Office, Opp. Maratha Mandir CBSE English School, Dapoli, Ratnagiri - 415712",
    },
    {
      title: "Ichalkaranji Head Office",
      address: "Office No. 01, Gore Building, Near Reliance Digital, Ichalkaranji - 416115",
    },
  ],
  emails: [
    "Support@kokannirvanaseashoreproperties.com",
    "Info@kokannirvanaseashoreproperties.com",
  ],
  address: "B Wing, Ainarkar Heights, Near BSNL Office, Dapoli - 415712 | Office No. 01, Gore Building, Near Reliance Digital, Ichalkaranji - 416115",
  email: "Support@kokannirvanaseashoreproperties.com",
  phones: [
    { display: "+91 90969 99901", raw: "919096999901" },
    { display: "+91 90962 19901", raw: "919096219901" },
    { display: "+91 93073 24731", raw: "919307324731" },
    { display: "+91 86682 60197", raw: "918668260197" },
  ],
  whatsapp: "919096999901",
  socialLinks: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/ruchi_creation2616/",
    youtube: "https://www.youtube.com/",
  },
};

export const PROPERTIES_DATA = [
  {
    id: "sea-gate",
    title: "The Sea Gate Cliffside NA Plots",
    location: "Anjarle Beach Cliff, Dapoli",
    type: "Cliffside Collector NA Plot",
    category: "Sea-Shore",
    plotArea: "2 - 5 Guntha (2,178 - 5,445 sq.ft.)",
    startingPrice: "On Request",
    image: "/properties/sea_gate/info.jpeg",
    gallery: [
      "/properties/sea_gate/info.jpeg",
      "/properties/sea_gate/layout.jpeg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["500m Distance From Sea Side", "Near Anjarle & Savane Beach", "Altitude 650 ft MSL", "Internal Concrete Road", "100% Clear Title Project", "Each Plot Fencing With Gate"],
    description: "Exclusive cliffside sea-front N.A. plots situated at an altitude of 650 ft in Anjarle, Dapoli. Located just 500 meters from the sea with panoramic ocean vistas, concrete roads, water and electricity connections.",
  },
  {
    id: "seaclusion",
    title: "Seaclusion Beachside NA Plots",
    location: "Tamastirth Ladghar Dapoli",
    type: "Beachside Collector NA Plot",
    category: "Sea-Shore",
    plotArea: "3.5 - 11 Guntha (3,811 - 11,979 sq.ft.)",
    startingPrice: "On Request",
    image: "/properties/seaclusion/drone1.jpeg",
    gallery: [
      "/properties/seaclusion/drone1.jpeg",
      "/properties/seaclusion/drone2.jpeg",
      "/properties/seaclusion/entrance.jpeg",
      "/properties/seaclusion/info.jpeg",
    ],
    features: ["800m Distance From Sea Side", "Near Tamastirth Ladghar & Karde Beach", "Individual Plot Demarcation", "Internal WBM Road", "Gated Entrance & Fencing", "100% Clear 7/12 Title"],
    description: "Beachside Collector N.A. plot layout situated 800 meters from Tamastirth Ladghar Beach and Karde Beach. Offers expansive plot sizes up to 11 Guntha with complete boundary fencing and grand entrance gate.",
  },
  {
    id: "azure-vistas",
    title: "Azure Vistas Coastal NA Plots",
    location: "Ladghar Beach Corridor, Dapoli",
    type: "Collector Sanctioned NA Plot",
    category: "Sea-Shore",
    plotArea: "2.5 - 5 Guntha (2,722 - 5,445 sq.ft.)",
    startingPrice: "On Request",
    image: "/properties/azure_vistas/info.jpeg",
    gallery: [
      "/properties/azure_vistas/info.jpeg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["1.5 KM Distance From Ladghar Beach", "Collector Sanctioned N.A. Plot", "100% Clear Title Project", "Concrete Internal Roads", "Grand Security Entrance", "Water & Power Supply"],
    description: "Exclusive Collector Sanctioned N.A. plot project located just 1.5 KM from Ladghar Beach, Dapoli. Features gated community security, concrete roads, water & electricity supply, and individual plot demarcation.",
  },
  {
    id: "hilltop-dapoli",
    title: "The HillTop Dapoli Ocean Sites",
    location: "Tamastirth Ladghar Beach Dapoli",
    type: "Panoramic Plot Layout",
    category: "Plots",
    plotArea: "3 - 10 Guntha (3,267 - 10,890 sq.ft.)",
    startingPrice: "On Request",
    image: "/properties/hilltop_dapoli/drone1.jpg",
    gallery: [
      "/properties/hilltop_dapoli/drone1.jpg",
      "/properties/hilltop_dapoli/drone2.jpg",
      "/properties/hilltop_dapoli/drone3.jpg",
      "/properties/hilltop_dapoli/morning1.jpeg",
      "/properties/hilltop_dapoli/info.jpeg",
    ],
    features: ["2.5 KM Distance From Tamastirth Beach", "Panoramic Sea & Valley View", "Solid WBM Road", "Collector Sanctioned NA", "100% Clear Title Guaranteed", "Gated Security & Solar Lighting"],
    description: "Ongoing Collector Sanctioned N.A. plot project 2.5 KM from Tamastirth Ladghar Beach. Offers breathtaking panoramic ocean & valley views, solid WBM roads, internal plantation, and gated security.",
  },
  {
    id: "vista-twin-tower",
    title: "Vista Twin Tower Terrace Houses",
    location: "Tamastirth Ladghar Dapoli",
    type: "Sea View Terrace Row House",
    category: "Residential",
    plotArea: "1 BHK & 2 BHK (672 & 1,005 sq.ft.)",
    startingPrice: "On Request",
    image: "/properties/vista_twin_tower/twintower.jpg",
    gallery: [
      "/properties/vista_twin_tower/twintower.jpg",
      "/properties/vista_twin_tower/siteview.jpg",
      "/properties/vista_twin_tower/actual1.jpg",
      "/properties/vista_twin_tower/actual2.jpg",
      "/properties/vista_twin_tower/info.jpg",
    ],
    features: ["800m Distance From Sea Side", "1BHK & 2BHK Terrace Row Houses", "RCC Frame & AAC Block Structure", "Granite Kitchen Platform", "Powder Coated Windows", "100% Clear Title"],
    description: "Modern 1 BHK & 2 BHK sea-view terrace row houses located 800m from Ladghar beach. Built with RCC frame structure, vitrified 2'x2' tile flooring, granite kitchen counters, and private sea-view balconies.",
  },
  {
    id: "zen-habited",
    title: "Zen Habitat Exclusive Coastal Plots",
    location: "Tamastirth Ladghar Dapoli",
    type: "Exclusive Coastal Living Plot",
    category: "Sea-Shore",
    plotArea: "2.5 - 10 Guntha (2,722 - 10,890 sq.ft.)",
    startingPrice: "On Request",
    image: "/properties/zen_habited/dji1.jpg",
    gallery: [
      "/properties/zen_habited/dji1.jpg",
      "/properties/zen_habited/dji2.jpg",
      "/properties/zen_habited/dji3.jpg",
      "/properties/zen_habited/layout.jpeg",
    ],
    features: ["1.5 KM Distance From Sea Side", "Near Tamastirth Ladghar Beach", "Internal Concrete Road", "Individual Plot Fencing", "Water & Electricity Supply", "Grand Entrance Gate"],
    description: "Exclusive coastal living plot project 1.5 KM from Ladghar Beach, Dapoli. Offers clear 7/12 titles, internal concrete roads, individual plot demarcation fencing, and ready utility connections.",
  },
  {
    id: "sapphire-retreats",
    title: "Sapphire Retreats Row Houses",
    location: "Dapoli Sea View Corridor",
    type: "Sea View Row House",
    category: "Residential",
    plotArea: "1BHK & 2BHK Luxury Cottages",
    startingPrice: "On Request",
    image: "/properties/sapphire_retreats/rowhouse.jpeg",
    gallery: [
      "/properties/sapphire_retreats/rowhouse.jpeg",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Panoramic Ocean & Valley Vistas", "Private Sea View Terrace", "High Spec Construction", "100% Clear Title", "Gated Security Community"],
    description: "Luxury terrace row house project with elevated sea & valley vistas in Dapoli. Built with premium RCC structure, ceramic tile finishes, and private sea view balconies.",
  },
  {
    id: "orchard-estate",
    title: "Orchard Estate NA Plot Layout",
    location: "Dapoli Green Corridor",
    type: "Collector NA Plot Layout",
    category: "Plots",
    plotArea: "3,000 - 8,000 sq.ft.",
    startingPrice: "On Request",
    image: "/properties/orchard_estate/img1.jpeg",
    gallery: [
      "/properties/orchard_estate/img1.jpeg",
      "/properties/orchard_estate/img2.jpeg",
      "/properties/orchard_estate/img3.jpeg",
      "/properties/orchard_estate/img4.jpeg",
    ],
    features: ["Surrounded by Mango & Betel Nut Groves", "Internal Tar Roads", "Demarcated Plots", "Water & Power Connections", "100% Clear 7/12 Title"],
    description: "Spacious Collector N.A. plot layout nestled amidst lush Konkan fruit orchards in Dapoli. Ideal for custom villa construction and peaceful weekend living.",
  },
  {
    id: "kokan-casa",
    title: "Kokan Casa Coastal Cottages",
    location: "Dapoli Coastline, Ratnagiri",
    type: "Boutique Coastal Row Houses",
    category: "Residential",
    plotArea: "1BHK & 2BHK Holiday Cottages",
    startingPrice: "On Request",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Authentic Konkan Roofline Aesthetics", "Close Proximity to Coastline", "100% Clear 7/12 Title", "Turnkey Possessions", "Rental Homestay Yields"],
    description: "Charming coastal residential row house project in Dapoli. Offers turnkey 1BHK & 2BHK holiday cottages designed for weekend retreats and rental returns.",
  },
];

export const SERVICES_DATA = [
  {
    id: "na-plots",
    title: "Residential Collector N.A. Plots",
    icon: "Trees",
    description: "Sanctioned N.A. plot layouts with demarcated boundaries, internal tar roads, electricity, and separate 7/12 title extract for every buyer.",
    priceRange: "On Request",
    features: [
      "100% Collector N.A. Sanctioned Layouts",
      "Individual 7/12 Extract Title Clear",
      "Gated Compound & Electricity Connection",
      "Clear Boundary Demarcation",
    ],
  },
  {
    id: "row-houses",
    title: "Sea View Cottages & Terrace Houses",
    icon: "Home",
    description: "Turnkey row houses and terrace cottages designed with authentic Konkan architectural rooflines, spacious verandas, and ocean views.",
    priceRange: "On Request",
    features: [
      "1BHK & 3BHK Architectural Layouts",
      "Authentic Mangalore Tile Roof Aesthetics",
      "Private Terrace with Arabian Sea Views",
      "Turnkey Fully Finished Possession",
    ],
  },
  {
    id: "apartments",
    title: "Luxury Beachfront Apartments",
    icon: "Building2",
    description: "Contemporary 1, 2 & 3 BHK sea-facing apartment residences situated along Dapoli's prime beach corridors with RERA approval.",
    priceRange: "On Request",
    features: [
      "RERA Sanctioned Residential Complex",
      "Uninterrupted Sunset & Ocean Balconies",
      "24/7 Security & Power Backup",
      "High Rental Income Potential",
    ],
  },
  {
    id: "agricultural-land",
    title: "Coastal Agriculture & Farm Sites",
    icon: "Landmark",
    description: "Large parcel agricultural land, mango orchards, and creek-view farm sites ideal for agro-tourism, organic farming, or land holding.",
    priceRange: "On Request",
    features: [
      "Single-Owner Clear Title 7/12 Extracts",
      "Rich Soil Suited for Alphonso & Spices",
      "Creek & Sea Backwater Locations",
      "Legal Guidance for Non-Farmer Buyers",
    ],
  },
  {
    id: "custom-construction",
    title: "Custom Villa & Bungalow Construction",
    icon: "HardHat",
    description: "End-to-end bungalow development services from architectural planning and municipal approvals to turnkey key handover.",
    priceRange: "On Request",
    features: [
      "Custom Architectural Design & 3D Plans",
      "Local Construction Material Management",
      "Quality Assurance & Inspection",
      "On-Time Project Key Handover",
    ],
  },
  {
    id: "legal-advisory",
    title: "7/12 Title & Legal Documentation Advisory",
    icon: "FileText",
    description: "Comprehensive legal title search, 7/12 extract verification, Collector NA layout checks, and hassle-free registration support.",
    priceRange: "On Request",
    features: [
      "Thorough 30-Year Title Search Reports",
      "Revenue Department & Zone Verification",
      "Stamp Duty & Agreement Registration",
      "Post-Purchase Mutation (Ferfar) Support",
    ],
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: "rajat-panda",
    name: "Rajat Panda",
    role: "Property Investor, Pune",
    rating: 5,
    text: "Bought a 3,000 sq.ft sea-view NA plot in Dapoli through Kokan Nirvana. The 7/12 extract was handed over with zero issues. Truly professional service!",
    property: "The Sea Gate Cliffside NA Plot",
  },
  {
    id: "aniket-raval",
    name: "Aniket Raval",
    role: "NRI Investor, UAE",
    rating: 5,
    text: "Managing a land purchase from abroad was seamless with Kokan Nirvana. They conducted a 30-year title check and shared video walk-throughs.",
    property: "The HillTop Dapoli Site",
  },
  {
    id: "sneha-deshmukh",
    name: "Sneha Deshmukh",
    role: "Bungalow Owner, Mumbai",
    rating: 5,
    text: "From selecting the plot near Ladghar beach to building our weekend cottage, Kokan Nirvana managed everything end-to-end.",
    property: "Vista Twin Tower Row House",
  },
];

export const BLOG_POSTS = [
  {
    id: "712-extract-guide",
    title: "Understanding 7/12 Extract (Satbara Utara) When Buying Land in Konkan",
    date: "August 15, 2026",
    category: "Legal Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Learn what to look for in a 7/12 extract: mutation entry numbers, encumbrances, cultivator columns, and how Kokan Nirvana verifies every title.",
    content: `Buying property in the coastal region of Maharashtra requires a thorough understanding of revenue documents, most notably the 7/12 Extract (Satbara Utara).

### What is a 7/12 Extract?
The 7/12 extract is an essential document issued by the Revenue Department of Maharashtra. It contains details of land survey numbers, ownership rights, cultivation history, and any encumbrances registered against the land.

### Key Things to Check Before Purchasing:
1. **Owner Names Column (Haqqat Patrika)**: Ensure all co-owners are accounted for and willing to sign the sale deed.
2. **Mutations (Ferfar Entries)**: Verify that past land transfers have been properly updated in the government record.
3. **Encumbrance / Loan Column (Boja)**: Ensure there are no active bank mortgages or litigation stays registered on the property.
4. **Zone & NA Status**: Verify if the land falls under Residential NA, Agricultural, or CRZ (Coastal Regulation Zone).

At Kokan Nirvana, our legal team conducts a 30-year title search for every single plot layout before listing, guaranteeing 100% peace of mind for our buyers.`,
  },
  {
    id: "why-dapoli-real-estate",
    title: "Why Dapoli is Maharashtra's Premier Coastal Real Estate Destination",
    date: "July 28, 2026",
    category: "Market Insights",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    excerpt: "With improved Mumbai-Goa highway connectivity and pristine uncrowded beaches, Dapoli is rapidly emerging as the top choice for second homes.",
    content: `Dapoli, often referred to as the 'Mini Mahabaleshwar of Konkan' due to its pleasant year-round climate, has become one of the most sought-after coastal real estate corridors in Maharashtra.

### 1. Superior Connectivity
The ongoing expansion of the Mumbai-Goa National Highway (NH-66) and improved coastal highway routes have reduced travel time significantly from Mumbai and Pune.

### 2. High Capital Growth
Properties in prime Dapoli locations like Ladghar, Murud, and Anjarle have shown steady appreciation due to rising demand for boutique homestays and sea-view retirement villas.

### 3. Pristine Natural Charm
Unlike heavily commercialized beach destinations, Dapoli offers white sand beaches, dense betel nut groves, dolphin watching, and serene hilltops.`,
  },
  {
    id: "coastal-villa-maintenance",
    title: "Key Architectural Considerations for Building a Coastal Villa in Konkan",
    date: "June 12, 2026",
    category: "Architecture & Construction",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Essential tips for weather-proofing your sea-side home: Mangalore tile roofs, anti-corrosive fittings, slope drainage, and rainwater harvesting.",
    content: `Building a home near the ocean requires specialized construction practices to handle heavy Konkan monsoons and saline coastal winds.

### Essential Construction Guidelines:
- **Roof Design**: Sloped roofs clad with traditional Mangalore or clay tiles prevent water stagnation during intense rainfall.
- **Material Selection**: Use anti-corrosive stainless steel (SS 316 grade) hardware, UPVC window frames, and high-grade waterproof exterior paints.
- **Veranda Layouts**: Incorporate wide covered verandas (Aagan) to create naturally ventilated, shaded living spaces.
- **Rainwater Harvesting**: Harness the abundant monsoon rains with underground storage tanks for year-round garden irrigation.`,
  },
];
