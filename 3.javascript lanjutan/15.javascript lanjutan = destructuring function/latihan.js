/* javascript lanjutan: destructring function

kali ini kita akan lanjutakan kembali materi destructuring ini 
kita akan lihat bagaimana destructring ini berpengaruh pada function 

langsung saja kita lihat contoh kasus dari code berikut ini 

misalnya saya punya function sederhana ini 
yang namanya penjumlahan perkalian 

dimana saya nanti punya dua buah parameter 
yang isinya dia akan mengembalikan penjumlahan dari dua buah nilai 
dan juga perkaliannya dan nilainya saya kembalikan dalam bentuk array 


*/
// function penjumlahanPerkalian(a,b){
//     return [a + b, a * b];
// }

// nah kalo tiap tiap nilainya mau saya masukkan kedalam variable 
// saya bisa lakukan seperti ini 

// const jumlah = penjumlahanPerkalian(2,3)
// console.log(jumlah)

/* 
kalo saya console log jumlah maka isinya akan ada array
5 itu penjumlahan dan 6 itu perkalian

kalo saya mau mengambil penjumlahannya saja maka saya bisa kasih indexnya 


*/

// function penjumlahanPerkalian(a,b){
//     return [a + b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0]
// console.log(jumlah)

/* 
pada saat dikembalikan langsung saja saya ambil index ke 0 
karena mau mengambil yang 5 
kalo saya jalankan maka hasilnya 5 

begitu pula dengan perkalian 
ya agak ribet kita harus menambakan index di akhir

nah dengan menggunakan destructuring 
kita bisa langsung saja membuat sebuah array yang isinya variable 
kita bongkar nih arraynya 


*/

// function penjumlahanPerkalian(a,b){
//     return [a + b, a * b];
// }
// const [jumlah, kali] = penjumlahanPerkalian(2,3)
// console.log(jumlah) // 5
// console.log(kali) // 6

/* 
kita tahu isi arraynya ada 2 kita bikin jumlah sama kali yang dia mendistructring return valuenya 

gitu ya kita juga bisa mendistructring return value dari function 
kalo saya console muncul ya hasilnya 5 dan 6 

sip ya jadi kita bisa lakukan ini 
nah sekarang gimana kalo misalnya return valuenya namabah 

jadi tidak hanya ada tambah dan kali saja 
saya masukkan a - b dan a / b


*/
// function cal(a,b){
//     return [a + b, a * b, a - b, a / b];
// }

// const [jumlah, kali, kurang, bagi] = cal(2,3)
// console.log(bagi)

/* 
nah kalo begini gimana? sama saja ya kita tinggal bikin distructringnya lebih lengkap lagi

kalo saya console bagi hasilnya 0.6 ya 

sekarang gimana kalo yang bagi tidak ada?
kalo yang bagi tidak ada begitu saya panggil bagi maka nilainya undefined

ya kalo kalian tidak ingin munculnya undefined 
kalian bisa kasih nilai default ya 



*/
// function cal(a,b){
//     return [a + b, a * b, a - b,];
// }

// const [jumlah, kali, kurang, bagi = 'tidak ada'] = cal(2,3)
// console.log(bagi)

/* 
misalkan nilai defaultnya saya kasih tidak ada
kalo saya jalankan maka hasilnya tidak ada ya

tapi ketika direturn valuenya ada baginya maka dia akan mengambil nilai yang ada didalam return valuen baginya

gitu ya jadi kita bisa kasih nilai default juga

nah sekarang probelmnya kalo misalkan kita mereturnnya array adalah ketika kita melakukan destructuring itu urutannya harus pas harus bener tidak boleh sampai tertukar 

misalnya returnnya index ke 0 tambah 
nama variable index ke 0nya juga harus tambah tidak boleh tertukar ya 
jadi untuk array urutan sangat berpengaruh 


nah kalo misalkan kalian ingin urutan tidak berpengaruh return valuenya bisa kita ganti dengan object



*/

// function cal(a,b){
//     return {
//         jumlah : a + b,
//         kurang : a - b,
//         kali : a * b,
//         bagi : a / b
//     }
// }

// const {bagi, jumlah, kurang, kali} = cal(2,3)
// console.log(kurang)

/* 
kita bikin properti untuk yang didalam objectnya ya 

kalo kita mau distructring object kita pakai kurang kurawal ya 
nah sekarang ini urutannya tidak berpengaruh 

kalian mau bagi dulu kurang jumlah dan kali tidak akan berpengaruh 
karena dia mengacu kepada nama properti yang sama jadi urutannya tidak berpengaruh 

kalo saya console log kurang
kurang kan diurutan ke 3 ya didalam variablenya 

padahal kalo dipropertinya dia urutan ke 2 
tapi kalo urutan tidak berpengaruh 

kalo saya jalankan hasilnya harusnya -1 ya 

jadi kalo kalian ingin urutannya tidak berpengaruh bisa gunakan object distructuring pada returnnya 


nah sekarang kita akan lihat gimana kita melakukan distructur pada argument

nah ini contohnya sepert ini 
misalnya saya punya object mhs 

*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin332@gmail.com'
// }

/* 
nah ceritanya saya mau bikin sebuah function 
untuk mencetak string berdasarkan properti mhs ini 

*/
// function cetak(nama, umur){
//     return `hallo nama saya ${nama}, saya umur ${umur} tahun`
// }

// console.log(cetak(mhs.nama, mhs.umur))

/* 
nah jadi kalo saya ingin mengambil properi nama saya bisa lakukan seperti itu 

kalo saya console maka hasilnya // hallo nama saya muiz, saya umur 18 tahun

ya ini pakai function declaration biasa 
objectnya kita pecah sendiri 

atau kalo mau cara yang lain kalian bisa kirimin objectnya diargumentnya 


*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin332@gmail.com'
// }
// function cetak(mhs){
//     return `hallo nama saya ${mhs.nama}, saya umur ${mhs.umur} tahun`
// }

// console.log(cetak(mhs))

/* 
jadi kita pecah propertinya didalam functionnya 
hasilnya sama saja ya 


sekarang kalo kalian mau pakai destructuring supaya dia hanya mengambil nama dan umurnya saja 

kalian bisa kirimkannya object lalu kita bisa lakukan distructuring didalam parameternya 
jadi pada saat object dikirim diparameternya kita langsung pecah 
saya ambil properti nama dan umurnya saja



*/

// const mhs = {
//         nama : 'muiz',
//         umur : 18,
//         email : 'muizzuddin332@gmail.com'
//     }
// function cetak({nama, umur}){
//     return `hallo nama saya ${nama}, saya umur ${umur} tahun`
// }
// console.log(cetak(mhs))


/* 
jadi object dikirim lalu dipecah didalam parameternya diambil nama dan umurnya saja sehingga didalam functionnya kita bisa tulis nama dan umur saja 

kalo kita jalankan hasilnya sama ya 

gitu ya ini untuk memudahkan penulisan kalo misalnya objectnya komplex ya 

nah ini akan kepakek banget ketika objectnya komplex 


*/

// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin332@gmail.com',
//     nilai : {
//         tugas : 80,
//         uts : 85,
//         uas : 75
//     }
// }
/* 
ceritannya kalian punya properti nilai 
yang nilai ini ceritanya isinya object jadi ada object didalam object 

dan ini bisa lebih komplex lagi ya ini hanya contoh saja 

contohnya didalam nilai ini saya punya 3 buah properti 

dan sekarang saya mau menambahkan nilai return valuenya 



*/
// function cetak({nama, umur, nilai}){
// return `hallo nama saya ${nama}, saya umur ${umur} tahun dan nilai uas saya adalah ${nilai.uas}`
// }
// console.log(cetak(mhs))

/* 
nah ini harusnya saya tambahkan diparameternya nilainya 
lalu saya tangkap nilai.uas

kalo saya jalanin aman ya 

nah sekarang gimana kalo nilainya kita destructuring lagi
jadi ini seperti destructuring bersarang ya 

ya jadi caranya begini




*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     email : 'muizzuddin332@gmail.com',
//     nilai : {
//         tugas : 80,
//         uts : 85,
//         uas : 75
//     }
// }
// function cetak({nama, umur, nilai: {tugas,uts, uas}}){
//     return `hallo nama saya ${nama}, saya umur ${umur} tahun dan nilai uas saya adalah ${uas}`
// }
// console.log(cetak(mhs))

/* 
kalian bisa tambahkan disini titik dua lalu tuliskan kurung kurawal lagi isi dari nilainya 
jadi kalian bisa tulis tugas, uts, uas

sehingga kita bisa langsung tulis saja uas direturnnya 

kalo ini kita jalankan sama saja ya 

begitu ya jadi ini caranya kalo kalian mau destructuring parameter

mudah mudahan sampai disini kalian paham 

ya jadi itu saja untuk materi kali ini 
kita belajar mengenai distructuring function 

karena ini cukup penting dan akan sering dipakai ketika kalian pakai front end framework seperti react veu dan yang lainnya 

jadi itu saja untuk materi kali ini 
mudah mudahan kalian paham 

kita akan ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ; */

// let p = [1,1,1]
// let h;
// for(let i = 0; i < 10; i++){
//     if(i === 0 || i === 1 || i === 2){
//         h = p
//     }else{
//         h.push(h[i - 3] + h[i - 2] + h[i - 1])
//     }
// }
// console.log(h)

// function tribonacci(signature,n){
//     //your code here
//     if(n === 0){
//         return []
//     }else if(n === 1 && signature.filter(a => a === signature[0]).length === 3){
//         return [signature[0]]
//     }else{
//         let h;
//         for(let i = 0; i < n; i++){
//             if(i <= 2){
//                 h = signature
//             }else{
//                 h.push(h[i - 3] + h[i - 2] + h[i - 1])
//             }
//         }
//         return h
//     }
// }

// function tribonacci(signature,n){  
//     for (var i = 0; i < n-3; i++) { // iterate n times
//       signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//     }
//     return signature.slice(0,n)
// }
console.log(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
console.log(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
console.log(tribonacci([15,17,3], 3))