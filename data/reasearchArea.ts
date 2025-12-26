// data/researchAreas.ts

export type ResearchArea = {
  title: string
  slug: string
  description: string
  keyPoints: string[]
  faculties: string[]
  icon?: string
  image?: string
  topics?: string[]
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Alloys Design, Development & Deformation",
    slug: "alloys-design-development-deformation",
    icon: "⚙️",
    description:
      "This research area focuses on the scientific design and development of advanced metallic alloys and the detailed study of their deformation behaviour under different mechanical and thermal conditions.",
    keyPoints: [
      "Systematic design of novel alloy compositions using both experimental and computational approaches to achieve targeted mechanical properties such as high strength, ductility, toughness, and corrosion resistance for advanced engineering applications.",
      "Detailed investigation of microstructural evolution during different thermo-mechanical processing routes including casting, forging, rolling, extrusion, and heat treatment, and their direct influence on macroscopic material performance.",
      "In-depth study of deformation mechanisms such as dislocation slip, twinning, strain-induced phase transformations, and work hardening using advanced microscopy and diffraction techniques.",
      "Mechanical property evaluation through tensile, compression, hardness, impact, fatigue, and creep testing to understand failure mechanisms under static and cyclic loading conditions.",
      "Development of high-performance lightweight and high-temperature alloys specifically targeted for aerospace, automotive, defence, and structural infrastructure applications.",
      "Integration of machine learning and computational materials science tools to accelerate alloy discovery, optimize processing parameters, and predict long-term performance under service conditions."
    ],
    faculties: [
      "S. Samal",
      "V. Kumar",
      "E. P. Korimilli",
      "A. Ghosh",
      "H. Borkar",
      "D. Basha",
      "R. S. Maurya",
      "K. V. Vamsi",
      "C. Halder"
    ],
  },

  {
    title: "Diffusion & Phase Transformations",
    slug: "diffusion-phase-transformations",
    icon: "🔁",
    description:
      "This area focuses on understanding the atomic-scale diffusion processes and phase transformation phenomena that govern microstructural evolution in materials.",
    keyPoints: [
      "Atomic-level exploration of diffusion mechanisms such as lattice diffusion, grain boundary diffusion, and surface diffusion in pure metals, alloys, and complex multi-phase systems using both experimental and simulation-based techniques.",
      "Detailed study of nucleation, growth, and coarsening kinetics of precipitates and secondary phases, and their influence on strengthening mechanisms in engineering alloys.",
      "Application of thermodynamic and kinetic modeling approaches including CALPHAD and phase-field methods to construct phase diagrams and predict phase stability under non-equilibrium processing conditions.",
      "Investigation of diffusion-controlled solid-state transformations such as eutectoid, martensitic, and bainitic transformations using dilatometry, microscopy, and in-situ characterization methods.",
      "Study of hydrogen diffusion, trapping, and embrittlement phenomena in structural and functional materials, particularly for energy and transportation sector applications.",
      "Analysis of diffusion and reduction mechanisms in metal oxides and ceramic systems relevant to catalysis, energy conversion, and environmental remediation."
    ],
    faculties: [
      "S. Samal",
      "Ajay K. Kushwaha",
      "Abhijit Ghosh",
      "K. V. Vamsi",
      "H. Borkar"
    ],
  },

  {
    title: "Surface Engineering & Materials Degradation",
    slug: "surface-engineering-materials-degradation",
    icon: "🛡️",
    description:
      "This research area focuses on understanding material degradation mechanisms and developing surface modification technologies to improve durability and performance.",
    keyPoints: [
      "Comprehensive investigation of corrosion mechanisms including uniform corrosion, pitting, galvanic corrosion, and stress corrosion cracking in metals, alloys, and coated systems operating in aggressive environments.",
      "Study of high-temperature oxidation behaviour and scale formation kinetics in structural and functional materials used in power plants, turbines, and thermal processing units.",
      "Detailed fatigue and fracture mechanics analysis to understand crack initiation, propagation, and failure in components subjected to cyclic and impact loading.",
      "Development and optimization of joining techniques such as welding, brazing, diffusion bonding, and friction stir welding for improved joint integrity and structural reliability.",
      "Design, synthesis, and characterization of advanced protective coatings and thin films using thermal spraying, physical vapour deposition (PVD), chemical vapour deposition (CVD), and electrochemical techniques.",
      "Surface modification strategies including laser surface treatment, shot peening, nitriding, carburizing, and plasma treatment to enhance wear resistance, hardness, and environmental stability."
    ],
    faculties: [
      "S. Hosmani",
      "J. Murugesan",
      "N. K. Prasad",
      "M. Dubey",
      "V. Kumar",
      "D. Basha",
      "Ajay K. Kushwaha"
    ],
  },

  {
    title: "Energy, Environment & Sustainability",
    slug: "energy-environment-sustainability",
    icon: "⚡",
    description:
      "This research area targets the development of sustainable materials and technologies to address global energy and environmental challenges.",
    keyPoints: [
      "Design and development of advanced photovoltaic materials and device architectures to improve light absorption, charge transport, and long-term operational stability of solar cells.",
      "Research on fuel cell and supercapacitor materials focusing on electrode design, electrolyte optimization, and interface engineering for enhanced energy storage and conversion efficiency.",
      "Development of efficient hydrogen generation, storage, and water-splitting systems using advanced catalysts, membranes, and nanostructured materials.",
      "Investigation of photocatalytic and electrocatalytic processes for clean fuel production, carbon dioxide reduction, and degradation of environmental pollutants.",
      "Research on thermoelectric and piezoelectric materials for waste heat recovery and mechanical-to-electrical energy harvesting applications.",
      "Development of sustainable material processing techniques, recycling strategies, and circular economy approaches to reduce environmental impact and improve resource efficiency."
    ],
    faculties: [
      "P. M. Shirage",
      "Sunil Kumar",
      "Rupesh Devan",
      "Ajay K. Kushwaha",
      "Dhirendra K. Rai",
      "Khushboo Devi"
    ],
  },

  {
    title: "Electronic & Photonic Materials",
    slug: "electronic-photonic-materials",
    icon: "🔬",
    description:
      "This area focuses on the development and characterization of materials for advanced electronic, optoelectronic, and photonic applications.",
    keyPoints: [
      "Development of high-quality thin films using physical vapour deposition (PVD), chemical vapour deposition (CVD), atomic layer deposition (ALD), and solution-based techniques with precise control over thickness and composition.",
      "Design and synthesis of wide-bandgap semiconductors for high-power, high-frequency, and high-temperature electronic devices.",
      "Systematic investigation of optical, electrical, and magnetic transport properties using spectroscopy, Hall measurements, and impedance analysis.",
      "Fabrication and performance evaluation of memory devices, sensors, and optoelectronic components such as LEDs, photodetectors, and laser structures.",
      "Research on power electronic materials for efficient energy conversion, including wide-bandgap oxide and nitride semiconductor systems.",
      "Exploration of emerging materials for spintronic, quantum, and photoactive applications for next-generation computing and communication technologies."
    ],
    faculties: [
      "Ajay K. Kushwaha",
      "Parasharam M. Shirage",
      "Rupesh Devan",
      "Ranjith Kumar Poobalan"
    ],
  },

  {
    title: "Nano & Soft Materials",
    slug: "nano-soft-materials",
    icon: "🔭",
    description:
      "This research area focuses on nanoscale and soft matter systems aimed at creating advanced functional materials with tailored properties.",
    keyPoints: [
      "Controlled synthesis and growth of nanostructured materials using bottom-up and top-down fabrication techniques to achieve desired size, shape, and surface chemistry.",
      "Development and application of zero-dimensional, one-dimensional, and two-dimensional nanomaterials for electronics, sensing, catalysis, and energy storage applications.",
      "Design of complex nano-heterostructures with engineered interfaces to achieve synergistic optical, electrical, and catalytic functionalities.",
      "Detailed investigation of charge carrier dynamics, excitonic effects, and phonon interactions in nanoscale systems using spectroscopic and microscopic tools.",
      "Design and synthesis of multifunctional soft materials and metallogels for applications in sensing, drug delivery, and adaptive materials systems.",
      "Study of self-assembly mechanisms and hierarchical structuring of polymers, biomaterials, and soft matter for the creation of responsive and smart material architectures."
    ],
    faculties: [
      "Parasharam M. Shirage",
      "Ajay K. Kushwaha",
      "Rupesh Devan",
      "Dhirendra K. Rai",
      "S. Samal",
      "Vinod Kumar",
      "M. Dubey"
    ],
  }
]
