// class inheritance

/*

nah sekarang kita akan bahas mengenai class inheritance

sebelumnya kita sudah tahu bahwa prototype itu mendukung pewarisan 
walaupun memang agak sedikit tricky cara pembuatannya

untungnya ini diperbaiki diES6 pada fitur class
sebuah class bisa melakukan pewarisan dari class lainnya dengan cara
kita menggunakan keyword extends

nah didalam javascript class inheritance sama seperti 
prototype inheritance 

jadi hanya bisa memiliki satu parent class

kita coba

misalnya saya punya class yang namanya 
Method 

dan memiliki class lain yang namanya Person

*/


class Method{
    constructor(nama){
        this.nama = nama
    }
    sayHalo(){
        console.log('selamat datang')
    }
    perkenalan(){
        console.log(`hallo nama saya ${this.nama}`)
    }
}

class Person extends Method{
    salam(){
        console.log(`hai ${this.nama}`)
    }
}


const muiz = new Person
muiz.nama = 'muiz'
muiz.sayHalo()
muiz.perkenalan()
muiz.salam()

/*

jadi tinggal kita menuliskan keyword extends
maka dia akan mengambil method yang ada pada object 
lain

akan tetapi beda lagi ceritanya kalo misalkan
class yang diwariskan atau class yang memiliki keyword extends
itu memiliki construkctor

maka dia akan eror
untuk sementara saya buat objectnya diluar class 
seperti itu 

nah bagiamana cara mengatasi hal tersebut?

*/