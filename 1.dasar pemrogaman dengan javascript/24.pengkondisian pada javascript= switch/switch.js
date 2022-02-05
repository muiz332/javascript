/* pengkondisian pada javascript: switch 

dimateri kali ini kita masih meneruskan materi kita mengenai pengkondisian atau percabangan dimana disini kita akan membahas keyword terakhir dari pengkondisian yaitu switch


ya jadi switch ini penggunaanya mirip dengan if dan else 

kalo kalian inget penggunaan if dan else mungkin seperti ini 

if(kondisi 1) {
    aksi1
}else if(kondisi 2){
    aksi2
}else if(kondisi 3){
    aksi3
}
...
}else if(kondisi n){
    aksin
}else{
    aksi default
}


jadi kita bisa punya beberapa kondisi 
contohnya jika kita punya if kondisi 1 
jika kondisi1 tersebut bernilai true maka lakukan aksi1

selain itu jika masuk ke kondisi2 jadi else if kondisi2
jika kondisi 2 itu bernilai true maka lakukan aksi2

dan seterusnya kita bisa punya banyak sekali else if jika kita butuh ya sampai ke kondisi n yang jika kondisi ke n tersebut bernilai true maka maka lakukan aksi ke n

dan diakhir selain disemua kondisi tersebut maka akan masuk kebagian else untuk menjalankan aksi defaultnya 

ya jadi kalo temen temen masih ingin sintax dari if itu seperti ini

nah dengan menggunakan switch fungsinya juga mirip tapi nanti yang membedakan adalah kondisinya

dimana switch itu tidak memiliki kondisi yang banyak kondisinya hanya ada 1 nanti switch akan mengechek nilai dari hasil dari kondisinya 

ya contohnya seperti ini 
jadi kalo kita menggunakan switch sintaxnya jadi seperti ini 


swhitch(ekspresi) {
    case "nilai 1":
        aksi1
    [break;]
    case "nilai 2":
        aksi2
    [break;]
    case "nilai n":
        aksin
    [break;]
    default:
        aksi default
}



ya kalian tidak perlu khawatir dulu dengan sintaxnya 
nanti kita coba bareng bareng dengan sebuah kasus 

jadi sintaxnya switch lalu
dalam kurung ekspresinya

jadi bukan kondisiya jadi ekspresinya itu menghasilkan sebuah nilai kita batasi dengan kurung kurawa buka dan kurung kurawal tutup 

nah didalamnya kita mengecheck menggunakan case atau kasus kasus hasil dari ekspresinya 

misalnya jika casenya atau jika nilai dari ekspresinya itu bernilai 1 misalnya ya 

maka jalankan aksi1 ini 
lalu setelah setiap aksinya kita boleh saja manambahkan sebuah keyword break ya 
keyword break opsional nanti kita lihat cara pakainya seperti apa

ini supaya setelah menjalankan aksi1 ini dia keluar dari switchnya 

atau jika nilai dari ekspresinya bernilai 2 jalankan aksi2 ya sampai nilai ke n 

nah jika nilainya tidak terpenuhi dari semua nilai ini maka akan masuk keaksi defaultnya 

jadi sama seperti 
if 
else if
else if
else if
else 

supaya kalian tidak bingung kita lihat contohnya deh 

nah jadi ceritanya gini misalkan kita akan membuat progam yang sangat sederhana menggunakan if dan else if dulu deh 

ini simple banget ya misalnya 
saya punya sebuah variable yang namanya angka 

misalkan angka ini kita isi dengna nilai 1 

lalu misalnya saya gunakan ini 
if angka sama dengan 1 
maka munculkan saja sebuah alert anda memasukkan angka 1 



*/

// var angka = 1;
 
// if(angka == 1) {
//     alert('anda memasukkan angka 1 ');
// }else if(angka == 2){
//     alert('anda memasukkan angka 2');
// }else {
//     alert('angka yang anda masukkan salah');
// }



/* jika angkanya 2 angka == 2 maka tulis anda memasukkan angka 2 

nah selain dari itu semua misalnya alert angka yang masukkan salah 

ini kalo misalkan saya jalankan tampilnya yang mana 

anda memasukkan angka 1 
ya karena angka nya 1 

gimana kalo saya masukkan 2 
maka yang tampil anda memasukkan angka 2 

kalo saya masukkan 3 
maka angka yang anda masukkan salah 

kalo misalkan kita mau menangani angka 3 juga gimana?
kita tambahin aja ya else if 



*/

// var angka = 2;

// if(angka == 1){
//     alert('anda mamasukkan angka 1 ');
// }else if(angka == 2) {
//     alert('anda memasukkan angka ' + angka);
// }else if(angka == 3){
//     alert('anda memasukkan angka 3 ')
// }else {
//     alert('angka yang anda masukkan salah')
// }


/*else if angka sama dengan 3 munculkan alert anda memasukkan angka 3

dan seterusnya kalo misalkan akalian ingin menangani angka yang lainnya 

paham ya ini kalo misalkan kita pakai if dan else if

nah sekarang gimana kalo misalkan kalian ingin 

usernya yang menginputkan ya bukan kita memasukkan sendiri nilainya 

kira kira gimana caranya 

kita harus mengganti nilai dari angka menjadi prompt supaya meminta inputan dari user 



*/

// var angka = prompt('masukkan angka');

// if(angka == 1){
//     alert('anda mamasukkan angka 1 ');
// }else if(angka == 2) {
//     alert('anda memasukkan angka ' + angka);
// }else if(angka == 3){
//     alert('anda memasukkan angka 3 ')
// }else {
//     alert('angka yang anda masukkan salah')
// }

/*   lalu jalankan 

nah kita diminta untuk memasukkan angka

kalo saya masukkan angka 2 
nah tampil anda memasukkan angka 2 

kalo saya masukkan angka 5 tampilnya apa?
anda yang anda masukkan salah 

ini kalo menggunakan else if 

nah sebelum saya masuk ke switch hati hati ya ketika kalian menggunakan sama dengannya 3 


*/

// var angka = prompt('masukkan angka');

// if(angka === 1){
//     alert('anda mamasukkan angka 1 ');
// }else if(angka === 2) {
//     alert('anda memasukkan angka ' + angka);
// }else if(angka === 3){
//     alert('anda memasukkan angka 3 ')
// }else {
//     alert('angka yang anda masukkan salah')
// }

/* kalo saya menggunakan sama dengannya 3 

masih inget ya kalo sama dengan 2 itu operator perbandingan \
kalo 3 itu operator identitas 

sama membandingkan tapi membandingkannya tidak hanya nilainya saja tapi juga tipe datanya 

coba ya kita save kita jalankan 

maka saya masukkan angka 1 
harusnya tampilnya apa 
anda memasukkan angka 1 ya 

kalo syaa tekan oke 
nah lihat angka yang nada masukkan salah 
kok gitu ya kira kira kenapa coba ?

padahal kita udah memasukkan angka 1 tapi dia tidak masuk ke if tapi masuk ke else nya 
nah itu karena begitu kita menggunakan prompt itu yang kita inputkan itu pasti menjadi string 

meskipun kita masukkanya angka tapi angka tersebut akan dianggap sebagai string sedangkan kita membandingkannya dengan intejer 

nah solusinya gimana? 

bisa kita ganti sama dengan 3 menjadi sama dengan 2 kalo sama dengannya  2 kalian tidak perlu khawatir mau intejer mau string asalkan nilainya sama itu pasti true 

atau sama dengannya 3 tapi dibandingkannya dengan string '1'


*/

// var angka = prompt('masukkan angka');

// if(angka === '1'){
//     alert('anda mamasukkan angka 1 ');
// }else if(angka === '2') {
//     alert('anda memasukkan angka ' + angka);
// }else if(angka === '3'){
//     alert('anda memasukkan angka 3 ')
// }else {
//     alert('angka yang anda masukkan salah')
// }


/* nah kalo sekarang pasti benar 

kita jalankan masukkan angka 1 
betul ya 

atau gimana kalo saya ingin menggunakan intejer dan sama dengannya 3 

ini ada caranya yaitu dengn memaksa apa yang diinputkan oleh user menjadi angka atau intejer 

yaitu caranya kita menambahkan sebuah fungsi dijavascript yaitu parseInt dalam kurung masukkan promptnya 



*/

// var angka = parseInt(prompt('masukkan angka'));

// if(angka === 1){
//     alert('anda mamasukkan angka 1 ');
// }else if(angka === 2) {
//     alert('anda memasukkan angka ' + angka);
// }else if(angka === 3){
//     alert('anda memasukkan angka 3 ')
// }else {
//     alert('angka yang anda masukkan salah')
// }


/* ini artinya apapun yang diinputkan oleh user itu akan diproses oleh fungsi yang namanya paerseInt sehngga inputan user tadi akan merubah tipe datanya intejer  lalu disimpan ke variable angka 

nah ini kalo kita coba jalankan

saya masukkan angka 1 nah baru betul ya karena sekarang apapun yang diinputkan oleh user tipe datanya adalah intejer dan dimasukkan ke dalam variable angka 

lalu kita check apakan angka intejer ini sama dengan angka interjer 1 ? true
gitu ya

tapi kalo misalkan kalian bingung dengan fungsi ini kita abaikan dulu sekarang kita ubah sama dengannya menjadi 2 saja 



*/


// var angka = prompt('masukkan angka');

// if(angka == 1){
//     alert('anda mamasukkan angka 1 ');
// }else if(angka == 2) {
//     alert('anda memasukkan angka ' + angka);
// }else if(angka == 3){
//     alert('anda memasukkan angka 3 ')
// }else {
//     alert('angka yang anda masukkan salah')
// }


/* ya ini jika menggunakan if dan else if 

sekarang gimana kita ubah ini menjadi switch 

ya kita lakukan hal yang sama sintaxnya gini 
kita buka dulu keywrodnya switch lalu dalam kurung

nanti kita disini masukkan ekspresi apa yang mau kita pilih nilainya dalam hal ini adalah angka

ya jadi nanti dicheck nilai angka itu apa



*/

// var angka = prompt('masukkan angka');

// switch(angka){
//     case 1 :
//         alert('anda memasukkan angka 1');
//     break;
//     case 2 :
//         alert('anda memasukkan angka 2');
//     break;
//     case 3 :
//         alert('anda memasukkan angka 3');
//     break;
//     default :
//         alert('angka yang anda masukkan salah');
//     break;

// }

/* jika 1 atau case maka lakukan alert anda memasukkan angka 1
jangan lupa kita tambahkan break 

gimana kalo kita lupa menambahkan break? nanti kita lihat ya atau nanti ada saatnya justru kita tidak perlu menggunakan break 

kalo misalkan 2 case 2 begini 
anda memasukkan angka 2 

kalo 3 alert lagi anda memasukkan angka 3 kasin break lagi dan terakhir 

default 
ini untuk menangani jika nilainya bukan dari yang ada didalam case 

alert angka yang anda masukkan salah 
kasih breka lagi 

kita jalankan saya refresh 

kita masukkan angka 1 harusnya munculnya anda memasukkan angka 1 ya 

kok munculnya angka yang anda masukkan salah?

kenapa coba ?
nah ini sama ya kasusnya kayak tadi yang ada didalam prompt itu string masuk ke dalam variable angka dicheck casenya intejer 

nah jadi solusinya bisa kita ganti saja intejer menjadi string 



*/


// var angka = prompt('masukkan angka');

// switch(angka){
//     case '1' :
//         alert('anda memasukkan angka ' + angka);
//     break;
//     case '2' :
//         alert('anda memasukkan angka 2');
//     break;
//     case '3' :
//         alert('anda memasukkan angka 3');
//     break;
//     default :
//         alert('angka yang anda masukkan salah');
//     break;

// }


/* paham ya jadi ati ati dengan tipe data

saya refresh saya masukkan angka 1 
anda memasukkan angka 1 

jadi begitu ya cara menggunakan switch 

ingat yang ada didalam kurung switch adalah ekspresi dan casenya harus nilai

kita tidak bisa memasukkan kondisi didalam case ini

misalkan case(angka <= 10 )

tidak bisa harus nilainya langsung 1 2 3 atau yang lainnya 

atau kita coba contoh lain deh 

misalnya gini

misalkan saya mau membuat progam sederhana lagi untuk memilih makanan atau minuman misalnya  ya 

ya nanti usernya bisa memasukkan nama makanan atau minuman nanti progam kita mengecheck apakah makanan atau minuman itu sehat atau tidak 


saya punya variable namanya item untuk mengecheck makanan / minumannya 
kita kasih prompt
nah ini ada beberapa list / contoh makanan / minuman ya 

nanti user memasukkan salah satu namanya baru kita masukkan switch 

*/

// var item = prompt('masukkan nama makanan / minuman \n cnth: nasi, daging, susu, hamburger, softdrink');

// switch(item) {
//     case 'nasi' :
//         alert('makanan / minuman sehat');
//     break;
//     case 'daging' : 
//     alert('makan /minuman sehat');
//     break;
//     case 'susu' :
//         alert('makanan / minuman sehat');
//     break;
//     case 'hamburger' :
//         alert('makanan / minuman tidak sehat');
//     break;
//     case 'softdrink' :
//         alert('makanan / minuman tidak sehat');
//     break;
//     default:
//         alert('anda memasukkan nama makanan / minuman yang salah');
//     break;
// }



/* switch item kurung kurawal buka dan tutup lalu kita tulis case
kalo usernya mengisikan nasi kita tulis dibawahnya alert makanan /minuman sehat gitu ya 

lalu kita aksih break disini 

kalo misalkan user memasukkan daging 
alert makanan /minuman sehat
break lagi 


begitu juga dengan susu

sekarang yang tidak sehat nih
kalo usernya memasukkan hamburger 
alert makanan / minuman yang tidak sehat 
break lagi

begitu juga dengan softdrink
break lagi

dan yang terakhir kalo user memasukkan makanan atau minuman yang tidak ada didalam list

kita tulisnya default 
selain dari ini semua anda memasukkan nama makanan / minuman yang salah 
kasih break lagi

ini cara menulisnya ya

jadi ini bacanya gini 

switch item artinya nanti kita akan memilih kasus mana yang akan dikerjakan sesui dengan isi dari variable item 
kalo misalkan isi dari variable itu adalah daging maka dia akan mencari case daging kalo ketemu tampilkana aksi alertnya 

lalu kalo ketemu break dia langsung keluar dari switch

atau gini 

switch item 
jika item itu nilainya misalkan nasi 
jika item itu nilainya sama dengan / case nasi maka munculkan aksinya yaitu alert
dan jika ketemu break dia akan keluar dari switchnya 

kita coba dulu save lalu jalankan 

ada nama makanan / minuman 

misalkan saya masukkan daging maka akan muncul makanan / minuman sehat 

saya coba lagi 
kalo misalkan saya tulis softdrink maka akan muncul makanan / minuman yang tidak sehat 

kalo saya masukkna pizza kira kira yang akan muncul apa 
anda memasukkan nama makanan /minuman yang salah 

ya sudah betul ya itu caranya pakai switch 

sekarang saya mau tunjukkin gimana kalo misalkan kalian tidak menggunakan break

ya sebetulnya ini akan lebih efektif ketika tidak menggunakan break kenapa? karena gini

contohnya saja jika user memasukkan nasi maka case yang akan dipilih adalah case nasi lalu jalankan aksinya 
setelah jalankan aksinya ketemu break lalu keluar dari switch begitukan

kalo tidak ada breaknya saya hapus misalnya ya 

maka setelah aksi case ini dipilih tampilkan alert lalu dia jalan ke case berikutnya begitu tampilkan lagi alert baru break 

nah makanya yang akan terjadi adalah alertnya tampil 2 kali 
paham gak kita coba ya save dulu 





*/

// var item = prompt('masukkan nama makanan / minuman \n (cnth: nasi, daging, susu, hamburger, softdrink');

// switch(item) {
//     case 'nasi' :
//         alert('makanan / minuman sehat');
//     case 'daging' : 
//     alert('makan /minuman sehat');
//     break;
//     case 'susu' :
//         alert('makanan / minuman sehat');
//     break;
//     case 'hamburger' :
//         alert('makanan / minuman tidak sehat');
//     break;
//     case 'softdrink' :
//         alert('makanan / minuman tidak sehat');
//     break;
//     default:
//         alert('anda memasukkan nama makanan / minuman yang salah');
//     break;
// }

/* saya tulis nasi 
kalo saya oke 
tampil alert punyanya nasi kalo saya oke tampil alert sekali lagi ini punyanya case daging

jadi sebetulnya ini bisa kita perbaiki 
sehingga kalo orang milih nasi tidak usah tampilkan apa apa

kalo usernya pilih daging tidak usah tampilkan apa apa juga 

baru ketika case susu tampilkan makanan sehat 


*/

// var item = prompt('masukkan nama makanan / minuman \n (cnth: nasi, daging, susu, hamburger, softdrink');

// switch(item) {
//     case 'nasi' :
//     case 'daging' : 
//     case 'susu' :
//         alert('makanan / minuman sehat');
//     break;
//     case 'hamburger' :
//         alert('makanan / minuman tidak sehat');
//     break;
//     case 'softdrink' :
//         alert('makanan / minuman tidak sehat');
//     break;
//     default:
//         alert('anda memasukkan nama makanan / minuman yang salah');
//     break;
// }

/* ini maksunya gimana coba ?
kalo user menginputkan nasi maka tampil sehat 
ya karena dia kebawah tidak ada apa apa 
dia kebawah lagi tidak ada apa apa 

lalu dia kebawah lagi dia ketemu alert lalu break keluar begitu 

jadi justru kita bisa manfaatkan 

sekarang untuk yang hamburger dia tidak sehat ya 
softdrink juga 

jadi alert yang ada dihamburger kita bisa hapus juga 

*/

// var item = prompt('masukkan nama makanan / minuman \n (cnth: nasi, daging, susu, hamburger, softdrink');

// switch(item) {
//     case 'nasi' :
//     case 'daging' : 
//     case 'susu' :
//         alert('makanan / minuman sehat');
//     break;
//     case 'hamburger' :
//     case 'softdrink' :
//         alert('makanan / minuman tidak sehat');
//     break;
//     default:
//         alert('anda memasukkan nama makanan / minuman yang salah');
//     break;
// }


/* gitu jadi kalo hamburger tampilnya tidak sehat kalo softdrink juga sama tidak sehat 

baru dia break

ya kita coba lagi
jalankan

saya masukkan nasi 
mincul sehat 

kalo saya masukkan susu
sehat 

kalo saya masukkan hamburger 
tidak sehat

dan terakhir kalo saya masukkan misalnya sate
maka muncul anda memasukkan nama makanan yang salah 

begitu 

gimana mudah mudahan tidak bingung ya menggunakan switch ini 

ya silahkan dicoba coba saja cara pakainya 
yang harus kalian inget kalian hanya bisa memasukkan value kedalam casenya

lalu perhatikan type datanya kalo kalian menggunakan prompt 

baik jadi mungkin itu materi mengenai switch ini ya

jadi ini adalah keyword terakhir yang ada didalam topik percabangan atau pengkondisian 

kita ketemu lagi dimateri berikutnya 

dan satu lagi jangan lupa titik koma ; */