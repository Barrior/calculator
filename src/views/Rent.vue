<template>
  <div class="rent-page">
    <div class="container">
      <div class="section-form">
        <Input
          type="number"
          prefix="每月租金（P）"
          suffix="元"
          :value="formData.mp"
        />
        <Input
          type="number"
          prefix="每年涨幅（R）"
          suffix="%"
          :value="formData.r"
        />
        <Input
          type="number"
          prefix="出租年数（N）"
          suffix="年"
          :value="formData.n"
        />
      </div>
      <div class="section-btn">
        <Button type="primary" @click="onCalc">计算收益</Button>
      </div>

      <div class="section">
        总收益：
        <div>xxx</div>
      </div>

      <div>
        方法一：租金回报率分析法 公式：（税后月租金－每月物业管理费）×
        12/购买房屋总价
      </div>

      <div>
        <p>计算公式：<img src="@/assets/images/formula-rent.svg" /></p>
        <p>实际案例：3000 + 3000*1.05 + 3000*1.05*1.05 = 9457.5</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BackNav from '@/components/BackNav.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { reactive } from 'vue'

const formData = reactive({
  mp: 30,
})

function onCalc() {
  console.log('formData:', formData)
  console.log('formData:', formData.mp)
}

// 租金
const P = 3000

// 利率
const R = 0.05

// 年数
const n = 3

// 3000 + 3000*1.05 + 3000*1.05*1.05 = 9457.5
// 3000 + 3000*1.05 + 3000*1.05*1.05 + 3000*1.05*1.05*1.05 = 12930.375
// 公式：S = \sum_{n=1}^{∞} P * (1 + R)^{n-1}
// https://www.latexlive.com/#JTVDc3VtXyU3Qm49MSU3RCU1RSU3QiVFMiU4OCU5RSU3RCUyMFAlMjAqJTIwKDElMjArJTIwUiklNUUlN0JuLTElN0Q=

let S = 0

for (let i = 1; i <= n; i++) {
  S += P * Math.pow(1 + R, i - 1)
}

console.log('S: ', S)
</script>

<style scoped lang="scss">
.rent-page {
  padding: 20px;
}

.section-btn {
  margin: 20px 0;

  :deep(.button) {
    width: 100%;
  }
}
</style>
