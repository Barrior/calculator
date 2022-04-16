<template>
  <div class="about">
    <div class="container">
      <div class="section">
        <div>租金（P）</div>
        <input type="number" id="p" /> 元
      </div>
      <div class="section">
        <div>利率（R）</div>
        <input type="number" id="r" /> %
      </div>
      <div class="section">
        <div>出租年数（N）</div>
        <input type="number" id="n" /> 年
      </div>
      <div class="section">
        <button>计算</button>
      </div>
      <div>
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
