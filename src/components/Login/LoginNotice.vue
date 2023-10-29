<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  level: {
    type: String,
    required: true,
    validator: (value: string) => {
      return ['info', 'warning'].includes(value)
    }
  }
})

</script>



<template>
  <div class="alert alert-info">
    <span class="icon-[mdi-light--alert-circle] w-6 h-6"> </span>
    <slot></slot>
  </div>
</template>
