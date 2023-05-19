<script setup lang="ts">
import { useAddSticky } from '../composables/addSticky'

const { sticky } = useAddSticky()
</script>

<template>
  <div ref="sticky" class="desktop-menu">
    <a href="#home" class="desktop-menu__nav-link logo line">p4w3l</a>
    <a href="#about-me" class="desktop-menu__nav-link about-me line">About me</a>
    <a href="#portfolio" class="desktop-menu__nav-link portfolio line">Portfolio</a>
    <a href="#contact" class="desktop-menu__nav-link contact line">Contact</a>
  </div>
</template>

<style scoped>
.desktop-menu {
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6rem;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.7);
  grid-template-columns: repeat(12, 1fr);
}
.desktop-menu .logo {
  grid-column: 2/3;
}
.desktop-menu .about-me {
  white-space: nowrap;
  grid-column: 9/10;
}
.desktop-menu__nav-link {
  margin: auto;
  color: white;
  font-size: 2em;
}
.desktop-menu a {
  position: relative;
}
.desktop-menu .line, .desktop-menu .line::before, .desktop-menu .line::after {
  transition: 0.3s;
}
.desktop-menu .line::before, .desktop-menu .line::after {
  content: '';
  position: absolute;
  width: 5px;
  bottom: 0;
  border-bottom: 3px white solid;
  opacity: 0;
}
.desktop-menu .line::before {
  right: 50%;
}
.desktop-menu .line::after {
  left: 50%;
}
.desktop-menu .line:hover:before, .desktop-menu .line:hover:after {
  width: 50%;
  opacity: 1;
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  bottom: inherit;
  width: 100%;
  z-index: 10;
}
@media (min-width: 768px) {
  .desktop-menu__nav-link {
    font-size: 1.6rem;
    padding: 1rem 0.5rem;
  }
}
</style>
