/* javascript lanjutan: Object.create() 

kali ini kita masuk mengenai konsep Object.create()

nah ini adalah salah satu cara untuk membuat object 
tapi sebelum kita masuk kesini coba kita review dulu beberapa cara untuk membuat object

nah sekarang kita akan lihat dulu menggunakan cara cara tersebut apa bedanya 
apakah ada kekurangan dan sebaiknya kita pakai yang mana sebelum kita masuk kedalam Object.create() ini


1.menggunakan object literal

*/

// let identitas = {
//     nama : 'muiz',
//     energi : 10,
//     makan : function(energi){
//         this.energi += energi
//         return `nama ${this.nama} menambahkan energi sebanyak ${energi}`
//     }
// }

/* yang pertama menggunakan object literal 
ini dari materi sebelumnya ya 

nah dengan menggunakan object literal ini adalah yang paling simple ya 

kalo kalian bikin objectnya cuma satu 
dan tidak terlalu besar objectnya ya kalian bisa gunakan object literal

tapi ketika objectnya banyak
gimana kalo 10 20 dan seterusnya itu akan memakan banyak resource karena kalian melakukan sesuatu yang sama itu berulang ulang

itu kelemahan atau problem yang pertama 

PROBLEM: tidak efektif untuk object yang banyak 

nah sekarang kita lihat kalo menggunakan function decklaration 



2.function declaration

sepertinya kalo menggunakan function declaration ini kita dapat mengatasi masalah tadi 

karena kalian cuma bikin objectnya sekali
nanti kalian bisa isi valuenya berkali kali

*/

// function Mahasiswa(nama, energi){
//     let mahasiswa = {}
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi

//     mahasiswa.makan = function(energi){
//         return this.energi += energi
//     }
//     return mahasiswa
// }
// let muiz = Mahasiswa('muiz', 10)

/* nah dengan menggunakan cara ini pun 
kalo kita melakukan instantsiasi pada objectnya itu ternyata dibelakang layar mehtod makan akan tetap dibuat

mau dipakai mau tidak tetap dibuat dan disimpan kedalam memory

nah jadi sama saja dengan menggunakan object literal 
mehtodnya tetap akan dibuat berulang ulang kali pada masing masing object

jadi dengan menggunakan function declaration masih ada duplikasi 

ada solusinya kalo mau lebih efektif 

nah caranya adalah dengan membuat object terpisah 
objectnya berisi method ini

nah nanti objectnya kita tinggal panggil saja didalam object mahasiswa


kita coba
jadi kita buat dulu objectnya 


*/
// const methodEnergi = {
//     makan : function(energi){
//         return this.energi += energi
//     }
// }
// function Mahasiswa(nama, energi){
//     let mahasiswa = {}
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
//     mahasiswa.makan = methodEnergi.makan
//     return mahasiswa
// }
// let muiz = Mahasiswa('muiz', 10)


/* nah gini 
ini kalo kita jalanin harusnya jalan 

sekarang kalo saya tulis muiz
tidak ada masalah 


nah sekarang bedanya adalah gini
setiap saya menjalankan program ini 

object methodEnergi akan disimpan satu kali kedalam memory 
lalu ketika saya memanggil function mahasiswa dan mengisi methodnya 

maka dia hanya mengacu kepada object yang sudah kita buat tadi tidak dibuat ulang

kalo sebelumnya object literal setiap instantsiasi (pembuatan objectnya) dibikin ulang

jadi ini lebih efektif lagi 

walaupun masih ada problem 
problemnya apa?

kalo misalkan saya bikin sebuah method baru misalkan namanya tidur


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
// function Mahasiswa(nama, energi){
//     let mahasiswa = {}
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
//     mahasiswa.makan = methodEnergi.makan
//     mahasiswa.tidur = methodEnergi.tidur
//     return mahasiswa
// }
// let muiz = Mahasiswa('muiz', 10)

/* 
nah ceritanya ada method baru didalam objectnya 

nah begit ada method baru kalian harus daftarin didalam function mahasiswanya 

nah artinya kalian mengelola dua object sekarang 

object yang dibikin pakai function declaration sama object yang dibikin literal 
yang berisi function function

secara menegement memory ini efektif 
tapi kalian harus mengelola ketika buat function didalam methodEnergi kalian harus daftarin kedalam mahasiswa

nah alangkah baiknya kalo ada cara otomatisnya 

jadi kalian tidak perlu nih daftarin kedalam mahsiswa
kalian boleh hapus

nah terus kalo dihapus bagaimana dong caranya function declaration ini tahu bahwa 2 function yang ada didalma object lain ini punyanya object mahasiswa?

nah caranya menggunakan object.create tadi 
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
// function Mahasiswa(nama, energi){
//     // nah waktu kita daftarkan objectnya kita ganti nih tanda {} menjadi 
//     // Object.create() sama saja, sama sama membuat object
//     // nah tapi bedanya disini

//     let mahasiswa = Object.create(methodEnergi)

//     // jadi kalian bisa ngasih tahu bikin object baru sambil juga ikut membawa properti dan mehtod dari object lain
//     // dalam hal ini objectnya adalah methodEnergi

//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
//     return mahasiswa
// }
// let muiz = Mahasiswa('muiz', 10);

/* 
jadi mahasiswa dibikin sambil membawa properti dan method dari methodEnergi ini


kalo misalkan didalam Object Orientet kalian mengenal istilah pewarisan 
nah ini mirip lah dengan itu 

nah coba kalian lihat 
sekarang saya tidak perlu mendefinisikan method makan dan tidur karena sudah ada didalam object.create

kita coba ya 

saya tulis muiz aman ya 
kalo saya tulis muiz.tidur(5)

harusnya sekarang energinya jadi 20

nah itu kalo pakai Object.create() ya

mudah mudahan sampai disini paham nih

nah tapi sebetulnya kalian tuh butuhnya mahasiswa 

nah ini problem berikutnya 

kalian tuh sebelumnya hanya butuh mahasiswa saja tidak butuh methodEnergi

meskipun kalian hubungkan disini tetap saja kalian kerjanya 2 kali ya 

bikin object satu untuk mendukung object intinya yang mahasiswa

nah sebetulnya ada caranya supaya kalian tidak perlu bikin object lain supaya dihubungkan kemahasiswa

yaitu dengan menggunakan prototype dan itu akan kita bahas dimateri berikutnya 


oke jadi mungkin itu dulu materi kali ini 
kita bahas mengenai object.create gimana cara penggunaannya ya 

walaupun sebetulnya saat kita belajar mengenai prototype itu akan dilakukan secara otomatis 

jadi itu saja mudah mudahan kalian paham 

kita ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ;

*/