<template>
  <div :class="[ns.b(), ns.is(`${shadow}-shadow`)]">
    <div v-if="$slots.header || header" :class="ns.e('header')">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="ns.e('body')" :style="bodyStyle">
      <slot />
    </div>
    <div>end</div>
  </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@nm/element-plus/es/hooks'
import { cardProps } from './card'

// defineOptions({
//   name: "ElCard",
// });

defineProps(cardProps)

const ns = useNamespace('card')
</script>
