/* array pada javascript: manipulasi array

dimateri kali ini kita akan melanjutkan pembahasan kita mengenai array pada javascript 

kalo dimateri sebelumnya kita sudah coba membuat array nah kali ini kita akan belajar mengenai cara manipulasi dari array 

apa saja yang kita akan lakukan untuk memanipulasi array ini ada beberapa hal

1.menambah element pada array 
2.menghapus element pada array
3.menampilkan seluruh isi array

ya langsung saja kita coba ya 


1.menambah isi array
   kita akan coba yang pertama adalah menambah isi array ya 

   jadi kalo dimateri sebelumnya kita sudah tahu cara bikin array dengan membuat sebuah variable berisi array seperti ini ya 

   variable nama variablenya apa lalu kurung siku 


*/

// var arr = ['a', 1, true];

// nah kita bisa langsung mengisikan nilainya pada array seperti ini

/* jadi arraynya sudah terisi seperti ini 

untuk menampikan isi arraynya sebetulnya gampng saja ya kita tinggal munculkan diconsole

*/

// console.log(arr);

// nah nanti diconsole akan menampilkan selurh isi array ya 
/* kita lihat consolenya 
tapi tampilnya dia bentuknya object pada javascript

nah nanti hasil ini tidak akan ditampilkan diuser nanti ada cara yang lebih baiknya ya 

nah ini untuk menampilan seluruh isi pada arraynya kita lihat bahwa ada 
a 1 dan true 
0
1
2
 ini adalah indexnya

index array selalu dimulai dari 0 

nah sekarang kalo saya ingin menampilkan angka 1 saja gimana caranya?
kita tinggal didalam arraynya kita tambahkan indexnya  seperti ini 


*/

// console.log(arr[1]);

/* maka sekarang yang ditampilkan adalah angka 1 
itu cara membuat array yang sudah ada isinya dan menampilkan arraynya

nah sekarang gimana kalo misalkan arraynya awalnya kosong begini 



*/

// var arr = [];

/* sebelum ditampilkan kita akan isi dulu 
nah cara ngisinya kalian bisa tulis saja arr lalu kita kasih indexnya seperti ini 

nah misalkan kita isi dengan nama ya misalkan muiz 


*/

// arr[0] = 'muiz';

// lalu untuk element yang berikutnya misalkan indexnya 1 kita isi dengan zuddin misalnya 

// arr[1] = 'zuddin';

// dan yang terakhir misalnya ada aku gini ya 

// arr[2] = 'aku';

/* ini artinya kita akan mengisi element element array setelah  kita buat 

kalo kita tampilkan lagi menggunakan console.log arranya 

*/

// console.log(arr);

// maka tampil seperti tadi ya bentuknya object array seperti ini 

/* jadi kita bisa isikan element elementnya setelahnya 

begitu tapi hati hati kalo kalian menggunakan cara ini berarti kalian harus hafal indexnya ya 
index mana yang kosong 

dan kalian juga harus tahu ada  erapa element didalam arraynya sehingga kalian tidak menimpa datanya 

ya ati ati begitu kalian isi kan satu data seperti ini 

misalkan ada satu index yang kelewat ini ya index 3 nya tidak ada

*/
// var arr = [];

// arr[0] = 'muiz';
// arr[1] = 'zuddin';
// arr[2] = 'aku';
// arr[4] = 'saya';

// console.log(arr)
/* kalo saya jalankan maka arraynya akan ada 5 kenapa 5 ?

karena array pada index ke 3 itu akan diisi dengan undifined 
itu jadi ati ati ya 

padahal kalo saya isi dengan 3 


*/

// var arr = [];

// arr[0] = 'muiz';
// arr[1] = 'zuddin';
// arr[2] = 'aku';
// arr[6] = 'saya';

// console.log(arr);

/* maka pasti elementnya ada 4 tapi begitu kita lewati misalya saya ganti 6 saja 

ya akan ada 3 index yang bolong ini ati ati 

nah gimana cara mengatasinya? nanti kita lihat ya 

itu untuk menambah isi array 

selanjutnya kita akan coba menghapus isi array

2.menghapus isi array 

topik yang kedua adalah menghapus isi array 

nah kalo sekarang arraynya ada isinya dulu

*/
// var arr = ['muiz', 'zuddin', 'aku'];

// bagini ya jadi awalnya arraynya ada isinya 
/* lalu untuk menghapusnya gimana 

caranya seperti tadi misalkan saya mau menghapus zuddin ya 
maka kita akan buat element ini menjadi undefined


 jadi kalian harus check dulu berapa undexnya untuk zuddin ini
caranya gampang saja kalian panggil arranya isi indexnya 

ya kan zuddin itu indexnya 1 

*/

// arr[1] = undefined;

/*  lalu kita isi dengan undefined ini cara menghapusnya 
kalo kita console.log arraynya sekarang 

*/

// console.log(arr);

// maka zuddinnya sudah hilang berubah menjadi undefined 

/* jadi sebetulnya elementnya tidak hilang tapi tapi nilianya berubah menjadi undefined 


ya ini menambah dan menghapusnya saya sebut dengan cara manual ya 

ya nanti ada cara yang lebih baiknya menggunakan method array 

itu untuk menghapus 

3.menampikan isi array 

dan yang ketiga  kita akan menampilkan isi array

jadi ini sebetulnya yang kita coba sudah menampilkan ya 

nah tapi sekarang kita akan coba menampilkan dengan cara yang benar

bukan menampilkan menggunakan object seperti tadi

nah ini kita butuh looping 

jadi kita akan menampilkan isi arraynya satu persatu


*/

// var arr = ['muiz', 'zuddin', 'nathan']


// nah kita akan bikin sebuah looping disini untuk menelusuri element arraynya satu persatu 


// for(i = 0; i < 3; i ++){
//    console.log(arr[i]);
// }


/* ya caranya kalian bisa bikin vari i diisi 0 lalu dicheck ada berapa isi dari element array ini 

ada 3 ya jadi kalian bisa tulis 1 lebih kecil dari 3 
gitu ya supaya loopingnya sesuai dengan umlah elementya 

lalu i++

sekarang tinggal kita tulis misalkan console.log  kalian cukup tulis arr index ke i 

karena i nya mulai dari 0 nanti nambah lagi jadi 1 nambah lagi jadi 2 lalu selesai 

coba kita jalankan ya 

nah ini cara nampilinya bukan lagi menggunkan object 

sehingga sekarang kita bisa manipulasinya gini 

misalkan ini data mahasiswa 

*/

// for(i = 0; i < 3; i++){
//    console.log('mahasiswa ' + i + ' : ' + arr[i]);
// }


/* ya kita lihat hasilnya 
mahasiswa ke 0 
mahasiswa ke 1 
mahasiswa ke 2 

kalo kalian mulainya ingin dari 1 kalian tinggal tambahkan disini + 1


*/

// for(i = 0; i < 3; i++){
//    console.log('mahasiswa ' + (i + 1) + ' : ' + arr[i]);
// }

/* ya jadi nanti mulainya dari 1 

nah ini cara menampilkan menggunakan looping 

tapi ati ati jika saya nambah satu mahasiswa 


*/

// var arr = ['muiz', 'zuddin', 'nathan', 'husain' ]

// for(i = 0; i < 3; i++){
//    console.log('mahasiswa ' + (i + 1) + ' : ' + arr[i]);
// }

/* harusnya tampil ya mahasiswa ke 4 

nah ini tida tampil 
kenapa kira kira?

itu karena arraynya berhenti diindex ke 3 

harusnya kan ke 4 
kalo ke 4 bener 

nah kita tidak mau melakukan ini biar javascriptnya saja yang mengechek ada berapa sih element array didalamnya 

nah ini caranya kalian panggil arraynya lalu gunakan sebuah method titik length 

nanti javacriptnya menghitung sendiri 
didalam array ini ada berapa elementnya 


*/

// var arr = ['muiz', 'zuddin', 'nathan', 'husain' ]

// for(i = 0; i < arr.length; i++){
//    console.log('mahasiswa ' + (i + 1) + ' : ' + arr[i]);
// }

/* sehingga sekarang pasti bener 

kalo misalkan husainnya saya hapus 
nah ini otomatis husainnya hilang 


jadi ini cara menampilkan isi array
paham ya 

nah itu tadi kita sudah coba manipulasi arraynya 

ya kita sudah coba menambah menghapus dan menampilkan walaupun caranya masih manual dan sepernuhnya benar 

nah untuk mempermudah hal tadi sebetulnya kita bisa gunakan method yang disediakan oleh javascriptnya 


ada banyak sekali method yang bisa kita gunakan didalam javascript ya khusus untuk array ini 

nah sekarang yang kita bahas hanya beberapa saja 

1.length 
      yang pertama tadi kita sudah coba ya menthodnya length 
      ini untuk mengetahui berapasih jumlah element yang ada didalam array 

2.join
      nah method ke 2 yang akan kita coba adalah join 

      ya jadi method ini adalah method yang menggabungkan seluruh isi array dan mengubahnya menjadi sebuah string 

nah ini bagus ya kita coba 


mathod pada array


yang pertama kita akan coba join ya 

nah join ini dia akan menggabungkan seluruh isi array dan mengubahnya menjadi string 

maksutnya gimana kita lihat 

*/

// var arr = ['muiz', 'zuddin', 'nathan', 'husain' ];

// nah sekarang kalo misalkan kita console log arranya

// console.log(arr);

// kan tadi tampilnya bentuknya seperti object dan sekali lagi user tidak mau lihat ini sebetulnya 

// nah sekarang kalo kita gunakan join, kita tambahkan disini join

// console.log(arr.join());

// ini artinya kita akan memanggil method join pada array, ya karena dia method kita harus gunakan kurung buka dan kurung turtup 

/* method itu adalah function yang berada didalam sebuah object 

nanti hasilnya akan seperti ini 

muiz,zuddin,nathan,husain

nah lihat sekarang jadi rapi 

muiz, zuddin, nathan, husain 

nah ini bentuknya sudah string ya 

nah kalo kalian tidak mau pakai koma 
kalian bisa kasih separatornya atau pemisah antar element arraynya 


*/

// console.log(arr.join('-'));

// misalkan kalian pisahkan menggunakan minus kalian kasih saja string minus disini 

/* 
maka nanti komanya akan berubah menjadi minus 

kalo saya gabungkan menggunakan spasi biar tambah rapi


*/

// console.log(arr.join(' - '));


// maka arranya digabungkan menggunakan minus tapi sekarang ada spasinya 


/* metode selanjutnya yang akan kita coba ini ada beberapa 

1.push
2.pop
3.unshift
4shift

keempat method ini digunakan untuk menambah atau menghapus element pada array 

nah saran saya sambil kalian menghafal method method ini dan kegunaaannya 

kalian pahami juga artinya dalam bahasa inggris

karena itu nanti memudahkan untuk membayangkan method ini berfungsi untuk apa 


contohnya kita akan coba dua yang pertama dulu ya push dan pop 

push dan pop

push kita gunakan untuk menambah element array diakhir arraynya 

ya jadi push itu mendorong atau memasukkan element baru diakhir arraynya

cara pakainya simple saja
kalian tulis saja arranya titik push  



*/

// var arr = ['muiz', 'zuddin', 'nathan' ];

// arr.push('husain');

/* misalkan husian maka husain ini akan dimasukkan diakhir arraynya 
ya kita coba console log lagi
*/

// console.log(arr.join(' - '));

/* kita iihat hasilnya sekarang husain sudah masuk diakhir arraynya 

untuk push itu sebetulnya kita bisa tambahkan langsung beberapa element misalkan begini arranya tadinya 3 

kita langsung push 2 element ya 


*/

// arr.push('husain',  'hasan');
// console.log(arr.join(' - '));

/*  ya hasilnya akan menambah 2 element


ya sekarang pop 

kalo pop itu kebalikan dari push dia menghilangkan element terakhir dari sebuah array 

pop itu ilustrasinya diambil dari 
katika kalian memecahkan sebuah balon menggunakan jarum gitu 

pop itu adalah sound effect nya 

jadi maksutnya pop itu element terakhirnya seolah oleh pecah gitu ya 

kita coba ya 

kata panggil array yang mau dihapus

*/

// arr.pop();
// console.log(arr.join());

/* maka array yang nathan akan menghilang 
kita 'lihat hasilnya 

ya betul ya element terakhirnya akan hilang

kalo saya pop sekai lagi 
*/

// arr.pop();
// console.log(arr.join());

/* maka zuddin juga itu hilang 

begitu ya itu kalo kalo kita menggunakan push dan pop 

menambah atau menghaspu element terakhir sebuah array 

bedan dengan push kalo pop untuk menghapus element pada sebuah array dia hanya bisa menghapus satu persatu elementnya 

ya jadi berbeda dengan push
paham ya 

itu untuk push dan pop



nah sekarang kita akan coba method yang ke 3 yaitu unshift dan shift 

3.unshift dan shift

nah ini sama persis dengan push dan pop 

tapi unshift dan shift ini dia bekerja untuk element pertama pada array 

kalo push dan pop adalah terahir unshift dan shift adalah pertama 

jadi kalo saya tulis unshift 
itu artinya saya menambah kan element baru diawal arraynya 

kita coba
kalo saya tulis disini 

arr lalu kita tulis unshift lalu husain

*/

// var arr = ['muiz', 'zuddin'];

// arr.unshift('husain');
// console.log(arr.join());

/* maka nanti husain akan masuk diawal sebelum muiz 

jadi sekarang ada diawal 

sedangkan shift itu menghilangkan element pertama 

kalo saya tulis disini arr shift maka sama seperti pop tadi dia akan menghilangkan sebuah element 

*/

// arr.shift();
// console.log(arr.join());

/* hasilnya elementnya akan hilang 

nah shift dan pop ini benar benar menghilangkan elementnya bukan merubahnya menjadi undefined seperti tadi yang kita lakukan manual

oke paham ya 

jadi ada push dan pop ada unshift dan shift 

sekarang pertanyaannya gimana kalo misalnya saya ingin menambahkan elementnya ditengah tengah?

saya tidak mau diawal saya tidak mau diakhir 


catatan: jawabannya ada dimateri selanjutnya 


*/

