/* object pada javascript: membuat object


dimateri kali ini kita akan melanjutkan pembahasan kita mengenai javascript 

masih mengenai object dan kali ini kita akan bahas bagaimana caranya untuk membuat object 

karena ada banyak cara untuk membuat object pada javascript 

ya kita sudah  coba salah satu caranya dimateri sebelumnya 
dan sekarang kita akan lihat cara lain untuk membuat object pada javascript 


1.object literal
    yang pertama kita bisa membuat object secara literal 
    ini pembuatan object yang sudah kita coba sebelumnya ini cara yang paling simple

2.function declaration
    lalu selain itu juga kita bisa membuat object menggunakan function 
    ya khususnya function declaration

3.constructor function(keyword new)
    lalu ada cara ketida yaitu menggunakan constructor function 
    nah cara inilah yang nantinya banyak kita gunakan ya
    
    menggunakan constructor function ini nantinya menggunakan keyword new 

4.object.create()
    dan yang terakhir dengan menggunakan sebuah method yang dinamakan object.create()



jadi ada 4 cara yang kita coba dimateri ini adalah yang tiga pertama ini ya 

untuk object.create() ini nanti akan kita coba setelah kita belajar mengenai prototype 

ya sekarang kita lihat apa perbedaanya dan gimana sih cara bikinnya 


1.membuat object literal 
    yang pertama kita akan coba dulu cara yang paling simple itu menggunakan object literal 

    misalnya kita akan membuat object mahasiswa

    caranya cukup kita membuat var lalu nama variablenya apa lalu kita isi dengan object 

    ya kurung kurawal buka dan kurung kurawal tutup 

    dan ini yang sudah kita coba dimateri sebelumnya 
*/

// var mhs = {}

/* nah didalam kurung kurawal buka dan tutup ini kita akan simpan pasangan antara key dan value 

ya keynya merupakan properti dari object ini 

ya misalkan untuk mengidentifikasi seorang mahasiswa
mahasiswa tersebut punya nama yang diisi dengan misalkan nama saya 


*/

// var mhs1 = {
//     nama : 'muiz',
//     nrp : 62719,
//     email : 'muizzuddin334@gmail.com',
//     jurusan : 'teknik informatika'
// }

/* ya jadi sebelah kiri itu ada keynya pisahkan dengan titik dua lalu sebelah kanan itu nilainya 

dan nilainya itu disesuaikan kalo string itu menggunakan kutip dan kalo intejer itu tidak menggunakan kutip

lalu jika lebih dari satu properti kita pisahkan dengan koma begini
lalu selanjutnya misalkan mahasiswa tersebut punya nrp atau nomor registrasi 

lalu misalkan mahasiswa tersebut punya email
dan terakhir mahasiswanya punya jurusan 

nah seperti ini 
dengan menggunakan cara ini kita sudah punya sebuah object namanya mahasiswa yang didalamnya berisi empat buah properti 

untuk memanggil data mahasiswa ini misalkan kita tulis saja diconsole
kita tinggal panggil nama objectnya lalu pencet enter lalu lihat 

kalian bisa lihat ini sudah ada isinya 
paham ya membuat object literal itu seperti ini

kalo kita mau membuat object berikutnya misalkan mahasiswanya ada dua begitu ya 

ya kalian cukup bikin saja variable yang lain 


*/

// var mhs2 = {
//     nama : 'husain',
//     nrp : 27588,
//     email : 'husain123@gamil.com',
//     jurusan : 'pendidikan agama'
// }

/* nah ini sekarang saya punya dua mahasiswa 
yang sekarang kalo saya panggil diconsole

saya panggil mhs1 ada muncul muiz
lalu mhs2 muncul husain

ya jadi ini caranya membuat object literal 
caranya sangat gampang kalian tinggal menggunakan kurung kurawal

tapi jika kalian ingin membuat object berikutnya walaupun propertinya isinya sama yang beda hanya nilainya 

kalian harus tulis semuanya 

oke sekarang kita lihat cara kedua menggunakan function declaration 

2.menggunakan function declaration 

    ya ini caranya cukup kalian tulis function 
    misalkan namanya buat object mahasiswa



*/

// function buatObjectMahasiswa(nama,nrp,email,jurusan){
//     var mhs = {}
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;

//     return mhs;
// }

/* nah nanti didalam parameternya atau argumentnya kita kirimkan properti propertinya 

misalkan nama nrp email dan jurusan

lalu didalamnya kita baru declarasikan sebuah variable namanya mahasiswa kita bikin dia sebagai object 

nah lalu object ini kita isi properti propertinya menggunakan parameter yang kita tulis didalam functionya 

misalkan saya mau masukkan nama sebagai properti 
jadi saya bisa tulil

mhs.nama = nama

mhs titik nama lalu diisi dengan parameternya 
dan seterusnya 

jadi ini kita bikin object kosong lalu objectnya kita isi 
dan yang terakhir jangan lupa kembalikan nilai objectnya 

ini caranya untuk membuat objectnya 
sekarang kita isi objectnya 

caranya misalkan kita simpan kedalam variable nilai kembali dari functionnya 

*/


// var mhs3 = buatObjectMahasiswa('hasan', 8736, 'hasan334@gmail.com', 'teknik elektro');

/* 
misalkan kita isi dengan mhs3 lalu panggil functionnya 
lalu kirimkan data mahasiswanya kedalam argumentnya 

misalkan namanya saya kasih hasan 
urutannya sesuaikan ya dengan parameternya 

nah seperti ini jadi sekarang saya sudah punya object namanya mhs yang diisi dengan function declaration yang didalam functionnya itu membuat sebuah object 

kita save lalu refresh 
kita panggil mhs3 diconsole

nah kalian bisa lihat ya
isinya sama seperti tadi 

kalo kalian mau buat mahasiswa berikutnya ini gampang saja 
kalian cukup bikin var mhs4 

lalu diisi dengan funciton declaration tadi


*/

// var mhs4 = buatObjectMahasiswa('zuddin', 34543, 'zuddin234@gamil.com', 'teknik informatika');

/* ya ini lebih ringkas dari pada kita membuat object literal 

karena deklarasinya kita buat sekali 
lalu objectnya kita bisa buat berulang ulang 

begitu paham ya 
itu menggunakan function declaration 


3.constructor

    sekarang yang terakhir kita akan coba buat menggunakan constructor 
    
    nah sebetulnya menggunakan constructor ini mirip banget dengan menggunakan function declaration 

    ya bahkan constructor ini adalah function yang khusus untuk membuat object 
    ya jadi nanti kalian akan melihat kemiripan

    ya nanti kedepannya yang akan kita gunakan itu yang constructor ini

    ya kita lihat caranya bagaimana

    nah caranya itu sama saja pada saat kalian mendeclarasikan functionnya sama seperti function declaration yang diatas ini 

    jadi kita bisa bikin function dulu 
    lalu nama functionnya juga bisa bebas ya tapi kebiasannya pada saat kita membuat function constructor 
    nama functionnya itu diawali dengan huruf besar 

    lalu parameternya diisi dengan apa?
    sama saja dengan functin declaration 

*/

// function Mahasiswa(nama, nrp, email, jurusan){
    
// }

/* nah disini masih sama ya 
yang beda nama functionnya diawali dengan huruf besar

ya ini hanya kebiasaan 
kalian mau tulis huruf kecil juga tidak akan eror

ini hanya untuk membedakan mana yang function declaration dan mana yang function constructor

nah lalu isinya juga agak berbeda

kalo tadi menggunakan function declaration ada dua hal 

yang pertama ada var mhs 
ini declarasi objectnya ya dan yang terkhir mengembalikan nilainya / return 

nah kalo menggunakan constructor dua hal tersebut tidak usah kita tulis 

yang perlu kita tulis gini 
kalian tulis ada keyword yang namanya this 

ya tidak usah bingung dulu 
ya ini akan kita pelajari dimateri yang akan datang mengenai keyword this ini 

saya tulis begini 

*/

// function Mahasiswa(nama, nrp, email, jurusan){

//     
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
//    
// }

/* this.nama diisi dengan parameter nama  
selanjutanya this.nrp diisi dengan parameter nrp dan seterusnya 

menggunakan constructor yang kalian tulis hanya ini saja 

tanpa ada var tanpa ada return 

kalo misalkan mau memanggilnya caranya gini 


*/

// var mhs4 = new Mahasiswa('ahmad', 2425, 'ahmad34@gmail.com', 'teknik informatika');

/* kalian bikin variable misalnya mhs4 yang diisi dengan new 

nah ini bedanya 
cara memanggilnya beda dengan functin declaration

kalo function declaration panggil nama functionnya 
kalo function constructor menggunakan new dan nama function conctructornya 

isinya sama data mahasiswanya 
misalkan ahmad gini ya 

jadi cara memanggilnya bikin variable lalu tambahkan new mahasiswa 

kita save dilu kita coba jalankan 
refersh 

panggil diconsole mhs4
nah sama saja tuh ya 

ya jadi ini menggunakan function constructor


nah kalo kalian masih bingung bedanya menggunakan function constructor dan function declaration 

nah kalian anggap saja bahwa ketika kita menggunakan constructor 

function Mahasiswa(nama, nrp, email, jurusan){

    //var this = {}
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    //return this
}

itu anggap saja kita punya ini 

var this = {}

dan terakhir ada return this

jadi sebetulnya sama ya bedanya hanya 
kalo menggunakan function declaration kita bikin sendiri var dan returnnya 

kalo menggunakan constructor sudah dibikinin sama javascript dua hal ini 

jadi tidak perlu kalian tulis paham gak?

nah yang penting kalian tulis keyword new sebelum function constructornya dipanggil 

ati ati kalo misalkan kalian tidak pakai keyword new 
nanti javascriptnya akan berasumsi bahwa kalian memanggil objectnya menggunakan function declaration 

jadi kalo pakai function declaration deklarasi dan returnya harus ditulis 

jadi kalo tanpa new kita jalankan dia akan undefined 
karena tidak mengembalikan nilai

ya jadi begitu hati hati ketika kalian membuat function constructor maka memanggilnya itu wajib menggunakan new 

dan ketika kalian buat menggunakan function declaration itu tidak perlu ada new ya 


oke ya jadi mungkin itu beberapa cara untuk membuat object 
dan yang perlu kalian pahami betul betul adalah yang constructor 

karena ini nantinya yang akan kita gunakan lebih banyak diseri ini

baik jadi mungkin itu ya untuk materi kali ini simple saja 
beberapa cara untuk membuat object pada javascript 

baik jadi sampai disini dulu materinya kita ketemu lagi dimateri yang akan datang

dan satu lagi jangan lupa titik koma ; */


