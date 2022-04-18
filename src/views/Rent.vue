<template>
  <div class="rent-page">
    <div class="container">
      <div class="section-form">
        <Input
          type="number"
          prefix="每月租金（P）"
          suffix="元"
          placeholder="0"
          v-model:value="formData.mp"
        />
        <Input
          type="number"
          prefix="每年涨幅（R）"
          suffix="%"
          placeholder="0"
          v-model:value="formData.r"
        />
        <Input
          type="number"
          prefix="出租年数（N）"
          suffix="年"
          placeholder="0"
          v-model:value="formData.n"
        />
      </div>
      <div class="section-btn">
        <Button type="primary" @click="onCalc" block />
      </div>

      <div class="section">
        <div><strong>总收益：</strong>{{ numberWithCommas(total) }}元</div>
        <div><strong>收益率：</strong></div>
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
import { reactive, ref } from 'vue'

const formData = reactive<Record<string, any>>({})
const total = ref(0)

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function onCalc() {
  // 每年租金 = 每月租金 * 12
  const P = Number(formData.mp) * 12

  // 每年上涨幅度（百分率）
  const R = Number(formData.r)

  // 出租年数
  const N = Number(formData.n)

  // 3000 + 3000*1.05 + 3000*1.05*1.05 = 9457.5
  // 3000 + 3000*1.05 + 3000*1.05*1.05 + 3000*1.05*1.05*1.05 = 12930.375
  // 公式：S = \sum_{n=1}^{∞} P * (1 + R)^{n-1}
  // https://www.latexlive.com/#JTVDc3VtXyU3Qm49MSU3RCU1RSU3QiVFMiU4OCU5RSU3RCUyMFAlMjAqJTIwKDElMjArJTIwUiklNUUlN0JuLTElN0Q=

  let S = 0

  for (let i = 1; i <= N; i++) {
    S += P * Math.pow(1 + R, i - 1)
  }

  total.value = S
}
</script>

<style scoped lang="scss">
.rent-page {
  padding: 20px;
}

.section-btn {
  margin: 20px 0;
}
</style>
