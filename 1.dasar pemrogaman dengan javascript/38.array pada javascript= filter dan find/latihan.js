/* array pada javasript: filter dan find

kita akan coba dua method yaitu filter dan find 
dua method ini digunakan untuk mencari element pada array 

tapi ati ati ada perbedaannya filter itu mengembalikan banyak nilai 
sedangkan find itu hanya mengembalikan satu nilai

kita lihat contohnya

1.filter 
filter itu fungsinya mencari element pada array dan mengembalikannya dalam bentuk array yang baru

*/

// var angka = [1, 5, 3, 6, 8, 10, 4, 2];
// angka2 = angka.filter(function(a){
//     return a === 5;
// })

// console.log(angka2);

/* saya punya variable angka2 yang isinya saya mau memfilter angka untuk mencari apakah ada nilai 5 didalamnya 

lalu didalamnnya saya bisa tulis functionnya untuk mencarinya 

kita kasih a sebagai parameternya 
return misalnya a === 5 

ada gak a === 5 ?
kalo ada nanti angka2 ini akan berisi nilai 5 tapi bentuknya array 

kita console.log angka2nya 

nah hasilnya 5 bentuknya array

kalo angkanya tidak ada misalkan 7 ya tidak ada 

*/

// var angka = [1, 5, 3, 6, 8, 10, 4, 2];
// angka2 = angka.filter(function(a){
//     return a === 7;
// })

// console.log(angka2);

/* hasilnya array kosong 


nah tapi dengan menggunakan filter kita bisa tulis begini 

cari nilai yang lebih besar dari 5 


*/

// var angka = [1, 5, 3, 6, 8, 10, 4, 2];
// angka2 = angka.filter(function(a){
//     return a > 5;
// })

// console.log(angka2.join(' - '));

/* maka dengan menggunakan filter kita bisa mencari 
ada gak didalam array angka, angka yang lebih besar dari 5 
ada ya 6 8 10

itu kalo menggunakan filter 


2.find

jika kalian menggunakan find 
nah kalo find dia hanya menemukan satu nilai saja 

jadi kalo saya tanya 
kembalikan nilai yang lebih besar dari 5 

maka dia akan mencari nilai yang pertama ditemukan saja 


*/

// var angka = [1, 5, 3, 6, 8, 10, 4, 2];
// angka2 = angka.find(function(a){
//     return a > 5;
// })

// console.log(angka2.join(' - '));

/* nah ini akan eror kenapa?

karena find ini tidak menghasilkan array tapi dia menghasilkan satu nilai makanya tidak bisa pakai join 

karena join itu untuk menggabungkan array 
kalo joinnya kita hapus

*/

// var angka = [1, 5, 3, 6, 8, 10, 4, 2];
// angka2 = angka.find(function(a){
//     return a > 5;
// })

// console.log(angka2);

/* jadi find itu dgunakan untuk menemukan satu nilai sedangkan filter itu kita bisa mencari banyak nilai 

baik jadi mungkin itu contoh contoh method yang digunakan pada array dijavascript ya 

sebetulnya masih banyak lagi method methodnya kalian bisa check saja diw3school 

ya saran saya pahami dulu arti dari tiap tiap methodnya karena itu akan sangat memudahkan kalian untuk membayangkan fungsinya apa 


jadi cukup sampai disini dulu materinya mengenai method pada array ini 

mudah mudahan kalian paham 

sampai disini dulu materinya 
kita ketemu lagi dimateri berikutnya 

dan satu lagi jangan lupa titik koma ; */
