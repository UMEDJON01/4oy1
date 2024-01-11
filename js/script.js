//  1.  kuning hajmini topish

//  let number = +prompt("kubning tomonini kiriting");

// let result = number * number * number;

// console.log(result);

// 2.  berilgan sonning kubini topuvchi algoritm

// let son = +prompt("son kiriting");

// let result = Math.pow(son, 3);

// console.log(result);

// 3.   Ikkita sonning yig'indisining kvadratini topuvchi algoritm

// let firstNumber = +prompt("birinchi sonni kiriting");

// let secondNumber = +prompt("ikkinchi sonni kiriting");

// let result = (firstNumber + secondNumber) * 2;

// console.log(result);

// 4.  Ixtiyoriy sonning o'nlar xonasidagi sonni topuvchi algaritm

// let son = prompt("Ixtiyoriy son kiriting:");
// son = parseInt(son);

// let onlar = Math.floor((son % 100) / 10);

// console.log("O'nlar xonasidagi son: " + onlar);

// 5.  2- xonali sonnng eaqamlar yigindisini topuvchi algoritm

// let number = +prompt("Ikki xonali son kiriting ");
// const birlik = Math.floor(number / 10);
// const unlik = number % 10;

// let result = unlik + birlik;
// console.log("Raqamlar Yig'indisi: " + result);

// 6.    3-xonali sonning yuzlar xonasidagi raqamni topuvchi algoritm

// let number = +prompt("uchxonali son kiriting...");

// let result = Math.floor(number / 100);

// console.log("yuzliklar xonasidagi son :" + result);

//  8.  Berilgan sonda 10 ta oldingi sonning kubini topuvchi algoritm

// let son = +prompt("son kiriting");

// let result = Math.pow(son - 10, 3);

// console.log(result);

// // Parallilepipedning to'la sirtini va hajmini topuvchi funksiya
// function parallilepipedHajmiVaSirti(balandlik, asos1, asos2) {
//   // Parallilepipedning to'la sirti (osa 1 va osa 2 ni ko'paytirish)
//   let tolaSirt = 2 * (asos1 + asos2);

//   // Parallilepipedning hajmi (balandlikni osa 1 va osa 2 bilan ko'paytirib olganidan so'ng)
//   let hajm = balandlik * asos1 * asos2;

//   // Natijani qaytarish
//   return { tolaSirt: tolaSirt, hajm: hajm };
// }

// // Foydalanuvchidan malumotlarni olish
// let balandlik = parseFloat(prompt("Parallilepipedning balandligini kiriting:"));
// let asos1 = parseFloat(prompt("Parallilepipedning birinchi asosini kiriting:"));
// let asos2 = parseFloat(prompt("Parallilepipedning ikkinchi asosini kiriting:"));

// // Natijani chiqarish
// let natija = parallilepipedHajmiVaSirti(balandlik, asos1, asos2);
// console.log("Parallilepipedning to'la sirti: " + natija.tolaSirt);
// console.log("Parallilepipedning hajmi: " + natija.hajm);
