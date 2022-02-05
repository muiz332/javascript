/* function pada javascript: parameter dan arugument 

kita lanjutkan lagi mengenai function pada javascript dan dimateri kali ini kita akan membahas mengenai parameter dan argument pada function di javascript 

ya mungkin dimateri sebelumnya kita mungkin sedikit bahas mengenai parameter ya 
bahwa parameter itu istilahnya material atau bahan baku yang bisa kita gunakan didalam fucntion 

dan sekarang kita akan bahas dulu mengenai dari parameter dan argument serta perbedaan dari keduanya ya 

jadi yang pertama parameter 

parameter adalah 
    variable yang ditulis didalam kurung pada saat funtion dibuat, digunakan untuk menampung nilai yang dikirimkan pada saat function dipanggil 

ya jadi kan function itu kalo kita buat kita tulis keyword funtion lalu spasi nama function lalu setelah itu kita tulis kurung buka dan kurung tutup 

nah parameter adalah variable yang kita tulis didalam kurungnya ya ketika functionnya dibuat 

parameter ini digunakan untuk menampung nilai yang nantinya dikirimkan saat funtionnya dipanggil 

ya inget ya function itu ada dua hal pembuatan dan pemanggilan 

nah sekarang arugument itu apa?

argument adalah 
    nilai yang dikirimkan keparameter saat function dipanggil 

ya paham ya perbedaanya 

jadi parameter itu ketika functionnya dibuat sedangkan argument itu ketika funciton dipanggil 

ya kita lihat 

jika saya punya function seperti ini ya function tambah dimana didalamnya simple saja menjumlahkan dua buah nilai 

*/

// function tambah(a, b){
//     return a + b;
// }

// lalu function ini kita panggil

// var coba = tambah(5, 10);

/* ya dan saya simpan kedalam varible hasilnya 

ini coba kalian lihat mana yang parameter mana yang argument 
kalo kalian lihat a dan b yang ada difunction ini adalah parameter 

ya jadi varible yang  kita masukkan kedalam kurung ketika functionnya dibuat 

sedangkan 5 dan 10 ini apa?
nah ini adalah nilai yang benar benar dikirimkan 

ya jadi ini kita sebut dengan argument 

gimana paham ya 
nah sekarang untuk menggunakan paramter dan argument ini kita lihat contoh sederhananya seperti apa 


ceritannya kalo kita buat function seperti tadi ya functionnya namanya tambah 
lalu parameternya ada dua a dan b 

yang dimana didalamnya kita hanya menuliskan misalnya return a tambah b seperti ini
ya jadi fungsinya mengembalikan nilai a dan b 

*/

// function tambah(a, b){
//     return a + b;
// }

// lalu kita panggil dengna menuliskan nama functionnya ditambah dengan argument atau bahan baku yang mau dikirimkan 
// misalkan 2, 3

// tambah(2, 3);

/* ini artinya 2, 3 ini akan dikirim kedalam parameter functionnya 
jadi 2 dan 3 adalah argument 

a dan b adalah parameter 

kalo kita save lalu kita jalankan 
ini hasilnya kosong saja kalo kita lihat consolenya ini tetap kosong ya karena memang kita tidak munculkan 

kalo mau simple kita bisa simpan kedalam varible seperti tadi 


*/

// var hasil = tambah(2, 3);
// console.log(hasil);

/* sehingga yang ada didalam consolognya ini adalah hasil

sekarang kita lihat saya refresh 
nah maka ada hasilnya tuh 

ya angka 5 ini hasil penjumlahan angka 2 masuk kedalam parameter a 3 masuk kedalam parameter b 

nah sekarang argumetn ini bisa kita isi nilainya dengan banyak cara

ya cara yang pertama kita tulis langsung seperti itu 

atau cara lainnya kita bisa simpan dulu kedalam variable 

misalnya saya punya sebuah variable a yang diisi angka 10 
lalu saya punya variable b yang diisi 20


*/

// var a = 10;
// var b = 20;

// sekarang saya bisa simpan variable a dan b didalam argumentnya 

// var hasil = tambah(a, b);
// console.log(hasil);


/* ya nanti yang perlu kalian perhatikan adalah variable a dan b sebagai argument itu beda ya dengan a dan b sebagai paramenter 

ya kalau bingung tidak usah khawatir itu nanti akan kita bahas lebih detil dimateri mengenai scope atau lingkup dari variable dalam function 


sekarang cukup tahu saja bahwa kita bisa menyimpan variable untuk argument 

jika kita save lalu kita jalankan
maka hasilnya 30 ya 10 tambah 20 

atau misalnya argument ini bisa kita ambil dari inpulan oleh user 

ya jadi terserah user mau masukkin angka berapa 

itu tinggal kita ganti saja 10 dan 20 ini menjadi popup yang namanya apa? masih inget prompt ya 

*/

// var a = prompt('masukkan nilai 1');
// var b = prompt('masukkan nilai 2');

// var hasil = tambah(a, b);
// console.log(hasil);


/* masukkan nilai 1 misalkan 100
masukkan nilai 2 misalkan 70 

nah inihasilnya berapa?
harusnya 170 kalo saya tekan oke 

ternyata hasilnya begini 10070 

nah ini kenapa kira kira?

ini karena ketika kita buat sebuah prompt itu yang kita masukkan adalah string ya sedangkan yang mau kita jumlahkan adalah interjer 

nah oleh karena itu kita harus ubah stringnya menjadi interjer 

ya caranya kalian bisa simpan promptnya didalam parseInt()


*/

// var a = parseInt(prompt('masukkan nilai 1'));
// var b = parseInt(prompt('masukkan nilai 2'));

// var hasil = tambah(a, b);
// console.log(hasil);

/* sehingga ketika kita masukkan nilai diubah dulu menjadi interjer 

sehingga begitu dijumlahkan ini operasi matematik bukan operator string atau operator konkatenasi (penjumlahan dua buah string)

kita lihat 
kita refersh dia minta lagi 

kita isi 100
dan 70

sekarang nilainya  170 

begitu ya paham ya jadi kita bisa memasukkan variable, kita bisa memasukkan inputan dari user 

bahkan kita juga bisa memasukkan operasi matematik 
misalnya disini saya tulis a kali 2 

dan b kali 2

*/

// var a = parseInt(prompt('masukkan nilai 1'));
// var b = parseInt(prompt('masukkan nilai 2'));

// var hasil = tambah(a * 2, b * 2);
// console.log(hasil);


/* nah maksutnya ini apapun inputan dari user kita jadikan intejer 

lalu kita kalikan 2 begitu pula dengan b ya 


jadi kalo saya masukkan angka 5 dan 10 
kan harusnya 15 ya 

tapi yang terjadi adalah 5 dikali 2 dulu =  10

lalu 10 kali 2 = 20 

jadi yang dijumlahkan adalah 10 tambah 20 
kalo saya oke maka 30 

paham ya 

itu tadi jadi kita bisa memasukkan argument menggunakan ekspresi 


atau ini contoh satu lagi 
kita bisa memasukkan argumentnya adalah function juga 

jadi begini misalkan 

saya  punya function lagi namanya kali 
kali juga memiliki parameter a dan b 

*/

// function kali(a, b){
//     return a * b;
// }

/* ya jadi kita punya dua buah function 

kita coba bikin variable hasil yang isinya begini
fucntion kali 

kali ini menerima dua parameter 

jadi saya tulis argumentya adalah misalnya gini 

*/

// var hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);


/* funcion tambah yang diisi dengan 1 dan 2 
dan function tambah lagi yang diisi dengan 3 dan 4 

ini coba kalian paham gak

pertama sebelum menjalankan function kali kita jalankan dulu function tambah ini 
tambah 1 dan 2 maka akan menjumlahkan 1 tambah 2 = 3

dan selanjutnya argument selanjutnya berupa function lagi 
3 tambah 4 = 7 

jadi function kali ini akan mengalikan 3 dikali 7 

seharusnya hasilnya 21 

betul ya 

begitu jadi kita bisa menyimpan argument itu macam macam cara 

silahkan kalian nanti coba coba sendiri saja 

oke jadi itu tadi beberapa contoh dari penulisan argument dan parameter pada function 


nah sekarang ada pertanyaan begini 

bagaimana jika parameter dan argumentnya tidak sesuai?

nah maksutnya jumlahnya tidak sesuai

kalo kita menuliskan parameternya ada 3 misalkan sedangkan argumentnya ada 2 atau sebaliknya 
parameternya 2 argumentnya 3 

itu apa yang akan terjadi?
kita lihat satu persatu ya 

yang pertama 
    jika parameter lebih sedikit dari argument, maka argument kelebihannya akan diabaikan

    nah karakteristik ini spesifik untuk javascript ya untuk bahasa pemrogaman lain meskipun punya function sama tapi mungkin saja perilakunya tidak sama seperti ini mungkin saja

    ketika parameter dan argumentnya tidak sama itu akan eror 

    nah kalo javascrip tidak

nah kita lihat 

kalo saya punya contoh seperti ini 


*/

// function tambah(a,b){
//     return a + b;
// }

// var coba = tambah(5, 10, 20);

/* nah sekarang badanya adalah pada saat kita panggil functionnya itu argumentnya ada 3 padahal parameter yang menerimanya ada 2 

nah sekarang apa yang akan terjadi dengan angka 20 
ya tadi nilai 20nya akan diabaikan 

ya untuk sementara pahaminya gitu aja dulu
karena tidak dipakai ya tidak apa apa 

javascriptnya tidak eror angka 20 ini diabaikan 

gitu ya 

sekarng sebaliknya 

jika parameternya lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undefined(default)

jadi ini yang harus kalian perhatikan 

contohnya gini kebalikannya 

kkalo saya punya function tambah parameternya ada 3 berarti dia mengharapkan ada 3 nilai yang dikirimkan 

*/

// function tambah(a, b, c){
//     return a + b;
// }

// var coba = tambah(5, 10);
// console.log(coba);

/* tapi pada saat dipanggi argumentnya yang ditulis hanya 2 sehingga c tidak menerima nilai 

maka nilai dari parameter c ini adalah undifined 

jadi kalo misalkan kalian proses didalam functionnya nilai c itu ati ati karena nilai c nya undefined 

nah sebetulnya secara umum pemahaman mengenai parameter dan argument itu sampai sini saja 

tapi khusus didalam javascript itu ada sebuah varaible khusus yang namanya arguments 

ya beda ya kalo tadi istilah argument itu kalo sekarang 

arguments adalah sebuah variable 
ya atau definisinya adalah array yang berisi nilai yang dikirimkan pada saat function dipanggil 


secara default itu ada ini disebutnya sudo variable 

atau variable semu ya 
variable yang kayaknya tidak kelihatan tapi sebetulnya ada ya itu sudo variable 

nah bentuknya adalah array kalian tidak usah khawatir dulu apa itu array 
ya nanti ada materi khusus kita membahas array 

tapi sekarang pahimnya gini saja dulu 

array adalah sebuah variable tapi variable nya sedikit lebih sakti begitu karena dia bisa menampung lebih dari satu nilai 

kan biasanya variable nampunya bisa satu ya 

ya nanti kita lihat
pokoknya ada sebuah variable yang namanya arguments yang typenya adalah array 
dan dia berisi nilai yang dikirimkan pada saat function itu dipanggil 


jadi contohnya gini

kalo saya punya seperti tadi ya function tambah parameternya dua 
tapi pada saat dipanggil kita kirimkan argumentnya 3 

tadi kan katanya angka 20nya diabaikan ya 
ya itu diabaikan untuk function ini 

ya memang tidak dipakai ya untuk function ini jadi 20 nya diabaikan 


*/

// function tambah(a, b){
//     return a + b;
// }

// var coba = tambah(5, 10, 20);
// console.log(coba);

/* tapi sebetulnya semua argument ini selain dikirimkan diparameter dia ditampung juga ke dalam sebuah variable arguments tadi

jadi kalo misalnya nih 
saya panggil dengan argument yang berbeda 
saya panggil dengan lima buah argument 


*/
// tambah(5, 10, 20, 'hi', false);

/* 5 10 20 ini untuk interjer lalu hi ini untuk string lalu false untuk boolean 

nah semua argument ini nantinya akan ditampung ke sebuah variable yang tipenya array 




                tambah(5, 10, 20, 'hi', false);

                            ||
                            ||
                            ||
                            \/

             arguments = [5, 10, 20, 'hi', false];

kalo array nulisnya gini pakai kurung siku ya lalu didalamnya nilainya bisa banyak 
dan masing masing nilai ini punya yang namanya index atau bisa dibilang urutan yang dimulai dari 0 

ya sekali lagi nanti kita akan bahas mengenai array dimateri yang lain tapi kalian pahami dulu saja array itu bentuknya begini


ya jadi kalo sekarang saya punya function tambah yang tidak ada parameternya tapi function ini mengembalikan nilai arguments array yang tadi



*/

// function tambah(){
//     return arguments;
// }
    
// var coba = tambah(5, 10, 20, 'hi', false);

/* lalu kita panggil functionnya seperti ini padahal kita tidak punya parameter ya 
tapi kita panggilnya pakai argument 

semua nilai yang ada didalam argument akan diabaikan oleh function ini 
tapi nilainya akan tetap masuk ke variable arguments 

jadi kalo kita log coba ini
hasinya akan begini

*/

// console.log(coba);


/* ada lima buah arguments yang isinya seperti ini 

Arguments(5)
0: 5
1: 10
2: 20
3: "hi"
4: false

oke kalo misalkan kalian bingung tidak apa apa nanti mungkin akan lebih jelas lagi ketika kita belajar menganai array 

nah tapi coba kita lihat contoh berikut ini ya


misalnya saekarang saya punya function tambah yang parameternya a dan b
lalu saya panggil dengan argument 3 dan 4 

*/

// function tambah(a, b){

//     return a + b;
// }

// var hasil = tambah(3, 4);
// console.log(hasil);

/* ini tidak masalah ya kayaknya 
3 akan masuk ke parameter a 4 akan masuk keparameter b lalu dijumlahkan 

sehingga hasilnya 7 ya tidak ada masalah 

tapi bagaimana kalo misalkan saya kasih argumentnya satu lagi yaitu 5


*/

// var hasil = tambah(3, 4, 5);
// console.log(hasil);

/* akan dijumlahkan gak kira kira 

tidak ya karena 5 tidak ada tempat penampungnya dia akan diabaikan 

sehingga kalo saya refersh hasilnya aka tetap 7 

nah sekarang gimana caranya saya ingin menjumlahkan semua argument yang ada difunction ini tanpa memperdulikan parameternya 

kan kalo misalkan kita mau menambah tingga kita tambahkan parameternya 

*/

// function  tambah(a, b, c){
//     return a + b + c;
// }

// var hasil = tambah(3, 4, 5);
// console,log(hasil);

/* nah baru dia dijumlahkan angka 5nya 

tapi gimana kalo argumentnya namabah lagi sekarang ada 4 berarti saya juga tambahkan parameternya ada 4 

nah itukan jadi cukup merepotkan karena kita tidak bisa tahu user mau menginputkan berapa parameter misalkan gitu 

ini kita bisa memanfaatkan array arguments tadi sehingga functionnya saya tulis begini sekarang 

functionya tetap tambah tapi didalamnya gini kita akan manfaatkan variable arguments tadi 
karena bentuknya array itu kita bisa looping isinya 

isi dari elemen arraynya 
nah caranya gini 



*/

// function tambah(){
//     var hasil = 0;

//     for(var i = 0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }

//     return hasil;
// }

/* kita gunaka for lalu kita gunanak variable i untuk melooping indexnya kita isi dengan 0 

lalu looping ini akan berjalan setiap arguments yang kita kirimkan 
jadi kita bisa menghitung ada berapa arguments yang nanti dikirimkan pada saat functionya dipanggil

menggunakan arguments.length nah ini untuk tahu berapa isinya berapa panjangnya 
lalu i++ begitu 

sekarang saya punya variable hasil kita bikin dulu diatas yang nilai awalnya 0 

dan dialam loopnya hasilnya akan ditambah arguments dengan index ke i begini 

ya jadi sekali lagi kalo bingung tidak usah khawatir nanti hal seperti ini akan umum sekali ketika kita bekerja dengan array 

nah intinya dia akan melooping tiap elemen yang ada pada arguments dan menjumlahkannya didalam variable hasil 

sehingga kita return hasilnya 
lalu kita panggil functionnya 

kita masukkan dulu ke dalam variable agar mudah dipahami

kita bikin variable namanya coba 
diisi dengna function tambah 

argumetnya saya kasih 3 misalnya ya 



*/

// var coba = tambah(1, 2, 3);

/* ya lihat ya saya kirim argumentnya 3 tapi tidak ada parameternya itu tidak apa apa ya karena ditangani oleh variable arguments 

sekarang kalo kita console coba 
maka hasilnya 


*/

// console.log(coba);

/* hasilnya 6 
nah sekarang kalo saya tambahkan satu arguments lagi itu kita tida perlu lagi merubah functionya kayak tadi ditambahin c misalnya 

ini otomatis akan nambah angka 4 


*/

// var coba = tambah(1, 2, 3, 4);
// console.log(coba);

/* ya jadi ini sangat flexible 
kalo misalkan kita tambah 5 otomatis hasilnya akan 15

ya itu ya mengenai sudo variable arguments yang ada pada function javascript 
mudah mudahan kalian tidak bingung 


baik jadi itu penjelasan mengenai parameter dan argument yang ada pada javascript 

sekali lagi mengenai parameter dan argument ini ada pada ditiap bahasa pemrogaman ya 
kalo kalian pakai c c++ dan lain lain ada 

tapi bagaimana dia menangani argument dan parameternya itu agak berbeda 

ya tadi yang kita coba adalah spesifik pada javascript 

jadi sampai disini dulu mungkin penjelasanya 


sampai disini dulu materi kali ini 
kita ketemu lagi dimateri berikutnya 

dan satu lagi jangan lupa titik koma ;  */




