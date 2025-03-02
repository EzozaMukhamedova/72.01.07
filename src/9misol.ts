// // 1. Obyekt uchun Type yaratish

// type Kitob = {
//   ism: string;
//   muallif: string;
//   sahifa: number;
// };

// const kitobim: Kitob = {
//   ism: "1984",
//   muallif: "George Orwell",
//   sahifa: 328,
// };
// console.log(kitobim);

// // 2. Interfeys yaratish va undan foydalanish

// interface User {
//     name: string;
//     email: string;
//     password?: string;
//   }

//   const user: User = {
//     name: "Ezoza Mikan",
//     email: "201002e@.uz",
//     password: "s3cr3t"
//   };

//   console.log(user);

// // 3. Funksiya uchun Type yozish

// function add(a: number, b: number): number {
//     return a + b;
//   }

//   console.log(add(5, 3));

// // 4. Generic Funksiya
// function massiv<T>(value: T): T[] {
//   return [value];
// }

// console.log(massiv(5));
// console.log(massiv("hello"));

// // 5. Array bilan ishlash
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterJuftSonlar(nums: number[]): number[] {
//   return nums.filter((num) => num % 2 === 0);
// }

// console.log(filterJuftSonlar(numbers));

// // 6. Type bilan ishlash

// type CarType = "sedan" | "suv" | "truck";

// const myCar: CarType = "suv";
// console.log(myCar);

// // 7. Tuple bilan ishlash

// type StudentInfo = [string, number];

// const student: StudentInfo = ["Ezoza", 20];
// console.log(student);

// 8. Enum bilan ishlash

// enum HaftaKunlari {
//     Getsuyoubi = "Dushanba",
//     Kayoubi = "Seshanba",
//     Suiyoubi = "Chorshanba",
//     Mokuoubi = "Payshanba",
//     Kinyoubi = "Juma",
//     Doyoubi = "Shanba",
//     Nichiyoubi = "Yakshanba"
//   }

//   const bugun: HaftaKunlari = HaftaKunlari.Kayoubi;
//   console.log(bugun);

// 9. Type Merging (birlashtirish)

// type ShaxsiyInfo = {
//     name: string;
//     age: number;
//   };

//   type ContactInfo = {
//     email: string;
//     phone: string;
//   };

//   type FullInfo = ShaxsiyInfo & ContactInfo;

//   const userInfo: FullInfo = {
//     name: "Ezoza",
//     age: 20,
//     email: "20002e@.com",
//     phone: "88895699999"
//   };

//   console.log(userInfo);
