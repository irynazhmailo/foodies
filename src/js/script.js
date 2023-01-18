const hamburger = document.querySelector(".hamburger"),
	menu = document.querySelector(".menu"),
	closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
	menu.classList.remove("active");
});

// Set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;
