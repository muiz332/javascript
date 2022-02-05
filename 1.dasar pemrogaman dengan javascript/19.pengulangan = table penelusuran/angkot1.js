/*pengulangan: tabel penelusuran 

kita lanjutkan ya pembelajaran kita mengenai pengulangan 
tapi sebelumnya kita akan membahas dulu mengenai satu topik yang namanya tabel penelusuran \

oke jadi tabel penelusuran ini adalah sebuah tools yang cukup panting agar kita dapat lebih memahami lagi cara kerja progam kita seperti apa khusunya untuk yang baru belajar mengenai pemrogaman 


sebelum masuk kesini gimana kalo kita lihat dulu latihan kita dimateri sebelumnya ya
jadi kalo misalkan kalian masih inget dimateri sebelumnya kita melakukan sebuah latihan membuat aplikasi sederhana mengenai pengelolaan informasi angkot 

sekarang saya akn tunjukan jawaban dari latihan kita sebelumnya
kalian cocokan dengan latihan yang sudah kalian buat 

oke jadi kalo kalian inget kalian disuruh membuat file dengan naman angkot1.js ya
dimana kita mengelola 10 buah angkot ini dengan menampilkan unformasi mgenai apakan angkot ini beroprasi atau tidak 

ya yang ingin saya tampilkan hanya sederhana seperti ini saja ya 
Angkot No. 1 beroprasi dengan baik.
Angkot No. 2 beroprasi dengan baik.
Angkot No. 3 beroprasi dengan baik. x 10

ya kita punya 10 angkot tampilkan semuanya 

ya kita lihat dulu jawabannya seperti apa 
oke saya akan buat dari awal kalian cocokan dengan yang kalian buat 

pergi kehalaman html



*/


/* lalu kita diminta untuk menampilkan 10 angkot yang kita punya jadi kalian bisa buat dulu variable

inget ya while itu ada 3   komponen utama 
ada nilai awal 
ada kondisi terminasi
dan ada increment atau decrement 

ya kita buat dulu nilai awalnya 
ya ini variablenya boleh apa saja ya 

kita buat nilaiAwal yang kita isi dengan angka 1 ya
karena nomor angkotnya dimulai dari nomor 1 

*/

// var nilaiAwal = 1;
// while(nilaiAwal <= 10) {
//     console.log('Angkot No. ' + nilaiAwal + ' beroprasi dengan baik.')


// nilaiAwal++;
// }

/* lalu buka keyword whilenya dimana kondisinya adalah selama nilaiAwalnya itu lebih kecil sama dengan 10 

dimana dia nanti mengecheck apakah nilaiAwal itu lebih kecil dari 10 atau tidak 

ya lalu aksi yang dilakukan adalah mencetak kelayat console.log lalu pesannya adalah Angkot No. lalu kita gabungkan dengan nilaiAwal kita gabungkan lagi dengan tulisan beroprasi dengna baik 

jadi ini angkot no titik spasi tulis nilaiAwalnya supaya nanti berurutan 1 2 3 dan seterusnya lalu gabungkan lagi dengan mnggunakan operator penggabung string + ya atau operator konkatenasi gabung dengan spasi beroprasi dengan baik lau titik oke 


dan diakhir kita increment atau kita tambahkan nilaiAwalnya kalian bisa tulis nilaiAwal = nilaiAwal + 1;
atau apa? nilaiAwal++;

saya lebih sukan menuliskan nilaiAwalnya itu sebelah kiri tidak menjorok kedalam seperti console.log karena untuk membedakan bahwa nilaiAwal ini adalah bagian dari while 

sudah seperti ini ya simpel seperti ini 
kita lihat hasilnya ya 

kita kebrowser kita jalankan 
kalian lihat 

tulisannya angkot no 1 sampai angkot no 10 beroprasi dengan baik ya 

jadi ini jawabannya dimana kita sudah membuat pesan ke sipengelola angkotnya atau ke juragan angkotnya bahwa semua angkotnya itu berjalan dengan baik 

ya gimana kira kira sama gak dengan punya kalian 



nah sekarang kita coba telusuri while yang usah kita buat 

kita telusuri dulu gimana cara kerja dari while yang sudah kita buat ini 

ya kita lihat sintaxnya lagi 
var nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log('....

nilaiAwal++;
}

kita punya nilaiAwal sama dengan 1 
while nilaiAwal lebih kecil dari 10 tulisan pesannya menggunakan console,log 
dan nilaiAwalnya kita increment ya 


ya kita telusuri dari awal 

yang pertama kita buat dulu sebuah variable awalnya ya 
variable nilaiAwal diisi dengan angka 1 

jadi ini sebelum mulai loop ya ini kita tentukan dulu nilaiAwalnya berapa gitu ya

lalu selanjutnya kita masuk ke sini kita check kondisinya
nilaiAwal <= 10 ?

apakah nilaiawal lebih kecil sama dengan 10 
nanti kita check nilainya true atau false 

lalu selanjutnya kita check kalo misalkan benilai true maka lakukan aksi 
aksinya adalah mencetak string dengan menggunakan console.log 

ini akan kita lakukan ketika kondisi yang tadi itu bernilai true 

selanjutnya kita lakukan increment atau penambahan nilai diakhir dari tiap tiap loopnya 
nilaiawal++;

dan kalo ini sudah selesai kita kembali mengulang kita check lagi sekarang apakah nilai yang sudah ditambahkan tadi lebih kecil dari 10 atau tidak gitu ya nanti sampai suatu saat nilainya lebih dari 10 baru dia keluar dari loopnya 

ya jadi ini kita akan ulangi terus sampai kondisinya bernilai false baru keluar dari loopnya 
paham ya 
begitu 




nah sekarang sebelum kita lanjutkan untuk menelusuri lebih lanjut progam kita kita perbaiki dulu supaya lebih baik lagi kita perbaikinya gini 

dari pada kita menggunakan variable nilaiAwal lebih baik kita gunakan nama variable yang sesuai dengan kasus kita yaitu angkot ya 

jadi sekarang gini saya bisa ganti nilaiAwalnya dengan misalnya noAngkot begini 

ya kan kalian tau tadi setiap angkot itu punya nomornya sendiri ya 1 sampai 10

nah terus ini untuk nilaiAwal angkotnya 

tapi saya juga mau punya sebuah variable yang namanya jmlAngkot jadi barang kali kedepannya angkotnya nambah kita hanya perlu mengganti nilai dari variable jumlah angkot ini 

kit isi dengan 10 
ya jadi karena angkotnya ada 10 kita isi jumlah angkotnya dengan 10 

selanjutnya kita sudah punya ini maka kita bisa perbaiki whilenya sekarang 

nilaiAwal kita ganti dengan noAngkot ya begitu pula dengan yang ada didalam console.log 
dan incrementnya 


selanjutnya yang angka 10 ini saya bisa ganti dengan jmlAngkot begitu

jadi kalo kedepannya angkotnya nambah jadi 20 whilenya itu masih tetap bisa kita gunakan 

paham ya jadi ini sudah sedikit kita perbaiki supaya variablenya lebih masuk akal 




*/
// var noAngkot = 1;
// var jlmAngkot = 10;

// while(noAngkot <= jmlAngkot) {
//     console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.')


// noAngkot++;
// }


/* ya kalo saya jalankan saya refresh hasilnya sama persis


nah sekarang kita baru akan melakukan penelusuran menggunakan tabel penelusuran ya

atau ada yang bilanng trace tabel atau ini adalah dru-run-test 

dimana kita nanti bisa mengetahui perubahan dari variable yang ada didalam pengulangan kita 

ya kita lihat cara menelusuri menggunakan tabel bagaimana 

kita liaht ya ini jadi sintax kita atau progam sederhana kita 

var jmlAngkot = 10;
var noAngkot = 1;
while(noAngkot <= jmlAngkot) {
    console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.')


noAngkot++;
}

nah untuk membuat tabel penelusuran kalian cukup tuliskan nama nama variable yang nilainya ada kemungkinan berubah pada saat pengulangannya 

ya contohnya ini

saya punya variable noAngkot lalu saya juga masukkna kondisi terminasinya 
ya disini saya akan masukkan apakah noAngkot lebih kecil sama dengan jmlAngkot ? ini isinya true atau false 

dan yang trakhir output dari tiap pengulangannya apa oke 

ini tabelnya nah sekarang kita check satu persatu ya kita mulai dari atas kita tau jumlah angkot sama dengan 10 noAngkot sama dengan 1

berarti nilai awalnya noAngkot adalah 1
lalu kita check apakah 1 lebih kecil sama dengan 10? karena jlmAngkot itu sama dengan 10 ya true atau false 

1 lebih kecil sama dengan 10? hasilnya true ya 

kalo true artinya masuk ke dalam whilenya dia akan mengerjakan console.log ini 
maka akan tertulis Angkot No 1 lihat saja di tabel noAngkot 
jadi tampilnya 
Angkot No. 1 beroprasi dengan baik 

setelah itu masuk kebaris yang increment 
noAngkotnya ditambah 1 

sampai kesini kita kembali lagi ke whilenya 



noAngkot          noAngkot <= jlmAngkot?                Output 
1                          true                     Angkot No. 1 beroprasi dengan baik.
2                          true                     Angkot No. 2 beroprasi dengan baik.
3                          true                     Angkot No. 3 beroprasi dengan baik.
....                       ...                      .................
10                         true                     Angkot No. 10 beroprasi dengan baik.
11                         false                    keluar dari loop




sekarang noAngkotnya 2 
apakah 2 lebih kecil sama dengan 10? true ya maka yang ditampilkan adalah Angkot No. 2 beroprasi dengan baik.

selanjutnya ditambah lagi atau diincrement lagi jadi 2 + 1 = 3 

apakah 3 lebih kecil sama dengan 10? true outputnya Angkot No. 3 begitu ya

ini dilakukan berulang ulang sampai noAngkotnya berapa? noAngkotnya 10 nah ini dilakukan pengecheckkan 

apakah 10 lebih kecil sama dengan 10? true atau false hasilnya true ya maka muncul Angkot No. 10 beroprasi dengan baik.

paham ya 

nah sampai sini kira kira pengulangannya berakhir atau belum jawabannya belum ya karena masih masuk kedalam pengulangan sekarang ketika kita increment noAngkotnya jadi 11 ini masih dilakukan pengulangan 1 kali lagi 

apakah 11 lebih kecil sama dengan 10? nah baru ini hasilnya false begitu false artinya apa?

keluar dari loopnya 

paham ya

jadi sebetulnya pengulangannya dilakukan 11 kali pengulangan yang ke 11 itu menghantikan loopnya 

jadi inilah gunanya kita menggunakan tabel penelusuran 

cara bikinnya gampang tingal tulis saja variable variable apa saja yang ada didalam loopnya yang kemungkinan isinya berubah setiap loopnya lalu tuliskan juga kondisi terminasinya ya pengecheckannya true atau false

ya jadi nanti akan kelihatan kapan dia masuk kepengulangan kapan dia keluar dari pengulangan 

sekali lagi tabel penelusuran ini sangat berguna apa lagi untuk yang masih belajar mengenai pemrogaman 


baik jadi mungkin itu ya sampai disini dulu materi kali ini 

simple saja mengenai tabel penelusuran dimateri selanjutkan kita akan mempelajari type pengulangan yang lain yaitu for ya 

nanti kita lihat apa perbedaanya dengan while dan bagaimana cara penggunaan for 

kita ketemu lagi dimateri berikutnya dan satu lagi jangan lupa titik koma ; */



var noNama = 40;
var berakhirDiAngka = 10

while(noNama >= berakhirDiAngka) {

    console.log('muiz ' + noNama)

noNama -= 2;
}

alert('selesai');