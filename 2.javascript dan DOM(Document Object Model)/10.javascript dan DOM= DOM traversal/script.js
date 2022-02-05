/* javascript dan DOM: DOM traversal

dimateri kali ini kita akan belajar mengenai DOM traversal ya atau ada yang bilang ini penelusuran DOM 


dan istilah traversal atau penelusuran DOM disini kalian bisa bayangkan istilahnya itu seperti ini

ya dimana kalian bisa menelusuri jalan  kecil yang ada dipersawahan 
ya jadi penelusuran yang akan kita maksutkan itu mirip seperti ini

atau kalo kita lihat disini kita menggunakan DOM tree 
temen temen masih inget mengenai konsep DOM selection

dimana kalian bisa menyeleksi sebuah element atau sebuah node yang ada pada DOM tree ini
ya kita sudah tahu caranya ya 


                    document
                       html
            head                    body
            meta                  h1               div               a           href
                                hello world          p          halaman ke2   halaman2.html
                                                 paragraf2

misalnya saya ingin memilih sebuah element misalnya h1 ini
kita dapat dengan mudah menyeleksi element menggunakan getElementById kalo h1 ini memiliki id


nah sekarang apa bedanya ketika kita menggunakan DOM traversal atau penelusuran DOM

nah jadi dengan menggunakan DOM traversal ini sebetulnya kita harus menyeleksi sebuah elementnya dulu menggunakan DOM selection

baru setelah element tertentu itu ketemu atau terseleksi 
nah kita akan memilih element yang lain berdasarkan element tersebut

ya atau istilahnya menenlusuri elementnya berdasarkan element yang kita seleksi diawal 

paham gak?
misalkan saya ingin memilih paragarf2 
ini kan gamapang saja kita bisa seleksi menggunakan querySelector misalnya

lalu setelah itu misalnya kita mau memilih tag a tapi berdasarkan element paragraf yang sudah kita piih tadi 

setiap node itu pasti memiliki hubungan dan pasti kita bisa menelusuri

coba lihat dari paragraf kita bisa naik keatas lalu kesebelah kanan 
ya jadi nanti dari paragaraf kita bisa katas naik dulu ketemu div 

lalu dari div kita bisa ketemu a nya
nah itu contoh penelusurannya seperti itu 

ya nanti cara penelusurannya bisa macam macam 
bisa kita keatas dulu sampai kebody lalu pilih a

nah untuk memahami penelusuran ini kalian harus paham mengenai konsep silsilah keluarga dulu 

ya jadi kalian harus tahu dulu mana anaknya siapa mana orang tuanya siapa gitu 

lalu mana saudara kandungnya atau sibling namanya ya kalian harus paham mengenai konsep itu

gitu ya jadi itu caranya kita bisa menggunakan penelusuran DOM untuk mendapatkan sebuah element berdasarkan element yang sudah kita seleksi sebelumnya 

nah sekarang pertannyaan selanjutnya adalah 

kenapa kita harus menelusuri DOM itu 
kenapa sih sebuah element itu harus kita telusuri? kenapa kita tidak seleksi saja?

misalnya yang tadi kalo kita mau mengambil element itu tinggal seleksi element a nya saja 

ngapain kita susah susah menelusuri dari p
nah nanti ini akan masuk akal ketika kita masuk kedalam sebuah contoh

jadi gimana kalo sekarang kita langsung saja masuk contohnya 
nah kalian bisa copy saja script html dan cssnya 

kalo kalian lihat hasilnya itu seperti kartu nama

ya jadi ceritanya saya mau membuat sebuah kartu nama 

yang kalo kalian lihat disebelah kanan itu ada tombol x nya 
nah itu caritanya kalo mau menghapus contactnya


ya untuk gambarnya silahkan kalian cari saja gambarnya sendiri ya

kita lihat dulu htmlnya 
saya punya div yang namanya card yang membuangkus element didalamnya 

lalu didalamnya saya punya beberapa element 
ada gambarnya 

lalu ada span buat nulis nama
lalu ada span lagi yang kelasnya telpon

lalu yang terakhir saya punya span class close yang ada tombol xnya 

jadi nanti ceritanya begini
kalo saya pencet tombol x ini cardnya hilang semuanya hilang

paham ya itu kasus yang pertama 
coba dengan kasus seperti itu saja saya ingin kalian buatkan dulu scriptnya dan harusnya kalian sudah bisa bikinnya 

karena materinya ada dimatrei sebelumnya 
jadi syaratnya untuk lanjut dimateri ini kalian harus bisa dulu

silahkan bikin dulu baru nanti kita bikin bareng bareng


coba kita buat ya 
jadi yang pertama kita ambil dulu element element yang kita butuhkan ya 

kita ambil dulu tombol closenya

*/

// const close = document.querySelector('.close');
// // lalu satu lagi kita ambil cardnya 

// const card = document.querySelector('.card');
// // tinggal kita kasih eventnya 
// // jadi close diklik lalu cardnya hilang

// close.addEventListener('click', function(){
//     // kalian bisa remove elementnya menggunakan DOM manipulation
//     // atau kita hilangkan saja menggunakan css kita kasih displaynya jadi none

//     card.style.display = 'none'
// })

/* coba kita jalankan 

kalo kalian click tombolnya hilang ya
nah sekarang kapan dong kita butuh DOM traversalnya?

nah gimana kalo cardnya ada banyak?
misalkan kita copy block card htmlnya menjadi 4

nah lalu ganti nama dan gambarnya 
kita lihat hasilnya

jadi sekarang kita sudah punya 4 contact 

sekarang saya inginnya kalo klik tombol x yang mana pun dia hilang 

sekarang kita coba klik yang muiz tuh gak mau dia
tapi kalo diklik yang sandhika dia hilang

kenapa kira kira ?
itu gara gara kita menggunakan querySelector 

querySelector itu hanya menangkap satu element, element yang pertama kali dia temui
makanya dia hanya berlaku untuk element pertama saja 

nah gimana caranya supaya kita bisa mengambil semuanya 
kita harus pakai querySelectorAll

oke kita coba ya
yang pertama kita akan ambil semua tombol closenya  karena ini semuanya sama 
sama sama memiliki class yang namanya close

baru nanti kita check tombol close mana yang kita klik
hilangkan yang itu gitu ya


kita coba

*/
// const close = document.querySelectorAll('.close');
// // sekarang tinggal kita looping satu satu closenya untuk mengetahui tombol mana yang kita pencet

// // ya kalian boleh loopingnya pakai for begini
// for(let i = 0; i < close.length; i ++){
//     close[i].addEventListener('click', function(){
//         const card = document.getElementsByClassName('card');
//         card[i].style.display = 'none'
//     })
// }

/* coba jalankan 

nah menggunakan cara ini juga bisa tapi ini cara yang salah dan tidak menggunakan DOM traversal

nah lalu gimana dong yang benernya?
kita kembali kehtmlnya kita lihat

kita ambil contoh yang card sandika
nah ini adalah tombol close dengan index ke 0 

kita inginnya begini 
begitu tombol close diklik kita akan telusuri 

kan kita mau ambil cardnya 
dari tombol close kecard berartikan dia persisi adalah parentnya 

jadi kita telusuri parentnya lalu setelah itu hapus parentnya

nah caranya begini

*/

// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(){
//         // nah ambil closenya lalu kita ambil parentnya 
//         // caranya kalian tulis begini parentElement

//         // ambil close yang sedang kita klik ini lalu telusuri siapa parentnya
//         // kalo sudah baru kita kasih stylenya 

//         close[i].parentElement.style.display = 'none'
//     })
// }

/* kita jalakan

saya klik yang hasan hilang ya 
sip ya jadi itu bisa menggunakan parent element

jadi DOM traversalnya itu yang parentElement ini 

nah tapi inipun masih akan kita lakukan beberapa perbaikan ya 

yang pertama itu kita bisa ganti close i nya dengan menggunakan eventnya 

close[i].addEventListener('click', function(){

}

kalo misalkan kalian baca yang ini 
ini artinya kan kalo misalkan sebuah tombol diklik 
kalo kalian tulis close i lagi untuk menghapus parentnya itukan sama ya berarti kalian bisa ganti 

*/
// const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++){

//     close[i].addEventListener('click', function(e){
//         // close[i].parentElement.style.display = 'none'

//         //kalo kalian kasih sebuah parameter didalam funtionnya 
//         //      biasanya parametrnya kalo gak e ya event ya

//        /*  nah maka e ini akan berisi event yang sedang terjadi 

//           jadi e ini akan menjadi sebuah object yang berisi informasi dari event yang terjadi 

//            nah coba kita lihat saja isinya */

//         // console.log(e)
//         /* ketika saya klik ada sebuah object yang namanya mouseevent

//             kalo kalian klik segitiganya ada banyak banget informasi mengenai apa yang baru saja terjadi 

//             kalo saya klik x nya javascriptnya bisa tahu koordinat tombol x nya dan lain lain

//             dan ada satu informasi mengenai targetnya 
//             target itu artinya siapa yang diklik tadi 

//             nah katanya span dengan class close 

//             jadi kalo misalkan ini saya ganti dengan e.target */
        
//         // console.log(e.target)
//         // nah dia akan mengambil element yang dikliknya 

//         // nah kalo sudah begini kita bisa lakukan hal yang sama 
//         // jadi si e target ini parent elmentnya kasih stylenya 

//         e.target.parentElement.style.display = 'none'
       
//     })
// }

// /* nah dengan menggunakan e.target ini akan lebih bermanfaat karena kita bisa mengetahui banyak informasi
// dari sebuah eventnya 

// jadi kalo saya lakukan ini harusnya hasilnya sama 

// coba jalankan
// tuh ya sama ya 


// oke jadi kita bisa menggunakan for 

// atau kalo kalian mau lebih praktis lagi

// karena kita sudah tahu bahwa close ini bentuknya node list dan node list bisa diperlakukan sebagai array 

// maka saya bisa gini 

// close lalu kita forEach gitu
// */

// const close = document.querySelectorAll('.close');
// close.forEach(function(el){
//     // ya jadi setiap element pada node list ini kita akan jalankan sebuah funtion
//     // nah untuk mengambil elementnya kita bisa masukkan kedalam parameternya 
//     // misalkan saya tulis el
//     // tinggal kita kasih eventnya 
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//     })
// })
/* 
sudah ya jadi ini cara lainnya 

bisa pakai forEach bisa pakai for bisa
kalo pakai foreach enaknya kita tidak perlu pakai indexnya 

kita coba jalankan

sama saja ya tapi ini adalah cara yang paling benar gitu

walaupun nanti ada cara yang lebih efektif lagi

tapi itu nanti ketika kita belajar topik yang lain 


kira kira sampai disini paham gak?
ya jadi disini lah cara kita menelusuri atau mentarvers sebuah element keelement yang lain
mudah mudahan kalian paham

nah sekarang kalian harus tahu ada method apa saja untuk menelusuri element ini 

ya kalian bisa lihat methodnya ada banyak 

method                                           hasil 

parentNode                                       node
belum tentu element html 

parentElement                                    element
= pasti element html 

nextSibling                                      node
= saudara kandung setelahnya 

nextElementSibling                                element

previousSibling                                   node
 
previousElementSibling                            element



nah sekarang kita coba beberapa ya 
sekarang kita aka fokus dielement yang pertama saja 

abaikan dulu card card yang lainnya

kita akan ambil salah satu element 
anggap saja kita akan ambil nama ya 

jadi kan caranya begini

*/

const nama = document.querySelector('.nama');
// maka dia akan mengambil element nama yang pertama kali dia temukan
// kalo kita console
// console.log(nama);
// tuh dapat ya namanya sandhika galih
// nah sekarang kalo saya tulis begini

// console.log(nama.parentElement);

/* 
maka kira kira yang akan tampil apa?
dari nama maka parentnya adalah card

lalu saya coba parent node

*/
// console.log(nama.parentNode);

// maka yang muncul apa
// kayaknya sama saja ya coba kita lihat
// tuh kok sama ya 
/* nanti kita akan lihat bedanya ketika kita gunakan method yang lain

nah sekarang kalo saya mau mengambil container bagaimana?

dari nama ke container 
berarti ini istilahnya container ini adalah kakek dari nama ya 

nah kalo kita mau mengambil kakeknya kita tinggal tulis begini

*/
console.log(nama.parentElement.parentElement);
/* naik satu ke card lalu naik lagi satu ke container

kalo saya kasih parent lagi pasti dia akan naik keelement atasnya lagi

sekarang kalo saya tulis next sibling
sibling itu saudara kandung tapi yang parentnya sama 

harusnya nextnya itu yang telepon karena dia punya parent yang sama 

*/ 

console.log(nama.nextSibling);

/* coba kita lihat
tuh ternyata hasilnya text ya 

kalo kita lihat isinya Node valuenya adalah enter

kenapa coba?
karena waktu kita tulis nextSibling itu yang diambil adalah node

nah kebetulan kalo kita nulisnya begini

      <span class="nama">Sandhika Galih</span>
      <span class="telp">08123456789</span>

dia mencari nextnya itukan enter sekali ya 
nah ini enternya keambil sama dia 

kecuali kalo kita hapus begini

      <span class="nama">Sandhika Galih</span><span class="telp">08123456789</span>

sekarang tidak ada karakter lagi langsung element'

maka baru dia dapat elementnya 
nah itu bedanya antara node dan element 

makanya kalo kalian mau pasti mengambil element caranya bukan nextSibling 

tapi nextElementSibling

*/

console.log(nama.nextElementSibling)

/* gitu jadi dia akan mengabaikan si enter tadi 
tuh dapatnya pasti element ya 


begitu pula dengan previous ya 

*/

console.log(nama.previousElementSibling)

/* 
kalo saya jalankan tuh gambar ya elementnya 
karena previous ini artinya sebelumnya

oke kalo kita previous lagi gimana

*/

console.log(nama.previousElementSibling.previousElementSibling)

/* 
tuh gak ada ternyata kenapa coba?
karena sigambar ini masih punya kakak gak?

gak ada abis ya 
kalo kita ganti dengan nextElementSibling
*/

console.log(nama.nextElementSibling.nextElementSibling)

/* 
maka yang ditangkap adalah close 

oke jadi mungkin itu sekilas mengenai DOM traversal atau penelusuran DOM ini

mudah mudahan kalian paham
nanti dimateri berikutnya kita nanti masih akan membahas mengenai DOM traversal 
tapi dengan beberapa kasus yang lainnya ya 


jadi mungkin itu dulu untuk materi kali ini
mudah mudahan tidak membingungkan ya 

kita ketemu dimateri berikutnya 
dan satu lagi jangan lupa titik koma ;  */