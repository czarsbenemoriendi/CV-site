<script setup lang='ts'>
import { defineProps } from 'vue'
import type { ContactProps } from '../types/index'

const props = defineProps<{
  contact: ContactProps
}>()
</script>

<template>
  <div>
    <ul>
      <li>
        <i class="fa-solid contact-icon" :class="contact.icon" />
        <a target="_blank" rel="noopener" :href="contact.href">{{ props.contact.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul li {
 margin: 0.5rem 0;
}
i {
  margin-right: 0.3rem;
}
</style>
