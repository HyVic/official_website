<template>
  <div class="img_bg" @click="goToIndex">
    <img src="../assets/logoindex.png" alt="" />
  </div>
</template>
<script setup>
  import {useRouter} from 'vue-router';
  const router = useRouter()
  const goToIndex = () => { 
    console.log('goToIndex')
    router.push({name: 'IndexPage'})
  }
</script>
<style lang="scss" scoped>
.img_bg{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img{
    width: 50%;
    max-width: 700px;
  }
}
</style>