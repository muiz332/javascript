// menggabungkan array

/*

jika kalian ingin menggabungkan array kalian bisa menggunakan 
method concate()

contoh

*/

const angka = [1,2,3,4,5]
const angka2 = [6,7,8,9]

const hasil = angka.concat(angka2)
console.log(hasil)

/*

akan tetapi cara ini hanya berlalu untuk array yang jumlahnya kecil
jadi logic dari concat ini adalah membuat array baru hasil gabungkan
dari dua array

untuk array dalam jumlah besar kita menggunakan method push.apply

*/


var array1 = [1, 2, 3]; 
var array2 = [4, 5, 6]; 
array1.push.apply(array1, array2)
console.log(array1)

/*

jadi kita tidak perlu membuat array lagi dari hasil penggabungan
tapi kita tambahkan array yang kedua kedalam array yang pertama

*/