<template>
  <carousel :trans-img="transImgs"></carousel>
  <div class="service">
    <div class="bg"></div>
    <div class="content common">
      <div class="commtitle">
        <div class="en">Service <img src="../assets/0.png" alt="" /></div>
        <!-- <div class="cn">技术服务</div> -->
      </div>
      <div class="service_nav">
        <div class="nav_item" v-for="item in seviceNav">
          <div class="icon"><img :src="item.icon" alt="" /></div>
          <div class="title">{{ item.title }}</div>
          <div class="cont">{{ item.cont }}</div>
          <div class="icon_hover">＋</div>
        </div>
      </div>
    </div>
  </div>
  <div class="product">
    <div class="content common">
      <div class="commtitle">
        <div class="en">Product <img src="../assets/0.png" alt="" /></div>
      </div>
      <div class="product_nav">
        <div class="nav_item" v-for="item in productNav">
          <div class="bg"><img :src="item.bg" alt="" /></div>
          <div class="box">
            <div class="icon"><img :src="item.icon" alt="" /></div>
            <div class="line"></div>
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="about_us">
    <div class="about_us_inner common">
      <div class="left">
        <!-- <div class="bg"><img src="../assets/Tcuni.png" alt="" /></div> -->
        <div class="commtitle">
          <div class="en">About Us <img src="../assets/0.png" alt="" /></div>
        </div>
        <div class="text">{{ aboutCompany.text }}</div>
        <div class="more">查看详情+</div>
      </div>
      <img class="rightimg" :src="aboutCompany.bg" alt="" />
    </div>
  </div>
  <div class="cooperation">
    <div class="content common">
      <div class="commtitle">
        <div class="en">Cooperation <img src="../assets/0.png" alt="" /></div>
      </div>
      <div class="swiper_ouner">
        <swiper
          :modules="modules"
          :loop="true"
          :slides-per-view="slidesPerView"
          :space-between="50"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
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
          <div class="swiper-button-prev" @click.stop="prevEl"></div>
          <div class="swiper-button-next" @click.stop="nextEl"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Carousel from "../components/common/ElCarousel.vue";
import transImg from "../assets/Carousel.jpg";
import {
  seviceNav,
  productNav,
  aboutCompany,
  cooperationList,
} from "../utils/alldata";
import { ref, onMounted } from "vue";
// import SwiperComponent from "../components/common/SwiperComponent.vue";
const transImgs = ref([transImg]);
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination"; // 轮播图底面的小圆点
import "swiper/css/navigation"; // 轮播图两边的左右箭头
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
const slidesPerView = ref(6);
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
const onSlideChange = () => {};
const handleResize = () => {
  if (window.innerWidth >= 1360) {
    slidesPerView.value = 6;
  } else if (window.innerWidth >= 1024 && window.innerWidth < 1360) {
    slidesPerView.value = 5;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    slidesPerView.value = 4;
  } else if (window.innerWidth < 768) {
    slidesPerView.value = 3;
  }
};
onMounted(() => {
  handleResize();
  console.log(22, transImgs.value);
});
</script>
<style scoped lang="scss">
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.service {
  position: relative;
  isolation: isolate;
  height: auto;
  padding-bottom: 50px;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url(../assets/ServiceBg.jpg);
    background-size: 100% 100%;
    opacity: 0.7;
    overflow: hidden;
    z-index: -1;
  }
  .content {
    visibility: visible;
    animation: fadeInUp 0.5s ease-in-out;
    .service_nav {
      display: flex;
      gap: 2.5%;
      text-align: center;
      align-items: flex-start;
      flex-wrap: wrap;
      max-width: 1360px;
      margin: 0 auto;
      padding: 60px 30px 0;
      .nav_item {
        display: block;
        color: #838383;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 0 20px #eee;
        flex: 1;
        transition: 0.5s;
        cursor: pointer;
        .icon {
          height: 88px;
          padding-top: 36px;
        }
        .title {
          height: 40px;
          font-weight: bold;
          font-size: 22px;
          color: #54a5d4;
        }
        .cont {
          padding: 20px 8% 40px;
          height: 150px;
          font-size: 15px;
          line-height: 2;
          overflow: hidden;
        }
        .icon_hover {
          padding-bottom: 29px;
          font-size: 36px;
        }
        &:nth-child(even) {
          margin-top: 35px;
        }
        &:nth-child(1) .icon_hover {
          color: #54a5d4;
        }
        &:nth-child(2) .icon_hover {
          color: #eb6d82;
        }
        &:nth-child(3) .icon_hover {
          color: #3e629c;
        }
        &:nth-child(4) .icon_hover {
          color: #2d94b7;
        }
        &:hover {
          transform: translateY(-3px);
        }
      }
    }
  }
}
.product {
  width: 100%;
  padding-bottom: 4rem;
  .content {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 30px;
    .product_nav {
      margin-top: 46px;
      /* display: grid;
      gap: 3.67%;
      grid-template-columns: 1fr 1fr 1fr; */
      display: flex;
      .nav_item {
        width: calc(100% / 3);
        box-shadow: 0 0 20px #eee;
        border-radius: 12px;
        position: relative;
        margin-right: 2.2rem;
        padding: 1.5rem;
        .bg {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .box {
          position: absolute;
          top: 0;
          left: 50%;
          width: 25%;
          transform: translateX(-50%);
          color: white;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .icon {
            width: 100%;
            aspect-ratio: 1;
            background-size: cover;
            background-position: center;
            img {
              width: 90%;
            }
          }
          .line {
            width: 20px;
            height: 2px;
            margin: 0 auto;
            background: #ffffff;
          }
          .title {
            font-size: 1.2rem;
          }
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
}
.about_us {
  width: 100%;
  padding: 70px 0;
  .about_us_inner {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    .left {
      /*       text-align: left;
      position: relative;
      isolation: isolate;
      aspect-ratio: 1.5;
      width: calc(50% - 20px); */
      text-align: left;
      background: url(/src/assets/Tcuni.png) right bottom no-repeat;
      .bg {
        position: absolute;
        width: 75%;
        height: 35%;
        right: 0;
        bottom: 0;
        img {
          width: 100%;
          object-fit: cover;
        }
        /*         background: url(/src/assets/Tcuni.png);
        background-size: 100% 100%;
        opacity: 0.7;
        overflow: hidden;
        z-index: -1; */
      }
      .commtitle {
        padding-top: 0 !important;
      }
      .text {
        font-size: 15px;
        line-height: 2;
        color: #848484;
        padding-top: 8px;
        // margin-right: 15.3%;
      }
      .more {
        margin-top: 65px;
        display: block;
        width: 148px;
        line-height: 48px;
        text-align: center;
        border: 1px solid #54a5d4;
        font-size: 15px;
        color: #54a5d4;
        transition: 0.5s;
      }
    }
    .rightimg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: 0.5s;
    }
  }
}
.cooperation {
  display: flex;
  justify-content: center;
  .content {
    max-width: 1360px;
    width: 100%;
    .swiper_ouner {
      width: 100%;
      height: 250px;
      padding: 50px 0;
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
    }
  }
}
.common {
  .commtitle {
    padding-top: 70px;
    .en {
      font-size: 40px;
      color: #54a5d4;
      font-weight: bold;
      height: 50px;
      line-height: 30px;
      img {
        position: relative;
        top: -15px;
      }
    }
    .cn {
      font-size: 32px;
      color: #838383;
      padding-top: 18px;
      font-weight: bold;
    }
  }
}
:deep .swiper {
  // overflow: unset !important;
}
:deep .swiper-pagination {
  display: none !important;
}
:deep .swiper-button-prev {
  left: 0 !important;
  width: 30px;
  height: 30px;
  border: 1px solid #9dc1d5;
  border-radius: 50%;
  &::after {
    font-size: 14px !important;
    color: #9dc1d5;
  }
}
:deep .swiper-button-next {
  right: 0 !important;
  width: 30px;
  height: 30px;
  border: 1px solid #9dc1d5;
  border-radius: 50%;
  &::after {
    font-size: 14px !important;
    color: #9dc1d5;
  }
}
@media screen and (max-width: 1000px) {
  .service_nav {
    gap: 4% !important;
    .nav_item {
      flex: 48% !important;
    }
  }
  .about_us {
    .about_us_inner {
      grid-template-columns: unset;
      .left {
        width: 100% !important;
        // aspect-ratio: 2.5 !important;
        .bg {
          width: 60% !important;
          height: 25% !important;
        }
      }
      .rightimg {
        width: 100% !important;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .swiper_inner {
    img {
      width: 80px !important;
    }
  }
}
@media screen and (max-width: 550px) {
  .service_nav {
    gap: 4% !important;
    .nav_item {
      flex: 100% !important;
      margin-top: 30px !important;
      position: relative;
      background: linear-gradient(
        139.13deg,
        #ffffffc9,
        #8bb3cb24 99.36%
      ) !important;
      .icon {
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translate(0, -50%);
        z-index: -1;
        opacity: .7;
        img {
          width: 140%;
        }
      }
      .title {
        text-align: left;
        padding: 20px 20px 0;
      }
      .cont {
        padding: 0 5% 20px !important;
        height: auto !important;
        text-align: left;
        width: 80%;
        line-height: 1.6 !important;
        color: #272727
      }
      .icon_hover {
        display: none;
      }
    }
  }
}
</style>
