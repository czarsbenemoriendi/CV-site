<template>
	<section id="contact" class="contact-section">
		<h2>Contact</h2>
		<div class="contact-list">
			<p>You can find me at:</p>
			<ul>
				<li>
					<i class="fa-solid fa-at contact-icon"></i>
					<a target="_blank" rel="noopener" href="mailto:pa.nieduzak@gmail.com">pa.nieduzak@gmail.com</a>
				</li>
				<li>
					<i class="fa-brands fa-github contact-icon"></i>
					<a target="_blank" rel="noopener" href="https://github.com/czarsbenemoriendi">GitHub</a>
				</li>
				<li>
					<i class="fa-solid fa-phone contact-icon"></i>
					<a target="_blank" rel="noopener" href="tel:795108705">+48 795-108-705</a>
				</li>
				<li>
					<i class="fa-brands fa-linkedin"></i>
					<a target="_blank" rel="noopener" href="https://www.linkedin.com/in/pawel-nieduzak/">LinkedIn</a>
				</li>
			</ul>
		</div>
	</section>
</template>
<style scoped lang="scss">
.contact-section {
	width: 100%;
}
h2 {
	padding-bottom: 2rem;
}
.contact-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
	ul li {
		margin: 0.5rem 0;
	}
}
li {
	i {
		margin-right: 0.3rem;
	}
}
</style>
