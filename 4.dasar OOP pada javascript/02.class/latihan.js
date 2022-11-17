// class

/*

nah sekarang kita akan belajar mengenai class

sejak ecmaScript versi 6 diperkenalkan kata kunci baru yang namanya class
ini merupakan kata kunci yang digunakan untuk membuat class pada javascript


jadi kan sebelumnya kita pakai construktor function
itu javascript versi lama 

nah javascript versi baru itu menggunakan class 
dengan menggunakan keyword class kita tidak perlu lagi menggunakan construktor function 


nah untuk membuat class seperti ini 

class Person{

}


nah jadi kita panggil keywordnya class
kemudian kita kasih namanya dengan awalan huruf besar ya

nah kemudian kita instansiasikan objectnya
atau objectnya kita buat caranya sama saja ya 

const muiz = new Person

jadi nanti objectnya akan masuk kedalam variable muiz

nah sekarang kita akan coba

*/

// class Person{

// }


// const muiz = new Person
// console.info(muiz)

/*

nah kalo kita jalankan 
sebenarnya dia ada prototypenya juga 

jadi sama saja ketika kalian membuat class
kalian bisa menggunakan prototype

jadi kalian bisa tuliskan seperti ini juga


*/

class Person{

}
Person.prototype.sayHalo = function(nama){
    console.log('hello ' + nama)
}

const muiz = new Person
muiz.sayHalo('muiz')
console.info(muiz)

/*

jadi kalo kita buka diconsole lewat browser
itu akan kelihatan 

didalam prototypenya kita bisa mengisikan sebuah method

jadi sebenarnya dibelakang layar pada class
itu prototype yang berjalan

jadi sebenarnya tidak ada bedanya cuma ini adalah cara penulisan yang
baru dan lebih rapi

mudah mudahan kalian paham













-----------------------------------

source programmer zaman now javascript OOP

-----------------


*/