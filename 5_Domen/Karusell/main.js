document.querySelector("#overskrift").innerHTML = "Bildekarusell";

let bilde = 0;
const bilder = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

function byttBilde(retning) {
  if (retning == "høyre") {
    if (bilde < bilder.length - 1) {
      bilde++;
    } else {
      bilde = 0;
    }
  }

  if (retning == "venstre") {
    if (bilde > 0) {
      bilde--;
    } else {
      bilde = bilder.length - 1;
    }
  }
  document.querySelector("#bilde").src = `img/${bilder[bilde]}`;
}
setInterval(() => {
  byttBilde("høyre");
}, 5000);

for (let i = 0; i < bilder.length; i++) {
  document.querySelector("#miniatyrbilder").innerHTML += `
        <img src="img/${bilder[i]}" onclick="byttBildeIndeks(${i})">
    `;
}
function byttBildeIndeks(bilde) {
  document.querySelector("#bilde").src = `img/${bilder[bilde]}`;
}

document.addEventListener("keypress", function (e) {
  if (e.key == "v") {
    byttBilde("venstre");
  }
  if (e.key == "h") {
    byttBilde("høyre");
  }
});
