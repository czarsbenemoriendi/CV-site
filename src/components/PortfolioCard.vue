<script setup lang='ts'>
import { useIsMobile } from '../composables/isMobile'
import { TextBlock } from '../components/index'
import type { ProjectTypes } from '../types/index'

const props = defineProps<{
  project: ProjectTypes
}>()

const { desktopDevice } = useIsMobile()
</script>

<template>
  <div v-if="desktopDevice" class="card ">
    <a :href="project.href" rel="noopener" target="_blank">{{ props.project.title }}</a>
    <button class="card__img">
      <img :src="project.src" :alt="project.alt" class="desktop-screenshoot">
      <button><i class="far fa-question-circle" /></button>
      <TextBlock class="card__desktop-description xl:text-lg" :text="props.project.text" />
    </button>
  </div>
  <div v-else class="card">
    <a :href="project.href" rel="noopener" target="_blank">{{ props.project.title }}</a>
    <TextBlock class="card__description" :text="props.project.text" />
    <img :src="project.src" :alt="project.alt" class="w-full">
  </div>
</template>

<style scoped>
.card a {
  display: block;
  padding: 2rem 0;
  font-size: 1.5em;
  text-align: center;
  color: #8155a9;
}
.card__description {
  padding-bottom: 2rem;
}

@media (min-width: 768px) {

  .card__img {
background: transparent;
    display: block;
    position: relative;
    height: 500px;
    width: 100%;
    text-align: center;
    background-position: center;
    background-size: cover;
    border: transparent;
    border-radius: 10px;
    overflow: hidden;
    cursor: default;
  }
  .card__img button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    background: none;
    border: none;
    color: #fff;
    text-shadow: 2px 2px 5px black;
    cursor: crosshair;
    z-index: 5;
  }
  .card__img button:hover ~ .card__desktop-description {
    clip-path: circle(110% at 50% 80%);
  }
  .card__desktop-description {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: -200px;
    bottom: -20px;
    left: 0;
    right: 0;
    padding: 80px 30px;
    background-color: rgba(0, 0, 0, 0.85);
    color: #fff;
    clip-path: circle(0 at 50% 80%);
    transition: clip-path 0.4s;
  }
  .card .desktop-screenshoot {
    width: 100%;
    height: 100%;
  }
}
</style>
