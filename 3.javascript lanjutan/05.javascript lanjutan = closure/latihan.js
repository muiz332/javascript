/* javascript lajutan: closure

kita sekarang akan masuk ketopik yang cukup penting yaitu closure ya 

setelah dimateri sebelumnya kita sudah belajar mengenai  execution context hoisting dan scope 

nah sekarang pemahaman tersebut akan kita terapkan kepada closure

nah sebelumnya nih kita harus paham dulu mengenai apa itu closure ?
definisinya seperti apa dan konsepnya seperti apa?


karena sekali lagi konsep mengenai closure ini meskipun sangat penting tapi bukan merupakan sesuatu yang gampang untuk kita pahami

ya kita lihat ada beberapa definisi dari beberapa sumber ya 

1. menurut mozila

closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) 
didalam function tersebut 

ya nanti lexical scope ini erat kaitannya dengan yang sudah kalian pelajari dimateri sebelum ini

kalo misalkan kalian masih bingung mengenai difinisi ini tidak apa apa nanti kita lihat saja implementasi langsungnya 


2.menurut w3school 

closure adalah sebuah function ketika memiliki akses keparent scopenya meskipun parent scopenya sudah 
selesai dieksekusi 

nah ini juga sudah kita lihat contoh kasusnya dimateri sebelumnya 

jadi kita tahu sebuah function itu bisa memiliki function didalamnya tapi kasus tersebut bukan merupakan sebuah closure 
akan menjadi closure ketika function didalamnya memiliki akses ke parent scopenya 


3.menurut code fellow 

closure adalah sebuah function dikembalikan oleh function yang lain yang memiliki akses ke lingkungan saat ia diciptakan 

nah ini balik lagi kelexical scopenya 

itu ya jadi kita bisa bikin function yang mengembalikan atau mereturn function gitu 
jadi bukan function didalam function tapi function mereturn function 

silahkan kalian pahami masing masing dari definisi itu karena masing masing orang bisa memiliki interpretasi berbeda terhadap closure 


dan sekarang kita akan membahas mengenai lexical scope 
ya tadi sudah disebut bahwa ada sesuatu yang disebut dengan lexical scope 

saya punya code sederhana seperti ini

function init(){
    let nama = 'muiz'

    function tampilNama(){
        console.log(nama)
    }
    tampilNama();
}
init();


coba kalian lihat itu kita punya function diluar namanya init dan didalamnya ada variable nama dan ada function lagi yang namanya tampilNama

didalam tampilNama ini menjalankan console.log nama
lalu function tampilNama itu dipanggil 

lalu diluar function init function ini juga dipanggil
coba dipahami dulu codenya 

nah disini kalian sudah tahu kita punya local variable variable yang dibuat didalam function init

nah didalam function init juga kita punya sebuah function lagi  yang kita sebut dengan inner function (closure)

nah disini ini beda dengan bahasa pemrogramman yang lain inner function itu bisa memiliki akses keparent variablenya

jadi ketika kita panggil console.log nama 
kalo kalian inget execution context dia akan mencari dulu 

ada gak nama didalam tampilNama ? kalo tidak ada dia mencari keatas 
ada gak didalam function initnya ? kalo tidak ada dia terus mencari keatas sampai ketemu global scope 

nah ini yang disebut dengan lexical scope 
jadi function tampilNama punya akses kevariable nama padahal ada diluar functionnya 

begitu begitu kasus ini terjadi inner function membutuhkan variable yang ada didalam parent scopenya 

maka inner function ini disebut dengan closure gitu temen temen

oke ya supaya lebih jelas lagi kita implementasikan code barusan didalam code editor kita 


nah kita akan coba jalankan code yang tadi 

*/

// function init(){
//     let nama = 'muiz'

//     function tampilNama(){
//         console.log(nama)
//     }
//     tampilNama();
// }
// init();


/* 
nah disini sebelum kita telusuri kita coba lihat hasilnya seperti apa ya 

jadi ini kalo saya jalankan akan menampilkan muiz ya

kalo kita telusuri execution contextnya ini hoisting terjadi ya function ini variable nama dibuat 

function tampilNama dihoisting juga
lalu baru variable nama diisi dengan muiz

nah sekarang ketika kita jalakan tampilNama console.log dijalankan 

nah dia membutuhkan data nama 
sedangkan didalam local functionnya tidak ada kalo ini terjadi dia akan naik keatas diparentnya ada gak?

nah kalo misalkan didalam tmapilNama saya buat variable nama yang diisi dengan husain 
maka yang dipakai didalam console.lognya adalah yang didalam function tampilNama yaitu husain

dan itu jadinya bukan closure karena tidak menggunakan lexical scopenya 

tapi kalo code yang diatas itu adalah closure 

nah untuk memastikannya ini ada caranya nih 
sekarang saya tidak akan menjalankan tampilNama tapi saya akan simpang kedalam console.log




*/
// function init(){
//     let nama = 'muiz'

//     function tampilNama(){
//         console.log(nama)
//     }
//     console.log(tampilNama)
// }
// init();

/*
kalo misalkan saya hapus kurung buka dan tutupnya 
maka functionnya tidak dieksekusi 

jadi harusnya yang tampil hanya isinya saja 

nah tapi kalo misalkan saya tulis console.dir 




*/
// function init(){
//     let nama = 'muiz'

//     function tampilNama(){
//         console.log(nama)
//     }
//     console.dir(tampilNama)
// }
// init();

/* 
dia akan menampilkan objectnya 
ya coba kalian jalankan 

kita lihat dalamnya kalo saya klik dibawah kita bisa menemukan ada scopes 
kalo saya klik 

tuh katanya ada closure 
jadi function init ini didalamnya ada closure 

kenapa ada closure? karena membutuhkan variable nama dari parentnya 
jadi muncul closure 

kalo misalkan saya punya variable lain

*/
// function init(){
//     let nama = 'muiz'
//     let umur = 18
//     function tampilNama(){
//         console.log(nama)
//     }
//     console.dir(tampilNama)
// }
// init();

/* 
kalo saya jalankan umur ini tidak akan masuk kedalam closurenya 
saya lihat lagi discopenya tuh tidak ada

tapi ketika saya butuhkan didalam function tampilNama

*/
// function init(){
//     let nama = 'muiz'
//     let umur = 18
//     function tampilNama(){
//         console.log(nama)
//         console.log(umur)
//     }
//     console.dir(tampilNama)
// }
// init();

/* 
nah sekarang function tampilNama butuh dua data dari luar 
makanya umur akan masuk keclosure juga

lihat discopesnya 
nah karena membutuhkan data dari luar maka sekarang ada dua variable yang masuk kedalam closure scope gitu 

ya mungkin sekarang sudah dapat gambaran kenapa tadi disebutnya gabungan antara function dengan lexical scopenya 

dan sekarang kalo codenya saya kembalikan 


*/
// function init(){
//     let nama = 'muiz'
//     function tampilNama(){
//         console.log(nama)
//     }
//     tampilNama()
// }
// init();

/* 
nah pada kasus ini function tampilNama ya sebagai inner functionnya 
inikan langsung dijalankan 

nah ini menarik nih kita bisa lakukan ini 


*/
// function init(){
//     let nama = 'muiz'
//     function tampilNama(){
//         console.log(nama)
//     }
//     return tampilNama
// }
// init()


/* 
kalo saya return tampilNama tapi tidak saya jalankan 

jadi saya mengembalikan function tampilNama tampa mengembalikannya

ini kalo saya jalankan 
sekarang tidak tampil apa apa kenpaa ? karena lihat ini 

ini kan saya panggil function init() dibawah 
function initnya dijalanin 

terus didalamnya kita punya function tampilNama 
terus kita kembalikan tampa dijalankan 

nah sampai disini istilahnya functionnya baru jalan sebagian 

nah gimana supaya tampil namanya jalan?

nah ini kita bisa simpan kedalam variable 

*/

// let panggilNama = init()

// jadi sekarang funciton init yang sudah dijalankan sebagian masuk kepanggilnama
// baru dibawahnya kita bisa jalankan panggil nama

// panggilNama()

/* 
ya untuk menjalankan tampilNama 
ini kalo saya jalankan baru tampil tuh


oke ya mungkin ini agak aneh 
tapi ini memungkin kan kita bisa melakukan yang nanti kita sebut dengan function vektory 


contohnya gini misalkan saya ingin namanya itu tidak muiz tapi nanti tergantung user masukinnya apa gitu ya 



*/
// function init(){
//     function tampilNama(nama){
//         console.log(nama)
//     }
//     return tampilNama
// }
// init()

/* 
kita kasih parameter ke function tampilNama

jadi dengan logika yang tadi itu kan function initnya jalan lalu mengembalikan function tampilNama 
tapi belum dijalankan paham ya 

jadi sekarang kalo saya mau jalankan function panggilNama saya butuh parameter 


*/
// let panggilNama = init()
// panggilNama('muiz')

/* 

ini kalo saya jalankan muncul muiz

gitu ya jadi ini salah satu penggunaan dari closure

nah sebetulnya kalo kalian lihat codenya sebetulnya kita mengembalikan function tampilNama 

dan ini bahkan bisa kita ringkas lagi



*/
// function init(){
//     return function(nama){
//         console.log(nama)
//     }
// }
// init()
// let panggilNama = init()
// panggilNama('muiz')
// panggilNama('husain')

/* 
tidak perlu pakai nama function 
kita bisa langsung return functionnya 

anonymous function atau function tanpa nama seperti itu 
ini sama saja kalo saya jalankan hasilnya sama 

jadi itupun salah satu contoh dari closure

nah mungkin sekarang pertanyaannya kenapa kita menggunakan closure?

ya tadi kita sudah tahu cara bikinnya sekarang alasan menggunakan closure 

ada beberapa ya 
1.untuk membuat function factories 
    ya seperti tadi contohnya 

2.untuk membuat private method


nanti kita lihat nih masing masing dari contohnya ya 


1. untuk membuat function fatories


ini lihat misalkan saya punya contoh kasus mirip seperti tadi 

nah bedanya function outernya atau function luarnya punya parameter ya 
*/

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Hallo ${nama}, selamat ${waktu} semoga harimu menyanangkan`)
//     }
// }


/* 
jadi ada parameter waktu yang nanti untuk memberitahu pagi siang atau malam misalnya 

nah function ini mengembalikan function lagi innter functionnya untuk ngasih tahu namanya siapa misalkan 

dengan menggunakan logika yang tadi kita bisa membuat pesannya itu ditampilkan sesuai waktu 

misalkan saya punya variable selamatPagi
*/

// let selamatPagi = ucapkanSalam('pagi')
// let selamatSiang = ucapkanSalam('siang')
// let selamatMalam = ucapkanSalam('malam')

// nah sekarang sudah selesai belum? belum ya 

// ini kalo saya mau jalankan saya tinggal tulis begini

// selamatPagi('muiz')

/* 
kalo saya jalankan tampil ya selamat pagi
sekarang kalo saya tulis  selamatMalam

*/

// selamatMalam('husain')

/* 
maka akan muncul selamat malam 

nah kalo misalkan saya coba lihat menggunakan console.dir isi dari selamatMalam 
*/

// console.dir(selamatMalam)

/* 
nah nanti kita bisa lihat bahwa inner function ini sudah jalan setengahnya 

coba kita jalankan 
kita lihat pasti didalam scopenya ada closure itu waktu malam

nah berarti ini closure dengan menggunakan lexical scopenya waktu yang isinya malam 

itu jadi meskipun selamat malam ini belum kita jalankan ucapkan salamnya sudah berjalan dengan mengisikan data waktu berisi malam 

jadi sudah jalan setangahnya tinggal nunggu data dari namanya 

*/
// console.dir(selamatMalam('muiz'))

/* 
kalo ini saya jalanin baru ada tuh

gitu ya temen temen ini disebut dengan factories function 
kita bikin function sesuai dengan function yang lain mudah mudahan paham ya 

dan tadi alasan yang lain adalah agar kita seolah oleh punya privat method atau privat variable 


2.privat method 

saya kasih contoh dulu ini contoh classik 

misalnya saya punya sebuah variable namanya counter

*/

// let counter = 0

/* 
jadi ceritannya saya mau bikin sebuah progam sederhana untuk menghitung sudah berapa kali sebuah tombol itu diklik

lalu saya bikin function 

*/

// let add =  function(){
//     return ++counter
//     // jadi ditambah satu dulu baru dicetak
// }

// lalu saya console
// console.log(add())

/* 
kalo saya jalankan harusnya counter yang tadinya 0 jadi 1 
kalo saya duplicat harusnya 1 2 3

*/
// console.log(add())
// console.log(add())

/* 
sip ini tidak ada masalah dan ini bukan closure ya 

kelihatannya ini tidak ada masalah tapi coba bayangkan kalo progam kalian sudah panjang puluhan bahkan ratusan baris 

dan ada salah satu baris yang mengubah counter 
kalian mengisi ulang sicounternya 



*/
// let counter = 0
// let add =  function(){
//     return ++counter
// }
// counter = 10
// console.log(add())
// console.log(add())
// console.log(add())

/* 
nah sekarang counternya jadi 10 dan karena hoisting counter yang ada didalam function jadi terpengaruh 

nah solusinya gimana?
supaya counter ini tidak terganggu sebenarnya kita bisa simpan kedalam 

*/
// let counter = 0
// let add =  function(){
//     return ++counter
// }
// counter = 10
// console.log(add())
// console.log(add())
// console.log(add())

/* 
cuma sekarang kalo saya jalankan hasilnya jadi satu semua 
karena setiap manggil add counter diisi dengan 0 lalu tambah 1 

nah berarti salah ya tujuannya pengen tidak terganggu tercapai tapi masalahnya selalu diset kembali ke 0

nah sekarang gimana kalo kita pakai closure 




*/
// let add = function (){
//     let counter = 0
//     return function(){
//       return ++counter
//     }
// }
// counter = 10
// console.log(add())
// console.log(add())
// console.log(add())

/* 
kalo kita jalanin tampilnya apa ? tampilnya sebuah function 
karena functionnya yang jalan baru add 

inner functionnya belum jalan 
nah solusinya gimana ?

ya kayak tadi kita harus simpan didalam sebuah variable 



*/
// let add = function (){
//     let counter = 0
//     return function(){
//       return ++counter
//     }
// }
// let a = add()
// counter = 10
// console.log(a())
// console.log(a())
// console.log(a())

/* 
dan setiap kita jalanin inner function counter akan selalu mengacu ke nilai counter sebelumnya 

coba kita jalankan ya 
nah hasilnya baru bener 1 2 3

begitu ya jadi seolah olah counter ini jadi privat karena tidak bisa diakses dari luar 
tapi nilainya tetap dipertahankan karena dia menjadi closure 

begitu ya temen temen mudah mudahan paham nih 

nah tapi ini kalo temen temen lihat agak aneh ya 
kita bikin sebuah variable buat nampung 

nah sebenarnya ada caranya supaya otomatis menjalankan si function add nya tanpa harus memindahkan didalam variable 

dan tetap pakai add 
*/
let add = (function (){
    let counter = 0
    return function(){
      return ++counter
    }
})()
counter = 10
console.log(add())
console.log(add())
console.log(add())


/* 
nah caranya supaya dijalankan secara penuh 
ini bisa kita bungkus kedalam sebuah imideately invoked function 

ya jadi kalian kasih kurung
lalu function ini kita jalankan menggunakan kurung juga 

jadi ditutup dengan kurung lalu kita kasih kurung lagi diluarnya 

jadi pada saat diassignment divariable add langsung menjalankan inner functionnya

jadi sekarang kalo saya jalanin normal ya 

dan kalo saya kasih counter yang diisi dengan 10 ini tidak akan mengganggu functionnya 

gitu temen temen ya jadi ini salah satu contoh dari closure juga 
mudah mudahan sampai disini kalian paham 

baik jadi itu ya penjelasan mengenai closure 
sekali lagi seperti yang saya bilang diawal topik ini bukan merupakan topik yang mudah untuk dipahami 
tapi sangat penting

jadi saran saya kalo masih bingung diulang lagi materinya 
dicoba sendiri semua study kasus yang sudah kita coba 

silahkan diubah ubah parameternya silahkan buat contoh kasus yang lain supaya 
kalian makin paham lagi 

ya jadi mungkin itu saja untuk materi kali ini
kita akan ketemu lagi dimateri berikutnya 

dan seperti biasa jangan lupa titik koma ; */