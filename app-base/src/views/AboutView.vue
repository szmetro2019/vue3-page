<template>
  <div class="about">
    <h1>{{ dayjs().to(dayjs('2022-11-01')) }} {{ $t('home') }}</h1>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from '@/custom/dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
</script>
<style></style>
