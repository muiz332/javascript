/* javascript lanjutan: tagged template 

dimateri kali kita masih akan membahas mengenai template literal 
dan kali ini topik yang akan kita pelajari adalah mengenai tagged templates

apa itu tagged template?
tagged template adalah bentuk yang lebih komplex dari template literal yang memungkinkan kita membaca template literals melalui sebuah function 

jadi kalo kita sudah membuat template literal, string tersebut bisa kita masukkan kedalam function untuk mengubah bentuk dari string tadi 

kita lihat langsung saja implementasinya 

misalnya saya punya dua buah variable

*/
// const nama = 'muiz'
// const umur = 18

// // sekarang kalo saya ingin membuat template literal biasa 

// const str = `Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)


/* 
nah sekarang bagaimana jika kita jadikan template literal ini menjadi tagged template

nah itu caranya tinggal kita tuliskan nama function didepan template literalnya
dan nanti string template literal ini akan seolah olah menjadi argument dari function tersebut

contohnya gini

*/
// const nama = 'muiz'
// const umur = 18
// function coba(){
//     return 'coba'
// }
// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)

/* 
misalnya didalam functionnya saya return coba
maka string ini akan masuk ke parameter functionnya dan functionnya akan mengembalikan coba

tapi kita lihat secara default tagged template ini menerima parameter 
misalnya difunctionnya saya kasih parameter string yang mengembalikan isi dari parameter stringnya 

*/
// const nama = 'muiz'
// const umur = 18
// function coba(string){
//     return string
// }
// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)


/* 
kalo saya return stringnya maka dia akan mengembalikan array yang isinya string

["Hallo, nama saya ", ", saya ", " tahun"]

maka hasilnya akan ada sebuah array yang berisi 3 element 
jadi ketika kita jalankan template literal ini maka tagged templatenya akan memecah tiap tiap string yang ada didalmnya 

dipisahkan oleh expression, nah expressionnya tidak masuk kedalam parameter string

jadi itu yang pertama tiba tiba ada parameter string yang bisa kita pakai


nah sekarang expressionnya masuk kemana?
dia masuk sebagai parameter berikutnya 




*/
// const nama = 'muiz', umur = 18
// function coba(string, nama, umur){
//     return nama
// }
// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)

/* 
jadi kalo saya tulis returnnya nama atau umur maka akan muncul tuh isi dari parameternya 
nama isinya muiz umur isinya 18

ya ini karena kita punya dua buah expression 
ada kemungkinan nanti ketika kita membangun sebuah string itu kita tidak tahu ada berapa expression didalam tempalte literalnya  

jadi misalnya kita punya 3 buah expression dan kemudian kita tangkap satu satu 
jadi nanti ktia akan punya 3 buah parameter untuk menampung setiap nilainya 

itu kalo 3 expression, kalo 4 gimana kalo 5 atau bahkan 10 gimana?
nah itu problemnya 

nah javascript modern itu punya sebuah parameter yang namanya rest parameter 
jadi dia bisa menampung seluruh expression template literalnya 

cara nulisnya tinggal kalian tulis titik 3 kali lalu nama parameternya apa 



*/
// const nama = 'muiz', umur = 18
// function coba(string, ...values){
//     return values
// }
// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)

/* 
nah ini nantinya values akan menjadi sebuah array yang isinya semua exspression yang ada didalam template literal
jadi kalian tidak perlu ambil satu satu lagi 

jadi kita ambil semua argument selain array yang didalamnya berupa string
karena itu akan masuk keparameter string
nah sisanya kan itu adalah expression, kita ambil semua expressionnya dan kita masukkan kedalam array menggunakan rest parameter

kalo saya return values maka yang tampil adalah array yang berisi semua expression yang ada didalam template literalnya 

jadi string buat mengambil string biasa values buat mengambail expression

paham ya 


nah kedepannya kalo misalkan kita mau menampilkan string yang sama 
artinya ktia harus gabungkan string dengan valuesnya untuk menampilkan string yang persis sama 

kita coba

*/

// const nama = 'muiz', umur = 18
// function coba(string, ...values){
//     return string.map((value, i) => `${value}${values[i]}`).join('')
// }
// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)


/* 
nah jadi kita pakai map saja ya 
untuk tiap tiap value pada string saya kembalikan valuenya dan saya gabungkan dengan values index ke i 

jadi misalnya value dari string itu hallo, nama saya 
nah itu kan dia index ke 0 dan i nya juga akan berisi 0 

maka saya kembalikan dengan menggabungkan hallo, nama saya dengan values[i] yang isinya adalah muiz
lalu looping lagi dan seterusnya lalu kita join deh

kalo kita jalankan maka muncul tuh hasilnya 

Hallo, nama saya muiz, saya 18 tahunundefined

nah ini kenapa ada undefinednya 
karena string itu memiliki index 0 sampai 2 sedangkan values itu memiliki index 0 smapai 1 
maka string index 2 saya gabungkan dengan values index 2
karena values index ke 2 itu tidak ada maka isinya adalah undefined

cara mengatasinya kita kasih pengkondisian saja pakai ternary ya
atau kita bisa pakai operator logika OR


*/
// const nama = 'muiz', umur = 18
// function coba(string, ...values){
//     return string.map((value, i) => `${value}${(values[i] || '')}`).join('')
// }
// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)


/* 
jadi ini artinya kalo values index ke i ada isinya maka tampilin isinya
kalo values index ke i tidak ada isinya maka tampilkan string kosong

kalo ini kita jalanin hasilnya 
Hallo, nama saya muiz, saya 18 tahun

tuh udah bener ya 

jadi string literal ini dijalankan kedalam function coba menghasilkan string yang sama

mungkin sampai sini kalian merasa agak aneh ya
ngapain kita membuat tagged template untuk mengasilkan string yang sama 

nah nanti kita lihat manfaatnya berikutnya ya 

sebelum kesitu selain pakai map kita bisa juga pakai higher order function reduce
kan reduce itu bisa menggabungkan semua isi dari array 



*/
// const nama = 'muiz', umur = 18
// function coba(string, ...values){
//     return string.reduce((acc, curr, i) => `${acc}${curr}${(values[i] || '')}`, '')
// }
// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)


/* 
kita langsung return panggil arraynya string lalu kita reduce
nah reduce itu kalo kalian ingat memiliki 2 parameter accumulator sama currentvalue 

nah sebenarnya ada parameter selanjutanya ya itu indexnya 
kita butuh index untuk melooping valuesnya 

lalu kita gabungkan acc, curr dan values index ke i 
dan terakhir kita kasih nilai awal dari currnya kalo tidak kita tulis nilainya adalah 0 

karena ini adalah string maka saya kasih string kosong ''

jadi ini kalo kita jalanin hasilnya akan sama  ya 


nah sekarang pertanyaannya tadi ngapain kita capek capek lakukan ini kalo hasilnya sama persis

nah sekarang bayangkan contoh implementasi sederhananya 
kalo misalkan kalian ingin menampilkan sebuah string, hasil pencarian berdasarkan keyword tertentu 

misalkan kalian ingin mencari berdasarkan nama 
nah kalian ingin tampil hasil pencariannya dengan nama yang kalian masukkan itu sudah ada highlightnya 

misalnya tampil hallo nama saya muiz
tapi muiznya ada background colornya sehingga orang kalo lihat dimudahkan 

stringnya tampil beserta highlightnya 





*/

// const nama = 'muiz', umur = 18
// function highlight(string, ...values){
//     return string.reduce((acc, curr, i) => `${acc}${curr}<span class="hl">${(values[i] || '')}</span>`, '')
// }
// const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str)

/* 
sekarang gini setelah ditampilkan saya ingin nama dan umurnya itu ada highlightnya 
nah nama dan umur ini dia adalah values ya 

jadi valuesnya sebelum saya tampilkan saya bungkus dulu menggunakan span 
yang nama classnya hl misalnya 

kita jalankan ya 
nah maka setiap expressionya akan dibungkus dengan span 

ini walapun diakhir ada spannya ya tidak apa apa karena ini tidak akan kelihatan 

jadi kalo sekarang saya punya didalam htmlnya itu sebuah style yang ada selectornya hl 
lalu saya kasih background color misalnya salmon


*/
const nama = 'muiz', umur = 18
function highlight(string, ...values){
    return string.reduce((acc, curr, i) => `${acc}${curr}<span class="hl">${(values[i] || '')}</span>`, '')
}
const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun`
document.body.innerHTML = str


/* 
terus saya ingin tampilkan didalam bodynya 

maka kalo saya jalankan 
nah lihat tampil stringnya yang expressionnya sudah ada higlightnya 

dan ini kerennya kalo misalkan saya punya expression lagi maka dia akan menambahkan higlight baru

keren ya ini adalah penggunaan sederhana dari tagged template

gitu ya dan kalo misalkan kalian nanya penggunaan lain dari tagged template ini ada beberapa ya 


1.Escaping html tags
    untuk menghindari script atau karakter yang tidak diinginkan pada html

2.translation dan internationalization
    alih bahasa dari website kalian

3.styled components
    dan yang terakhir yang saat ini sering digunakan untuk front end framework itu untuk 
    styled components 
    ya misalkan kalian pakai veu atau react 

ya jadi mungkin itu saja penjelasan mengenai tagged template ini 
mudah mudahan kalian paham ya 

memang cukup unik ya silahkan kalian coba coba sendiri saja

ya jadi itu saja materinya 
kita ketemu lagi dimateri berikutnya 
dan satu lagi jangan lupa titik koma ;  */
