<template>
  <div class="home">
    <div class="tool-box">
      <div
        class="tool-item"
        v-for="item in list"
        :key="item.name"
        @click="redirect(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const list = [
  {
    name: '租金收益率',
    path: '/rent',
  },
  {
    name: '理财年化率（待开发）',
    // path: '/rent',
  },
  {
    name: '房贷（暂定）',
    // path: '/rent',
  },
  {
    name: '车贷（暂定）',
    // path: '/rent',
  },
]

function redirect(item: typeof list[0]) {
  if (item.path) {
    router.push(item.path)
  }
}
</script>

<style scoped lang="scss">
.tool-box {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
}

.tool-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  width: 50%;
  background-color: #c9dcff;
  border-bottom: 1px solid #fff;
  font-size: 16px;
  transition: 0.4s ease-out;

  &:nth-of-type(2n) {
    border-left: 1px solid #fff;
  }

  &:nth-last-of-type(1) {
    border-bottom: none;
  }

  &:nth-last-of-type(2) {
    border-bottom: none;
  }

  &:hover {
    transform: scale(0.8);
  }
}
</style>
