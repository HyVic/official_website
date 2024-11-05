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
      },
      {
        icon: "icon-xiaozhao1",
        name: "重测序",
        id: "advantage",
      },
      {
        icon: "icon-qiyewenhua1",
        name: "转录组测序",
        id: "culture",
      },
      {
        icon: "icon-home",
        name: "数据服务",
        id: "strategy",
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
      },
      {
        icon: "icon-hangyexinwen1",
        name: "问题解答",
        id: "news2",
      },
      {
        icon: "icon-hangyexinwen1",
        name: "资料下载",
        id: "news3",
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
    icon: "src/assets/Service1.png",
    title: "Capture Sequencing",
    cont: "The technology of customizing target genomic regions into specific probes, hybridizing and enriching them with genomic DNA, and then using second-generation sequencing for detection",
  },
  {
    icon: "src/assets/Service2.png",
    title: "Resequencing",
    cont: "Sequencing the genomes of different individuals of species with known genome sequences, and conducting differential analysis on individuals or populations based on this",
  },
  {
    icon: "src/assets/Service3.png",
    title: "Transcriptome Sequencing",
    cont: "Based on high-throughput sequencing technology, cDNA is sequenced to obtain information on all transcripts of a specific cell of a species in a certain state",
  },
  {
    icon: "src/assets/Service4.png",
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
  }
];
export const productCropList = [
  {
    id: 1,
    name: "小麦",
    cont: '5K/20K/120K/800K/外显子',
    image: "../src/assets/crop/1.jpg"
  },
  {
    id: 2,
    name: "水稻",
    cont: '15K/20K/60K/80K',
    image: '../src/assets/crop/2.jpg'
  },
  {
    id: 3,
    name: "玉米",
    cont: '15K/20K/60K/80K',
    image: '../src/assets/crop/3.jpg'
  },
  {
    id: 4,
    name: "大豆",
    cont: '10K/60K',
    image: '../src/assets/crop/4.jpg'
  },
  {
    id: 5,
    name: "燕麦",
    cont: '5K/50K/90K',
    image: '../src/assets/crop/5.jpg'
  },
  {
    id: 6,
    name: "棉花",
    cont: '5K/20K/60K/100K',
    image: '../src/assets/crop/6.jpg'
  },
  {
    id: 7,
    name: "大麦",
    cont: '60K/外显子',
    image: '../src/assets/crop/7.jpg'
  },
  {
    id: 8,
    name: "辣椒",
    cont: '5K/20K/60K',
    image: '../src/assets/crop/8.jpg'
  },
  {
    id: 9,
    name: "马铃薯",
    cont: '10K/50K',
    image: '../src/assets/crop/9.jpg'
  },
  {
    id: 10,
    name: "烟草",
    cont: '50K/外显子',
    image: '../src/assets/crop/10.jpg'
  },
  {
    id: 11,
    name: "甜瓜",
    cont: '5K',
    image: '../src/assets/crop/11.jpg'
  },
  {
    id: 12,
    name: "柏树",
    cont: '外显子',
    image: '../src/assets/crop/12.jpg'
  },
  {
    id: 13,
    name: "棕榈",
    cont: '6K',
    image: '../src/assets/crop/13.jpg'
  }
];
export const productAnimalList = [
  {
    id: 1,
    name: "猪", 
    cont: '60K',
    image: '../src/assets/animal/1.jpg'
  },
  {
    id: 2,
    name: "羊",
    cont: '50K',
    image: '../src/assets/animal/1.jpg'
  },
  {
    id: 3,
    name: "牛",
    cont: '60K',
    image: '../src/assets/animal/1.jpg'
  },
  {
    id: 4,
    name: "鸡",
    cont: '70K',
    image: '../src/assets/animal/1.jpg'
  },
  {
    id: 5,
    name: "鹅",
    cont: '40K',
    image: '../src/assets/animal/1.jpg'
  },
  {
    id: 6,
    name: "兔",
    cont: '50K',
    image: '../src/assets/animal/1.jpg'
  },
  {
    id: 7,
    name: "狗",
    cont: '80K',
    image: '../src/assets/animal/1.jpg'
  },
  {
    id: 8,
    name: "猫",
    cont: '90K',
    image: '../src/assets/animal/1.jpg'
  }
]
export const productCustomizedList = [
  {
    id: 1,
    name: "定制", 
    cont: '企业级SNP检测方案，接受定制',
    image: '../src/assets/customiz/1.jpg'
  },
  {
    id: 2,
    name: "定制", 
    cont: '企业级SNP检测方案，接受定制',
    image: '../src/assets/customiz/1.jpg'
  },
  {
    id: 3,
    name: "定制", 
    cont: '企业级SNP检测方案，接受定制',
    image: '../src/assets/customiz/1.jpg'
  },
  {
    id: 4,
    name: "定制", 
    cont: '企业级SNP检测方案，接受定制',
    image: '../src/assets/customiz/1.jpg'
  },
]