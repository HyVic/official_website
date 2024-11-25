<template>
  <div class="product_page">
    <h2 class="title" v-if="product.navTitle">{{ product.navTitle }}</h2>
    <p v-for="para in product.describeList">{{ para }}</p>
    <h4 class="title" v-if="product.title">{{ product.title }}</h4>
    <div><img :src="product.image" alt="" /></div>
    <div v-if="product.children">
      <div v-for="child in product.children">
        <h3 class="title">{{ child.title }}</h3>
        <p v-for="list in child.describeList">{{ list }}</p>
        <div v-if="child.list.length > 0">
          <div v-for="i in child.list">
            <h5>{{ i.title }}</h5>
            <div v-if="i.image.length > 0">
              <img v-for="img in i.image" :src="img" alt="" />
            </div>
            <p>{{ i.describe }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>
<style lang="scss" scoped>
.product_page {
  text-align: left;
  p {
    font-size: 0.7rem;
    color: #5d5d5d;
    line-height: 2;
  }
  h2 {
    color: #3f639d;
  }
  h3{
    border-top: 1px solid #cdcdcda3;
    font-size: 28px;
    padding-top: 10px;
    color: #54a5d4;
  }
}
</style>
