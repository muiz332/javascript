/* javascript lanjutan: rest parameter

nah kali ini kita akan membahas mengenai rest parameter 
notasinya sama titik tiga tapi kali ini kita gunakan untuk hal yang berbeda 

dan sebetulnya kita sudah pernah mencoba ini pada saat kita membahas mengenai destructuring 

untuk lebih jelasnya kita lihat saja dulu definisi dari rest parameter ya 

rest parameter adalah parameter yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array 

ya kan kalian tahu didalam function itu bisa kita simpan argument yang argumentnya kita bisa tangkap menggunakan variable

nah tapi dengan menggunakan rest parameter ini kita bisa tangkap banyak argument sampai tidak terbatas untuk menjadi sebuah array 

ya kita langsung saja lihat contohnya 


misalnya saya punya function yang namanya myfunc

*/

// function myfunc(a,b){
//     return a
// }
// console.log(myfunc(1,2,3,4,5))

/* 
nah kan biasanya kalo kita kirimkan argument seperti ini kita bisa tangkap satu persatu argumentnya menggunakan sebuah variable didalam parameternya 

maka kalo saya tulis seperti ini kalo saya returnya a maka munculnya 1 kalo b munculnya 2
jadi yang diambil adalah nilai pertama dan nilai keduanya sisanya akan diabaikan 

sekarang kalo kita kasih parameter selanjutnya itu dengan rest parameter 
jadi saya bisa tulis begini 

*/
// function myfunc(a,b, ...myarr){
//     return myarr
// }
// console.log(myfunc(1,2,3,4,5))


/* 
jadi saya tulis titik tiga dan nama variablenya misalnya myarr
maka nanti saya bisa ambil sisanya dari parameter yang sudah kita tangkap 

jadi kalo saya return myarr maka munculnya adalah [3, 4, 5]

kalo saya ingin memunculkan semua nilai yang ada didalam parameternya saya bisa tulis begini 

*/
// function myfunc(a,b, ...myarr){
//     return `a = ${a} b = ${b} myarr = ${myarr}`
// }
// console.log(myfunc(1,2,3,4,5))

/* 
jadi kalo saya jalankan munculnya a = 1 b = 2 myarr = 3,4,5
1 ditangkap oleh a 2 ditangkap oleh b dan sisanya ditangkap dan dijadikan array oleh myarr

atau saya mau tangkap semuanya juga bisa seperti ini 




*/
// function myfunc(...myarr){
//     return myarr
// }
// console.log(myfunc(1,2,3,4,5))

/* 
jadi dia akan berisi semua argumentnya menjadi sebuah array 
kalo saya jalankan hasilnya [1, 2, 3, 4, 5]

nah rest parameter ini hanya bisa kita gunakan diakhir dari parameternya 

jadi setelah rest parameter saya tidak bisa menambahkan sebuah parameter lagi 
rest parameter harus berada diakhir dari parameter

mudah mudahan paham penggunaan dasar dari rest parameter


kalo kalian inget sebetulnya didalam function itu kita punya sebuah variable yang namanya arguments
nah arguments ini berisi semua argument yang kita kirim pada saat function dipanggil

jadi kalo saya retur arguments


*/
// function myfunc(){
//     return arguments
// }
// console.log(myfunc(1,2,3,4,5))

/* 
jadi kalo saya jalankan hasilnya seperti ini 
Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]

kalian lihat arguments ini bukan array 
jadi karena dia bukan array kita tidak bisa pakai method method yang ada pada array

kalo yang tadi menggunakan rest parameter saja itu dia akan berbentuk array murni 
jadi kita bisa gunakan method method  pada array

nah kalo kalian tetap ingin pakai arguments bisa juga
tapi kita harus ubah arguments ini menjadi array murni 

kita bisa gunakan Array.from()

*/

// function myfunc(){
//     return Array.from(arguments)
// }
// console.log(myfunc(1,2,3,4,5))

/* 
kalo kita jalankan dia akan menjadi array murni 
atau kita bisa gunakan spread operator 


*/
// function myfunc(){
//     return [...arguments]
// }
// console.log(myfunc(1,2,3,4,5))

/* 
kalo saya jalankan hasilnya akan sama 




sekarang kita coba kasus berikutnya yaitu menjumlahkan seluruh nilai yang ada didalam parameternya ya 
misalnya saya punya function namanya jumlahkan 

*/
// function jumlahkan(...angka){
//     let nilai = 0
//     for(const n of angka){
//         nilai += n
//     }
//     return nilai
// }
// console.log(jumlahkan(1,2,3,4,5))

/*
karena di iterable object kita bisa pakai for of 
kalo saya return hasilnya 15

ya jadi dengan menggunakan rest parameter bisa sepert itu
atau kita mau ringkas pengulangannya juga bisa 

kita bisa pakai higher order function reduce
jadi kalian bisa tulis begini 


*/
// function jumlahkan(...angka){
//     return angka.reduce((acc,curr) => acc + curr)
// }
// console.log(jumlahkan(1,2,3,4,5))

/* 
kalo saya jalanin hasilnya 15

jadi simple kita bisa manfaatkan rest parameter untuk kasus seperti ini 



nah selanjutnya kita bisa gunakan rest parameter pada saat kita melakukan arry destructuring

misalnya gini saya punya sebuah array kalompok

*/
// const kelompok1 = ['muiz', 'hasan', 'husain', 'doddy', 'wahyu']

/* 

misalnya kalian mau atur setiap nama yang muncul pertama dia adalam ketua
setiap nama yang muncul kedua dia adalah waklik ketua dan sisanya adalah anggota

kalian bisa tulis seperti ini 

*/
// const [ketua, wakil, ...anggota] = kelompok1
// console.log(ketua)

/* 
kalo saya console ketua munculnya muiz 
kalo wakil munculnya hasan dan anggota munculnya husain doddy wahyu

ya jadi rest parameter bisa digunakan pada destucturing assignment



atau kita juga bisa menggunakan pada object distructuring juga

misalnya saya punya object literal namanya team
jadi ini adalah team lengkap untuk project web developmen kalian ya 


*/

// const team = {
//     projectManager = 'husain',
//     frontEnd1 : 'Muiz',
//     frontEnd2 : 'wahyu',
//     backEnd : 'hasan',

//     ux : 'riyan',
//     devOps : 'raia'

// }

/* 
misalnya seperti ini dan ini adalah team lengkapnya 

nah kalo kalian mau pisahkan menggunakan object distructuring 
misalkan kalian mau pisahkan antara project manager dan sisanya 

kalian bisa tulis seperti ini 


*/
// const {projectManager, ...myteam} = team
// console.log(projectManager)
// console.log(myteam)


/* 
kalo saya console project manager munculnya husain
kalo myteam munculnya object sisanya 

ya jadi bisa juga digunakan untuk object distructuring seperti ini 


dan yang terakhir contohnya kalo kalian mau melakukan filtering pada type data pada parameter yang dikirim
misalnya begini

misalkan saya punya function namanya filterBy

ceritanya saya mau memfilter nilai nilai berdasarkan type datanya 
contohnya kalo saya mau mencari angka pada nilai nilai berikut ini 
*/

// function filterBy(){

// }
// console.log(filterBy('number', 1,2,'muiz',false,10,true,'husain'))


/*
nah saya mau memilih mana saja dari parameter ini yang bentuknya number 

atau nanti kalo saya mau cari string numbernya saya ganti dengan string

nah berarti saya bisa gini 
saya akan bari menjadi dua parameter yang pertama typenya mau apa 
sisanya nilainya yang mau difilter 

jadi disini saya punya dua buah parameter yang pertama type dan rest parameter value misalnya 




*/
// function filterBy(type, ...values){
//     return values.filter(n => typeof n === type)
// }
// console.log(filterBy('number', 1,2,'muiz',false,10,true,'husain'))

/* 
jadi kita bisa pakai filter 
lalu kita check typeofnya untuk tiap tiap nilainya 
kalo typenya adalah number ya jadi saya tulis type maka kembalikan 

jadi dia akan mengecheck 1 number bukan? kalo iya return dan seterusnya 

kalo kita jalanin tampilnya hanya ada tiga [1,2,10]

kalo typenya saya ganti string maka munculnya ['muiz','husain']
begitu pula dengan type data yang lain 

begitu ya teman tema jadi kita bisa gunakan juga untuk kasus yang seperti ini 
mudah mudahan sampai disini kalian paham 

baik mungkin itu ya penjelasan mengenai rest parameter pada materi kita kali ini 

mudah mudahan memberi gambaran antara spread operator dan rest parameter

jadi sampai disini dulu materinya 
kita akan  ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ; */

