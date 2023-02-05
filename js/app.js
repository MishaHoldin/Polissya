'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
		hamburger('.hamburger', '.header__nav', '.header');
});

const mySwiper = new Swiper('.swiper-brand', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: '.brands__next',
			prevEl: '.brands__prev',
	},
});
	
const loadMore = document.getElementById('loadmore');
const hide = [...document.querySelectorAll('.news__items')];

hide.splice(0, 3).forEach(
  elem => elem.classList.remove('hiden')
);

loadMore.addEventListener('click', function(e) {
  e.preventDefault();
  
  hide.splice(0, 3).forEach(
    elem => elem.classList.remove('hiden')
  )
  
  if (hide.length == 0) {
    loadMore.classList.add('hiden');
	}
	
});

const header = document.getElementById("header__nav");
const btns = header.getElementsByClassName("header__text");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += "active";
  });
}