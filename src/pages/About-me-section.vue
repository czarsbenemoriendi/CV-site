<script setup lang="ts">
import { Modal } from '../components/index'
import { aboutMeTexts } from '../constants/index'

const { firstParagraph, secondParagraph } = aboutMeTexts
</script>

<template>
  <section id="about-me" class="relative">
    <div class="flex justify-center items-center">
      <h2>
        About me
      </h2>
      <Modal class="ml-3 pt-1" />
    </div>
    <div class="flex flex-col gap-5">
      <p>
        {{ firstParagraph }}
      </p>
      <p>
        {{ secondParagraph }}
      </p>
    </div>
  </section>
</template>
