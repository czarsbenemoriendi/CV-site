<script setup lang='ts'>
defineProps<{ text?: string }>()
</script>

<template>
  <div>
    <p>
      {{ text }}
      <slot />
    </p>
  </div>
</template>
