import { en } from "element-plus/es/locales.mjs";

export const navDropDownData = [
  { id: 0, name: "Home", route: "HomePage", label: "home", list: [] },
  {
    id: 1,
    name: "Service",
    route: "ServicePage",
    label: "service",
    list: [
      {
        icon: "icon-hangyexinwen",
        name: "捕获测序",
        id: "overview",
        route: "CaptureSequencing",
        label: "capture-sequencing",
      },
      {
        icon: "icon-xiaozhao1",
        name: "重测序",
        id: "advantage",
        route: "ResequencingPage",
        label: "resequencing-page",
      },
      {
        icon: "icon-qiyewenhua1",
        name: "转录组测序",
        id: "culture",
        route: "TranscriptomeSequencing",
        label: "transcriptome-sequencing",
      },
      {
        icon: "icon-home",
        name: "数据服务",
        id: "strategy",
        route: "DataService",
        label: "data-service",
      },
    ],
  },
  {
    id: 2,
    name: "Product",
    route: "ProductPage",
    label: "product",
    list: [
      {
        name: "作物",
        icon: "icon-qiyewenhua1",
        id: "crop",
        route: "CropPage",
        label: "crop",
      },
      {
        name: "动物",
        icon: "icon-qiyewenhua1",
        id: "animal",
        route: "AnimalPage",
        label: "animal",
      },
      {
        name: "定制",
        icon: "icon-qiyewenhua1",
        id: "custom",
        route: "CustomizedPage",
        label: "customized",
      },
    ],
  },
  {
    id: 3,
    name: "Resource",
    route: "ResourcePage",
    label: "resource",
    list: [
      {
        icon: "icon-xinwen1",
        name: "送样要求",
        id: "news1",
        route: "SampleRequirements",
        label: "sample-requirements",
      },
      {
        icon: "icon-hangyexinwen1",
        name: "问题解答",
        id: "news2",
        route: "ProblemSolving",
        label: "problem-solving",
      },
      {
        icon: "icon-hangyexinwen1",
        name: "资料下载",
        id: "news3",
        route: "ResourceDownload",
        label: "resource-download",
      },
    ],
  },
  {
    id: 4,
    name: "About",
    route: "AboutView",
    label: "about",
    list: [
      {
        icon: "icon-shezhao3",
        name: "公司简介",
        route: "SocialRecruitment",
      },
      {
        icon: "icon-xiaozhao1",
        name: "人才招聘",
        route: "CampusRecruitment",
      },
      {
        icon: "icon-xiaozhao1",
        name: "联系我们",
        route: "CampusRecruitment",
      },
    ],
  },
];
export const seviceNav = [
  {
    icon: "src/assets/service/1.png",
    title: "Capture Sequencing",
    cont: "The technology of customizing target genomic regions into specific probes, hybridizing and enriching them with genomic DNA, and then using second-generation sequencing for detection",
  },
  {
    icon: "src/assets/service/2.png",
    title: "Resequencing",
    cont: "Sequencing the genomes of different individuals of species with known genome sequences, and conducting differential analysis on individuals or populations based on this",
  },
  {
    icon: "src/assets/service/3.png",
    title: "Transcriptome Sequencing",
    cont: "Based on high-throughput sequencing technology, cDNA is sequenced to obtain information on all transcripts of a specific cell of a species in a certain state",
  },
  {
    icon: "src/assets/service/4.png",
    title: "Data Service",
    cont: "The United Nations Supercomputing Chengdu Center provides large-scale computational biology services for researchers and breeders",
  },
];
export const productNav = [
  {
    bg: "src/assets/Product1.jpg",
    icon: "src/assets/Product1icon.png",
    title: "Crop",
  },
  {
    bg: "src/assets/Product2.jpg",
    icon: "src/assets/Product2icon.png",
    title: "Animal",
  },
  {
    bg: "src/assets/Product3.jpg",
    icon: "src/assets/Product3icon.png",
    title: "Custom",
  },
];
export const aboutCompany = {
  bg: "src/assets/AboutUs.jpg",
  icon: "src/assets/Tcuni.png",
  text: `Tiancheng Future is one of the earliest enterprises in China to apply targeted capture sequencing technology to agricultural scientific research. 
  It has a large-scale database of animal and crop genomes, and has developed a series of animal and plant breeding chips and data computing cloud platforms. 
  Enterprises use biotechnology as a tool to obtain data support for biological breeding, 
  utilize data and algorithms to generate value from data, and ultimately promote the development and innovation of the seed industry.`,
};
export const cooperationList = [
  {
    img: "src/assets/cooperation/1.jpg",
    cn: "中科院遗传与发育研究所",
    en: "Institute of Genetics and Developmental Biology, Chinese Academy of Sciences",
  },
  {
    img: "src/assets/cooperation/2.png",
    cn: "中国农业大学",
    en: "China Agricultural University",
  },
  {
    img: "src/assets/cooperation/3.png",
    cn: "扬州大学",
    en: "Yangzhou University",
  },
  {
    img: "src/assets/cooperation/4.jpg",
    cn: "西北农林科技大学",
    en: "Northwest A&F University",
  },
  {
    img: "src/assets/cooperation/5.jpg",
    cn: "四川农业大学",
    en: "Sichuan Agricultural University",
  },
  {
    img: "src/assets/cooperation/6.jpg",
    cn: "四川大学",
    en: "Sichuan University",
  },
  {
    img: "src/assets/cooperation/7.jpg",
    cn: "山西农业大学 ",
    en: "Shanxi Agricultural University",
  },
  {
    img: "src/assets/cooperation/8.jpg",
    cn: "江苏省农科院",
    en: "Jiangsu Academy of Agricultural Sciences",
  },
  {
    img: "src/assets/cooperation/9.jpg",
    cn: "河南农业大学",
    en: "Henan Agricultural University",
  },
  {
    img: "src/assets/cooperation/10.jpg",
    cn: "河南科技大学",
    en: "Henan University of Science and Technology",
  },
  {
    img: "src/assets/cooperation/11.jpg",
    cn: "河南大学",
    en: "Henan University",
  },
  {
    img: "src/assets/cooperation/12.jpg",
    cn: "河北农业大学",
    en: "Hebei Agricultural University",
  },
  {
    img: "src/assets/cooperation/13.jpg",
    cn: "北京大学",
    en: "Peking University",
  },
  {
    img: "src/assets/cooperation/14.jpg",
    cn: "中国农业科学院",
    en: "Chinese Academy of Agricultural Sciences",
  },
];
export const productNavList = [
  {
    id: 1,
    name: "小麦",
  },
  {
    id: 2,
    name: "玉米",
  },
  {
    id: 3,
    name: "水稻",
  },
  {
    id: 4,
    name: "大豆",
  },
  {
    id: 5,
    name: "燕麦",
  },
  {
    id: 6,
    name: "辣椒",
  },
  {
    id: 7,
    name: "大麦",
  },
  {
    id: 8,
    name: "棉花",
  },
  {
    id: 9,
    name: "马铃薯",
  },
  {
    id: 10,
    name: "烟草",
  },
  {
    id: 11,
    name: "甜瓜",
  },
  {
    id: 12,
    name: "柏树",
  },
  {
    id: 13,
    name: "棕榈",
  },
];
export const productCropList = [
  {
    id: 1,
    name: "小麦",
    cont: "5K/20K/120K/800K/外显子",
    image: "../src/assets/crop/1.jpg",
  },
  {
    id: 2,
    name: "水稻",
    cont: "15K/20K/60K/80K",
    image: "../src/assets/crop/2.jpg",
  },
  {
    id: 3,
    name: "玉米",
    cont: "15K/20K/60K/80K",
    image: "../src/assets/crop/3.jpg",
  },
  {
    id: 4,
    name: "大豆",
    cont: "10K/60K",
    image: "../src/assets/crop/4.jpg",
  },
  {
    id: 5,
    name: "燕麦",
    cont: "5K/50K/90K",
    image: "../src/assets/crop/5.jpg",
  },
  {
    id: 6,
    name: "棉花",
    cont: "5K/20K/60K/100K",
    image: "../src/assets/crop/6.jpg",
  },
  {
    id: 7,
    name: "大麦",
    cont: "60K/外显子",
    image: "../src/assets/crop/7.jpg",
  },
  {
    id: 8,
    name: "辣椒",
    cont: "5K/20K/60K",
    image: "../src/assets/crop/8.jpg",
  },
  {
    id: 9,
    name: "马铃薯",
    cont: "10K/50K",
    image: "../src/assets/crop/9.jpg",
  },
  {
    id: 10,
    name: "烟草",
    cont: "50K/外显子",
    image: "../src/assets/crop/10.jpg",
  },
  {
    id: 11,
    name: "甜瓜",
    cont: "5K",
    image: "../src/assets/crop/11.jpg",
  },
  {
    id: 12,
    name: "柏树",
    cont: "外显子",
    image: "../src/assets/crop/12.jpg",
  },
  {
    id: 13,
    name: "棕榈",
    cont: "6K",
    image: "../src/assets/crop/13.jpg",
  },
];
export const productAnimalList = [
  {
    id: 1,
    name: "猪",
    cont: "60K",
    image: "../src/assets/animal/1.jpg",
  },
  {
    id: 2,
    name: "羊",
    cont: "50K",
    image: "../src/assets/animal/1.jpg",
  },
  {
    id: 3,
    name: "牛",
    cont: "60K",
    image: "../src/assets/animal/1.jpg",
  },
  {
    id: 4,
    name: "鸡",
    cont: "70K",
    image: "../src/assets/animal/1.jpg",
  },
  {
    id: 5,
    name: "鹅",
    cont: "40K",
    image: "../src/assets/animal/1.jpg",
  },
  {
    id: 6,
    name: "兔",
    cont: "50K",
    image: "../src/assets/animal/1.jpg",
  },
  {
    id: 7,
    name: "狗",
    cont: "80K",
    image: "../src/assets/animal/1.jpg",
  },
  {
    id: 8,
    name: "猫",
    cont: "90K",
    image: "../src/assets/animal/1.jpg",
  },
];
export const productCustomizedList = [
  {
    id: 1,
    name: "定制",
    cont: "企业级SNP检测方案，接受定制",
    image: "../src/assets/customiz/1.jpg",
  },
  {
    id: 2,
    name: "定制",
    cont: "企业级SNP检测方案，接受定制",
    image: "../src/assets/customiz/1.jpg",
  },
  {
    id: 3,
    name: "定制",
    cont: "企业级SNP检测方案，接受定制",
    image: "../src/assets/customiz/1.jpg",
  },
  {
    id: 4,
    name: "定制",
    cont: "企业级SNP检测方案，接受定制",
    image: "../src/assets/customiz/1.jpg",
  },
];
export const productCaptureSequencing = {
  navTitle: "Targeted capture sequencing",
  describeList: [
    `靶向捕获测序:是随着二代测序成熟后出现的一种低成本高通量位点检测技术。这项技术早期最广泛的应用是在医学研究中的全外显子捕获测序及遗传疾病位点检测中。在国际上，
      这项技术通常称之为“Targeted genotyping by sequencing”或“Genotyping by target sequencing”，国内通常称之为“靶向捕获测序”。在医学基础研究和临床检测筛查中，
      多个SNP的位点或基因集合叫做"SNP Panel" 或 "Gene Panel"。`,
    `捕获测序是指对基因组特定区域进行特异性的高深度测序，包括QTL区域、蛋白编码区域、基因调控区域等，简化目标物种基因组，极大地减少了冗余序列，可以更加精准和快速定位与特定性状相关的候选基因。`,
    `在国内一些育种领域的工作者常常使用“液相芯片”这样的词来进行靶向测序工作介绍。但“液相芯片”不是芯片，而是高密度的“核酸序列集合”（类似于高密度引物序列），
      通过分子杂交的方式获得特定区域的序列信息，得到的结果可以进行动/植物品系鉴定、优势性状筛选、或者进行群体遗传学分析、种质亲缘关系分析等。`,
  ],
  title: "Technology roadmap",
  image: "../src/assets/product/1.jpg",
};

export const productResequencing = {
  navTitle: "Resequencing",
  describeList: [
    `全基因组重测序是对已知基因序列的物种进行不同个体的全基因组测序，并在此基础上对该物种的个体或者群体进行差异性分析。
      可以获得大量可遗传的变异信息开发分子标记（SNP/CNVs/InDel/SV等），用于研究中遗传图谱构建、全基因组关联分析（GWAS）、全基因组选择（GS）、进化分析等。`,
  ],
  title: "Technology roadmap",
  image: "../src/assets/product/2.jpg",
};

export const productTranscriptomeSequencing = {
  navTitle: "TranscriptomeSequencing",
  describeList: [
    `转录组测序，是最近发展起来的利用深度测序技术进行转录组分析的技术，该技术能够在单核苷酸水平对任意物种的整体转录活动进行检测，在分析转录本的结构和表达水平的同时，
      还能发现未知转录本和稀有转录本，精确地识别可变剪切位点以及cSNP(编码序列单核苷酸多态性)，提供更为全面的转录组信息。相对于传统的芯片杂交平台，RNA-Seq无需预先针对已知序列设计探针，即可对任意物种的整体转录活动进行检测，
      提供更精确的数字化信号，更高的检测通量以及更广泛的检测范围，主要用于基因表达分析，也可以用于新转录本、SNP、剪接变体鉴定，等位基因差异表达分析等。`,
  ],
  title: "Technology roadmap",
  image: "../src/assets/product/3.png",
};

export const productDataService = {
  navTitle: "DataService",
  describeList: [
    `成都天成未来联合国家超算成都中心为科研工及育种工作者提供大规模的计算生物学服务，利用超大规模的并行计算集群，可实现群体数据的快速交付。在算法及异构平台的加持下，能够显著降低基因组学分析成本。`,
  ],
  title: "",
  image: "../src/assets/product/4.jpg",
  children: [
    {
      title: "Customized database development",
      describeList: [
        `为科研工作者提供标准化及个性化的种质资源数据库开发、育种算法开发、基因组学工具开发。`,
      ],
      list: [
        {
          title: "应用案例一  济麦22突变体库",
          image: ["../src/assets/product/5.png"],
          describe: `由烟台大学生命科学学院宋建成团队与烟台吉恩生物合作完成济麦22突变体库是国内最早进行商业化运行的突变体库。天成未来提供外显子捕获测序实验及数据分析工作。`,
        },
        {
          title: "应用案列二 京411突变库",
          image: ["../src/assets/product/6.png"],
          describe: `中国农业科学院作物科学研究所刘录祥研究员团队构建了以六倍体普通小麦骨干亲本京411为背景的突变体库。该突变体库由EMS、C离子及γ射线诱变产生，是国内第一个诱变技术多样性突变库，
          同时也是第一个使用泛基因组外显子探针进行捕获测序的突变体库。天成未来提供泛基因组外显子捕获测序及数据库工作。`,
        },
        {
          title: "应用案列三 矮抗58突变体库",
          image: [],
          describe: `矮抗58(AK58)突变体库中国农科院作科所团队、河南大学团队合作完成。该突变库是使用河南科技学院培育的获国家科技进步一等奖的黄淮麦区的主栽品种矮抗58为材料，经EMS诱变，自交3代后培育而成。`,
        },
        {
          title: "应用案列四 科农9204突变库",
          image: ["../src/assets/product/7.png", "../src/assets/product/8.png"],
          describe: `中国科学院遗传与发育生物学研究所、北京大学、河北师范大学、河北省农林科学研究院及鲁东大学等团队利用EMS诱变技术构建了小麦骨干亲本科农9204近饱和突变体库，
          并利用中国科学院遗传与发育生物学研究所凌宏清团队与天成未来合作开发的以科农9204参考基因组为模板的小麦外显子捕获探针对2090份突变体（系）进行外显子捕获测序，
          获得了依托科农9204参考基因组的变异信息库，变异覆盖98.79%的编码基因。`,
        },
      ],
    },
    {
      title: "Germplasm Resource Big Data Service",
      describeList: [
        `提供利用二代测序的大规模群体测序及数据分析服务。包括重测序、转录组、表观组学等。`,
        `大规模突变体库的创制是生物育种的一项重要手段，同时也是作物基础研究的重要工具。目前公开报道的作物突变库测序项目如下：`,
      ],
      list: [
        {
          title: "玉米突变体库",
          image: [
            "../src/assets/product/9.png",
            "../src/assets/product/9-1.png",
          ],
        },
        {
          title: "西瓜突变体库",
          image: [
            "../src/assets/product/10.png",
            "../src/assets/product/10-1.png",
          ],
        },
        {
          title: "白菜突变库",
          image: [
            "../src/assets/product/11.png",
            "../src/assets/product/11-1.png",
          ],
        },
        {
          title: "棉花突变体库",
          image: [
            "../src/assets/product/12.png",
            "../src/assets/product/12-1.png",
          ],
        },
        {
          title: "大麦突变体库",
          image: [
            "../src/assets/product/13.png",
            "../src/assets/product/13-1.png",
          ],
        },
      ],
    },
  ],
};
export const serviceList = [
  {
    id: 0,
    ch: "捕获测序",
    en: "Capture Sequencing",
    route: "CaptureSequencing",
    label: "capture-sequencing",
    image: "../src/assets/service/1.png",
  },
  {
    id: 1,
    ch: "重测序",
    en: "Resequencing",
    route: "ResequencingPage",
    label: "resequencing-page",
    image: "../src/assets/service/2.png",
  },
  {
    id: 2,
    ch: "转录组测序",
    en: "Transcriptome Sequencing",
    route: "TranscriptomeSequencing",
    label: "transcriptome-sequencing",
    image: "../src/assets/service/3.png",
  },
  {
    id: 3,
    ch: "数据服务",
    en: "Data Service",
    route: "DataService",
    label: "data-service",
    image: "../src/assets/service/4.png",
  },
];
export const resourceList = [
  {
    id: 0,
    ch: "送样要求",
    en: "Sample submission requirements",
    route: "SampleRequirements",
    label: "sample-requirements",
    image: "../src/assets/resource/nav1.png",
  },
  {
    id: 1,
    ch: "问题解答",
    en: "Problem Solving",
    route: "ProblemSolving",
    label: "problem-solving",
    image: "../src/assets/resource/nav2.png",
  },
  {
    id: 2,
    ch: "资料下载",
    en: "Resource Download",
    route: "ResourceDownload",
    label: "resource-download",
    image: "../src/assets/resource/nav3.png",
  }
];
