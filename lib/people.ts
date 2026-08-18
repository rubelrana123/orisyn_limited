export const people = {
  "md-mehedi-hasan": {
    name: "Md Mehedi Hasan",
    role: "Managing Director",
    image: "/director/md-mehedi-hasan-white.png",
    introduction:
      "Md Mehedi Hasan is an adaptable, results-oriented Managing Director with more than 12 years of experience in service development, project delivery, tender sales, and business development.",
    details:
      "He develops strong professional relationships with clients and service partners, combining market insight, cost-conscious planning, customer support, and practical conflict resolution to deliver dependable outcomes.",
    experience: [
      "Leads project development, tender sales, direct purchase and direct procurement work, and correspondence with local and foreign principals.",
      "Manages tender information collection, tender preparation and submission, negotiation, and project execution with a focus on accurate costing, cost control, and customer satisfaction.",
      "Has supported product and brand development, customer support, and project delivery for dredgers, generators, solar power systems, security items, CCTV, and batteries.",
      "Brings hands-on experience in supply chain management, including procurement, distribution, delivery, commercial work, import, export, L/C, and banking operations.",
      "Has worked with government and non-government organizations including Bangladesh Bank, Bangladesh Police, Bangladesh Army, PWD, EDCL, Bangladesh Railway, CMSD, DGDP, Bangladesh Atomic Energy, STEP, BTEB, and Grameenphone.",
      "Experienced in direct purchase management with Bangladesh Army and Bangladesh Navy, as well as coordination with local and international manufacturers.",
    ],
    expertise: null,
    credentials:
      "Managing Director, RootTOP Limited · Owner, M/S Satellite Enterprise · Owner, KhamarBari Corporation",
    linkedin: null,
  },
  "sabbir-ahmed": {
    name: "Lt. Col. Sabbir Ahmed",
    role: "Chairman, Orisyn Limited",
    image: "/director/sabbirAhmed.jpeg",
    introduction:
      "Lt. Col. Sabbir Ahmed, BGBM, PBGM, psc (Retd.), is a seasoned leadership and administration professional with more than 22 years of distinguished service in the Bangladesh Army.",
    details:
      "As Chairman of Orisyn Limited, he provides strategic direction, disciplined governance, operational insight, and extensive institutional experience. His leadership supports responsible growth, strong stakeholder relationships, effective project oversight, and dependable business delivery.",
    experience: [
      "Currently serving as Chief Executive Officer of Dhaka Club, overseeing administration, finance, logistics, security, compliance, employee welfare, and services for more than 4,500 members and 450 staff.",
      "Commanded an 850-member Border Guard Bangladesh battalion, leading operations, personnel management, training, security, logistics, and stakeholder coordination.",
      "Served in United Nations peacekeeping missions in the Democratic Republic of the Congo and Mali, including leadership of approximately 180 personnel as a Company Commander.",
      "Developed and coordinated security plans for key installations, VVIP movements, national events, and complex operational environments.",
    ],
    credentials:
      "BGBM, PBGM, psc (Retd.) · Staff College graduate, Defence Services Command and Staff College · Master of Science in Military Studies",
    linkedin: "https://www.linkedin.com/in/ltcol-sabbir-ahmed/",
  },
} as const;

export type PersonSlug = keyof typeof people;
