export interface Career {
  id: number;
  slug: string;
  title: string;
  featured: boolean;
  image: string;
  summary: {
    vacancy: number;
    salary: string;
    experience: string;
    employmentStatus: string;
    jobLevel: string;
    workplace: string;
    location: string;
    age: string;
    deadline: string;
  };
  application: {
    applyLink: string;
    contactEmail?: string;
  };
  jobContext: string;
  responsibilities: string[];
  educationalRequirements: string[];
  experienceRequirements: string[];
  additionalRequirements: string[];
  compensationBenefits: string[];
  officeAddress?: {
    company: string;
    address: string;
    email: string;
    phone: string;
    website: string;
  };
}

export const careerData: Career[] = [
  {
    id: 3,
    slug: "3d-architectural-visualizer",
    title: "3D Architectural Visualizer",
    featured: true,
    image: "/career-visualizer.png",
    summary: {
      vacancy: 1,
      salary: "Negotiable",
      experience: "Preferred (based on skills)",
      employmentStatus: "Full-Time",
      jobLevel: "Mid Level",
      workplace: "Work at Office",
      location: "Mohakhali DOHS, Dhaka",
      age: "Not specified",
      deadline: "ASAP",
    },
    application: {
      applyLink: "https://forms.gle/GroZ6GZtaDqFYMxx5",
      contactEmail: "roottopltd@gmail.com",
    },
    jobContext:
      "RootTOP Ltd. is looking for a creative and detail-oriented 3D Architectural Visualizer to join our growing team. The ideal candidate will create high-quality 3D architectural models, photorealistic renderings, walkthrough animations, and assist with architectural drafting and BOQ preparation.",
    responsibilities: [
      "Create high-quality 3D architectural models and photorealistic renderings.",
      "Produce architectural walkthrough animations for residential and commercial projects.",
      "Prepare 2D architectural drawings, including plans, elevations, sections, and detailed working drawings.",
      "Interpret architectural drawings and convert them into accurate 3D visualizations.",
      "Prepare bill of quantities (BOQ) and quantity estimations.",
      "Collaborate with architects, designers, and project teams to meet project requirements.",
      "Revise designs and visualizations based on client feedback and project updates.",
      "Maintain organized project files and documentation throughout the project lifecycle.",
    ],
    educationalRequirements: [
      "Diploma or Bachelor's degree in Architecture, Civil Engineering, Interior Design, or a related field.",
      "Relevant certifications in 3D visualization software are an advantage.",
    ],
    experienceRequirements: [
      "Previous experience in 3D architectural visualization is preferred.",
      "Fresh candidates with an outstanding portfolio and strong visualization skills are encouraged to apply.",
    ],
    additionalRequirements: [
      "Proficiency in SketchUp, Lumion, 3ds Max, V-Ray, or similar visualization software.",
      "Excellent knowledge of AutoCAD for architectural drafting.",
      "Understanding of architectural drawings, construction methods, and materials.",
      "Creative mindset, attention to detail, and the ability to manage multiple projects.",
      "Good communication, teamwork, and deadline-management skills.",
    ],
    compensationBenefits: [
      "Negotiable salary based on experience and skills.",
      "Performance-based salary review.",
      "Career growth and professional development opportunities.",
      "Paid leave and public holidays as per company policy.",
      "Professional, collaborative, and growth-oriented working environment.",
    ],
    officeAddress: {
      company: "RootTOP Ltd.",
      address: "House #263 (1st Floor), Road #19, Mohakhali DOHS, Dhaka Cantonment, Dhaka-1206",
      email: "roottopltd@gmail.com",
      phone: "+8801746644478",
      website: "https://www.roottopltd.com",
    },
  },
];

export const careerBenefits = [
  "Friendly working environment",
  "Prayer place",
  "Surprise appreciation gifts",
  "Snacks and unlimited tea",
  "Learning opportunity",
  "Upgrade your skills",
  "Yearly salary review",
  "Flexible leave and holidays",
  "Two festival bonuses",
];
