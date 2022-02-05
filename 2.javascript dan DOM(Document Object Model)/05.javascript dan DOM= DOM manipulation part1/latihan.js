/* javascript dan DOM: DOM manipulation

kita akan membahas sebuah topik yaitu DOM manipulation
ya dimateri sebelumnya kita sudah belajar mengenai beberapa method untuk menyeleksi DOM 

nah sekarang setelah kita tahu cara menyeleksi element tersebut 
nah kita akan coba manipulasi element elementnya

dan topik manipulation ini akan saya bagi menjadi 2 materi 

yang pertama manipulation element
ya contohnya kita bisa ubah warna dan lain sebagainya

yang kedua kita akan mencoba memanipulasi nodenya

nah maksutnya dari memanipulation nodenya itu apa?
ini adalah ketika kita misalnya ingin menyisipkan element baru pada halaman

ya jadi misalkan pada awalnya kalian hanya mempunya 3 paragraf pada akhirnya kalian ingin menyisipkan paragarf ke 4 

nah itu kita sebutnya dengan manipulation node 
atau juga jika kalian ingin menghilangkan elementnya 

itu juga disebut dengan manipulation node
dan ini kita akan bahas dimateri berikutnya 

nah untuk memanipulation element kita punya beberapa method yang bisa kita gunakan


manipulation element

element.innerHTML
element.style.property css
element.setAtribut()
element.classList

sebetulnya diluar ini masih banyak method yang bisa kalian gunakan untuk memanipulation element

tapi yang kita bahas hanya beberapa yang sering kita gunakan saja

dan kalo kalian lihat ada beberapa method yang sudah pernah kita coba dibeberapa materi sebelumnya

ya contohnya nih yang pertama 

inner.HTML ini digunakan untuk mengubah ini tag html yang sudah kita seleksi

lalu ada lagi method style untuk mengubah style atau css dari sebuah element yang sudah kita seleksi

lalu set atribut  untuk memanipulasi atribut pada sebuah element

dan yang terakhir secara spesifik kita akan manipulation class 
nah class ini sebetulnya merupakan salah satu atribut juga'

tapi karena class itu memiliki peran penting dalam sebuah element
ya kalian inget misalnya dalam satu tag itu boleh memiliki lebih dari satu class

dan class yang sama bisa digunakan dibeberapa element pada halaman beda dengan id

ya makanya nanti class bisa kita kelola secara khusus

begitu ya temen temen mungkin ini beberapa method yang akan kita coba pada topik manipulation element kita kali ini

untuk mempersingkat waktu kita langsung saja terapkan method method ini kedalam sebuah kasus kita

oke jadi saya punya struktur html yang sama dimateri sebelumnya 





1. element.innerHTML
    yang pertama kita akan coba innerHTML
    jadi dimana method ini digunakan untuk menganti isi dari element yang sudah kita seleksi 


    ya kita coba
    nah misalnya kita ambil contoh yang judul ini ya 

    nah misalnya element h1 ini saya seleksi 
    ya menggunakan method apapun terserah ya

    kita bisa gunakan getelementbyid karena dia punya id
    kita bisa gunakan getelementsbytagname
    kita bisa gunakan queryselector
    dan kita bisa guanakan queryselectorall

    nah terserah kalian mau gunakan yang mana
    nah intinya setelah kita seleksi elementnya lalu kita ubah innerhtmlnya 

    maka itu sama saja dengan kita mengubah isi elementnya didalam htmlnya

    yang sudah kita coba hanya mengganti tulisannya tapi sebetulnya kita bisa isikan apapun 
    nah selain tulisan kita bisa isikan tag html lagi

    ya jadi innerHTML itu apapun yang ada didalam tag htmlnya

    kita coba
*/

// const h1 = document.getElementById('judul');
// nah kalo sudah seperti ini kita bisa manipulation isinya
// h1.innerHTML = 'muiz'

// jadi gampangnya tangkap element judul lalu ganti isinya menjadi muiz
/* coba kita jalankan


nah berubah menjadi muiz
pahamnya kita bisa ganti tulisannya

nah sebetulnya kita bisa ganti apapun isi dari innerHTMLnya 
misalnya kalo saya ingin mau dia menjadi cetak miring kita bisa tambahkan tag em


*/

// h1.innerHTML = '<em>muiz</em>';

/* maka begitu saya jalankan nah tag em itu akan masuk 

nah itu kenapa didalam h1nya ada kotaknya karena saya bikin semua elementnya memiliki border ya

ya intinya kita bisa isikan apapun didalam tag yang sudah kita seleksi 
ya jadi kita bisa mengganti isi dari element yang sudah kita seleksi menggunakan innerHTML

ya misalkan contoh lain saya mau mengganti isi dari section a ini

*/
// const sectionA = document.querySelector('section#a');
// lalu mislakan sekarang saya ubah section a nya
// sectionA.innerHTML = 'hello world'

/* nah begitu saya tulis begini dia akan mengganti seluruh isinya dengan apapun yang diisikan didalam innerHTML ini

nah sebetulnya kalian bisa merangkai lagi tag htmlnya 
misalkan kalian mau tambahkan div yang didalamnya ada p yang didalamnya ada tulisan paragraf misalnya 

*/

// sectionA.innerHTML = '<div> <p> paragraf 1 </p> </div>';

/* jadi apapun yang ada didalam tagnya kita bisa ganti dengan apapun yang ada didalam innerHTML ini

paham ya itu cara menggunakan innerHTML gampang saja seperti itu 





2. element.style.properti cssnya

    nah sebetulnya inipun sudah kita coba dimateri materi sebelumnya ya 

    kalian tinggal cari element lalu tangkap lalu tambahkan method style untuk mengubah style lalu tambahkan properti cssnya mau apa

    kita coba 
    misalkan kita tangkap judulnya lagi ya

*/

// const judul = document.querySelector('#judul')
// judul.style.color = 'lightblue';

/* maka nanti tulisannya akan berubah menjadi biru muda

kalo misalkan properti cssnya lebih dari satu kata kalian harus pakai gaya huruf camel case
*/

// judul.style.backgroundColor = 'salmon';


/* itu simple saja untuk menggunakan style ya 

3. element.setAtribute();
    lalu selanjutnya kita bisa memanipulasi atribut ya dengan menggunakan setAtribute

    atau bahkan kita bisa mengelola atribut menggunakan method yang lain

    element.getAtribut()
    element.setAtribut()
    element.removeAtribut()


     ini untuk mengelola atribut ya
     atribut itu sesuatu yang menempel pada element html

     coba kita lihat ya

     sekarang misalnya kita ambil lagi judul nya ya
*/

// const judul = document.getElementsByTagName('h1')[0];

// lalu misalnya saya mau menambahkan atribut baru pada judul ini
// tadinya kan dia hanya punya atribut id ya
// misalnya saya mau kasih atribut name ya 
// caranya itu saya tulis begini

// judul.setAttribute('name', 'muiz');

/* kita save sekarang jalankan 
kalo saya inspect h1nya maka dia akan memiliki atribut baru namanya name isinya muiz

itu setAtribut 
jadi kita bisa menambahkan atribut baru apapun atributnya kedalam sebuah element

dan jika sebuah element sudah memiliki atribut misalnya atribut class
nah lalu kita mau tambahkan lagi atribut class 

maka setAtribut ini akan mengubah nama classnya dia tidak akan menambah lagi atributnya


nah itu untuk menambahkan atribut


nah kalo kita mau tahu isi atribut dari sebuah element
kita bisa pakai geAtribut

misalnya saya mau tahu atribut a nah itu kan atributnya href
kita coba 

*/

// const a = document.querySelector('section#a a');
// const hasil = a.getAttribute('href')
// ambilkan atribut dari element a yang namanya href
// kita tampilkan diconsole
// console.log(hasil);


/* maka dia akan mengembalikan isinya tuh
paham ya jadi isi dari atribut href dari element a adalah sebuah link instagram


kalo saya ingin tahu atribut id dari judul

*/
// const judul = document.getElementById('judul')
// console.log(judul.getAttribute('id'));


/* 
tuh jadi isi atribut id dari element judul adalah judul

begitu dan terakhir jika kita mau menghilangkan 
sebuah atribut kalian bisa tulis begini

misalkan saya mau ambil element a


*/

// const a = document.querySelector('section#a a');
// misalnya saya mau hilangkan atribut href
// a.removeAttribute('href');


/* maka kalo saja jalankan atributnya akan hilang 

begitu ya temen temen

nah sebetulnya kita bisa menambahkan atribut class pada sebuah element
misalnya paragraf 2

paragarf 2 dia memiliki class yang namanya p2 
misalkan saya mau menambahkan nama class lagi namanya label

nah kita tangkap dulu
*/

// const p2 = document.querySelector('section#a .p2');
// nah sekarang kalo saya tulis begini
// kita mau menambahkan atribut class yang namanya label
// p2.setAttribute('class', 'label');

/* 
nah coba kalo saya tulis begini berhasil gak label masuk ke p2

kalo saya jalankan 
kita inspect p2nya 
tuh class labelnya itu sudah ada

tapi sekarang problem class p2nya hilang digantikan dengan label

padahal kita ingin menambahkan class baru bukan mengganti classnya

tapi kalo menggunakan setAtribut ini dia akan menimpa
jadi class yang ada sebelumnya akan hilang

nah supaya kita bisa menambahkan class baru atau kita bisa memanipulasi class yang ada
kita gunakan method yang namanya classlist



4. element.classList
    ini untuk mengelola class
    ada banyak yang bisa kita lakukan untuk mengelola class ya

    kalian bisa lihat seperti ini

    element.classList.Add() // menambahkan class yang baru
    element.classList.remove() // menghapus class
    element.classList.toggle()// kalo misalkan ada element itu tidak punya class tertentu maka dia akan menambahkan tapi begitu elementnya sudah punya dia akan menghapus class tersebut

    element.classList.item() //  untuk mengetahui class tertentu yang ada didalam sebuah element
    misalkan sebuah element itu memiliki tiga class nah saya ingin tahu class ke tiganya itu apa

    element.classList.contains() //  dia mengechek dalam sebuah element punya gak class tertentu
    element.classList.replace() // untuk mengganti class yang ada menjadi class yang baru

    kita coba satu persatu

*/
const p2 = document.getElementsByClassName('p2')[0];
// misalkan saya mau menambahkan class baru
// saya cukup tulis

console.log(p2.classList)
// kalo kalian jalankan dia akan menampilkan class apa saja yang ada didalamnya

// misalnya saya mau tulis yang nama class nya label
p2.classList.add('label')

/* tuh dia sudah punya dua class ya 
ada p2 dan ada label

kalo saya tulis classlist lagi
*/
console.log(p2.classList)

/* tuh dia ada p2 dan label

nambah sudah sekarang kita coba remove

kalo saya tulis

*/
p2.classList.remove('label');

/* nah maka dia akan menghapus class yang namanya label kalo element p2 ini punya kalo tidak punya ya gak papa

lalu lihat
nah class labelnya hilang

nha tapi kalo saya pakai yang ketiga nih 
*/

console.log(p2.classList.toggle('label'))

/* nah ini dia akan mengecheck 
p2 sudah ada class label belum?

kalo belum tambahkan 
kalo sudah dia akan menghapusnya

nah true dia akan menambah
sekarang kalo saya jalankan sekali lagi
*/

console.log(p2.classList.toggle('label'))

/* false 
berarti sekarang dia menghapus classnya 

kita lihat

hilang tuh
ya jadi begitu true classnya ditambah begitu dia false classnya dihapus

sekarang saya bisa gini
kalian bkin dulu class biru muda dicssnya yang isinya background color

saya bisa tulis begini


*/
document.body.classList.toggle('biru-muda');

// kalo body dan head itu tidak usah pakai method untuk menyeleksi langsung saja tulis begitu karena dia sudah punya sendiri nodenya

// nah kalo saya tambahkan class yang namanya biru muda maka otomatis dia akan menambahkan class biru muda kedalam body
// jadi kalo saya jalankan maka dia akan berubah menjadi biru muda
// karena isi class dari biru muda adalah mengubah backgroud colornya
// begitu saya jalankan lagi dia akan menghilang

document.body.classList.toggle('biru-muda');

/* nah nanti ini bisa kalian simpan kedalam sebuah tombol

ketika tombol diklik tambah class 
ketika tombol diklik lagi hapus class

ya dan nanti itu akan kita pelajari ketika kita masuk kedalam topik mengenai events

begitu ya temen temen mengenai togle ya

sekarang item

kalo item untuk mengentahui nama class pada sebuah element yang mengacu pada index

ya jadi kalo saya tulis

*/

console.log(p2.classList)

// ya kita punya satu class ya kalo saya tambah

p2.classList.add('satu')
p2.classList.add('dua')
p2.classList.add('tiga')


// jadi sekarang p2 ini kalo saya lihat dielement classnya ada 4
// kalo saya tulis begini

// misalkan saya ingin tahu class ke 2 

console.log(p2.classList.item(2))

/* maka dia akan tampil dua
karena di mulai dari 0

dia akan mencari urutan dari class ke 2 itu apa




itu pakai item

kalo pakai constains

*/

console.log(p2.classList.contains('dua'))

/* nah ini nanya ke javascriptnya 
ada gak class yang namanya dua 
\
kalo saya jalankan true berarti dia ada
kalo saya tanya empat
*/


console.log(p2.classList.contains('empat'))

/* kalo saya jalankan false 
dia tidak punya class yang namnya empat

dan yang terakhir ada replace

kalo replace mengganti
misalnya saya tulis begini
*/
p2.classList.replace('tiga', 'empat');

/* 
replace tiga menjadi 4 
kalo saya jalankan

kita lihat elemnetsnya

maka class tiga sudah tidak ada

p2 satu dua empat
karena yang tiga sudah saya replace tadi

begitu temen temen ya

jadi kita sudah coba manipulasi class


oke jadi itu ya temen temen untuk  materi kali ini 
mudah mudahan temen temen paham

tinggal dimateri selanjutnya kita akan masuk bagaimana memnipulsi nodenya 

dimana kita bisa menambah element baru menghapus element yang ada dan lain lain


kita ketemu lagi dimateri berikutnya
dan satu lagi jangan lupa titik koma ;  */


