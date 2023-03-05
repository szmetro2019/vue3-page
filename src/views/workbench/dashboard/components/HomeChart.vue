<template>
  <div id="main" style="width: 100%; height: 300px"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import debounce from 'lodash/debounce'
import useResize from './hask' // hook 代码见下方
type EChartsOption = echarts.EChartsOption

const { proxy } = getCurrentInstance() // 获取实例中的proxy

let myChart = ref(null)
const kEchartsFun = () => {
  myChart.value = echarts.init(document.getElementById('main'), null, {
    renderer: 'svg'
  })
  let option: EChartsOption
  option = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42]
        ]
      }
    ]
  }
  option && myChart.value.setOption(option)
}

const resize = () => {
  myChart.value.resize()
}

onMounted(() => {
  kEchartsFun()
})

// 暴露函数 （供hook调用）
defineExpose({
  resize
})

useResize()
</script>

<style lang="scss" scoped></style>
