/* array pada javascript: splice dan slice

sekarang kita akan coba fungsi yang namanya splice dan slice

tapi kita lihat artinya dulu ya 
splice itu artinya menyambung ya jadi kita bisa menyisipkan element ditengah tengah menggunakan splice 


nah kalo slice itukan mengiris ya mengiris arraynya 
jadi ini digunakan ketika kita mengambil beberapa bbagian pada array untuk menjadi array yang baru 

gimana kalo kita coba yang splice dulu ya 

1.splice
nah splice untuk menyisipkan element array ditengah tengah 

sintaxnya gini 
splice(index awal, mau dihapus berapa, element baru, element baru2...);

jadi misalnya kita sudah punya array ini

*/

// var arr = ['muiz', 'zuddin', 'husain'];

// sekaran saya mau menambahkan element baru setelah zuddin, jadi sebelum husain saya mau menambahkan element baru 
// caranya gini

// arr.splice(2, 0, 'hasan');
// console.log(arr.join(' - '));

/* panggil arraynya lalu kita splice lalu kita sambung ditengah tengah

oke kita splice
mau dimana setelah zuddin ya berarti indexnya 0 1 2 ya 
kita pengen ada didua 

lalu ada yang pengen dihapus gak? gak ada ya malah kita menambah berarti kita tulis 0 disini 
lalu kita tambahkan element baru hasan ya 

kita console.log arraynya lalu join 

hasilnya hasan masuk setelah zuddin 

ya ini juga bisa kita tambahkan lebih dari satu nilai/element ya pisahkan dengan koma 

maka nanti langsung masuk dimulai dari index ke 2 

gimana paham ya 

nah sekarang gini 
gimana kalo saya ganti jadi gini 

saya mau mulainya dari index ke 1 lalu saya ingin menghapus dua 


*/

// var arr = ['muiz', 'zuddin', 'husain'];

// arr.splice(1, 2, 'hasan', 'fitri')
// console.log(arr.join(' - '))

// dimulai dari 1 lalu menghapus dua element berarti zuddin dihapus husain juga dihapus 
// berarti hasilnya hilang 2 paham

/* lalu saya juga bisa langsung menambahkan hasan dan fitri 

jadi mulai dari index ke 1 saya hapus dua jadi zuddin dan husain dihapus 

lalu ditambahkan dua element baru hasan dan fitri 

maka sekarang hasilnya gimana?
muiz hasan fitri 

sip ya 
nanti silahkan kalian coba coba saja sendiri menggunakan parameternya ya

itu untuk splice




2.slice
nah selanjutanya kita akan coba sebuah method yang namanya slice 

slice ini digunakan untuk istilahnya mengiris sebuah array menjadi array yang baru 

ya contohnya gini 

*/

// var arr = ['muiz', 'zuddin', 'hasan', 'husain', 'fitri'];


/* jadi sekarang kita punya lima buah element index 0 sampai 4 

nah misalnya saya ingin mengambil dua element ditengah ini zuddin dan hasan 

nanti arrayhnya kita iris mulai dari zuddin berakhir di hasan

nah slice ini sintax/rumusya begini

slice(awal, akhir);

nah ni yang harus kalian perhatikan ya 

index awal akan terbawa diarray yang baru tapi index akhir tidak 
maksutnya gimana kita lihat contohnya begini

saya mau ambil dua ini ya zuddin dan hasan 
ini kan indexnya 1 dan 2 

nah sekarang kalo saya mau mengambil dua ini 
saya nulisnya bukan 1 dan 2 tapi 1 dan 3 

jadi yang satunya terbawa yang tiganya tidak 
yang tidak husain ya berarti husain tidak terbawa yang terbawa adalah zuddin dan hasan

kita coba 
berarti saya harus punya array baru 

*/

var arr = ['muiz', 'zuddin', 'hasan', 'husain', 'fitri'];

// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(' - '));

/* kita ambil contoh arr2 diisi dengan arr.slice 1 dan 3 

maka dia akan mengambil array dengan index ke 1 dan 2
lalu coba kita console array 2 nya kita join

harunya tampilnya zuddin dan hasan
betul ya

jadi index awalnya terbawa index akhirnya tidak atau dikurangi 1 gitu lah ya 

kalo saya ingin husain terbawa juga berarti saya tulis 4

*/

var arr2 = arr.slice(1, 4);
console.log(arr2.join(' - '));

/* dan hati hati slice menghasilkan array baru jadi kita harus tampung 

array yang lamanya masih bisa kita akses
jadi kalo saya console yang arr itu nilainya tetap utuh


*/

console.log(arr.join(' - '));

/* nah lihat nih
ini array baru dan ini array lama


oke sampai disini dulu materinya kita akan lanjutkan pembahasan tentang method dimateri selanjutnya 

*/