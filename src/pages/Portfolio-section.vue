<script setup lang="ts">
import { PortfolioCard } from '../components/index'
import { projects } from '../constants/index'
</script>

<template>
  <section id="portfolio" class="w-full">
    <h2>Portfolio</h2>
    <div class="container">
      <PortfolioCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}
</style>
