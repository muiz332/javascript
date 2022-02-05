/* pengkondisian: if else pada javascript 

kali ini kita akan membahas mengenai pengkondisian atau percabangan dan keyword pertama yang akan kita pelajari adalah if 

tapi sebelum kita masuk membahas mengenai if ini kita coba inget inget lagi latihan kita didimateri kita sebelumnya mengenai juragan angkot mudah mudahan temen temen masih inget ya 

jadi ceritanya dimateri sebelumnya kita sudah membuat sebuah file namanya angkot2.js 
dimana kita punya 10 buah angkot yang masing masing angkotnya itu punya nomor ya 

lalu angkot no 1 sampai no 6 itu berjalan dengan baik 
sedangkan angkot 7 sampai 10 itu sedang rusak 

nah kita diminta untuk menampilkan sebuah pesan sederhana kedalam console seperti ini 
Angkot No. 1 beroprasi dengna baik.
Angkot No. 2 beroprasi dengna baik.
Angkot No. 3 beroprasi dengna baik.
Angkot No. 4 beroprasi dengna baik.
Angkot No. 5 beroprasi dengna baik.
Angkot No. 6 sedang tidak beroprasi.
Angkot No. 7 sedang tidak beroprasi.
Angkot No. 8 sedang tidak beroprasi.
Angkot No. 9 sedang tidak beroprasi.
Angkot No. 10 sedang tidak beroprasi.

jadi pesannya ada angkot yang beroprasi dengan baik
ada yang sedang tidak beroprasi 

nah kita sudah lakukan ini dengan menggunakan 2 loop ya 

jadi untuk angkot yang beroprasi dengan baik kita gunakan while
sedangkan untuk angkot yang sedang tidak beroprasi kita sudah bisa menggunakan for 

nah sekarnag gimana kalo misalnya kita ingin menghasilkan hal yang sama persis tapi hanya menggunakan  satu buah loop saja ya dengan menggunakan for misalnya 

nah ini caranya kita membutuhkan pengkondisian didalam fornya 
pengkondisiannya itu bisa kita gunakan keyword if 


dan sekarang kita pelajari dulu bagaimana sintax dasar pemggunaan if ini

jadi sintax dasarnya seperti ini

if(kondisi) {
    aksi
}

kita punya keywprdnya if lalu kita ikuti dengan kurung buka kurung tutup dimana sama seperti for itu didalamnya bisa berisi sebuah ekspresi atau dalam hal ini kita sebut kondisi 

lalu setelah itu ada block kurung kurawal dan didalamnya ada aksi 

nah ini kita akan melakukan aksi ini jika kondisi yang ada didalam kurung itu bernilai true 
sedangkan jika kondisinya bernilai false maka aksi yang ada didalam block kurung kurawal ini tidak akan dikerjakan 

ya langsung keluar dari block if nya 

oke jadi gitu ini sintax sederhananya nanti kita lihat apa saja yang kita bisa simpan didalam kondisi ini lalu aksi apa saja yang kita simpan didalam block ifnya 

contoh sederhananya saya punya script seperti ini 
saya punya variable angka yang saya isi dengan angka 1 

*/

// var angka = 1;
// if(angka === 1) {
//     alert('anda memasukkan angka 1');
// }

/*lalu saya punya sebuah block if yang tulisannya gini 

if angka === 1 ya ini operator perbandingan districk sama dengan atau bisa disebut juga operator identitas 

maka tampilkan popup alert tulisannya anda memasukkan angka 1 

dan ini harusnya sekarnag begitu kita jalankan filenya 
itu akan menampilkan popup alert anda memasukkan angka 1 

paham ya 

jika kita ubah isi dari angka menjadi 2 
lalu dia masuk keblock if ini 

jika angka sama dengan 1 sekarang angka sama dengan 2 ya 

jadi 2 apakah sama dengan 1? 
maka alert ini tidak akan dikerjakan dia langsung keluar dari block ifnya dan menjalankan statement selanjutnya karena tidak ada statement selanjutnya jadi sekarang tidak ada yang tampil 


jadi sekali lagi jika kondisinya tidak sesuai atau kondisinya menghasilkan nilai false maka akan keluar dari blocknya 

nah selanjutnya kita bisa menyimpan macam mcam kondisi disini ya kita juga bisa menggunakan lebih kecil dari misalnya 
nanti menghasilkan alert yang berbeda misalkan seperti ini 

*/

// var angka = 2;
// if(angka < 5) {
//     alert(angka + 'lebih kecil dari 5');
// }

/* kita tetep punya varialbe angka yang diisi dengan 2 lalu kondisinya berubah sekarang 
jika angka lebih kecil dari 5 maka tampilkan alert angka lebih kecil dari 5

jadi nanti angkanya nanti ngambil dari variablenya 
jadi 2 lebih kecil dari 5

kalo angkanya kita ubah jadi 5 gimana ?
jadi kalo angkanya  5 apakah 5 lebih kecil dari 5?
nanti menghasilkan nilai false maka alert ini juga tidak akan dikerjakan 

ya simple saja seperti itu 

atau misalnya ini yang sering digunakan kalo kita mau mengechek apakah sebuah bilangan itu bilangan genap atau bukan 

nah contohnya gini 

*/


// var angka = 2;
// if(angka % 2 === 0) {
//     alert(angka + ' adalah blangan genap');
// }

/* jadi ini bacanya jika angka modulus 2 atau sisa baginya itu sama dengan 0 maka angka tersebut pasti adalah bilangan genap

begitu 
nah sekarnag gimana kalo misalkan nilai angkanya 3 maka tidak akan tampil apa apa ya 

nah kalo kalian ingin mengecheck sebuah angka itu bilangan ganjil juga gimana caranya? 

bisa saja gini
bisa saja kalian punya satu block if lagi gitu 


*/
// var angka = 3;
// if(angka % 2 === 0) {
//     alert(angka + ' adalah bilangan genap');
// }

// if(angka % 2 !== 0) {
//     alert(angka + ' adalah bilangan ganjil')
// }

/* jadi sisa baginya sama dengan 0 tampilkan bilangan genap 

tapi jika sisa baginya tidak sama dengan 0 atau bisa ditulis === 1 
maka tampilkan bahwa angka tersebut adalah bilangan ganjil 


nah tapi biasanya kita tidak menggunakan 2 if ini 

kita bisa gunakans ebuah cara untuk menangkap jika nilai yang dihasilkan atau jika kondisi dalam kurung bernilai false 

nah kita bisa tangkap nilainya itu menggunakan keyword else 

cara pakainya gini 
jadi kalo misalkan kita ingin tangkap sisa bagi selain 0 itu kita bisa ganti saja block if ini menggunakan else 

seperti ini

*/

// var angka = 3;
// if(angka % 2 === 0) {
//     alert(angka + ' adalah bilangan genap');
// }else{
//     alert(angka + ' adalah bilangan ganjil');
// }


/* ya jadi jika tidak terpenuhi kondisi if nya 

jika benilai false maka lakukan apa yang ada didalam else ini 
cukup tampilkan else maka dia akan menangkap ketika nilainya berisi false 

nah jadi sekarang kalo misalkan angkanya 3 maka jika kita jalankan tampilnya yang mana?
apakah 3 dibagi 2 itu sisa baginya 0 ?
false ya maka kalo false dia akan kebawah sini jalankan yang didalam else nya 

3 adalah bilangan ganjil 

ya atau misalkan kalian ingin nilai angka ini diinputkan oleh user 
maka kalian tingga gunakan popup yang namanya  apa? masih inget ? 

kita gunakan prompt ya 


*/
// var angka = prompt('masukkan angka');
// if(angka % 2 === 0) {
//     alert(angka + ' adalah bilangan genap');
// }else{
//     alert(angka + ' adalah bilangan ganjil');
// }


/* jadi usernya memasukkan angka 

kalo satu ganjil kalo 2 genap seperti itu 

ya walaupun ini masih ada kekurangan 
kekurangannya apa ketika nanti user memasukkan karakter yang bukan angka misalkan user memasukkan huruf a begitu kita kita tampilnya apa? 

apakah a dibagi 2 sisa baginya 0 ?
bukan ya karena a itu bukan angka maka tetap saja dia akan masuk ke yang else ini 

jadi a adalah bilangan ganjil 

itu 
jadi cara penggunaan if dan else yang sangat sederhana 

if dan else ini akan sering kita gunakan nanti dilatihan javascript ini 

jadi saya harap kalian  paham betul gimana cara penggunaanya 

ya atau untuk lebih paham lagi gimana kalo kita latihan lagi ya 


jadi kita kembali ke kasus kita dimateri sebelumnya itu angkot2.js 


nah sekarnag gimanan kalo kalian buat file baru kasih nama saja angkot3.js 
yang tadi ya permintaanya menampilkan hal yang sama pesan yang sama dengan angkot2.js 

tapi sekarnag saya inginnya tampilnya itu menggunakan satu buah for saja 

jadi kalian hanya punya satu buah for yang nanti didalamnya kalian punya pengkondisian 
ya pengkondisiannya gimana? 

kalian lihat ini
jika noAngkotnya satu sampai 6 maka tampilkan bahwa angkot tersebut beroprasi dengan baik 

sedangkan untuk angkot no 7 sampai 10 tampilkan bahwa angkotnya tidak beroprasi 

oke silahkan dicoba dulu silahkan dibuat latihannya nanti kita bahas jawabannya dimateri yang akan datang

jadi sampai disini dulu materi kali ini mudah mudahan kalian paham dengan penjelasan sederhananya 

kita ketemu lagi dimateri berikutnya 

dan satu lagi jangan lupa titik koma ; */