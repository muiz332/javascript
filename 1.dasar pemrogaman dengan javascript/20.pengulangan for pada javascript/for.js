/*pengulangan: for pada javascript 

kali ini kita akan melanjutkan pembelajaran kita mengenai pengulangan tapi kali ini kita pelajari adalah mengenai for ya

for adalah sebuah keyword lain selain while yang dapat kita gunakan untuk melakukan pengulangan ya

sebetulnya kalo kalian sudah paham mengenai cara kerja dari while for ini sebetulnya sama saja ya gak jauh berbeda

ya tapi lihat ya perilaku dari for seperti apa 

sebelum masuk ke for ini kita lihat dulu pembelajaran kita mengenai while dari materi sebelumnya 

kita lihat ya

var nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log('hello world');

nilaiAwal += 1;
}

nah sintax ini adalah sintax sederhana dari sebuah pengulangan dengan menggunakan while 

ya kalian bisa lihat dibagian paling atas itu adalah penentuan variable awal dimana kita harus mengentukan nilai awal sebelum kita masuk ke dalam loopnya atau pengulanganya 

nah setelah itu kita gunakan keyword while dengan menggunakan kurung kita simpan disitu kondisi terminasinya 
ya atau sampai kapan loopnya akan berjalan 

dan didalamnya adalah aksi yang akan dikerjakan dan diakhiri dengan increment atau decrement 

ya jadi sekali lagi ada tiga komponen utama 
nilai awal 
kondisi terminasi 
increment atau decrement 

ini untuk membuat sebuah while 

ya dengan while ini kalo kalian lihat sintax ini akan menuliskan hello world sebanya 10 kali 

karena kita lakukan pengecheckannya adalah nilaiAwal lebih kecil sama dengan 10 

paham ya 

kalo misalkan kalian masih bingung silahkan check saja dua materi sebelum ini mengenai while 

nah sekarang kita lihat bagaimana sintax dari for 

ya untuk menuliskan for itu keywordnya tentu saja adalah for ya 

for (          ;            ;          ) {

}

lalu for ini punya juga kurung buka dan kurung tutup dan didalamnya kalo kalian lihat ada dua buah titik koma karena didalamnya kita akan menyimpan tiga bagian 

bagiannya apa kita lihat nanti ya 
 
nah lalu sama dengan while kita batasi dengan kurung kurawal buka dan kurung kurawal tutup ya ini sebagai block statement untuk mengerjakan aksi didalam pengulangannya 

ya sekarang kita lihat aksinya bisa apa saja 
ya dalam hal ini sama saja dengan while kita lakukan penulisan hello world kedalam console

nah sekarang kita lihat apa saja yang ada didalam kurung for ini 

for( var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
    console.log('hello world);
}

yang pertama adalahh penentuan nilai awal 
yang kedua penulisan kondisi terminasi 
dan yang ketiga harusnya kalian sudah bisa nebak adalah increment atau decrement 

ya jadi kalo kalian lihat ini sama sama dengan while tapi lebih rapi lagi lebih ringkas karena ditulis dalam satu baris 
tida seperti while yang tercecer 

yang satu ada diluar while penentuan nilai awal lalu didalam kurungnya kondisi terminasinya dan diakhir dari loopnya itu increment atau decrement 

dengan menggunakan for ini dalam satu baris semuannya ada paham ya

jadi kita cukup menuliskan satu baris seperti ini 
ketiga kondisi tadi sudah dituliskan 

ya jadi ini sebetulnya lebih ringkas 

gimana kalo kita coba deh 

pergi ke halaman html 



*/

// for( var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//     console.log('hello world ' + nilaiAwal + 'x');
// }


/* jadi saya tulis for didalamnya kita bikin nilaiAwalnya 

sekali lagi nama variablenya boleh apa saja mungkin kalian nanti akan sering lihat nilaiAwal ini sebagai variable i ya atau index ya tapi itu nanti lah entar 
ini biar gampang dulu

nilaiAwal kita isi dengan 1 
lalu kita ingin mengulang penulisan hello worldnya sebanyak 10 kali  

maka nilaiAwal lebih kecil sama dengan 10 ya coba nanti kalian check kalo gak pakai sama dengan apa yang terjadi 

lalu yang terakhir increment atau decrement 
nilaiAwal++
gitu ya

lalu kita kasih kurung kurawal buka kurung kurawal tutup sebagai block dari pengulangannya 

kita tulis console.log lalu hello world gini ya 

kita lihat kita jalankan 
kalian bisa lihat bahwa hello worldnya tercetak sebanya 10 kali 

kalo ingin dibedakan hello world 1x hello world 2x 

sama saja ya kita gabungkan dengan nilaiAwal digabungkan lagi dengan string x 

jadi hasilnya 
hello world 1x 
hello world 2x dan seterusnya 

paham ya jadi lebih ringkas lagi 
penggunaanya sama 

nilaiAwal 
kondisi terminasi 
increment atau decrement 

supaya lebih paham lagi gimana kalo kita lanjutkan latihan kita 

ya masih inget aplikasi juragan angkot kita 
ya jadi kita lanjutkan aplikasi ini sekarang saya tambahin kasusnya 


jadi kemaring kalo kalian masih inget diangkot1.js itu ceritanya kita punya 10 angkot yang apliaksinya itu menampilkan bahwa semua angkotnya it beroprasi dengan baik 

Angkot No. 1 beroprasi dengan baik.
Angkot No. 2 beroprasi dengan baik.
Angkot No. 3 beroprasi dengan baik.

dan seterusnya sampai angkot ke 10 

sekarang diangkot2.js ceritannya ada 4 angkot kalian yang rusak 
angkot 1 sampai angkot 6 itu beroprasi dengan baik

tapi angkot 7 sampai 10 itu sekarang kondisinya sedang rusak jadi saya ingin kalian buat sebuah file namanya angkot2.js ya yang menampilkan hasilnya seperti ini 

Angkot No. 1 beroprasi dengan baik.
Angkot No. 2 beroprasi dengan baik.
Angkot No. 3 beroprasi dengan baik.
Angkot No. 4 beroprasi dengan baik.
Angkot No. 5 beroprasi dengan baik.
Angkot No. 6 beroprasi dengan baik.
Angkot No. 7 sedang tidak beroprasi.
Angkot No. 8 sedang tidak beroprasi.
Angkot No. 9 sedang tidak beroprasi.
Angkot No. 10 sedang tidak beroprasi.

angkot 1 sampai 6 beroprasi dengan baik sedangkan angkot 7 sampai 10 kalian tulis sednag tidak beroprasi 
paham gak? 

ya tapi sekarang saya pengen nulisnya kayak gini kita bagi menjadi 2 block angkot yang beroprasi dengan baik dan angkot yang sedang tidak beroprasi 

untuk angkot yang sedang beroprasi dengan baik kalian menggunakan while untuk angkot yang tidak beroprasi kalian gunakan for 

jadi nanti kalian punya dua block pengulangan didalam progam kalian 
itu ya 

satu lagi tambahannya adalah coba tambahkan i buah variable baru 
var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroprasi = 6;

jadi sekarang kalian punya sebuah variable baru yaitu angkot beroprasi 
nah jadi kalian bisa mengetahui ada berapa angkot yang jalan ada berapa angkot yang rusak 

ya silahkan kalian gunakan tiga variable ini untuk menentukan kondisi terminasi dari tiap tiap block pengulangannya 

paham ya 
kalo sudah paham pertanyaannya silahkan kerjakan latihannya nanti kalo sudah dikerjakan lanjutkan lagi materinya kita akan kerjakan bareng bareng latihan ini 

oke silahkan kerjakan dulu




kita lanjutkan 

kita lihat jawabannya harusnya sekarang kalian sudah mengerjakan ya 

angkot 1 sampai 6 beroprasi dengan baik dan itu menggunakan while 
angkot 7 sampai 10 seang tidak beroprasi dan iru menggunakan for 


oke kita bikin variable awal dulu

jmlAngkot sama dengan ada berapa angkot yang kita punya? 10 betul ya 
lalu kita punya lagi angkotBeroprasi yang jalan dengan normal ada 6

dan yang terakhir adalah nilai awal untuk menentukan nomer angkotnya berapa 

selanjutnya kita buka block pertama yaitu while untuk membuat angkot beroprasi dengan baik 
jadi selama noAngkot lebih kecil sama dengan angkotBeroprasi 

supaya apa supaya kalo misalkan yang beroprasinya nambah tinggal kita ganti nilainya 
paham ya 

selanjutnya kita tulis pesannya console.log 
dan diakhiri dengan increment jangan lupa supaya tidak masuk ke infinity loop 
atau yang keren bisa gunakan noAngkot++;

kita lihat hasilnya 
sudah tuh
angkot 1 2 3 4 5 6 beroprasi dengan baik 



*/


// var jlmAngkot = 10;
// var angkotBeroprasi = 6;
// var noAngkot = 1;

// while(noAngkot <= angkotBeroprasi) {
//     console.log('Angkot No ' + noAngkot + ' beroprasi dengan baik.');
// noAngkot += 1;
// }

// for(noAngkot = 7; noAngkot <= jlmAngkot; noAngkot++){
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
// }



/* sekarang kita buat untuk yang fornya 

kita tulis for lalu coba tulis apa kita gunakan saja noAngkot diisi dengan 7 karena dimulai dari angka 7 sebetulnya ada cara yang lebih baik ni nanti kita lihat ya 

ya lalu selanjutnya apa 
mulainya dari 7 lalu selama noAngkot ini lebih kecil dari apa? jmlAngkot maka lakukan loopnya 

dan diakhir kita nulis apa? increment ya noAngkot++

lalu kita tulis console.log 

kalo misalkan kalian masih bingung dengan for silakan gunakan tabel penelusuran atau trace tabel 

kalian bisa lihat sebelum materi ini ya sudah setelah ini apa 
kita save dulu kita kembali ke browser refresh 


sudah betul ya 123456 beroprasi dengan baik 
78910 lagi rusak, sedang tidak beroprasi 

nah tapi ini masih ada yang bisa kita perbaiki 

ini harusnya kalian tidak tulis angka 7 

kenapa? lihat nih 
kalo misalnya ceritannya angkotnya udah ada yang bener berartikan sekarnag yang beroprasinya nambah ya tidak 6 lagi misalnya 2 keluar dari bengkel berarti sekarang ada 8 angkot yang beroprasi 

kita lihat  kalo saya refresh
*/


// var jlmAngkot = 10;
// var angkotBeroprasi = 8;
// var noAngkot = 1;

// while(noAngkot <= angkotBeroprasi) {
//     console.log('Angkot No ' + noAngkot + ' beroprasi dengan baik.');
// noAngkot += 1;
// }

// for(noAngkot = 7; noAngkot <= jlmAngkot; noAngkot++){
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
// }


/* 12345678 beroprasi dengan baik 78 sedang tidak beroprasi ya ini kacau ya 

nah ini harus kalian ganti angka 7 nya jadi berapa jadi 9 
nah dari pada kalian ganti ganti dengan angka seperti itu 

kalian bisa tulis saja angkotBeroprasi ini berapa 8 kan 

karena kita mau mulai dari satu angkot setelahnya tinggal tambahkan sini + 1

*/

var jlmAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroprasi) {
    console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
noAngkot += 1;
}

for(noAngkot = angkotBeroprasi + 1; noAngkot <= jlmAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
}


/*  jadi berapapun angkot yang beroprasi angkot setelahnya itu tidak beroprasi 


jadi kalo saya kembalikan ke 6 noAngkot akan diisi dengna angkotBeroprasi berapa 6 ditambah 1 

berarti for ini akan mulai dengan 7 

ya kita lihat saya refresh nah normal ya 1 sampai 6 jalan 7 sampai 10 rusak

kalo saya ganti lagi jadi 8 angkotBeroprasinya jalankan lalu refresh 

sudah tidak perlu diperbaiki lagi 
1 sampai 8 beroprasi dengan baik 9 10 rusak 

paham ya 

jadi itu cara kita menggunakan for 


jadi itu ya mengenai for dan perbedaanya dengan while seperti apa 
ya jadi sebetulnya kalian mau menggunakan while atau for itu fungsinya sama saja 

tapi tadi kalian bisa lihat for sedikit lebih ringkas penulisannya 
ya bagian bagiannya tidak tercecer seperti while 

sampai disini dulu materi kali ini 

kita ketemu lagi dimateri selanjutnya 
dan satu lagi jangan lupa titik koma */


