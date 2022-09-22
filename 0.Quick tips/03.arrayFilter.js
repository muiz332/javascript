// menggunakan method filter

/*

jadi kita dapat memfilter sebuah array sesuai dengan kondisi yang
kita berikan

contohnya kita dapat memfilter apakah itu nilai ganjil atau
genap


*/

const arr = [1,2,3,4,5,6,7,8,9]

const hasil = arr.filter(n => n % 2 === 0)
console.log(hasil)

/*

akan tetapi kita dapat memfilter suatu nilai didalam array tanpa
menuliskan suatu kondisi 

jadi kita dapat memfilter type data null tanpa menggunakan
suatu kondisi tertentu

*/

const str =  ["hi","ihaveboyfriend",null, null, "goodbye"]
const result = str.filter(s => s)
console.log(result)


// jika kita jalankan maka nilai nullnya akan hilang
