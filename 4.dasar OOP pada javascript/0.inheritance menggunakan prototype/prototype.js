function Method(nama){
    this.nama = nama
}



function Mahasiswa(nama){
    this.nama = nama
}

/*

misalnya saya membuat dua buah object
dimana saya ingin object mahasiswa itu mewarisi seluruh method pada
object method

jadi kita menggunakan method Object.create()
method itu kita gunakan untuk mengambil semua method atau properti 
yang ada didalam sebuah object

jadi ketika kita menggunakan prototype
itukan kita ketika membuat method kita masukkan 
pada object prototype yang ada pada sebuah object

jadi misalnya kita bikin object mahasiswa
ketika kita membuat method
kita bisa tulis

mahasiswa.prototype.sayhalo = function(){

}

nah berarti kita untuk mewariskan method dari sebuah object
itu kita bisa tulis

mahasiswa.prototype = Object.create(Method.prototype)

jadi ini bacanya
kita panggil object prototype dari mahasiswa
dan kita isi dengan method apapun yang ada pada prototype
object Method



*/


Mahasiswa.prototype = Object.create(Method.prototype)

// jadi kita wariskan dulu dari object Method
// kemudian kita bisa menambahkan method yang lain lagi

// jadi siMahasiswa ini akan mengambil object protonya
// dari object method


Mahasiswa.prototype.sayHalo = function(nama){
    console.log(`hallo ${nama}`)
}

Method.prototype.cetak = function(nama){
    console.log(`hai ${nama}`)
}


/*

nah ketika saya ingin mengisi method pada object Method
didalam prototypenya 

maka yang terjadi 
object Mahasiswa.prototypenya akan menangkap method
yang ada pada method object Method.prototype

*/




const budi = new Mahasiswa('budi')
budi.sayHalo('husain')
budi.cetak('muiz')

/*

jadi kalo saya jalankan akan tampil

hallo husain
hai muiz    

jadi dengan menggunakan Object.create()
kita dapat mengambil method dan properti pada object lain


atau kalian bisa menuliskannya seperti ini 



*/

function Tes(){

}

Tes.prototype.say = function(){
    console.log('hallo')
}

const p = new Tes
p.say()

function Orang(){

}


// jadi kita tulis methodnya dulu yang mau kita wariskan
Orang.prototype = Object.create(Tes.prototype)
// dan kemudian kita akan ambil dari object Tes


Orang.prototype.halo = function(){
    console.log('hello world')
}

// baru kita tambahkan method lagi pada object Orang



const muiz = new Orang
muiz.halo()
muiz.say()