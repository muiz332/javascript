/* javascript lanjutan: execution context, hoisting dan scope

kali ini kita akan membahas sebuah topik yang cukup menarik didalam javascript yaitu closures 

ya tapi sebelum kita masuk kesini kita akan bahas dulu pengantarnya 
ada tiga buah topik yang kita sebut dengan exsecution constext, hoisting dan scope 

ya jadi konsep konsep ini merupakan konsep pada javascript yang menurut saya cukup unik ya atau bahkan kita bisa bilang agak aneh gitu ya untuk sebuah bahasa pemrograman 

dan ketiga hal ini menurut saya cukup penting untuk kita pelajari agar kita nanti tidak kebingungan ketika kita masuk ketopik topik yang lebih lanjut lagi 

ya dan nanti ketika kalian menyimak penjelasan ini mungkin rasanya akan membingungkan ya 

ya tapi tidak apa apa nanti coba sedikit sedikit dipahami saja 
dan kalo perlu diulang ulang saja materinya 

jadi yang pertama yang harus kalian ingat itu ada 2 fase pada execution context

exsecution context ini adalah saat progam kalian dijalankan

nanti didalamnya ada yang disebut dengan
fase creation dan yang kedua ada execution

nah ini yang menurut saya yang membuat javascript menjadi sebuah bahasa yang unik ya

coba kita langsung lihat saja study kasus pada progam kita 

tadi saya sudah bilang bahwa javascript itu aneh ya 
contohnya begini deh

kalo misalkan didalam source javascript kita, kita tulis begini

*/

// console.log(nama)

/* coba kalian bisa nebak gak kalo saya tulis begini hasil yang ada didalam consolenya kira kira apa?

nah kalo saya jalankan itu hasilnya eror 
ini karena variable nama tidak pernah kita definisikan sebelumnya 

nah tapi coba kalo misalkan dibawahnya saya tulis 
var nama , ini kita masih pakai keyword var ya 

tidak apa apa nanti kita akan lihat bedanya ketika kita pakai keyword pembuatan variable yang lain

contohnya begini

*/
// var nama = 'muiz'

/* coba sekarang kalo saya jalanka tampilnya apa?

apakah muiz?
kita lihat kalo saya jalankan ternyata tampilnya undefined

padahal variable nama sudah kita definisikan dibawah consolenya 

tapi kenapa tampilnya undefined dan tidak eror?
nah sebelum saya jelaskan alasannya coba saya pindahkan console.lognya dibawah variablenya 


*/
// var nama = 'muiz'
// console.log(nama)

/*  kalo gini gimana?
nah sekarang tampilnya baru bener, tampilnya muiz 

tapi yang tadi mungkin agak aneh ya 
ketika console.lognya diatas itu undefined

*/
// console.log(nama)
// var nama = 'muiz'

/* 
nah ini yang terjadi begini 

saat progam dijalankan yang terjadi adalah ada sesuatu yang disebut dengan creation fase 
atau fase pembentukan ya

fase creation ini terjadi dicontext global karena kita disini langsung bikinnya didalam file javascriptnya 
tidak didalam function

nah nanti kalo didalam function  itu beda lagi 


//creation phase pada global context

nah yang terjadi pada phase creation ini  javascriptnya akan mengechek apakah ada variable atau function didalam codingannya ?

itu dulu yang dia check dia tidak akan pedulikan dulu perintah console.log ini


- ada keyword var didalam codingannya gak?  

jadi yang pertama itu

misalkan kalian punya 10 baris code 
dari 10 baris itu dicari ada gak keyword var gak ada keyword function gak?

itu dulu yang akan dicari
nah kalo ada dia akan membuat nama variable yang sama dengan  yang kita buat 

dan itu akan diisi dengan undefined 

oke jadi semua variable akan diset dulu isinya dengan undefined 

ya makannya ketika kita tulis console.lognya diatas variablenya sudah ada tapi isinya undefined 

jadi sebenarnya dibalik layar begini

var nama = undefined
console.log(nama)
var nama = 'muiz'


- ada keyowrd function didalam codingannya gak?

nah yang kedua kalo ada function itu akan diisi function itu sendiri 

ya jadi diisi code function itu sendiri 
ya nanti kita coba deh

nama function = function()


ya jadi ini ada dua hal yang dilakukan 
nah ini konsep ini disebut dengan hoisting 

kalo hoisting kalian terjemahkan kedalam bahasa indonesia itu anggap saja seperti kalian mengerek bendera 

jadi benderanya dinaikkan keatas
nah ini juga sama meskipun ditulisnya dibawah variable dan function dia akan otomatis dinaikkan keatas jadi ini dulu yang dilakukan 

konsepnya namanya hoisting oke
itu ya yang terjadi pada execution context diphase creation 

nah tapi sebetulnya selian dua hal ini ada lagi yang didefinisikan 

yang didefinisikan adalah javascript mendefinisikan object window sebagai global object
dan javascript mendefinsikan this sebagai window 

nah ini yang dilakukan meskipun kalian tidak menuliskan apapun 

ya jadi ada dua object yang dibuat dan kalo ada variable diisi dengan undefined 
kalo ada function diisi dengan tulisan function itu sendiri tidak dijalankan functionnya 

nah ini namanya creation phase 

setelah ini baru execution phase

// execution phase 

jadi mengeksekusi progamnya dari atas kebawah 


console.log(nama)
var nama = 'muiz'

nah baru dijalanin tuh console.log nama 
nah begitu dia jalanin nama isinya apa?

didalam memory nama isinya undefined 
makanya kalo ini saya jalankan isinya undefined 

baru kebawahnya lagi nama diisi dengan muiz
nah sekarang dimemory namanya muiz

tapi dia sudah terlanjur diconsole.log jadi munculnya undefined

kecuali kalo kita balik

*/

// var nama = 'muiz'
// console.log(nama);

/* kalo begini aman pertama diisi dengan undefined dulu baru diisi muiz lalu diconsole.log

begitu ya mudah mudahan sampai disini kalian paham execution context dan hoisting ini

atau kita coba contoh yang lain ya 

sekarang saya punya variable nama diisi dengan muiz
lalu saya punya variable umur diisi dengan 18 misalkan 

*/
// var nama = 'muiz'
// var umur = 18

// // nah dibawah ini saya punya function 

// function sayHallo (){
//     console.log(`hallo nama saya ${nama}, saya ${umur} tahun`)
// }

/* 
nah kalo begini harusnya sekarang kalian sudah tahu dibelakang layar yang terjadi adalah creation phase dulu 

kita lakukan hoisting untuk dua variable ini 
dan kita isi function dengan tulisan functionnnya 

kalo mau kita coba kita tulis saja diatas variable console.log saya hallo

*/
// console.log(sayHallo)
// var nama = 'muiz'
// var umur = 18

// // nah dibawah ini saya punya function 

// function sayHallo (){
//     console.log(`hallo nama saya ${nama}, saya ${umur} tahun`)
// }

/* 
nah sekarang ini kalo kita jalanin tuh ada functionnya isinya adalah yang ditulis

beda dengan kalo saya jalanin

*/
// console.log(sayHallo())
// var nama = 'muiz'
// var umur = 18


// function sayHallo (){
//     console.log(`hallo nama saya ${nama}, saya ${umur} tahun`)
// }

/* 
tuh jalan tapi tampilnya begini 
hallo nama saya undefined saya umur undefined tahun


kenapa? karena tadi hoisting, kita nulis variablenya dibawah console.lognya 
kalo saya pindahkan consolenya dibawah variable 

nah baru sekarang variablenya muncul

*/


// var nama = 'muiz'
// var umur = 18

// console.log(sayHallo())

// function sayHallo (){
//     console.log(`hallo nama saya ${nama}, saya ${umur} tahun`)
// }

/* 
oke nah ini kenapa masih ada tulisan undefined 
karena harusnya sebuah function itu mengembalikan nilai 

kalo mau tidak ada undefinednya kalian jangan tulis console.log tapi kalian tulisnya return
begini 

*/

// var nama = 'muiz'
// var umur = 18

// console.log(sayHallo())

// function sayHallo (){
//     return `hallo nama saya ${nama}, saya ${umur} tahun`
// }

/* 
kalo ini saya jalanin tuh baru ilang
oke ya jadi kalo misalkan variable itu diisi dengan undefined 

kalo function dia hanya diisi dengan function itu sendiri 
makanya kalo saya tulis sebelum functionnya tidak masalah

tapi kalo variable saya tulis sebelumnya akan bermasalah

ya itu contoh lain dari execution context dan hoisting 

nah kalo misalkan kalian mau lebih detil lagi melihat context executionnya 
itu kalian bisa kunjungi sebuah website 

kalian google saja javascript visualizer 
nah biasanya saya pakai dari python tutor 

untuk mengentahui visualisasi bagaimana javascript mengeksekusi code progam kita 

kalo misalkan saya copy yang code diatas itu ya 

saya pindahkan kewebsitenya lalu saya klik visualisasi 
nah nanti ada visualisasinya 

nah ini kita bisa lihat step by step dari bagaimana javascript menjalankan code progam kita 

kalo warna hijau panahnya barisnya sudah dieksekusi
kalo warna merah akan dieksekusi 

nah sekarang kita fokus dibagian functionnya disini

*/

// var nama = 'muiz'
// var umur = 18

// console.log(sayHallo())
// function sayHallo (){
//     return `hallo nama saya ${nama}, saya ${umur} tahun`
// }

/* 

tadi kan divisualizernya pada saat masuk menjalankan function itu seolah olah dia menjalankan execution contextnya sendiri

jadi kalo ketemu function executionnya udah tidak global lagi 

nah kalo ketemu function dia seolah olah membuat local execution context gitu 

yang didalamnya sama terdapat juga creation dan execution phase

nah bedanya kalo local execution context itu selain kita bisa akses window kita juga punya akses ke yang namanya arguments

ada object arguments yang nantinya bisa  berisi apapun yang kita masukkan didalam argumentnya 

dan didalamnya ada hoisting juga 
jadi hoistingnya local dia akan mengecheck didalam functionnya ada variable gak? kalo ada naikin keatas 

atau didalam function ada function lagi gak?
nah nanti dia juga melakukan hoisting

kalo ada variable isi dulu dengan undefined pada phase creation 
kalo sudah execution baru diisi dengan nilainya 


oke ya kalo misalkan kalian bingung kita coba pakai kasus
*/

// var nama = 'muiz'
// var username = '@muizzuddin332'

// function cetakUrl (username){
//     var instagramUrl = 'https:instagram.com/';
//     return instagramUrl + username
// }
// console.log(cetakUrl(username))

/* 
coba kita lihat dulu hasilnya 

nah sip ya kelihatannya tidak aneh
tapi gimana kalo coba kita telusuri pakai visualizer tadi

sebelum progamnnya dijalankan creation phasenya sudah dijalankan dulu dihoisting dulu

nama dan username diisi dengan undefines dan cetakUrl diisi dengan function

kalo kita klik next maka baris satu akan dijalankan 
nama diisi dengan muiz

next lagi baris dua dijalankan instagram diisi dengan @muizzuddin332

functionnya diskip langsung dipanggil nama functionnya 

begitu saya jalanin dia akan memanggil functionnyakan
nah ini kita akan masuk kedalam local execution context

kalo kita next tuh ada execution context baru namanya cetakUrl 

username diisi dengan @muizzuddin
lalu instagramUrl diisi dengan undefined

kalo kita next lagi baru diisi instagramUrl dengan https://instagram.com/
sekarang kereturn

next lagi jalanin console.lognya 
next lagi tampil kelayar begitu ya 

jadi intinya setiap function dipanggil maka akan membuat execution context baru yang local tadi 
dan ditambahkan istilahnya itu execution stage atau tumpukan execution

nah kalo selesai dijalankan maka execution context yang localnya akan dihilangkan dari tumpukannya 
oke mudah mudahan kalian paham nih 

atau biar lebih jelas kita kasih kasus lagi nih

misalkan sekarang saya punya 3 buah function

*/

// function a(){
//     console.log('ini a')
//     function b(){
//         console.log('ini b')
//         function c(){
//             console.log('ini c')
//         }
//         c()
//     }
//     b()
// }
// a()


/* jadi kalian harus paham ini ada function didalam function

karena ini dasar banget ketika nanti kalian mau paham mengenai closure

nah sekarang kita jalanin functionnya 

coba kira kira tanpa kalian jalankan lihat saja codingannya 
kira kira tampilnya apa ?

a b c atau c b a ?

coba kita lihat ya 
nah tampilnya a b c ya kelihatannya tidak ada masalah

tapi coba kita telusuri menggunakan javascript visualizer 

yang pertama kita melakukan hoisting dulu
function a diisi dengan semua yang ada didalam function a

ya baru kita next jalankan function a nya 
nah kita akan masuk kedalam function a nya dan sebelum menjalankan progamnya kita hoisting dulu

hoistingny mana ? b diisi dengan isi dari function b 
kalo sudah kita next

baru kita jalankan yang console.lognya 
tampil kelayar ini a 

next kita jalankan yang b 
kita akan masuk kedalam function b kemudian hoisting dulu c diisi dengan isi function c 

next lagi jalanin console.log nya 

lalu next jalanin c 
kita masuk kedalam function c lalu hoisting lagi ada variable gak? tidak ada
ada function gak? tidak ada 

nah baru jalanin console.lognya 

sampai disini apakah selesai?
nah sekarang sampai disini yang selesai baru c 

kan kita ada didalam c nih
kalo c selesai kita next c akan hilang tuh dari tumpulan executionnya 

kita next lagi b selesai b akan hilang 
dan yang terakhir a selesai 

gitu ya jadi ini maksutnya ada tumpukan eksekusi lalu kalo sudah beres hilang dari tumpukan eksekusinya 

mudah mudahan sampai disini paham ya 



nah sekarang kita kembali ke codingan instagram

*/

// var nama = 'muiz'
// var username = '@muizzuddin332'

// function cetakUrl (username){
//     var instagramUrl = 'https:instagram.com/';
//     return instagramUrl + username
// }
// console.log(cetakUrl(username))

/* 
nah sekarang ini coba saya ubah progamnya saya tuli sekarang begini 

*/

// var nama = 'muiz'
// var username = '@muizzuddin332'

// function cetakUrl (username){
//     var instagramUrl = 'https:instagram.com/';
//     return instagramUrl + username
// }
// console.log(cetakUrl('@husain'));

/* 
coba kira kira yang tampil apa?
tetep @muizzuddin atau @husain

kalo saya jalanin dia berubah menjadi @husain
padahal username ini diisi dengan @muizzuddin

nah ini karena scope ya 
begitu kita nulis didalam argumentnya lalu datanya dikirimkan keparameter 
maka username yang ada didalam function itu ngambilnya yang argumentnya 

makanya tulisannya menjadi @husain
jadi usernamenya dia mengechek dulu argument bukan

sekarang coba kalo misalkan saya hapus argumentnya 


*/
// var nama = 'muiz'
// var username = '@muizzuddin332'

// function cetakUrl (){
//     var instagramUrl = 'https:instagram.com/';
//     return instagramUrl + username
// }
// console.log(cetakUrl('@husain'));

/* 
nah tampilnya apa kira kira?
tetap @hasan atau balik lagi @muizzuddin ?

nah ini kalo saya jalankan balik lagi jadi @muizzuddin
kenapa? ini @husain dikirimkan keargument menuju parameter 

tapi diparameternya tidak ada yang menangkap argumentnya 
nah nanti dia akan masuk kedalam object arguments nanti kita lihat deh 

nah tapi didalam functionnya ada tulisan username 
kalo disini kalian menulis variable yang pertama dia chec adalah variable local dulu ada gak?

ternyata tidak ada
kalo gak ada dia check ke argumentnya ada gak? tidak ada juga

kalo gak ada difunctionnya dia akan melihat keluar 
diglobal ada gak?  oh ternyata diglobal ada makanya dia pakai yang globalnya 

kalo misalkan diglobal tidak ada gimana? nah kalo tidak ada dia akan menampilkan eror 

nah tadi pertanyaannya @husainnya kemana?
nah ternyata dia masuk kesebuah object yang namanya arguments


*/
// var nama = 'muiz'
// var username = '@muizzuddin332'

// function cetakUrl (){
//     console.log(arguments[0])
//     var instagramUrl = 'https:instagram.com/';
//     return instagramUrl + username
// }
// console.log(cetakUrl('@husain'));

/* 
kalo saya jalanin tuh ada ya dia ada diindex ke 0

jadi kalo saya tulis arguments[0] dia tampil tuh
jadi tidak hilang @husainnya 

jadi bisa dipergunakan meskipun kalian tidak tangkap diparameternya 

mudah mudahan sampai disini paham ya 

dan untuk memastikan kalian paham atau tidak saya kasih satu latihan terakhir 



*/

function satu(){
    var nama = 'muiz'
    console.log(nama)
}

function dua(){
    console.log(nama)
}

console.log(nama)
var nama = 'husain'
satu()
dua('hasan')
console.log(nama)

/* 

tidak usah dijalanin dulu ya 
terus lihat codingannya kira kira yang akan tampil dilayar apa? 


dengan menggunakan konsep yang sudah kita pelajari tadi execution context hoisting dan scope

harusnya kalian sudah bisa paham ini ya 
sekarang coba jalanin 

hasilnya sama gak dengan tebakan kalian?

coba kita lihat

kita punya dua buah function dan satu variable 
nah pasti yang dilakukan creating phase dulu ya 


hoisting dulu 3 hal ini kalo sudah kalo sudah kita masuk ke exsecution phase 

console.log nama , nama tadi isinya apa?
baru masuk ke nama diisi dengan 'muiz'

lalu jalanin satu() dan dihoisting dulu karena ini local execution context
jalanin executionnya dan hilangkan stage executionnya 


sekarang function dua dengan mengirimkan parameter hasan
masuk sini argumentnya tidak ditangkap tidak argumentnya diabaikan

lalu hoisting gak? tidak ya 
terus console.log nama 

dicheck dulu ada gak variable nama dilocalnya? tidak lalu cari diargumentnya tidak ada 
kemudian dia keluar cari diglobal scope nah ada ya 

lalu hilang dari tumpukan eksekusinya 
lalu console.log nama 

nama ngambil dari mana? ya jelas dari global ya 

begitu ya mudah mudahan kalian paham 

oke ya jadi itu tadi kita sudah pelajari mengenai keunikan atau keanehan dari javascript yang disebut dengan execution context hoisting dan scope 

dan ini akan menjadi dasar kita untuk materi selanjutnya kita akan membahas mengenai closure 

oke ya sampai disini dulu materinya 
kita akan ketemu lagi dimateri berikutnya 

dan sepeti biasa jangan lupa titik koma ;  */

