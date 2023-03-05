<template>
  <div id="container" :style="{ width: width, height: height }"></div>
</template>
<script lang="ts" setup>
import { defineProps, onMounted, onActivated, shallowRef } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '150px'
  }
})
console.log(props)
let map = shallowRef(null)
let polyEditor = shallowRef(null)
let polyline1 = shallowRef(null)
let polyline2 = shallowRef(null)
let marker = shallowRef(null)

const bMapInfo = () => {
  AMapLoader.load({
    key: '4640c0067263451182d623ab18f1002b', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.1Beta', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.DistrictSearch', 'AMap.PolylineEditor', 'AMap.Polyline'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map.value = new AMap.Map('container', {
        zoom: 16, //级别
        center: [113.977037, 22.539956]
      })
      var path = [
        [113.97704, 22.53997],
        [113.976585, 22.53998],
        [113.976121, 22.539978],
        [113.976114, 22.540099],
        [113.976097, 22.540292],
        [113.975403, 22.540291],
        [113.974686, 22.540292],
        [113.974685, 22.540093],
        [113.974172, 22.540065],
        [113.973613, 22.540026],
        [113.973605, 22.540443],
        [113.973585, 22.540892],
        [113.974422, 22.540895],
        [113.975259, 22.540912],
        [113.976338, 22.540937],
        [113.978343, 22.540992],
        [113.978349, 22.540413],
        [113.978338, 22.540002],
        [113.977831, 22.540108],
        [113.977326, 22.540213],
        [113.977037, 22.539972]
      ]
      polyline1.value = new AMap.Polyline({
        path: path,
        strokeColor: '#FF33FF',
        strokeWeight: 2,
        strokeOpacity: 0.5,
        zIndex: 50,
        bubble: true,
        lineJoin: 'bevel',
        geodesic: true
      })
      var canvasDir = document.createElement('canvas')
      var width = 24
      canvasDir.width = width
      canvasDir.height = width
      var context = canvasDir.getContext('2d')
      context.strokeStyle = 'white'
      context.lineJoin = 'round'
      context.lineWidth = 6
      context.moveTo(-4, width - 4)
      context.lineTo(width / 2, 6)
      context.lineTo(width + 4, width - 4)
      context.stroke()
      var path2 = [
        [113.975642, 22.536754],
        [113.976293, 22.536544],
        [113.976693, 22.537188],
        [113.977584, 22.537539],
        [113.97741, 22.538394],
        [113.977311, 22.539396],
        [113.977179, 22.539709],
        [113.977069, 22.539932],
        [113.977027, 22.540253],
        [113.976644, 22.540258],
        [113.97612, 22.54023],
        [113.976082, 22.540898],
        [113.97624, 22.540901]
      ]
      polyline2.value = new AMap.Polyline({
        path: path2,
        dirImg: canvasDir,
        showDir: true,
        strokeColor: 'green',
        strokeWeight: 6,
        strokeOpacity: 0.8,
        zIndex: 52,
        bubble: true,
        lineJoin: 'bevel',
        geodesic: true
      })
      map.value.add([polyline1.value, polyline2.value])
      map.value.setFitView()
      polyEditor.value = new AMap.PolylineEditor(map.value, polyline1.value)
      // 编辑第一个
      // polyEditor.value.setTarget(polyline1.value);
      // polyEditor.value.open();
      // polyEditor.value = new AMap.PolylineEditor(map.value, polyline2.value);
      // polyEditor.value.setTarget(polyline2.value);
      addMarker()
    })
    .catch((e) => {
      console.log(e)
    })
}
onMounted(() => {
  bMapInfo()
})
const bianji = () => {
  // polyEditor.value.open();
  polyEditor.value.setTarget(polyline2.value)
  polyEditor.value.open()
}
const guanbi = () => {
  polyEditor.value.close()
}
const getdat = () => {
  let newArr = []
  polyline2.value.getPath().forEach((element) => {
    let itemArr = ['', '']
    itemArr[0] = element.lng
    itemArr[1] = element.lat
    newArr.push(itemArr)
  })
  console.log(JSON.stringify(newArr))
}

//     var polyline3 = new AMap.Polyline({
//         path: path3,            // 设置线覆盖物路径
//      	showDir:true,
//      	dirImg:canvasDir,
//         strokeColor: '#3366cc',   // 线颜色
//         strokeWeight: 10           // 线宽
//     });

const addMarker = () => {
  // marker.value = new AMap.Marker({
  //   position: [113.977046, 22.539973],
  // });
  // marker.value.setMap(map.value);
  var marker1 = new AMap.Marker({
    position: new AMap.LngLat(113.976118, 22.540122),
    anchor: 'top-center',
    offset: new AMap.Pixel(0, 0)
  })
  // 设置鼠标划过点标记显示的文字提示
  marker1.setLabel({
    direction: 'top-center',
    offset: new AMap.Pixel(0, 0), //设置文本标注偏移量
    content: "<div class='info'>大门，汽车专用</div>" //设置文本标注内容
  })
  var marker2 = new AMap.Marker({
    position: new AMap.LngLat(113.977046, 22.539973) // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  })
  marker2.setLabel({
    direction: 'top-center',
    offset: new AMap.Pixel(0, 0), //设置文本标注偏移量
    content: "<div class='info'>南门大门</div>" //设置文本标注内容
  })
  var marker3 = new AMap.Marker({
    position: new AMap.LngLat(113.978338, 22.540959) // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  })
  marker3.setLabel({
    direction: 'top-center',
    offset: new AMap.Pixel(0, 0), //设置文本标注偏移量
    content: "<div class='info'>东门小门</div>" //设置文本标注内容
  })
  var marker4 = new AMap.Marker({
    position: new AMap.LngLat(113.973602, 22.5403) // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  })
  marker4.setLabel({
    direction: 'top-center',
    offset: new AMap.Pixel(0, 0), //设置文本标注偏移量
    content: "<div class='info'>西门小门</div>" //设置文本标注内容
  })
  var markerList = [marker1, marker2, marker3, marker4]
  map.value.add(markerList)
}
onActivated(() => {
  console.log('onActivated-33')
})
</script>
<style lang="scss" scoped>
.my-adress {
  color: #666;
  font-size: 12px;
  line-height: 20px;
}
</style>
