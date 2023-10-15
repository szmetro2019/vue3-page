<!-- <template>
  <div class="container">
    <div class="chart">
      <Chart :option="refBarOption" :style="{ height: '300px' }" />
    </div>

    <div class="chart item">
      <Chart :option="refLineOption" :style="{ height: '300px' }" />
    </div>

    <div class="chart item">
      <Chart :option="refScoreOption" :style="{ height: '300px' }" />
    </div>
  </div>
</template>
<script setup lang="ts" name="About">
import { ref } from "vue";
import { Chart } from "@/components";

const barOption = {
  title: {},
  tooltip: {},
  xAxis: {
    data: ["1月", "2月", "3月", "4月", "5月", "6月"]
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

const lineOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line"
    }
  ]
};

const scoreOption = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%"
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      detail: {
        formatter: "{value}"
      },
      data: [
        {
          value: 50,
          name: "SCORE"
        }
      ]
    }
  ]
};

const refBarOption = ref(barOption);
const refLineOption = ref(lineOption);
const refScoreOption = ref(scoreOption);
</script>
<style lang="less" scoped>
.container {
  position: relative;
  padding: 60px 16px;
  width: 100%;
  height: 100%;
}

.chart {
  width: 100%;
  height: 300px;
  background: #fff;
}

.chart.item {
  margin-top: 15px;
}

.van-theme-dark {
  .chart {
    background: #222;
    color: #fff;
  }
}
</style> -->

<template>
  <div class="container">1231</div>
</template>
<script setup lang="ts" name="About"></script>
<style lang="less" scoped></style>
