const wrapper = document.querySelector(".masonry");
const items = wrapper.querySelectorAll(".item");

function handleClick() {
	console.log(this);
}

const init = () => {
	items.forEach((item) => item.addEventListener("click", handleClick));
};

if (wrapper) {
	init();
}
