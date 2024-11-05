<template>
  <!--   <el-carousel
    :height="carouselHeight"
    :autoplay="true"
    :arrow="imgList.length ? 'hover' : 'never'"
    ref="carouselItem"
  >
    <el-carousel-item v-for="(item, index) in imgList" :key="index">
      <div class="carousel">
        <img :src="item" />
      </div>
    </el-carousel-item>
  </el-carousel> -->
  <!--   <el-carousel height="200px" motion-blur>
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
  <img :src="transImg[0]" alt="" />
</template>
<script setup>
import { ref, defineProps, onMounted, nextTick } from "vue";
const carouselHeight = ref();
const props = defineProps({
  transImg: Array,
  type: String,
  title: String,
});
const carouselItem = ref(null);
const imgList = ref([]);
onMounted(() => {
  console.log(1, props.transImg.length);
  nextTick(() => {
    imgList.value = props.transImg;
  });
  //通过图片数量来控制底部的横线是否显示
  /* let slides = carouselItem.value.$el.querySelectorAll(
    ".el-carousel__indicators--horizontal"
  );
  slides.forEach((slide) => {
    props.transImg.length > 1
      ? (slide.style.display = "block")
      : (slide.style.display = "none");
  }); */
});
</script>
<style scoped lang="scss">
img{
  width: 100%;
}
.carousel {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
  .news {
    position: absolute;
    top: 0;
    left: 0;
  }
}
:deep .el-carousel__container {
  height: 700px;
  //height: 100vh;
}
@media screen and (max-width: 1200px) {
  :deep .el-carousel__container {
    height: 500px !important;
  }
  .inner {
    width: 90% !important;
  }
}
@media screen and (max-width: 768px) {
  :deep .el-carousel__container {
    height: 300px !important;
  }
}
</style>
