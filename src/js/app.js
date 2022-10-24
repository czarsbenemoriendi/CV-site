'use strict';
(function () {
	const heroImg = document.querySelector('.hero-img');
	if (window.innerWidth <= 768) {
		// improves display on mobile devices header section
		heroImg.classList.add('mobile-fix');
		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}
	if (window.innerWidth >= 768) {
		const mobileAppImg = document.querySelectorAll('.mobile-app-scr');
		mobileAppImg.forEach(el => {
			el.classList.add('hidden');
		});
		const cardsImgBox = document.querySelectorAll('.card__img');
		const projectInfo = document.querySelectorAll('.card__descr');
		const projectDesktopInfo = document.querySelectorAll(
			'.card__desktop-descr'
		);
		projectDesktopInfo.forEach(el => {
			el.classList.remove('hidden');
		});
		projectInfo.forEach(el => el.remove());
		const infoBtn = `<button><i class="far fa-question-circle"> </i></button>`;
		cardsImgBox.forEach(cardBoxImg => {
			cardBoxImg.insertAdjacentHTML('afterbegin', infoBtn);
		});

		window.onscroll = function () {
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
		}
	}
	const popup = document.querySelector('.popup');
	const aboutMeInfoBtn = document.querySelector('.about-me-informations');
	const showPopup = function () {
		popup.classList.remove('hidden');
	};
	const hidePopup = function () {
		popup.classList.add('hidden');
	};
	aboutMeInfoBtn.addEventListener('mouseenter', showPopup);
	aboutMeInfoBtn.addEventListener('mouseleave', hidePopup);
})();
