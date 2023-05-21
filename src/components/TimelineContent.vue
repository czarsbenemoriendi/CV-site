<script setup lang="ts">
import { useTimelineManagement } from '../composables/timelineManagement'
import { useIsMobile } from '../composables/isMobile'
import { Movie, TextBlock } from '../components/index'
import { timeline } from '../constants'

const { desktopDevice, mobileDevice } = useIsMobile()
const { picked, setIndex, text } = useTimelineManagement()
</script>

<template>
  <main class="w-full">
    <div class="grid place-content-center w-full md:place-content-start">
      <h2 class="pb-8">
        Timeline & movie
      </h2>
    </div>
    <Movie />
    <div v-if="desktopDevice" class="parent pt-10 w-full relative flex justify-between items-center">
      <span class="w-full absolute h-px bg-black z-0" />
      <div v-for="(year, key, index) in timeline" :key="key" class="label-parent relative">
        <label @click="setIndex(key, timeline)">
          <span class="absolute -top-5 -left-2">{{ key }}</span>
          <input :id="`radio${index}`" v-model="picked" type="radio" name="myRadio" class="relative z-50">
        </label>
      </div>
    </div>
    <div
      v-if="picked" class="w-140 h-80 mt-10 bg-transparent mb-20 overflow-y-auto rounded-lg"
    >
      <TextBlock :text="text" class="py-7 px-6" />
    </div>
    <TextBlock v-if="mobileDevice" class="grid place-content-center pt-10 text-center">
      See me on desktop device, please!
    </TextBlock>
  </main>
</template>

<style scoped>
::-webkit-scrollbar-thumb {
  background: transparent;
}
</style>
