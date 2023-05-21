<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { TextBlock } from '../components/index'

defineProps<{
  title?: string
  teleportTo?: string
  text: string
}>()
const emit = defineEmits<{
  (e: 'confirm'): void
}>()
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    :teleport-to="false"
  >
    <h3>
      {{ title }}
    </h3>
    <!-- <p><slot /></p> -->
    <TextBlock :text="text" />
    <button class="mt-1 ml-auto px-2 border rounded-lg text-lg" @click="emit('confirm')">
      Confirm
    </button>
  </VueFinalModal>
</template>
