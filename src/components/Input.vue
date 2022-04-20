<template>
  <div class="input-wrapper">
    <div class="input-affix-wrapper">
      <div class="input-prefix" v-if="prefix">{{ prefix }}</div>
      <input
        class="input"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        v-on:input="updateValue($event.target.value)"
      />
      <div class="input-suffix" v-if="suffix">{{ suffix }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  prefix: String,
  suffix: String,
  value: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
})

const emit = defineEmits(['update:value'])

function updateValue(value: string) {
  emit('update:value', value)
}
</script>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  white-space: nowrap;
  margin-bottom: 10px;
}

.input-affix-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.input-prefix,
.input-suffix {
  padding: 0 10px;
}

.input {
  flex-grow: 1;
  border: none;
  text-align: right;
  font-size: 18px;
  width: 100px;
  height: 58px;
}
</style>
