import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '../public/iconfont/iconfont.css'
import { createPinia } from 'pinia'
import VueAwesomeSwiper  from 'vue-awesome-swiper'
import 'swiper/css';

/*import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'*/
// import * as echarts from 'echarts';
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(VueAwesomeSwiper)
// app.use(ElementPlus)
// app.config.globalProperties.$echarts = echarts
app.mount('#app')
/* (function(doc){
        let docEl = doc.documentElement;  // 获取根节点的html
        doc.addEventListener('DOMContentLoaded',recalc)
        function recalc(){
            let width = docEl.clientWidth;
            docEl.style.fontSize = 20 * (width / 320) + 'px';
        }
    })(document) */