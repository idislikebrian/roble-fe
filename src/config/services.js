export const SERVICES = [
  {
    slug: "roofing",
    title: "Roofing",
    items: ["Roof repairs", "Full roof replacement", "Chimney work"],
    description:
      "Reliable roofing solutions to protect your home from leaks, weather damage, and long-term wear.",
    overview:
      "From leak diagnosis to full replacement, we provide practical roofing solutions designed for North New Jersey weather and seasonal wear.",
    idealFor: [
      "Active leaks or interior water stains",
      "Missing, curling, or storm-damaged shingles",
      "Aging roofs needing full replacement planning",
      "Chimney flashing and roof transition issues",
    ],
    process: [
      {
        title: "Inspection and Scope",
        details:
          "We inspect roof condition, identify failure points, and outline repair vs replacement options.",
      },
      {
        title: "Clear Estimate",
        details:
          "You receive a written scope with material recommendations and a practical timeline.",
      },
      {
        title: "Execution",
        details:
          "Our crew completes the work safely, maintains clean job sites, and protects surrounding areas.",
      },
      {
        title: "Final Walkthrough",
        details:
          "We review completed work with you and confirm everything is watertight and finished correctly.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I need a repair or full replacement?",
        answer:
          "It depends on roof age, extent of damage, and repeated leak history. We provide both options when appropriate and explain cost/value tradeoffs.",
      },
      {
        question: "Do you handle chimney-related roofing issues?",
        answer:
          "Yes. We handle chimney flashing, sealing transitions, and related roof tie-in repairs.",
      },
    ],
    areaNotes: [
      "In Bergen and Hudson County homes, wind-driven rain often exposes flashing and edge details.",
      "For older properties across Passaic and Essex, replacement planning can prevent recurring patch repairs.",
    ],
  },
  {
    slug: "exterior-construction",
    title: "Exterior Construction",
    items: ["Paver patios", "Concrete work", "Concrete stairs"],
    description:
      "Custom outdoor construction for patios, walkways, and structural concrete projects.",
  },
  {
    slug: "painting",
    title: "Painting",
    items: ["Interior painting", "Exterior painting"],
    description:
      "Professional painting services that improve curb appeal and refresh interior spaces.",
  },
  {
    slug: "doors-windows",
    title: "Doors & Windows",
    items: ["Window installation", "Door installation"],
    description:
      "Installation and replacement of doors and windows for better insulation, security, and style.",
  },
  {
    slug: "exterior-cleaning",
    title: "Exterior Cleaning",
    items: ["Power washing", "Window cleaning"],
    description:
      "Deep cleaning services that remove dirt, mold, and buildup from exterior surfaces.",
    overview:
      "We restore exterior surfaces safely and thoroughly, helping your home look cleaner while preventing long-term buildup damage.",
    idealFor: [
      "Siding with mold, algae, or seasonal staining",
      "Walkways and patios with grime and organic buildup",
      "Windows with film, water spotting, or hard-to-reach dirt",
      "Pre-sale or seasonal curb-appeal refreshes",
    ],
    process: [
      {
        title: "Surface Assessment",
        details:
          "We assess siding, trim, concrete, and glass to determine the right pressure and cleaning method for each area.",
      },
      {
        title: "Prep and Protection",
        details:
          "Plants, outlets, and sensitive edges are protected before cleaning begins.",
      },
      {
        title: "Targeted Cleaning",
        details:
          "We clean each surface with the correct technique to remove buildup without unnecessary wear.",
      },
      {
        title: "Detail Review",
        details:
          "We do a final pass with you to confirm all requested areas are complete and streak-free.",
      },
    ],
    faqs: [
      {
        question: "Can power washing damage siding or trim?",
        answer:
          "It can if done incorrectly. We adjust pressure and method by material to clean effectively while protecting surfaces.",
      },
      {
        question: "How often should exterior cleaning be done?",
        answer:
          "Most homes benefit from annual cleaning, with higher-frequency touchups in high-pollen or high-traffic areas.",
      },
    ],
    areaNotes: [
      "Tree-heavy neighborhoods in Morris and Union often need seasonal mold and pollen cleanup.",
      "Dense urban blocks in Hudson and Essex can collect faster dust and traffic film on windows and siding.",
    ],
  },
  {
    slug: "interior-construction",
    title: "Interior Construction",
    items: ["Drywall / Sheetrock installation", "Drywall repair"],
    description:
      "Clean, professional drywall work for renovations, repairs, or new construction.",
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((service) => service.slug === slug);
}
