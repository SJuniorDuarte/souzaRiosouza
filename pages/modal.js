const clickOpenModalid1 = document.getElementById("btn-open-modal-id1");
const clickOpenModalid2 = document.getElementById("btn-open-modal-id2");
const clickOpenModalid3 = document.getElementById("btn-open-modal-id3");
const clickOpenModalid4 = document.getElementById("btn-open-modal-id4");
const imgModal = document.getElementById("img-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

[
  clickOpenModalid1,
  clickOpenModalid2,
  clickOpenModalid3,
  clickOpenModalid4,
].forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    imgModal.src = "../images/imagesid/image-" + btn.value + ".jpeg";
    console.log(clickOpenModalid1.value);
  });
});
