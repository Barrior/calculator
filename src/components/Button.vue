<template>
  <button type="button" :class="classNames">
    <slot>开始计算</slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  block: Boolean,
})

const classNames = reactive({
  button: true,
  'is-block': props.block,
  primary: props.type === 'primary',
})

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
.button {
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 44px;
  padding: 4px 15px;
  font-size: 16px;
  border-radius: 4px;
  color: #333;
  border-color: #d9d9d9;
  background: #fff;

  &.is-block {
    display: block;
    width: 100%;
  }
}

.primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;

  &:active {
    background-color: #096dd9;
    border-color: #096dd9;
  }
}
</style>
