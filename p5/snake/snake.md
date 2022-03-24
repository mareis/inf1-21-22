# Snake

**Variable, valg, løkker og array**

---

## Intro

Før man begynner å programmere er det lurt å lage en plan, en skisse og en programstruktur.

![](https://skolekoding.weebly.com/uploads/6/3/4/3/63436993/screenshot-2016-11-07-at-14-41-18_5_orig.png)

Finn frem et ruteark og svar på følgende:

- Hvordan representeres leddene i slangen?
- Hvordan lagre koordinatene til hvert ledd i slangen?
- Hvordan oppdatere koordinatene til hvert ledd i slangen.

Lag en skisse der du tegner en slange med 5 ledd. Hvert ledd i hver rute.
Tenk deg at du skal tegne slangen i 3 "frames". Slangen starter med haletuppen i (0, 4). Tegn de tre senarionene og oppdater x -og y-arayene med koordinater til hvert ledd.

Startverdier:

```javascript
x = [0, 1, 2, 3, 4];
y = [4, 4, 4, 4, 4];
```

Kan du bruke push og shift for å oppdatere aryayene? Hvordan?

## p5.js

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js"></script>
```

---

## Setup og draw

Strukturen og oppsettet i p5.js

```html
<script>
  function setup() {
    createCanvas(500, 500);
    frameRate(10);
  }

  function draw() {
    background(0);
    fill(255);
  }
</script>
```

### Oppgave 1

Forklar koden over og prediker resultatet. Kopier kodesnuttene over i Visual Studio Code og kjør programmet. Stemte det?

---

## Globale konstanter og variabler

Over `setup-funksjonen` oppretter vi noen globale konstanter og variabler vi skal bruke og oppdatere i de ulike funksjonene våre senere i programmet.

```javascript
// Startposisjon til halen til slangen
const xStart = 0;
const yStart = 250;

// x -og y-koordinat til alle leddene i slangen
let x = [];
let y = [];

// Størelsen til leddene til slangen
const str = 10;

// Antall ledd slangen starter med
let lengde = 10;

// Retningen slangen starter med
let retning = "høyre";

// Koordinatet til frukta slangen skal spise
let xFrukt = 0;
let yFrukt = 0;
```

### Oppgave 2

Kopier koden over til script-tagen over setup-funksjonen.

---

## Slangen

`setup-funksjonen`

```javascript
for (let i = 0; i < lengde; i++) {
  x.push(xStart + i * str);
  y.push(yStart);
}
```

### Oppgave 3

Forklar hva koden over gjør. Kopier den til nederst i `setup-funksjonen` og bruk en `console.log` for å skrive ut resultatet.

---

## Tegne slangen

Vi bruker p5.js sin [`square()`](https://p5js.org/reference/#/p5/square) til å tegne leddene til slangen.

```javascript
for (let i = 0; i < lengde; i++) {
  square(x[i], y[i], str);
}
```

### Oppgave 4

Forklar koden over og prediker resultatet. Koper så koden neders i `draw-funksjonen`. Stemte det?

Lag en skisse som beskriver og viser sammenhengen mellom `x` -og `y`-array og tegning av leddene med `square`.

---

## Bevegelse

### Oppgave 5

Lag en skisse og prøv å tenk deg en måte du kan oppdatere `x`-koordinatene til leddene til slangen når retningen er `"høyre"`.

---

For å gjøre koden mer oversiktelig så lager vi en egen funksjon vi kaller `oppdaterKoordinater` som vi legger under `draw-funksjonen`

```javascript
function oppdaterKoordinater() {
  let xHode = x[lengde - 1];
  let yHode = y[lengde - 1];

  if (retning == "høyre") {
    x.push(xHode + str);
    y.push(yHode);
  }

  x.shift();
  y.shift();
}
```

### Oppgave 6

- Forklar hver linje med kode over.
- Legg til et kall på funksjonen `oppdaterKoordinater()` nederst i `draw`-funksjonen. Hva skjer? Forklar hvorfor.
- Lag tilsvarende if-setninger for når retning er `"venstre"`, `"opp"`, og `"ned"`.

---

## Piltaster

```javascript
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    retning = "venstre";
  } else if (keyCode === RIGHT_ARROW) {
    retning = "høyre";
  }
}
```

### Oppgave 7

- Forklar koden over.
- Kopier koden til nederst i script-tagen.
- Legg til valgsetninger for `"opp"` og `"ned"`.
- Kjør programmet, trykk på nettleseren og styr slangen med piltastene
- Hva skjer når du trykker på venstre pil når slangen går mot høyre? Kan du fikse det?

Tips:

```javascript
keyCode === LEFT_ARROW && retning != "høyre";
```

- Fiks opp i alle valg-setningene slik at du ikke kan snu slangen i motsatt retning.

Nå forsvinner slangen ut av rammen. Hvoran kan vi løse det?

En måte er å la slangen komme ut igjen på motsatt side.

```javascript
if (retning == "høyre") {
  if (xHode + str >= 500) {
    x.push(0);
  } else {
    x.push(xHode + str);
  }
  y.push(yHode);
}
```

### Oppgave 7

- Forklar endringene som er gjort med valgsetningen i `oppdaterKoordinater`.
- Gjør tilsvarende endringer for de andre valg-setningene i `oppdaterKoordinater`.

---

## Oppsumering

```javascript
const xStart = 0;
const yStart = 250;

// x -og y-koordinat til alle leddene i slangen
let x = [];
let y = [];

// Avstand mellom startposisjonen til hvert ledd
const str = 10;

// Antall ledd slangen starter med
let lengde = 10;

// Retningen slangen starter med
let retning = "høyre";

// Koordinatet til frukta slangen skal spise
let xFrukt = 0;
let yFrukt = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(10);

  for (let i = 0; i < lengde; i++) {
    x.push(xStart + i * str);
    y.push(yStart);
  }
}

function draw() {
  background(0);
  fill(255);

  for (let i = 0; i < lengde; i++) {
    square(x[i], y[i], str);
  }

  oppdaterKoordinater();
}

function oppdaterKoordinater() {
  let xHode = x[lengde - 1];
  let yHode = y[lengde - 1];

  if (retning == "høyre") {
    if (xHode + str >= 500) {
      x.push(0);
    } else {
      x.push(xHode + str);
    }
    y.push(yHode);
  }

  if (retning == "opp") {
    if (yHode - str <= 0) {
      y.push(500);
    } else {
      y.push(yHode - str);
    }
    x.push(xHode);
  }

  if (retning == "venstre") {
    if (xHode + str <= 0) {
      x.push(500);
    } else {
      x.push(xHode - str);
    }
    y.push(yHode);
  }

  if (retning == "ned") {
    if (yHode - str >= 500) {
      y.push(0);
    } else {
      y.push(yHode + str);
    }
    x.push(xHode);
  }

  x.shift();
  y.shift();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && retning != "høyre") {
    retning = "venstre";
  } else if (keyCode === RIGHT_ARROW && retning != "venstre") {
    retning = "høyre";
  } else if (keyCode === UP_ARROW && retning != "ned") {
    retning = "opp";
  } else if (keyCode === DOWN_ARROW && retning != "opp") {
    retning = "ned";
  }
}
```

## Oppgave 8 - Frukt

```javascript
  function nyFrukt() {
    xFrukt = tilfeldig x-koordinat
    yFrukt = tilfeldig y-koordinat
  }

```

- Legg til funksjonen nederst i script-tagen og fullfør koden.
- Leg til `nyFrukt();`kall i `setup` og

```javascript
fill(255, 0, 0);
square(xFrukt, yFrukt, str);
```

i draw

## Oppgave 9 - Spise frukt

```javascript
function spiseFrukt() {
  let xHode = x[x.length - 1];
  let yHode = y[y.length - 1];

  if (xHode === xFrukt && yHode === yFrukt) {
    lengde++;

    x.unshift(x[0]);
    y.unshift(y[0]);
    nyFrukt();
  }
}
```

- Forklar koden over.
- Legg til `spiseFrukt();`nederst i `draw`-funksjonen.

## Oppgave 10 - Kolisjon

```javascript
function kollisjon() {
  let xHode = x[x.length - 1];
  let yHode = y[y.length - 1];

  for (let i = 0; i < lengde - 1; i++) {
    if (x[i] === xHode && y[i] === yHode) {
      noLoop();
    }
  }
}
```

- Forklar koden over.
- Legg til `kollisjon();`nederst i `draw`-funksjonen.

## Oppsumering

```javascript
const xStart = 0;
const yStart = 250;

let x = [];
let y = [];

const str = 10;

let lengde = 10;
let retning = "høyre";

let xFrukt = 0;
let yFrukt = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(10);

  for (let i = 0; i < lengde; i++) {
    x.push(xStart + i * str);
    y.push(yStart);
  }

  nyFrukt();
}

function draw() {
  background(0);
  fill(255);
  for (let i = 0; i < lengde; i++) {
    square(x[i], y[i], str);
  }
  fill(255, 0, 0);
  square(xFrukt, yFrukt, str);

  oppdaterKoordinater();
  spiseFrukt();
  kollisjon();
}

function oppdaterKoordinater() {
  let xHode = x[lengde - 1];
  let yHode = y[lengde - 1];

  if (retning == "høyre") {
    if (xHode + str >= 500) {
      x.push(0);
    } else {
      x.push(xHode + str);
    }
    y.push(yHode);
  }

  if (retning == "opp") {
    if (yHode - str <= 0) {
      y.push(500);
    } else {
      y.push(yHode - str);
    }
    x.push(xHode);
  }

  if (retning == "venstre") {
    if (xHode + str <= 0) {
      x.push(500);
    } else {
      x.push(xHode - str);
    }
    y.push(yHode);
  }

  if (retning == "ned") {
    if (yHode - str >= 500) {
      y.push(0);
    } else {
      y.push(yHode + str);
    }
    x.push(xHode);
  }

  x.shift();
  y.shift();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && retning != "høyre") {
    retning = "venstre";
  } else if (keyCode === RIGHT_ARROW && retning != "venstre") {
    retning = "høyre";
  } else if (keyCode === UP_ARROW && retning != "ned") {
    retning = "opp";
  } else if (keyCode === DOWN_ARROW && retning != "opp") {
    retning = "ned";
  }
}

function nyFrukt() {
  xFrukt = Math.floor(Math.random() * 49) * str;
  yFrukt = Math.floor(Math.random() * 49) * str;
}

function spiseFrukt() {
  let xHode = x[x.length - 1];
  let yHode = y[y.length - 1];

  if (xHode === xFrukt && yHode === yFrukt) {
    lengde++;

    x.unshift(x[0]);
    y.unshift(y[0]);

    nyFrukt();
  }
}

function kollisjon() {
  let xHode = x[x.length - 1];
  let yHode = y[y.length - 1];

  for (let i = 0; i < lengde - 1; i++) {
    if (x[i] === xHode && y[i] === yHode) {
      noLoop();
    }
  }
}
```
