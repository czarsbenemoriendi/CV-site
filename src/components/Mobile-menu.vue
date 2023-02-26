<template>
	<nav class="mobile-menu">
		<a href="#home" class="mobile-menu__nav-link logo">p4w3l</a>

		<a href="#about-me" class="mobile-menu__nav-link about-me"
			><i class="fa-solid fa-question"></i>
			<p class="mobile-menu__text">About me</p>
		</a>
		<a href="#portfolio" class="mobile-menu__nav-link portfolio"
			><i class="fa-regular fa-lightbulb"></i>
			<p class="mobile-menu__text">Portfolio</p></a
		>
		<a href="#contact" class="mobile-menu__nav-link contact"
			><i class="fa-regular fa-envelope"></i>
			<p class="mobile-menu__text">Contact</p></a
		>
		<a href="#" disabled="disabled" aria-disabled="true" class="mobile-menu__nav-link placeholder"></a>
	</nav>
</template>
<style scoped lang="scss">
nav {
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
	.mobile-menu {
		display: flex;
		align-items: center;
		gap: 20px;
		overflow: hidden;
		&__text {
			position: absolute;
			left: 0;
			bottom: 0;
			font-size: 0.7rem;
			width: 100%;
		}
		&__nav-link {
			position: relative;
			padding: 0.5em;
			color: white;
			i {
				margin-bottom: 0.8em;
			}
		}
		.logo {
			order: 3;
			cursor: pointer;
		}
		.about-me {
			white-space: nowrap;
			order: 2;
		}
		.portfolio {
			order: 1;
		}
		.contact {
			order: 6;
		}
		.placeholder {
			order: 7;
			pointer-events: none;
			outline: none;
		}
	}
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2em;
		border: transparent;
		background-color: transparent;
	}
	.desktop-menu {
		display: none;
		&__nav-link {
			padding: 0.5em;
		}
	}
}
</style>
