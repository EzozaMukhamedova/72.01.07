// FOR MISOLLARi

// For1.
// function KniChiqarish(k: number, n: number): void {
//   for (let i = 0; i < n; i++) {
//     console.log(k);
//   }
// }
// console.log(KniChiqarish(8, 3));

// For2
// function Hisob(a: number, b: number): void {
//   let count = 0;
//   if (a > b) {
//     [a, b] = [b, a];
//   }
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;
//   }
//   console.log(`Jami sonlar: ${count}`);
// }

// Hisob(8, 3);

//   For3
// function kamayishTartibida(a: number, b: number): void {
//   let count = 0;
//   if (a > b) {
//     [a, b] = [b, a];
//   }
//   for (let i = b - 1; i > a; i--) {
//     console.log(i);
//     count++;
//   }
//   console.log(`Jami sonlar: ${count}`);
// }

// kamayishTartibida(9, 3);

//   For4.
// function narx(pricePerKg: number): void {
//   for (let kg = 1; kg <= 10; kg++) {
//     console.log(`${kg} kg konfet narxi: ${pricePerKg * kg}`);
//   }
// }
// narx(5);

//   For5
// function narx(pricePerKg: number): void {
//   for (let kg = 0.1; kg <= 1; kg += 0.1) {
//     console.log(
//       `${kg.toFixed(1)} kg konfet narxi: ${(pricePerKg * kg).toFixed(2)}`
//     );
//   }
// }
// console.log(narx(6));

//   For6
// function narx(pricePerKg: number): void {
//   for (let kg = 1.2; kg <= 2; kg += 0.2) {
//     console.log(
//       `${kg.toFixed(1)} kg konfet narxi: ${(pricePerKg * kg).toFixed(2)}`
//     );
//   }
// }
// console.log(narx(2));

// For7
// function ButunYeg(a: number, b: number): void {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   console.log(`Summa: ${sum}`);
// }
// console.log(ButunYeg(1, 6));

// For8
// function ButunKopaytir(a: number, b: number): void {
//   let product = 1;
//   for (let i = a; i <= b; i++) {
//     product *= i;
//   }
//   console.log(`Ko'paytma: ${product}`);
// }
// console.log(ButunKopaytir(1, 5));

// For9
// function KvadratYeg(a: number, b: number): void {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i * i;
//   }
//   console.log(`Kvadratlar yig'indisi: ${sum}`);
// }
// console.log(KvadratYeg(1, 6));

// For10
// function yegindi(n: number): void {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
//   }
//   console.log(`yig'indi: ${sum}`);
// }
// yegindi(2);

// // For11
// function yegindin(n: number): void {
//   let sum = 0;
//   for (let i = n; i <= 2 * n; i++) {
//     sum += i * i;
//   }
//   console.log(`Kvadratlar yig'indisi (n dan 2n gacha): ${sum}`);
// }
// yegindin(3);

// // For12
// function kopaytmaHisob(n: number): void {
//   let product = 1;
//   for (let i = 1.1; i <= n; i += 0.1) {
//     product *= i;
//   }
//   console.log(`Faktorial ko'paytma: ${product.toFixed(4)}`);
// }
// kopaytmaHisob(2);
