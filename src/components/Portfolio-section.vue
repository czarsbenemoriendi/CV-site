<script setup lang="ts">
import { ref } from 'vue';
import weatherAppImg from '/public/img/portfolio/weatherApp.png';
import pigGameImg from '/public/img/portfolio/pig game.png';
const mobileDevice = ref(true);
const desktopDevice = ref(false);
const weatherApp = `https://weatherap-plication.netlify.app/`;
const pigGameApp = `https://gm-pig.netlify.app/`;
// const weatherAppImg = require(`/public/img/portfolio/weatherApp.png`);
// const weatherAppImg = `/img/${pic}+.png`;
// console.log(weatherAppImg);

if (window.innerWidth >= 768) {
	mobileDevice.value = false;
	desktopDevice.value = true;
}
</script>
<template>
	<section id="portfolio" class="portfolio-section">
		<h2>Portfolio</h2>
		<div class="container">
			<div class="card" v-if="mobileDevice">
				<a :href="weatherApp" rel="noopener" target="_blank">WeatherApp</a>
				<p class="card__description">
					My very first project in JS was a weatherApp. It's responsive and had a few shortcomings, but I'm proud of myself, that I made it. While I was
					creating this project, I was using flexbox, API from openweather. The entire project was published on netlify.
				</p>
				<img :src="weatherAppImg" alt="weatherapp screenshoot" />
			</div>

			<div class="card" v-if="desktopDevice">
				<a :href="weatherApp" rel="noopener" target="_blank">WeatherApp</a>
				<button class="card__img">
					<img :src="weatherAppImg" alt="weatherapp screenshoot" class="desktop-screenshoot" />
					<button><i class="far fa-question-circle"></i></button>
					<p class="card__desktop-description">
						My very first project in JS was a weatherApp. It's responsive and had a few shortcomings, but I'm proud of myself, that I made it. While I was
						creating this project, I was using flexbox, API from openweather. The entire project was published on netlify.
					</p>
				</button>
			</div>

			<div class="card" v-if="mobileDevice">
				<a :href="pigGameApp" rel="noopener" target="_blank">Pig Game</a>
				<p class="card__description">
					This game I made during Udemy course. I recreate these project by myself. During building these application I learned a strong foundation of JS. My
					friends says that this app gave them a lot of fun.
				</p>
				<img :src="pigGameImg" alt="weatherapp screenshoot" />
			</div>
			<div class="card" v-if="desktopDevice">
				<a :href="pigGameApp" rel="noopener" target="_blank">Pig Game</a>
				<button class="card__img">
					<img :src="pigGameImg" alt="weatherapp screenshoot" class="desktop-screenshoot" />
					<button><i class="far fa-question-circle"></i></button>
					<p class="card__desktop-description">
						This game I made during Udemy course. I recreate these project by myself. During building these application I learned a strong foundation of JS. My
						friends says that this app gave them a lot of fun.
					</p>
				</button>
			</div>
		</div>
	</section>
</template>
<style scoped lang="scss">
.portfolio-section {
	width: 100%;
}

.card {
	a {
		display: block;
		padding: 2rem 0;
		font-size: 1.5em;
		text-align: center;
		color: #8155a9;
	}
	&__description {
		padding-bottom: 2rem;
	}
}
@media (min-width: 768px) {
	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		.card {
			&__img {
				display: block;
				position: relative;
				height: 500px;
				width: 100%;
				text-align: center;
				background-position: center;
				background-size: cover;
				border: transparent;
				border-radius: 10px;
				overflow: hidden;
				cursor: default;
				button {
					position: absolute;
					top: 10px;
					right: 10px;
					padding: 10px;
					background: none;
					border: none;
					color: #fff;
					text-shadow: 2px 2px 5px rgb(0, 0, 0);
					cursor: crosshair;
					z-index: 5;
				}
				button:hover ~ .card__desktop-description {
					clip-path: circle(110% at 50% 80%);
				}
			}
			&__desktop-description {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				padding: 80px 30px;
				background-color: rgba(0, 0, 0, 0.85);
				color: #fff;
				clip-path: circle(0 at 50% 80%);
				transition: clip-path 0.4s;
			}
			.desktop-screenshoot {
				width: 100%;
				height: 100%;
				background-size: cover;
			}
		}
	}
}
</style>
