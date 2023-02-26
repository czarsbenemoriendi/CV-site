<script lang="ts" setup>
import { ref } from 'vue';
import { AboutMeSection, PortfolioSection, MobileMenu, Header, Footer, BreakLine, ContactSection, DesktopMenu } from './components/index';

const mobileDevice = ref(true);
const desktopDevice = ref(false);

if (window.innerWidth >= 768) {
	mobileDevice.value = false;
	desktopDevice.value = true;
}
</script>
<template>
	<div>
		<header>
			<Header />
		</header>
		<nav>
			<MobileMenu v-show="mobileDevice" />
			<DesktopMenu v-show="desktopDevice" />
		</nav>
		<main>
			<div class="wrapper">
				<AboutMeSection />
				<BreakLine class="break--top" />
				<PortfolioSection />
				<BreakLine class="break--bottom" />
				<ContactSection />
				<BreakLine class="break--top" />
			</div>
		</main>
		<footer>
			<Footer />
		</footer>
	</div>
</template>
