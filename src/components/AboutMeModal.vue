<script lang="ts" setup>
import { useShowModal } from '../composables/showModal'

const { open, ModalsContainer } = useShowModal()
</script>

<template>
  <div>
    <button @click="() => open()">
      <i class="far fa-question-circle" />
    </button>
    <ModalsContainer />
  </div>
</template>
