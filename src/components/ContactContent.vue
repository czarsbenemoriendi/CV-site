<script setup lang="ts">
import { ContactItem, TextBlock } from '../components/index'
import { contacts } from '../constants/index'
</script>

<template>
  <div>
    <h2 class="mb-8">
      Contact
    </h2>
    <div class="flex flex-col gap-3">
      <TextBlock>You can find me at:</TextBlock>
      <ContactItem v-for="(contact, index) in contacts" :key="index" :contact="contact" />
    </div>
  </div>
</template>
