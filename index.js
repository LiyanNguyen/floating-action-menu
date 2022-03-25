let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menu_toggle');

menuToggle.onclick = () => {
	navigation.classList.toggle('active');
}