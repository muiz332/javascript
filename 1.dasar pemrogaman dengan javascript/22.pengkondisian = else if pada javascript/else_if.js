/*pengkondisian: else if pada javascript 

dimateri kali ini kita akan melanjutkan materi sebelumnya ya
masih mengenai pengkondisian atau percabangan 

kalo dimateri sebelumnya kita membahas if dan else kali ini kita akan membahas mengenai keyword lain yaitu else if 

nah tapi kalo kalian inget dimateri sebelumnya itu ada latihan ya jadi gimana kalo kita bahas mengenai materi itu dulu 

jadi materi sebelumnya itu masih seputar juragan angkot dimana kita diminta untuk membuat file namanya angkot3.js yang sebetulnya menampilkan pesan yang sama dengan angkot2.js ya 

tapi kali ini permintaanya adalah dengan menggunakan satu buah for saja 

ya karena sebelumnya kalo kalian inget itu kita menggunakan dua buah loopping ya ada while dan ada for 

sekarang dengan menggunakan satu for itu nanti kita check didalam fornya jika nomor angkotnya 1 sampai 6 maka dia beroprasi dengan baik sedangkan jika nomor angkotnya 7 sampai 10 maka dia lagi rusak ya sedang tidak beroprasi 


nah sekarang gimana kalo kita coba kerjakan dulu sama sama silahkan jika kalian sudah mengerjakannya dibuka lagi 

kita coba samakan ya 

nah sekarang saya akan membuat hasil yang sama dengan menggunakan satu buah for saja 

ini kita inget kita punya 3 buah variable awal 
ada jmlAngkot 
ada noAngkot 
ada angkot yang beroprasi 


nah sekarang kita akan coba membuat fornya ya

yang pertama kita punya for disini 
lalu sebetulnya kalian bisa saja menyimpan variable noAngkot ini didalam fornya 

jadi saya pisahkan saya simpan difornya 
jadi ini saa saja dengan melakukan inisialisai atau memberikan nilai awal pada indexnya ya 

lalu selanjutnya kondisi terminasi jadi selama noAngkotnya itu lebih kecil sama dengan jmlAngkot 

lalu kita lakukan increment 


*/

// var jlmAngkot = 10;
// var angkotBeroprasi = 6;


// for( var noAngkot = 1; noAngkot <= jlmAngkot; noAngkot++) {

//     if(noAngkot <= angkotBeroprasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.')
//     }else{
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.')
//     }

// }


/* lalu didalamnya baru akan kita lakukan pengecheknya menggunakan pengkondisian 

jika noAngkotnya lebih kecil sama dengan angkotBeroprasi maka lalukan aksi console.log

selain itu atau sisanya kita tampilkan console.log yang ada dielse 


jadi kita menggunakan pengkondisian di dalam pengulangan coba kita jalankan

nomor 1 sampai 6 beroprasi dengan baik. 
7 sampai 10 sedang tidak beroprasi.

jadi ini source codenya untuk menampilkan hanya dengan menggunakan satu loop saja 

gimana sama gak dengan hasilnya yang kalian buat? 

jadi begitu cara menggunakannya paham ya 

jadi kalo saya ulang untuk sintax dari pengkondisian seperti ini

if(kondisi) {
    aksi1
}else{
    aksi2
}

jadi if dalam kurung kondisi ya nanti kondisinya bisa sederhana seperti yang kita lakukan tadi ya angka lebih kecil barapa atau sebuah nilai sama dengan atau tidak sama dengan apa atau bahkan nanti kalian bisa gabungkan dengan operator logika misalkan && atau || 

ya tapi intinya jika kondisinya bernilai true maka lakukan aksi1 ini tapi selain dari itu atau jika kondisinya bernialai false baru lakukan aksi yang ke 2 ini 

atau kita lihat contoh sederhanan lainnya deh 

var angka = prompt('masukkan angka');

if (angka % 2 === 0){
    alert(angka + ' adalah bilangan genap');
}else{
    alert(angka + ' adalah bilangan ganjil');
}

dimateri sebelumnya kita sudah coba ini 
dimana kita bisa mengecheck sebuah nilai itu bilangan genap atau bilangan ganjil 

jadi kita diminta dulu memasukkan angka lalu kita check

jika angkanya dimodulus atau sisa bagi hasilnya sama dengan 0 maka angka tersebut pasti bilangan genap

selain dari itu maka dia bilangan ganjil 

jadi kalo saya masukkan angka 10, 10 habis gak dibagi 2? pasti habis ya nilainya 0 maka 10 pasti bilangan genap 

kalo saya masukkan angka 15, 15 sisa bagi 2 ada sisanya nah berarti masuk ke else 
15 adalah bilangan ganjil 

paham ya nah tapi statement ini terdapat kesalahan, kesalahannya gimana 
gimana kalo misalakan user pada saat diminta memasukkan angka itu dia tidak memasukkan angka tapi misalnya memasukkan huruf contohnya saya masukkan huruf a begitu 

kira kira tampilnya apa? 
a modulus 2 itu tidak sama dengan 0 
maka tampilnya adalah a bilangan ganjil 

nah itu tidak kita inginkan ya 

coba kita lihat ya  
kalo kita jalankan 


*/
// var angka = prompt('masukkan angka');

// if (angka % 2 === 0){
//     alert(angka + ' adalah bilangan genap');
// }else{
//     alert(angka + ' adalah bilangan ganjil');
// }


/* ini diminta memasukkan angka kalo saya masukkan angka 10? 10 adalah bilangan genap 
kalo saya masukkan angka yang lain misalnya 13? 13 adalah bilangan ganjil 

tapi ketika saya masukkan string misalkan huruf apapun saya tekan oke maka huruf tadi adalah bilangan ganjil 

nah ini tidak kita inginkan 
lalu gimana dong cara menanganinya?

nah disinilah kita butuh keyword else if 

else if ini digunakan ketika kalian punya kondisi lain selain if dan else tadi 

jadi kalo misalkan if dan else statemtnnya seperti ini 

if(kondisi) {
    aksi1
}else{
    aksi2 
}

jika kondisinya true maka lakukan aksi1 tapi selain dari itu aksi2 gimana jika ada kondisi lain? 

nah disinilah kita akan menyisipkan keyword else if tadi 

jadi misalnya kondisi yang pertama kita sebut kondisi 1 nanti kita punya else if yang kita bisa isikan kondisi yang ke2

untuk melakukan aksi2 sehingga yang else ini nanti akan menjadi aksi3

paham gak? 

if(kondis 1){
    aksi1 
}else if(kondisi 2){
    aksi2
}else{
     aksi3 
}


jadi kita bisa sisipkan else if diantara if dan else 

nah nanti else if ini bisa banyak bisa else if lalu ada else if lagi dibawanya baru nanti ada else 
nah else if ini bisa digunakan untuk menyimpan banyak kondisi selain yang ada didalam if tapi kita harus tulis if dulu sebagai kondisi pertama dan kondisi yang lain itu menggunakan else if

jadi kalo kita kembali kekasus yang tadi 

setelah memasukkan angka kita diminta menjalankan statement ini ya if angka modulus 2 sama dengan 0 tampilkan angka adalah bilangan genap 

tapi jika 
nah kita tambahakan statement else if 
tapi jika angka modulus 2 itu sisa baginya 1 

baru tampilkan angka adalah bilangan ganjil 





var angka = prompt('masukkan angka')

if(angka % 2 === 0){
    alert(angka + ' adalah bilangan genap');
}else if(angka % 2 === 1) {
    alert(angka + ' adalah bilangan ganjil')
}else{
    alert('masukkan angka woy')
}

 selain dari itu  maka yang dimasukkan aoleh user itu pasti bukan angka betul gak?

kita coba lakukan ini 

kita bisa tambahkan dibawah if hati hati dengankurung kurawal buka dan kurung kurawal tutupnya ya 
kita tambahkah else if tambahkan kondisi untuk mengecheck apakan angka adalah bilangan ganjil
jadi angka modulus 2 itu sama dengan 1 

maka kita tulis angka adalah bilangan ganjil 

*/
var angka = prompt('masukkan angka');

if (angka % 2 === 0){
    alert(angka + ' adalah bilangan genap');
}else if(angka % 2 === 1){
    alert(angka + ' adalah bilangan ganjil');
}else{
    alert('yang anda masukkan bukan angka');
}


/*  selain dari itu maka alertnya beda yang anda masukkan bukan angka
maka usernya harus memasukkan angka yang benar ya 


kita lihat save dulu lalu jalankan 

ketika kita masukkan 5 ganjil ketika kita masukkan angka 100 genap ya
terakhir ketika kita masukkan nama itu pasti yang anda masukkan bukan angka 

jadi kita sudah bisa menangani hal seperti ini 

begitu ya paham ya penggunaan else if atau supaya lebih paham lagi seperti biasa saya kasih latihan lagi ya 

kita lanjutkan kasus kita mengenai juragan angkot kita tambah komplexsitasnya jadi gini 


kalian sudah buat sampai angkot3.js ini lalu save as jadi angkot4.js lalu modisikasi kasusnya

jadi kasusnya seperti ini
angkot 1 sampai 6 beroprasi dengan baik.
angkot 7 sampai 10 sedang tidak beroprasi.

yang dengan kata lain ceritanya sedang lagi dibengkel begitu ya

nah sekarang diangkot4.js ini ceritanya angkot no 8 itu sudah keluar dari bengkel 
nah karena dia sudah lama tidak beroprasi maka dia harus kejar storan 

jadi ceritanya angkot no 8 ini akan melakukan lembut jadi saya minta sekarang pesan yang harus kalian tampilkan itu seperti ini 

Angkot No. 1 beroprasi dengan baik.
Angkot No. 2 beroprasi dengan baik.
Angkot No. 3 beroprasi dengan baik.
Angkot No. 4 beroprasi dengan baik.
Angkot No. 5 beroprasi dengan baik.
Angkot No. 6 beroprasi dengan baik.
Angkot No. 7 sedang tidak beroprasi.
Angkot No. 8 sedang lembur.
Angkot No. 9 sedang tidak beroprasi.
Angkot No. 10 sedang tidak beroprasi.


1 sampai 6 beroprasi dengan baik
7 sampai 10 yang tadinya tidak beroprasi sekarang no 8nya beda pesannya karena tulisannya angkot no 8 sedang lembur 

jadi silahkan kalian tambahkan pengkondisian yang ada didalam pengulangannya supaya bisa menampilkan pesan angkot no 8 seperti itu 

paham ya pertanyannya seperti biasa nanti kita akan bahas jawabannya dimateri selanjutnya ya 
ya silahkan dikerjakan dulu 


oke jadi itu ya penjelasa mengenai else if dalam javascript 

mudah mudahkan kalian paham dan tidak bingung 

mungkin itu untuk materi kali ini 
kita ketemu lagi dimateri selanjutnya 

dan satu lagi jangan lupa titik koma ; */