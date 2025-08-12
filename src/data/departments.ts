export type Member = {
  name: string;
  title?: string; // Alderperson, Chief, Clerk, Etc
  district?: string; // Ward 1, Etc
  email?: string;
  phone?: string;
  term?: string; // e.g. 2024-2025
};

export type Department = {
    name: string;
    slug: string;
    summary: string;
    phone?: string;
    email?: string;
    hours?: string;
    address?: string;
    notes?: string; // e.g. "Emergency: 911"
    lastUpdated?: string; // ISO date string, for stale-warning banner
    members?: Member[];
}

const departmentsData: Department[] = [
  {
    name: "Board of Aldermen",
    slug: "board-of-aldermen",
    summary: "Elected officials responsible for city policy, ordiances, and budgets.",
    hours: "Meets monthly - See Calendar",
    lastUpdated: "2025-08-10",
    members: [
      { name: "Kyle Bentley", title: "Alderperson" },
      { name: "Cara McMenamy", title: "Alderperson" },
      { name: "Houston Steele", title: "Alderperson" }
    ]
  },
  {
    name: "City Clerk",
    slug: "city-clerk",
    summary: "Records, agendas & minutes, permits, and public information requests.",
    phone: "417-723-8305",
    email: "clerk@crane-mo.com",
    hours: "Mon-Fri, 8:00 am - 4:30 pm",
    lastUpdated: "2025-08-10",
    members: [
      { name: "Amy Pointer", title: "Clerk" } 
    ]
  },
  {
    name: "Fire Department",
    slug: "fire-department",
    summary: "Provides fire protection, emergency response, and safety education.",
    phone: "Non-Emergency: 417-723-8305",
    address: "120 N. Commerce",
    notes: "Emergency: 911",
    lastUpdated: "2025-08-10",
    members: [
      { name: "Richard Dickerson", title: "Chief" }
    ]
  },
  {
    name: "Municipal Court",
    slug: "municipal-court",
    summary: "Handles city ordinance violations, traffic tickets, and minor offenses.",
    phone: "417-723-8305",
    email: "court@crane-mo.com",
    hours: "Call for hours",
    lastUpdated: "2025-08-10"
  },
  {
    name: "Parks & Recreation",
    slug: "parks-and-recreation",
    summary: "Parks, facilities, and community recreation programs.",
    phone: "417-723-8305",
    email: "parks@crane-mo.com",
    lastUpdated: "2025-08-10"
  },
  {
    name: "Planning & Zoning",
    slug: "planning-and-zoning",
    summary: "Zoning, land use, development applications, and comprehensive planning.",
    phone: "417-723-8305",
    email: "pz@crane-mo.com",
    hours: "By appointment",
    lastUpdated: "2025-08-10"
  },
  {
    name: "Police Department",
    slug: "police-department",
    summary: "Law enforcement, community safety, and crime prevention.",
    phone: "Non-emergency: 417-723-8305",
    notes: "Emergency: 911",
    lastUpdated: "2025-08-10",
    members: [
      { name: "Michael Cupp", title: "Chief" }
    ]
  },
  {
    name: "Public Works",
    slug: "public-works",
    summary: "Streets, utilities, maintenance, and infrastructure projects.",
    phone: "417-723-8305",
    email: "publicworks@crane-mo.com",
    hours: "Mon–Fri, 8:00 AM – 4:30 PM",
    lastUpdated: "2025-08-10",
    members: [
      { name: "Cody Cypret", title: "Public Works Director" }
    ]
  },
];

export function getDepartments() {
    return departmentsData;
}

export function getDepartmentBySlug(slug: string) {
    return departmentsData.find((d) => d.slug === slug);
}