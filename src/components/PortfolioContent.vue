<script setup lang="ts">
import { PortfolioCard } from '../components/index'
import { projects } from '../constants/index'
</script>

<template>
  <div>
    <h2>Portfolio</h2>
    <div class="box grid gap-3">
      <PortfolioCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .box {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1200px) {
  .box {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
