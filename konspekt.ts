// KONSPEKT

// ### 1. TypeScript
// TypeScript - bu JavaScript uchun statik ma'lumot turlarini qo'shib beruvchi ochiq manbali til. Bu JavaScript'ga qo'shiladi va uni ishlab chiqarish jarayonida qat'iyroq sintaksis va ma'lumot turlarini tekshirish imkoniyatini beradi. Bu ishlab chiqish jarayonida xatolarni oldini olishga yordam beradi va kodni boshqarishni osonlashtiradi.

// ### 2. TypeScript Turlari (Types)
// TypeScript asosiy JavaScript turlariga qo'shimcha ravishda quyidagi maxsus turlarni taqdim etadi:
// - any: Har qanday turdagi qiymatlarni qabul qiladi.
// - unknown: `any`ga o'xshash, lekin xavfsizroq, chunki uni ishlatishdan oldin turini aniqlash kerak.
// - `never`: Hech qachon qiymat qaytarmaydigan funksiyalar uchun ishlatiladi.
// - enum: Belgilangan cheklangan qiymatlar to'plamini aniqlash uchun ishlatiladi.
// - tuple: Elementlarining soni va turlari oldindan belgilangan massiv.

// ### 3. Type Inference
// TypeScript o'zgaruvchilarga va ifodalarga avtomatik ravishda tur belgilay oladi. Masalan, let x = 3; deb yozilganda, TypeScript x o'zgaruvchisini avtomatik ravishda number deb belgilaydi.

// ### 4. Type Compatibility
// TypeScript turlarining mosligi ularning tuzilishi orqali aniqlanadi (structural typing). Bu degani ikki tur bir-biriga mos keladi agar ular bir xil xususiyatlarga ega bo'lsa.

// ### 5. Combining Types
// TypeScript ikki yoki undan ortiq turlarni birlashtirish imkoniyatini beradi:
// - Union Type: | operatori yordamida yaratiladi, masalan, number | string.
// - Intersection Type: & operatori yordamida yaratiladi, masalan, User & Serializable.

// ### 6. TypeScript Functions
// TypeScript funksiyalari parametrlar va qaytish qiymatlarining turlarini aniqlash imkoniyatini beradi. Bu funksiyalarni yanada aniq va xavfsiz qiladi.

// ### 7. TypeScript Interfaces and Classes
// - Interfaces: Obyektlarning shaklini (structure) belgilash uchun ishlatiladi. Interface yordamida biz turli xil obyektlar uchun qat'iy shartlar o'rnatamiz.
// - Classes: ES6 sinflari bilan bir xil, lekin TypeScript qo'shimcha ravishda public, private va protected kirish modifikatorlarini qo'llab-quvvatlaydi.

// 1. Turlar (Types):
//    - Primitive Types: string, number, boolean, null, undefined, symbol, va bigint.
//    - Object Types: object, array, tuple, enum, va any.
//    - Advanced Types: union, intersection, generic, va utility types.

// 2. Type Inference:
//    TypeScript o'zgaruvchilarning turini kod yozilishi jarayonida avtomatik aniqlay oladi. Masalan, let age = 25; deb yozilganda, TypeScript age o'zgaruvchisini avtomatik ravishda number turiga kiritadi.

// 3. Type Compatibility:
//    TypeScript o'zgaruvchilar va funksiyalar o'rtasidagi moslikni ularning strukturasi orqali aniqlaydi. Agar ikkala tur bir-biriga o'xshash xususiyatlarga ega bo'lsa, ular mos hisoblanadi.

// 4. Union and Intersection Types:
//    - Union Type (`|`): Ikkita yoki undan ko'p turdan birini qabul qilish imkonini beradi. Masalan, string | number.
//    - Intersection Type (`&`): Ikkita yoki undan ko'p turlarning barcha xususiyatlarini birlashtiradi. Masalan, User & Serializable.

// 5. Functions:
//    TypeScript funksiyalari aniq tur bilan parametrlar va qaytish qiymatlarini belgilash imkonini beradi. Bu dasturni yanada aniq va ishonchli qiladi.

// 6. Interfaces and Classes:
//    - Interfaces: Ma'lum bir obyekt tuzilishini belgilash uchun ishlatiladi. Interfeyslar turli xil obyektlar uchun qat'iy struktura o'rnatadi.
//    - Classes: OOP (Object-Oriented Programming) yondashuvini qo'llab-quvvatlaydi. TypeScript klasslari public, private va protected kabi kirish modifikatorlaridan foydalanadi.
