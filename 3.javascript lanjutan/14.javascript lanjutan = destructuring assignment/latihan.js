/* javascript lanjutan: desturcturing assignment

kali ini kita akan membahas mengenai destructuring variable atau destructuring assignment

jadi fitur ini adalah fitur yang unik dimodern javascript ini ya 

apa itu destructuring assignment?
destructuring assignment adalah expression pada javascript yang membuat kita bisa membongkar value dari array atau properti dari object kedalam sebuah variable terpisah

nah contoh sederhananya itu kalian bisa lihat seperti ini 

misalnya kita punya sebuah variable yang dia adalah array 

*/
// const coba = ['satu', 'dua', 'tiga']

// nah ini bisa buat nilai nilai ini menjadi nilai pada variable terpisah 
/* 
kalo sebelumnya kan gampang saja ya kita bikin variable a yang kita isi dengan coba index ke 0
bikin lagi b kita isi coba index ke 1 dan seterusnya 

*/

// const [a,b,c] = coba
// console.log(a) // hasilnya satu
// console.log(b) // hasilnya dua
// console.log(c) // hasilnya tiga

/* 
nah tapi dengan menggunakan destructuring assignment ini 
kita cukup tulis deklarasi variablenya lalu tulis kurung siku buka dan tutup

lalu didalamnya kita isi dengan nama nama variable yang ingin kita gunakan
lalu kita assignment dengan array coba tadi

nah sehingga secara otomatis isi dari expression destruction ini akan 
dimasukkan tiap tiap nilai dari arraynya

misalnya a index ke 0 diisi dengan satu index kenol juga dan seterusnya 
sehingga kalian tidak perlu assignment satu persatu lagi

jadi kalo saya console a muncul satu
b muncul dua c muncul tiga, keren ya 

nah begitu pula dengan object
misalkan kita punya object mhs yang punya beberapa properti

*/

// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     jurusan : 'teknik informatika'
// }

/* 
nah kalo kita mau simpan tiap tiap propertinya kedalam sebuah variable terpisah
kan biasanya kita bikin variable nama diisi dengan mhs.nama dan seterusnya 

nah kalo sekarang tidak usah 
kita tinggal bikin sintax destructuringnya kurung kurawal 

jadi kalo kurung kurawal untuk object dan kurung siku untuk array 

*/
// const {nama, umur, jurusan} = mhs
// console.log(nama) // hasilnya muiz
// console.log(umur) // hasilnya 18
// console.log(jurusan) // hasilnya teknik informatika


/* 
saya punya nama, umur, jurusan yang diassignment keobject mhs 
langsung secara otomatis menjadi variable terpisah 
yang isinya sudah mengambil dari objectnya 

jadi agak unik nih 
nah sederhananya seperti ini 
kalo kita mau lihat lebih detil lagi kita coba  penggunaan sederhanya 



1. distructuring assignment pada array

misalnya saya punya variable perkenalan yang isinya adalah array string

*/
// const perkenalan = ['halo', 'nama', 'saya ', 'muiz'];


/* 
nah sebelum menggunakan destructuring saya mau mengambil tiap tiap nilai pada array sebagai variable terpisah
caranya kan gampang saja ya 

*/
// const salam = perkenalan[0],
// nama = perkenalan[3]
// console.log(salam)
// console.log(nama)

/* 
kalo saya munculkan diconsole salam maka hasilnya halo
begitu pula kalo saya muculkan nama diconsole 

ya ini tidak ada masalah kalo kita menggunakan teknik biasa
sekarang kalo kita mau pakai destruturing 
kita cukup bikin variable yang bentuknya array untuk membongkar array

yang didalamnya terdapat nama nama variable yang namanya bisa bebas



*/
// const perkenalan = ['halo', 'nama', 'saya ', 'muiz'];

// const [salam,satu, dua, nama] = perkenalan
// console.log(salam)

/* 
yang diassignment kedalam array perkenalan 
jadi nama variable index ke 0 diisi dengan value dari array perkenalan index ke 0 juga
begitu pula seterusnya

ketika saya tulis console.log salam maka akan muncul halo
console log dua maka muncul nama dan seterusnya gitu ya 

nah sekarang kita juga bisa melompati element element pada array 
misalnya saya tidak mau memasukkan semua kedalam variable 

saya ingin salam dan nama saja 
satu dan dua tidak usah



// skipping values
nah kita bisa skip
caranya kita tinggal hapus satu dan duanya saja komanya jangan


*/
// const perkenalan = ['halo', 'nama', 'saya ', 'muiz'];

// const [salam, , , nama] = perkenalan
// console.log(nama)

/* 
jadi salam skip skip nama
dan sekarang string nama dan string saya tidak masuk kedalam variable
kalo saya tulis nama muncul ya muiz


// swap values (menukar isi dari array)

nah selajutnya kita bisa melakuakn swap values
nah ini sudah pernah kita coba dimateri materi sebelumnya ya 

jadi kalo saya punya dua variable

*/
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1


/* 
nah kita langsung saja gunakan [a,b] yang diassignment dengan [b,a]
maka kalo saya console harusnya hasilnya 2 dan 1 ya 

gitu ya jadi bisa saja sintax destructuring ini untuk menukar isi pada variable

nah kita juga bisa gunakan retrun value pada function 


// return value pada function

jadi functionnya bisa mengembalikan array dan arraynya langsung ditangkap oleh sintax destructuring itu
contohnya begini

jadi saya punya function coba yang mengembalikan array 1 dan 2


*/
// function coba(){
//     return [1,2]
// }

// const [a,b] = coba()
// console.log(a)
// console.log(b)

/* nah dengan menggunakan destructuring ini kita bisa langsung masukkan 
1 dimaukkan kedalam variable a dan b dimasukkan kedalam variable b


// default value

nah selanjutanya kita bisa atur nilai default pada sebuah variable

*/

// const angka = [5,4]

// let [a = 1, b = 2, c = 3] = angka
// console.log(a)
// console.log(b)
// console.log(c)

/* 

jadi misalkan yang pertama a saya isi dengan 1 dan b saya isi dengan 2 dan c saya isi dengan 3
lalu saya assignment dengan array angka yang isinya 5 dan 4 

maka yang terjadi adalah a diisi dengan 5 dan b diisi dengan 4 
nah karena diarray angka itu hanya memiliki 2 value maka untuk yang c nilainya adalah 3
karena 3 adalah nilai default dari c 



dan yang terakhir kalo misalkan kalian mau membongkarnya banyak nilai arraynya 
tapi nantinya kalian tidak tahu ada berapa element 
nah disini kalian bisa gunakan seperti dimateri sebelumnya 
kita bisa gunakan rest parameter


// rest parameter

misalkan gini kalo saya punya variable a dan b ya 
*/

// const [a,b] = [1,2]
// console.log(a)

/* 
kalo begini tidak ada masalah ya 
tapi gimana kalo ada tiga nilai pada arraynya 
kalo empat gimana kalo 10 gimana ?

nah kita bisa menangkap nilai sisanya menggunakan rest parameter

*/
// const [a, ...values] = [1,2,3,4,5]
// console.log(values)

/* 
jadi saya hanya menangkap 1 value yaitu 1 dimasukkan ke a 
dan sisanya masuk kedalam values yang mengembalikan array

jadi nilai 2 3 4 5 akan menjadi [2,3,4,5]

gitu ya temen temen untuk array 
nah sekarang kita masuk keobject



// destructuring object

misalkan kita punya object namanya mhs



*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18
// }

/* 
nah sekarang gimana caranya kita mau menangkap tiap tiap propertinya sebagai variable

nah untuk object cukup gunakan kurung kurawal buka dan tutup
lalu tuliskan nama variablenya sesuai dengan nama propertinya 

jadi ini harus sama 
*/

// const {nama, umur} = mhs
// console.log(nama)

/* 
kita tulis nama dan umur lalu diisi dengan mhs
kalo saya console nama maka akan muncul muiz ya 

jadi untuk nama variablenya tidak boleh sembarang ya 
harus sesuai dengan nama propertinya 

// assignment tanpa declaration

nah dengan menggunakan object kita tidak perlu melakukan declaration dulu 
contohnya seperti ini 
*/


// ({nama, umur} = {
//     nama : 'muiz',
//     umur : 18
// })
// console.log(nama)

/* 
dan kita tidak perlu menggunakan tanda const tapi syaratnya kita harus kasih kurung buka dan kurung tutup disini
dan ini hasilnya sama ya 


sekarang gimana caranya kita mau ngasih nama baru ya 
tidak sesuai dengan nama propertinya 


// assignment kevariable baru

nah kalo mau beda caranya kalian cukup tambahkan titik dua setelah nama variablenya 
lalu spasi nama barunya 

*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18
// }
// const {nama: u, umur: n} = mhs
// console.log(u)


/* 
jadi sekarang kalo mau memanggil nama jangan nama tapi n


nah selanjutnya kita juga bisa memberikan default value

// memberikan default value
 
misalnya saya punya object yang sederhana 
*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18
// }
// const {nama, umur, email} = mhs
// console.log(email)

/* 
misalkan saya tambahkan variable baru yaitu email 
kalo saya console.log menurut kalian akan muncul apa?

karena kita check didalam objectnya tidak ada emailnya 
kalo ada langsung tampil kalo tidak ada isinya undefined

nah kita bisa kasih nilai disini sebagai nilai default

*/

// const mhs = {
//     nama : 'muiz',
//     umur : 18
// }
// const {nama, umur, email = 'muizzuddin332@gmail.com'} = mhs
// console.log(email)


/* 
misalkan saya isi defaultnya untuk email yaitu muizzuddin332@gmail.com

ya jadi dia ngecheck dulu 
ada email gak? kalo tidak ada dia akan pakai defaultnya 

tapi kalo misalkan kalian kasih didalam objectnya email maka yang akan tampil adalah isi email didalam objectnya 


// memberikan nilai default dan juga assignment kevariable baru
ini juga bisa digabung 
kita bisa memberikan nilai default dan juga assignment kevariable baru


*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin222@gamil.com'
// }
// const {nama: n, umur: u, email: e = 'muizzuddin332@gmail.com'} = mhs
// console.log(e)

/* 
// rest parameter
dan kalian juga bisa menggunakan rest parameter sama sepreti array 
tetapi kalo didalam object dia akan mengembalikan object


*/

// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin222@gamil.com'
// }
// const {nama: n, ...value} = mhs
// console.log(value)


/* 
jadi nama masuk kedalam variable nama dan sisanya masuk kedalam value 
dan dia akan menjadi object

kalo saya console value maka isinya adalah object 
{umur: 18, email: "muizzuddin222@gamil.com"}


// mengambil suatu properti tertentu

misalkan saya punya object yang sama

contohnya seperti ini 
jika kalian ingin mengambil suatu properti tertentu kalian tinggal tuliskan sesuai dengan nama propertinya 
misalkan saya hanya ingin mengambil properti email

*/
// const mhs = {
//     id : 123,
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin222@gamil.com'
// }
// const {email} = mhs
// console.log(email)

/* 
jadi saya tinggal tuliskan email 
kalo saya jalankan muncul tuh emailnya ya 



*/

// mengambil fild pada object setelah dikirim sebagai parameter untuk function

// nah maksutnya gimana kita lihat ya
/* 
contohnya saya punya object yang sama

*/

// const mhs = {
//     id : 123,
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin222@gamil.com'
// }

// function getid({id}){
//     return id
// }
// console.log(getid(mhs))


/* 
jadi kita bikin function untuk mengambil id dari mhs ya 

dengan menggunakna destructuring ini kita bisa simpan parameternya itu tidak object melainkan hanya satu nilai tertentu
jadi misalnya saya kirimkan parameter mhs lalu ditangkap diparameternya hanya yang idnya saja

jadi bisa sepeti ini kalo menggunakan destructuring assignment pada object

oke jadi itu ya beberapa contoh  penggunaan dari destructuring assignment 
mudah mudahan kalian paham dengan penjelasannya 

dan dimateri selanjutnya kita akan implementasikan pengetahuan kita tadi kedalam study kasus yang lebih real lagi

jadi mungkin itu saja untuk materi kali ini 
kita akan ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ;  */


