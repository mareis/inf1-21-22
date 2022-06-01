let todoListe = [];

function leggTilTodo() {
  let inputE = document.querySelector("#tekstboks");

  todoListe.push(inputE.value);

  console.log(todoListe);
  inputE.value = "";
  skrivUtTodo();
}

function skrivUtTodo() {
  document.querySelector("#gjøremål").innerHTML = "";
  for (let i = 0; i < todoListe.length; i++) {
    document.querySelector(
      "#gjøremål"
    ).innerHTML += `<li> ${todoListe[i]}  </li>`;
  }
}
