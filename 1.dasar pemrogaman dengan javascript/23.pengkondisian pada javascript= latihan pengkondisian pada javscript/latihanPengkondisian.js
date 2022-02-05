/* latihan pengkondisian pada javascript

dimateri kali ini kita akan melanjutkan latihan kita mengenai kasus kita yaitu juragan angkot 

dimana kalo kalian inget dimateri sebelumnya kali kalian inget itu kita diminta untuk membuat file namanya angkot4.js 

ini melanjutkan kasus kita dari angkot3.js dimana kalo kalian lihat kita masih punya 10 angkot 

angkot 1 sampai 6 itu beropraisi dengan baik 
angkot 7 sampai 10 itu yang tadinya rusak sekarang angkot no 8 itu ceritanya suda tidak rusak lagi sudah keluar dari bengkel begitu 

karena angkot no 8 itu sudah lama tidak bejalan ceritanya begitu ya maka dia harus melakukan lembur jadi pesan yang ingin saya sampaikan diangkot4.js ini adalah seperti ini

Angkot No. 1 beropasi dengan baik.
Angkot No. 2 beropasi dengan baik.
Angkot No. 3 beropasi dengan baik.
Angkot No. 4 beropasi dengan baik.
Angkot No. 5 beropasi dengan baik.
Angkot No. 6 beropasi dengan baik.
Angkot No. 7 sedang tidak beroprasi.
Angkot No. 8 sedang lambur.
Angkot No. 9 sedang tidak beroprasi.
Angkot No. 10 sedang tidak beroprasi.


nah ini kalian memodifikasi angkot3.js dengan menambahkan keyword else if 

gimana pasti sudah pada mengerjakankan ?

kalo gitu kita buka hasil yang sudah kalian kerjakan lalu coba kita sama kan ya

jadi sebetulnya gampang saja kalo kalian sudah mempelajari materi sebelumnya 

itu kalian pasti tahu kita tinggal menambahkan disini else if dibawah if




*/

// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if(noAngkot <= angkotBeroprasi) {

//         console.log('Angkot No. ' + noAngkot + ' beropasi dengan baik.');

//     }else if(noAngkot === 8){

//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');

//     }else{

//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');

//     }
// }

/* sekarang didalam else if ini itu kita masukkan kondisi 

nah kondisinya apa?

kita tahu bahwa didalam else itu menangani angkot 7 sampai 10
sedangkan if itu menangani angkot 1 sampai 6

nah sekarang saya tinggal check dikondisi else if

jika noAngkot nya itu sama dengan 8 maka begitu ketemu angkot no 8 maka pesannya beda 
pesannya apa angkot no 8 sedang lembur 

kalo misalkan masih bingung lakukan saja tabel penelusuran ya 
telusuri satu persatu setiap loopingnya

kalo kita check dari atas 

ketika variable noAngkot diisi 1 kita check apakah 1 itu lebih kecil dari jmlAngkot 10 ?

hasilnya true maka dia masuk ke pengulangan \

sekarang kita check noAngkot sekarang kondisinya sedang angka 1 

apakah 1 lebih kecil sama dengan 6? 

true ya berarti aksi yang ada didalam if yang akan dikerjakan 


nah begitu if dikerjakan maka else if dan else tidak perlu dikerjakan maka dia langsung keluar dari pengkondisianya 

paham ya

lalu pengulangannya berlanjut lagi 

sekarang noAngkot++ 

apakah 2 lebih kecil 10?
true masuk lagi apakah 2 lebih kecil sama dengan 6?

true lakukan aksinya 

berulang terus sampai noAngkotnya berapa?
7 ya 

sekarang noAngkotnya 7

apakah 7 lebih kecil sama dengan 10?
true kalo true masuk ke pengulangannya sekarang 

check di if apakah 7 lebih kecil sama dengan 6 ?

berarti dia keluar mencari kondisi yang bernilai true atau masuk kebawahnya if dan mengecheck kondisinya 

apakah 7 sama dengan 8 ?
false maka otomatis dia masuk ke else 

maka tampilnya angkot no 7 sedang tidak beroprasi  begitu

sekarang keluar lagi dari pengkondisiannya 

noAngkot++ lagi sekarang noAngkotnya 8 

apakah 8 lebih kecil sama dengan 10? 

true masuk pengulangan 

apakah 8 lebih kecil sama dengan 6?
false tidak dikerjakan aksinya

apakah 8 sama dengan 8?
true maka kerjakan aksi yang ada didalam else if 

setelah itu dikerjakan elsenya tidak perlu dikerjakan karena else itu selain dari kondisi yang ada didalam if dal else if

atau dalam satu statement

dia keluar lagi dari pengkondisian angkotnya ++ lagi jadi 9 lalu masuk lagi kepengulangan begitu paham ya 

coba kita jalankan 



kalian lihat satu sampai 6 beroprasi dengan baik 
7 tidak beroprasi 
8 sedang lembur
9 10 sedang tidak beroprasi 

gimana kira kira source code kita sama gak?

nah kita bisa melakukan seperti ini

jadi ada if ada else if ada else 

kalo else tidak perlu pakai kondisi

else itu artinya selain dari kondisi diatas masuk kedalam else 

sampai sini paham ya


kalo sudah paham gimana kalo kita tambah lagi komplexsitas dari kasus kita supaya lebih komplex lagi 


sekarang buat file namanya angko5.js ceritanya 
sekarang angkot no 10 juga selesai diperbaiki jadi sudah tidak rusak lagi

keluar dari bengkel dan dia juga sama melakukan lembur juga 

jadi sekarang pesan yang ditampilkan simple saja 

Angkot No. 1 beroprasi dengan baik.
Angkot No. 2 beroprasi dengan baik.
Angkot No. 3 beroprasi dengan baik.
Angkot No. 4 beroprasi dengan baik.
Angkot No. 5 beroprasi dengan baik.
Angkot No. 6 beroprasi dengan baik.
Angkot No. 7 sedang tidak beroprasi.
Angkot No. 8 sedang lembur.
Angkot No. 9 sedang tidak beroprasi.
Angkot No. 10 sedang lembur.

angkot 1 sampai 6 beroprasi dengan baik 
7 rusak 
8 lembur
9 rusak
10 lembur

nah kita kita gimana kodingnya?

kalian kerjakan dulu nanti kita kerjakan sama sama setelah ini 

oke silahkan 



sudah ya gimana kalo kita samakan 

sebetulnya ada beberapa cara untuk melakukan ini 

ini kalo kalian ingin menyelesaikan sebuah persoalan itu jawabannya tidak cuma satu bisa saja ada kemungkinan banyak 

ya tapi nanti kita lihat mana yang lebih efektif daripada yang lain 


misalnya salah satu jawabannya gini 

kalian bisa saja menambahkan satu kondisi else if lagi dibawah else if yang pertama contohnya begini 


*/

// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot += 1) {

//     if(noAngkot <= angkotBeroprasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
//     }else if(noAngkot === 8) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     }else if(noAngkot === jmlAngkot) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     }else{
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
//     }
// }

/* gimana? a apakah anda melakukan ini tidak?

kalo kalian melakukan ini tidak salah ya 
jadi kalian bisa saja masukkan kondisinya noAngkot sama dengan jmlAngkot 

ini juga betul 

kalo saya jalankan 

betul ya 8 dan 10 sedang lembur 

nah tapi ada yang lebih efektif dari kode yang kita buat tadi

jadi caranya gini 

kita bisa saja menggunakan hanya satu buah else if saja 

ya jadi kita tidak perlu dua buah else if 

saya bisa menambahkan

jadi kita bisa menambahkan operator logika didalam kondisinya  

selama kondisinya secara keseluaruhan nanti menghasilkan nilai boolean true atau false 



*/
// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot += 1) {

//     if(noAngkot <= angkotBeroprasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
//     }else if((noAngkot === 8) || (noAngkot === jmlAngkot)) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     }else{
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
//     }
// }


/* ya dielse if saya bisa menambahkan operator logika, operator logikanya apa?

operator logika itukan AND OR dan NOT 

jadi saya bosa tambahkan kayak gini 

jika noAngkotnya sama dengan 8 atau noAngkotnya sama dengan jmlAngkot gitu 

jadi kalo noAngkotnya 8 atau 10 jadi dia lembur 

ini kalo kita lihat hasilnya saya save lalu refresh

hasilnya akan sama persis seprti kita membuat dua buah else if paham gak?

nah ati ati penggunaan operatornya kalo misalkan kita menggunakan dan

ini akan salah logikanya akan salah

inikan bacanya jika noAngkotnya sama dengan 8 dan noAngkotnya sama dengan 10 
jadi tidak mungkin ada angkot yang nomornya dua tidak mungkin 

nah ini kalo saya jalan kan kembali kekeadaan awal 

jadi kondisi ketika noAngkotnya 8 dan 10 itu tidak akan pernah tercapai

makanya kita disini menggunakan or

atau gini deh biar paham kita tambah satu kasus lagi 

sekarang buat file namanya angkot6.js kalo tadi angkot no 7 sampai 10 tadinya kan rusak ya 
terus dia selesai diperbaiki dibengkel terus karena dia sudah lama tidak narik ya maka dia lembur

nah sekarang angkot no 5 yang sebelumnya  sebetulnya berjalan dengan normal ya misalnya karena dia ingin mendapatkan penghasilan tambahan maka dia lembur juga


jadi sekarang pesannya no 5 jadi lembur juga 

nah ini gimana kita kira silahkan kalian modifikasi supaya menampilakn pesan seperti itu 

ya silahkan dikerjakan dulu 

nanti kalo sudah selesai kita lanjutkan lagi untuk mengerjakannya sama sama 



oke sudah ya 

nah sekarang kira kira gimana mungkin diantara kalian ada yang bilang 
wah gampang saja tinggal tambahkan lagi or dikondisi else if ini

kita coba 
kita tambahkan dielse if or if lagi




*/

// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot += 1) {

//     if(noAngkot <= angkotBeroprasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
//     }else if((noAngkot === 8) || (noAngkot === jmlAngkot) || (noAngkot === 5)) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     }else{
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
//     }
// }


/* kalo angkotnya no 8 atau angkotnya no 10 atau angkotnya no 5 maka dia lagi lembur 

logikanya gitu ya 

kita lihat hasilnya 
kita referesh kit jalankan 

hasilnya seperti itu 

ternyata angkot no 5 tetap beroprasi dengan baik tidak berubah menjadi sedang lembur 

nah ini kenapa kira kira ?

ada gak yang mengalami seperti ini?

kalo ada coba kita telusuri 

inikan kelihatannya sudah bener ya 

kalo misalkan angkotnya 
lebih kecil dari 6 tampilkan seperti ini

kalo angkotnya no 8 atau 10 atau 5 tampilkan sedang lembur

tapi kenapa no 5 nya tidak tampil

nah coba kita telusuri
 
kalo misalkan no angkotnya 1 ya kita mulai dari atas apakah 1 lebih kecil dari 10? true 

masuk ke pengkondisian
apakah 1 lebih kecil dari 6? true cetak bahwa angkot no 1 beroprasi dengan baik

bener ya habis itu keluar

balik lagi no angkotnya 2 3 4 sama semua begitu no angkotnya 5

apakah 5 lebih kecil dari 10? true

masuk ke pengkondisian 
apakah 5 lebih kecil sama dengan 6? true maka angkot beroprasi yang akan dikerjakan 

setelah itu dikerjakan kemana dia? 
langsung keluar dari pengkondisiannya 

jadi else if yang kondisinya atau noAngkot sama dengan 5 tidak akan pernah dikerjakan 

nah terus bagaimana dong supaya angkot no 5 menampilkan pesan sedang lembur? 

gimana? nah berarti kita harus cari cara supaya angkot no 5 itu tidak masuk ke kondisi yang pertama ini yang if ini

nah itu gimana? kita bisa menambahkan operator logika 

yang didalam if kan bacanya jika noAngkotnya lebih kecil sama dengan 6 
artinya berapa 1 2 3 4 5 6 berarti 5 masuk ke sini

supaya 5 tidak masuk ke sini 

kalo angkotnya lebih kecil dari 6 dan dia tidak sama dengan 5



*/

var jmlAngkot = 10;
var angkotBeroprasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot += 1) {

    if(noAngkot <= angkotBeroprasi &&  noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
    }else if((noAngkot === 8) || (noAngkot === jmlAngkot) || (noAngkot === 5)) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
    }
}


/* gimana paham gak?

kalo angkotnya lebih kecil dari 6 dan dia tidak sama dengan 5 / bukan 5 maka tampilkan angkot beroprai dengan baik.

jadi jika noAngkotnya 5 
apakah 5 lebih kecil sama dengan 6? true

masuk ke pengkondisian

apakah 5 lebih kecil dari 6 dan apakah 5 tidak sama dengan 5?

nah disini false ya karena 5 sama dengan 5 

jadi kalo misalkan kalian menggunakan operator dan dua duanya itu harus bernilai true supaya seluruh kondisinya true 

kalo ada satu saja yang false maka seluruh kondisinya jadi false 
maka kalo false aksinya tidak akan dikerjakan 

beda dengan or kalo or salah satu saja bernilai true 
maka seluruh kondisi ini bernilai true

maka kalo ada salah satu saja bernilai true aksinya akan dikerjakan 

kalo ini saya save kembali kebrowsernya 

kalian lihat no 5 sekarang sedang lembur 

begitu ya mudah mudahan kalian paham bagaimana memasukkan kondisi yang komplex kedalam kondisi if dan else if 

oke baik jadi itu mungkin latihannya 
mudah mudahan kalian tambah paham mengenai pengkondisian atau percabangan ini sebelum nantinya kita masuk ke topik yang berikutnya 

ketika ketemu lagi dimateri berikutnya 
dan satu lagi jangan lupa titik koma ; */