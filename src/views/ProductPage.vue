<template>
  <div class="product_page"><img src="../assets/product-bg.jpg" alt="" /></div>
  <div class="product_nav" id="productNav">
    <div class="product_nav_inner">
      <div
        class="single_choose"
        :class="{ active: active === index }"
        v-for="(item, index) in productNav"
        :key="index"
        @click="chooseChange(item, index)"
      >
        <i class="iconfont" :class="item.icon"></i><span>{{ item.name }}</span>
      </div>
    </div>
  </div>
  <div class="product_content"><RouterView></RouterView></div>
</template>
<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const active = ref(0);
const productNav = ref([
  {
    id: 0,
    name: "Crop",
    icon: "icon-zhiwu4",
    route: "CropPage",
    label: "crop",
  },
  {
    id: 1,
    name: "Animal",
    icon: "icon-animal",
    route: "AnimalPage",
    label: "animal",
  },
  {
    id: 2,
    name: "Customized",
    icon: "icon-dingzhijiaju",
    route: "CustomizedPage",
    label: "customized",
  },
]);
const chooseChange = (item: { route: any }, index: number) => {
  active.value = index;
  router.push({
    name: item.route,
  });
};
const handleScrollTop = () => {
  console.log("scrollTop==", document.documentElement.scrollTop);
  const productNavElement = document.getElementById("productNav");
  /*   if (productNavElement && document.documentElement.scrollTop > 352) {
    productNavElement.classList.add("product_nav_fixed");
  } else if (productNavElement){
    productNavElement.classList.remove("product_nav_fixed");
  } */
};
onMounted(() => {
  window.addEventListener("scroll", handleScrollTop);
});
watchEffect(() => {
  let item = productNav.value.find((item) => {
    if (router.currentRoute.value.path.includes(item.label)) {
      return router.currentRoute.value.path.includes(item.label);
    }
  });
  active.value = item ? item.id : 0;
});
</script>
<style scoped lang="scss">
.product_page {
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
.product_nav {
  width: 100%;
  height: 100px;
  background-color: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1019607843);
  position: sticky;
  top: 100px;
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
    cursor: pointer;
    transition: 0.3s;
    .iconfont {
      font-size: 1.8rem;
    }
    span {
      font-size: 18px;
    }
    /*     &:hover {
      transform: translateY(-3px);
    } */
    &:nth-child(1).active,
    &:nth-child(1):hover {
      color: green;
    }
    &:nth-child(2).active,
    &:nth-child(2):hover {
      color: #54a5d4;
    }
    &:nth-child(3).active,
    &:nth-child(3):hover {
      color: #d4ab54;
    }
  }
  /* .active {
    color: #54a5d4;
  } */
}
/* .product_nav_fixed{
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
} */
.product_content {
  width: 100%;
  height: 100%;
}
</style>
