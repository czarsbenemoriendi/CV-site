<script setup lang='ts'>
import { Modal, TextBlock } from '../components/index'
import { aboutMeTexts } from '../constants/index'

const { firstParagraph, secondParagraph } = aboutMeTexts
</script>

<template>
  <div class="title-box">
    <h2>
      About me
    </h2>
    <Modal class="ml-3 pt-1" />
  </div>
  <div class="flex flex-col gap-5">
    <TextBlock :text="firstParagraph" />
    <TextBlock :text="secondParagraph" />
  </div>
</template>

<style scoped>
.title-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  .title-box {
    justify-content: flex-start;
  }
}
</style>
