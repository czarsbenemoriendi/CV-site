<script setup lang="ts">
import { ContactItem } from '../components/index'
import { contacts } from '../constants/index'
</script>

<template>
  <section id="contact" class="w-full">
    <h2 class="mb-8">
      Contact
    </h2>
    <div class="flex flex-col gap-3">
      <p>You can find me at:</p>
      <ContactItem v-for="(contact, index) in contacts" :key="index" :contact="contact" />
    </div>
  </section>
</template>

<style scoped>

</style>
