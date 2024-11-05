<template>
  <div class="product_page">
    <div class="right_list" v-if="Array.isArray(dataList)">
      <div v-for="item in dataList" :key="item.id" class="nav_item">
        <div class="bg_color"></div>
        <div class="bg"><img :src="item.image" alt="" /></div>
        <div class="box">
          <h2>{{ item.name }}</h2>
          <p>{{ item.cont }}</p>
          <div class="detail">查看详情+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
// import { productContList } from "../../utils/alldata";
const props = defineProps({
  dataList: Array,
});
onMounted(() => {
  console.log(11, props.dataList);
});
</script>
<style scoped lang="scss">
@mixin layout($align-items, $justify-content) {
  display: flex;
  align-items: $align-items;
  justify-content: $justify-content;
}
.product_page {
  width: 100%;
  max-width: 1360px;
  margin: auto;
  @include layout(flex-start, space-between);
  .right_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0;
    // border-left: 1px solid #cccccc59;
    justify-content: space-between;
    .nav_item {
      width: calc(100% / 4 - 40px);
      aspect-ratio: 1.5;
      box-shadow: 0 0 20px #eee;
      border-radius: 5px;
      position: relative;
      margin: 20px 0;
      overflow: hidden;
      cursor: pointer;
      .bg_color {
        background: linear-gradient(180deg, #10406d, #253358);
        opacity: 0.9;
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .bg {
        width: 100%;
        position: absolute;
        opacity: 0.7;
        img {
          width: 100%;
          aspect-ratio: 1.5;
          object-fit: cover;
          transform: scale(1.1);
          transition: all 0.5s ease;
        }
      }
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        color: white;
        width: 100%;
        // padding-left: 20px;
        box-sizing: border-box;
        h2 {
          margin-bottom: 0;
          margin-top: 15%;
          font-size: 1.2rem;
        }
        p {
          font-size: 0.8rem;
        }
        .detail {
          padding: 0.2rem 0.7rem;
          // border: 1px solid #ffffff;
          border-radius: 2px;
          font-size: 0.6rem;
          color: #ffffff;
          /*  &:hover {
              background-color: #ffffff;
              color: #10406d;
            } */
        }
      }
      &:hover {
        .bg {
          opacity: 0.9;
          img {
            transform: scale(1);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1360px) {
  .product_page {
    padding: 0 30px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 1110px) {
  .right_list {
    .nav_item {
      width: calc(100% / 3 - 40px) !important;
      aspect-ratio: 1.6 !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .right_list {
    width: 100% !important;
    border: 0 !important;
    .nav_item {
      width: calc(100% / 2 - 40px) !important;
      aspect-ratio: 1.8 !important;
      h2 {
        font-size: 1.9rem !important;
        margin-top: 10% !important;
      }
      p {
        font-size: 1rem !important;
      }
      .detail {
        font-size: 0.8rem !important;
      }
    }
  }
}
@media screen and (max-width: 550px) {
  .right_list {
    .nav_item {
      width: 100% !important;
      margin: 3% 0 !important;
      h2 {
        font-size: 2.5rem !important;
        margin-top: 15% !important;
      }
      p {
        font-size: 1.7rem !important;
      }
      .detail {
        font-size: 1.3rem !important;
        padding: 0.5rem 1.3rem !important;
      }
    }
  }
}
</style>
