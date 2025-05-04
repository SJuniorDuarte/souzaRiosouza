const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrousel() {
  idx++;

  if (idx > img.length - 2) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 120}px)`;
}

setInterval(carrousel, 2000);
