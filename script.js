let openModal = document.querySelector(".jsModalBtn");
let closeModal = document.querySelector(".jsClose");
let modalContent = document.querySelector(".jsModalContent");

openModal.addEventListener("click", () => {
  modalContent.classList.remove("hidden");
  document.body.classList.add("modal-active-bg");
});

closeModal.addEventListener("click", () => {
  modalContent.classList.add("hidden");
  document.body.classList.remove("modal-active-bg");
});
