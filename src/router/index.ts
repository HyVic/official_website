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
                    component: () => import('../views/ServicePage.vue')
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
                    component: () => import('../views/ResourcePage.vue')
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