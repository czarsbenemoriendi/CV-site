<script setup lang='ts'>
import type { ContactProps } from '../types/index'

const props = defineProps<{
  contact: ContactProps
}>()
</script>

<template>
  <div>
    <ul class="contact-item">
      <li>
        <i :class="contact.icon" />
        <a target="_blank" rel="noopener" :href="contact.href">{{ props.contact.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding-inline-start: 20px;
}
i {
  margin-right: 0.3rem;
}
</style>
