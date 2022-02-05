/*popup box pada javascript

dan dimateri kali ini kita akan membahas tentang popoup box ya

apa itu popup box? 
jadi popup box atau bisa disebut dengan dialog box adalah sebuah window kecil pada browser kita yang dapat kita munculkan sebagai alat interaksi yang digunakan agar user dapat berdialog dengan halaman web 

pada seri ini seperti yang sudah saya bahas diawal itu kita tidak akan membuat sebuah website yang utuh ya melainkan hanya akan belajar mengenai dasar pemrogaman dengan menggunakan javascript 

nah untuk itu kita butuh sebuah alat interaksi untuk bekerja dengan javascript tersebut ya nanti kita lihat 

ada tiga buah popup box yang dapat kita gunakan 
      alert
      promt
      confirm

jadi tiga jenis popup box ini yang nantinya kita akan gunakan sebagai latihan kita untuk bekerja sebagai javascript 

kita akan bahas satu persatu 

yang pertama yang akan kita bahas adalah alert atau alert box 
nah untuk membuat alert box itu caranya gampang saja nanti dijavascriptnya yang perlu kalian tuliskan adalah seperti ini 

alert('hello world');

jadi ada sebuah fungsi yang namanya alert ya kalian tinggal tulis saja dijavascriptnya 

lalu fungsi ini dia menerima parameter atau tanda kurungnya itu disebut parameter ya nanti akan kita bahas lebih lanjut pada bagian fungsi 

dan parameter ini bisa kita isikan pesan yang mau disampaikan pada popup alertnya 

jadi kalo kalian menuliskan itu saja dijavascriptnya lalu nanti kalian jalankan websitenya maka nanti browsernya akan menghasilkan window kecil yang ada tulisan pesannya yang kita masukkan kedalam parameter fungsi alertnya dan hanya ada tombol oke saja 

ya nanti ketika tombol oke ditekan window kecilnya hilang dan kita baru bisa mengakses apa yang ada didalam websitenya 

nah untuk popup box ini akan tampil sedikit berbeda kalo kita buka dibrowser yang berbeda juga 

kalo kita pakai google crome seperti apa bentuknya 
tapi kalo kita buka dimozila fire fox nah itu nanti tampilnya akan berbeda juga 

jadi popupnya sedikit bebeda tapi fungsinya sama saja memunculkan sebuah window kecil yang ada pesannya yang ada tombol oke 

oke jadi kita langsung coba saja bagaimana caranya kita bikin popup ini dihalaman website kita 

pergi ke halaman html



*/


/* lalu disini tulis saja alert begitu ya lalu didalamnya kita simpan pesannya ini boleh kita tuliskan pakai kutip satu atau kutip dua ya silahkan ya 

misalnya saya tuliskan hello world*/

// alert('hello world');

/* jadi alert itu fungsinya hanya memberikan pesan sederhana saja ke user kita buka dulu open in browser 

jadi tampil seperti itu ada tulisan hello world lalu ada tombol oke 

kalo misalkan ini kita coba dibrowser lain misalnya dimozila ini akan menghasilkan tampilan yang sedikit berbeda kalo kita tekan oke baru kita bisa aksess halaman webnya gitu ya

jadi itu popup yang paling sederhana adalah alert ya 

nah sekarang kita juga bisa membuat banyak alert dalam satu halaman 

misalkan ini saya ganti dengan

*/

// alert('hello');
// alert('nama');
// alert('saya');
// alert('m.mu\'izzuddin');

/* nah begini misalnya ya jadi hallo nama saya m.mu'izzuddin ini nanti kita akan memunculkan 4 buah alert yang masing masing akan muncul setelah alert sebelumnya dihilangkan dengan menekan tombol oke 

ya kita coba kita save dulu buka dimozila fire fox lalu muncul ya 
kalo misalkan dibuka digoogle crome tidak ada tanda cheklistnya buka saja di fire fox 

jadi akan muncul hallo nama saya m.mu'izzuddin yang terakhir di oke hilang ya gitu ya paham ya 

nah tadi kalo misalkan kita menampilkan banyak alert dalam satu halaman ini browsernya akan memunculkan sebuah notifikasi jadi ada check list jadi ini artinya halaman ini menunculkan lebih dari satu dialog atau lebih dari satu popup 

nah kalo kalian mau menghilangkan atau tidak memunculkan popupnya kalian bisa checklist nah tapi yang terjadi kalo saya checklist lalu pencet oke saya tidak bisa akses lagi alert setelahnya atau popup apapun setelahnya 

jadi kalo kalian ingin tetap memunculkan kotak ini jangan dicheck list 

sekarang kita coba checklist dulu lalu saya tekan oke sudah sampai situ selesai nama saya m.mu'izzuddinya itu tidak akan muncul

nah kalo misalkan kita refresh halaman ini alertnya tidak muncul lagi jadi sekarnag halaman ini tidak mau memunculkan popup ini 

supaya mau memunculkan bagaimana? kita harus buka menggunakan tab yang baru jadi kita biasa klik kanan open in browser lagi baru dia mulai lagi 

begitu ya jadi cukup jelas ya jadi alert yang paling sederhana 





nah sekarang kita lihat popup box yang kedua yaitu prompt 

prompt ini fungsinya sama memunculkan window kecil tapi sekarang tidak hanya ada tombol oke saja tapi ini kalo kita lihat 
begini cara penulisannya ya 
prompt('masukkan nama: ');

sama seperti alert kita cukup menuliskkan keywordnya atau nama fungsinya prompt lalu didalamnya kita masukkan pesanya yang mau ditampilkan didialognya 

tapi ini agak bebeda kalo kita jalankan tampilanya begini */

// prompt('masukkan nama: ');

/* jadi ada text boxnya untuk kita bisa memasukkan sebuah inputan nanti kalian bisa masukkan apapun disini mau tulisan mau angka karakter silahkan ya kita coba ya 

kita ganti alertnya dengan prompt misalnya kita isi dengan masukkan nama gitu ya 

*/

// prompt('masukkan nama: ');

/* sebetulnya tidak harus itu ada titik duanya 
kita save lalu kita jalankan 

nah sekarang ada tulisan masukkan nama dan ada text boxnya kalo saya masukkan nama saya saya bisa tekan oke atau concel 
contohnya kalo saya tekan oke popupnya hilang 

tapi mungkin kalian bertanya tadi tulisannya sekarang pergi kemana? jadi sebetulnya popup prompt tadi mengembalikan nilai apapun yang kita tuliskan didalam inputannya 

nah maksutnya mengembalikan nilai bagaimana?

jadi pada saat kita memanggin prompt lalu user yang menuliskan sesuatu didalam inputannya itu akan ada nilai yang diambil nah supaya kita punya akses kenilai tersebut sebaiknya prompt ini kita simpan kedalam sebuah variable supaya nilai yang  dimasukkan ke user bisa ditampung ya 

misalnya kita bikin sebuah variable begini */

// var nama = prompt('masukkan nama: ');

/* lalu nama itu diisi dengan apapun yang user masukkan kedalam dialog prompt ini 

kita coba sekarang refresh kembali muncul ya dialg promptnya sekarang saya masukkan nama saya muiz ditext boxnya kalo saya tekan oke kotaknya akan kembali hilang 

tapi sekarang nilainya itu sudah tersimpan kedalam variable nama 
nah memang saya belum gunakan cara menggunakannya itu tinggal kita pakai saja variable nama ini misalnya yang paling gampang dibawahnya saya tulis sebuah alert yang parameternya saya isi dengan variable nama begini */

// alert(nama);

/*jadi nanti akan tampil sebuah popup alert yang berisi tulisan apapun yang user masukkan diprompt sebelumnya oke kita coba ya save dulu saya refresh 

saya tulis muiz pencet oke atau enter sama saja 
nah baru muncul muiz ya ini dari alert begitu 

jadi simple kita sudah bisa berinteraksi dengan halaman web kita walaupun belum dengan elemen htmlnya





oke popup yang terakhir yang akan kita bahas adalah confirm ya 

ini sintaxnya simple saja sama seperti tadi cukup kita menuliskan confirm lalu pesannya apa 
confirm('kamu yakin?');

nah confirm ini digunakan untuk meminta confirmasi dari user 
jadi contohnya seperti ini 

kalo saya menuliskan confirm lalu pesannya kamu yakin? gitu ya nanti dia akan menghasilkan popup yang sama seperti alert ada pesannya dan sama seperti prompt tombolnya ada dua 

nah tapi nanti kita bisa tentukan apa yang akan terjadi ketika user menekan tombol oke dan apa ayng terjadi ketika user menekan tombol cencle

biasanya ini digunakan yang paling simple untuk mendelete data misalnya ya

kalo kalian mau mendelete data pastikan sebelum datanya terhapus kalian berikan dulu confirmasi 
siapa tau nanti user tidak sengaja menekan tombol delete

kalo ada confirmasi seperti ini usernya bisa pencet cencle saja supaya tidak jadi menghapus datanya 

oke kita coba ya 

kita gunakan sekarang yang confirm begini 
*/

// confirm('kamu yakin?');

/* save lalu kita lihat hasilnya kita refresh 

jadi ada pesannya dan ada dua tombol ada oke ada cencle 

sekarang kalo saya pencet oke atau cencle itu tidak ada yang terjadi 

ya karena sama seperti prompt tadi fungsi confirm ini mengembalikan nilai 

tapi beda dengna prompt 
kalo prompt tadi nilai yang dikembalikan adalah apapun yang user ketikkan diinputannya 

sedangkan confirm mengembalikan nilai boolean true atau false 
true ketika kita menekan tombol oke dan false ketika kita menenkan tombol cencel 


oke untuk mencobanya sederhananya gini saya punya sebuah variable saya kasih nama tes begini ya supaya kita bisa lihat nilainya betul tidak true atau false 
lalu kita coba alert saja tampilkan tesnya
*/

// var tes = confirm('kamu yakin?');
// alert(tes);

/* kita save kita coba refresh keluar confirmnya kalo saya pencet oke akan keluar alert tulisannya true 

kalo saya refresh lagi pencet cencel akan keluar alert lagi tapi sekarang nilainya false ya 

confirm ini biasanya kita gunakan nantinya kalo kita sudah belajar mengenai pengkondisian atau pengulangan 

contoh sederhananya gini deh 
biarkan saja kalo kalian belum tau mengenai pengkondisian dan pengulangan ini kita lihat aja dulu sintax sederhananya 

misalnya gini saya punya confirm yang saya simpan kedalam variable tes sekarnag saya tidak akan melakukan alert test ini 


tapi saya tulis gini */

// var tes = confirm('kamu yakin?');
// if(tes === true) {
//       alert('user menekan tombol oke');
// }else{
//       alert('user menekan tombol cencel');
// }

/* jika, menggunakan if gini, kalo tesnya itu bernilai true, ini artinya  user menenkan tombol apa oke atau cencel oke ya jadi kalo misalkna user menekan tombol oke
maka alert kita tulis saja user menekan tombol oke 
 
jadi if tes sama dengan true maka user menekan tombol oke 
 
atau else (selain itu) adalah ketika user menenkant tombol cencel 
maka alert kita tulis saja user menekan tombol cencle 
gini ya jadi ini pengkondisian yang sederhana ya
pengkondisian atau percabangan

kita coba refresh kalo saya pencet oke tampilnya begini refresh lagi kalo saya menekan cencle tampilnya begini 

paham ya jadi itu biasanya digunakan ketika kita butuh confirmasi dari user 


atau kita juga bisa menggunakan pengulangan sederhananya gini deh saya akan coba gabungkan ketiga buah popup ya kita bikin aplikasi yang sangat simple saja 

jadi awalnya saya bikin alert selamat datang gitu ya 
lalu dibawahnya misalnya saya punya begini 
saya punya sebuah variable yang namanya lagi untuk mengechek apakah nanti user ingin melakukan sesuatu secara berulang atau tidak 

variable lagi ini saya isi nilainya dengan true jadi nilai awal dari lagi adalah true lalu saya tulisa begini while ini contoh pengulangan ya kalo bingung dilihat saja sintaxnya saya tulis lagi === true 

jadi selama lagi itu nilainya true maka pengulangan ini akan berjalan terus gitu pengulangannya akan berhenti ketika laginya berubah menjadi false 

jadi kalau lagi === true kita tulis var nama diisi dengan prompt setelah itu saya alert  diisi dengan hallo + nama jadi ini konkatenasi ya jadi hallo muiz atau siapa 

jadi kalo sudah muncul muiz saya mau ditanya lagi jadi var lagi = confirm coba lagi? 

jadi kalo misalkan user menenkan tombol oke dia akan dimunta memasukkan nama lagi tapi ketika user menean tombol cencle jadi dia keluar dari pengulangannya itu simple saja 

dan diakhir saya tulis alert lagi terima kasih */

// alert('selamat datang');
// var lagi = true;
// while(lagi === true) {
//       var nama = prompt('masukkan nama');
//       alert('hello ' + nama);

//       var lagi = confirm('coba lagi?');
// }
// alert('terima kasih');

/* ini progam yang sangat sederhana kita coba kita refresh muncul selamat datang saya klik oke dia minta nama saya tulis muiz saya oke ada tulisan hallo muiz ini penggabungan string dengan variable saya klik oke nah ditanya nih mau coba lagi 

kalo saya pencet oke dia minta nama lagi akan terus berulang sampai nanti saya pencet tombol cencel 

kalo saya pencet cencel baru dia keluar dari pengulangan dan masuk ke alert terimakasih 

gitu ya simplenya seperti itu 

nanti detilnya akan kita bahas lebih lanjut di pengkondisian dan pengulangan 

jadi yang ada diwhile itu === dihilangkan jadi while(lagi) ini sama saja kalo kalian masih inget kita gunakan nilai truthy dan falsy jadi lagi sekarang nilainya dalah true tidak perlu saya check === true lagi 

begitu lagi ini jadi false karena confirmnya cencel maka dia keluar 



baik jadi mungkin itu ya mengenai tiga dialog box atau popup box sederhanan yang akan kita gunakan diseri ini ya mudah mudahan kalian tidak bingung dengan penejelasannya 

silahkan kalian coba coba dulu penggunaanya supaya nanti kalian akan lebih mudah nanti ketika mengikuti materi materi selanjutnya 

sampai disini dulu materi kita kali ini kita ketemu dimateri selanjutnya 

dan satu lagi jangan lupa titik koma ; */


alert('selamat datang');
var lagi = true;
while(lagi === true) {
      var nama = prompt('masukkan namamu');
      alert('hello ' + nama);

      var lagi = confirm('coba lagi?');
}
var yakin = false;
while(yakin === false) {
      var kota = prompt('masukkan kotamu');
      alert('kotamu ' + kota);

      var yakin = confirm('apakah benar?');
}
alert('terima kasih');

