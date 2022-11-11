// method pada class

/*

nah sekarang kita akan bahas method pada object class

membuat method pada class sebenarnya bisa dilakukan dengan cara seperti menambahkan
method diconsruktor function 

tetapi hal tersebut sebenarnya setiap kita kita instansiasi atau membuat objectnya
maka method tersebut akan ikut kebawa setiap kita instansiasi objectnya atau nempel pada objectnya

nah kita bisa menggunakan object prototype untuk membuat method
supaya ketika kita instansiasi objectnya maka dia tidak ikut terbawa

akan tetapi ketika kita penggil barulah dia akan terpanggil pada protorypenya

didalam class ada cara mudah untuk menambahkan method secara otomatis 
yang nanti akan menambahkannya diprototype

lalu bagaimana caranya?

jadi kita tulis seperti ini 

class Person{
    constructor(nama){
        this.nama = nama
    }

    sayHallo(){

    }

}

kita coba

*/

class Person{
    constructor(nama){
        this.nama = nama
    }

    sayHallo(){
        console.log(`Hai nama saya ${this.nama}`)
    }

    salam(status){
        console.log(`jalani hari harimu dengan ${status} ${this.nama}`)
    }
}

// kita buat objectnya

const muiz = new Person('muiz')
muiz.sayHallo()
muiz.salam('coding')

console.log(muiz)

/*

kalo saya jalankan maka akan tampil
Hai nama saya muiz
jalani hari harimu dengan coding muiz

jadi methodnya akan masuk kedalam prototypenya ya
dengan menggunakan class kita lebih mudah untuk 
membuat constructor object

mudah mudahan kalian paham






-----------------------------------

source programmer zaman now mysql

-----------------


*/