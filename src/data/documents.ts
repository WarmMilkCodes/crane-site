export type DocCategory = "Ordinance" | "Budget" | "Audit" | "Report" | "Application";
export type Doc = {
    id: string;
    category: DocCategory;
    title: string;
    year?: number;
    url: string; // external or /docs/*.pdf
    description?: string;
    tags?: string[];
};

export const documents: Doc[] = [
    // Code of Ordinances
    {
        id: "ord-title-i-admin",
        category: "Ordinance",
        title: "Title I. The Administrative Code",
        url: "https://www.crane-mo.com/doc/pdf/Title%20I.pdf",
        description: "General provisions relating to the administration of the City of Crane, Missouri.",
        tags: ["code", "administration"]
    },
    {
    id: "ord-title-ii-health",
    category: "Ordinance",
    title: "Title II. Health, Safety and Welfare",
    url: "https://www.crane-mo.com/doc/pdf/Title%20II.pdf",
    description:
      "Provisions relating to health, safety, and welfare.",
    tags: ["code", "health"],
  },
  {
    id: "ord-title-iii-traffic",
    category: "Ordinance",
    title: "Title III. Traffic Code",
    url: "https://www.crane-mo.com/doc/pdf/Title%20III.pdf",
    description:
      "Provisions that are traffic related.",
    tags: ["code", "traffic"],
  },
  {
    id: "ord-title-iv-land-use",
    category: "Ordinance",
    title: "Title IV. Land Use",
    url: "https://www.crane-mo.com/doc/pdf/Title%20IV.pdf",
    description:
      "Planning & Zoning, adjustments. (If ‘under construction’, keep but mark with tag.)",
    tags: ["code", "zoning"],
  },

  // ----- City Budgets (years) -----
  { id: "budget-2019", category: "Budget", year: 2019, title: "2019 City Budget", url: "https://www.crane-mo.com/doc/pdf/BudgetFY19.pdf", description: "Adopted budget for fiscal year 2019" },
  { id: "budget-2018", category: "Budget", year: 2018, title: "2018 City Budget", url: "https://www.crane-mo.com/doc/pdf/BudgetFY18.pdf", description: "Adopted budget for fiscal year 2018" },
  { id: "budget-2017", category: "Budget", year: 2017, title: "2017 City Budget", url: "https://www.crane-mo.com/doc/pdf/BudgetFY17.pdf", description: "Adopted budget for fiscal year 2017" },
  { id: "budget-2016", category: "Budget", year: 2016, title: "2016 City Budget", url: "https://www.crane-mo.com/doc/pdf/BudgetFY16.pdf", description: "Adopted budget for fiscal year 2016" },
  { id: "budget-2015", category: "Budget", year: 2015, title: "2015 City Budget", url: "https://www.crane-mo.com/doc/pdf/BudgetFY15.pdf", description: "Adopted budget for fiscal year 2015" },

  // ----- City Audit Reports (years) -----
  { id: "audit-2018", category: "Audit", year: 2018, title: "2018 City Audit Report", url: "https://www.crane-mo.com/doc/pdf/Crane%202018%20audit%20report.pdf", description: "Results of the 2018 City audit" },
  { id: "audit-2017", category: "Audit", year: 2017, title: "2017 City Audit Report", url: "https://www.crane-mo.com/doc/pdf/Crane%202017%20audit%20report.pdf", description: "Results of the 2017 City audit" },
  { id: "audit-2016", category: "Audit", year: 2016, title: "2016 City Audit Report", url: "https://www.crane-mo.com/doc/pdf/Crane%202016%20audit%20report.pdf", description: "Results of the 2016 City audit" },
  { id: "audit-2015", category: "Audit", year: 2015, title: "2015 City Audit Report", url: "https://www.crane-mo.com/doc/pdf/Crane%202015%20audit%20report.pdf", description: "Results of the 2015 City audit" },
];

// helpers
export function getDocuments() { return documents; }
export function getYearsFor(category?: DocCategory) {
  const set = new Set<number>();
  documents.forEach(d => { if (d.year && (!category || d.category === category)) set.add(d.year); });
  return Array.from(set).sort((a,b)=>b-a);
}
