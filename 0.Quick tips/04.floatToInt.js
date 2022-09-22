// mengubah bilangan float menjadi int

/*

sering kali kita menggunakan method Math.ceil(),Math.floor(), dan Math.round()
untuk membulatkan suatu bilangan

contoh

*/

const p = Math.round(5.5)
console.log(p)

/*

akan tetapi kita dapat membulatkan suatu bilangan dengan menggunakan tanda ~~
contoh 

*/

const a = ~~ (5.9)
console.log(a)

/*

akan tetapi tanda ~~ ini hanya dapat menghilangkan angka dibelakang koma
saja jadi secara tidak langsung tanda ~~ seperti kita menggunakan 
method Math.floor()

*/
