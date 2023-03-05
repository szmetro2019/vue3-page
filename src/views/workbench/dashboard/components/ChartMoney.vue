<template>
  <div :id="chartId" :style="{ height: height }" class="echarts-box" />
</template>

<script>
import { defineComponent, ref, toRefs, onMounted, onUnmounted } from 'vue'
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

    let myChart = ref()
    onMounted(async () => {
      // 初始化echarts实例
      myChart.value = echarts.init(document.getElementById(chartId.value))
      // 绘制图表
      myChart.value.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            }
          }
        ]
      })
      myChart.value.setOption({
        series: [
          {
            data: chartData.value
          }
        ]
      })
      window.addEventListener('resize', () => {
        myChart.value.resize()
      })
    })
    onUnmounted(() => {
      ////console.log('111')
      myChart.value.dispose()
    })
    return {
      myChart,
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
