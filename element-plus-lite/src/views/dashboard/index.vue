<template>
  <div v-fontsize="24">首页</div>
</template>

<script lang="ts">
export default {
  name: 'DashboardHome'
}
</script>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { numberPrecision } from '@/utils/index'
onMounted(() => {
  console.log(numberPrecision('plus', '-0.1', -0.1))
})
</script>
<style scoped></style>
