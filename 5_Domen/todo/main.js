let todoListe = ["Besøke Ona", "Bli fjellkonge", "Ta en kilosørret"];
skrivUtTodo();

function leggTilTodo() {
  let inputE = document.querySelector("#tekstboks");

  todoListe.push(inputE.value);

  inputE.value = "";
  skrivUtTodo();
}

function skrivUtTodo() {
  document.querySelector("#gjøremål").innerHTML = "";
  for (let i = 0; i < todoListe.length; i++) {
    document.querySelector(
      "#gjøremål"
    ).innerHTML += `<li> <input type="checkbox"> ${todoListe[i]}  <button onclick="slettGjøremål(${i})">X</button> </li>`;
  }
}

function slettGjøremål(indeks) {
  todoListe.splice(indeks, 1);
  skrivUtTodo();
}
