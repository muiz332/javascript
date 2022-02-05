/* funciton pada javascript: variable scope


dimateri kali ini kita akan membahas konsep yang menurut saya cukup membingungkan apa lagi buat kalian yang baru belajar mengenai pemrogaman 

topik yang akan kita bahas adalah mengenai scope atau lingkup variable 
atau istilahnya 

bagaimana sebuah variable dapat diakses didalam progam 

nah didalam bahasa pemrogaman ada dua buah scope atau dua jenis lingkup 

yang pertama ada yang disebut dengan block scope dan ada yang disebut dengan function scope 

ya jadi ada bahasa pemrogaman yang memiliki konsep block scope
dan ada bahasa pemrogaman yang memiliki function scope

nah nanti kita lihat javascript masuknya ke yang mana ya 

1.block scope
    nah kita lihat dulu untuk yang pertama yaitu mengenai block scope 

    nah block scope ini digunakan oleh bahasa pemrogaman seperti c dan java ya 

    kita lihat 
    misalnya saya punya sebuah progam sederhana dalam bahasa c seperti ini 

    ini buat kalian yang belum pernah ngoding dalam bahasa c ini tidak usah khawatir kita pelajari saja sedikit demi sedikit barisnya ya 

    int i = 2;

    if(i % 2 == 0){
        bool genap = true
    }

    if(genap){
        printf("genap!")
    }

    ini kita mendeklarasikan variable namanya i yang type datanya intejer lalu kita isi dengan 2 
    
    nah lalu kita check disini menggunakan pengkondisian 
    if atau jika i modulus 2 hasilnya sama dengan 0 

    maka jika benar kita definisikan sebuah variable yang namanya genap type datanya boolean yang diisi dengan true 

    lalu setelah itu jika genap ini artinya jika genap bernilai true ini truthy valuenya ya 
    maka tampikan atau cetak tulisan genap kelayar 

    nah paham gak progam sederhana seperti ini 

    nah coba kira kira menurut kalian ini tampil atau tidak genap ke layar 
    harusnya tampil ya 

    tapi ini kalo dijalankan itu hasilnya eror 
    eror: genap is undeclared

    nah katanya genap tuh undeclared

    atau dibaris if ke dua genap itu tidak dikenali 

    nah kenapa ya padahal jelas jelas di if yang pertama nilainya true maka genap itu dibuat 
    tapi kenapa genap itu undeclared 

    ini gara gara variable yang dibuat didalam block scope 
    ya block scope ini ya 

    kalian ketemu sama kurung kurawal buka dan kurung kurawal tutup 

    if(i % 2 == 0){
        bool genap = true
    }

    nah variable yang dibuat didalamnya itu hanya berlaku didalam block ini saja 
    tidak bisa digunakan diluar blocknya 

    ya jadi ini disebut dengan block scope 
    paham gak?

    nah ini untuk bahasa pemrogaman c 

    nah jika progam ini kita buat sama persis dengan menggunakan javascript 
    ya hasilnya seperti ini 

    var i = 2;
    if(i % 2 == 0){
        var genap = true;
    }

    if(genap){
        console.log('genap!');
    }

    kita bikin variable diisi dengan 2 ya
    lalu kita bukan pengkondisiannya 

    jika i modulus 2 sama dengan 0 
    maka buat variable baru namanya genap yang diisi dengan true 

    dan diakhir 
    jika genap atau jika genap itu bernilai true 
    tampilkan genap didalam console

    ini hasilnya kira kira gimana?
    jika menggunakan javascript ini tampil ya genap 

    karena javascript tidak menganut block scope 
    javascript itu menggunakan konsep function scope 

    jadi beda ya 

    sekarang kita lihat contohnya seperti apa 
    misalkan gini simple saja dulu 

    saya punya variable a yang diisi dengan 1 seperti ini 
    ini disebut sebagai global scope atau ada yang bilang window scope 

    artinya apa artinya variable a ini adalah variable global yang bisa digunakan dimanapun didalam progam kita 


*/

// global scope / window scope 
// var a = 1;

/*  jadi ini kalo saya save scriptnya saya buka diconsole saya refresh 
saya tulis a diconsole maka tampil ya 
nilainya satu 

itulah kenapa dia disebut window scope karena dia berada didalam object window yang artinya object pling luar didalam browser kita 

jadi sama saja kalo saya tulis didalam consolenya window.a gitu ya
ini artinya 1 

kalo sya tulis window.a === a true
sama ya 

jadi a itu sama dengan window.a
ini harusnya tidak ada masalah 

nah tapi sekarang gini 
kalo misakan kita buat function kita kasih namanya tes begini 
ya lalu kita panggil tesnya 


*/

// global scope / window scope 

// var a = 1;

// function tes(){

// }

// tes();

/* nah ini artinya kita sudah membuaka function scope 
artinya apa?

artinya variable apapun yang kita buat didalam function ini, itu hanya berlaku didalam function ini saja 

kalo misalnya didalamnya saya tulis variable b yang diisi dengan 2 
ya jadi saya bikin variable b didalam function 

*/

// global scope / window scope 
// var a = 1;

// function tes(){
//     var b = 2;
// }

// tes();
// console.log(b);

/* lalu setelah functionnya kita jalankan kita console b begini 
ya kita panggil b nya diluar functionnya 

kita jalankan save lalu refersh 
nah kalian lihat nih b is not defined 

jadi diluar sini kita tidak bisa mengenali b 
paham gak?

jadi variable b ini hanya bisa digunakan didalam function saja itu yang disebut dengan function scope 

nah tapi jika kita pindahkan console.lognya didalam function 





*/

// global scope / window scope 
// var a = 1;
// function tes(){
//     var b = 2;
//     console.log(b);
// }
// tes();

/* tentu saja sekarang b nya tampil ya 
kalo saya jalankan tampil angka 2 ya betul 

ini harusnya tidak ada masalah kita bisa aksess variable didalam function 

nah tapi gimana kalo saya tulis console.lognya disini a 


*/
// globa scope / window scope 
// var a = 1;
// function tes(){
//     var b = 2;
//     console.log(a);
// }
// tes();

/* kira kira menurut kalian tampilnya apa?
ini kalo kita jalankan saya refresh 

tampil angka 1 ya 
jadi didalam function kita bisa mengakses variable global

kalo diluar function ktia tidak bisa akses variable lokal(variable yang berada pada function scope yang dimaksut adalah varialbe yang ada didalam function)


tapi didalam function kita bisa akses variable global 
gitu perilakunya 

jadi bayangkan saja ibaratnya kalian sedang didalam sebuah mobil yang mobilnya itu punya kaca film yang sangat gelap begitu 

kalo kalian didalam mobil itu kalian bisa lihat keluar ya 
tapi orang yang diluar tidka bisa melihat didalam mobil 

itu anggapanya seperti ini 

jadi kalian didalam function bisa mengintip keluar ya tapi yang diluar tidak bisa melihat kedalam mobil/function 

jadi kalo saya tulis seperti ini 



*/

// global scope / window scope 
// var a = 1;
// function tes(){
//     var b = 2;
//     console.log(a);
// }
// tes();
// console.log(b);

/* a nya tampil ya kita bisa mengintip keluar tapi b nya tidak tampil

orang luar tidak bisa mengintip kedalam 

nah itu perilakunya coba kalian pahami lagi ya 

nah sekarang kita coba kasus yang berikutnya 
gimana kalo b nya saya hapus 

nah sekarang gini
didalam functionnya saya bikin variable a lagi diisi dengan 2 begini 


*/

// global scope / window scope
// var a = 1;
// function tes(){
//     var a = 2;
//     console.log(a);
// }
// tes();

/* kalo saya console.log a nya 
itu tampilnya angka 2 

ya karena a ini yang berada didalam function adalah variable lokal 
tapi gimana kalo saya simpan consolenya diluar 


*/
// var a = 1;
// function tes(){
//     //name conflict
//     var a = 2;
// }
// tes();
// console.log(a);

/* kira kria 2 atau 1 yang tampil 
kita coba kita save kita refresh 

nah yang tampil angka 1 kenapa ?
ini disebutnya name conflict ya 

dimana kita punya dua buah variable yang namanya sama tapi scopenya berbeda 
jadi ini tidak menimpa nilainya seperti yang biasa kita coba misalkan seperti ini 

*/
// var a = 1;
// var a = 2;


/* nah kalo begini ini artinya menimpa a menimpa a 
tapi kalo misalkan begini 

*/
// globa scope / window scope 
// var a = 1;
// function tes(){
//     //name conflict
//     var a = 2;
// }
// tes();
// console.log(a);

/* nah a yang ada didalam function itu berbeda dengan a yang ada diluar function 
jadi ini fua variable yang berbeda 

gimana paham gak?
jadi sekarang kalo saya pindahkan consolognya kedalam function 

*/
// global scope / window scope 
// var a = 1;
// function tes(){
//     //name conflict
//     var a = 2;
//     console.log(a);
// }
// tes();

/* a yang ada didalam function sudah pasti mengacu ke variable lokal 
ya pasti dua 

kita tidak bisa lagi mengakses variable global 
kecuali dengan kita menambahkan diconsole.lognya window.a


*/
// global scope / window scope 
// var a = 1;
// function tes(){
//     //name conflict
//     var a = 2;
//     console.log(window.a);
// }
// tes();

/* nah kalo begini berarti yang kita maksut bukan variable lokal tapi variable window atau variable global 

ya kalo kita jalankan 
maka tampilnya angka 1  oke ya 

sekarang kita coba gini 
sekaragn didalma functionya 

saya akan hilangkan keyword varnya 

*/

// global scope / window scope 
// var a = 1;
// function tes(){
//     a = 2;
// }
// tes();
// console.log(a);

/* lalu saya console.log a 
nah sekarang hasilnya apa?

1 atau 2 ? 
sekarang tampilnya 2 

beda ya kalo kita pakek var tampilnya 1 karena a nya pasti mengacu ke yang global 
nah sedangkan kalo tidak pakai var ini yang terjadi 

jadi yang pertama javascript akan mengecheck 
oh ini tidak ada varnya nah berarti dia akan mengecheck 

ada gak didalam function tes ini deklarasi var a misalnya gini 


*/
// global scope / window scope 
// var a = 1;
// function tes(){
//     var a;
//     a = 2;
// }
// tes();
// console.log(a);

/* kalo ada berarti akan dibuat variable lokal tapi kalo tidak ada seperti ini 


*/
// global scope / window scope 
// var a = 1;
// function tes(){
//     a = 2;
// }
// tes();
// console.log(a);

/* nah berarti function ini akan mengintip keluar kevariable globalnya 
a = 2 ini akan menimpa 1 

sehingga hasilnya 2 


nah sekarang gimana kalo gini variable a ayng diglobal scopenya saya hapus 
jadi hanya begini saja 


*/

// function tes(){
//     a = 2;
// }
// tes();
// console.log(a);

/* sekarang nilainya kira kira apa?

nilainya tetap 2 
ya tapi sekarang yang terjadi gini 

pada saat didalam functionya kita tulis a = 2 
nah javascriptnya lihat 

oh ini tidak ada var didepannya 

maka dia mengechek ada gak deklarasi variable a didalam tes ini oh tidak ada 
berarti a ini bukan variable lokal 

terus dia mengintip diluar 
ada gak deklarasi variable a 

oh ternyata tidak ada juga 
nah maka yang terjadi adalah javascriptnya akan secara otomatis akan membuat variable diluar function 

sehingga a yang ada didalam function ini adalah variable global 

*/

// var a;
// function tes(){
//     a = 2;
// }
// tes();
// console.log(a);

/* nah ini ati ati ya jika memang kalian maksutnya adalah untuk membuat variable lokal 
maka pastika kalian selalu menuliskan keyword var didalam functionnya 

*/
// function tes(){
//     var a = 2;
// }
// tes();
// console.log();

// atau kalian bisa nulisnya gini deklarasi dulu variable ya baru diisi variablenya 

// function tes(){
//     var a;
//     a = 2;
// }
// tes();
// console.log(a);

/* jika memang kalian hanya ingin membuat variable a ini dapat diakses didalam function saja 
karena ketika kalian tidak tuliskan keyword var didalam functionnya */

// function tes(){
//     a = 2;
// }
// tes();
// console.log(a);

/* akan dibuat secara otomatis oleh javascript sebuah variable global 
nah dengan melakukan itu istilahnya ini akan mengotori global scopenya 

akan mengotori lingkup globalnya sehingga sekarang lingkup globalnya tiba tiba punya variable a 
padahal mungkin tujuannya a ini hanya dipakai didalam function saja 

itu jadi pastikan kalian gunakan keyword var didalam functionnya 

atau untuk mengatasinya kalian bisa menggunakan keyword ini "use strict "
nah ini artinya javascriptnya akan menggunakan mod strict 

*/

// "use strict";
// function tes(){
//     a = 2;
// }
// tes();
// console.log(a);

/* artinya ketika kalian menuliskan seperti ini
maka javscriptnya akan paham 

oh ini maksutnya akan membuat variable lokal sehingga tidak akan dibuat variable global 
tapi dibuatnya akan didalam function secara otomatis 

jadi sekarang kalo saya jalankan 
ya karena kita manggil a diluar function 
maka a is not defined

gitu ya
tapi saya tidak akan jelaskan lebih lanjut mengenai use strict ini 

ya silahkan kalian pelajari sendiri saja ya 

gimana sampai disini paham gak?
mudah mudahan paham ya 

nah sekarang kita coba contoh yang lain 
misalnya gini

divariable globalnya 
saya punya variable  diisi satu lagi 

tapi sekarang saya mau kasih function tesnya argument 


*/
// global scope / window scope
// var a = 1;
// function tes(a){
//     console.log(a);
// }
// tes(2);

/* ya lalu didalamnya saya langsung tuliskan console.log yang diisi dengan a 

oke dan sekarang tesnya saya mau kasih parameter 
parameternya 2 

coba silakan kalian tebak dulu kira kira hasil yang akan tampil diconsole angka berapa?
1 atau 2 ?

ya saya save kita lihat 
hasilnya adalah 2 

kenapa?
coba kita lihat ya 

yang pertama kita buat variable global a 

lalu kita buat function yang argumentnya a 
didalamnya kita menampilkan console.log a 

pada saat kita memanggil functionnya kita kirimkan keparameter angka 2 
jadi 2 ini akan masuk kedalam parameter a 

dan a ini akan dipakai diconsole.lognya 
sehingga tampilnya 2 ya 

jadi variable global a ini sama sekali tidak dipakai 
dan yang harus kalian inget ketika kita membuat sebuah parameter 

parameter ini akan selalu menjadi lokal variable meskipun kita tidak tuliskan keyword var sampingnya 

makanya ketika saya tulis console.log a 

*/

// var a = 1;
// function tes(a){
//     console.log(a);
// }
// tes(2);
// console.log(a);

/* kira kira diconsole tampil apa?
tampilnya 2 lalu dibawanya 1

2 ini karena function tesnya kita panggil menggunakan argument 2 

1 itu tampil karena console.log a yang ada diluar function ini mengacu kemana?
ke variable global 


atau terakhir ih gimana kalo misalkan 
tesnya saya tidak kirimkan angka 2 seperti ini 

tapi saya tulis a didalam argumentnya 

*/

// var a = 1;
// function tes(a){
//     console.log(a);
// }
// tes(a);
// console.log(a);

/* nah kalian lihat jadi sekarang kita punya banyak variable a kira kira hasilnya sekarang berapa?
hasilnya adalah 1 dan 1 ya 

coba yang terjadi gimana 

kita bikin variable a global diisi dengan angka 1 
lalu kita bikin function yang parameternya a 
dan console.log a

lalu kita panggil functionnya dengan argument a 
lalu menampilkan variable a juga 

nah ini kira kira gimana maksutnya 

a yang ada didalam argument itu sama dengan a yang ada diconsole.log yang diluar function 

dua duanya mengacu kepada variable global 
sedangkan a yang ada didalam parameter ini adalah variable lokal 

jadi meskipun namanya sama semua ini ada dua jenis variable 

ada yang global 3 yang ada diluar function adalah variable global dan 1 yang ada diparameter dan 1 didalam function adalah variable lokal 

nah jadi ini yang membuat bingung para progammer pemula 
nah ini maksutnya beda ya 

jadi begitu mengenai scope yang ada didalam javascirpt ini 

oke jadi ini ya materi mengenai scope atau lingkup variable yang ada didalam javascript 

mudah mudahan kalian paham 
kalo misalkan kalian bingung silahkan dibaca baca lagi materinya 

kita ketemu lagi dimateri yang akan datang 
dan satu lagi jangan lupa titik koma ; */