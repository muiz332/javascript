/* pengulangan dan pengkondisian bersarang

kita masih ada ditutorial dasar pemrogaman menggunakan javascript

oke ya jadi kalo kalian mengikuti materi ini dari awal saya yakin sekarang kalian sudah paham betul mengenai struktur kendali atau control flow yang ada pada pemrogaman khususnya pada javascript

nah dimateri ini kita akan membahas mengenai pengulangan dan pengkondisian tapi sedikit lebih komplex 

dimana nantinya kita akan mencoba membuat pengulangan dan pengkondisiannya tersebut istilahnya bersarang begitu ya 

misalnya nanti kita menyimpan pengkonisian didalam pengulangan atau sebaliknya 
atau menyimpan pengulangan didalam pengulangan lagi 

karena jika nantinya kalian membuat progam atau aplikasi didunia nyata hal ini pasti akan terjadi 
ya jadi kalian harus paham betul mengenai perilaku dari pengulangan dan pengkondisian ini

anggapp saja dimateri ini kita akan latihan untuk lebih mengasah lagi pemahaman kalian 

oke kita langsung aja lihat contohnya ya 

misalnya saya kaliah sebuah pertanyaan gimana jika saya ingin mencetak lima buah bintang seperti ini
*****

kesalam console javascript saya 

mungkin diantara kalian ada yang menjawab langsung saja console.log


*/

// console.log('*****');

/* begini gitu ya 
jadi kita bisa mencetak langsung menggunakan console.log seperti ini 

kalo kita lihat hasilnya 
kita lihat consolenya lalu jalankan 

nah kalian bisa lihat ya tampilnya bintangnya ada 5

tapi kan kita sudah belajar mengenai pengulangan 
jadi gimana kalo kita pergunakan pengulangan untuk mengulang bintangnya, tidak langsung seperti itu ya 

ya jadi gini

saya punya pengulangan 
kita pakai for saja ya 
lalu misalnya biar simple kita gunakan var i gitu ya sebagai indexnya kita set nilai awalnya dengan 0 

lalu i nya lebih kecil dari 5
lalu incrementnya  i++


*/

// for(var i = 0; i < 5; i++) {
//     console.log('*')
// }

/* lalu didalamnya kita tulis console.log yang isinya bintang

kita save kita lihat hasilnya 

nah ternyata hasilnya tidak seperti itu 
betul bintangnya dicetak sebanyak 5 kali ya karena console.lognya diulang sebanyak 5 kali tapi dia tidak tertulis ke sebelah kanan 

supaya tertulis kesebelah kanan gimana? 

gimana kalo kita buat sebuah variable kosong yang nanti isinya itu kita menambahkan string bintang penggunakan operator konkatenasi atau + 

jadi caranya gini 
misalkan sebelum pengulangannya saya punya variable s kita isi dengan string kosong 

nanti stringnya kita rangkai didalam pengulangannya 


*/

var s = '';

for(var i = 0; i < 5; i++) {
    s += '*'
}



/* saya punya variable s yang dijumlahkan dan diisi dengan string bintang 
ya kalian masih ingat += ini sama saja dengan begini ya

s = s + '*';

saya sederhanakan menjadi seperti yang atas ini 
jadi sama saja 
paham ya 

kalo saya jalankan 
nah ini belum tampil apa apa karena kita belum tampilkan 
jadi diluar fornya kita tuls console.lognya yang isinya s

*/

// var s = '';

// for(var i = 0; i < 5; i++) {
//     s += '*'
// }
// console.log(s)

/* sekarang save kita jalankan 
nah tampil sekarang bintangnya ada 5 paham ya 

kalo misalkan pengen bintangnya ada 10 gimana? ganti saja angka 5 nya menjadi angka 10 
nanti hasilnya akan ada 10 

oke jadi begitu ya caranya 

sekarang gimana kalo bintangnya saya tidak mau ke sebelah kanan tapi dia turun kebawah 

jadi setiap setelah mencetak bintang kita turun satu baris gimana?

tingga kita tambahkan 
s += apa?

karakter dijavascript untuk membuat baris baru masih inget yaitu \n 

*/

// var s = '';

// for(var i = 0; i < 10; i++) {
//     s += '*'
//     s += '\n'
// }
// console.log(s)

/* jadi setelah cetak bintang cetak \n 

jadi hasilnya kebawah semua 

sekarang gimana kalo setiap barisnya saya pengen bintangnya 5 

jadi ada 10 baris tiap tiap barisnya ada 5 bintang 
nah gampang tinggal tulis saja bintangnya jadi 5

tapi saya tidak mau seperti itu gimana kalo kita ganti baris ini menjadi pengulangan juga 

ya jadi ada pengulangan untuk mengulang baris 
ada pengulangan lagi untuk mengulang berapa bintang yang ingin kita cetak dalam baris tertentu ya 

kalo misalkan kalian yang sudah tahu duluan silahkan kerjakan nanti hasilnya sama tidak dengan saya 




*/


// var s = '';

// for(var i = 0; i < 10; i++) {
    
//     for( var j = 0; j < 5; j++){
//         s += '*'
//     }

//     s += '\n'
// }
// console.log(s)


/* kita tulis for lagi jadi saya punya pengulangan lagi lalu saya punya variable baru ya
jangan menggunakan i karena i sudah kita gunakan untuk baris 

misalkan kita gunakan j saja yang kita isi dengan 0 
misalkan j nya lebih kecil dari berapa?

kita pengen tiap barisnya ada 5 bintang jadi kita isi dengan 5 ya lalu increment j++\

lalu didalamnya baru kita tulis s += '*';

kalo untuk \n tetap disini atau kita pindahkan didalamnya bersama s += '*' ?

coba kita jalankan dulu saja 
nah ternyata hasilnya sudah betul 

ya jadi setiap 5 bintang keluar dari loopnya lalu turun satu baris  

kalo kalian masih bingung dengan ini silahkan gunakan tabel penelusuran atau table trace ya 
kalo lupa lihat saja dibeberapa mater sebelum ini


kalo sekarang gini saya ingin 7 baris tiap tiap barisnya ada 10 bintang 

7 baris gimana berarti yang kita ganti j atau i 
i ya ini diganti dengan 7 

j nya saya ingin tiap barisnya ada 10 ganti dengan 10 

lalu jalankan 

sekarang jadi saya punya barisnya 7 tiap tiap barisnya ada 10 bintang 

nah sekarang coba kita bikin kasusnya makin komplex lagi 

gimana kalo saya ingin baris pertama bintangnya 1 baris ke dua bintangnya 2 baris ke tiga bintangnya  3 dan seterusnya sampai baris ke n bintangnya n

jadi hasilnya gini
*
**
***
****

dan seterusnya 

nah kira kira gimana?

kalo misalkan saya ingin 5 baris saja berartikan i nya diganti 5

sekarang kalo baris pertama bintangnya 1 


*/

// var s = '';

// for(var i = 0; i <= 5; i++){

//     for(var  j = 0; j < 2; j++){
//         s += '*'
//     }
//     s += '\n'
// }

// console.log(s)

/* kalo saya refresh 
nah maka akan 1 bintang semua 

nah saya ingin baris pertama 1 baris ke dua 2 

maka apa yang harus digamti?

kalo kalian jeli jumlah bintang yang ada tiap baris itu sesuai dengan nomor barisnya ya 

jadi baris ke 10 bintangya ada berapa?
ya 10 

nah kenapa tidak kita ganti saja angka 2 ini dengan nomor barisnya yaitu i

*/

// var s = '';

// for(var i = 0; i <= 5; i++){

//     for(var  j = 0; j < i; j++){
//         s += '*'
//     }
//     s += '\n'
// }

// console.log(s)


/* kalo saya refresh 
itu hasilnya baris pertama kosong 
nah kenapa kira kira ya?

coba kita telusuri 

i sama dengan 0 
lalu kita check

apakah 0 lebih kecil 5? true 
jalankan aksinya

masuk ke for 
j sama dengan 0 
apakah 0 lebih kecil 0? false 

nah jadi aksinya tidak dikerjakan 
maka betul baris pertama itu kosong 

setelah itu karena false maka keluar dari pengulangannya dan menjalankan aksi yang selanjutnya yaitu
s += '\n';

makanya setelah baris pertama kosong itu langusng turun satu baris 
berarti ada yang salah ini 

gimana kalo kita kasih sama dengan 

*/
// var s = '';

// for(var i = 0; i <= 5; i++) {

//     for(var j = 0; j <= i; j++){
//         s += '*'
//     }

//     s += '\n'
// }

// console.log(s)

/* supaya pada saat j lebih kecil sama dengan 0 

apakah 0 lebih kecil sama dengan 0? 
nah baru true nilainya 

lalu diincrement apakah 1 lebih kecil sama dengan 0? false 
maka munculnya baris pertama adalah 1 

coba kita jalankan

nah benerkan baris kesatu 1 baris kedua 2 baris kelima ada 5 bintang 

kalo ita ganti barisnya menjadi 15 
nah maka baris terakhirnya ada 15

gitu ya jadi kalo misalkan kalian ingin mendapatkan hasil seperti ini 

kalian punya dua buah loop didalamnya 

ya jadi nanti kalian bisa memodifikasi bentuk ini menjadi bentuk bentuk yang lainnya 

misalkan kalian 

pengen balik segitiganya 

jadi yang banyak itu diatas dan yang sedikit itu dibawah 

misalkan seperti ini 
*****
****
***
**
*

nah gimana coba kira kira? 

saya ingin ada 10 baris tapi bintangya terbalik berarti kita harus melakukan pengulangannya mundur 

jadi dibaris pertama itu i nya sama dengan 10 karena pengulangannya mundur 
selama i nya lebih besar dari 0 

ya sekali lagi kalo bingung lakukan penelusuran menggunakan tabel trace 

awalnya i sama dengan 10 
selama i lebih besar dari 0 lakukan aksi

lalu kita mundur ati ati jangan menggunakan i++ disinya kita ganti jadi i-- supaya mundur 

kalo pakai i++ nanti kalian masuk ke infinity loop pengulangan tanpa batas 

*/
// var s = '';

// for(var i = 10; i > 0; i--) {

//     for(var j = 0; j <= i; j++){
//         s += '*'
//     }

//     s += '\n'
// }

// console.log(s)

/* nah lihat hasilnya sudah betul berkurang kebawah tapi akhirnya tidak 1 

coba baris pertama bintangya berapa nih ?
ada 11 nah ini kelebihan gimana supaya baris pertama 10 

coba kita telusuri 

i sama dengan 10
apakah i lebih besar sama dengan 0? true 

j sama dengan 0 
apakah 0 lebih kecil sama dengan 10? true 
lalu cetak bintang 

setelah itu j++ 
j nya jadi 1 

apakah 1 lebih kecil sama dengan 10?true 
kita mulainya dari 0 

terus sampai berapa? 10 / 11 dia keluar?

kalo 10 bagaimana?
apakah 10 lebih kecil sama dengan 10?true 
nah ini ati ati sekarang justru kita tidak butuh sama dengannya karena kita mulainya dari 0 

supaya dia hanya mengulangan sebanya 10 kali


*/

var s = '';

for(var i = 10; i > 0; i--) {

    for(var j = 0; j < i; j++){
        s += '*'
    }

    s += '\n'
}

console.log(s)

/* coba kita refresh dan jalankan 

nah sekarang baru betul 

ya jadi kalian harus pinter pinter menggunakan kondisi yang ada didalam pengulangannya 
begitu ya 

jadi kalian bisa coba coba saja untuk menampilkan bentuk segitiga atau bentuk bentuk lain yang menarik ya untuk melatih pemahaman kalian mengenai pengulangan dan pengkondisian 

misalnya kalian bisa membuat segitiganya terbalik seperti ini 
**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *

atau kita gabungkan dua segitiga jadi seperti ini 

*
**
***
****
*****
******
*******
********
*********
**********
*********
********
*******
******
*****
****
***
**
*


atau bahkan kita bisa bikin segitiga sama kaki

     *
    ***
  *******
 *********


dan kalo digabungkan segitiganya misalkan jadi seperti ini ya belah ketupat 

     *
    ***
  *******
 *********
  *******
   *****
    ***
     *

nah itu silahkan kalian coba coba saja untuk mendapatkan hasil hasil yang menarik seperti ini 

nah ini bisa saja nanti kalian  punya banyak for didalamnya bisa 4 misalnya atua bahkan nantinya didalam fornya itu ada ifnya gitu ya 

jadi dia ngecheck nih kalo barisnya genap misalkan apa yang harus dilakukan 
kalo barisnya ganjil apa yang harus dilakukan 

atau contoh simpe yang lainnya saja seperti ini ya jadi kita bisa punya ceritannya ini saya sebutnya papan catur ya 

simple saja kalian menmpilkan sekarang bukan bintang tapi tanda pagar # 

pagar spasi pagar spasi pagar spasi dan seterusnya 
tapi dibaris selanjutnya dibalik 

spasi pagar spasi pagar 

# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # 
# # # # # 
 # # # # # 
# # # # #

itu contoh lain penggunaan dari pengulangan dan pengkonsidian yang bersarang 

atau ada contoh lain nih untuk menampilkan rangkaian lain yang disebut dengan segitiga pascal 

kalian lihat nih
jadi gimana caranya menampilkan sebuah urutan angka seperti ini ya tapi ini ada maknanya

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

jadi ceritannya mejumlahkan dua angka yang ada diatasnya 

misalkan baris pertama ni 1 karena diatasnya tidak ada angka maka dia 1 

lalu dibaris ke 2 angka 1 karena diatasnya hanya ada 1 maka dia menjumlahkan 1 dengan spasi sebelahnya 
maka 1 dan 1 juga 

tapi lihat yang dibawahnya

angka 1 dibaris 3 itu menjumlahkan 1 dengan spasi kosong lalu angka 2 ini menjumlhkan diatasnya 1 dengan 1 dan seterusnya

kalo kalian lihat dibaris ke lima nih

angka 1 menjumlahkan 1 dengan spasi kosong angka 4 menjumlahkan angka 3 dengan 1 angka 3 dapat dari mana?
menjumlahkan angka 3 dengan 3 

ini yang disebut dengan segitipa pascal 

ini juga sama kalian buatnya menggunakan pengulangan dan pengkonsidian bersarang seperti ini

ya jadi silahkan diasah terus pemahamannya tentang pengulangan dan pengkondisian karena konsep dasar ini bermanfaat untuk kedepannya kalian belajar materi materi yang lain

baik mungkin sampai disini dulu ya materi kali ini mudah mudahan kalian tidak bingung dengan materi yang sudah kita lakukan tadi ya 

kita ketemu lagi materi selanjutnya 
dan satu lagi 

jangan lupa titik koma ; */