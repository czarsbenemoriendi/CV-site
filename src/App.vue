<script lang="ts" setup>
import { AboutMeSection, BreakLine, ContactSection, DesktopMenu, Footer, Header, MobileMenu, PortfolioSection } from './pages/index'
import { useIsMobile } from './composables/isMobile'

const { mobileDevice, desktopDevice } = useIsMobile()
</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <nav>
      <MobileMenu v-if="mobileDevice" />
      <DesktopMenu v-if="desktopDevice" />
    </nav>
    <main>
      <div class="wrapper">
        <AboutMeSection />
      </div>
      <BreakLine class="break--top" />
      <div class="wrapper">
        <PortfolioSection />
      </div>
      <BreakLine class="break--bottom" />
      <div class="wrapper">
        <ContactSection />
      </div>
      <BreakLine class="break--top" />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.break--top {
  box-shadow: 0 2px 3px 2px gray;
}
.break--bottom {
  box-shadow: 0 -2px 3px 2px gray;
}
</style>
