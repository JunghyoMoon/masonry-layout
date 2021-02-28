const wrapper = document.querySelector(".masonry");
const items = wrapper.querySelectorAll(".item");

const closeModal = (event) => {
    const modal = event.target.parentNode;
    console.log(modal);
};

const getClose = () => {
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", closeModal);
};

function handleClick() {
    const content = this.innerHTML;
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
		<button class="close">❌</button>
		${content}
	`;
    wrapper.append(modal);
    getClose();
}

const init = () => {
    items.forEach((item) => item.addEventListener("click", handleClick));
};

if (wrapper) {
    init();
}
