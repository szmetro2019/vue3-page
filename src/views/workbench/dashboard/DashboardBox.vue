<template>
  <div class="space-box space-pd">
    <div class="row-box-wrap">
      <a-pagination v-model:current="current" :total="500" />

      {{ $t('route.DashboardBox') }}
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DashboardBox'
}
</script>
<script lang="ts" setup>
import { onMounted, onActivated, ref } from 'vue'
onMounted(() => {})
onActivated(() => {})
const current = ref<number>(6)
</script>
<style scoped>
.my-adress {
  color: #666;
  font-size: 12px;
  line-height: 20px;
}
</style>
