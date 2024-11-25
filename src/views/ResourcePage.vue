<template>
  <div class="service_page" id="images">
    <img src="../assets/resource-bg.jpg" alt="" />
  </div>
  <div class="product_nav" id="productNav">
    <div class="product_nav_inner">
      <div
        class="single_choose"
        :class="{ active: active === index }"
        v-for="(item, index) in resourceList"
        :key="index"
        @click="chooseChange(item, index)"
      >
        <img :src="item.image" alt="" /><span>{{ item.en }}</span>
      </div>
    </div>
  </div>
  <div class="service_content"><RouterView></RouterView></div>
</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { resourceList } from "../utils/alldata";

const active = ref(0);
const chooseChange = (item: { route: any }, index: number) => {
  active.value = index;
  router.push({
    name: item.route,
  });
};
onMounted(() => {
  /*   (document as any).getElementById("introduction").style.height = `${
    (document as any).getElementById("images").clientHeight
  }px`; */
});
watchEffect(() => {
  let item = resourceList.find((item) => {
    if (router.currentRoute.value.path.includes(item.label)) {
      return router.currentRoute.value.path.includes(item.label);
    }
  });
  active.value = item ? item.id : 0;
});
</script>
<style scoped lang="scss">
.service_page {
  width: 100%;
  display: flex;
  img {
    width: 100%;
    aspect-ratio: 2;
    object-fit: cover;
    max-height: 520px;
    min-height: 300px;
  }
}
.introduction {
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 1360px;
  margin: 0 auto;
  padding: 2.5rem 1.4rem 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  box-sizing: border-box;
  .title {
    font-size: 1.4rem;
  }
  .description {
    font-size: 0.7rem;
    letter-spacing: 1.5px;
  }
}
.product_nav {
  width: 100%;
  height: 5.8rem;
  max-height: 120px;
  min-height: 100px;
  background-color: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1019607843);
  position: sticky;
  top: 4.5rem;
  z-index: 1;
  .product_nav_inner {
    width: auto;
    max-width: 1360px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .single_choose {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    img {
      width: 2.5rem;
      min-width: 40px;
      transition: transform 0.8s ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }
    span {
      font-size: 0.8rem;
    }
    /*     &:hover {
      transform: translateY(-3px);
    } */
    &:nth-child(1).active,
    &:nth-child(1):hover {
      color: #5daad6;
    }
    &:nth-child(2).active,
    &:nth-child(2):hover {
      color: #ec6d81;
    }
    &:nth-child(3).active,
    &:nth-child(3):hover {
      color: #3f639d;
    }
    &:nth-child(4).active,
    &:nth-child(4):hover {
      color: #2d94b7;
    }
  }
}
.service_content {
  width: 100%;
  height: 100%;
  max-width: 1360px;
  margin: auto;
}
@media screen and (max-width: 1360px) {
  .service_content {
    padding: 30px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 760px) {
  .introduction {
    .title {
      font-size: 17px;
    }
    .description {
      font-size: 12px;
    }
  }
}
@media screen and (max-width: 400px) {
  .single_choose {
    span {
      font-size: 0.5px !important;
    }
  }
}
</style>
