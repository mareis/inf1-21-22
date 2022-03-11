# Array-oppgaver

## Oppgave 1

---

-   Declare and initialize an array called planets with 5 string values
-   console.log each item in the array.
-   Also console.log the index in each iteration

### Løsning

```javascript
let planets = ["Earth", "Mars", "Jupyter", "Venus", "Mercury"];

for (let i = 0; i < planets.length; i++) {
    console.log(planets[i], i);
}
```

## Oppgave 2

-   Write a JavaScript function to get a random item from an array.

```javascript
function tilfeldigElementFraArray(a) {
    let indeks = Math.floor(Math.random() * a.length);
    return a[indeks];
}
console.log(tilfeldigElementFraArray(["kron", "mynt"]));
```

## Oppgave 3

---

```javascript
let mittAlfabet = ["A", "B", "C", "D", "E", "F", "G"];
```

-   Lag en funksjon som returnerer et tilfeldig "ord" med tre bokstaver fra mittAlfabet.

```javascript
function tilfeldigOrd() {
    let mittAlfabet = ["A", "B", "C", "D", "E", "F", "G"];
    let ord = "";
    for (let i = 0; i < 3; i++) {
        let indeks = Math.floor(Math.random() * mittAlfabet.length);
        ord += mittAlfabet[index];
    }
}
console.log(tilfeldigOrd());
```

## Oppgave 5

---

Lag en funksjon som tar en array som argument og returnerer og skriver ut en reversert utgave.

```javascript
function reverserArray(a) {
    reversertArray = [];
    for (let i = a.length - 1; i >= 0; i--) {
        reversertArray.push(a[i]);
    }
    return reversertArray;
}

console.log(reverserArray([5, 4, 3, 2, 1]));
```
