<template>
  <div>
    <p>
      {{ describe }}
    </p>
  </div>
  <CommonPage :data-list="productCustomizedList"></CommonPage>
</template>
<script setup lang="ts">
import CommonPage from "./CommonPage.vue";
import { productCustomizedList } from "../../utils/alldata";
import { ref } from "vue";
const describe =
  ref(`天成未来是国内最早将靶向捕获测序技术应用于农业科学研究的企业之一，拥有超大规模的动物及作物基因组大数据库，
开发了一系列动植物育种芯片及数据计算云平台。企业以生物技术为工具为生物育种获取数据支撑，利用数据与算法让数据产生价值，最终推动种业发展与革新。`);
</script>
<style scoped lang="scss">
  p {
    width: 100%;
    max-width: 1360px;
    text-align: center;
    margin: auto;
    margin-top: 100px;
    font-size: 18px;
    text-indent: 20px;
  }
</style>
