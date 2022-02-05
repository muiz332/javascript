/* var let dan const

dimateri kali ini kita akan membahas tiga hal ini 
var 
let 
const

kalian mulai sekarang jangan pernah menggunakan var pada saat mendeklarasikan variable ganti var dengan let

nah sekarang kita akan pahami kenapa kita tidak menggunakan var saat membuat variable dijavascript

jadi sekali lagi ada tiga cara untuk membuat variable didalam javascript

dan harusnya kalian sudah paham mengenai apa itu var dan cara penggunaanya bagaimana

dan syarat untuk mengikuti seri ini kalian harus paham mengenai keyword var

tapi sakarang kita coba dulu untuk yang keyowrd varnya

nah misalkan saya punya variable yang namanya i yang diisi dengan 10

*/
// var i = 10;
// console.log(i);

/* kalo misalkan saya console log harusnya didalam console akan muncul isi dari variable i

ya ini tidak aneh ya
nah sekarang bagaimana kalo kita hilangkan keyowrd varnya 

kira kira bisa gak?
coba ya 

*/

// i = 10;
// console.log(i);

// kita lihat hasilnya 
/* 
masih bisa ya 
jadi yang terjadi javascriptnya seolah olah menambahkan keyowrd var didepan i nya

sekarang kita lihat 
kalo saya simpan console lognya diatas variablenya

ya jadi kita panggil dulu baru kita deklarasikan variablenya

kira kira eror gak?


*/

// console.log(i);
// var i = 10;

/* kira kira hasilnya apa?
coba kita jalankan 

nah tampilnya undefined

nah kalian mesti paham undefined adalah nilai yang ada didalam javascript itu ada yang disebut undefined

nah ini kenapa kira kira ada nilai undefined padahal kita tidak mengisikan nilai tersebut kedalam variable i 

nah ini didalam javascript ada istilah yang dinamaka denga hoisting

kita pahami dulu apa terjemahan dari hoisting
anggap saja hoisting itu seperti orang yang mengerek bendera keatas

nah itu namanya benderanya dihoisting 
atau dinaikkan dulu keatas 

nah sama seperti javascaript kalo kita melakukan hal tadi sebenarnya yang terjadi itu begini 

sebelum console lognya itu dibuat dulu var i begini 

*/

// var i;
// console.log(i);
// lalu setelah console.lognya jadi seperti ini 
// i = 10;

/* jadi variblenya dinaikkan dulu keatas dan dia diisi dengan nilai undefined gitu

makanya begitu kita menuliskannya begini maka nilainya undefined

karena tadi nilainya didefinisikan dulu dengan undefined

nah ini namanya hoisting untuk variable 
sebetulnya konsep hoisting ini berlaku terhadap function dan yang lainnya ya 

intinya untuk variable itu perilakunya seperti ini 

ya jadi dia akan dinaikkkan dulu meskipun kalian menuliskannya seperti ini 

*/
// console.log(i);
// var i = 10

// atau pada saat kalian menuliskannya begini
// var i;
// var j;
// console.log(i);
// i = 10, j = 'muiz'

/* paham ya kenapa nilainya undefined

padahal harusnya itu eror kalo kalian pernah menggunakan bahasa pemrograman yang lain seperti c atau java

kalian melakukan hal ini pasti hasilnya eror 
karena kita tidak mungkin memanggil sebuah variable sebelum mendefinisikannya 

kalo dijavascript masih boleh tapi tadi perilakunya agak aneh

nah sekarang gimana cara mengatasinya ?
ganti saja varnya menjadi let seperti ini 

*/
// console.log(i)
// let i = 10;

/* maka ini akan eror nah ini sama seperti bahasa pemrogaman yang lainnya 

itu jadi salah satu alasan kenapa menggunakan let atau const ya ini juga sama 
nah sekarang perilakuknya juga sama seperti bahasa bahasa pemrogaman yang lain

itu karena seharusnya sebelum kita memanggil sesuatu harus dibuat dulu variablenya 


*/
// const i = 10;
// console.log(i);

/* jadi kalo ini saya simpan diatas kita ganti const
baru tidak ada masalah

paham ya 

sekarang kita kembali lagi menggunkan var untuk alasan yang selanjutnya

contohnya gini saya menggunakan looping 

*/
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

/* coba kalo ini kira kira tampilnya apa 

pengulangannya akan dilakukan sebanyak 10 kali
begitu i nya sampai 10 maka dia akan keluar dari pengulangannya 

jadi harusnya tampil angka 0 - 9
kita jalanka 

ya tidak ada yang aneh ya 
kalo saya tambahkan console log i kira kira tampilnya apa 

*/
// console.log(i);

/* tuh hasilnya angka 10
karena i nya diincrement untuk yang terakhir kalinya 

oke harunya disini tidak ada masalah

nah sekarang kalian lihat 
didalam javascript itu memungkinkan kita mengakses sebuah variable didalam loopingnya 

nah kalo didalam bahasa pemrogaman yang lain ini juga tidak bisa
karena bahasa pemrogaman yang lain menganut konsep yang dinamakan dengan block scope 

lingkup pada block progam 
block progam  itu ini kalo kalian ketemu dengan ketemu kurung kurawal buka dan tutup itu disebutnya block

nah kalo dibahasa pemrograman yang lain ini eror
karena tidak bisa mengakses i yang ada didalam block

javascript tidak menganut ini, karena javascript menganut function scope

nah ini harusnya kalian sudah pernah pelajari dimateri sebelumnya ya 

nah memang harusnya ini eror karena kita tidak bisa mengakses isi variable yang ada didalam block seperti ini 

nah gimana cara mengatasinya?
supaya variable i ini tidak bisa kita akses kita harus ubah scopenya menjadi function scope

ini misalnya saya simpan kedalam sebuah function 

*/

// function tes(){
//     for(var i = 0; i < 10; i++){
//         console.log(i)
//     }
// }
// nah jadi sekarang fornya ada didalam function
// nah sebelum kita console log i nya kita panggil dulu functionnya
// functionnya tidak akan bisa jalan kalo tidak kita panggil namanya 

// tes();
// tapi sekarang kalo saya tulis console log i 
// console.log(i);

/* kira kira kita bisa akses variable i gak?
gak bisa ya ini kalo saya jalankan akan eror

ini lah yang disebut dengan function scope

nah makanya para programmper javascript itu ngakalin 
gimana agar supa variablenya itu berperilaku sama seperti bahasan pemrograman yang lain tapi menggunakan function scope

nah biasanya kita menggunakan sesuatu yang disebut dengan ini 

IIFE atau SIAF ini sama saja ya

Imediately 
Invoked
Function       IIFE
Exspression

jadi function exspression yang dipanggil langsung ketika dibuat itu ya

sama seperti ini SIAF

Self
Invoking
Anonymous
Function

itu sama saja ini kita buat supaya kita menjagar variable yang ada didalam functionnya itu tidak bisa diakses dari luar

kita coba ya caranya begini 
kan tadi SIAF itu adalah self invoking anonymous function

anonymous function itu artinya tidak bernama
ya kita bisa bikin function tidak bernama didalam javascript

menggunakan apa? menggunakan function exspression

nah function exspression itu gini 

var x = function(){

}

nah ini function exspression

tapi kita juga bisa bikin si function ini tidak perlu kita simpan kedalan variable tapi kita langsung jalanin

ya caranya kita bikin kurung dulu 
tadi kan katanya kurung itu untuk menjalankan functionnya kan

lalu didalamnya kita bikin function 

dan diakhir kurung kurawal tutup kita tambahkan kurung buka dan tutupnya
begini jadinya

*/

// (function(){

// }());

/* ini adalah self invoking anonymous functin atau imidiately invoked function exspression

sekarang kalo saya tulis didalamnya for tadi

*/

// (function(){
//     for(var i = 0; i < 10; i++){
//         console.log(i);
//     }
// }())

/* ya ini kalo kita jalankan itu tidak ada masalah ya 

tapi ketika kita tulis console log i diluar functionnya 

*/

// console.log(i);

/* nah maka dia akan eror
ini memang yang kita harapkan 

nanti akan kebayang ya ketika kalian bikin progam javascriptnya besar atau nanti kalian juga berkolaborasi

nah itu memungkinkan kalian itu punya naman variable yang sama tapi fungsinya beda
atau misalnya kalian script punya orang lain library yang ada diinternet 

misalkan kalian pakek kebetulan nama variablenya sama tapi fungsinya beda
nah itu akan menyebabkan bentrok ya karena perilakunya beda 

makanya gunakan IIFE / SIAF buat menjaga satu file javascript ini kedalam sebuah function exspression

ya jadi nanti kalian tulisnya didalam function begitu 
jadi kita ngakalinnya pakai ini paham ya 

nah itu cara lamanya sekarang dengan adanya javascript yang baru ya es6 
itu kita cukup menggunakan let saja 

dan itu sudah bisa melakukan perlaku yang seperti ini 
jadi kita tidak perlu ribet lagi bikin function  ini ya

ya jadi kita ganti varnya jadi let saja begini


*/

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log(i)

/* tuh sama persis jadi kita tidak bisa mengakses dari luar blocknya 
karena sekarang begitu kalian pakai let dia menganut block scope bukan lagi function scope


begitu temen temen mudah mudahan sampai disini paham 

nah sekarang pertanyaannya gini 
kenapa sih kok javascript itu menganut function scope padahal bahasa pemrogaman yang lain sudah menganut block scope 

nah itu kayaknya pada saat itu block scope yang benar 

ya kenapa pada saat pembuatan javascript itu langsung saja menganut block scope?

nah kata pak brandon each waktu 10 hari itu tidak cukup untuk membuat block scope 
nah itu lah kenapa agak aneh ya perilakuknya 

ya jadi seperti itu awalnya memang pak brandon each sudah tahu bahwa function scope itu bukan lah sesuatu yang tepat


oke jadi sekarang kita tahu ya kalo let dan const itu menganut block scope dan itu yang bener maka saya sarankan jangan pernah lagi menggunakan var 

silahkan gunakan dua ini karena dia menganut block scope 

kita sudah tahu let itu seperti apa 
nah sekarang bedanya yang const itu apa ?

coba kita lihat

kalo misalnya kita punya let i sama dengan 10

*/

// let i = 10;
// nah ini caranya sudah benar 
// tapi kalo misalnya kita yakin nanti didalam progam kita, kita tidak akan pernah mengubah i nya

/* ya jadi i nya akan tetap 10 saja terus itu jangan pakai let 

kalo kita yakin bahwa nilainya tidak akan berubah itu gunakan const
*/
// const i = 10;
// jadi kalo misalkan saya ubah isinya begini

// i = 20;
// console.log(i);

/* maka kalo saya jalankan itu dia eror

kalo pakai let tidak akan eror
jadi kalo kalian bisa pastikan nilai dari variable ini isinya tidak pernah diganti ya gunakan const

bahkan ada yang bilang gunakan let pada saat kalian menggunakan looping saja 

seperti yang sudah kita coba tadi ya 

*/

// for(let i = 0; i < 10; i++){

// }

/* karena i nya itu berubah dia increment ya terus menerus sampai 10 kali 
maka gunakan let 

karena kalo pakai const dia tidak bisa di ++ pahamya

jadi nanti kita akan banyak gunakan const ini ketika nilainya tidak berubah 

nah sekarang pertannyaan selanjutnya adalah kenapa kok ada const 

kenapa tidak let saja begitu 

nah karena kita menggunakan const itu supaya meminimalisit perubahan state 

ya jadi sebisa mungkin nilai dari variable itu tidak berubah

tapi sebetulnya const ini tidak sepenuhnya tidak bisa diubah ya atau istilahnya imiutable 

ya apa itu imiutable dan imiutabelity
itu akan saya bahas dimateri yang lain ya

jadi const itu tetep bisa diubah tapi caranya lain misalnya saya punya mhs yang berisi object

*/

// const mhs = {
//     nama : 'muiz',
//     umur : 18
// }
// console.log(mhs)

// kalo misalkan kita ubah umurnya 

// mhs.umur = 20;

// console.log(mhs);

/* nah ini masih bisa
asalkan kita tidak mengganti objectnya 

kalo misalnya kita ganti mhsnya dengan object baru misalnya gini

*/

// mhs = {
//     jurusan : 'teknik informatika'
// }
// console.log(mhs);

/* kita ganti bener bener menjadi object yang baru 
dia akan eror

kita tidak bisa mengisikan sesuai yang baru
paham ya begitu pun dengan array 

kalo kalian bikin array 123

*/

const myArr = [1,2,3];
// nah sekarang isinya diganti dengan array yang beru 

// myArr = [1,2,3,4];

// console.log(myArr);

// ini akan eror tapi kalo kalian mau menambahkan angka 4 saja diindex terakhirnya 

myArr.push(4);
console.log(myArr);

/* coba kita lihat
nilainya masuk dan array tidak berubah 

jadi kita bisa ganti isinya tapi kita tidak bisa benar benar mengganti isinya semuanya 

mudah mudahan paham

ya sekali lagi kenapa kita gunakan const

untuk meminimalisir perubahan state 
itu karena kalo kita nimpa nimpa isi variable itu makin lama progamnya makin besar itu akan semakin merepotkan 

nah merepotkannya gimana?
gini deh contoh sederhananya 

pernah gak kalian dirumah pakai internet terus suatu saat internet kalian jadi lambat lah atau misalkan jadi gak jalan internetnya

yang kepikiran sama kalian apa 
pasti televon ke customer servicenya ya 

terus nanya ini kenapa internet saya lambat dan gimana cara mengatasinya 
pasti disuruhnya untuk merestart modemnya 

nah terus kalian restart nah ternyata jadi jalan internetnya 
nah kenapa bisa jalan?

karena begitu kita restart pada modem kita itu akan membersihkan keadaan sebelumnya jadi statenya dimulai lagi dari 0 

semua pengulangan pengkondisian semua balik ke keadaan awal

nah itu maksutnya dengan meminimalisir perubahan state tadi

baik jadi itu ya temen temen materi kali ini 
mudah mudahan kalian paham mengenai penggunaan let dan const ini 

sekali lagi sekarang tidak usah lagi menggunakan var gunakan saja 
const kalo misakan kalian yakin nilainya tidak akan berubah

kalo nilainya akan berubah gunakan saja let 

jadi sampai disini dulu materinya ya 

dan satu lagi jangan lupa titik koma ;  */