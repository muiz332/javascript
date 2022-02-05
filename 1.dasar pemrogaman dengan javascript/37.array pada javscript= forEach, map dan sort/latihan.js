/* array pada javascript: forEach, map dan sort

method selanjutnya yang akan kita coba adalah forEach, map dan sort

ya forEach dan map digunakan untuk melakukan looping pada array 

ya tapi ini lebih keren ya dari pada for biasa 
dengan menggunakan dua method ini kita bisa melakukan sesuatu pada element element yang ada didalam arraynya secara otomatis

nah maksutnya gimana kita lihat 

ya secara umum fungsinya sama seperti for 

1.forEach 

anggap lah gini 
kita punya array baru kita kasih nama angka 

kita kasih angka 1 - 8 begini

*/

// var angka = [1, 2, 3, 4, 5, 6 ,7, 8];


// for(var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }

/* kalo menggunakan for kan kita tulisnya gini ya 

for i sama dengan 0 lalu i lebih kecil dari angka.length lalu i++ 
lalu kita console misalnya angka index ke i

maka nanti hasilnya satu sampai delapan tampil 
nah sekarang for ini kita bisa gantikan dengan forEach

cara nulisnya gini kita panggil dulu arraynya lalu kita kasih forEach 

*/
// angka.forEach(function(e){
//     console.log(e)
// })

/* nah didalamnya kita bisa kasih sebuah function bisa kalian kasih function exspression biar gampang ya 

kalian tulis saja function begini
ini artinya kita akan menjalankan sebuah function untuk  tiap tiap elementnya 

ya misalkan elementnya saya tulis e begini 
terus saya tulis console.log e begitu 

paham gak 
ini maksutnya gini 

sama persis yang kita lakukan di for ini 
kan forEach itu untuk setiap ya 

jadi untuk setiap element yang ada pada array angka lakukan function berikut ini 

nah ini kerennya kita tidak perlu bikin index kita tidak perlu menentukan loopingnya berapa kali

kita tidak perlu increment 
coba kita jalankan 

nah sama persis 
ini lebih simple ya 

jadi kalo kalian masih bingung tentang function exspression ini sebetulnya kita bisa keluarkan jadi function sendiri ya 


*/

// var angka = [1, 2, 3, 4, 5, 6 ,7, 8];

// var cetak = function(e){
//     console.log(e)
// }

// inikan function exspression tinggal kita masukkan 

// angka.forEach(cetak);

/* kita ganti dengan cetak dan ditulis tanpa menggunakan kurung buka dan tutup 

nah ini sama saja 
hasilnya sama perisi 

tapikan lebih gampang kita masukkan functionnya diforEach sama saja ya hasilnya 

*/

// angka.forEach(function(e){
//     console.log(e);
// })


/* itu kelebihan menggunakan function espression 

berarti sekarang pertannyaannya kita tidak bisa pakai indexnya dong 

kan kalo pakai for kita punya i sebagai index 

nah kalo pakai forEach juga bisa 

contohnya kalo kita punya array yang sama seperti sebelumnya 


*/

// var nama = ['muiz', 'zuddin', 'husain'];

// nama.forEach(function(e, i){
//     console.log('mahasiswa ke- ' + i + ' adalah ' + e);
// })


/* 
kalo saya mau mencetak mahasiswa pertama siapa mahasiswa kedua siapa misalnya ya 
kita bisa tulis begini 

nama titik forEach  lalu function e untuk elementnya lalu kita bisa tambahkan index disini 

jadi sekarang parameternya dua 
lalu saya tulis console seperti diatas ya 

jadi i akan mengacu ke indexnya dan e akan mengacu ke elementnya 
coba jalankan 


kalo ingin mulai dari satu tambahkan i + 1 
gitu ya itu menggunakan forEach



2.map
nah sekarang untuk map, sama seperti forEach tapilebih baik karena map ini mengembalikan array 

sedangkan forEach tidak 
contohya gini 


kalo misakan saya punya array lagi misalkan angka saya isi dengan angka 

terus misakan kita gunakan dulu forEach 

*/

// var angka = [1,5,3,6,8,2];

// angka.forEach(function(e){
//     console.log(e)
// })

/* inikan akan mencetak nilai kelayar sesuai urutannya pada arraynya 

sekarang jika forEach ini saya ganti dengan map 

*/

// var angka = [1,5,3,6,8,2];

// angka.map(function(e){
//     console.log(e)
// })

/* hasilnya sama juga tapi misalkan console.log ini saya ganti return 
lalu seluruh fungsi ini saya simpan kedalam variable baru biar mudah dipahami 



*/

// var angka = [1,5,3,6,8,2];

// var angka2 = angka.map(function(e){
//     return e;
// })

// console.log(angka2.join(' - '))

/* saya punya variable angka baru yang isinya array 
kalo sekarang kita jalankan isinya akan sama persis  dengan angka yang pertama 

tapi saya bisa lakukan gini e * 2

*/

// var angka = [1,5,3,6,8,2];

// var angka2 = angka.map(function(e){
//     return e * 2
// });
// console.log(angka2.join(' - '))

/* nah ini artinya seluruh element atau setiap element pada array angka saya kalikan dengan 2 lalu simpan didalam variable angka2 sebagai array

jadi kalo saya tampikan diconsole maka hasilnya setiap elementnya akan dikali dengan dua 

oke ya jadi map itu mengembalikan nilai array 
kalo kita ganti menjadi forEach 

nah ini tidak mau  karena forEach ini tidak mengembalikan array 

begitu ya jadi hati hati dalam penggunakan forEach dan map ini 




3.sort
method selanjutnya yang akan kita coba adalah sort 

nah ini mungkin dari namanya saja kalian sudah bisa menebak ini untuk mengurutkan isi arraynya 

ya kalo tadi kita punya array yang tidak tersusun seperti ini 

var angka = [1,5,3,6,8,2];

menggunakan sort nanti dia jadi tersusun 
kita coba ya 

kita tulis angka titik sort begini 

*/
// var angka = [1,5,3,6,8,2];
// angka.sort();

// console.log(angka.join(' - '));

/* lalu kita console 
maka hasilnya mengurut 

jadi kalo saya tulis lagi console.lognya sebelum sort



*/

// var angka = [1,5,3,6,8,2];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));

/* yang atas belum diurutkan dan yang bawah sudah diurutkan 

paham ya simple saja 

tapi ati ati kalo misalkan kalian punya 10 lalu 20


*/
// var angka = [1,5, 10,3,6,20,8,2];
// angka.sort()
// console.log(angka.join(' - '));

/* kan harusnya tampilnya 1 2 3 5 6 8 10 20
gitu kan ya 

nah ini ternyata tampilnya begini 

1 - 10 - 2 - 20 - 3 - 5 - 6 - 8

jadinya mengurutkan karakter pertamanya dulu 

kalo kalian mau mengurutkannya yang bener kalian harus tambahkan diargumentnya sebuah function perbandingan angkanya 



*/
// var angka = [1,5, 10,3,6,20,8,2];
// angka.sort(function(a, b){
//     return a - b;
// })
// console.log(angka.join(' - '));

/* jadi kalian tulis a dan b terus didalamnya kalian tulis return a -  b

untuk membuat array ini urutannya bener 

nah lihat sekarang jadi bener tuh

1 - 2 - 3 - 5 - 6 - 8 - 10 - 20

kalo kalian ingin urutannya dari besar ke kecil tinggil ganti saja b - a maka nanti urutannya akan dimulai dari yang terbesar mn uju ke yang terkecil


begitu ya menggunakan sort 

kita lanjutkan pembahasan mengenai method dimateri selanjutnya 


*/

