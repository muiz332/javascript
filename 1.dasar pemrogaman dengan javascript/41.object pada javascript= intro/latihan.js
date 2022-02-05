/* object pada javacript: intro

sekarang kita masuk ketopik yang baru yaitu mengenai object pada javascript 

ya topik object pada javascript ini merupakan topik yang cukup penting karena didalam javascript itu hampair semua elementnya terbuat dari object 

contohnya seperti array yang sudah kita pelajari dimateri sebelumnya 
array itu merupakan object 

jadi tidak ada type data yang namanya array 
yang ada type data yang namanya object 

dan dimateri kali ini kita akan membahas apa itu object definisinya apa 
dan kenapa sih kita menggunakan object 

supaya kalian punya gambaran dulu saja mengenai object secara umum 

nanti penjelasan lebih detilnya kita akan bahas dimateri materi selanjutnya 

sekarang sebelum kita mengetahui definisi dari object 
gimana kalo kita lihat dulu definisi dari array ya 

dari materi materi sebelumnya mudah mudahan kalian masih inget 

jadi array itu secara definisinya adalah kumpulan nilai yang memiliki index 

dimateri sebelumnya kita sudah tahu bahwa array itu adalah sebuah variable yang bisa menampung banyak nilai dan nilainya itu otomatis memiliki index yang dimulai dari 0  didalam array tersebut gitu ya 

nah sekarang object juga sama 

kita bisa anggap object itu kumpulan nilai tapi nilainya tidak memiliki index melainkan memiliki nama 

ya jadi didalam object tidak ada index yang dimulai dari 0 melaikan dia memiliki nama gitu ya 

atau kalian masih inget array itu adalah variable sakti 

nah kalo object itu adalah array yang lebih sakti 

jadi nanti kita bisa lakukan apa yang dilakukan array dengan lebih komplex lagi 

bahkan ada yang bilang gini

"in javascript, object are king
if you understand object, you understand javascript"

jadi kalo kalian paham mengenai object katanya kita bisa paham mengenai javascript 
karena tadi didalam javascript itu didalamnya berisi object object 

nanti kita lihat lah ya 

didalam bahasa pemrogaman yang lain juga ada konsep yang sama seperti object pada javascript 

ya misalkan 

php : associative array 
phyton : dictionaries 
c : hash tables
java : hash maps
ruby & perl : hashes

ya jadi dibahasa pemrogaman yang lain juga ada konsep yang sama ya walaupun namanya berbeda 

sekarang pertanyaan selanjutnya kenapa sih kita harus menggunakan object?

nah coba kita lihat contoh kasus berikut ini ya 

misalkan kita 
ceritanya kita mau bikin kumpulan data yang menjelaskan seorang mahasiswa ya 

kan mahasiswa itu mempunya nilai yang melekat pada mahasiswa itu ya 

misalkan nama umur dan lain sebagainya 

kalo kita menggunakan variable biasa tanpa menggunakan object atau bahkan tanpa menggunakan array 

kita bisa bikin begini 

misalnya kita bikin nama mahasiswa ya begini 

var namaMhs = muiz

lalu kita buat lagi variable umur mahasiswa 

var umur = 18

lalu kita bisa buat lagi variable untuk mengechek apakah mahasiswa tersebut sudah lulus atau belum

var lulus = true

terus gimana kalo misalkan kita mau menampung data dari IP atau index prestasi dari mahasiswa tesebut tiap tiap semesternya 

berarti kita bisa bikin lagi nama variable misalkan ipsemester yang diisi dengan array yang nilainya banyak

var ipsemester = [2.30, 3.40, 5.70, 6.80, 7.70];

nilai nilainya merupakan ipk dari tiap tiap semester mahasisw tersebut 

ya kita bisa buat begini

ya terus misalkan kita juga ingin punya data untuk menghitung ipk atau ipkumulatif dari masing masing mahasiswa 

nah berartikan kita bisa bikin saja sebuah function biar gampang 

function ipkumulatif(ipSemester){
    var total = 0;
    for(var i = 0; i < ipSemester.length; i++){
        total += ipSemester[i];
    }
    return total / ipSemester.length

}

misalkan nama functionya ipkumulatif
yang menerima parameternya adalah ipSemester 

lalu didalam functionya kita hitung kita telusuri masing masing element pada arraynya kita jumlahkan dengan variable total

lalu diakhir totalnya kita bagi dengan jumlah semesternya atau jumlah ipSemesternya 

maka nanti dihasilkanlah rata rata dari ipSemester itu kita sebut dengan ipk

nah begini ya 

nah sekarang problemnya gimana kalo ada mahasiswa yang kedua 
maka nanti kita harus bikin variable baru 

nama mahasiswa2
umur mahasiswa2

dan seterusnya sampai jumlah mahasiswanya itu akan jadi problem ya itu akan jadi merepotkan 

nah itu kita bisa perbaiki dengan menggunakan array 

ya kalo menggunakan array mungkin kita bisa bikin gini

kita bikin saja variable mahasiswa untuk data satu mahasiswa

dimana didalamnya kita bisa bikin banyak data seperti ini 

var mahasiswa = ['muiz', true, [2.30, 3.40, 5.70, 6.80, 7.70]];

element pertama nama mahasiswa 
element kedua lulus atau tidak
dan element ketiga isinya array yang menampung ipSemester 

oke jadi nanti kalo misalkan ada mahasiswa yang kedua kita bikinny variable mahasiswa kedua 

nah untuk menghitung ipknya kita tidak bisa masukkan sebagai element disini 

ya kita harus tetep bikin functionya terpisah 
contohnya kayak gini 

function ipKumulatif(ipSemester){
    var total = 0
    for(var i = 0; i < ipSemester.length; i++){
        total += ipSemester[i];
    }
    return total / ipSemester.length
}

sehingga kalo saya ingin tahu ipK dari mahasiswa muiz ini kita tinggal panggil lagi nih

ipKumulatif(mahasiswa[2]);

begini ya kalo pakai array sedikit kita perbaiki tapi tetap saja banyak pengulangan baris baris code nantinya

nah sekarang dengan menggunakan object kita bisa ringkas lagi
sehingga sekarang datanya milik satu orang mahasiswa

dan sekarang kalo kalian lihat diarray mahasiswa ini yang dimiliki oleh arraynya adalah index 

muiz index 0 true index 1 dan array index 2

jadi javascriptnya tidak tahu bahwa muiz adalah nama element kedua adalah lulus atau tidaknya dan element ketiga adalah ipSemester

javascriptnya tidak tahu

nah sekarang kalo kita perbaiki menggunakan object kita bisa bikin data mahasiswa tidi lebih terorganisir lagi 

ya cara nulisnya gini 

sekarang kita tetap punya variable mahasiswa 
tapi kalo tadi array pakai kurung siku sekarang pakai kurung kurawal 

nah gini kalo mau buat object ya 

var mahasiswa = {

}


lalu didalamnya kita buat begini 

var mahasiswa = {
    nama : 'muiz',
    lulus : true,
    ipSemester : [2.30, 3.40, 5.70, 6.80, 7.70],
    function ipKomulatif(){
        var total = 0;
        var ips = this.ipSemester

        for(var i = 0; i < ips.length; i++){
            total += ips[i];
        }
        return total / ips.length
    }

}

nah jadi kita memasangkan keynya 
kalo tadi keynya berupa angka yang dibikinin oleh javascriptnya 

nah sekarang kita bikin sendiri keynya 

nama diisi dengan muiz
lalu lulus diisi dengan true 
dan ipSemester diisi dengan array 

dan yang terakhir kita juga bisa simpan function menghitung ipk 

ya jadi semua data ini milik variable mahasiswa 

ya kalian jangan dulu bingung mengenai penulisannya 

kalo kalian ada yang bingung itu kenapa ada keyword this misalnya ya 

itu nanti kita pelajari lebih detil dimater selanjutnya 

pahami saja dulu bahwa kita sekarang bisa mengorganisir nilai dengan lebih baik seperti ini 


nah sekarang kalo mislanya saya ingin tahu berapa sih ipknya dari mahasiswa muiz ini 

nanti kita cukup panggil object nya 

mahasiswa.ipKumulatif()

lalu dengan menggunakan notasi titik kita panggil function didalamnya 

maka ini nanti akan menghasilkan nilai yang sama dengan contoh array sebelumnya tadi 

gitu ya mudah mudahan paham dengan contoh berikut ini 




selanjutnya kita akan lihat anatomi dari object ya atau istilah istilah didalam object 

jadi ini contohnya saya punya object yang lain 

kita bikin sebuah variable namanya orang yang dia typenya adalah object ditandai dengan kurung kurawal buka dan tutup 

lalu didalamnya misalkan kita tulis seperti ini 

var orang = {
    nama : 'muiz', 
    umur : 18,
    pekerjaan : 'mahasiswa'
    sapa : function(){
        return 'hi nama saya ' + this.nama + ' umur saya ' + this.umur + ' tahun dan saya adalah seorang ' + this.pekerjaan;
    }
}


nama siapa 
umur berapa 
pekerjaan apa 

nah nama umur dan pekerjaan ini adalah variable yang ada didalam object yang ketiga ini kita sebut dengan nama properti 

ya jadi mulai sekarang kalo ada variable yang didalam object kita sebut dengan properti 

nah masing masing properti ini kita pisahkan dengan tanda koma begitu ya 

dan selanjutnya kiba bisa punya function misalkan function namanya sapa 

supaya orang ini bisa menyapa menggunakan data yang ada didalam objectnya 

misalkan function sapa ini akan berisi string seperti yang ada diatas ya 

nah ini adalah function yang berada didalam object 

kalo tadi variablre yang berada didalam object kita sebut properti 

sekarang function yang berada pada object kita sebut dengan method

nah sekali lagi inget inget temen temen 
variable yang ada didalam object itu disebut dengan properti 

dan function yang berada didalam object itu kita sebut dengan method 



atau gima kalo kita lihat langsung saja implementasi codingannya ya 

sekarang didalam scriptnya misalkan kita akan membuat object

ya jadi cara membuat object itu simple kita tinggal bikin sebuah variable yang namanya mahasiswa begini 

nah kalian bisa tulis kurung kurawal buka dan kurung kurawal tutup 

*/

// var mhs = {

// }

/* nah dengan kalian menuliskan begini ini artinya kita membuat object kosong gitu ya 


jadi ini adalah object kosong yang kalo kalian save filenya dan buka diconsole 

lalu kita panggil mhs diconsolenya 
kalian bisa lihat bahwa sekarang ada object kosong 

isi dari objectnya properti dan methodnya kita bisa saja tulis langsung didalam console 

jadi kita bisa tulis lewat codiinganya disini dan bisa juga lewat console 

misalnya kalo saya tulis begini didalam consolenya 
mhs.nama = 'muiz';

maka ini artinya saya akan membuat properti baru yang namanya nama yang diisi dengan muiz untuk object mhs

kalo saya pencet enter 
otomatis akan dibuatkan properti nama 

kalo saya panggil saya tinggal tulis mhs titik nama
mhs.nama

kalo saya pencet enter maka muncul ya muiz

kalo saya buat lagi misalkan mhs.umur yang saya isi dengan 18
mhs.umur = 18

kalo saya pencet enter sekarang ada dua 
kalo saya penggil mhs.umur maka muncul 18 begitu ya

walaupun ini propertinya cuma sementara 
kalo saya refresh akan kosong lagi

kalo saya tulis mhs.nama
maka dia kosong karena belum bikin 

tapi  kita juga bisa buat langsung dicodingannya 

kalo dicodingannya dia permanent 
jadi kalo saya tulis didalam mhs nama : lalu string muiz begini 

*/

// var mhs = {
//     nama : 'muiz',
//     umur : 18,
//     ips : [2.30, 3.40, 5.70, 6.80, 7.70]
// }

/* umur saya isi dengan intejer 18 
lalu misalnya tadi ya ips yang isinya array 

dan bahkan saya juga bisa bikin object didalam object 

caranya saya bikin lagi kurung kurawal didalam sini 



*/

// var mhs = {
//     nama : 'muiz',
//     umur : 18,
//     ips : [2.3, 3.4, 5.7, 6.8, 7.7],
//     alamat : {
//         jalan : 'Jln.patimura no 123',
//         kota : 'banyuwangi',
//         provinsi : 'jawa timur'
//     }
// }

/* lalu misalnya saya bikin jalan patimura misalnya 
kota banyuwangi dan provinsi jawa timur 

nah begini misalnya kalo kita save lalu kenbali keconsole 

kalo misalkan saya ingin mengakses nama saya 
kalian cukup tulis objectnya mhs lalu dengan menggunakan titik kalian tulis nama

mhs.nama
kalo mau umur gimana ?
mhs.umur

atau kalian juga bisa menggunakan kurung siku 
nah ini mirip dengan assiciative array pada php

misalnya gini saya tulis mhs lalu dengan kurung siku 
ya misalkan tulis nama begini 

mhs["nama"];
nanti hasilnya sama saja 

ya jadi kalian bisa pakai notasi titik atau pakai kurung siku 

kalo saya tulis mhs.ips maka akan menampilkan seluruh isi array dari variable ips 

tapi kalo saya ingin mengambil ips yang nilainya 7.7

kalian panggil beserta indexnya inget  ya index array mulai dari 0 
kalo saya mau yang 7.7 saya bisa tulis begini 

panggil objectnya mhs lalu  saya panggil propertinya ips index ke 4
mhs.ips[4];

maka  yang tampil 7.7

sama seperti saya mau menampilkan kota banyuwangi
ya alamat dari mahasiswa nya 

saya ingin memunculkan kotanya saja 

kan kalo saya tulis mhs.alamat akan tampil semuanya ya 

tapi kalo saya ingin kotanya saja saya bisa tulis begini 

mhs.alamat.kota 
maka akan tampil banyuwangi

atau dengan menggunakan notasi kurung siku 
kalian bisa tulis 

mhs['alamat']['jalan'];

ya kalo ingin menampilkan jalan 

kalo digabung bagaimana?

misalkan 
mhs.alamat['provinsi']

nah sama saja ya jadi bisa kalian gabungkan

oke jadi itu penggunaan sederhana dari object 
kita tadi sudah coba bikin object kita sudah coba menampilkan 

silahkan kalian coba buat sendiri object lalu isi properti dan methodnya untuk object yang kalian buat dan coba tampikan satu persatu supaya kalian bisa lebih paham lagi 

oke jadi itu ya penjelasan singkat mengenai object pada javascript 

nah dimateri selanjutnya kita akan belajar lebih detil lagi mengenai object ini 

kita akan pelajari 

1.membuat object
    ya ternyata ada banyak cara untuk membuat object 
    yang kita buat tadi disebut dengan object literal dan ada cara lagi menggunakan constructor 

2.memanggil / mengeksekusi object 
    nah kita juga akan belajar bagaimana memanggil atau mengeksekusi object selain cara yang kita coba tadi 

3.keyword this
    nanti juga kita akan belajar mengenai keyword this 

4.prototype
    nanti kita juga akan belajar mengenai prototype pada object 

5.pewarisan / inheritance 
    dan pewarisan atau inheritance pada javascript 


oke jadi mungkita itu saja ya pengantar mengenai mateir object ini 

kita ketemu lagi dimateri yang akan datang 

dan seperti biasa jangan lupa titik koma ; */
