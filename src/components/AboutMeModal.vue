<script lang="ts" setup>
import { useShowModal } from '../composables/showModal'

const { open, ModalsContainer } = useShowModal()
</script>

<template>
  <div>
    <button class="bg-transparent border-none" @click="() => open()">
      <i class="far fa-question-circle color-black text-size-2xl cursor-pointer" />
    </button>
    <ModalsContainer />
  </div>
</template>
