<script setup lang='ts'>
import { ref } from 'vue'

const value = ref(2)
const color = ref('teal')
</script>

<template>
  <v-layout class="overflow-visible">
    <v-bottom-navigation
      v-model="value"
      :bg-color="color"
      mode="shift"
    >
      <v-btn href="#about-me">
        <v-icon class="text-size-sm">
          mdi-account
        </v-icon>

        <span>Account</span>
      </v-btn>
      <v-btn href="#timeline">
        <v-icon>mdi-television-play</v-icon>

        <span>Video</span>
      </v-btn>

      <v-btn href="#home">
        <p class="text-size-sm">
          p4w3l
        </p>

        <span>Home</span>
      </v-btn>

      <v-btn href="#portfolio">
        <v-icon>mdi-projector-screen</v-icon>

        <span>Portfolio</span>
      </v-btn>

      <v-btn href="#contact">
        <v-icon>mdi-account-box</v-icon>

        <span>Contact</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<style scoped>
.v-bottom-navigation {
  z-index: initial !important;
}
.v-bottom-navigation .v-bottom-navigation__content > .v-btn {
  min-width: initial;
}
</style>
