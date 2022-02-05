/* object pada javascript: this

masih dalam topik mengenai object  kalo dimateri sebelumnya kita sudah belajar mengenai object pada javascript


jadi ada beberapa cara untuk membuat object 
ada 3 yang sudah kita pelajari yaitu dengan menggunakan 

1.object literal 
2.function declaration
3.constructor function (keyword new)

walaupun sebetulnya ada beberapa cara lagi untuk membuat dan memanggil sebuah object 

dan dimateri kali ini kita akan membahas sebuah konsep yang dinamakan dengan this 

dan untuk memahami this ini syaratnya memang kita harus paham betul dulu bagaimana membuat dan memanggil object dengan berbagai cara seperti tadi 

kenapa kita harus paham dulu?
karena pada saat kita membuat dan memanggil object ya khususnya dengan menggunakan function nanti kita akan berada pada sebuah contex atau sebuah keadaan yang berbeda 

nah tergantung bagaimana cara kita membuat dan memanggil functionnya 

jadi ketika kita membuat dan memanggil functionnya dengan cara yang berbeda kita nanti akan berada pada contex yang berbeda pula

ya kalo bingung tidak apa apa nanti kita lihat contohnya saja 
ya karena memang topik this ini cukup membingungkan apa lagi buat para pemula

jadi kalian tidak usah khawatir kalo bingung silahkan diulang dibaca lagi materinya ya 

baik tapi sebelum kita masuk ke topik this bagaimana kalo kita review dulu cara pembuatan dan pemanggilan object yang sudah kita pelajari dimateri sebelumnya ya



sekarang kita akan coba membuat object lagi ya 

1.menggunakan function declaration 
    jadi ini sebetulnya caranya cukup kita membuat function biasa saja tapi didalamnya terdapat sebuah object kosong

    misalkan saya punya sebuah function namanya hallo
    yang didalamnya kita bikin console.log hallo

*/

// function hallo(){
//     // var obj = {}
//     console.log('hallo')
// }


/* ya ini cara membuat function biasa didalamnya nanti juga kalian bisa bikin object

misalnya var obj diisi dengan object kosong begini 

tapi kita contohkan dengan menggunakan function biasa saja seperti ini 

ya ini cara pertama membuat function declaration biasa 

cara memanggilnya bagaimana?
kalian cukup memanggil nama functionnya lalu dengan kurung buka dan kurung tutup

*/
// hallo();

/* ya nanti ini akan mengembalikan nilai hallo 

oke ini cara pertama menggunakan function declaration 



cara kedua kita bisa menggunakan object literal 



2.menggunakan object literal
    jadi kita langsung bikin objectnya 

    misalkan kita bikin variable obj diisi dengan object kosong
    kurung kurawal buka dan kurung kurawal tutup


*/
// var obj = {};
// obj.hallo = function(){
//     console.log('hallo')
// }

/* lalu misalkan kita bikin sebuah function didilam object ini 
atau kita sebut dengan method ya 

kalian cukup tulis obj titik hallo misalkan saya mau bikin method yang namanya hallo yang isinya function yang mengembalikan console.log hallo seperti ini 

nah cara memanggilnya bagaimana?
caranya kita panggil objectnya titik hallo dan menggunakan kurung

*/
// obj.hallo();

/* tampilnya sama persisi dengan kita menggunakan function declaration 

ya ini cara kedua



3.menggunakan  constructor 

    kalo menggunakan constructor ini kita butuh keyword new 
    jadi kita bikin dulu functionnya 

    lalu nama functionya
    inget kalo misalkan menggunakan constructor kebiasaanya kita tulis dengan menggunakan huruf besar diawal

    ya walaupun huruf kecil pun bisa saja ya 

*/

// function Hallo(){
//     console.log('hallo');
// }

/* tapi begitu kita pakai huruf besar ini untuk ngasih tahu bahwa kita memanggilnya menggunakan constructor 

yang didalamnya isinya console.log hallo

cara bikinnya sama sebetulnya seperti function declaration yang beda adalah memanggilnya 

cara memanggilnya kalian bisa menggunakan keyword new

*/

// new Hallo();

/* atau kita juga bisa simpan didalam variable misalnya 

saya tulis new hallo coba jalankan 
refresh 

nah tampilnya sama 
jadi ketiga hal tersebut menampilkan hal yang sama 

tapi yang harus kalian pahami adalah contexnya berbeda 

ya cara membuat dan memanggilnya berbeda contexnya berbeda 

ya jadi pemahaman seperti ini akan kepakai ketika kita belajar menganai keyword this 

ya sampai disini dulu saja mudah mudahkan paham ya

jadi ada tiga cara



sekarang kita masuk ke contect this



This
    jadi gini this adalah  sebuah keyword special yang otomatis didefinisikan berbeda pada setiap function 

    jadi setiap kalian bikin function atau bikin object menggunakan cara apapun itu otomatis ada keyword this yang didefinisikan berbeda

contohnya gini 
saya coba langsung tulis begini ya

*/
// console.log(this);

/* console.log this 
coba ada gak this ?

begitu saya save dan refresh 
nah ternyata this itu berisi sesuatu 

kalo kita tulis console.log this ini maka secara default isi dari keyword this atau isi dari variable this adalah window

atau ini disebut dengan object global 
object window adalah object global 

oke jadi ini sama saja ketika saya tulis window

*/
// console.log(window);

/* ini kalo console.log window isinya sama tuh

kalo saya tulis begini 
apakah window sama dengan this?

*/
// console.log(window === this);

/* true ya oke

nah sekarang gini kalo misalkan saya punya sebuah variable a yang diisi angka 10

kalo saya console log a 


*/
// var a = 10
// console.log(a);

// itu pasti akan muncul angka 10
// nah tapi saja juga bisa tulis disini this.a

// console.log(this.a);

/* nah ini sama saja karena kan this itu window 

kalo thisnya saja ganti dengan window
*/
// console.log(window.a);

/* sama jadi setiap kita membuat sebuah variable discope global 

nah itu sama saja dia adalah properti atau method dari object window 

karena object window sama dengan object this makanya kita bisa ganti windownya dengan this 

ya jadi context yang pertama begitu 

kalo kita bikin discope global this adalah window 
itu yang pertama 


sekarang gimana kalo kita coba menjalanka this pada tiap tiap cara membuat object ini 

ya kita coba satu persatu nanti 

nanti kita lihat context dari thisnya itu berbeda 
kita coba yang cara satu dulu 



1. menggunakan function declaration 

*/

// function halo(){
//     console.log('hallo')
// }
// halo();

// kalo saya save tampilnya hallo ya 
/* tapi gimana kalo gini 

didalam functionya bagaimana kalo kita tulis console.log this

*/
// function halo(){
//     console.log(this)
//     console.log('hallo')
// }
// halo();

/* kita lihat isi dari thisnya itu apa 
nah ternyata sama seperti kita bikin this discope global 

ya sama saja kalo kalian inget properti dan method 
properti itu adalah varialbe yang berada didalam sebuah object 

sedangkan method itu adalah function yang berapa didalam sebuah object 

nah scope global itu adalah object window

saat kita bikin misalnya tadi var a 
berarti kita bisa bilang object window didalamnya terdapat sebuah properti a yang isinya 10 

kalo saya tulis halo itu sama saja dengan saya tulis window titik halo
*/
// window.halo();

/* karena dia scopenya global 
nah artinya saya juga bisa ganti ini dengan this 

*/

// this.halo();

/* jadi sama ya ketika kita bikin function declaration this adalah 

this mengembalikan object global 

itu yang pertama ya 
jadi this pada function declaration contextnya adalah mengembalikian object global 


sekarang kita masuk ke cara yang kedua 


2.object literal 
    cara yang kedua adalah menggunakan object literal 

    nah kita lihat sekarang kalo kita pakai object literal this itu maksutnya apa ya

*/

// var obj = {}
// obj.halo = function(){
//     console.log(this)
//     console.log('hallo')
// }
// obj.halo();


/*  didalam functionya kita panggil console.log this 
sama sama memanggil this sama sama didalam function 

tapi sekarang karena kita membuat dan memanggil object literal 
kalo kita save dan refresh 

nah lihat beda ya hasilnya 
sekarang dimengembalikan object ini 

jadi yang dikembalikan object ini ya 

atau istilahnya object yang bersangkutan atau object ini sendiri

nah misalkan saya tambahkan lagi sebuah properti misalnya a yang diisi dengan 10 teru nama diisi dengan muiz begini 


*/
// var obj = {a : 10, nama : 'muiz'}
// obj.halo = function(){
//     console.log(this);
//     console.log('hallo')
// }
// obj.halo()

/* ini artinya saya tambahkan properti saat membuat objectnya 
lalu saya tambahkan method dibawahnya 

begitu saya log this saya save refresh 

nah tuh lihat yang dikembalikan object objnya ya beserta semua isinya 
ada properti a ada properti nama dan ada method hallo 


jadi cara 2 menggunakan object literal cara 2 this adalah mengembalikan objectnya ( object yang bersangkutan )

jadi this itu sama dengan obj
oke itu cara ke 2 

3.menggunakan constructor 
    dan cara yang ke tiga itu kalo menggunakan constructor 

    ini mirip ya sebetulnya dengan object literal 
    kita lihat 

kalo kita menuliskan console.log this disini 

*/

// function Halo(){
//     console.log(this);
//     console.log('hallo')
// }
// new Halo();

/* nah jadi ini sama sama dengan function declaration 
bedanya pada saat memanggilnya kita menggunakan keyword new

kalo langsung ditulis Halo()
maka dia akan berisi window 

tapi ketika ditambahkan keyword new didepannya 
nah kita lihat 

nah mengembalikan objectnya 
nah tapi bukan object yang ini 

dia mengembalikan object yang baru dibuat 
jadi kan new itu membuat instan 

jadi thisnya mengembalikan objectnya yang baru dibuat 

kalo saya tulis begini 

*/
// var obj1 = new Halo();
//maka this itu adalah obj1 

// kalo saya tulis lagi dibawah disi obj2
// var objs2 = new Halo();

/* 
ini sama sama membuat instan dari object halo 
tapi sekarang thisnya beda beda 

ini thisnya untuk object baru obj1
sedangkan obj2 thisnya adalah obj2 

jadi menggunakan constructor thisnya mengembalikan object yang baru dibuat 

kalo misalkan masih bingung tidak apa apa karena konsep this ini bukan konsep yang mudah dipahami 
tanpa ada contoh kasus ya 

tapi contoh kasusnya akan jelas nanti ketika kalian sudah berinteraksi dengan DOM atau document object model 

dimana kalian bisa berinteraksi dengan beberapa element html yang sama 

jadi sekarang diinget inget saja apa yang dikembalikan oleh keyword this ketika kita memanggil function atau objectnya dengan cara yang berbeda 

jadi itu ya mungkin temen temen mengenai this ini 

kalo misalkan masih bingung tidak usah khawatir dimateri selanjutnya kita akan coba latihan bagiamana mengimplementasikan this pada kasus  kasus yang sederhana 

jadi sampai disini dulu materinya 

kita ketemu lagi dimateri selanjutnya 
dan satu lagi jangan lupa titik koma ;  */

