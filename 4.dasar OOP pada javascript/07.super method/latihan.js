// super method

/*

nah sekarang kita akan bahas mengenai super method

selain digunakan untuk memanggil constructor milik parent classnya 
keyword super juga bisa kita gunakan untuk mengakses method parent class

jadi misalkan kalian mau mengakses method yang ada diparentnya
dari childnya itu kalian bisa menggunakan keyword super

nah caranya kita bisa menggunakan super.nama method

dengan kata lain super sebenarnya adalah referensi ke parent prototype 
mirip seperti __proto__

kita akan coba


*/

class Siswa{
    constructor(nama){
        this.nama = nama
    }

    sapa(){
        console.log('hai')
    }
}

class Identitas extends Siswa{
    constructor(nama){
        super(nama)
    }

    salam(){
        /*
        
        jadi didalam method salam ini misalnya saya ingin mengakses method sapa
        kita tinggal tuliskan super.sapa()
        
        */


        super.sapa()

        // tapi sebenarnya dia mengakses prototypenya yang ada diparentya
        // seperti ini
        Siswa.prototype.sapa()
        console.log(`nama saya ${this.nama}`)
    }
}


const muiz = new Identitas('muiz')
muiz.salam()

/*

jadi kalo saya jalankan seperti ini 
hai
hai
nama saya muiz


jadi untuk mempermudah kalian bisa menggunakan method super ini
jadi dia akan mengecheck apakah didalam objectnya itu adalah method salam? 

ada ternyata didalam protonya 
dialam method salam dia memanggil prototyp punyanya si class Siswa

jadi seperti ini tentang super method dijavascript
mudah mudahan kalian paham








-----------------------------------

source programmer zaman now mysql

-----------------


*/