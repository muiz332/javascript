/* javascript lanjutan: this pada arrow function

nah dimateri kali ini kita akan cari tahu mengenai context dari this jika kita menggunakan arrow function

ya jadikan kalian tahu kalo kita menggunakan function declaration atau function exspression
didalamnya terdapat konsep this

nah jika kita mengubah function exspression dengan arrow function 
maka context thisnya itu menjadi berbeda

untuk lebih jelasnya kita lihat contoh codenya ya 

nah sekarang saya mau ngasih contoh jika kita mau membuat constructor function

nah misalnya saya mau membuat sebuah object mahasiswa ya 

*/

// const Mahasiswa = function(){
//     this.nama = 'muiz',
//     this.umur = 18
//     console.log(this)
// }
// let muiz = new Mahasiswa()
/* 

nah kalo kita mau membuat constructor function 
nah maka jika kita menuliskan this didalam functionnya itu akan mengacu kepada objectnya 

misalnya saya akan masukkan kedalam console thisnya 
kalo kita jalankan maka akan muncul object Mahasiswa

ini adalah context thisnya 
jadi thisnya mengacu ke objectnya 

nah misalkan sekarang kalo kita mempunyai sebuah method misalkan sayHallo
yang isinya juga adalah function exspression

*/
// const Mahasiswa = function(){
//     this.nama = 'muiz',
//     this.umur = 18,
//     this.sayHallo = function(){
//         console.log(`halo nama saya ${this.nama} umut saya ${this.umur} tahun`)
//     }
// }
// const muiz = new Mahasiswa()

/* 
kalo saya jalanin muncul ya 

ya kalo gini tidak ada masalah ya 
kita buat function yang didalamnya punya this yang otomatis mengacu ke objectnya ketika diinstansiasi

nah sekarang gimana kalo kita ubah ini menjadi arrow function


nah untuk menggunakan arrow function kalian tidak bisa begitu saja mengubah semua function menjadi arrow function

karena kalo ini kita ubah menjadi arrow function hasilnya gini
*/
// const Mahasiswa = () =>{
//     this.nama = 'muiz',
//     this.umur = 18,
//     this.sayHallo = function(){
//         console.log(`halo nama saya ${this.nama} umut saya ${this.umur} tahun`)
//     }
// }
// const muiz = new Mahasiswa()


/* 
nah ini kalo dijalankan maka akan eror
katanya mahasiswa is not a constructor

jadi tidak bisa kalo bikin constructor function menggunakan arrow function

nah tapi kalo method bisa
kalo method kita ganti menjadi arrow function jadinya begini 


*/
// const Mahasiswa = function (){
//     this.nama = 'muiz',
//     this.umur = 18,
//     this.sayHallo = () =>{
//         console.log(`halo nama saya ${this.nama} umut saya ${this.umur} tahun`)
//     }
// }
// const muiz = new Mahasiswa()

/* 
nah kalo ini dijalankan tidak akan eror ya 
kelihatannya sama saja ya kalo pakai arrow function atau function exspression fungsinya kelihatannya sama saja

nah tapi sebetulnya pada saat kita menggunakan arrow function 
arrow function sebetulnya tidak menyimpan context this

jadi tidak ada context this didalam function
dia akan mencari keluar dilexical scopenya 

kelihatannya sama saja menggunakan function biasa atau menggunakan arrow function 

nah lihat nih 
ini akan berbeda ketika kita bikin objectnya tidak menggunakan constructor function tapi pakai object literal 


*/

// const mahasiswa = {
//     nama : 'muiz',
//     umur : 18,
//     sayHallo : function (){
//         console.log(`halo nama saya ${this.nama} umur saya ${this.umur} tahun`)
//     }
// }

/* 
nah kalo ini saya jalanin 
muncul ya isinya 

jadi kalo menggunakan function thisnya berisi object yang bersangkutan

nah tapi ini ini akan beda ketika saya ganti methodnya dengan arrow function




*/
// const mahasiswa = {
//     nama : 'muiz',
//     umur : 18,
//     sayHallo : () =>{
//         console.log(`halo nama saya ${this.nama} umur saya ${this.umur} tahun`)
//     }
// }

/* 
kalo ini saya jalankan saya tulis diconsole.lognya mahasiswa.sayhallo()

nah sekarang dia nilainya undefined 
karena ini arrow function maka dia akan mencari dilocal scopenya ada this gak? gak ada

cari ke atasnya ada this gak? tidak ada 
lalu keluar dari object mahasiswa dia mencari thisnya

ada gak this nah ketemu diglobal scope this adalah window

maka this.nama nilainya undefined

nah kalo tadi pakai constructor function begitu this ini tidak ada
dia akan mencari keatas ketemu yang this.nama juga


kalo misalkan saya console.log this nya maka isinya adalah object window 

ya itulah kenapa saya bilang tadi arrow function tidak memiliki konsep this

gitu ya mudah mudahan sampai disini kalian bisa paham ya 

kalo kalian masih bingung kita coba contoh lain ya 

nah sekarang saya mau kasih kasus gini 
didalam constructor function ini saya mau bikin sebuah function yang otomatis dijalanin

misalnya saya mau menggunakan function yang namanya setInterval 
yang otomatis dijalankan pada interval tertentu

yang didalamnya saya ingin setiap 0,5 detik umurnya nambah 1 



*/
// const Mahasiswa =  function(){
//     this.nama = 'muiz'
//     this.umur = 18
//     this.sayHallo = function(){
//         return `hallo nama saya ${this.nama} umur saya ${this.umur}`
//     }

//     setInterval(function(){
//         console.log(this)
//     },500)
// }
// const muiz = new Mahasiswa()

/* 
kalo misalkan kita menggunakan function declaration 
ya setInterval adalah function declaration 

kalo sayHallo itu adalam function exspression maka sayhallo ini tidak akan kena hoisting

nah tapi begitu kita menggunakan function declaration ini akan kena hoisting 
sehingga pada saat thisnya dipanggil dia tidak mengecheck didalam object Mahasiswanya 
tapi dia mengecheck diglobalnya 

nah coba kita jalankan saja
lihat tuh munculnya NaN bukan angka katanya 

nah kenapa bukan angka?
karena yang dia jumlah bukan 33 tapi coba kita lihat 
kita console this saja 

nah this itu window katanya jadi diluar 
jadi kalo saya tulis this.umur itu nilainya undefined tidak ada

nah itu scope this kalo kita bikin function declaration 
karena function declaration berada diobject diwindow maka this itu window

nah gimana dong cara mengetasinya 
nah kita bisa gunakan arrow function tadi 

*/

// const Mahasiswa =  function(){
//     this.nama = 'muiz'
//     this.umur = 18
//     this.sayHallo = function(){
//         return `hallo nama saya ${this.nama} umur saya ${this.umur}`
//     }

//     setInterval(() =>{
//         console.log(this)
//     },500)
// }
// const muiz = new Mahasiswa()

/* 
nah coba pahami logikanya 
nah sekarang kalo ini dijalanin arrow function tidak punya konsep this 

karena dia tida punya konsep this maka thisnya akan mencari kelexical scopenya 
dia mencari keluar nah ketemu lah this

kalo sekarnag saya jalanin thisnya maka isinya adalah Mahasiswa
sehingga kalo saya tulis this.umur++ maka dia akan nambah tuh umurnya 

*/
// const Mahasiswa =  function(){
//     this.nama = 'muiz'
//     this.umur = 18
//     this.sayHallo = function(){
//         return `hallo nama saya ${this.nama} umur saya ${this.umur}`
//     }

//     setInterval(() =>{
//         console.log(this.umur++)
//     },500)
// }
// const muiz = new Mahasiswa()

/* 
coba jalanin maka dia pasti nambah
gitu temen temen 

ya jadi itu perbedaan context this pada arrow function 
jadi sekali lagi kita tidak boleh mengubah secara sembarangan

wah pengen keren nih ubah saja menjadi arrow function 
tidak bisa begitu ya tergantung kebutuhan

mudah mudahan sampai disini mulai ada gambaran ya 

nah sekarang pertannyaannya arrow function ini dipakainya dimana sih 
contoh real dari arrow function itu kita pakai dimana?

nah ini kita coba sekarang kasus yang bisa kita terapkan direal lifenya

kita coba buat kotak yang saya kasih class box didalam web kita
tidak perlu lebar lebar cukup 100px aja

lalu kita kasih css dulu

.box{
    width: 100px;
    height: 100px;
    border: 1px solid;
    margin: 20px auto;
    transition:   // untuk transition tiap tiap perubahannya 
                .3s width,
                .3s height .3s,
                .3s margin-top .3s,
                .3s background-color;
}
.size{
    width: 150px;
    height: 150px;
    margin-top: 40px;
}
.b{
    background-color: black;
}

nah jadi ada kotak 100 x 100
nah terus saya punya dua buah class 

ceritanya saya mau buat animasi ketika tombol diklik
nanti dengan menggunakan javascript ketika diklik kotak tersebut akan saya kasih class yang namanya size 

nah nanti setelah nunggu 0.6 detik
ya karena itu ada durasinya 0.3 detik dan delaynya 0.3 detik jadi 0.6 detik ya 
saya mau tambahkan class lagi yang namanya b 

nah sekarang yang akan kita lakukan adalah menyeleksi kotak tersebut menggunakan DOM



*/
// const box = document.querySelector('.box')
// box.addEventListener('click', function(){
//     console.log(this)
// })

/* 
coba saya tulis didalamnya ketika diklik munculkan this 
coba kita jalankan 

nah keluar tuh elemennya jadi this disinya adalah elementnnya 
oke sekali lagi ini kalian tidak bisa ubah menjadi arrow function ya 

ini kalo kalian ubah menjadi arrow function isinya adalah object window

oke ceritannya kalo diklik saya ingin memberikan class pada kotak ini 
nah kita bisa lakukan ini 

karena kita tahu this disini adalah elementnya 
maka saya bisa tulis begini


*/
// const box = document.querySelector('.box')
// box.addEventListener('click', function(){
//     this.classList.toggle('size')
// })

/* nah kalo kita jalanin
kalo kotaknya saya klik nah dia akan menbahkan class size ya

nah sekarang yang akan saya lakukan adalah saya akan menunggu selama 0.6 detik baru saya kasih class b

jadi kita bisa pakai setTimeout()




*/
// const box = document.querySelector('.box')
// box.addEventListener('click', function(){
//     this.classList.toggle('size');

//     setTimeout(function(){
//         this.classList.toggle('b')
//     }, 600)
// })

/* 
kalo setTimeou dia akan menunggu dulu lalu jalankan codenya selama delay tertentu

kita lihat kalo saya jalankan 
nah tapi setelah menggungu 0.6 detik yang b tidak jalan nih kira kira kenapa?

karena ketika kita menggunakan function maka this disini dia akan berisi apapun yang ada diluarnya 

nah karena setTimeout ini dijalankan ketika hoisting maka dia posisinya ada diglobal scope

jadi jika kalian console this ini isinya adalah object window
harusnya this disini isinya adalah box

nah sekarang gimana cara mengatasinya ?
kalo dulu sebelum ada arrow function kita bisa akalin caranya dengan membuat sebuat variable yang diisi this

*/
// const box = document.querySelector('.box')
// box.addEventListener('click', function(){
//     let that = this
//     this.classList.toggle('size');

//     setTimeout(function(){
//         that.classList.toggle('b')
//     }, 600)
// })

/* 
jadi menulisnya didalam setTimeoutnya that bukan this

sekarang kalo dijalanin tuh berubah ya 

nah tapi sekarang kita sudah tahu ada cara lain yaitu dengan menggunakan arrow function

*/
// const box = document.querySelector('.box')
// box.addEventListener('click', function(){
//     this.classList.toggle('size');

//     setTimeout(() =>{
//         this.classList.toggle('b')
//     }, 600)
// })

/* 
nah sekarang kalo dijalanin tuh sudah bener ya 
thisnya mengacu kebox jadi sekarang 

nah karena dilexical scopenya ada this maka this isinya adalah box
gitu ya 

nah tapi ini animasinya harus diperbaiki lagi ya
kalo misalkan saya klik lagi hilangnya harusnya b dulu baru sizenya 

tapi disini adalah animasi kotaknya dulu baru backgroundnya
ya jadi kebalik tuh

nah ini kalo mau dibenerin kita bisa kalih gini deh 
kita masukkan 2 class tersebut kedalam variable 


lalu kita check dulu apakah sudah ditambahkan class sizenya 

kalo sudah ditambahkan kita balik variable pertama diisi dengan b dan variable kedua diisi dengan size
*/

// const box = document.querySelector('.box')
// box.addEventListener('click', function(){

//     let satu = 'size'
//     let dua = 'b'

//     if(this.classList.contains(satu)){
//         satu = 'b'
//         dua = 'size'
//     }
//     this.classList.toggle(satu);

//     setTimeout(() =>{
//         this.classList.toggle(dua)
//     }, 600)
// })

/* 
nah biasanya begini 
tapi dengan menggunakan javascript yang baru kita bisa gunakan sintax ini untuk membalikkan isi dari variable 

namanya destructuring assignment syntax

jadi saya bisa tulis begini 

*/
// const box = document.querySelector('.box')
// box.addEventListener('click', function(){

//     let satu = 'size'
//     let dua = 'b'

//     if(this.classList.contains(satu)){
//         [satu, dua] = [dua, satu]
//     }
//     this.classList.toggle(satu);

//     setTimeout(() =>{
//         this.classList.toggle(dua)
//     }, 600)
// })

/* 
nah sekarang kita lihat hasilnya 
coba kalian klik 

nah sudah bener ya begitu ya jadi mudah mudahan kalian paham bagaimana penggunaan dari arrow function

oke temen temen mungkin itu saja untuk materi kali ini 
mudah mudahan paham dan tidak bingung

kita akan ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ; 



*/
