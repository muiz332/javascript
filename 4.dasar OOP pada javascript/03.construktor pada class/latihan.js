// constructor

/*

nah sekarang kita akan membahas bagaimana cara membuat 
properti didalam class

sama seperti didalam construcktor function
didalam class kita juga bisa menambahkan properti 

karena hasil akhirnya adalah sebuah object 
jadi menambahkan properti didalam class bisa juga dilakukan 
saat instanciasi objectnya 



*/

// menambahkan dengan instancsiasi object

class Person{

}

const muiz = new Person
muiz.nama = 'muiz'
console.log(muiz.nama)

/*

kita juga bisa melakukan seperti itu 
tapi akan sangat jarang digunakan


nah ketika kita ingin membuat properti didalam class
kita harus menggunakan method yang namanya constructor

sama seperti constructor function dia menerima argument yang
dikirimakn

*/

class Person1{
    constructor(nama,umur){
        this.nama = nama
        this.umur = umur
    }
}

const husain = new Person1('husain',12)
console.log(husain.nama)
console.log(husain.umur)

const hasan = new Person1('hasan',21)
console.log(hasan.nama)
console.log(hasan.umur)

/*

kalo kita jakankan 
akan tampil ya 

jadi seperti itu cara membuat properti didalam class
mudah mudahan kalian paham







-----------------------------------

source programmer zaman now mysql

-----------------


*/