import { createRouter, createWebHistory  } from 'vue-router'
// import HomeIndex from '../views/IndexPage.vue'
const router = createRouter({
    history: createWebHistory (),
    routes: [
        {
            path: '/',
            name: 'LogoPage',
            component: () => import('../views/LogoPage.vue'),
        },
        {
            path: '/index',
            name: 'IndexPage',
            component: () => import('../views/IndexPage.vue'),
            meta:{keepAlive: true},
            redirect: {
                name: 'HomePage'
            },
            children:[
                {
                    path: '/home',
                    name: 'HomePage',
                    meta:{title:"首页"},
                    component: () => import('../views/HomePage.vue')
                },
                {
                    path: '/service',
                    name: 'ServicePage',
                    meta:{title:"技术服务"},
                    component: () => import('../views/ServicePage.vue'),
                    redirect: {
                        name: 'CaptureSequencing'
                    },
                    children:[
                        {
                            path: '/service/capture-sequencing',
                            name: 'CaptureSequencing', 
                            meta:{title:"捕获测序"},
                            component: () => import('../components/service-page/CaptureSequencing.vue')
                        },
                        {
                            path: '/service/resequencing-page',
                            name: 'ResequencingPage', 
                            meta:{title:"重测序"},
                            component: () => import('../components/service-page/ResequencingPage.vue')
                        },
                        {
                            path: '/service/transcriptome-sequencing',
                            name: 'TranscriptomeSequencing', 
                            meta:{title:"转录组测序"},
                            component: () => import('../components/service-page/TranscriptomeSequencing.vue')
                        },
                        {
                            path: '/service/data-service',
                            name: 'DataService', 
                            meta:{title:"数据服务"},
                            component: () => import('../components/service-page/DataService.vue')
                        }
                    ]
                },
                {
                    path: '/product',
                    name: 'ProductPage',
                    meta:{title:"产品中心"},
                    redirect: {
                        name: 'CropPage'
                    },
                    component: () => import('../views/ProductPage.vue'),
                    children:[
                        {
                            path: '/product/crop',
                            name: 'CropPage',
                            meta:{title:"作物"},
                            component: () => import('../components/product-page/CropPage.vue')
                        },
                        {
                            path: '/product/animal',
                            name: 'AnimalPage',
                            meta:{title:"动物"},
                            component: () => import('../components/product-page/AnimalPage.vue')
                        },
                        {
                            path: '/product/customized',
                            name: 'CustomizedPage',
                            meta:{title:"定制"},
                            component: () => import('../components/product-page/CustomizedPage.vue')
                        }
                    ]
                },
                {
                    path: '/resource',
                    name: 'ResourcePage',
                    meta:{title:"客户解答"},
                    component: () => import('../views/ResourcePage.vue'),
                    redirect: {
                        name: 'SampleRequirements'
                    },
                    children:[
                        {
                            path: '/resource/sample-requirements',
                            name: 'SampleRequirements',
                            meta:{title:"送样要求"},
                            component: () => import('../components/resource-page/SampleRequirements.vue')
                        },
                        {
                            path: '/resource/problem-solving',
                            name: 'ProblemSolving',
                            meta:{title:"问题解答"},
                            component: () => import('../components/resource-page/ProblemSolving.vue')
                        },
                        {
                            path: '/resource/resource-download',
                            name: 'ResourceDownload',
                            meta:{title:"资料下载"},
                            component: () => import('../components/resource-page/ResourceDownload.vue')
                        },
                    ]
                },
                {
                    path: '/about',
                    name: 'AboutView',
                    meta:{title:"关于我们"},
                    component: () => import('../views/AboutView.vue')
                }

            ]
        },
    ],
    scrollBehavior() {
        // 始终滚动到顶部
        return { top: 0 };
    }
})
export default router