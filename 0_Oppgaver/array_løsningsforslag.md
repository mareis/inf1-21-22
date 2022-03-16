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

### Løsning

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

### Løsning

```javascript
function tilfeldigOrd() {
    let mittAlfabet = ["A", "B", "C", "D", "E", "F", "G"];
    let ord = "";
    for (let i = 0; i < 3; i++) {
        let indeks = Math.floor(Math.random() * mittAlfabet.length);
        ord += mittAlfabet[indeks];
    }
    return ord;
}
console.log(tilfeldigOrd());
```

## Oppgave 4

-   Lag en funksjon som genererer en array med n tilfelige tall fra 1-30. n er parameteren til funskjonen

### Løsning

```javascript
function tilfeldigArray(n) {
    returArray = [];
    for (let i = 0; i < n; i++) {
        let tilfeldig = Math.floor(Math.random() * 30) + 1;
        returArray.push(tilfeldig);
    }
    return returArray;
}

console.log(tilfeldigArray(10));
```

-   Utfordring: Unngå duplikater. Hvert tall skal være unikt.

### Løsning

```javascript
let utdragArray = [];
for (let i = 1; i <= 30; i++) {
    utdragArray.push(i);
}

function tilfeldigArray(n) {
    returArray = [];
    for (let i = 0; i < n; i++) {
        let indeks = Math.floor(Math.random() * utdragArray.length);
        returArray.push(utdragArray[indeks]);
        utdragArray.splice(indeks, 1);
    }
    return returArray;
}

console.log(tilfeldigArray(10));
```

## Oppgave 5

---

Lag en funksjon som tar en array som argument og returnerer og skriver ut en reversert utgave.

### Løsning

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

## Oppgave 6

---

```javascript
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];
```

-   Loop over the 2 arrays and if there are any common courses, if so console.log them

### Løsning

```javascript
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[i] === student2Courses[j]) {
            console.log(`Begge elevene har ${student1Courses[i]}.`);
        }
    }
}
```

## Oppgave 7

---

```javascript
let food1 = ["Noodle", "Pasta", "Ice-cream"];
let food2 = ["Fries", "Ice-cream", "Pizza"];
```

-   Compare the 2 arrays and find common food if any

### Løsning

```javascript
let food1 = ["Noodle", "Pasta", "Ice-cream"];
let food2 = ["Fries", "Ice-cream", "Pizza"];

for (let i = 0; i < food1.length; i++) {
    for (let j = 0; j < food2.length; j++) {
        if (food1[i] === food2[j]) {
            console.log(`Begge inneholder ${food1[i]}.`);
        }
    }
}
```

## Oppgave 8

---

```javascript
let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];
```

-   Compare the 3 arrays and find any common elements

### Løsning

```javascript
let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];

for (let i = 0; i < values1.length; i++) {
    for (let j = 0; j < values2.length; j++) {
        if (values1[i] === values2[j]) {
            console.log(`${values1[i]} eksisterer i flere array`);
        }
        for (let k = 0; k < values3.length; k++) {
            if (values2[j] === values3[k]) {
                console.log(`${values2[i]} eksisterer i flere array`);
            }
            if (values1[i] === values3[k] && j == 0) {
                console.log(`${values1[i]} eksisterer i flere array`);
            }
        }
    }
}
```

-   Denne løsningen har mange svakheter og vil i mange tilfeller ikke fungere optimalt. Kan du finne tilfellen? Finnes det en måte å løse det på?

## Oppgave 9

---

-   Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Test Data :

```javascript
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
```

Expected Output :

    [7]
    []
    [7, 9, 0]
    [7, 9, 0, -2]

### Løsning alternativ 1

```javascript
function first(a, n = 1) {
    return a.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
```

### Løsning alternativ 2

```javascript
function first(a, n = 1) {
    if (n > a.length) {
        return a;
    } else {
        returArray = [];
        for (let i = 0; i < n; i++) {
            returArray.push(a[i]);
        }
        return returArray;
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
```

## Oppgave 10

---

-   Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

Test Data :

```javascript
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
```

Expected Output :

    -2
    [9, 0, -2]
    [7, 9, 0, -2]

### Løsning alternativ 1

```javascript
function first(a, n = 1) {
    return a.slice(n, a.length);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
```

### Løsning alternativ 2

```javascript
function last(a, n = 1) {
    if (n > a.length) {
        return a;
    } else {
        returArray = [];
        for (let i = a.length - n; i < a.length; i++) {
            returArray.push(a[i]);
        }
        return returArray;
    }
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
```

## Oppgave 11

---

-   Write a simple JavaScript program to join all elements of the following array into a string.

Sample array :

```javascript
let myColor = ["Red", "Green", "White", "Black"];
```

Expected Output :

    "Red, Green, White, Black"

### Løsning alternativ 1

```javascript
let myColor = ["Red", "Green", "White", "Black"];
myColorString = myColor.join(", ");

console.log(myColorString);
```

### Løsning alternativ 2

```javascript
let myColor = ["Red", "Green", "White", "Black"];
myColorString = "";
for (let i = 0; i < myColor.length; i++) {
    myColorString += myColor[i];
    if (i < myColor.length - 1) {
        myColorString += ", ";
    }
}

console.log(myColorString);
```

## Oppgave 12

---

-   There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

Sample array :

```javascript
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
```

Expected Output :

    [4, 5, 8, 10, 12, 13]

### Løsning

```javascript
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

if (array1.length >= array2.length) {
    console.log(add(array1, array2));
} else {
    console.log(add(array2, array1));
}

function add(a, b) {
    for (let i = 0; i < b.length; i++) {
        a[i] += b[i];
    }
    return a;
}
```

## Oppgave 13

-   Write a JavaScript function to find an array contains a specific element.

Test data :

```javascript
let arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
```

Expected result:

    True

### Løsning

```javascript
let arr = [2, 5, 9, 6];

function contains(a, e) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == e) {
            return true;
        }
    }
    return false;
}

console.log(contains(arr, 5));
```
