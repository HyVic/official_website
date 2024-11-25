<template>
  <product-page :product="productDataService"></product-page>
</template>
<script setup lang="ts">
import { productDataService } from "../../utils/alldata";
import ProductPage from "../common/ProductPage.vue";
</script>
<style scoped lang="scss"></style>
