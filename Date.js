const tarix = new Date()

let il = tarix.getFullYear(),
    ay = tarix.getMonth(),
    gun = tarix.getDate(),
    saat = tarix.getHours(),
    deqiqe = tarix.getMinutes(),
    saniye = tarix.getSeconds(),
    günAd = tarix.getDay();

console.log(tarix); 

// hal-hazırki tarixi elektronik əşyanın saat diliminə görə göstərir: "Thu Nov 16 2023 15:40:50 GMT+0400 (Azerbaijan Standard Time)"

let aylar = [
    'Yanvar', 'Fevral', 'Mart',
    'Aprel', 'May', 'İyun',
    'İyul', 'Avqust', 'Sentyabr',
    'Oktyabr', 'Noyabr', 'Dekabr'
]

// Ay təqvimi

let gunler = [
    'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 
    'Cümə axşamı', 'Cümə', 'Şənbə', 'Bazar' 
]

// Gün təqvimi

let təqvim = `${gun} ${aylar[ay]}, ${il}, ${gunler[günAd]}, ${saat}:${deqiqe}:${saniye}`;

console.log(təqvim);

//Hal hazırki təqvimə görə bizə bu formatda ekrana yazdıracaq : "16 Noyabr, 2023, Cümə, 15:40:11"


//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-Tapşırıq!-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

//Sual №1: Öyrəndiklərimizdən istifadə edərək saat:dəqiqə, gün/ay/il olacaq şəkildə yazın. (15:48, 16/11/2023)


//#Cavabını öyrənmək üçün `Cavablar` qovluğunda öz adını daşıyan "txt" formatındaki səhifəyə keçid edə bilərsiz.