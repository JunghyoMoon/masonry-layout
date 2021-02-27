const wrapper = document.querySelector(".masonry");
const items = wrapper.querySelectorAll(".item");

function handleClick() {
	const content = this.innerHTML;
}

const init = () => {
	items.forEach((item) => item.addEventListener("click", handleClick));
};

if (wrapper) {
	init();
}
