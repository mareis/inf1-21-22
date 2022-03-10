# Array-oppgaver

## Oppvarming

```javascript
let people = ["Greg", "Mary", "Devon", "James"];
```

1.  Using a loop, iterate through this array and console.log all of the people.
2.  Write the command to remove "Greg" from the array.
3.  Write the command to remove "James" from the array.
4.  Write the command to add "Matt" to the front of the array.
5.  Write the command to add your name to the end of the array.
6.  Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
7.  Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
8.  Write the command that gives the indexOf where "Mary" is located.
9.  Write the command that gives the indexOf where "Foo" is located (this should return -1).
10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

```javascript
let people = ["Greg", "Mary", "Devon", "James"];

// 1
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2

people.shift();

// 3

people.pop();

// 4

people.unshift("Matt");

// 5

people.push("Elie");

// 6

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] == "Mary") {
        break;
    }
}

// 7

people.slice(2);

// 8

people.indexOf("Mary");

// 9

people.indexOf("Foo");

// 10

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1, "Elizabeth", "Artie");
```

## Oppgave 1

---

-   Declare and initialize an array called planets with 5 string values
-   console.log each item in the array.
-   Also console.log the index in each iteration

## Oppgave 2

-   Write a JavaScript function to get a random item from an array.

## Oppgave 3

---

```javascript
let mittAlfabet = ["A", "B", "C", "D", "E", "F", "G"];
```

-   Lag en funksjon som returnerer et tilfeldig "ord" med tre bokstaver fra mittAlfabet.

## Oppgave 4

-   Lag en funksjon som genererer en array med n tilfelige tall fra 1-30. n er parameteren til funskjonen

```javascript
function tilfeldigArray(n){
    .
    .
    .
    return arrayet ditt med lengde n
}

```

-   Utfordring: Unngå duplikater. Hvert tall skal være unikt.

## Oppgave 4

---

Lag en funksjon som tar en array som argument og returnerer og skriver ut en reversert utgave.

## Oppgave 5

---

```javascript
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];
```

-   Loop over the 2 arrays and if there are any common courses, if so console.log them

## Oppgave 6

---

```javascript
let food = ["Noodle", "Pasta", "Ice-cream"];
let food = ["Fries", "Ice-cream", "Pizza"];
```

-   Compare the 2 arrays and find common food if any

## Oppgave 7

---

```javascript
let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];
```

-   Compare the 3 arrays and find any common elements

## Oppgave 8

---

-   Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Test Data :

```javascript
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
```

Expected Output :

    7
    []
    [7, 9, 0]
    [7, 9, 0, -2]
    []

## Oppgave 9

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

## Oppgave 10

---

-   Write a simple JavaScript program to join all elements of the following array into a string.

Sample array :

```javascript
let myColor = ["Red", "Green", "White", "Black"];
```

Expected Output :

    "Red, Green, White, Black"

## Oppgave 11

---

-   There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

Sample array :

```javascript
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
```

Expected Output :

    [4, 5, 8, 10, 12, 13]

## Oppgave 12

-   Write a JavaScript function to find an array contains a specific element.

Test data :

```javascript
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
```

Expected result:

    True

## Oppgave 13

--

-   Write a JavaScript function to remove a specific element from an array.

Test data :

```javascript
console.log(remove_array_element([2, 5, 9, 6], 5));
```

Expected result:

    [2, 9, 6]
