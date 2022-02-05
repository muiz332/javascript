/*pengulangan: while pada javscript 

kali ini kita akan lanjutkan pemebelajaran kita mengenai javascript 
dimateri kali ini kita akan membahas mengenai pengulangan khsusunya mengenai keyword while 

temen temen masih inget gak kenapa kita harus menggunakan pengulangan? 

dimateri sebelumnya sudah kita bahas bahwa dengan melakukan pengulangan kita dapat melakukan sebuah hal yang sama berulang kali 

contoh sederhananya seperti ini 
kalo misalkan kalian ingin menghasilkan hal yang sederhanan seperti ini saja 

ini hasil diconsole

hello world       script.js:1
hello world       script.js:2
hello world       script.js:3
hello world       script.js:4
hello world       script.js:5
hello world       script.js:6
hello world       script.js:7
hello world       script.js:8
hello world       script.js:9
hello world       script.js:10

jadi kalian ingin mencetak tulisan hello world kedalam console sebannya 10 kali seperti ini 

nah sebetulnya untuk melakukan hal ini simple saja 

kita cukup menuliskan console.log lalu tulis hello world sebannya 10 kali didalam script kita
console.log('hello world);
console.log('hello world);
console.log('hello world);
console.log('hello world);
console.log('hello world);
console.log('hello world);
console.log('hello world);
console.log('hello world);
console.log('hello world);
console.log('hello world);



coba kita lihat contohnya deh 

pergi ke halaman html
*/


/*sebetulnya kalian tidak perlu melakukan pengulangan cukup menuliskan console.log lalu tulis didalamnya hello world sebannya 10 kali */
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

/*seperti ini ya tidak ada masalah 

nah sekarang gimana kalo misalkan kalian inginnya gak 10 baris? misalkan 100 baris tinggal copy paste saja 

ya nanti semakin banyak akan semakin merepotkan 

atau gini deh gimana kalo saya ingin ganti tulisan worldnya itu dengan nama saya misalnya jadi hello muiz 
atau mungkin kalian bisa jawab copy paste saja 

oke tidak apa apa kalian copy paste saja sebannya yang kalian inginkan 

atau mau gampang bisa pakek fasilitas find and replace ya tinggal ganti tulisan world jadi muiz tinggal pilih replace all selesai
gampang saja ya tidak perlu pakek pengulangan sepertinnya 

nah tapi gimana kalo begini sekarnag pertanyaannya saya ingin menuliskan hello world 
console.log('hello world 1x');
console.log('hello world 2x');
console.log('hello world 3x');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');


seperti ini 
nah ini kalo misalkan saya ingin menuliskan sampai 100 kali atau bahkan 1000x mungkin disini mulai merepotkan ya

karena disini kita tidak bisa copy paste harus diganti angkanya satu persatu 
nah disini lah sepertinya kita butuh menggunakan fitur pengulangan didalam progam kita 

ya kita lihat gimana caranya kita menuliskan pengulangan khususnya while menggunakan javascript 


baik jadi untuk menggunakan while itu kalian cukup menuliskan keywordnya adalah while 
lalu sintaxnya begini

while(kondisi) {
    aksi 
}

kalian tulis while lalu dalam kurung setelah itu kurung kurawal buka kurung kurawal tutup dan didalamnya tulis aksinya 

ya ini bacanya gini 
selama kondisi yang ada didalam kurung itu bernilai true gituya 
maka lakukan aksi yang ada didalam block kurung kurawalnya 

begitu ya 

aksinya bisa lebih dari satu baris ini contohnya hanya satu baris saja ya 

jadi selama kondisi yang ada didalam kurung bernilai true while kondisinya true maka lakukan aksi yang ada didalamnya 

kalo misalkan kondisinya bernilai false maka aksi tidak akan dilakukan 

ya contohnya gini 

kita lihat kalo misalkan kita tuliskan begini saja 
while(true) {
    console.log('hello world');
}

while dalam kurung langsung saya tuliskan true oke lalu saya tulis console.log 

nah coba temen temen lihat ini kira kira saya menuliskan console.log nya berapa kali 
kan tadi aturannya selama kondisi yang ada didalam kurung bernilai true maka lakukan aksi 

aksinya mencetak hello world didalam console 

coba kita lihat hasilnya ya 


saya tulis disini 
*/
// while(true) {
//     console.log('hello world'); jangan dicoba
// }


/*while ya selama kondisinya bernilai true 
true ini nilai boolean yang saya tulis langsung 
ini contoh saja harusnya nanti kalian tidak menulis kayak gini 

selama nilainya true maka tulis hello world didalam console 

ya kita lihat 
ini kalo saya jalankan saya buka browser 
lalu saya refresh 

lihat ni kalian bisa lihat sekarang browsernya melakukan loading terus menerus dan pengulangannya tidak akan pernah berhenti 

kalo kalian lihat diconsole disamping hello world angkanya nambah terus itu artinya hello worldnya sudah dicetak sebanyak 1000 kali dan kalo kalian tunggu nanti nambah terus itu angkanya 

nah ini ati ati ya 
ini artinya browser kalian sedang berada didalam infinity loop atau pengulangan tanpa batas 

untuk menghilangkannya kalian tinggal close saja browsernya seperti itu ya 

jadi ati ati kalo kalian menuliskannya seperti ini 
while(true) {
    console.log('hello world');
}

artinya kalian akan melakukan sesuatu yang dinamakan dengan infinite loop / looping forever 

jadi loopingnya tidak akan pernah berakhir begitu ya 


begitu pula ketika saya tulis didalam whilenya false 

*/
// while(false) {
//     console.log('hello world');
// }

/* begini ini akan mengecheck selama kondisinya bernilai true jalankan aksinya tapi karena kondisinya bernilai false maka aksinya tidak akan pernah dijalankan 

kita lihat lagi buka dibrowser kita lihat consolenya 


tidak muncul apa apa didalam console karena console.lognya tadi tidak akan pernah dijalankan 

paham ya jadi ati ati ketika kalian menggunakan while ini 
mungkin saja kalian terjebak kedalam infinity loop tadi 


sekarang gimana dong caranya supaya kalian tidak masuk ke infinity loop 
kalian tidak melakukan looping forever ini 

artinya loopingnya harus berhenti 

nah berhentinya sampai kapan? ada dua cara 

yang pertama loopingnya bisa dihentikan oleh user 

jadi yang punya kendali untuk memberhentikan adalah user 

nah dengan javascript kita bisa lakukan ini 

contoh sederhana gini
coba kalian lihar source code ini

var ulang = true;
while(ulang) {
    console.log('hello world');

    var ulang = confirm('lagi?');
}

kalian bisa lihat kita punya progam sederhana dimana diawal kita punya sebuah variable namanya ulang 

ulang saya set dengan nilai boolean true 
terus kalo saya masukkan kedalam pengulangan while ulang ini artinya selama ulangnya ini bernilai true 

inget ya ini truthy atau falsy value bisa kita masukkan kedalam whilenya 

selama nilainya true tuliskan hello world kelayar 
setelah ini ulang nilainya akan diset lagi ya

menggunakan sebuah dialog confirm inget ya kalo confirm itu ada dua tombol oke dan cencel kalo oke ditekan menghasilkan nilai true
kalo cencel ditekan menghasilkan nilai false masih inget ya 

jadi ini selama user menekan tombol oke begitu ditanya lagi maka looppingnya akan berjalan terus tapi ketika user menekan tombol cencel selesai keluar dari loopingnya 

kita coba 



yang pertamnya kalian harus punya dulu variable awalnya 
variablenya boleh apa saja saya tambahkan ulang yang saya set dengan true

kenapa saya set true supaya pengulangan pertama dia masuk dulu ke while ya 
*/

// var ulang = true;
// while(ulang) {
//     console.log('hello world');
    
//     var ulang = confirm('lagi?');
// }

/*while ulang === true kalian bisa tulis begini atau ambil saja nilai truthy dan falsy nya sama saja ya

jika ulang bernilai true maka lakukan tulisan console.log('hello world');

ati ati ini juga jangan berhenti disini ya karena nanti kalo kalian tulis ini masuk lagi kedalam infinity loop atau looping forever 

kalian tuliskan ulang diisi dengan confirm('lagi?');  misalnya begini ya


ini kalo kita jalankan kembali kebrowsernya kita refresh buka console

nah kalian lihat pertama kali helo world sudah dicetak 1 kali karena nilai whilenya true masuk dulu cetak hello worldnya satu kali baru ditanya mau lagi gak 

kalo saya pencat oke hello worldnya bertambah jadi dua 

jadi dua kali hello world dilakukan 
saya pencet oke lagi nambah lagi ya terus bertambah sampai saya tekan cencel 

kalo cencel berhenti dia sampai 4 kali 
paham gak

ya jadi aturannya begitu jika kondisinya bernilai true lakukan aksi didalamnya ya

itu yang pertama kita bisa menghentikan loop atau while ini berdasarkan aksi dari user 





nah yang kedua kita bisa hentikan menggunakan progam itu sendiri 
jadi kita yang tentukan mau loopingnya berapa kali 10 kali 20 kali 100 kali 1jt kali itu kita yang tentukan 

kita lihat contohnya 
untuk menuliskan while tersebut aturannya harus begini

nilai awal
while(kondisi terminasi) {
    aksi

    increment / decrement 
}


jadi kita harus punya dulu nilai awal 
ada tiga kompunen penting, kita harus punya nilai awal , kita harus punya kondisi terminasi kapan loopnya akan berhenti lalu harus ada increment / decrement 

nah ini nanti yang menyebabkan loopnya bisa berhenti 

oke kita lihat contohnya 
jadi seklai lagi niai awal harus ada sebelum loopnya berjalan 

lalu didalam loopnya ada kondisi terminasi dimana biasanya mengecheck keadaan dari nilai awal 
lalu lakukan aksi 
diakhir aksinya jangan lupa untuk melakukan increment atau decrement 
increment itu penambahan decrement itu pengurangan terhadap nilai awal 

ya kita lihat 

var nilaiAwal = 1;
while(nilaiAwal <= 5) {
    console.log('hello world');

    nilaiAwal++; 
}

jadi kita punya nilai awal yang kita isi dengan angka 1 diawal ya 
lalu kita buka loopnya

while(nilai awal lebih kecil sama dengan 5) lalu lakukan console.log dan lihat diakhirnya itu  nilaiAwal++ itu artinya nilai awal ditambah 1 tiap pengulangannya oke kita coba ya 

kita kembali ke code kita jadi yang pertama kita punya nilai awalnya dulu kita isi dengan 1 

*/
// var nilaiAwal = 1;
// while(nilaiAwal <= 5) {
//     console.log('hello world');

//     nilaiAwal = nilaiAwal + 1; nilaiAwal += 1;
// }

/*lalu while nilaiAwal lebih kecil sama dengan lima 
nah kenapa begini 
nah ini nantinya ini disebut dengan kondisi terminasi whilenya atau loopnya kan berhenti ketika nilai awalnya itu lebih besar dari 5 

selama masih lebih kecil sama dengan lima maka apapun yang ada didalam whilenya akan dikerjakan 

kita tulis console.log hello world seperti ini 

ya lalu jangan lupa kita kasih nilaiAwal ya kalian bisa tulis 
nilaiAwal = nilaiAwal + 1; 

atau sintax kerennya cukup tulis nilaiAwal++; oke

jadi ini artinya pertama nilai awalnya 1 , nah terus dia masuk kewhilenya apakah 1 lebih kecil sama dengan lima? true ya 
baru dia masuk ke console.log cetak sekali

nilaiAwal = nilaiAwal + 1; bisa diartikan juga gini nilaiAwal = nilaiAwal + 1;
                                                    nilaiAwal  =    1     + 1
                                                    nilaiAwal  = 2

jadi saya masukkan nilaiAwal yang berisi angka 1 lalu ditambah 1 jadi 2 kemudian saya tugaskan angka 2 berada didalam variable nilaiAwal menggantikan angka 1 tadi

atau bisa juga seperti ini nilaiAwal += 1;

lalu nilaiAwal nya ditambah sekarang nilai awalnya jadi 2 

kembali lagi ke whilenya 

apakah 2 lebih kecil sama dengan 5 true masuk lagi 

ini akan berakhir ketika nilai awalnya itu berapa? lima atau enam 
kalo lima kira kira  masih masuk loopnya? 

apakah lima lebih kecil sama dengan lima? true ya

berarti ini masih dikerjakan 

setelah itu lima tambah 1 enam dicheck lagi apakah enam lebih kecil sama dengan lima? false 
baru sekarang keluar dari loopnya maka 


maka console.lognya akan dicetak sebanyak lima kali 
ya kita lihat kembali ke browser 
saya refresh 
nah ya sebanyak lima kali 

kalo sudah begini ini loopnya sudah bener 

kalo kalian ganti angka 5 dengan 10 maka hello worldnya akan dicetak dengan angka 10 kalo kalian ganti sebanyak 1000 jadi 1000 

paham ya 


ya jadi ini rumusnya menggunakan while 
jika ingin whilenya berhenti oleh progam kalian sendiri bukan oleh user ya 

nilai awal
kondisi terminasi
increment (penambahan terhadap nilai awal) atau
decrement (pengurangan terhadap nilai awal)

oke gimana sampai disini paham ya 

nah sekarang gimana kalo misalkan kita coba membuat contoh kita tadi diawal ya 

hello world 1x
hello world 2x dan seterusnya 

saya ingin menampilkan hello world sebanyak 10 kali 


*/

// var nilaiAwal = 1;
// while(nilaiAwal <= 10) {
    
//     console.log('hello world')

//     nilaiAwal += 1;
// }

/* jadi nilaiAwalnya 1 nah lalu selama nilai awalnya lebih kecil sama dengan 10 ya karena kita pengen 10 kali 
tampilkan hello world ke console 

nah kalo begini kan tulisannya hello world saja ya kalo pengen ada 1x 2x 3x itu kita tidak bisa kita tuliskan begini 
console.log('hello world 1x')

karena nanti kalo saya nulis begini semuanya 1x ya dicetak sebanyak 10 kali 

nah kita harus cari cara untuk mengganti angka 1 ini supaya tiap loopingnya itu nambah 1 

kira kira gimana? coba kalian check yang setiap loopingnya nambah 1 nilainya itu yang mana? nilaiAwal ya nilaiAwal tadinya 1 setiap looping dia nambah 1 

nah kenapa kita tidak pakai saja untuk disimpan didalam stringnya menggantikan angka 1 

kalian harus keluarkan nilaiAwal ini agar tercetak sebagai variable 
masih inget menggunakan operator konkatenasi atau penjumlahan dua atau lebih string 

jadi caranya kita 
hello world + isi dari variable nilaiawal lalu + dengan 'x'

jadi digabung 
hello world spasi angka atau nilaiAwal x gitu ya atau kali 



*/

// var nilaiAwal = 1;
// while(nilaiAwal <= 10) {
    
//     console.log('hello world ' + nilaiAwal + 'x');

//     nilaiAwal += 1;
// }


/* sekarang kita lihat save lihat hasilnya refresh 

nah betul ya 1x 2x 3x 4x 

kalo mau 100x tinggal tambahin saja angka 10 jadi 100

maka dia jadi 100 kali 

paham ya itu jadi kalo misalkan 
kalian ingin menggunakan while 

atau gini deh supaya lebih paham lagi gimana kalo kita lakukan sebuah latihan 

dan latihan ini akan kita modifikasi terus seiring dengan kita belajar control flow ini ya 
nanti while for percabangan 

nanti kita lanjutkan untuk memodifikasi latihan ini 


jadi ceritanya gini kita akan membuat sebuah aplikasi yang sederhana sekali ya

aplikasinya apa jadi kita ibaratkan saja kita adalah seorang juragan angkot 

oke jadi ceritannya kalian punya banyak angkot ya 

jadi ceritanya gini kalian adalah seorang juragan angkot yang ingin membuat sebuah aplikasi untuk angkot angkot kalian 
ya ceritannya kalian punya 10 buah angkot ya

jadi sekarang saya minta untuk membuat sebuah file javascript yang namanya angkot1.js 

yang nanti simple saja untuk latihan pertama kita 

saya ingin kalian menampilkan pesan seperti ini 
Angkot No. 1 beroprasi dengan baik.
Angkot No. 2 beroprasi dengan baik.
Angkot No. 2 beroprasi dengan baik. 

sampai 10 

ya jadi ceritanya ke 10 angko kalian itu sekarang sedang berjalan denagn baik 

silahkan lihat lagi contoh yang kita berikan sebelumnya ya 
modifikasi saja supaya sekarang tampilanya persis seperti itu hurus besar hurus kecil titik spasi harus sama 

gitu ya ini latihan pertama kita 
nanti akan saya bahas jawabanya dimateri selanjutnya 

jadi sekarang sampai disini dulu materinya 

oke sampai ketemu lagi dimateri berikutnya dan satu lagi jangan lupa titik koma ; */


var nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log('hello world ' + nilaiAwal + 'x');

    nilaiAwal++;
}