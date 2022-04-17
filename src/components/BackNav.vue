<template>
  <div class="back-nav">
    <div class="left" @click="goBack">返回</div>
    <div class="title">{{ route.meta?.title }}</div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goBack() {
  if (document.referrer === '') {
    router.replace('/')
  } else {
    router.back()
  }
}
</script>

<style scoped lang="scss">
.back-nav {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 44px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
}

.title {
  flex-grow: 1;
  text-align: center;
}

.left,
.right {
  width: 50px;
}
</style>
