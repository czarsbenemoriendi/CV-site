<script setup lang="ts">
import { ref, onMounted } from 'vue';
/* 	window.onscroll = function () {
			stickyAdd();
		};

		const navbar = document.querySelector('nav');
		let sticky = navbar.offsetTop;
		function stickyAdd() {
			if (window.scrollY >= sticky) {
				navbar.classList.add('sticky');
			} else {
				navbar.classList.remove('sticky');
			}
		} */
const scrollPosition = ref(0);
const sticky = ref(null);

const updateScroll = () => {
	scrollPosition.value = window.scrollY;
};
onMounted(() => {
	window.addEventListener('scroll', updateScroll);
	window.onscroll = function () {
		stickyAdd();
	};

	const navbar = document.querySelector('.desktop-menu') as HTMLDivElement;
	let sticky = navbar.offsetTop;
	function stickyAdd() {
		if (window.scrollY >= sticky) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	}
});
</script>
<template>
	<nav class="desktop-menu" ref="sticky">
		<a href="#home" class="desktop-menu__nav-link logo underline">p4w3l</a>
		<a href="#about-me" class="desktop-menu__nav-link about-me underline">About me</a>
		<a href="#portfolio" class="desktop-menu__nav-link portfolio underline">Portfolio</a>
		<a href="#contact" class="desktop-menu__nav-link contact underline">Contact</a>
	</nav>
</template>
<style scoped lang="scss">
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

	.logo {
		grid-column: 2/3;
	}
	.about-me {
		white-space: nowrap;
		grid-column: 9/10;
	}
	&__nav-link {
		margin: auto;
		color: white;
		font-size: 2em;
	}
	a {
		position: relative;
	}
	.underline,
	.underline::before,
	.underline::after {
		transition: 0.3s;
	}
	.underline::before,
	.underline::after {
		content: '';
		position: absolute;
		width: 5px;
		bottom: 0;
		border-bottom: 3px white solid;
		opacity: 0;
	}
	.underline::before {
		right: 50%;
	}
	.underline::after {
		left: 50%;
	}
	.underline:hover:before,
	.underline:hover:after {
		width: 50%;
		opacity: 1;
	}
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
	.desktop-menu {
		&__nav-link {
			font-size: 1.6rem;
			padding: 1rem 0.5rem;
		}
	}
}
</style>
