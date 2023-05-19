<script lang="ts" setup>
import { AboutMeSection, BreakLine, ContactSection, Footer, Header, PortfolioSection } from './pages/index'
import { DesktopNav, MobileNav, Wrapper } from './components/index'
import { useIsMobile } from './composables/isMobile'

const { mobileDevice, desktopDevice } = useIsMobile()
</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <nav>
      <MobileNav v-if="mobileDevice" />
      <DesktopNav v-if="desktopDevice" />
    </nav>
    <main>
      <Wrapper>
        <AboutMeSection />
      </Wrapper>
      <BreakLine class="break--top" />
      <Wrapper>
        <PortfolioSection />
      </Wrapper>
      <BreakLine class="break--bottom" />
      <Wrapper>
        <ContactSection />
      </Wrapper>
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
