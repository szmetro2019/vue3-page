<template>
  <div class="space-box space-pd">
    <div class="row-box-wrap">
      <i-ant-design-step-forward-outlined></i-ant-design-step-forward-outlined>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DashboardBox'
}
</script>
<script lang="ts" setup>
import { onMounted, onActivated } from 'vue'
onMounted(() => {})
onActivated(() => {})
</script>
<style scoped>
.my-adress {
  color: #666;
  font-size: 12px;
  line-height: 20px;
}
</style>
