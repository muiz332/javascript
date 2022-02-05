/* javascript lanjutan: filter, map, dan reduce

nah dimateri kali ini kita akan membahas mengenai 3 contoh dari higher order function yang paling sering digunakan ya 
yaitu filter map dan reduce

nah jadi 3 function ini merupakan prototype dari array
ya walaupun nanti didalamnya isinya bisa macam macam ya 

dan sebetulnya kalo kalian mengikutin seri javascript dasar kita sudah membahas beberapa dari ini ya 
terutama map sama filter 

tapi waktu itu kita bahasnya masih menggunakan function biasa 
kalo sekarang kita akan bahas menggunakan contoh arrow function 

nah contoh higher order function yang lain misalnya seperti find forEach fill dll itu tidak akan kita bahas

oke dan sekarang kita akan lihat ilustrasi dari penggunaan masing masing function ini

1. filter
   let arr = ['rambutan', 'apel', 'bayam', 'wortel', 'jambu'];

ketika array ini nantinya saya akan masukkan kedalam higher order function filter
dan saya akan memfilter mana diantara array ini yang termasuk sayuran

maka nanti function ini akan menghasilkan array baru 
hasil dari filternya 

jadi diarray yang baru bahan makanan yang bukan sayur itu tidak akan terpilih

nah mudah mudahan terbayang kalo  kalian menggunakan filter

2. map
   let arr = ['rambutan', 'apel', 'bayam', 'wortel', 'jambu'];

nah dengan menggunakan kasus yang sama kita akan gunakan function yang lain

sekarang saya akan gunakan map
nah dengan menggunakan map  itu artinya kita akan lakukan sesuatu untuk setiap element pada array
kedalam sebuah function sendiri

setiap element yang ada pada array arr itu akan saya lakukan potong 
jadi dengan memberikan callbakc function didalam mapnya nanti adalah potong 

maka setiap element pada arr ini akan menghasilkan array baru berupa buah atau sayuran yang sudah dipotong

ini kalo kita gunakan map
jadi akan ada array baru hasil dari higher order function tersebut

3. reduce
   let arr = ['rambutan', 'apel', 'bayam', 'wortel', 'jambu'];

nah hasil dari function map ini  bisa kita kasih higher order function berikutnya yaitu reduce

nah kalo reduce ini kita bisa lakukan misalnya kita bisa menggabungkan semua value  yang ada pada array arr
untuk menjadi hasil yang baru

jadi ini adalah ilustrasi dari map dan reduce
mudah mudahan kalian kebayang nih

dan dengan reduce ini pun sama dia menghasilkan array yang baru

dan nanti kerennya ketiga higher order function ini kita bisa gabungkan dengan menggunakan yang namanya method chaining
nah nanti kita lihat ya 

mudah mudahan kalian paham mengenai konsep filter map dan reduce

dan supaya lebih jelas lagi gimana kalo sekarang kita coba implementasikan kedalam code kita
apa yang sudah kita pahami 

nah misalnya saya punya array yang isinya angka 

*/
// const angka = [1, 4, 3, 0, -1, 5, 9, 8];

/* 
1.filter
yang pertama kita akan coba filter

nah ceritannya gini saya ingin mencari angka yang lebih besar sama dengan 3 didalam array angka 

nah sebelum kita gunakan filter coba kalian gunakan for

.....

sakarang kita coba pakai filter

*/

// const newAngka = angka.filter(function(a){
//    return a >= 3
// })
// console.log(newAngka)

/* 
kita tampun kedalam variable newAngka
nah lalu kita langsung panggil saja array mana yang mau kita filter 

kita tulis angka.filter() yang didalam argument filter ada callbacknya 

didalam parameter callbacknya kita bisa tulis sembarang ya untuk representasi dari tiap tiap nilai pada array angka

untuk tiap tiap value pada angka kita return jika a nya lebih besar sama dengan 3

apakah 1 lebih besar 3 false ya 
apakah 4 lebih besar 3 true masukkan kedalam variable newAngka

lalu coba saya console.log newAngkanya 

nah muncul tuh nilai yang lebih besar sama dengan 3 
keren ya 

dan kalo kalian inget mengenai arrow function 
callbacknya kita bisa ganti dengan arrow function 

*/
// const angka = [1, 4, 3, 0, -1, 5, 9, 8];

// const newAngka = angka.filter(a => a >= 3)
// console.log(newAngka)

/* 
kita tulis a untuk parameternya lalu tanda panah dan kalo isinya hanya return kita tidak perlu menulis kurung kurawal dan return cukup tuliskan apa yang akan direturn

tuh lihat ini jadi satu barisnya 
ini kalo kita save lalu jalanin akan sama hasilnya 

gitu ya untuk filter


2.map 
sekarang kita coba untuk yang map

kalo untuk map kan artinya untuk setiap nilai pada array kita lakukan sesuatu 

misalnya saya mau kalian semua angka dengan 2
ini artinya saya akan punya array baru yang isinya kali 2 dari semua isi value yang ada didalam array 


*/
// const angka = [1, 4, 3, 0, -1, 5, 9, 8];
// const newAngka = angka.map(a => a * 2)
// console.log(newAngka)


/* 
newAngka diisi dengan map
nah didalam argumentnya kita gunakan arrow function 

yang mengembalikan a * 2
nah ini artinya telusuri semua value pada array angka dan tiap tiap valuenya kali dengan 2

kalo saya console.log maka akan ada array baru yang isinya tiap tiap nilai yang didalam value angka dikali 2

coba kalian jalankan 
nah betul ya 

jadi semua dikalikan 2 dan ini tidak mengubah isi dari array angkanya
kalo kita console.log angka nilainya akan tetap sama  
*/
// console.log(angka)

/* 
itu ya untuk map , dan fungsinya bisa macam macam bisa tambah bisa kurang bagi dan lain lain

oke jadi itu untuk map ya mudah mudahan kalian paham 


3.reduce 
dan yang terakhir kita gunakan reduce

reduce itu untuk melakukan sesuatu terhadap seluruh value pada arraynya 

misalkan saya ingin arraynya saya jumlankan semua isinya
jadi 1 + 4 + 3 , saya jumlahin semuanya 

caranya sama kita buat varible baru karena ini menghasilkan array yang baru ya 

*/
// const angka = [1, 4, 3, 0, -1, 5, 9, 8];
// const newAngka = angka.reduce()

/* 
nah kalo reduce ini dia punya dua argument didalam functionnya 
argument yang pertama itu adalah accumulator dan parameter yang keduanya adalah currentvalue
atau value pada array yang sedang diloopingnya 

sedangkan accumulator adalah hasil dari prosesnya 
misalnya ditambah nah berarti kalo kita lihat didalam arraynya 

awalnya 0 lalu 1 nah 1 itu adalah currentvalue 
lalu jumlahkan 0 + 1 hasilnya 1, 1 disini adalah accumulator

lalu dia geser hasilnya tadi yaitu 1 + 4 ,1 adalah accumulator, 4 adalah currentvalue 
hasilnya 5, 5 adalah accumulator dan seterusnya 

jadi cara bacanya begitu

*/
// const angka = [1, 4, 3, 0, -1, 5, 9, 8];
// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue)
// console.log(newAngka)

/* karena kita mau menjumlahkan kita isi dengan return accumulator + currentvalue
dan kalo kita lihat hasilnya maka akan muncul jumlah dari semua value para array angka

nah ini kalian perhatikan secara default ini ada satu nilai lagi 

*/
// const angka = [1, 4, 3, 0, -1, 5, 9, 8];
// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
// console.log(newAngka)

/* 
nah kalo kita lihat itu sebenarnya nilai awalnya adalah 0
ya jadi awalnya itu 0 + 1, 0 adalah nilai awal

jadi kalo saya jalanin tidak akan berubah
nah nanti nilai awal ini bisa kalian ubah 

terserah kalian mau berapa nilainya misalkan 5 
nah kalo disini kalian tulis 5 maka nilai awalnya adalah 5 
jadi 5 + 1


*/
// const angka = [1, 4, 3, 0, -1, 5, 9, 8];
// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue, 5)
// console.log(newAngka)

/* 
yang tadinya hasilnya 29 jadi 31 ya 

nanti ini akan bermanfaat ketika kalian mau bikin nilainya udah ada isinya tidak 0 gitu 
tapi berdasarkan misalkan history dari nilai user

kalo tidak ditulis defaultnya adalah 0 
begitu ya jadi kita sudah coba nih filter map dan reduce



nah sekarang yang terakhir yang akan saya bahas adalah mengenai method chaining 
yang artinya kita bisa menggabungkan fungsi fungsi pada higher order function ini dalam satu kali eksekusi

tidak perlu disimpan kedalam variable dulu seperti tadi 
ini disebut method chaining atau method berantai

contohnya saya punya kasus begini
dari array yang kita punya saya mau mencari angka yang lebih besar dari 5 

setelah itu hasilnya saya mau kalikan dengan 3 
terakhir saya mau jumlahkan 

kalian bisa lakukan satu satu kayak tadi atau kita bisa gunakan method chaining

*/
const angka = [1, 4, 3, 0, -1, 5, 9, 8];
const hasil = angka.filter(a => a > 5)/* hasilnya [9, 8]*/.map(a => a * 3)/* hasilnya [27, 24]*/.reduce((acc, curr) => acc + curr); // hasilnya 51
console.log(hasil)

/* 
nah yang pertama kita cari dulu angka yang lebih besar 5
lalu sekarang kita chaining kita tambahkan method disebelah filter

jadi kita bisa pakai map
lalu kita kalian tiap tiap nilai dengan 3

lalu kita jumlahkan semua menggunakan reduce
yang isinya acc + curr

kalo kalian jalankan harusnya hasilnya 51

jadi ini kalo misalkan kita lakukan menggunakan method chaining 
ini kalian boleh tulisnya berulang ulang lagi

misalkan setelah map adalah map lagi yang hasilnya dibagi 2
nah ini bisa juga ya 

oke jadi begitu ya untuk filter map dan reduce
mudah mudahan kalian paham


dan mungkin dimateri selanjutnya supaya lebih paham lagi kita akan bahas mengenai filter map dan reduce 
tapi untuk kasus yang lebih real lagi ya 

jadi sampai disini dulu materinya 
dan seperti biasa jangan lupa titik koma ; */

