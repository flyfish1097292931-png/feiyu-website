export interface Milestone {
  year: string;
  title: string;
  arXiv: string;
  pdf: string;
  journal?: string;
  doi?: string;
  core: string;
  meaning: string;
}

export interface StructureDetail {
  label: string;
  name: string;
  subtitle?: string;
  intro?: string;
  description: string;
  substructures: string[];
  milestones?: Milestone[];
  embeddedReferences?: { title: string; year: string; note: string }[];
}

export interface Structure {
  en: StructureDetail;
  zh: StructureDetail;
}

export const structures: Record<string, Structure> = {
  form: {
    en: {
      label: "STRUCTURE I",
      name: "FORM",
      description: "Investigations into constraints, variations, and extremal consistency.",
      substructures: [
        "Constraints",
        "Variations",
        "Extremal Structures",
        "Consistency",
        "Symmetries",
      ],
      embeddedReferences: [
        { title: "Causality Criteria", year: "2026", note: "Structural consistency" },
        { title: "Butterfly Velocity", year: "2025", note: "Dynamic structure" },
      ],
    },
    zh: {
      label: "结构 I",
      name: "结构",
      description: "对约束、变分及极端一致性的探究。",
      substructures: [
        "约束 (Constraints)",
        "变分 (Variations)",
        "极端结构 (Extremal Structures)",
        "一致性 (Consistency)",
        "对称性 (Symmetries)",
      ],
      embeddedReferences: [
        { title: "Causality Criteria", year: "2026", note: "结构一致性" },
        { title: "Butterfly Velocity", year: "2025", note: "动力学结构" },
      ],
    },
  },
  boundary: {
    en: {
      label: "STRUCTURE II",
      name: "BOUNDARY",
      subtitle: "The world changes when the boundary changes.",
      intro: "Boundary is not a limit. Boundary is a generative mechanism. When boundary conditions change, geometry changes, information flow changes, and the world follows.",
      description: "Studies of interfaces, limits, and encoding structures.",
      substructures: ["Interfaces", "Limits", "Encoding", "Discreteness", "Emergence"],
      milestones: [
        {
          year: "2020",
          title: "Defect extremal surface as the holographic counterpart of Island formula",
          arXiv: "https://arxiv.org/abs/2012.07612",
          pdf: "https://arxiv.org/pdf/2012.07612",
          journal: "JHEP 03 (2021) 008",
          doi: "https://doi.org/10.1007/JHEP03(2021)008",
          core: "Geometrizing the Island formula into defect extremal surfaces.",
          meaning: "The starting point: extremal surfaces as 'defect boundaries' – boundaries as information generators.",
        },
        {
          year: "2021",
          title: "Page curve from defect extremal surface and island in higher dimensions",
          arXiv: "https://arxiv.org/abs/2105.09106",
          pdf: "https://arxiv.org/pdf/2105.09106",
          journal: "JHEP 10 (2021) 149",
          doi: "https://doi.org/10.1007/JHEP10(2021)149",
          core: "Extending defect extremal surfaces to higher-dimensional Page curves.",
          meaning: "Boundary controls the temporal evolution of information flow. Boundary shapes history.",
        },
        {
          year: "2022",
          title: "JT gravity from partial reduction and defect extremal surface",
          arXiv: "https://arxiv.org/abs/2206.09609",
          pdf: "https://arxiv.org/pdf/2206.09609",
          journal: "JHEP 02 (2023) 219",
          doi: "https://doi.org/10.1007/JHEP02(2023)219",
          core: "Partial reduction deriving defect extremal surfaces.",
          meaning: "Unified boundary structure and low-dimensional gravity. A bridge between boundary and constraint.",
        },
        {
          year: "2023",
          title: "End of the world brane meets TTbar",
          arXiv: "https://arxiv.org/abs/2310.15031",
          pdf: "https://arxiv.org/pdf/2310.15031",
          journal: "JHEP 07 (2024) 036",
          doi: "https://doi.org/10.1007/JHEP07(2024)036",
          core: "Linking EOW brane embedding with TT-bar deformation.",
          meaning: "Boundary angle as a flow parameter. Boundary as a fluid structure, not a static object.",
        },
        {
          year: "2024",
          title: "Holographic boundary conformal field theory with TTbar deformation",
          arXiv: "https://arxiv.org/abs/2411.06345",
          pdf: "https://arxiv.org/pdf/2411.06345",
          journal: "JHEP 01 (2025) 020",
          doi: "https://doi.org/10.1007/JHEP01(2025)020",
          core: "Geometric realization of TTbar-deformed BCFT.",
          meaning: "Boundary shift = spectral flow. Geometric flow = information flow. The maturation of the theory.",
        },
        {
          year: "2026",
          title: "Boundary flow and geometric realization in holographic TTbar-deformed BCFT",
          arXiv: "https://arxiv.org/abs/2601.07509",
          pdf: "https://arxiv.org/pdf/2601.07509",
          journal: "Preprint",
          core: "Complete geometric interpretation of boundary flow.",
          meaning: "The world is not inside the boundary; the world is generated in the flow of the boundary.",
        },
      ],
    },
    zh: {
      label: "结构 II",
      name: "边界",
      subtitle: "当边界改变，世界随之改变。",
      intro: "边界不是限制。边界是生成机制。当边界条件改变，几何改变，信息流改变，世界随之改变。",
      description: "关于界面、极限及编码结构的研究。",
      substructures: ["界面 (Interfaces)", "极限 (Limits)", "编码 (Encoding)", "离散性 (Discreteness)", "涌现 (Emergence)"],
      milestones: [
        {
          year: "2020",
          title: "Defect extremal surface as the holographic counterpart of Island formula",
          arXiv: "https://arxiv.org/abs/2012.07612",
          pdf: "https://arxiv.org/pdf/2012.07612",
          journal: "JHEP 03 (2021) 008",
          doi: "https://doi.org/10.1007/JHEP03(2021)008",
          core: "将 Island formula 几何化为 defect extremal surface。",
          meaning: "理论起点：将信息极值面理解为“缺陷边界”——边界即信息生成器。",
        },
        {
          year: "2021",
          title: "Page curve from defect extremal surface and island in higher dimensions",
          arXiv: "https://arxiv.org/abs/2105.09106",
          pdf: "https://arxiv.org/pdf/2105.09106",
          journal: "JHEP 10 (2021) 149",
          doi: "https://doi.org/10.1007/JHEP10(2021)149",
          core: "将 defect extremal surface 推广到高维 Page curve。",
          meaning: "边界控制信息流动的时间演化。边界开始“塑造历史”。",
        },
        {
          year: "2022",
          title: "JT gravity from partial reduction and defect extremal surface",
          arXiv: "https://arxiv.org/abs/2206.09609",
          pdf: "https://arxiv.org/pdf/2206.09609",
          journal: "JHEP 02 (2023) 219",
          doi: "https://doi.org/10.1007/JHEP02(2023)219",
          core: "部分维度约化导出 defect extremal surface。",
          meaning: "边界结构与低维引力统一。建立“边界=引力约束”的桥梁。",
        },
        {
          year: "2023",
          title: "End of the world brane meets TTbar",
          arXiv: "https://arxiv.org/abs/2310.15031",
          pdf: "https://arxiv.org/pdf/2310.15031",
          journal: "JHEP 07 (2024) 036",
          doi: "https://doi.org/10.1007/JHEP07(2024)036",
          core: "EOW brane 嵌入与 TT-bar deformation 建立联系。",
          meaning: "边界角度成为几何流参数。边界不再是静态对象，而是可流动结构。",
        },
        {
          year: "2024",
          title: "Holographic boundary conformal field theory with TTbar deformation",
          arXiv: "https://arxiv.org/abs/2411.06345",
          pdf: "https://arxiv.org/pdf/2411.06345",
          journal: "JHEP 01 (2025) 020",
          doi: "https://doi.org/10.1007/JHEP01(2025)020",
          core: "完整建立 TTbar-deformed BCFT 的几何实现。",
          meaning: "边界位移 = 能谱流。几何流 = 信息流。这是理论成熟标志。",
        },
        {
          year: "2026",
          title: "Boundary flow and geometric realization in holographic TTbar-deformed BCFT",
          arXiv: "https://arxiv.org/abs/2601.07509",
          pdf: "https://arxiv.org/pdf/2601.07509",
          journal: "Preprint",
          core: "完整边界流动的几何解释。",
          meaning: "世界不是存在于边界内部。世界在边界流动中生成。",
        },
      ],
    },
  },
  system: {
    en: {
      label: "STRUCTURE III",
      name: "SYSTEM",
      subtitle: "No boundary mechanism survives without consistency.",
      description: "Models of stability, revision, and structural responsibility.",
      substructures: ["Stability", "Revision", "Responsibility", "Collapse", "Incentives"],
      milestones: [
        {
          year: "2026",
          title: "Causality Criteria for Island Models",
          arXiv: "https://arxiv.org/abs/2601.05620",
          pdf: "https://arxiv.org/pdf/2601.05620",
          journal: "Preprint",
          core: "Defining causality consistency standards for Island constructions.",
          meaning: "Boundary-generated worlds must satisfy causal constraints, otherwise they result in illegal structures.",
        },
        {
          year: "2025",
          title: "An Interpretation for the Equivalence of Two Holographic Computations of the Butterfly Velocity with the Canonical Formalism of Gravity",
          arXiv: "https://arxiv.org/abs/2512.04498",
          pdf: "https://arxiv.org/pdf/2512.04498",
          journal: "Preprint",
          core: "Aligning butterfly velocity with canonical gravity formalism.",
          meaning: "Unified boundary structure and gravitational dynamics. Establishing system-level self-consistency.",
        },
      ],
    },
    zh: {
      label: "结构 III",
      name: "系统",
      subtitle: "没有一致性，任何边界机制都无法存续。",
      description: "稳定性、修正及结构性责任的模型。",
      substructures: ["稳定性 (Stability)", "修正 (Revision)", "责任 (Responsibility)", "崩溃 (Collapse)", "激励 (Incentives)"],
      milestones: [
        {
          year: "2026",
          title: "Causality Criteria for Island Models",
          arXiv: "https://arxiv.org/abs/2601.05620",
          pdf: "https://arxiv.org/pdf/2601.05620",
          journal: "Preprint",
          core: "为 Island 构造定义因果一致性标准。",
          meaning: "边界生成世界必须满足因果约束，否则生成非法结构。",
        },
        {
          year: "2025",
          title: "An Interpretation for the Equivalence of Two Holographic Computations of the Butterfly Velocity with the Canonical Formalism of Gravity",
          arXiv: "https://arxiv.org/abs/2512.04498",
          pdf: "https://arxiv.org/pdf/2512.04498",
          journal: "Preprint",
          core: "将蝴蝶速度与正则引力形式对应。",
          meaning: "边界结构与引力动力学统一。系统级自洽性建立。",
        },
      ],
    },
  },
  narrative: {
    en: {
      label: "STRUCTURE IV",
      name: "NARRATIVE",
      description: "Explorations of law, memory, causality, and structured absence.",
      substructures: ["Law", "Memory", "Causality", "Absence", "Myth"],
    },
    zh: {
      label: "结构 IV",
      name: "叙事",
      description: "对法则、记忆、因果及结构性缺席的探讨。",
      substructures: ["法则 (Law)", "记忆 (Memory)", "因果 (Causality)", "缺席 (Absence)", "神话 (Myth)"],
    },
  },
  lab: {
    en: {
      label: "STRUCTURE V",
      name: "LAB",
      description: "Prototypes, tools, and experiments. Under construction.",
      substructures: ["Interfaces", "Prototypes", "Systems", "Iterations", "Tooling"],
    },
    zh: {
      label: "结构 V",
      name: "实验室",
      description: "原型、工具与实验。建设中。",
      substructures: ["界面 (Interfaces)", "原型 (Prototypes)", "系统 (Systems)", "迭代 (Iterations)", "工具链 (Tooling)"],
    },
  },
};

export const translations = {
  en: {
    about: "ABOUT",
    return: "RETURN",
    underConstruction: "[ UNDER CONSTRUCTION ]",
    inProgress: "IN PROGRESS.",
    aboutPara1: "This site is a functional map of evolving thought. It serves as an abstract framework for navigating domains of investigation, prioritizing the architecture of inquiry over specific conclusions.",
    aboutPara2: "The focus is on the underlying structures — the forms, boundaries, systems, and narratives that define and constrain our understanding of complex domains.",
    substructures: "SUBSTRUCTURES",
    theoryEvolution: "THEORY EVOLUTION",
    technicalCore: "TECHNICAL CORE",
    structuralSignificance: "STRUCTURAL SIGNIFICANCE",
    gateway: {
      thesis: "World emerges when the boundary flows.",
      enter: "ENTER",
    },
    world: {
      title: "WORLD",
      returnGateway: "GATEWAY",
    },
    footer: {
      line1: "When the boundary flows,",
      line2: "the world follows.",
    }
  },
  zh: {
    about: "关于 (ABOUT)",
    return: "返回 (RETURN)",
    underConstruction: "[ 建设中 / UNDER CONSTRUCTION ]",
    inProgress: "进行中 (IN PROGRESS).",
    aboutPara1: "本站是演进思维的功能图谱。它作为一个抽象框架，用于导览研究领域，优先考虑探究的架构而非具体结论。",
    aboutPara2: "重点在于底层结构——即定义并约束我们对复杂领域理解的形式、边界、系统与叙事。",
    substructures: "子结构 (SUBSTRUCTURES)",
    theoryEvolution: "理论演化 (THEORY EVOLUTION)",
    technicalCore: "技术核心",
    structuralSignificance: "结构意义",
    gateway: {
      thesis: "当边界流动，世界随之生成",
      enter: "进入",
    },
    world: {
      title: "世界",
      returnGateway: "门户",
    },
    footer: {
      line1: "当边界流动，",
      line2: "世界随之生成。",
    }
  },
};
