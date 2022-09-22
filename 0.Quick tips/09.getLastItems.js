// mengambil nilai dari belakang

/*

nah kita bisa mengambil nilai dari belakang dalam sebuah 
array 

contoh 

*/

const arr = [1,2,3,4,5,6,7]
const hasil = arr.slice(5,8)
console.log(hasil)

/*

akan tetapi kita dapat melakukan seperti ini 

*/

const arr2 = [1,2,3,4,5,6,7]
const result = arr2.slice(-2)
console.log(result)

/*

kita dapat menggunakan nilai negatif untuk mengambil nilai 2 dari belakang
didalam array

*/