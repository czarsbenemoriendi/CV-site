// https://img.shields.io/badge/Javascript-black?style=for-the-badge&logo=javascript
// https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});
