<script setup lang="ts">
import { ref, Ref, onMounted, onBeforeUnmount } from 'vue';
const popupIsHidden: Ref<Boolean> = ref(true);

const showPopup = (): void => {
	popupIsHidden.value = false;
};
const hidePopup = (): void => {
	popupIsHidden.value = true;
};
const onKeyDown = (event: KeyboardEvent): void => {
	if (event.key === 'Escape') {
		hidePopup();
	}
};
onMounted((): void => {
	document.addEventListener('keydown', onKeyDown);
});
</script>
<template>
	<section id="about-me" class="about-me-section">
		<h2 class="inline-block">About me</h2>
		<button class="w-15 h-15" @click="showPopup">
			<i class="far fa-question-circle"></i>
		</button>
		<div class="popup-wrapper">
			<div class="popup" @click="hidePopup" v-if="!popupIsHidden">
				<p>
					I'm 23 year old. Currently I'm working in the caffee. In my previous job I was a manager there for almost a year. I believe that thanks to this I have
					a high level of communication with people. I also have a high level of preparation a delicious coffee. I learned many other skills in this place such
					as the fact that the most important thing in working with clients is to understand the client's needs. If we care about them, they will come back.
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-5">
			<p>
				I'm a self-taught front-end developer. I started learning with Udemy courses and now I'm practicing my skills in my free time, I love it and I do it for
				myself. I would like to find a place where I could practicing my skills.
			</p>
			<p>
				I'm searching for work where I could keep practicing my programming skills. I want to learning not only during my free time. I'm hungry for knowledge. I
				have well-developed interpersonal skills. And I am passionate about sports. I love going to the gym. Thanks to this I built up my confidence.
			</p>
		</div>
	</section>
</template>
<style scoped>
.about-me-section {
	position: relative;
}
.popup-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.popup {
	position: absolute;
	background: #333;
	border-radius: 15px;
	top: 140px;
	width: 80%;
	box-shadow: 5px 11px 16px 0 black;
	z-index: 1;
	color: white;
}
.popup p {
	font-size: 0.8rem;
	padding: 2rem;
}
@media (min-width: 768px) {
	.popup p {
		font-size: 1.2rem;
	}
}
</style>
