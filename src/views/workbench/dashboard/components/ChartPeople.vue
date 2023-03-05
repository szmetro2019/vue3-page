<template>
  <div :id="chartId" :style="{ height: height }" class="echarts-box" />
</template>

<script>
import { defineComponent, toRefs, onMounted } from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
  props: {
    chartId: {
      type: String,
      default: 'myId'
    },
    chartData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  setup(props) {
    const { chartId, chartData, height } = toRefs(props)
    onMounted(async () => {
      // 初始化echarts实例
      const myChart = echarts.init(document.getElementById(chartId.value))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['入职人员', '离职人员']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '入职人员',
            type: 'line',
            stack: '总量'
          },
          {
            name: '离职人员',
            type: 'line',
            stack: '总量'
          }
        ]
      })
      myChart.setOption({
        xAxis: {
          data: chartData.value.xdata
        },
        series: [
          {
            data: chartData.value.rdata
          },
          {
            data: chartData.value.ldata
          }
        ]
      })
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    })
    return {
      chartId,
      chartData,
      height
    }
  }
})
</script>

<style lang="scss" scoped>
.echarts-box {
  width: 100%;
}
</style>
