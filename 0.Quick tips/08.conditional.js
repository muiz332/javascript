// tips pengkondisian

/*

jika kalian hanya mengecheck menggunakan tanda === dalam beberapa 
kondisi

maka sebaiknya kalian menggunakan switch dari pada if dan else


*/


/*

shortcut conditional


jika kalian memiliki satu kondisi seperti ini


*/


const a = 'p'

if(a === 'p'){
    console.log('ya')
}


/*

kalian bisa menyingkatnya menjadi seperti ini 

*/

const p = 1
console.log(p === 1 && 'ya')

/*

jadi menggunakan operator logika AND ya

*/


// atau jika kalian mempunyai kondisi seperti ini


const b = null

if(b){
    console.log('iyaaa')
}else{
    console.log('apa')
}

// kalian bisa singkat seperti ini

const d = null

console.log(d || 'iya')


/*

ini singkatan dengan operator logika OR dapat kita gunakan
ketika apakah sebuah variable itu ada nilainya atau tidak

kalo tidak ada yang akan dikembalikan adalah nilai yang disebelah kanan 
dan jika ada yang dikembalikan nilai yang sebelah kiri

*/