<template>
  <!--   <div class="img_bg" v-if="showImg" @click="()=>showImg=false"><img src="../assets/logoindex.png" alt=""></div>
  <div v-else> -->
  <header
    class="header open"
    id="header"
    :class="{ active: showNav, header_new: showBg }"
    @mouseleave="() => (showNav = false)"
  >
    <div style="width: 100%; height: 100%">
      <div class="header_open">
        <img
          @click="() => router.push({ name: 'HomePage' })"
          class="logo"
          :src="showBg ? logo2 : logo1"
        />
        <div class="nav">
          <ul class="nav_list" id="navList">
            <li
              class="menu_item"
              :id="index"
              :class="{
                active1: showDropdown == index && showNav,
                active2: navClicked == index,
              }"
              v-for="(item, index) in dropDown"
              :key="index"
              @mouseenter="
                () => {
                  (showDropdown = index),
                    (showNav = true),
                    (showDown = item.list.length > 2);
                }
              "
            >
              <span
                class="menu_item_title title nav-bar"
                @click="skipRoute(item, 'pc', index, '', '')"
                >{{ item.name }}</span
              >
              <!-- <div class="sub_list_outer" v-if="showDropdown == index"> -->
              <div
                class="sub_list_outer"
                v-if="showDropdown == index && showNav"
              >
                <ul
                  class="sub_list"
                  :class="{ ul_active: showDropdown == index }"
                >
                  <li class="more_list" v-for="(list, i) in item.list" :key="i">
                    <div
                      class="title"
                      @click="skipRoute(item, 'pc', index, '', list)"
                    >
                      <span class="name nav-bar">{{ list.name }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <i
            class="iconfont"
            :class="[
              changeLanguage
                ? 'icon-zhongyingwenqiehuan-yingwen'
                : 'icon-zhongyingwenqiehuan-zhongwen',
            ]"
            @click="() => (changeLanguage = !changeLanguage)"
            @mouseenter="() => (showNav = false)"
          ></i>
        </div>
      </div>
    </div>

    <div
      class="down_drawer"
      id="downDrawer"
      v-show="showNav && showDropdown != 0"
      @mouseleave="() => (showNav = false)"
    ></div>
    <!-- <div class="down_drawer" id="downDrawer" @mouseleave="()=>showNav = false"></div> -->
    <div class="menu_btn">
      <div class="inner">
        <el-button text @click="openDrawer"
          ><img src="../assets/threeline.png" alt=""
        /></el-button>
      </div>
    </div>
    <el-drawer v-model="drawer" direction="rtl" size="100%">
      <el-collapse v-model="activeNames">
        <el-collapse-item
          v-for="(item, index) in dropDown"
          :key="index"
          :name="item.id"
          :title="item.name"
        >
          <div class="three-li" v-for="item2 in item.list" :key="item2">
            <div class="name" @click="skipChildRoute(item, item2, 'mobile')">
              <i class="iconfont" :class="item2.icon" v-if="!item2.child"></i
              >{{ item2.name }}
            </div>
            <ul class="child" v-if="item2.child">
              <li
                v-for="(li, l) in item2.child"
                :key="l"
                @click="skipRoute(item, 'mobile', index, li, item2)"
              >
                <i class="iconfont icon-dian3"></i>{{ li.name }}
              </li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-drawer>
  </header>
  <div class="content">
    <router-view></router-view>
  </div>
  <el-backtop class="back-top" />
  <!-- </div> -->

  <footer>
    <div class="footer_cont">
      <div class="footer_top">
        <div
          class="pc_page"
          v-for="(item, index) in dropDown"
          :key="index"
          @click="$emit('skipRoute', item)"
        >
          <span
            class="title nav-bar"
            @click="skipRoute(item, 'pc', index, '', '')"
            >{{ item.name }}</span
          >
        </div>
        <span class="el-tooltip__trigger">Follow Us &nbsp;&nbsp;</span>
        <el-popover placement="right" class="popover">
          <template #reference>
            <!-- <span>Follow Us</span> -->
            <!-- <div><i class="ionfont icon-weixin1"></i></div> -->
            <img alt="" src="../assets/chat.png" />
          </template>
          <template #default>
            <div
              class="demo-rich-conent"
              style="display: flex; gap: 16px; flex-direction: column"
            >
              <img
                @click="router.push({ name: 'HomeView' })"
                alt=""
                src="../assets/code.jpg"
              />
            </div>
          </template>
        </el-popover>
        <el-collapse v-model="activeNames">
          <el-collapse-item
            v-for="(item, index) in dropDown.filter((v) => v.name !== '首页')"
            :key="index"
            :name="item.id"
            :title="item.name"
          >
            <div
              class="footer_link"
              v-for="item2 in item.list"
              :key="item2"
              @click="$emit('skip', item2)"
            >
              {{ item2.name }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="footer-bottom">
        <div class="right">
          <div class="message_outer">
            <div class="message">
              <div class="icon">
                <div class="icon_left">
                  <span
                    ><strong><i class="iconfont icon-dianhua2"></i></strong
                    >&nbsp;&nbsp;028-85923313</span
                  >
                </div>
              </div>
              <div class="icon">
                <div class="icon_left">
                  <span
                    ><strong><i class="iconfont icon-e-mail-01"></i></strong
                    >&nbsp;&nbsp;market@tcuni.com</span
                  >
                </div>
              </div>
              <div class="icon">
                <div class="icon_left">
                  <span
                    ><strong><i class="iconfont icon-address"></i></strong
                    >&nbsp;&nbsp;5-10, Block A, Building 1, Incubation Park,
                    Chengdu High tech Zone (Office)</span
                  >
                </div>
              </div>
              <div class="icon">
                <div class="icon_left">
                  <div style="display: flex; flex-direction: column">
                    <span class="cont"
                      >No. 503, 5th Floor, Phase I, Agricultural Innovation
                      Center, No. 358 Kejin Road, Gongping Street, Wenjiang
                      District, Chengdu City (Laboratory)</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left">
          <div class="left_top">
            <div class="list">
              <div class="com">
                <p>Follow Us</p>
                <img
                  @click="router.push({ name: 'HomeView' })"
                  alt=""
                  src="../assets/code.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        Copyright©2023 成都天成未来科技有限公司 .All rights reserved
        备案号：蜀ICP备19022567号-1
      </div>
    </div>
  </footer>
</template>
<script setup>
import {
  reactive,
  ref,
  onMounted,
  watchEffect,
  watch,
  onUnmounted,
  nextTick,
} from "vue";
import { navDropDownData } from "../utils/alldata";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { useRouter } from "vue-router";
const router = useRouter();
const changeLanguage = ref(false);
// const showTooltip = ref(true)
const drawer = ref(false);
const showNav = ref(false);
const showDown = ref(false);
const showBg = ref(false); //logo选择
const navClicked = ref(-1); //已经点击
const showDropdown = ref(-1);
const dropDown = reactive(navDropDownData);
const activeNames = ref([]);
const visible = ref(false);
// const showImg = ref(false)
const openDrawer = () => {
  drawer.value = true;
};
const skipRoute = (item, type, index, li, list) => {
  showNav.value = false;
  navClicked.value = index;
  console.log(1, list);
  if (list) {
    router.push({
      name: list.route,
    });
  } else {
    router.push({
      name: item.route,
    });
  }
};
const skipChildRoute = (item, list, type) => {
  if (!list.child) {
    showNav.value = false;
    if (type == "mobile") {
      drawer.value = false;
    }
    let routeName = item.label === "joinUs" ? list.route : item.route;
    let routeParams = {
      type: list.id,
    };
    router.push({
      name: routeName,
      params: routeParams,
    });
  }
};
//判断滚动条位置，显示不同logo图片
const handleScrollTop = () => {
  if (document.documentElement.scrollTop >= 350) {
    showBg.value = true;
    document.getElementById("navList").classList.remove("nav_no");
    document.getElementById("navList").classList.add("nav_hi");
    document.getElementById("downDrawer").classList.add("down_bg");
    // document.getElementById("downDrawer").classList.remove("down_drawer")
  } else {
    handleResize();
    document.getElementById("navList").classList.add("nav_no");
    document.getElementById("navList").classList.remove("nav_hi");
    document.getElementById("downDrawer").classList.remove("down_bg");
    // !document.getElementById("downDrawer").classList.add("down_drawer")?document.getElementById("downDrawer").classList.add("down_drawer"):''
  }
};
const handleResize = () => {
  if (window.innerWidth <= 768) {
    showBg.value = true; //显示logo2
  } else {
    showBg.value = false; //显示logo1
  }
};
//点击页面中右侧工具栏中的电话图标，滚动到footer
const contactUs = () => {
  nextTick(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
};
onMounted(() => {
  handleResize();
  // handleScrollTop()
  if (document.documentElement.scrollTop < 350) {
    document.getElementById("navList").classList.add("nav_no");
  }
  window.addEventListener("scroll", handleScrollTop);
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScrollTop);
  window.removeEventListener("resize", handleResize);
});
//监控路由，用于刷新页面后仍然在当前页
watchEffect(() => {
  let item = dropDown.find((item) => {
    if (router.currentRoute.value.path.includes(item.label)) {
      return router.currentRoute.value.path.includes(item.label);
    }
  });
  navClicked.value = item ? item.id : 0;
});
watch(document.documentElement.scrollTop, () => {
  console.log("scrollTop==", document.documentElement.scrollTop);
});
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  //padding: 20px 0;
  width: 100%;
  z-index: 6;
  height: 100px;
  align-items: center;
  // -webkit-transition: all 0.5s;
  box-sizing: border-box;
  border-bottom: 1px solid #ffffff33;
  background-color: #ffffff14;
}
.header.open {
  //background-color: #fff;
  //box-shadow: 0px 0px 15px rgba(0, 0, 0, .05);
  color: white;
  //padding: 5px 0 0;
  //height: 70px;
  .menu_item::after {
    width: 0%;
    height: 3px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    border-radius: 50px;
    background: #0959ae;
    content: "";
    -webkit-transition: all 0.35s;
    color: #0959ae;
  }
}
.header.header_new {
  color: #4c4c4c;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);

  transition: all 1s;
  //animation:header 0.5s ease-in-out 0s;
  //@keyframes header
  //{
  //  from {opacity: 0;}
  //  to {opacity: 1;}
  //}
  .active2 {
    .menu_item_title {
      color: #0959ae;
    }
  }
  /*   .menu_item_title:hover{
    color: #0959ae;
  } */
  .menu_item::after {
    width: 0%;
    height: 3px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    border-radius: 50px;
    background: #0959ae;
    content: "";
    -webkit-transition: all 0.35s;
    color: #0959ae;
  }
}
.header.active {
  // color: #4c4c4c;
  .active2 {
    /* .menu_item_title{
      color: #ffffff;
    } */
    .menu_item::after {
      width: 0%;
      height: 3px;
      position: absolute;
      left: 50%;
      bottom: 0px;
      border-radius: 50px;
      background: #0959ae;
      content: "";
      -webkit-transition: all 0.35s;
      color: #0959ae;
    }
  }
  /*   .menu_item_title:hover{
    color: #ffffff;
  } */
  .menu_item::after {
    width: 0%;
    height: 3px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    border-radius: 50px;
    background: #0959ae;
    content: "";
    -webkit-transition: all 0.35s;
    color: #0959ae;
  }
}
.header_open {
  max-width: 1360px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  @media screen and (max-width: 1300px) {
    padding: 0 20px;
  }
}
.logo {
  width: auto;
  height: calc(100% - 30px);
  cursor: pointer;
  transition: all 0.6s;
  margin: 15px 0;
}
ul,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.nav {
  width: auto;
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;

  .nav_no {
    .active1 {
      color: #ffffff;
    }
    .active1:hover::after,
    .active2::after {
      height: 3px;
      position: absolute;
      left: 50%;
      bottom: 0px;
      border-radius: 50px;
      background: #ffffff;
      content: "";
      -webkit-transition: all 0.35s;
      color: #ffffff;
      width: 30%;
      transform: translate(-50%, 0);
    }
    .sub_list {
      .name {
        color: white;
      }
    }
  }
  .nav_hi {
    .active1 {
      color: #0959ae;
    }
    .active1:hover::after,
    .active2::after {
      height: 3px;
      position: absolute;
      left: 50%;
      bottom: 0px;
      border-radius: 50px;
      background: #0959ae;
      content: "";
      -webkit-transition: all 0.35s;
      color: #0959ae;
      width: 30%;
      transform: translate(-50%, 0);
    }
    .sub_list {
      .name {
        color: #494949 !important;
      }
    }
  }
  .nav_list {
    display: flex;
    justify-content: space-between;
    height: 100%;
    .menu_item {
      width: auto;
      height: 100%;
      line-height: 3;
      position: relative;
      display: block;
      text-align: center;
      font-size: 16px;
      padding: 30px 15px 0 15px;
      cursor: pointer;
      .menu_item_title {
        padding: 0 5px;
      }
      .title {
        //height: 100%;
        display: inline-block;
      }
    }
    .menu_item_title:hover::after,
    .menu_item_title:visited::after,
    .active2::after {
      width: 30%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .sub_list_outer {
      height: 60px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      top: 100px;
      display: flex;
      justify-content: center;
      z-index: 1;
    }
    .sub_list {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: flex-end;
      z-index: 1;
      text-align: left;
      opacity: 1;
      visibility: visible;
      opacity: 0;
      animation: slide-ul 1.5s forwards;
      @keyframes slide-ul {
        from {
          opacity: 0;
        }
        to {
          opacity: 1; /* 动画结束位置：元素从上方滑到原位置 */
        }
      }
      li {
        // color: #707070;
        width: auto;
        white-space: nowrap;
        margin-right: 60px;
        .title {
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          width: 100%;
          height: 100%;
        }
        .name {
          font-size: 16px;
          // color: #494949;
        }
      }
      li:last-child {
        margin-right: 0;
      }
      .li:hover {
        color: #0959ae;
        /* .name {
          font-size: 16px;
          color: #494949;
        } */
      }
      .iconfont {
        font-size: 25px;
        padding-right: 15px;
      }
    }
    /* .active1 {
      color: #0959ae;
    } */
    /* .active1:hover::after {
      height: 3px;
      position: absolute;
      left: 50%;
      bottom: 0px;
      border-radius: 50px;
      background: #0959ae;
      content: "";
      -webkit-transition: all 0.35s;
      color: #0959ae;
      width: 30%;
      transform: translate(-50%, 0);
    } */
    /*  .active1:hover {.sub_list 
      .name {
        color: #494949 !important;
      }
    } */
  }
  .nav_list > .menu_item:last-child {
    .sub_list_outer {
      right: 50% !important;
      left: unset !important;
      transform: translate(16%, 0) !important;
    }
  }
  .iconfont {
    font-size: 22px;
    cursor: pointer;
    margin-left: 30px;
    padding-top: 10px;
  }
}
.down_drawer {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  visibility: visible;
  opacity: 0;
  animation: slide-ul 0.5s forwards;
  background: #ffffff33;
  /*   width: 100%;
  height: 200px;
  background-color: #ffffff;
  z-index: 1;
  position: absolute;
  box-shadow: 1px 0px 8px 3px #e4e4e4;
  animation: slide-down 0.5s forwards;
  //transition: 0.5s;
  @keyframes slide-down {
    from{
      top: -100px;
      opacity: 0;
      visibility: hidden;
      //height: 0;
    }
    to {
      top: 0px;
      opacity: .4;
      visibility: visible;
      //height: 450px;
    }
  } */
  /*   img{
    width: 80%;
    height: 100%;
    opacity: .05;
    object-fit: cover;
  } */
}
.down_bg {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  visibility: visible;
  opacity: 0;
  animation: slide-ul 0.5s forwards;
  background: #fff !important;
  box-shadow: 0px 3px 8px 0px #dddddd;
}
.menu_btn {
  width: 80px;
  height: 60px;
  top: 0px;
  right: 0%;
  z-index: 50;
  display: none;
  cursor: pointer;
  //background: linear-gradient(135deg, #73b42c, #1b90cd) center center no-repeat;
  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 20px;
    }
  }
}
.navigator {
  display: none;
}
.content {
  width: 100%;
  min-height: calc(100% - 415px);
  background-color: #fbfbfb;
}
:deep .el-drawer__body {
  padding: 0 !important;
}
:deep .el-collapse-item {
  border-bottom: 1px solid #e6e6e6;
}
:deep .el-collapse-item:nth-child(3) {
  .three-li {
    border-bottom: 1px solid #e9e9e9;
    margin: 0 15px 15px;
    .name {
      margin: 5px 0 15px 0;
    }
  }
}
:deep .el-collapse-item__header {
  font-size: 20px;
  font-weight: bold;
  position: relative;
  padding: 30px 20px;
  color: #575757;
}
:deep .el-collapse-item__content {
  padding: 0 20px;
  .three-li {
    display: flex;
    padding: 10px 0 0 0;
    margin: 0 15px 8px;
    flex-wrap: wrap;
    //border-bottom: 1px solid #e9e9e9;
    .name {
      font-size: 16px;
      line-height: 20px;
      width: 100%;
      margin: 5px 0 0 0;
      color: #6b6b6b;
      font-weight: 600;
      .iconfont {
        margin-right: 10px;
        font-size: 18px;
      }
    }
    .child {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 5px 20px 0 0;
        line-height: 30px;
        color: #7b7b7b;
        display: flex;
        font-size: 14px;
        .iconfont {
          margin-right: 5px;
        }
      }
    }
  }
  .three-li:nth-child(1) {
    .iconfont {
      color: #00a9ce;
    }
  }
  .three-li:nth-child(2) {
    .iconfont {
      color: #9b26b6;
    }
  }
  .three-li:nth-child(3) {
    .iconfont {
      color: #79c000;
    }
  }
  .three-li:nth-child(4) {
    .iconfont {
      color: #ff671f;
    }
  }
  .three-li:nth-child(5) {
    .iconfont {
      color: #0959ae;
    }
  }
  .three-li:last-child {
    border-bottom: unset;
    margin-bottom: 20px;
  }
}
footer {
  //background: linear-gradient(#ecf2f5, #e2ebf4);
  width: 100%;
  z-index: 0;
  //background: linear-gradient(30deg, #00438b, #cfdbe7);
  animation: slide-up-d55b262e 0.5s forwards;
  position: relative;
  background-color: #9dc1d514;
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  .footer_cont {
    width: 100%;
    max-width: 1360px;
    margin: auto;
    padding: 40px 0;
    text-align: center;
    .footer_top {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #7373731f;
      padding-bottom: 10px;
      margin-bottom: 20px;
      .pc_page {
        margin-right: 50px;
        white-space: pre;
        font-size: 20px;
        color: #6b6b6b;
        cursor: pointer;
        &:hover {
          color: #000;
        }
      }
      :deep .el-tooltip__trigger {
        display: none;
      }
      :deep .el-collapse {
        display: none;
      }
    }
    .footer-bottom {
      display: flex;
      justify-content: space-between;
    }
  }
  .left {
    //padding-left: 100px;
    width: 30%;
    display: flex;
    flex-direction: column;
    position: relative;
    .left_top {
      margin-bottom: 35px;
      .learn_more {
        display: block;
        width: 100%;
        font-size: 36px;
        text-align: left;
        font-weight: normal;
        margin-bottom: 1.5vw;
      }
      .list {
        width: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .com {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          p {
            font-size: 30px;
            margin-top: 0;
          }
          img {
            object-fit: cover;
            transition: 0.5s;
            width: 120px;
            height: 120px;
            border-radius: 2px;
            background-color: #ffffff;
            cursor: pointer;
            padding: 10px;
            box-shadow: 1px 2px 10px 2px #00000024;
          }
        }
      }
    }
    .title {
      display: block;
      font-size: 20px;
      line-height: 2;
      cursor: pointer;
      color: #656565;
      font-weight: bold;
    }
    .title:hover {
      color: rgb(27, 27, 27);
    }
    .footer_link {
      display: block;
      font-size: 16px;
      color: #5f6464;
      font-weight: normal;
      margin-bottom: 18px;
    }
    > div {
      flex-direction: column;
      display: flex;
      text-align: left;
    }
  }

  .right {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    color: #000000a6;
    .message_outer {
      text-align: left;
      display: flex;
      align-items: start;
    }
    .message {
      width: 100%;
      .icon {
        margin: 0 0 20px;
        .icon_left {
          display: flex;
          align-items: center;
        }
        .iconfont {
          font-size: 18px;
        }
        .cont {
          font-size: 14px;
        }
      }
    }
    > div {
      line-height: 1.5em;
      font-size: 15px;
    }
  }

  .copyright {
    font-size: 13px;
    padding: 0;
    text-align: left;
  }
}
/* footer::after {
  content: "";
  position: absolute;
  top: 0;
  background-image: url("@/assets/bg/productBg.jpg");
  transform: translate3d(0px, 0px, 0px);
  transition: all 0ms ease 0s;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
} */
.back-top {
  right: 25px !important;
  bottom: 50px;
}
@media screen and (max-width: 1360px) {
  .footer_cont {
    padding: 40px 30px !important;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 1200px) {
  .header_open {
    width: unset;
  }
  .sub_list {
    width: 100% !important;
    padding: 0 20px !important;
  }
  /*   .footer_cont {
    width: calc(100% - 50px) !important;
    margin: 0 25px !important;
  } */
  /*   .copyright {
    width: calc(100% - 50px) !important;
    margin: 0 25px 15px !important;
  } */
  .more_list {
    /*    min-width: unset !important;
    width: 15% !important;
    margin-right: 10px !important; */
    .name {
      font-size: 16px !important;
      cursor: pointer;
    }
    .iconfont {
      font-size: 20px !important;
    }
  }
}
@media screen and (max-width: 1024px) {
  .logo {
    width: 155px;
  }
  .learn_more {
    font-size: 28px !important;
    margin-bottom: 20px !important;
  }
  .footer_cont {
    flex-direction: column;
    /*     width: calc(100% - 50px) !important;
    margin: 0 25px !important; */
    box-sizing: border-box;
    .left {
      width: 100%;
      // border-bottom: 1px solid #ccd4e3;
      margin-bottom: 10px;
      .left_top {
        margin-bottom: 20px;
      }
      .pc_page {
        display: none;
        .footer_link {
          display: none;
        }
      }
      .title {
        font-size: 16px;
        font-weight: normal;
        color: #5f6464;
      }
      /*      img{
        width: 120px !important;
        height: 120px !important;
      }*/
    }

    .right {
      width: 100% !important;
      margin-bottom: 10px;
      .icon {
        margin: 10px 0;
      }
    }
    .footer_link {
      font-size: 13px !important;
      //display: none;
    }
  }
}
@media screen and (max-width: 768px) {
  .header.open {
    padding: 0px;
    height: 60px;
  }
  .header_open {
    width: 100%;
  }
  .logo {
    width: 135px;
  }
  .nav {
    opacity: 0;
    visibility: hidden;
    height: calc(100vh - 60px);
    position: fixed;
    left: 0;
    top: 60px;
    width: 100%;
    background: #202679;
    display: none;
  }
  .menu_btn {
    display: block;
  }
  .navigator {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0;
    left: 0;
    bottom: 0;
    //top: 60px;
    z-index: 3;
    transform: translate(100%, 0);
    //opacity: 0.8;
    transition: transform 0.25s ease-out, opacity 0.25s ease-out;
    //background-color: #f9f9f9;
    ul {
      width: 50%;
      height: 100%;
      background-color: #f9f9f9;
      z-index: 2;
      padding: 50px 35px;
      float: right;
    }
  }
  .bg_hover {
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
    //opacity: 0;
    display: none;
  }
  @keyframes drawer {
    0% {
      opacity: 0.5;
      right: -100px;
      top: 0px;
    }
    100% {
      opacity: 1;
      right: 200px;
      top: 0px;
    }
  }
  .navigator.active {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  .bg_hover.active {
    transform: translate(0px, 0px);
    //opacity: 1;
    display: block;
  }
  .first_li {
    display: block;
    height: 72px;
    line-height: 72px;
    font-size: 16px;
    color: #2b2e2e;
    font-weight: bold;
    opacity: 0.95;
    -webkit-transition: color 0.3s linear;
    position: relative;
    z-index: 2;
  }
  .second_li {
    display: flex;
    flex-wrap: wrap;
    //background: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2));
    display: none;
    .three_li {
      width: 90%;
      display: flex;
      padding: 10px 0%;
      flex-wrap: wrap;
      border-bottom: 1px solid rgba(186, 186, 186, 0.5);
      margin-left: 5%;
      .iconfont {
        font-size: 20px;
        align-items: center;
      }
      .name {
        font-size: 16px;
        font-weight: bold;
        line-height: 20px;
        margin-left: 10px;
      }
    }
  }
  .active {
    display: block;
  }
  .back-top {
    right: 20px !important;
    bottom: 20px !important;
  }
  .left {
    display: none !important;
  }
  .footer_top {
    .pc_page {
      display: none !important;
    }
    :deep .el-tooltip__trigger {
      display: block !important;
      height: 20px;
      object-fit: contain;
      font-size: 16px;
      line-height: 1.2;
    }
    img {
      cursor: pointer;
      &:hover {
        scale: 1.1;
      }
    }
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
