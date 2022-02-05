/* javascript lanjutan: arrow function

kali ini kita akan masuk ke topik yang namanya arrow function 

apa itu arrow function? kita lihat dulu contoh code barikut ini

jadi mungkin kalian sudah familiar dengan cara pembuatan function dijavascript yang disebut dengan function declaration

function tampilPesan (nama){
    alert('halo' + nama)
}
tampilPesan('muiz)

nah disini kita mendeklarasikan function seperti bahasa bahasa pemrograman lainnya ya 

kita tulis keywordnya function lalu nama function lalu gunakan kurung untuk menyimpan argument
lalu kurung kurawal buka dan diisi dengan body dari functionnya 

nah jadi kita deklarasikan dulu baru dipanggil 
ya kalo untuk panggilnya cukup tulis nama function diikuti dengan kurung buka dan tutup

ya kalo ini kayaknya tidak ada masalah ya 
nah dijavacript itu kita juga bisa membuat function menggunakan yang namanya function exspression

let tampilNama = function(nama){
    alert(nama)
}
tampilNama('muiz)

dimana functionnya disimpan dulu kedalam sebuah variable 
untuk cara penggilnya sama tinggal tulis nama variable lalu diikuti dengan kurung buka dan tutup untuk mengisikan parameter

gitu jadi ada dua jenis function
nah selanjutnya arrow function itu gimana?

nah arrow function ini kalo menurut mozila developer network
arrow function adalah bentuk lain yang lebih ringkas dari function exspression

nah jadi ini adalah cara lain untuk kita menuliskan function
tapi menjadi lebih ringkas

ya jadi contohnya tadi kita punya function exspression seperti ini

let tampilNama = function(nama){
    alert(nama)
}
tampilNama('muiz);


kalo mau kita ringkas berubah menjadi seperti ini 

let tampilPesan = (nama) => {
    alert(nama)
}
tampilPesan('muiz');


jadi keyword functionnya hilang ya hanya ada kurung buka dan tutup untuk menyimpan parameternya 

lalu tanda panah gabungan dari sama dengan dan lebih besar dari
lalu isinya sama bisa menggunakan kurung kurawal

nah jadi simplenya begitu untuk mengubah penulisan function exspression agar lebih ringkas lagi

nah tapi nanti kita lihat ada beberapa hal yang berbeda dengan function exspression

nah itu akan kita bahas dimateri kali ini dan dimateri berikutnya 

oke ya langsung kita coba saja bagaimana cara membuat arrow function pada javascript


*/

// const tampilNama = function (nama){
//     return `halo ${nama}`
// }
// console.log(tampilNama('muiz'));

/* 
saya punya variable yang namanya tampilNama yang isinya adalah function 
yang didalamnya ada return dan string literal

ya dan untuk string literali ini akan kita bahas nanti dimeteri terpisah ya 

kita coba jalankan 
tampil ya muiz

nah sekarang gimana caranya mengubah code tersebut menjadi arrow function ?

oke jadi caranya kita bikin dulu variable 


*/
// const tampilNama = (nama) => {return `hallo ${nama}`}
// console.log(tampilNama('muiz'))


/* 
nah sekarang variablenya diisi dengan arrow function
tidak perlu menggunakan keyword function 

langsung saja kurung bukan untuk menyimpan parameter 
lalu tanda panah sama dengan lebih besar dari dan kurung kurawal 

kalo kita jalankan nah muncul ya
jadi kita bisa bikin lebih ringkas seperti ini

paham ya 

dan cara penulisan arrow function ini ada beberapa bentuk ya 
code diatas kalo menulisnya satu parameter

nah kalo misalkan parameternya lebih dari satu ya tinggal tambahkan koma saja didalam kurung buka dan tutupnya 

selanjutnya kalo misalnya parameternya satu sebenarnya kalian tidak perlu pakai kurung 

*/
// const tampilNama = nama => {return `hallo ${nama}`}
// console.log(tampilNama('muiz'));

/* 
oke jadi sama saja 

lalu kalo misalnya isi functionnya hanya return saja seperti code diatas 
kalian bahkan tidak perlu menulis returnnya dan bahkan kalian tidak perlu menulis kurung kurawalnya 

*/
// const tampilNama = nama => `hallo ${nama}`
// console.log(tampilNama('muiz'))

/* 
jadi sama saja 
ini disebutnya dengan implisit return 
jadi returnnya tidak usah ditulis 

oke paham ya 
walaupun ini sangat ringkas nih kalian harus bener bener paham maksutnya 

satu parameter dan isinya hanya return saja tidak ada baris yang lain

dan kalo misalnya tanpa parameter
kalo kalian tidak ada parameternya wajib menulis kurung buka dan tutupnya 

begini

*/
// const tampilNama = () => {return `hallo world`}
// console.log(tampilNama());

/* 

ya jadi ini kalo tidak ada parameternya lebih ringkas lagi 


begitu ya jadi ini beragam cara membuat arrow function pada javascript
mudah mudahan sampai disini paham ya 

nah sekarang pada kenyatannya nanti kalian tidak akan membuat fungsi yang sangat sederhana seperti ini 

kita akan buat contoh lain dari arrow function 
misalnya dengan menggunakan function map pada javascript 

contohnya begini
misalnya saya punya sebuah array namanya mahasiswa yang isinya ada tiga orang mahasiswa 

nah ceritannya kalian ingin menghitung jumlah huruf dari masing masing mahasiswa

kalo menggunakan function biasa itu seperti ini


*/
// let mahasiswa = ['muiz', 'husain', 'hasan'];

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length
// })
// console.log(jumlahHuruf)


/* 
kalo ini kalian jalankan maka akan ada array baru yang isinya jumlah huruf dari tiap tiap value pada array

nah sekarang gimana kalo menggunakan arrow function?
coba kita ubah function diatas menjadi arrow function ya 

*/
// let mahasiswa = ['muiz', 'husain', 'hasan'];

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

/* 
nah karena parameternya cuma satu kalian boleh tidak menulis kurung buka dan tutupnya 

lalu tulis tanda panah 
nah karena didalam functionnya hanya berisi return kita bisa hilangkan returnnya dan hilangkan kurung kurawal buka dan tutupnya 

nah jadi sekarang jauh lebih ringkas 
kalo kita jalankan harusnya sama 

dan terakhir kalo misalkan kalian ingin mengembalikannya dalam bentuk object bukan array lagi


nah sekarang kita kembalikan dalam bantuk object
kalo object kita bisa tulisan kurung kurawal didalam objectnya 

let mahasiswa = ['muiz', 'husain', 'hasan'];
let jumlahHuruf = mahasiswa.map(nama => {})

nah tapi problemnya adalah kalo saya tulis begini 
javascriptnya akan menganggap kita mau melakukan return bukan membuat object

nah supaya jadi object kalian harus bungkus lagi menggunakan kurung buka dan tutup

*/
// let mahasiswa = ['muiz', 'husain', 'hasan'];
// let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jumlahHuruf : nama.length}))

// console.log(jumlahHuruf)

/* 
nah sekarang baru didalamnya kalian buat objectnya 
jadi propertinya ada nama yang diisi dengna value arraynya
dan jumlahHuruf

nah kalo saya jalankan 
maka tampil tuh 

dan kalo kalian ingin tampilnya rapi tidak bentuknya object biasa seperti ini 

kalian bisa ganti console.lognya dengan console.table


*/
// let mahasiswa = ['muiz', 'husain', 'hasan'];
// let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jumlahHuruf : nama.length}))

// console.table(jumlahHuruf);


/* 
ya nanti ini akan berubah menjad table begitu 

dan ini kalo misalkan kalian mau mengembalikan object yang propertinya sama dengan nilainya 
kalian cukup menulisnya satu saja 


*/
let mahasiswa = ['muiz', 'husain', 'hasan'];
let jumlahHuruf = mahasiswa.map(nama => ({nama, jumlahHuruf : nama.length}))

console.table(jumlahHuruf);

/* 
tuh sama ya 
gitu ya temen temen 

jadi mungkin itu dulu penjelasan awal mengenai arrow function ini 
bagaimana cara kita membuat arrow function dan beragam cara pembuatannya 

ya mudah mudahan kalian paham dan dimateri berikutnya kita akan lanjutkan lagi membahas perilaku lain dari arrow function ini

ya jadi itu saja materinya 
kita ketemu dimateri berikutnya 

dan satu lagi jangan lupa titik koma ; */