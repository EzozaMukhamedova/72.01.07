// IF Misollari

// #2.
// function raqam(num: number): void {
//   if (num > 0) {
//     console.log(num + 1);
//   } else {
//     console.log(num - 2);
//   }
// }

// raqam(5);
// raqam(-1);
// raqam(0);

// #3
// function raqamlar(num: number): number {
//   if (num > 0) {
//     return num + 1;
//   } else if (num < 0) {
//     return num - 2;
//   } else {
//     return 10;
//   }
// }
// console.log(raqamlar(5));
// console.log(raqamlar(-3));
// console.log(raqamlar(0));

// #4.
// function musbatSon(a: number, b: number, c: number): number {
//   let count = 0;
//   if (a > 0) count++;
//   if (b > 0) count++;
//   if (c > 0) count++;
//   return count;
// }

// console.log(musbatSon(5, -1, 3));
// console.log(musbatSon(-3, 1, 2));
// console.log(musbatSon(0, -2, -3));

// #5.
// function countSon(
//   a: number,
//   b: number,
//   c: number
// ): { musbat: number; manfiy: number } {
//   let musbat = 0,
//     manfiy = 0;
//   if (a > 0) musbat++;
//   else if (a < 0) manfiy++;
//   if (b > 0) musbat++;
//   else if (b < 0) manfiy++;
//   if (c > 0) musbat++;
//   else if (c < 0) manfiy++;
//   return { musbat, manfiy };
// }
// console.log(countSon(8, 9, -3));

// #6.
// function Max(a: number, b: number): number {
//   return Math.max(a, b);
// }
// console.log(Max(8, 3));

// #7.
// function MinIndex(a: number, b: number): number {
//   return a < b ? 1 : 2;
// }
// console.log(MinIndex(8, 3));

// #8.
// function saralash(a: number, b: number): number[] {
//   if (a > b) {
//     return [a, b];
//   } else {
//     return [b, a];
//   }
// }
// console.log(saralash(1, 3));

// #9.
// function Qiymat(a: number, b: number): { A: number; B: number } {
//   if (a >= b) {
//     [a, b] = [b - 1, a + 1];
//   }
//   return { A: a, B: b };
// }
// console.log(Qiymat(3, 3));

// #10.
// function yigindiYokiNol(a: number, b: number): number {
//   return a !== b ? a + b : 0;
// }
// console.log(yigindiYokiNol(6, 6));
// Ikkinchi usul
// function yigindiYokiNol(a: number, b: number): [number, number] {
//   if (a !== b) {
//     let yigindi = a + b;
//     a = yigindi;
//     b = yigindi;
//     return [a, b];
//   } else {
//     return [0, 0];
//   }
// }

// console.log(yigindiYokiNol(5, 3));
// console.log(yigindiYokiNol(4, 4));

// #11.
// function maksimalYokiNol(a: number, b: number): [number, number] {
//   if (a === b) {
//     return [0, 0];
//   } else {
//     const maksimalQiymat = Math.max(a, b);
//     return [maksimalQiymat, maksimalQiymat];
//   }
// }
// console.log(maksimalYokiNol(5, 10));
// console.log(maksimalYokiNol(7, 7));

// #12.
// function engKichikniTop(a: number, b: number, c: number): number {
//   return Math.min(a, b, c);
// }
// console.log(engKichikniTop(7, 8, 9));

// #13.
// function ortachaSonniTop(a: number, b: number, c: number): number {
//   const saralangan = [a, b, c].sort((x, y) => x - y);
//   return saralangan[1];
// }
// console.log(ortachaSonniTop(10, 5, 9));

// #14.
// function sonlarniSarala(a: number, b: number, c: number): void {
//   const saralangan = [a, b, c].sort((x, y) => x - y);
//   console.log(`Kichik: ${saralangan[0]}, Katta: ${saralangan[2]}`);
// }
// console.log(sonlarniSarala(8, 3, 5));

// #15.
// function engKattaYigindiJuftlik(a: number, b: number, c: number): void {
//   const juftliklar = [
//     { sum: a + b, juftlik: [a, b] },
//     { sum: a + c, juftlik: [a, c] },
//     { sum: b + c, juftlik: [b, c] },
//   ];
//   const engKattaYigindiJuftlik = juftliklar.reduce(
//     (max, hozirgi) => (hozirgi.sum > max.sum ? hozirgi : max),
//     juftliklar[0]
//   );
//   console.log(
//     `Eng katta yigindilar: ${engKattaYigindiJuftlik.juftlik[0]}, ${engKattaYigindiJuftlik.juftlik[1]}`
//   );
// }
// console.log(engKattaYigindiJuftlik(8, 7, 5));
