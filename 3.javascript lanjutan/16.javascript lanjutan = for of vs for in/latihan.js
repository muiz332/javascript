/* javascript lanjutan:  for of vs for in

kali ini kita akan mempelajari mengenai dua looping baru yang ada pada modern pada javascript 

sintax looping baru ini dinamakan for..of dan for..in

nah sebelumnya kita tahu kita punya beberapa statement looping ya 
kita bisa gunakan for  while kita bisa gunakan forEach untuk melooping pada array

nah  sekarang kita akan lihat dulu satu satu bagaimana cara kerja dari 
for of dan for in ini

yang pertama kita akan bahas mengenai for of 
kalo kita lihat defisini dari web developer mozila

for of is creates a loop iterating over iterable object 

jadi for of ini adalah sebuah looping yang bisa mengulang atau menelusuri object object yang iterable


nah apa saja object iterable ini?

-string 
-array
-arguments / nodeList
-typedArray
-map
-set
-User defined iterable 

ada banyak ya nah tapi dimateri kali ini kita hanya akan bahas mengenai string array dan 
object yang mirip array yaitu arguments / nodeList

jadi ini adalah yang bisa diloopig oleh for of
nanti kita akan lihat apa bedanya dengan for in

jadi untuk lebih jelasnya kita langsung lihat saja implementasinya seperti apa 



1. for of

kita coba yang for of dulu


- pada array 
misalnya saya punya array mhs yang isinya nama nama mahasiswa

*/
// const mhs = ['muiz', 'husain', 'hasan'];

/* 
nah ceritanya saya ingin menampilkan kedalam console nama namanya saja 

inikan banyak caranya kalian bisa gunakan for biasa seperti ini 
*/

// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i])
// }

/* 
ini kalo pakai for biasa 
kalo kalian jalankan akan muncul hasilnya 

nah kita juga bisa pakai forEach seperti ini
*/

// const mhs = ['muiz', 'husain', 'hasan'];
// mhs.forEach(nilai => console.log(nilai))


/* 
nah ini jauh lebih simple dari pada kita pakai for
kalo kalian jalankan hasilnya sama persis

nah sekarang karena array ini merupaka salah satu dari iterable object 
maka kita bisa gunakan for of ya 

jadi cara menulisnya begini 


*/
// const mhs = ['muiz', 'husain', 'hasan'];

// for(const n of mhs){
//     console.log(n)
// }

/* 
kalian tinggal tulis for lalu didalamnya kita representasikan tiap tiap value pada arraynya 
sebagai variable baru apa misalkan const n 
lalu of dan nama arraynya apa 

jadi cukup menulis seperti ini saja 

tiap tiap element kira representasikan sebagai n dari array mhs

sehingga didalamnya kalian bisa tulis console.log n

kalo kalian jalankan hasilnya sama 

jadi gitu ya ada beberapa cara untuk looping isi dari array 

disini saya tidak akan membahas mengenai bagus mana cepet mana atau optimal mana
saya disini hanya kasih tau saja beragam cara untuk melooping array 

dan salah satunya karena array ini adalah iterable maka pasti bisa pakai for of


-pada string

string merupakan iterable 
nah ini perbedaan dengan menggunakan forEach

forEach tidak bisa digunakan pada string karena dia bukan array

contohnya saya punya variable nama yang isinya muiz

*/
// const nama = 'muiz'
// for(const n of nama){
//     console.log(n)
// }

/* 
kalo saya gunakan for of nanti variable n ini akan berisi m u i dan z

kalo saya jalankan maka dia akan melooping tiap tiap karakter pada stringnya 
gitu ya 


- pada array dan mengambil indexnya 

nah sekarang kita gunakan forEach untuk melooping tiap tiap nilai pada array
dan kita akan mengambil indexnya

*/
// const mhs = ['muiz', 'husain', 'hasan'];
// mhs.forEach((a, i) => console.log(`${a} adalah mahasiswa ke ${i + 1}`))

/* 
nah forEach punya parameter ke 2 untuk indexnya 
kalo saya jalankan hasilnya 

muiz adalah mahasiswa ke 1
husain adalah mahasiswa ke 2
hasan adalah mahasiswa ke 3

kalo pakai forEach bisa tapi kalo pakai for of secara default dia tidak punya index 


*/
// const mhs = ['muiz', 'husain', 'hasan'];
// for(const n of mhs.entries()){
//     console.log(n)
// }

/* 
kalo kalian pengen tetep  pakai for of kalian bisa tambahkan method yang namanya enteries
kalo kalian lihat sekarang m itu isinya adalah array 
[0, "muiz"]
[1, "husain"]
[2, "hasan"]

ada index dan ada namanya 
jadi kalo kalian mau langsung dapatin dua duanya kalian bisa langsung destructur ada disini 

*/
// const mhs = ['muiz', 'husain', 'hasan'];
// for(const [i, n] of mhs.entries()){
//     console.log(`${n} adalah mahasiswa ke ${i + 1}`)
// }

/* 
satu variable sebagai index dan satu variable sebagai namanya

kalo saya jalankan hasilnya sama ya dengan forEach
begitu sip ya 


- nodeList

selanjutnya object iterable adalah nodeList
nodeList ini ketika kita melakukan querySelectorAll pada DOM

coba kalian bikin list yang isinya nama nama mahasiswa dan kalian tangkap tuh semua li nya 
*/

// const li = document.querySelectorAll('ul li');
// console.log(li)

/* 
maka kalo saya console.log linya 
maka hasilnya NodeList(3) [li, li, li]

linya akan berbentuk nodeList dan nodeList itu bukan array 
walaupun kelihatannya sama seperti array ada indexnya dan ada valuenya 

nah kalo kalian menggunakan browser baru ya untuk melooping li nya itu kalian bisa gunakan forEach
walaupun sebetulnya forEach itu khusus untuk array 

tapi kalo kalian menggunakan browser yang lama itu untuk menggunakan forEach kalian harus paksa nodeListnya jadi array murni 

ya bisa menggunakan Array.form()
nah tapi kita tidak akan menggunakan Array.form() sekarang kita akan gunakan for of

jadi saya bisa tulis begini 

*/
// const li = document.querySelectorAll('ul li');

// for(n of li){
//     console.log(n.innerHTML /* atau kalian bisa gunakan textContent */)
// }

/* 
ya kalo kalian tidak deklarasikan variablenya 
javascript otomatis akan mendeklarasikan variable seperti ini 

var n = 
jadi dia adalah variable yang dibuat menggunakan keyword var


kalo kalian menggunakan for of ini langsung bisa karena nodeList itu adalah iterable 
gitu ya 



-arguments

selanjutnya kita juga bisa gunakan untuk arguments 

contohnya gini saya punya function yang namanya jumlankanAngka 
nanti function ini akan mengembalikan penjumlahan dari argument yang diberikan dalam bentuk array 

*/

// function jumlahkanAngka(){
//     return arguments
// }
// console.log(jumlahkanAngka(1,2,3,4,5))

/* 
kalo saya kirimkan keparameter harusnya diparameter itu ada variable untuk menangkap nilainya 
tapi kita tidak akan gunakan parameter untuk menangkap nilai yang dikirimkan 

sekarang kita tangkap menggunakan arguments, 
secara default kalo kita tidak tangkap menggunakan parameter maka nilainya akan ketampung diarguments

kalo kita lihat isi dari argumentsnya bentuknya seperti array 
padahal dia arguments bukan array 

nah sekarang gimana caranya saya ingin menjumlahkan semua nilainya ?

sebetulnya kalo array itu gampang banget kita tinggal reduce saja 



*/

// function jumlahkanAngka(){
//     return arguments.reduce((acc, curr) => acc + curr)
// }
// console.log(jumlahkanAngka(1,2,3,4,5))


/* 
karena ini bukan array kalo kita paksa menggunakan reduce ya akan eror 
begitu pula jika kita pakai forEach dia akan eror

kita bisa ubah arguments menjadi array atau kita langsung saja menggunakan for of untuk melooping object iterable 

jadi saya bisa tulis begini 



*/
// function jumlahkanAngka(){
//     let h = 0
//     for(const n of arguments){
//         h += n
//     }
//     return h
// }
// console.log(jumlahkanAngka(1,2,3,4,5))


/* 
jadi kita bisa pakai for of untuk melooping isi dari arguments 
kalo kita jalankan maka hasilnya jadi 15

mudah mudahan sampai disini kalian paham ya 
beberapa cara untuk melakukan looping pada iterable object


2. for in

nah kalo tadi kita sudah bahan mengenai for of 
sekarang kita akan bahas mengenai for in 

nah for in ini katanya creates a loop only iterating over enumerable

jadi ini hanya untuk enumerable 
enumerable disini adalah properti pada object

nah kalo tadikan iterable itu dia tidak punya properti 
nah untuk object itu kita bisa looping propertinya mengunakan for in

contohnya begini 
misalkan saya punya variable mhs yang bentuknya object


*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin332@gmail.com'
// }

/* 

kalo kita mau melooping isinya kita tidak bisa pakai for of
kalo kalian tetap memaksa pakai for of dia akan eror

*/

// for(a of mhs){
//     console.log(a)
// }

/* Uncaught TypeError: mhs is not iterable

katanya si object ini bukan termasuk bagian dari iterable object



*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin332@gmail.com'
    
// }
// for(a in mhs){
//     console.log(a)
// }

/* 
nah kalo kita pakai ini baru jalan 
kalo saya jalankan maka akan muncul propertinya 
dia akan melooping enumerablenya 

nama umur dan email

jadi kalo kalian mau loopingnya properti dari object kalian pakai for in
kalo kalian mau mengulang isi array dan iterable object lainnya kalian bisa gunakan for of 

dan terakhir kalo kalian ingin mengulang isinya bukan propertinya itu kalian bisa tulis begini 


*/

// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin332@gmail.com'
    
// }
// for(a in mhs){
//     console.log(mhs[a])
// }

/* 
jadi saya tulis mhs index ke a
maka yang diambil sekarang valuenya 

kalo saya jalankan dia akan muncul valuenya 

begitu ya mudah mudahan sampai disini kalian paham 

jadi mungkin itu penjelasan mengenai for of dan for in

yang merupakan looping yang baru ya dijavascript modern

kita akan lanjutkan javascript lanjutan ini dimateri selanjutanya 
dan seperti biasa jangan lupa titik koma ; */
