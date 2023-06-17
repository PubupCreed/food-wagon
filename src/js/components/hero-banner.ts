const orderLocationHeader = document.querySelector(".order-location__header");
const orderLocationBtns = Array.from(
	document.querySelectorAll(".order-location__header-btn")
);
const locationBodies = Array.from(
	document.querySelectorAll(".order-location__body")
);

if (orderLocationHeader) {
	orderLocationHeader.addEventListener("click", (event) => {
		const target = event.target as HTMLElement;
		const targetId = target.id;

		if (!target.classList.contains("order-location__header-btn")) {
			return;
		}

		orderLocationBtns.forEach((btn) => btn.classList.remove("active-tab"));
		target.classList.add("active-tab");

		locationBodies.forEach((body) => {
			body.classList.remove("active-body");

			if (body.id === targetId) {
				body.classList.add("active-body");
                body.querySelector('input')?.focus();
			}
		});
	});
}


document.querySelector('.order-location__body-container')?.addEventListener('click', (event) => {
    event.preventDefault();
})