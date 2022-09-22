/* timming event

dimateri kali ini kita akn membahas mengenai timming event / timming function pada javascript

jadi timming event ini adalah event pada javascript yang kita gunakan untuk mengatur kapan kita menjalankan code pada progam kita 

ya jadi istilahnya dengan ini kita bisa memanipulasi waktu eksekusi pada progam kita 

ada dua fungsi atau event yang bisa kita gunakan 

-setTImeOut()
-setInterval()

setTImeOut digunakan ketika kita ingin menjalankan code kita setelah kita menunggu sejumlah waktu tertentu

sedangkan setInterval itu kita gunakan ketika kita ingin menjalankan sebuah block progam atau code kita secara berulang ulang 
bisa kita lakukan terus menerus atau sampai waktu tertentu juga

gitu ya jadi dua event ini penting untuk kita ketahui ketika kita ingin membuat website yang lebih interaktif lagi

misalnya ketika kalian ingin membuat slide show otomatis dimana gambarnya itu berganti dengan interval waktu tertentu 

atau kalian ingin membuat timmer misalkan menghitung mundur waktu tertentu dan masih banyak lagi penggunannya

ya untuk itu kita langsung saja coba bagaimanya implementasi dari timming function ini kedalam progam sederhana kita 

sekali lagi dua hal ini merupakan timming function dimana kita bisa mengatur waktu saat kita menjalankan sesuatu pada progam kita 

nah kedua function ini merupakan bagian dari object window 
ya kalian boleh tulis begini

window.setTimeOut()
window.setInterval()

nah tapi karena window itu global kalian boleh menghapus windownya 


1. setTImeOut()
    nah sekarang kita akan bahas yang pertama dulu yaitu setTimeOut()

    nah setTimeOut ini akan menjalankan progam kita setelah kita menunggu beberapa waktu
    tergantung dari waktu yang kita berikan diargumentnya 

oke contohnya begini

saya punya sebuah function yang namanya tampilkan pesan
yang isinya hello world
*/

function tampilkanPesan(){
    console.log('hello world')
}
// tampilkanPesan()

/* nah ketika saya save lalu refresh

maka hello worldnya akan langsung tampil

nah sekarang kita bisa menuliskan pesannya dengan menunggu dulu beberapa saat itu dengan cara kita masukkan kedalam setTimeOut

nah setTimeOut memiliki dua argument yang pertama adalah fungsi yang akan dijalankan 
jadi kalian bisa tulis begini

tapi ingat kalo kalian tulisanya begini
tampikanPesan() 

itu artinya fungsinya akan langsung dijalankan
ya jadi tinggal hapus saja kurungnya 

*/

// setTimeout(tampilkanPesan, 3000)

/* lalu argument berikutnya kita akan menunggu berapa detik?
yang kalian masukkan disini adalah milisecond

jadi per seribu detik
jadi kalo saya tulis 1000 ini artinya 1 detik
kita ganti 3 detik saja ya jadi 3000

kalo kalian menulis begini ini artinya kalian akan menjalankan tampilkanPesan setelah nunggu 3 detik

kita coba jalankan ya 
nunggu 3 detik dulu baru muncul ya 

ya jadi itu kalo mau menggunakan setTImeOut()


nah kalian juga bisa menggati function tampilkanPesan ini menggunakan anonymus function

jadi kalian langsung saja masukkan functionnya kedalam argumentnya 

ya jadi kalian bisa tulis begini
*/

// setTimeout(function(){
//     console.log('oke')
// }, 2000)

/* nah dia nunggu dua detik baru muncul oke 

ya jadi sama saja kalian juga bisa melakukan seperti ini 

nah selanjutnya fungsi setTImeOut ini kita bisa berhentikan ditengah tengah 

harusnya user menunggu selama 5 detik tapi kita bisa lakukan sesuatu sehingga fungsi ini tidak jadi dijalankan 

nah gimana caranya kita lihat ya 

jadi saya bisa masukkan ini kedalam sebuah variable


*/

// const tes = setTimeout(function(){
//     console.log('oke')
// }, 2000)

/* nah saya bisa gini 
misalkan saya tambahkan sebuah tombol ya dihtmlnya 

nah jadi saya bisa gini
kita panggil dulu si tombolnya 
*/

// const tombol = document.getElementById('tombol');
// // lalu ketika tombolny saya klik setTimeOutnya berhenti

// tombol.addEventListener('click', function(){
//     // nah caranya kalian bisa tulis begini
//     // clearTimeOut kita isi nama variable tadi
//     clearTimeout(tes)
//     // lalu saya kasih console.log()
//     console.log('selesai')
//     // nah ini artinya ketika tombolnya saya klik oke nya tidak akan tampil
//     // tapi yang tampil adalah selesai
// })

/* kita coba 

nah ini harusnya nunggu 5 detik ya 

nah sekarang sebelum 5 detik saya hentikan 
saya klik tombolnya maka langsung muncul selesai dan okenya tidak akan pernah jalan

nah ini berguna ketika kalian bikin sebuah aplikasi untuk kuis atau untuk ujian ya 

dimana untuk mengerjakan soal ada waktunya 
misalkan waktu 1 soal itu satu menit


nah kalo misalkan waktunya sudah lewat soalnya tidak bisa dikerjakan lagi

tapi begitu sudah dikerjakan maka arahkan kesoal berikutnya 

nah itu bisa kita lakukan dengan setTImeout

begitu ya 
kita menjalankan sesuatu setelah kita menuggu beberapa milisecond

oke itu yang pertama 


2. setInterval()

    nah kalo setInterval ini kita melakukan sesuatu berulang ulang dengan interval waktu tertentu

    nah kalo setTimeOut kan hanya menjalankan sekali
    nunggu dulu baru jalankan sekali

    kalo ini sesuatu dijalankan lalu nunggu berapa detik dijalankan lagi lalu nunggu lagi dan seterusnya

kita coba kita lakukan hal yang mirip seperti tadi ya

sama kayak tadi argument ynag pertama adalah function argument yang kedua adalah intervalnya 
*/

// setInterval(function(){
//     console.log('oke')
// }, 2000);

/* 
nah maka sekarang tulisan oke akan dicetak 

coba jalankan 
nunggu dua detik keluar oke 
dua detik lagi keluar oke lagi dan seterusnya 

dan ini akan dilakukan secara terus menerus sampai suatu saat mungkin usernya memberhentikan misalnya dengan mengeklik tombol berhenti ini lagi 

kita coba hentikan 
cara menghentikannya sama seperti setTimeOut

tapi kita gunakan clearInterval untuk memberhentikan setInterval

*/

// const interval = setInterval(function(){
//     console.log('oke')
// }, 2000)


// // tinggal kita ambil tombolnya 

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click', function(){
//     clearInterval(interval);
//     console.log('selesai')
// });

/* kita coba jalankan 

ketika saya klik berhenti maka okenya akan berhenti
dan muncul tulisan selesai

begitu ya mudah mudahan kalian paham


nah untuk penerapan timming event ini yang sederhana adalah pembuatan progam untuk menghitung mundur waktu misalnya ya 


misalkan aplikasi untuk menampilkan diskon dan diskonnya ada waktunya 
misalnya waktunya tinggal 2 hari lagi tinggal 5 jam lagi seperti itu ya 

nah gimana kalo sekarang kita bikin yang versi simplenya deh

sekarang yang akan kita lakukan tambahkan id dih1 nya 


jadi idenya begini
kita akan melakukan hitung mundur terhadap sebuah waktu

jadi  yang pertama yang akan kita lakukan adalah kita harus tahu dulu kapan waktu tersebut

misalkan begini sekarang tanggal 27 mei 2021 jam 09.00

nah misanya saya punya waktu tujuan itu besok jam 11.00

nah itu kita harus tahu dulu bagaimana cara mendapatkan waktu itu

misalkan saya buat variable namanya sekarang 
kita cari tahu dulu waktu sekarang itu berapa 

caranya kita panggil new Date()
*/

// const sekarang = new Date();
// // lalu saya consol
// console.log(sekarang);

/* nah maka akan tampil hari ini 
nah sekarang kalo saya kasih  .getTime()

ya maka nanti string ini hari ini tanggal ini akan berubah menjadi angka

*/

// const sekarang = new Date().getTime();
// // lalu saya consol
// console.log(sekarang);

/* nah ini adalah angka detik 

nah kita sudah tahu detik sekarang 
lalu misalnya saya mau tahu tanggal tujuan

misalnya besok tanggal 28 mei jam 11

saya tinggal tulis begini diargumentnya 

*/

// const tanggalTujuan = new Date('May 28, 2021 11:00:00').getTime();
// // kalo sekarang saya simpan kedalam console
// console.log(tanggalTujuan);

/* tuh sekarang saya sudah punya dua waktu sekarang dan besok jam 11

nah sekarang kita akan cari tahu berapa selisihnya supaya tahu berapa jam lagi berapa menit lagi

*/

// const selisih = tanggalTujuan - sekarang
// console.log(selisih);


/* tinggal kita ubah format selisih ini menjadi format yang kita inginkan misalnya berapa hari lagi berapa jam menit dan detik lagi

gimana caranya?
kita cari hari dulu 

ini milidetik berarti untuk jadi detik kita kali 1000 ya 

*/

// const hari = selisih / (60 * 60 * 24 * 1000)
// selisih kalo kita bagi dengan (60(detik atau satu menit) * 60(menit atau satu jam) * 24(jam atau satu hari) * 1000(dijadikan milisecond))
// kalo selisih dibagi satu hari nanti akan keluar angka 
// kita lihat 
// console.log(hari)
// nah sekarang gimana kalo kita bulatkan kebawah

// const hari = Math.floor(selisih / (60 * 60 * 24 * 1000))
// console.log(hari)

/* tuh sudah dapat ya 
berarti hari ini kebesok kan selisihnya satu hari

kalo misalkan tanggal tujuannya saya ganti dengan 29 maka akan muncul 2 yang mendefinisikan 2 hari 

berarti ini sudah bener hari sudah kita dapat

sekarang kita cari jamnya berapa 
*/

// const jam = selisih / (60 * 60 * 1000)
// // satu menit 60 detik kali satu jam 60 menit kali jadikan milisecond
// console.log(jam);

/* nah kan kita tidak butuh 24nya ya karena 24 itu sudah kita reperesentasikan menggunakan hari tadi 24jam === 1 hari 


*/

// const jam = selisih % (60 * 60 * 24 * 1000)
// nah caranya kita ganti dengan modulus 
// satu menit 60 detik kali satu jam 60 menit kali jadikan milisecond

// tinggal ini kita badi dengan jam 
// const jam = selisih % (60 * 60 * 24 * 1000) / (60 * 60 * 1000)
// nah tinggal kita bulatkan 
// const jam = Math.floor(selisih % (60 * 60 * 24 * 1000) / (60 * 60 * 1000))
// console.log(jam);

/* selanjutnya kita cari menitnya 


*/
// const menit = Math.floor(selisih % (60 * 60 * 1000) / (60 * 1000))
// // nah kita tidak perlu 24nya lalu kita bagi dengan satu menit
// console.log(menit)

// terakhir kita cari detik

// const detik = Math.floor(selisih % (60 * 1000) / 1000)
// console.log(detik);

/* 
sudah nih kita sudah punya hari jam menit dan detik

tinggal kita masukkan kedalam h1ya kita ganti hello worldnya  

*/

// const h1 = document.getElementById('text');
// h1.innerHTML = hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + 'detik'
// tuh muncul ya waktunya 
/* nah sebenernay progammnya itu sudah selesai

tapi saya inginnya progamnya berganti tanpa harus saya refresh

nah jadi kita butuh setInterval supaya  progam ini dijalankan setiap satu detik sekali 

paham ya 
nah gimana caranya

nah tinggal masukkan saja semua progamnya kedalam setInterval




*/
const tanggalTujuan = new Date('May 27, 2021 10:24:00').getTime();
//nah tanggal tujuannya biarkan diluar karena ini menjadi patokannya 
const hitungMundur = setInterval(function(){
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang

    const hari = Math.floor(selisih / (60 * 60 * 24 * 1000))
    const jam = Math.floor(selisih % (60 * 60 * 24 * 1000) / (60 * 60 * 1000))
    const menit = Math.floor(selisih % (60 * 60 * 1000) / (60 * 1000))
    const detik = Math.floor(selisih % (60 * 1000) / 1000)

    const h1 = document.getElementById('text');
    h1.innerHTML = hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + 'detik'


    // nah tapi ini ada kekurangannya dia tidak akan bisa berhenti 
    // nah kita tambahkan kondisi supaya dia berhenti 

    // coba kita ganti tanggal dan waktunya gar jadi semenit
    // coba kalian tinggu apa yang terjadi ketika waktunya sudah habis

    // nah ini jadi min ya 
    // nah gimana kalo ketika waktunya sudah habis kita berhentikan

    // caranya kita kasih kondisi
    // kita check saja kalo selisihnya sudah 0 
    // kalo tanggal tujuan dikurangi waktu sekarang itu sudah pas ya waktunya 

    if(selisih < 0){
        clearInterval(hitungMundur)
        // lalu kita ganti dengan misalnya 
        h1.innerHTML = 'waktu anda sudah habis'
    }
}, 1000)


/* 
nah coba jalankan 

jika selisihnya 0 maka berhenti

jadi begitu ya temen temen salah satu penggunaan setInterval untuk membuat program hitung mundur waktu sederhana 

mudah mudahan kalian paham

itu saja untuk materi kali ini 
sampai ketemu lagi diquick tips berikutnya 

dan satu lagi jangan lupa titik koma ;  */
