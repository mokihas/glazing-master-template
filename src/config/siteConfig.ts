export const siteConfig = {
  businessName: "[Business Name]",
  legalBusinessName: "[Company Ltd]",
  tagline: "Architectural Glazing",
  primaryCategory: "Glass & Glazing Contractor",
  secondaryCategories: ["Window Installation Service", "Glass Repair Service"],
  phone: "[Phone]",
  whatsapp: "[Phone]",
  email: "[Email]",
  website: "https://www.example.com",
  streetAddress: "[Address]",
  city: "[Town]",
  state: "[Nearby towns]",
  postalCode: "[Postcode]",
  country: "UK",
  latitude: 51.5074,
  longitude: -0.1278,
  openingHours: [
    { day: "Monday", open: "08:00", close: "17:00" },
    { day: "Tuesday", open: "08:00", close: "17:00" },
    { day: "Wednesday", open: "08:00", close: "17:00" },
    { day: "Thursday", open: "08:00", close: "17:00" },
    { day: "Friday", open: "08:00", close: "17:00" },
    { day: "Saturday", open: "09:00", close: "13:00" },
    { day: "Sunday", open: "Closed", close: "Closed" }
  ],
  serviceAreas: [
    { name: "[Area 1]", slug: "area-1" },
    { name: "[Area 2]", slug: "area-2" },
    { name: "[Area 3]", slug: "area-3" },
    { name: "[Area 4]", slug: "area-4" },
    { name: "[Area 5]", slug: "area-5" },
    { name: "[Area 6]", slug: "area-6" },
  ],
  logo: "/logo.png",
  favicon: "/favicon.ico",
  heroImage: "/images/hero-placeholder.svg",
  aboutImage: "/images/about-placeholder.svg",
  socialProfiles: [
    { platform: "facebook", url: "https://facebook.com/PROFILE" },
    { platform: "instagram", url: "https://instagram.com/PROFILE" },
  ],
  reviews: {
    googleBusinessProfileUrl: "https://g.page/GBP_LINK",
    aggregateRating: "4.9",
    totalReviews: "312",
    reviewWidgetEmbedCode: "<!-- Paste your Google Reviews Widget Embed Code Here -->"
  },
  trustBadges: [
    { name: "GGF Member", image: "/images/badges/ggf.png" },
    { name: "FENSA Registered", image: "/images/badges/fensa.jpg" },
    { name: "InstallSure", image: "/images/badges/installsure.jpg" }
  ] as Array<{name: string, image: string}>,
  companyRegistrationNumber: "[No.]",
  vatNumber: "[No.]",
  fensaNumber: "[No.]",
  yearEstablished: "[Year]",
  founder: "[Owner]",
  description: "[Town] window and door installers since [Year]. Fixed written prices, 10-year insurance-backed guarantee, FENSA registered.",
  emergencyService: true,
  certifications: ["FENSA"],
  brands: [],
  services: [
    {
      id: "service-1",
      name: "[Service Name 1]",
      slug: "service-1",
      shortDescription: "[Short Description]",
      longDescription: "[Long Description]",
      image: "/images/service-placeholder.svg",
      applications: ["[Application 1]", "[Application 2]"],
    },
    {
      id: "service-2",
      name: "[Service Name 2]",
      slug: "service-2",
      shortDescription: "[Short Description]",
      longDescription: "[Long Description]",
      image: "/images/service-placeholder.svg",
      applications: ["[Application 1]", "[Application 2]"],
    },
    {
      id: "service-3",
      name: "[Service Name 3]",
      slug: "service-3",
      shortDescription: "[Short Description]",
      longDescription: "[Long Description]",
      image: "/images/service-placeholder.svg",
      applications: ["[Application 1]", "[Application 2]"],
    },
    {
      id: "service-4",
      name: "[Service Name 4]",
      slug: "service-4",
      shortDescription: "[Short Description]",
      longDescription: "[Long Description]",
      image: "/images/service-placeholder.svg",
      applications: ["[Application 1]", "[Application 2]"],
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Rachel M",
      text: "Three days, no mess, and the front room is a different room now. You can't hear the buses.",
      date: "2026-03-01",
      service: "Windows"
    },
    {
      id: 2,
      name: "Imran K",
      text: "Quoted less than two of the big names and turned up when they said. Same person did the survey and the fitting.",
      date: "2026-02-01",
      service: "Bi-folds"
    },
    {
      id: 3,
      name: "Peter and Anne T",
      text: "Conservation area, so it had to look right. They matched the horns and sorted the paperwork with the council.",
      date: "2026-01-01",
      service: "Sliding Sash"
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Bay window, before and after",
      type: "Windows",
      location: "[Area], [Postcode]",
      service: "windows",
      description: "Three days, no mess, and the front room is a different room now. You can't hear the buses.",
      image: "/images/project-1-placeholder.svg"
    },
    {
      id: "project-2",
      title: "Anthracite bi-fold",
      type: "Doors",
      location: "[Area], [Postcode]",
      service: "doors",
      description: "Quoted less than two of the big names and turned up when they said. Same person did the survey and the fitting.",
      image: "/images/project-2-placeholder.svg"
    },
    {
      id: "project-3",
      title: "Sliding sash replacement",
      type: "Windows",
      location: "[Area], [Postcode]",
      service: "windows",
      description: "Conservation area, so it had to look right. They matched the horns and sorted the paperwork with the council.",
      image: "/images/project-3-placeholder.svg"
    }
  ],
  faqs: [
    {
      question: "How much do replacement windows actually cost in [Town]?",
      answer: "A standard uPVC casement fitted, including removal and disposal, runs £480–£720 depending on size, opener count and glass spec. A typical three-bed semi with eight windows lands between £4,200 and £6,800. Anthracite foil adds roughly 12%. Our written quote itemises every opening so you can see where the money goes."
    },
    {
      question: "Will you beat a quote from one of the national firms?",
      answer: "Usually, and without the theatre. National sales teams often open high and discount hard in your living room. We quote once, in writing, at the price we'll actually do it for. Send us a competitor quote and we'll tell you honestly whether we can better it."
    },
    {
      question: "Do I need to be in for the whole fit?",
      answer: "Someone needs to let us in and be there at sign-off. In between you can come and go. We work 8am to around 4.30pm and the house is left secure and watertight every night, even mid-job."
    },
    {
      question: "What does the guarantee actually cover?",
      answer: "Ten years on frames and sealed units, plus our workmanship, backed by an insurance policy so it holds even if we stop trading. Hinges, handles and locks carry ten years too. Glass breakage from impact isn't covered — that's a home insurance matter."
    },
    {
      question: "Do you handle FENSA and building control?",
      answer: "Yes. Every install is registered with FENSA and your certificate arrives within 20 working days. You'll need it when you sell, so keep it with the deeds. Conservatories and structural openings go through full building control, which we arrange and attend."
    }
  ],
  ghl: {
    enableChatWidget: false,
    chatWidgetEmbedCode: "<!-- Paste your GHL Chat Widget Code Here -->",
    heroFormEmbedCode: "<!-- Paste your GHL Hero Form Embed Code Here -->",
    contactFormEmbedCode: "<!-- Paste your GHL Contact Page Form Embed Code Here -->"
  }
};
