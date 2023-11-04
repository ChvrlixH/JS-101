//------------------'Math.round'---------------------- 
let PI = 3.14
console.log(Math.round(PI));
//PI = 3

let number = 2.5415
console.log(Math.round(number));
//number = 3

//Əgər 0.5-dən aşağıdırsa "."-dən əvvəlki rəqəmə yuvarlaqlaşdıracaq. Əgər 0.5 və ya 0.5-dən yuxarıdırsa "."-dən əvvəldə yerləşən bir sonraki rəqəmə yuvarlaqlaşdıracaq. 


//------------------'Math.ceil'---------------------- 
console.log(Math.ceil(PI));
//4

console.log(Math.ceil(number));
//3

//"."-dən sonraki rəqəmin dəyəri 0-dan böyükdürsə, "."-dən əvvəlki rəqəm özünnən bir sonraki rəqəmə yuvarlaqlaşdıracaq.


//------------------'Math.floor'---------------------- 
console.log(Math.floor(PI));
//3

console.log(Math.floor(number));
//2

//"."-dən sonraki rəqəmin dəyəri nə olursa olsun "."-dən rəqəmin özünə yuvarlaqlaşdıracaq.


//------------------'Math.min & Math.max'----------------------
let numArray = [-5, 5, 1, 0.4, 2, -10, 13]
console.log(Math.min(...numArray));
//-10

console.log(Math.max(...numArray));
//13

// 'Math.min' olduğu zaman ən düşük dəyəri döndərəcək. 'Math.max' olduğu zaman isə ən böyük dəyəri döndərəcək.
//* NOT: "..." bizə arrayi döndərir(yəni `numArray` daxilindəki dəyərləri). Əgər "..."-dən istifadə etməsək bizə "NaN" döndərəcək. *


//------------------'Math.random'----------------------
let numRandom = Math.random();
console.log(numRandom);
//0 <= numRandom < 1

//Hər səfərində 0 ilə 0.999999... arasında fərqli kombinasiyalı rəqəm yaradacaq.


//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-Tapşırıq!-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

//Sual №1: Yazdıqlarımızla 0 ilə 10 arası rəqəm yaratmalıyıq(0 və 10-da daxil olmaqla). Hər səfərində fərqli kombinasiyalı olmalıdır.


//#Cavabını öyrənmək üçün `Cavablar` qovluğunda öz adını daşıyan "txt" formatındaki səhifəyə keçid edə bilərsiz.

