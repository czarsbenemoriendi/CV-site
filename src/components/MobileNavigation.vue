<script setup lang='ts'>
</script>

<template>
  <div class="mobile-menu">
    <a href="#home" class="mobile-menu__nav-link logo">p4w3l</a>
    <a href="#about-me" class="mobile-menu__nav-link about-me"><i class="fa-solid fa-question" />
      <p class="mobile-menu__text">About me</p>
    </a>
    <a href="#portfolio" class="mobile-menu__nav-link portfolio"><i class="fa-regular fa-lightbulb" />
      <p class="mobile-menu__text">Portfolio</p></a>
    <a href="#contact" class="mobile-menu__nav-link contact"><i class="fa-regular fa-envelope" />
      <p class="mobile-menu__text">Contact</p></a>
    <a href="#" disabled="disabled" aria-disabled="true" class="mobile-menu__nav-link placeholder" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.6);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
div .mobile-menu {
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;
}
div .mobile-menu__text {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 0.7rem;
  width: 100%;
}
div .mobile-menu__nav-link {
  position: relative;
  padding: 0.5em;
  color: white;
}
div .mobile-menu__nav-link i {
  margin-bottom: 0.8em;
}
div .mobile-menu .logo {
  order: 3;
  cursor: pointer;
}
div .mobile-menu .about-me {
  white-space: nowrap;
  order: 2;
}
div .mobile-menu .portfolio {
  order: 1;
}
div .mobile-menu .contact {
  order: 6;
}
div .mobile-menu .placeholder {
  order: 7;
  pointer-events: none;
  outline: none;
}
div .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  border: transparent;
  background-color: transparent;
}
div .desktop-menu {
  display: none;
}
div .desktop-menu__nav-link {
  padding: 0.5em;
}
</style>
