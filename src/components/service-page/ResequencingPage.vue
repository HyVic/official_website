<template>
    <product-page :product="productResequencing"></product-page>
  </template>
  <script setup lang="ts">
  import { productResequencing } from "../../utils/alldata";
  import ProductPage from "../common/ProductPage.vue";
  </script>
  <style scoped lang="scss"></style>
  