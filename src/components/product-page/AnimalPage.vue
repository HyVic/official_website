<template>
  <CommonPage :data-list="productAnimalList"></CommonPage>
</template>
<script setup lang="ts">
import CommonPage from "./CommonPage.vue";
import { productAnimalList } from "../../utils/alldata";
</script>
