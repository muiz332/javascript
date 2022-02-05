/* javascript dan DOM: DOM events

kali ini kita masih ada diseri mengenai DOM dimana sekarang kita akan membahas mengenai events

topik mengenai DOM events ini adalah topik yang paling seru dimana kita menggabungkan apa yang sudah kita pelajar sebelumnya untuk membuat interaksi terhadap halaman web kita mengjadi lebih menarik lagi

selanjutnya apa itu events? terutama evenst pada javascript ini ya '

kita lihat definisinya dulu
jadi events dalam javascript adalah mempresentasikan sebuah kejadian yang nantinya terjadi didalam DOM

kejadiannya itu bisa dilakukan oleh user 
yang paling simple adalah ketika kita melakukan klik pada mouse kita

ketika kita menekan tombol pada keyboard 
ketika kita mengisikan sesuatu pada element input 
menggerakkan mouse dan lain sebagainya 

semua kejadian yang dilakukan oleh user 

atau events ini juga bisa dilakukan otomatis oleh API

nah ini maksutnya bagimana? misalnya ketika kalian menjalankan animasi menggunakan css 

nah ketika animasinya selesai dijalankan kita bisa menangkap kejadiannya / eventsnya

atau misalkan ketika halaman kita selesai diload
nah itu dilakukan secara otomatis oleh computer atau istilahnya oleh APInya

nah sekarang kita sudah tahu events itu apa 
sekarang bagaimana cara bikinnnya bagaimana cara menerapkan events ini pada progam kita menggunakan javascript

ada beberapa cara untuk menerapkan events ini 
atau istilah kita nanti adalah mendengarkan 

ya jadi computer nanti akan mendengarkan apakah ada kegiatan yang dilakukan oleh user atau tidak 

cara mendengarkannya itu kita bisa lakukan dua cara

Cara mendengarkan events

- events handler
   - inline html atribut
   - element method

- addeventListener();


1. events handler
    sekarang kita akan lihat dulu nih events handler

    nah gimana cara membuat events handler?

    kalian memanggil sebuah keyword namanya on lalu diikuti dengan eventsnya apa?

    on<events>

    jadi kalo misalkan user menekan tombol pada mouse atau pada trackpad

    events yang bisa kita dengarkan namanya onclick

    atau kita langsung saja coba ya gimana cara mengimplementasikan events hendler pada code kita 


oke jadi kita pakai code html yang sama seperti materi sebelumnya

nah sekarang apa yang akan kita lakukan?
ceritanya begini

kita akan mendengarkan sebuah aksi ketika kita malakukan sesuatu terhadap DOM ini 

misalnya tadi ya menekan tombol pada mouse atau pada trackpad

saya ingin ketika saya klik paragraf 3 ini maka backgoundnya akan berubah

itu yang paling sederhana saya klik paragraf 3 warna backgroundnya akan berubah

nah sebenarnya kita bisa lakukan itu menggunakan css 
bisa menggunakan input checkbox lalu kita kasih label pada paragraf 3nya agar menyatu dengan input 

dan ketika inputnya diklik(checked) sudara kandungnya atau sibling(~) warnah backgroudnnya akan berubah

kita bisa juga klik paragarf 3nya karena kita kasih tag label pada paragarf 3 nya 

atau kita bisa gunakan pseudo class yang berhubungan dengan link yang namanya active

misalnya 
.p3:active{
    background-color: lightblue;
}

nah ini artinya css tolong carikan class yang namanya p3 lalu ketika diklik ubah warnanya menjadi lightblue

kalo saya jalankan dan saya klik maka dia akan berubah 
tapi tombol kliknya harus ditahan kalo dilepas dia kembali lagi

nah saya inginnya begitu diklik sekali bakcground colornya berubah 

nah gimana kalo kita gunakan events 

nah sekarang kalo misalkan kita ingin memberikan warnah background pada paragraf 3 ini tanpa menggunakan events klik tadi 

kita bisa lakukan seperti ini ya

tangkap dulu elementnya lalu ubah stylenya

*/
// const p3 = document.querySelector('.p3')
// p3.style.backgroundColor = 'lightblue'

/* nah tapi diawal dia sudah langsung berubah 
saya inginnya ketika diklik 

nah berarti untuk mengubah stylenya akan dilakukan ketika eventsnya berhasil dijalankan 

paham ya
caranya bagaimana?

kita bikin function dulu deh yang namanya ubah warna 

lalu didalamnya saya simpan script untuk mengubah warna backgroudnya

*/

// function ubahWarna(){
//     p3.style.backgroundColor = 'lightblue'
// }

/* nah lalu kita bisa tambahkan evenst handler didalam elementnya

kita akan melakukan cara yang pertamanya sebagai inline html atribut

kita akan coba yang pertama walaupun yang pertama ini saya tidak sarankan untuk dilakukan 

karena 
-kita mencampur adukan antara html dengan javascript
-kita memodifikasi htmlnya, padahal kita bisa menambahkan events tanpa mengubah htmlnya

tapi gpp kita coba dulu saja ya

nah didalam tag p3 nya kita bisa tambahkan atribut namanya on lalu eventsnya click

<p class="p3" onclick="ubahWarna()">paragraf 3</p>

nah jadi ini ketika kita klik paragraf 3 kita akan jalankan sebuah function yang namanya ubahWarna tadi 

coba jalankan

ketika saya klik dia akan mengubah warnanya 
paham ya jadi kita bisa lakukan seperti itu 

kita hapus atribut onclicknya ya 

nah sekarang kita akan lakukan yang kedua kita akan gunakan method



- menggunakan method 

nah misalnya saya ingin paragraf ke dua diklik dia akan berubah juga



*/
// kita seleksi dulu elementnya
// const p2 = document.querySelector('.p2');

// p2.onclick = ubahWarna

/* p2 titik onclick dan ini akan diisi dengan function ubahwarna

tidak udah pakai kurung buka dan kurung tutup karena itu akan menjalankan functionnya 

cukup begini saja 
jadi kalo diklik baru jalankan functionnya 


kita coba jalankan 
lihat ya sekarang saya klik paragraf kedua
nah ternyata tetap yang berubah paragraf 3 

nah ini karena kita menulis didalam function bodynya itu p3 yang diubah bukan p2

nah kalo mau p2 yang berubah tinggal ganti saja p3 jadi p2


kalo lebih dari satu yang kita ubah kita bisa bikin functionnya lebih dari satu kali

tapi nanti ada cara lain yang lebih mudah dan kita tidak perlu melakukan itu 

begitu ya temen temen 
jadi kita bisa gunakan on lalu nama eventsnya apa

ini caranya events handler





2.addEventlistener()

    cara kedua kita bisa gunakan method addEventListener

    nah ini adalah method yang lebih baru dari pada on ya 

    fungsinya sama saja tapi kita lihat nanti ya perbedaanya apa

    sekarang ini yang akan saya lakukan adalah 
    gimana kalo saya akan mendengarkan event ketika paragraf 4 ini diklik saya akan menambahkan list item baru

    jadi setiap saya klik sekali maka akan menambah list item baru
    coba gimana caranya 

yang pertama kita akan tangkap dulu siparagraf yang akan diklik


*/

// const p4 = document.querySelector('section#b p');

// nah sekarang kita akan tulis addEventListener()

// p4.addEventListener('click', function(){
//     alert('oke')
// })

// dan didalam method ini kita tambahkan dua buah argument
/* yang pertama yang kalian tulis eventnya mau apa?

kalo misalkan mau diklik tulis ada click dengan menggunakan kutip begitu

ya jadi bacanya begini 
javascript cariin p4 lalu tambahkan event yang namanya klik lakukan sesuatu

lakukan sesuatunya apa 
nah kita tambahkan argument kedua lalu jalankan sebuah function

kalian boleh bikin function kayak tadi 
atau kalian boleh bikin function exspression yang tidak ada namanya ya atau anonymus function 

nah misalkan saya tulis alert saja begini 

maka ketika saya klik p4 maka harusnya muncul alert oke

coba jalankan 
klik p4 nah tuh muncul alertnya ya

kalo diklik eventny sudah berhasil dijalankan 

sekarang yang ingin kita lakukan adalah menambah list item baru dibawah sendiri

kita butuh beberapa hal ya 
kita tangkap dulu parent yang akan ditambahkan element linya



*/

// p4.addEventListener('click', function(){
//     // kita seleksi dulu parentnya ya
//     const ul = document.querySelector('section#b ul');

//     // lalu kita bikin element yang mau ditambahkan 
//     // kalo kemarin kan kita bikinnya langsung ketika halamannya dibuka ya 
//     // kalo sekarang setiap kita melakukan klik kita create element baru
//     const li = document.createElement('li');

//     // kita bikin isi elementnya 
//     const textli = document.createTextNode('item baru');

//     // kita masukkan textli didalam li
//     li.appendChild(textli);

//     // kita tambahkan parentnya yaitu ul saya tambahkan didalamnya element li
//     ul.appendChild(li);
// })


/* coba kita jalankan 
kita klik paragraf 4 nambah ya 

kalo saya klik satu kali lagi 
nambah lagi ya 

setiap saya klik paragraf 4 maka dia akan menambah elemetnnya lagi 

paham ya 
jadi itulah cara kita menggunakan event pada javascript 
keren ya 



nah sekarang kita sudah tahu cara menggunakan events handler
ita juga sudah tahu cara menggunakan eventlistener 

nah pertanyaannya sekarang adalah bedanya apa?
kapan kita pakai yang event handler kapan kita pakai yang eventlistener?

ya seperti yang saya bilang tadi menggunakan event handler merupakan cara lama

ya walaupun apa yang dilakukan event handler pasti bisa dilakukan juga oleh addeventlistener 


perbedaanya adalah ketika kita memberikan lebih dari satu perubahan pada sebuah event 

jika kita menggunakan event handler maka perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya 

sedangkan menggunakan addEventListener dia akan menambah perubahannya 

nah maksutnya gimana kita langsung lihat saja


sekarang saya ingin ketika saya klik paragraf ketiga maka background colornya berubah menjadi biru muda

*/

const p3 = document.getElementsByClassName('p3')[0]


// kita pakai yang event handler dulu
// lalu saya bisa tulis begini
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue'
// }

/* nah kalo saya jalankan tidak ada masalah ya 

tapi kalo saya tambahkan event lagi tapi eventnya sama sama onklik

dan sekarang saya mau tambahkan warna tulisannya menjadi merah
*/

// p3.onclick = function(){
//     p3.style.color = 'red'
// }

/* jadi ada dua hal nih 

kalo diklik awalnya background colornya berwarna biru 
yang kedua warna tulisannya jadi warna merah

coba kira kira apa yang akan terjadi 

apakah backgroudnnya biru dan tulisannya merah?
atau hanya salah satu saja

coba kita jalankan 

nah ternyata yang dilakukan hanya yang kedua saja 

event yang pertama akan ditimpa
jadi dia tidak peduli dengan apa yang dilakukan oleh onclick yang pertama 

ya sama seperti variable lah ya 


paham ya itu kalo kita pakai event handler 




sekarang kita akan lakukan hal yang sama tapi menggunakan addeventlistener 

*/

// p3.addEventListener('click', function(){
//     p3.style.backgroundColor = 'lightblue'
// })

// p3.addEventListener('click', function(){
//     p3.style.color = 'red'
// })

/* jadi sama ya yang kita lakukan 
bedanya tadi pakai event handler dan sekarang saya pakai addeventlistener 

coba jalankan saya klik paragraf3 nya 

nah maka dua duanya akan dilakukan 

ketika diklik p3nya
mengubah background colornya menjadi biru muda
dan mengubah tulisannya menjadi merah


jadi itu lah perbedaan antara event handler dan eventlistener 

nah setelah kita tahu perbedaannya apa 

kita juga ingin tahu event apa saja sih yang ada didalam DOM ini 

daftar event

-mouse event
    yang berdubungan dengan mouse
    ketika diklik ketika didouble klik masuk didalam mouse event

    -click
    -dblclick
    -mouseover ketika cursor berada diatas element tertentu 
    -mouseenter menyentuh elementnya 
    -mouseup
    -mouseleave meninggalkan element yang disentuh 
    -wheel
    -dll


-keyboard event 
    ketika keyboardnya ditekan dilepas dll

    -keydown
    -keypress
    -keyup

-recources event 
    ketika halamannya diload 
    jadi kita bisa mengetaui apakah koneksi internetnya lancar atau tidak

    kalo lambat berartikan resourcesnya diloadnya lambat 
-focus event 
    nah ini penting ketika kalian bikin form 
    ketika sebuah textfild atau sebuah inputan itu diklik nah dia masuknya kedalam focus
-view event

    -resize
    -scroll
-form event
    -reset
    -submit
-css animation dan transition event
-drag dan drop event
-dll


ya jadi temen temen bisa coba coba saja untuk mendengarkan event event ini 

ya sesuai dengan kebutuhan temen temen 

contohnya nih kita pakai yang dblclick

*/

// p3.addEventListener('dblclick', function(){
//     p3.style.backgroundColor = 'lightblue'
// })

/* kalo saya klik satu kali dia tidak akan berubah 
tapi jika element p3 saya double click backgroundnya akan berubah 

misalnya saya ganti lagi menjadi mouseenter
nah ini akan terjadi ketika cursor menyentuh elemetnnya 

*/
p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'lightblue'
})

/* coba jalankan 
saya sentuh element p3nya 
ketika cursornya mententuh elemetnya maka berubah warna backgroudnya 

dan misalnya ketika cursornya meninggalkan elementnya 
saya kembalikan lagi warnanya menggunakan mouseleave

*/
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'white'
})

/* coba jalankan

ketika cursornya masuk background colornya berubah menjadi biru muda 
ketika cursornya meninggalkan elementnya berubah menjadi putih lagi

nah ini sama ya ketika menggunakan properti css yang namanya hover

oke jadi itu adalah penggunakan event 
simplenya kita tentukan dulu element yang mau dievent
lalu kita tentukan eventnya mau apa lalu jalankan functionnya 

silahkan kalian gunakan event handler dan eventlisterner 
yang jangan kalian pakai adalah menggunakan event inline html atribut 



ya jadi itu saja mungkin untuk materi kali ini 

kita belajar bagaimana cara mengenai event dan menggunakannya 

nah dimateri selenjutnya kita akan membuat progam progam sederhana ya sebagai latihan kita untuk materi materi sebelumnya 

jadi nanti kalian bisa lihat implementasi dunia nyatanya mengenai DOM ini seperti apa 

oke jadi itu saja mungkin materinya 
mudah mudahan kalian paham dan tidak bingung

kita ketemu lagi dimateri berikutnya 
dan satu lagi jangan lupa titik koma ;  */



