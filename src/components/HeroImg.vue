<script setup lang='ts'></script>

<template>
  <div>
    <div class="hero-img bg-center bg-cover w-full h-full col-span-full row-span-full grid grid-cols-4 grid-rows-4">
      <div class="hero-shadow" />
      <div class="hero-title">
        <h1>Paweł Niedużak</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --shadow: #ff0101;
}
header .hero-img {
  position: relative;
  z-index: 20;
  height: 100vh;
  background-image: url('/img/IMG_6575.jpeg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
header .hero-shadow {
  position: absolute;
  z-index: 25;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.hero-title {
  position: relative;
  z-index: 30;
  grid-column: 1 / -1;
  margin-top: 6rem;
  margin-left: 3rem;
  /* mix-blend-mode: overlay; */
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
}
@media (min-width: 768px) {
  .hero-title {
    margin-top: 10rem;
  }
}
@media (min-width: 1440px) {
  .hero-title {
    grid-row: 1/1;
    grid-column: 2/4;
  }
}
</style>
