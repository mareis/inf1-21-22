# Array-oppgaver

## Oppgave 1

```javascript
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
```

-   What is the length of the array?
-   Write a function called myAlphabetLength which console.logs the length of the array
-   Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4

## Oppgave 2

-   Declare and initialize an array called Planets with 5 string values
-   console.log each item in the array.
-   Also console.log the index in each iteration

## Oppgave 3

Lag en funksjon som tar en array som argument og returnerer og skriver ut en reversert utgave.

## Oppgave 4

```javascript
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];
```

-   Loop over the 2 arrays and if there are any common courses, if so console.log them

## Oppgave 5

```javascript
let food = ["Noodle", "Pasta", "Ice-cream"];
let food = ["Fries", "Ice-cream", "Pizza"];
```

-   Compare the 2 arrays and find common food if any

## Oppgave 6

```javascript
let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];
```

-   Compare the 3 arrays and find any common elements

## Oppgave 7

Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Test Data :

```javascript
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
```

Expected Output :

7 <br />
[] <br />
[7, 9, 0] <br />
[7, 9, 0, -2] <br />
[] <br />
