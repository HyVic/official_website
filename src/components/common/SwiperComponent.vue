<template>
  <swiper
    :modules="modules"
    :loop="true"
    :slides-per-view="6"
    :space-between="50"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :navigation="navigation"
    :pagination="{ clickable: false, hideOnClick: true }"
    :scrollbar="{ draggable: false }"
    class="swiperBox"
    @slideChange="onSlideChange"
  >
    <template v-for="(item, index) in cooperationList" :key="index">
      <swiper-slide>
        <div class="swiper_inner">
          <div class="img"><img :src="item.img" alt="" /></div>
          <div class="text">{{ item.cn }}</div>
        </div>
      </swiper-slide>
    </template>
    <!--           <swiper-slide>Slide 1</swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide> -->
    <div class="swiper-button-prev" @click.stop="prevEl"></div>

    <div class="swiper-button-next" @click.stop="nextEl"></div>
  </swiper>
</template>
<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination"; // 轮播图底面的小圆点
import "swiper/css/navigation"; // 轮播图两边的左右箭头
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
const props = defineProps({
  cooperationList: {
    type: Array,    
  }
})
const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar];
const prevEl = () => {
  // console.log('上一张' + index + item)
};
const nextEl = () => {
  // console.log('下一张')
};
// 更改当前活动swiper
const onSlideChange = (swiper) => {
  // swiper是当前轮播的对象，里面可以获取到当前swiper的所有信息，当前索引是activeIndex
  console.log(swiper.activeIndex);
};
onMounted(() => { 
    console.log('mounted',props.cooperationList)  
})
</script>
<style scoped lang="scss">
.swiper_inner {
  .img {
    width: 100%;
    height: 110px;
    img {
      width: 100px;
      height: auto;
    }
  }
  .text {
    font-size: 12px;
  }
}
</style>
