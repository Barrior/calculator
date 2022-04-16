<template>
  <BackNav v-if="!isHomePage" />
  <router-view />
</template>

<script lang="ts" setup>
import BackNav from '@/components/BackNav.vue'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute()
const isHomePage = ref(route.path === '/')

watch(
  () => route.path,
  () => {
    isHomePage.value = route.path === '/'
  }
)
</script>
