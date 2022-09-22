// delete array

/*

ada kalanya kita mau menghilangkan beberapa nilai pada array
kita dapat menggunakan method slice untuk menghilangkan nilainya
contoh


*/

const str = ['hello','world','!','love','code']
console.log(str.slice(0,2))

/*

akan tetapi kita juga dapat menggunakan method length untuk
menghapus niali pada array


*/

const arr = [...str]
arr.length = 2
console.log(arr)

/*

Teknik ini sebagian besar lebih disukai daripada metode lain untuk 
mengubah ukuran/menghapus elemen array dan merupakan salah satu praktik 
javascript terbaik yang diikuti sebagian besar developer

*/