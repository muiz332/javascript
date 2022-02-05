/* javascript lanjutan: prototype

kali ini kita akan masuk kemateri prototype 
nah kali ini kita akan lihat apa itu prototype dan bagaimana implementasinya didalam javascript 





*/
// const methodEnergi = {
//     makan : function(energi){
//         console.log('selamat makan')
//         return this.energi += energi
//     },
//     tidur : function(jam){
//         console.log('selamat tidur')
//         return this.energi += jam * 2
//     }
// }
// function Mahasiswa(nama, energi){i

//     let mahasiswa = Object.create(methodEnergi)

//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
//     return mahasiswa
// }
// let muiz = Mahasiswa('muiz', 10);

/* 
oke jadi ini adalah code dari materi sebelumnya 

dimana kita sudah membuat funtion declaration ya 

ya dimana disini ada function mahasiswa yang didalamnya kita sudah tambahkan object.create()

kita tahu dengan menggunakan cara ini kita bisa menghemat penggunaan memory 
tapi problemnya adalah kita jadi mengenlola dua buah object 

padahal yang kita mau fokuskan dimahasiswanya 
kita malah harus bikin lagi methodnya


nah sekarang dengan menggunakan prototype kita bisa bikin ini menjadi lebih efektif lagi

ya caranya gini 
sekarang yang akan saya lakukan adalah mengubah function declaration ini menjadi constructor function




*/

// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi
// }

/* kita ganti mahasiswanya menjadi this

dan dibelakang layar yang terjadi sebenarnya adalah 
javascriptnya membuatkan sebuah variable namanya this yang bentuknya object

let this = {}
dan return this

ya walaupun ini sebenarnya tidak perlu kalian lakukan

sebetulnya dibelakang layar ini yang terjadi begitu ya 

nah tapi sebetulnya tidak hanya membuat sebuah object kosong seperti ini saja

sebenarnya yang terjadi adalah 
javascriptnya membuat object.create()

tapi didalam object.createnya 
kan kalian inget object.create itu seperti memanggil class yang lain untuk dijadikan sebagai class parentnya 

nah sebenarnya didalamnya javascript itu memanggil Mahasiswa.prototype

let this = Object.create(Mahasiswa.prototype)

nah sebetulnya ada sebuah properti yang default dijadikan sebagai parent oleh javascriptnya 

jadi ini ada sebetulnya walaupun kalian tidak perlu tulis

jadi secara default constuctor function itu sebetulnya sudah punya parent namanya prototype 

sehingga kalo kalian lihat kita tidak perlu membuat sebuah object baru atau object lain yang dijadikan sebagai parent 

nah kita lihat ya 


*/

// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi
// }

// // kita coba buat objectnya 

// let muiz = new Mahasiswa('muiz', 10)

/* 

ini kan tidak ada masalah ya 
kalo saya jalankan diconsole aman ya 

nah sekarang bagaimana kita mengelola methodnya 
kan kalo sebelumnya kita bikin object lain ya 

nah sekarang kita cukup memanfaatkan prototypenya tadi 

jadi kalo misalkan kita mau bikin method makan kalian cukup tulis begini

Mahasiswa.prototype lalu functionnya 




*/
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi
// }

// Mahasiswa.prototype.makan = function (porsi){
//     this.energi += porsi
//     return `${this.nama} menambahkan energi sebanyak ${porsi}, selamat makan`
// }

// let muiz = new Mahasiswa('muiz', 10)

/* 
anggap saja prototype ini adalah sebuah object lain yang berada pada object yang kita buat yang disediakan oleh javascript 

seperti yang kita buat dimateri sebelum ini ya kan kita bikin object lain untuk mengelola method ini 

nah kita tidak perlu bikin object tersebut karena sudah disediakan oleh javascript 
sekarang tinggal kita bikin method didalamnya 


nah lihat ini bukan object yang harus kita bikin lagi yang baru 

ini sudah ada menempel didalam sebuah object yang baru saja kita buat

paham ya 
ini kalo saya jalankan

kalo saya tulis muiz kelihatannya hanya ada nama dan energi
lalu method makannya mana? 

method makannya kalo kita klik ada didalam prototype 

jadi otomatis dimasukkan kedalam object mahasiswanya 

sehingga kalo kita panggil muiz.makan(3) langsung terpanggil methodnya

kalo kita lihat energinya nambah jadi 13

keren ya jadi tidak perlu bikin object baru 

jadi kalo saya mau bikin method yang lain
tinggal bikin lagi didalam prototypenya 


*/

// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi
// }

// Mahasiswa.prototype.makan = function (porsi){
//     this.energi += porsi
//     return `${this.nama} menambahkan energi sebanyak ${porsi}, selamat makan`
// }
// Mahasiswa.prototype.main = function (jam){
//     this.energi -= jam
//     return `${this.nama} mengurangi energi sebanyak ${jam}, selamat bermain`
// }
// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2
//     return `${this.nama} menambahkan 2 kalilipat energi sebanyak ${jam*2}, selamat tidur`
// }
// let muiz = new Mahasiswa('muiz', 10);


/* 
jadi yang dikelola objectnya cuma satu kita tinggal ambil prototypenya 

sehingga kalo ini saya jalankan 
saya panggil muiz muncul objectnya

lalu kita buka protonya ada 3 ya yang baru kita buat untuk ditempelkan didalam objectnya 

begitu temen temen mudah mudahan sampai disini paham ya 

gimana kita membuat prototype untuk sebuah object 


nah ini kalo kalian lihat mirip dengan sebuah konsep class 

ya apa lagi kalo kalian yang sudah belajar mengenai object oriented ya 

seperti java atau misalkan php yang oppnya

itu konsep ini mirip dengan konsep class yang memiliki inherint atau pewarisan 

nah karena itu didalam javascript konsep ini disebut dengan prototypel inheritens

jadi pewarisannya menggunakan prototype gitu ya 


nah sekarang pertanyaannya sekarang kenapa dijavascript itu tidak pakai class 
kenapa kok pakainya prototype?

ya karena memang javascript ini adalah bahasa yang waktu pembuatannya itu sangat singkat 

hanya beberapa hari javascript ini dibuat 
jadi awalnya itu javascrpt tidak punya konsep class 

saat ini memang sudah ada ya walaupun belum lama konsep class itu dimasukkan kedalamnya 

jadi kalo misalkan kalian mau mengubah yang kita buat ini kedalam class bisa juga 

caranya gini

versi class

kalian tulis class lalu nama classnya Mahasiswa 

yang didalamnya kalo kalian mau bikin properti itu bikin constructor
*/

// class Mahasiswa {
//     constructor(nama, energi){
//         this.nama = nama
//         this.energi = energi
//     }
//     // kalau mau bikin methodnya kita tulis dibawah constructornya 
//     // menulisnya tanpa menggunakan keyword function
//     // jadi langsung nama methodnya lalu kurung buka dan tutup lalu kurung kurawal

//     makan (porsi){
//         this.energi += porsi
//         return `${this.nama} menambahkan energi sebanyak ${porsi}, selamat makan`
//     }
//     main (jam){
//         this.energi -= jam
//         return `${this.nama} mengurangi energi sebanyak ${jam}, selamat bermain`
//     }
//     tidur (jam){
//         this.energi += jam * 2
//         return `${this.nama} menambahkan 2 kalilipat energi sebanyak ${jam*2}, selamat tidur`
//     }
// }

// let muiz = new Mahasiswa('muiz', 10)
// let husain = new Mahasiswa('husain', 20)

/* 
gini jadi ini kita bentuk dalam versi classnya 

hasilnya sama kalo misalkan kita jalankan 
hasilnya sama ya 

gitu nah ini dengan menggunakan class 

ini kelihatannya lebih rapi lebih mudah dibaca dan kalo kalian yang sebelumnya sudah belajar opp
ini pasti lebih bisa dipahami ya 

nah kenapa kita tidak belajar ini langsung
kenapa pakai yang tadi prototype 

ya karena sebetulnya versi class ini dibelakang layarnya itu menjalankan prototype yang tadi 

itu jadi class ini hanya untuk membungkus saja supaya lebih masuk akal

ya jadi sebenarnya dibelakang layar yang dijalankan yang prototypenya

jadi kalian harus paham dulu konsep yang sebetulnya terjadi 

jadi kalo misalkan kalian mau pindah pakai class tidak masalah 
asal tahu saja dibelakang layar prototype yang terjadi 

nah dengan memahami prototype kalian jadi bisa paham 
kalo misalkan kalian menggunakan type data apapun pada javascript 

ya karena kan didalam javascript itu sebetulnya adalah object 
karena dia object pasti dia punya proto tadi 


sama halnya ketika kalian misalnya punya sebuah array

*/

// let angka = [1,2,3]

// nah ini yang kita tulis 
// sebetulnya dibelakang layar yang terjadi itu begini

// let angka = new Array()

/* 
sehingga kalo kita pakai ini 
ini kan sudah tahu ini adalah constructor function 

array itu adalah object yang pasti didalamnya itu membawa sebuah prototype

jadi kalian anggap saja didalam javascriptnya itu ada ini
ada function yang namanya array

function Array(){

}


sama kan kayak mahasiswa tadi 
kalo kita panggil let muiz = new Mahasiswa()

pasti dibelakang layar itu ada constructor Mahasiswanya 

sama array juga begitu 
kalo kita bikin ini

let angka = new Array()

pasti dibelakang layar harusnya ada ini

function Array(){

}

nah karena dia pakai constructor function pasti didalamnya ada ini

function Array(){
    let this = Object.create(Array.prototype)
}

pasti dia terhubung keparent classnya yaitu prototype 

makanya kalo misalakan kalian pakai array 

misalnya begini

*/
// let angka = [1,2,3]
// // nah tapi tiba tiba kita bisa menggunakan gini
// console.log(angka.reverse())

/* 
ini untuk mmebalikkan angkanya 
coba kita lihat 

nah tuh terbalik nah ini dari mana reversenya?

atau misalkan angkanya kita acak



*/
// let angka = [3,1,2]
// console.log(angka.sort())

/* 
jadi ngurut tuh angkanya 

nah ini dari mana sih method method ini?

nah dia merupakan prototype dari object Array gitu ya 

nah kalo saya lihat didalam angkanya 
buka console klik tanda segitiga 

nah didalamnya pasti ada proto
prototypenya isinya ada banyak tuh

dari mana ini ? ya dari object arraynya

jadi array angka ini mewasisi sebuah method dari object Array

jadi misalkan kalian mau mengechec tulis saja diconsolenya

Array.prototype

nah nanti akan muncul didalamnya apa saja isinya

kalo object juga bisa
Object.prototype 

nah dia punya mehtod apa saja didalamnya kalian bisa check

nah bahkan kalian bisa check Number atau String juga

begitu temen temen 
jadi mudah mudahan dengan ini kalian paham apa itu prototype dan bagaimana cara penggunaannya 

baik mungkin itu ya untuk materi kali ini 
kita membahas mengenai prototype 

apa itu prototype dan bagaimana implementasinya 

jadi sampai disini dulu materinya 
kita akan ketemu lagi dimateri berikutnya 

dan seperti biasa temen temen jangan lupa titik koma ; */


