/* javascript lanjutan: template literal

kali ini kita masuk ketopik baru yaitu mengenai template literal atau disebut juga dengan template string

ya dan dimateri sebelum sebelumnya sebetulnya kita sudah pernah menggunakan template literal ini 
ya walaupun sebelumnya itu namanya bukan string literal tapi template literal

nah untuk lebih jelasnya kita coba lihat definisi dari template literal ini

template literal adalah string literal yang memungkinkan ada exspression didalamnya 

apa itu string literal dan maksutnya exspression itu seperti apa nanti kita lihat

ya jadi string literal itu string yang biasa kita buat ya 
string literal itu biasanya kita buat dengan beberapa cara 

yang pertama bisa menggunakan kutip satu atau kita bisa gunakan kutip dua
dan fungsinya itu sama saja ya beda dengan php kutip dua itu lebih sakti karena dia bisa melakukan interpolasi

nah ada cara ketika untuk membuat string literal itu dengan menggunakan backtick ``

dengan membuat string literal menggunakan backtick dapat memungkinkan kita membuat template literal 
jadi template literal ini hanya bisa dibuat menggunakan backtick

template literal
- menggunakan backtick
    dengan menggunakan backtick ini kita bisa melakukan banyak hal 

- Multi-line string
    kita bisa membuat multi line string 
    sebelumnya kita tidak bisa melakukan multi line string dengan kutip satu atau dua 

- embeded expression
   nanti kita lihat contohnya ya 

- HTML fragments
    nah ini yang saat ini sering banget digunakan kalo misalkan kalian menggunaka fond-end framework misalnya 

- expression interpolation
- tagged template



contoh template literal

- multi line string

    console.log('string text baris 1 \nstring text baris 2')

    kalo kalian menggunakan kutip satu atau kutip dua terus kita ingin mencetak string menggunakan console.log
    lalu stringnya akan ditampilkan dibaris terpisah  
    itu kalian harus menggunakan escape karakter \n untuk menambahkan new line

    nah sedangkan kalo kita menggunakan backtick atau template literal
    kalian cukup tambahkan enter saja sesuatu kebutuhan satu enter atau dua enter

    console.log(`string text baris 1
    string text baris 2`)

    maka nanti tampilnya akan seperti ini 

    string text baris 1
    string text baris 2

    nah multi line string ini bisa kita gunakan juga ketika kita mau bikin html fragments

misalnya saya punya object mahasiswa yang didalamnya terdapat beberapa properti

*/
// const mhs = {
//     nama : 'M.Muizzuddin',
//     umur : 18,
//     nrp : 45232,
//     email : 'muizzuddin332@gmail.com'
// }

/* 
lalu kita ingin menampilkannya kedalam halaman html kita 

nah kalo sebelumnya kita rangkai seperti ini 
misalnya saya punya variable yang namanya element

*/
// let el = ''
// el += '<div class="mhs">';
// el += '<h2>' + mhs.nama + '</h2>';
// el += '<span class="nrp">' + mhs.nrp + '</span>';
// el += '</div>';

// console.log(el)

/* 
awalnya string kosong lalu kita rangkai kita concatenasi dengan elementnya yang kita butuhkan 

lalu elementnya bisa kita simpan menggunakan DOM misalnya menggunakan innerHTML
cukup ribet ya kalo mengguakan concate

nah ketika kalian membuatnya menggunakan template literal kalian cukup membuatnya seperti ini


*/

// let el = `<div class="mhs">
//     <h2> ${mhs.nama} </h2>
//     <span class="nrp"> ${mhs.nrp}</span>
//     </div>`

/* 

kalian tinggal tambahkan backtick lalu tulis semua sekaligus tag htmlnya 
jadi tidak usah digabung gabung menggunakan concate lagi

walaupun didalam htmlnya itu terdapat white space ya karena waktu kalian bikin elementnya kan pakek tab begitu ya 
tapi itu tidak akan dipedulikan oleh browsernya 

ini untuk html fragments


- embeded expression

jadi kita bisa menyimpan expression kedalam template literal

misalnya kalian ingin masukkan sebuah variable

*/
// const nama = 'muiz'
// let umur = 18
// console.log(`hallo nama saya ${nama} umur saya ${umur} tahun`)


/* 
kalian cukup tambahkan dolar lalu kurung kurawal buka dan tutup dan didalamnya tulikan nama variablenya 

nah tapi expression ini juga bisa langsung kita interpolasi
mislanya didalam expressionnya terdapat penjumlahan 
*/
// let a = 10
// let b = 15
// console.log('jika a = 10 dan b = 15 maka hasil penjumlahnya adalah : ' + (a + b))

/* 
nah sebelumnya kalo kalian pakek kutip satu atau dua ini kita harus buka tutup kutipnya 

ya karena kalo kita tuliskan tanda tambah didalam kutip satu atau kutip dua itu akan dicetak sebagai string
bukan operasi matematik

jadi cukup ribet ya untuk menghasilkan seperti ini 
tapi jika kalian menggunakan tamplate literal cukup gunakan backtick 

*/
// let a = 10
// let b = 15
// console.log(`jika a = 10 dan b = 15 maka hasil penjumlahnya adalah : ${a + b}`)

/* 
lalu didalam dolar kurung kurawalnya itu kalian bisa melakukan interpolasi expressionnya 
hasilnya akan sama persis 

jadi tidak perlu ribet lagi buka dan tutup stringnya 

dan expressionnya bisa sesimple penjumlahan seperti itu 
atau kalian bisa juga memanggil function 

bahkan kalian juga bisa menyimpan ternary operator didalamnya 

*/

// const x = 10
// console.log(`${(x % 2 === 0)? 'genap' : 'ganjil'}`)

/* 
kalo saya jalankan hasilnya genap ya 


- HTML fragments

kalo pakai kutip satu kita harus rangkai satu satu 
tapi kalo pakai backtick itu kalian cukup tuliskan saja htmlnya didalam backticknya 

nah tapi masalahnya kita tidak bisa menuliskan html menggunakan emmet kalo kalian pakai vs code

misalkan kalian mau bikin div yang classnya mahasiswa 
harusnyakan div.mhs lalu enter ya 

nah tapi kalian harus menuliskannya secara manual 
begini  <div class="mhs"> </div>

kalo simple sih tidak apa apa tapi kalo misalkan htmlnya komplex kalian akan kesusahan 

nah itu kita harus jalankan sebuah fitur di vs code 
silahkan jalankan settingnya 

nah kita akan buat emmetnya jalan dijavascript 
kalian cari setting yang namanya includelang

lalu klik setting disebelahnya lalu pilih copy setting as JSON 
kalo sudah kalian klik edit setting in JSON 

kalian tinggal tambahkan diakhir setingannya itu tanda koma enter
lalu paste yang tadi 

"emmet.includeLanguages": {}

nah didalam kurung kurawalnya kalian tulis begini 

"emmet.includeLanguages": {
    "javascript" : "html"
}

nah ini bacanya ketika filenya javascript jalankan fitur htmlnya 
kita save dulu 

nah sekarang didalam template literalnya 
saya tulis div.mhs itu langsung jalan


*/
const mhs = {
    nama : 'M.Muizzuddin',
    umur : 18,
    nrp : 45232,
    email : 'muizzuddin332@gmail.com'
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`

console.log(el)

/* 
jadi gampang ya 
nah ceritannya ini tinggal kalian simpan misalnya ke DOM menggunakan innerHTML
atau kalian mau console

nah nanti akan ada white space atau ruang kosong

ya jadi mungkin itu beberapa contoh penggunaan dari template literal 
dan untuk contoh contoh lain seperti tagged template tadi itu akan kita bahas dimateri selanjutnya 

oke jadi itu saja ya materinya 
mudah mudahan kalian paham 

dan ini akan sering sekali dipakai ketika kalian menggunakan modern javascript 
terutama ketika kalian pakai framework vue react atau angular 

jadi itu saja 
kita akan ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ;  */
