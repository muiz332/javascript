// super construcktor

/*

nah sekarang kita akan bahas menganai super construkctor

class inheritance sifatnya seperti prototype inheritance 

nah bagimana dengan construcktor inheritance
sebenarnya construcktor inheritance hanyalah melakukan exsekusi 
construcktor lain dengan tujuan agar properti dicontructor lainnya 
bisa ditambahkan ke instance objectnya

jadi mirip dengan constructor inheritance pada function

nah pada class juga sama
saat kalian bikin menggunakan class ini juga sama

cuma yang membedakan ketika kalian menggunakan class
dianggapnya menjadi wajib untuk memanggil construcktor milik
parent classnya

pada class untuk memanggil construcktor pada class lain
itu kita menggunakan method yang namanya super() didalam constructor
yang akan mewarisi

jika dichild class kita kita membuat constructor maka kita wajib 
memanggil parent constructor walaupun diparent tidak ada constructor

kita coba

*/

class Siswa{
    constructor(umur){
        this.umur = umur
    }
    sayHalo(){
        console.log(`hallo ${this.nama}, ${this.umur}`)
    }
}


class Identitas extends Siswa{
    salam(){
        console.log(`umur saya ${this.umur} tahun`)
    }
}

const muiz = new Identitas(18)
muiz.salam()

/*

nah misalnya saya membuat class Siswa yang memiliki construcktor 
dan class identitas yang tidak memiliki constructor

sekarang apa yang terjadi?
ketika kita menggunakan extend itu artinya kita akan mengambil 
semua method yang ada pada parent classnya

construkctor ini juga termasuk method
makanya didalam class identitas akan mewarisi contructor dari class
siswa

kalo saya jalankan 
tanpil ya 18 

karena didalam method salam saya tulis
this.umur

padahal didalam class identitas tidak ada constructor
jadi seperti itu 

sekarang misalkan didalam class Siswa itu tidak ada constructor
dan didalam identitas itu ada apa yang terjadi

*/

class Siswa1{
    sayHalo(){
        console.log(`hallo ${this.nama}, ${this.umur}`)
    }
}


class Identitas1 extends Siswa1{
    constructor(umur){
        super()
        this.umur = umur
    }
    salam(){
        console.log(`umur saya ${this.umur} tahun`)
    }
}

const muiz1 = new Identitas1(20)
muiz1.salam()

/*

ketika diclass childnya itu membuat constructor
akan tetapi didalam class parentya itu tidak memiliki constructor

maka kita harus memanggil parent constructornya 
meskipun parent constructornya tidak ada

dengan cara menuliskan keyword super()
pada childnya didalam constructornya

nah sekarang bagiamana jika kedua class tersebut
memiliki constructor ? ya kita tinggal menambahkan super()
pada class childnya

sekarang pertanyaannya bagaimana jika kita ingin mewasisi
atau lebih seperti mengcopy properti yang aad pada constructor lain?


*/


class Siswa2{
    constructor(umur,jurusan){
        this.umur = umur
        this.jurusan = jurusan
    }
    sayHalo(){
        console.log(`hallo ${this.nama}, ${this.umur}`)
    }
}

// nah saya ingin mengcopy properti yang ada didalam Siswa2 ini

class Identitas2 extends Siswa2{
    constructor(nama,umur,jurusan){
        super(umur,jurusan)
        /*
        
        nah kita ambil menggunakan method super
        dan kita butuh umur sama jurusan pada 
        properti parentnya

        tinggal kita kirimkan pada argument method supernya 
        
        */
        this.nama = nama
    }
    salam(){
        console.log(`hallo nama saya ${this.nama}\numur saya ${this.umur} tahun dan saya jurusan ${this.jurusan}`)
    }
}

const muiz2 = new Identitas2('muiz',18,'Teknik Informatika')
muiz2.salam()

/*

kalo saya jalankan 
maka akan tampil

hallo nama saya muiz
umur saya 18 tahun dan saya jurusan Teknik Informatika

jadi seperti itu ya super contructor 
mudah mudahan kalian paham








-----------------------------------

source programmer zaman now mysql

-----------------


*/