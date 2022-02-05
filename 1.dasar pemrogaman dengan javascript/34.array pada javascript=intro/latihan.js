/* array pada javascript: intro

jadi seperti yang sudah kalian ketahui dimateri materi sebelum ini kita sudah bisa belajar mengenai function dan dimateri kali ini kita akan belajar mengenai sesuatu yang baru yaitu mengenai array ya
array pada javascript

nah sebelum kita masuk mulai belajar mengenai array ini saya harap temen temen sudah paham mengenai function ya 

karena seperti yang pernah saya bilang di javascript itu salah satu maeri terpentingnya adalah mengenai function

nah kali ini kita akan belajar mengenai sesuatu yang baru, sesuatu yang dinamakan dengan arrray 

nah array ini sebetulnya ada dibanyak bahasa pemrogaman yang lain ya 
walaupun konsepnya berbeda beda ditiap bahasa pemrogmaan lain ya 

ada yang menjadikan array itu sebagai type data ada yang menjadikan array itu sebagai struktur data 

nah apa itu maksutnya nanti kita lihat ya 

sekarang kita bahas dulu apa sih definisi dari array itu sendiri ya

jadi kalo misakan secara umum 
array itu secara terminologi bahasan inggrisnya itu artinya adalah susunan sitemantis dari object object yang serupa 
objectnya bisa apapun ya 

nah didalam bahasa pemrogaman atau didunia progamming atau ilmu computer 
array itu adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen(nilai atau variable) yang tiap tiap elementnya memiliki index

nah ini yang mesti kalian pahami bahwa array itu pasti punya yang namanya index 

ini kalo kata wikipedia mengenai array untuk progamming 

nah kalo kalian masih bingung mengenai definisi ini menurut kalian masih terlalu komplex coba saya sederhanakan lagi

menurut saya array itu adalah sebuah variable tapi variablenya lebih sakti 
nah kenapa lebih sakti?

karena array itu bisa menampung lebih dari satu nilai 

ya kan kalo kalian tahu variable itukan sesuatu yang bisa kita gunakan sebagai tempat penampungan nilai tapi nilainya cuma satu kan 

kalian bisa menyimpan angka kalian bisa menyimpan string kalian bisa menyimpan boolean 

nah array itu bisa kalian gunakan untuk menyimpan nilai lebih dari satu ya makanya saya bilang variabel yang lebih sakti 

ya contohnya gini deh 

saya ingin menampung sebuah string namanya senin kedalam sebuah variable hari 

var hari = 'senin';
ya ini tidak masalah kan ya 

nah sekarang gimana kalo misalkan saya ingin menampung hari yang lain selasa misalnya 

var hari = 'selasa';

kira kira bisa gak saya lakukan ini bisa ya tapi hari seninnya kemana?
hari seninnya hilang karena ditimpa oleh selasa 

kenapa ditimpa karena kita mmeberikan nama variable yang sama 
jadi kalo nama variablenya sama ya isinya ditimpa 

nah jadi ini tidak bisa ya 
nah terus gimana dong kalo saya ingin menyimpan nama nama hari misalnya 

nah gampang saja kita bedakan saja nama variablenya bener gak?

var hari1 = 'senin';

hari1 senin misalnya terus hari2 selasa

var hari2 = 'selasa';

dan seterusnya sampai hari keberapa?

var hari7 = 'minggu';

hari ke 7 ini misalkan kalian isi dengan hari minggu 
ya ini aman bisa dilakukan 

ya tapi kalo misalkan kita punya kasus yang lain misalnya 

saya mau menampung data mahasiswa berartikan saya harus punya banyak variable mahasiswa ya ]

var mhs1 = 'muhammad muiz';

mahasiswa pertama misalkan namanya muhammad muiz

var mhs2 = 'zuddin';

mahasiwa ke 2 namanya zuddin

nah sekarang coba bayangkan didalam kampus itu ada berapa mahasiswa?
ya mungkin saja nanti nama variablenya banyak banget

var mhs2345 = 'Mz';

ya karena jumlah mahasisanya banyak

nah ini tentu saja kalian tidak mau melakukan ini 

selain karena nanti kalian akan banyak banget bikin variable 
ini akan sudah banget untuk mengelolanya, mencarinya akan susah mengubahnya akan susah mengurutkannya nanti juga akan susah 

nah untuk itulah kita butuh sebuah array 

jadi gimana solusinya dengan menggunakan javascript kita cukup bisa tulis begini
kita bikin sebuah variable misalnya untuk yang hari 

variable namanya hari, ya untuk yang saya bilang tadi array itu adalah variable yang isinya begini 

var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jum\'at', 'sabtu', 'minggu'];

itu kalian lihat itu menulisnya menggunkan kurung siku ya itu namanya kurung siku

kurung siku buka lalu didalmnya kita tulis nilainya
nilainya boleh lebih dari satu kalian pisahkan setiap nilianya menggunakan koma 

begini jadi sama punya senin koma selasa koma rabu dst
yang type datanya ini adalah string 

paham ya jadi sekarang saya punya variable hari yang berupa array 
disini dia bisa menampung lebih dari satu nilai

untuk mahasiswa gimana?
sama saja tinggal bikin variable sebuah variable namanya mhs diisi dengan kurung siku lalu mahasiswanya ada berapa

var mhs = ['muhammad muiz', 'muiz', 'zuddin'];


nanti kalian tulis saja mau ada berapa mahasiswapun boleh, pisahkan dengan tanda koma
begitu simplenya untuk membuat sebuah array

nah sekarang pertanyaannya kenapa butuh array? 
kenapa kita butuh array?

nah selain tadi mungkin ya alasannya kita tidak mungkin biki variable yang banyak banget sepeti tadi

nah coba kita lihat ilustrasinay begini 

ceritanya saya punya crayon bermacam macam warna yang banyak begitu nah tapikan kalo misalnya kalian beli crayon

itukan biasanya kita dikasih tempatnya kita dikasih tempat pencil warnanya 

kenapa kira kira?
ini supaya kita gampang mengenlolanya kita gampang mencarinya kita gampang menyimpannya 

nah tapi pertannyaan saya selanjutnya boleh gak sicrayonnya itu tidak kita masukkan ke tempat pencilnya tapi langsung kita masukkan kedalam tas misalya 

boleh gak?
ya boleh lah ya 

cuman nanti kalian akan kerepotan ketika ingin mencari misalnya 

ya contohnya kalian masukkan semua crayonnya kedalam tas terus kalian pengen cari crayon warna merah misalnya 
caranya gimana?

yang paling gampang adalah kalian keluarin saja semua crayonnya yang ada didalam tas simpan kemeja semuannya 

nanti kalian tinggal pilih oh ada warna merah ambil terus sisanya masukkan kedalam tas gitu ya 

cuman agak merepotkan ya selain jadi berantakan atau kalian tidak mau berantakan yaudah kalian tinggal masukkin tangan kalian kedalam tas cari salah satu crayonnya ambil

nah tapi kalo kalian melakukan itu kalo kaian tidak ihat isi tasnya mungkin saja kalian mengambil warna yang tidak kalian ingin kan ini ribet juga 

jadi ini kayaknya tidak bisa dilakukan 
nah itulah kenapa kita butuh tadi ya tempat pencil atau tempat crayon tadi 

karena kalian akan lebih mudah mencarinya 
buka cari crayon yang kalian inginkan selesai 

ya jadi anggap saja tempat pencil tadi adalah array yang menyimpan nilai nilianya adalah crayon tadi 

ya jadi alasannya kenapa kita pakai array adalah

1.mempermudah mengelola nilai/value/data
    untuk mempermudah melakukan pengelolaan nilai
    
    mempermudah pengelolaanya dalam hal apa? penelusuran dan pencarian 

2.memenejement memory 
    lalu tadi kenapa array? adalah efektifitas memenejement memory karena kita tidak perlu lagi bikin variable yang banyak lagi 


paham ya itu kenapa kita menggunakan array 

sekarang kita lihat lebih lanjut lagi karakteristik dari array itu seperti apa
kita lihat

karakteristik array

1.variable jamak, yang mempunyai banyak element yang diacu pada nama yang sama 
    saya ulang definisinya jadi array itu adalah disebut juga dengan variable jamak, yang mempunyai banyak element dan diacu pada nama yang sama 

2.kumpulan pasangan key dan nilai/key and value pair
    yang kedua array juga bisa disebut dengan kumpulan pasangan key dan nilai / key and value pair

3.key adalah index pada array dengan type data intejer yang dimulai dari 0 
    nah keynya apa keynya adalah index pada arraya tadi yang typenya intejer dan dimulai dari 0 

    nah ini temen temen harus inget ya dijavascript itu index array itu dimulai dari 0 

    ya dan banyak bahasa pemrogaman lain yang indexnya dimulai dari 0, tapi tidak semua 

    ada misalkan pascal, pascal itu indexnya dimulai dari 1 

4.array pada javascript bertipe object
    nah yang selanjutnya array pada javascript itu bertipenya adalah object

    ya walaupun dibahasa pemrogaman lainnya itu array adalah type data sendiri kalo dijavascript sebenarnya dia adalah object 

5.array pada javascript memiliki fungsi / method length untuk menghitung jumlah element didalamnnya 
    nah selanjutnya array pada javascript itu memiliki fungsi / method length untuk menghitung jumlah element didalamnya 
    
    jadi fungsi bawaannya untuk menghitung jumlah element didalamnya 

    walaupun sebetulnya method array pada javascript sebetulnya ada banyak ya mungkin kita coba lihat satu persatu apa saja 

6.element pada array boleh memiliki type data yang berbeda 
    dan yang terakhir ini tidak kalah penting 

    element pada array boleh memiliki type data yang berbeda 

    nah jadi javascript ini seperti php ya kalo bikin array elementnay boleh type datanya berbeda gitu ya

    tidak seperti misalnya c atau java 
    nah kalo dijava itu kita kalo bikin array itu type datanya harus sama semua 

    kalo intejer intejer semua
    kalo karakter karakter semua 

    ya jadi kalo dijavascript boleh berbeda beda 
    nanti kita lihat deh contohnya 


sekarang kita akan bahas lebih detil mengenai karakteristik ini ya 

1. key dan vallue pair
    yang pertama kita bahas dulu mengenai key and value pair ya supaya kalian paham mana yang key mana yang value 

    kita akan lakukan pada saat kita membuat array
    pada saat kita membuat array bayangkan saja kalian membuat kotak sepreti ini ya 

    ----------    ----------   ----------     
    |     | 0|    |     | 1|   |     | 2|     
    |     ---|    |     ---|   |     ---|     
    |        |    |        |   |        |
    ----------    ----------   ----------

     ----------    ----------   ----------     
    |     | 3|    |     | 4|   |     | 5|     
    |     ---|    |     ---|   |     ---|     
    |        |    |        |   |        |
    ----------    ----------   ----------

    yang tiap tiap kotaknya itu memiliki angka dan angkanya pasti dimulai dari 0 begitu 

    jadi kalo nanti kalian membuat array yang didalamnya terdapat 5 element 
    maka pada tiap tiap elementnya dia akan menyimpan index 

    jadi tempatnya itu ada nomornya 
    baru didalamnya kita bisa simpan elementnya atau nilainya 

    nah contohnya gini kita bikin array yang menampung nama nama binatang 

    ----------    ----------   ----------     
    |     | 0|    |     | 1|   |     | 2|     
    |     ---|    |     ---|   |     ---|     
    | kuciing|    |kelinci |   | monyet |
    ----------    ----------   ----------

    ---------    ----------   ----------     
    |     | 3|    |     | 4|   |     | 5|     
    |     ---|    |     ---|   |     ---|     
    |  panda |    | koala  |   |  sapi  |
    ----------    ----------   ----------

    nah ini kita bikinnya gini
    kita bikin dulu var binatang 

    lalu diisi dengan nama nama binatang tadi 
    nah dan tiap tiap nama binatan ini akan berkorelasi dengan indexnya 

    jadi panda itu indexnya 3 misalkan begitu ya

*/

// var binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];

// nah ini kalian bisa nulisnya gini atau

// var binatang = [];
// binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];

/* kalian bisa deklarasikan dulu variablenya 
kita kasih tahu kejavascript bahwa kita mau bikiin variable binatang yang bertipe array

jadi kalian kasih saja kurung siku buka dan kurung siku tutup
baru nanti kalian isi 

ya paham ya ada dua cara 
silahkan mau menggunakan yang mana 

ini pada saat kalian membuat arraynya 
nah sekarang pada saat mengakses elementnya

ya contohnya kita sudah bikin nih variable binatang yang typenya  array lalu kita isi dengan nama nama binatang 

kalo saya tulis begini 

*/
// console.log(binatang[4]);

//contole.log binatang dalam kurung siku 4 nah maka ini artinya saya mau menampilkan isi dari array binatang yang memiliki index 4 

// maka yang tampil apa kira kira? yang tampil koala ya 

/* gitu paham ya 
ya itu maksutnya key and value pair 

pasangan antara key, keynya index dan valuenya itu elementnya 


selanjutnya 

array bertype object 
    tadi kita sudah tahu bahwa array itu bertype object, nah untuk membuktikannya kalian bisa tulis saja begini 

*/

// var binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];

// console.log(typeof(binatang));

/* tampilkan keconsole type dari array binatang, ya jadi tidak ada type array yang ada nanti tipenya adalah object

ya ini untuk memastikan saja bahwa tidak ada type array dijavascript yang ada adalah object


karena ini object maka yang namanya object itu pasti memiliki fungsi didalamnya 

fungsi yang ada didalam object itu kita sebut dengan method 
nanti kita bahas ya pada saat kita belajar object 

nah kalo kita tulis methodnya langth
dengan cara kalian nulis nama arraynya lalu titik length 

ya sama kalo kalian simpan ke dalam string ya 
kalo string nanti dia menghitung berapa jumlah karakternya



*/

// console.log(binatang.length);

/* kalo kalian simpannya didalam array titik length ini akan menghasilkan angka 
ada berapa element yang disimpang didalam array binatang ini 6

ya jadi jumlah element itu berbeda dengan index 
ya jumlah elementnya 6 index terakhirnya 5 karena index mulai dari 0 


oke ya dan terakhir 

element pada array boleh beda type 
    nah ini dijavascript seperti itu ya 

    jadi contohnya seperti 

*/
// var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jum\'at', 'sabtu', 'minggu'];

// kalo yang pertama kita udah punya hari tadi  ya ini kebetulan type datanya sama

// var mhs = ['muhammad muiz', 'zuddin'];

// array mahasiswa juga sama
// nah atau kalian mau bikin array yang typenya angka misalnya 

// var angka = [1, 2, 3, 4];

// saya punya variable namanya angka diisi dengan semuanya angka boleh, kalo angka tidak perlu pakai kutip ya dia interjer 

// atau kita gabungkan type type dat ayang berbeda 

// var mayarr = ['text', 2, false];

// saya punya variable namanya myarr yang isinya ada stringya ada intejernya ada booleannya ini boleh

/* ya jadi isinya boleh apapun boleh string boleh intejer boleh boolean

bahkan kalo misalkan kalian punya function seperti ini ya 
misalkan kalian bikin function expression namanya myfunc seperti ini 


*/

var myfunc = function(){
    alert('hello world');
}

// nah function ini kalian bisa masukkan ke salah satu element pada array jadinya seperti ini 

// var myarr2 = ['text', 2, false, myfunc()];

// myarr2[3];

// jadi kalian tinggal masukkan myfuncnya kesini, jadi ada string intejer boolean dan function 

// dan yang lebih kerennya lagi kita bisa menyimpan array didalam array

// var myarr3 = ['text', 2, false, myfunc, [4,5,6]];

// nah lihat nih saya punya variable namanya myarr3 ada string ada interjer ada boolean ada function dan saya punya array lagi

/* nah ini namanya array multi dimensi, dimana kita punya array didalam array 

jadi kalo sekarang saya punya array yang tadi ya 

*/
// var myarr3 = ['text', 2, false, myfunc, [4, 5 ,6]];

// saya punya pertannyaan gimana kalo saya ingin menampilkan angka 5 keconsole?

// kira kira kalian menulis console.lognya seperti apa?

// jawaban 
// console.log(myarr3[4][1]);


/* array didalam array / array multidimensi / array bersarang 
    untuk bikin array multidimesi atau array bersarang itu tadi mengaksesnya gini ya 

    kita punya dulu arraynya ya array terluarnya 
*/
var myarr3 = ['text', 2, false, myfunc, [4, 5 ,6]];

// ada string ada interjer ada boolean ada function ada array mutidimensi 

/* dan diindex keempat isinya adalah array lagi nb:gambarkan ilustrasinya 
nah indexnya kita mulai dari 0 

0 1 2
lalu isinya 
4 5 6

nah kalo kita mau me ngakses angka 5 berarti kita lihat dulu index terluarnya 4 dan index didalamnya 1 

ya jadi ini yang akan kita pilih nanti 
paham ya 

makanya kalian cukup menuilis begini

*/

console.log(myarr3[4] [1]);

// 4 dan 1 maka hasilnya 5 

/* nah kalian boleh bikin array multidimensi ini sampai berapa dimensi pun ya  
silahkan saja kalian mau bikin array bersarang bersaran nanti kalian tinggal mengacunya dengan menambahkan kurung sikunya lagi 

nah jadi penjelasan singkat mengenai array itu seperti tadi 

mudah mudahan kalian paham secara umum array itu seperti apa 

nah nanti dimateri selenjutnya kita akan bahas lagi yang lebih detil mengenai array ini ya 

kita akan bahas
bagaimana cara mengenlola isi array, dimana kita bisa menambah dan menghapus element pada array 

jadi kita bisa bikin misalnya arraynya awalnya kosong terus nanti seiring progamnya berjalan kita isi arraynya 

atau kita sudah punya dulu arraynya ada berapa nanti kita hapus element elementnya nah itu bisa juga 

nah terus kita nanti akan coba menelusuri arraynya menggunakan looping 

lalu kita juga akan bahasa method method apa saja yang ada pada array yang bisa kita gunakan ya in untuk mempermudah mengelola array 

dan yang terakhir tidak lengkap kalo kita tidak bikin progam sederhana memanfaatkan array ini tadi 

1.mengelola array
2.menelusuri array menggunaka looping 
3.method pada array
4.studi kasus

jadi ini yang akan kita bahas

mungkin sampai disini dulu ya materi kali ini 
mudah mudahan kalian paham 

kita ketemu lagi dimateri berikutnya 
dan yang terkhir jangan lupa titik koma;

*/