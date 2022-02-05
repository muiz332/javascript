/* membuat dan menjalankan function pada javascript

kita lanjutkan pembelajaran kita mengenai function pada javascript 

kalo dimateri sebelumnya kita sudah bahas sekilas faunction itu apa dimateri kali ini kita akan bahas lebih detil lagi mengenai bagaimana cara membuat sebuah function 

tapi sebelumnya kita bahas dulu cara kerja dari function itu sendiri ya 
jadi sederhananya seperti ini 

ketika kita bekerja dengan sebuah function maka biasanya kita akan memiliki sebuah input 
atau sebuah nilai yang nantinya akan menjadi bahan atau istilahnya material ya bahan baku 
yang nantinya akan kita masukkan kedalam function 

         INPUT               ====>       FUNCTION               ====>        OUTPUT 
masukkan bahan / material           lakukan sesuatu terhadap             menghasilkan sesuatu 
  kedalam function                   bahan / material tadi 



lalu nanti function itu sendiri akan mengerjakan sesuatu atau melakukan sesuatu terhadap bahan baku atau material tadi sehingga nanti akan menghasilkan output yang baru atau nilai yang baru 


ya jadi secara umum cara kerja dari function itu seperti ini 

nah function yang baik adalah function yang hanya mengerjakan satu hal saja secara spesifik begitu 

jadi kalo saya ilustrasikan contohnya seperti ini 
atau saya kasih pertanyaan ke kalian

pernah gak kalian menemukan sebuah alat atau sebuah mesin atau sebuah mekanisme yang bisa menerima inputan yaitu padi misalnya ya lalu menghasilkan nati goreng misalnya ? kayaknya tidak ada ya 

karena untuk merubah padi menjadi nasi goreng yang siap dimakan itu sepertinya membutuhkan tahapan yang panjag ya proses yang sangat panjang ya 

misalnya dari padi itu kita akan masukkan ke sebuah alat yang fungsinya untuk merubah padi menjadi gabah 
nah setelah itu gabah juga akan dimasukkan kedalam mesin yang lain yang fungsinya merubah gabah tadi menjadi beras 

lalu sampai sini apakah selesai? belum ya untuk menjadi maka beras ini akan diproses dulu menggunakan rice cooker 

nah tapi dari beras masuk ke rice cooker apakah jadi nasi? tidak ya 
nah ini membutuhkan satu buah inputan yang lain yaitu air 

jadi mesin ini membutuhkan lebih dari satu input 
yang pertama beras dan yang kedua air 

nah lalu yang terakhir nasi juga akan diproses lagi dengna tambahan bahan baku yang lain
lalu dimasak sehingga jadilah sebuah nasi goreng yang siap untuk dimakan 

begitu ya jadi prosesnya panjang 

nah kalo kita lihat kenapa harus melalui proses yang panjang seperti itu 
ya ada beberapa hal seperti tadi yang saya tanya diawal 

kayaknya tidak ada gitu sebuah mesin yang dapat melalukan semua hal itu sekaligus 
kalo mungkin ada mungkin kita akan khawatir dengan kualitasnya kebersihannya dan lain sebagainya 

ya jadi melalui tahapan yang panjang masuk ke mesin atau alat yang fungsinya spesifik 
sehingga nanti itu akan menjadi bahan untuk kita untuk mengetahui dan menelusuri jika ada kesalahan 

contohnya gini ketika kalian makan nasi gorengnya ada yang masih keras nasinya misalnya 
ini kalian pasti akan mikir 
wah rice cookernya ada yang tidak bener nih

jadi kalian sudah bisa tahu bagian mana yang melakukan kesalahan nah gitu ya




jadi ketika kita lihat kedalam function didalam pemrogaman nah itu mirip ya 

- function ini adalah sebuah block code yang digunakan untuk melakukan tugas yang spesifik 

        jadi nanti kalo misalkan kalian membuat sebuah function didalamnya mengerjakan banyak hal 
        nah itu ada kemungkinan kalian melakukan kesalahan ya

- block codenya dapat dipanggil berulang ulang kali

        nah ini kelebihan dari function 
        kenapa?
        sehingga nantinya 

- memudahkan kita untuk melakukan penlusuran 

        kalo ada kesalahan kita gampang nanti untuk mengetahui bagian mana pada progam kalian yang eror 
        ya dan ini terkait dengan 

- reusability
 
        atau penggunaan ulang dari code progam kita 

begitu 

ya jadi ini penjelasan lebih detil mengenai function 

atau supaya kalian lebih paham lagi kita masuk ke contoh kasus ya

misalnya gini sederhana saja ya 

misalkan kita dihadapkan dengan kasus seperti ini

ceritannya saya punya dua buah kubus ya kita sebut saja kubus a dan kubus b

ya kalian inget ya setiap kubus itu memiliki sisi yang sama 

misalnya kita akan membuat progam untuk menjumlahkan volume dari kedua buah kubus ini 

nah simple saja ya 
kira kira dengan cara matematik ini kita menyelesaikannya gimana?
kita lihat ya 


menjumlahkan volume dari dua buah kubus 

kita liaht algoritmanya 
yang pertama 
 
yang pasti kita harus ketahui dulu berapa sisi masing masing tiap kubusnya 
kubus a dan kubus b tadi 

ya kita ambil contoh saja misalnya kubus a sisinya 8 dan kubus b sisinya 3 

setelah ini kita harus hitung volume dari masing masing kubusnya 
gimana ngitung volume sisi kali sisi kali sisi 

jadi kita hitung dulu volume kubus a 8 akar pangkat 3 = 512
lalu kita  hitung kubus b 3 pangkat 3 = 27 

nah setelah didapat masing masing volume dari kubusnya kita jumlahkan hasilnya 
jadi kita jumlahkan 512 + 27

dan terakhir kita akan dapatkan hasilnya lalu istilahnya 

mengembalikan nilai jawabannya 
nah ini berapa nilainya 539 

gitu ya jadi ini cara kita secara matematik untuk menjumlahkan volume dari dua buah kubus 

nah sekarang kalo kita ingin bikin pakai javascript coba bagaimana codenya? 

nah silahkan coba 
nah sekarang saya minta buat code javascriptnya sendiri 

hentikan dulu nanti kalo sudah selesai lanjutkan lagi materinya nanti kita coba lihat sama tidak kita bikinnya ya 



ya jadi ceritannya kita akan buat sebuah progam yang menghitung volume dari dua buah kubus 
kita bikinnya tanpa menggunakan function dulu 

jadi yang pertama kita harus ketahui dulu sisi dari masing masing kubusnya  
jadi misalkan gini

saya punya sebuah variable a gitu ya untuk mengetahui sisi dari a nya saya isi dengan 8 
lalu kubus yang ke 2 sisinya b yang diisi dengan sisinya 3 

lalu nanti untuk menampung volumenya saya juga butuh varialbe misalnya namanya volumeA
inget ya nama variable tidak boleh ada spasi 

lalu kita punya volumeB 

dan yang terakhir untuk menyimpan jumlahnya kita butuh variable baru kita kasih saja namanya total misalnya 

gitu ya jadi kita siapkan dulu tempat menampungnya wadahnya baru sekarang kita lakukan proses matematiknya 



*/

// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;


/* yang pertama untuk menghitung volumeA gimana caranya?
gampang saja ya 
sisi a kali sisi a kali sisi a

untuk menghitung volumeB sisi b kali sisi b kali sisi b 

dan yang terakhir totalnya adalah jumlah dari volumeA ditambah dengan volumeB 

ini kalo kita save kita jalankan maka akan kosong karena kita belum memunculkannya 



*/


// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// alert(total);


/* jadi kalo pengen lihat hasilnya kita simpan saja di console ata menggunakan alert

kita kembali ke browser refresh 
nah maka muncul tuh jumlahnya atau totalnya 539

nah ini ketika kita menjumlahkan volume dua buah kubus seperti ini oke 

sebenernya tidak ada masalah codenya sudah berjalan dengan baik 
nah tapi bagaimana kalo misalkan saya punya dua buah kubus baru?

misalnya kubus c dan kubus d yang memiliki sisi yang berbeda juga 

coba kita kita gimana?

itukan artinya kita harus punya variable baru var c misalnya yang diisi dengan sisi 10
dan d yang kita ini dengan 15 

terus kita hitung lagi volumeC dan volumeD ya dan disini mulai tidak efektif 
ya kita punya banyak variable lalu kita melakukan hal yang sama berulang ulang 

nah itu kurang efektif nah disinilah kita butuh sebuah function 

supaya kita tidak perlu lagi mengulang ulang hal yang sama 

paham tidak ?

nah gimana bikin functionnya kita lihat 



ya jadi membuat functionnya seperti ini 


- keyword function

        yang pertama kalian butuh sebuah keyword function 
        nah keyword function ini gunanya untuk memberi tahu unterpreter javascript bahwa kita akan mulai menulis sebuah fungsi 

- bungkus function menggunakan kurung kurawal buka dan tutup 

        lalu kita bungkus functionnya menggunakan kurung kurawal sebagai penanda bahwa ini adalah awal dan akhir sebuah fucntion 

- beri nama pada function(optional)

        kita harus beri nama  functionnya dengan nama yang menjelaskan apa yang akan kalian lakuakn didalan functionnya 

        jadi kalian kasih namanya itu harus jelas jangan kasih nama asal asalan tanpa menjelaskan apa yang dikerjakan didalamnya 

        ya jadi berikan nama function yang cukup jelas
        namanya agak panjang tidak masalah ya 

- lalu kalian selalu tuliskan kurung setelah nama functionnya 

        kurung tersebut yang nantinya akan kita gunakan sebagai tempat untuk menyimpan parameternya atau bahan baku 
        yang nantinya kita akan gunakan bahan baku ini didalam functionnya 

        parameter ini atau argument ini adalah data atau nilai yang dikirim dari luar pada saat nanti functionnya dipanggil untuk nanti digunakan didalam function

        nanti kalian anggap saja parameter ini sebagai variable khusus yang bisa digunakan didalam function 

        parameter itu boleh ada boleh tidak 
        ya jadi boleh kosong nih kurungnya tapi kurungnya tetap harus ada meskipun parameternya tidak ada 
        gitu jadi kalo tidak ada parameternya kurung harus tetap ditulis 

        tapi kalo ada parameternya boleh kalian tulis sebanyak mungkin sesuai kebutuhan 

- return value 

        nah selanjutnya sebuah funtion itu biasanya mengembalikan sebuah nilai 

        cara mengembalikannya kalian menggunakan keyword return lalu diikuti dengan nilai kembaliannya apa 

        nah kegunaan dari return ini adalah untuk memberi tahu si interpreter javascript bahwa kita telah selesai mengerjakan sesuatu dan inilah hasilnya 

        ya jadi return itu gunanya seperti itu 

        dan juga return ini digunakan sebagai cara untuk memberhentika functionnya
        jadi nanti ketika code kita telah sampai dikeyword return functionya berhenti berjalan 

        nah ini penting kalian pahami karena mungkin saja didalam function kalian nanti akan ada dua return 
        nah return nya mungkin nanti disimpan didalam block pengkondisian misalnya 

        jadi if apa returnya yang mana 
        else return yang lain gitu

        ya jadi mungkin saja didalam function ini mengembalikan dua nilai tapi tergantung kondisinya apa 



jadi kalo kita masukkan algoritma penghitung volume kita tadi 

ya yang pertama ketahui sisi masing masing kubus 
nah ini sudah ya nanti kita simpan kedalam parameternya 

lalu kita juga sudah bisa mengembalikan nilai jawabannya menggunakan return ini 

sehingga kita bisa punya total


*/

// function jumlahVolumeKubus(a, b){

//         var total;
        

//         return total;
// }

/* ya bikin dulu totalnya nanti fungsi ini akan mengembalikan total
lalu tinggal dua lagi yang akan kita lakukan 

kita tinggal tulis seperti tadi volumeA berapa 
volumeB berapa 
dan total berapa 



sekarang coba kita lalukan didalam code kita 


jadi sekarang kita punya function lalu nama functionnya jumlahVolumeDuaKubus gitu ya 
jangan lupa kasih kurung 

lalu nanti ini parameternya ada a dan b pisahka dengan menggunakan koma 

lalu jangan lupa dengna menggunakan kurung kurawal 
dan disini baru kita jalankan perintah peritahnya 


*/

// function jumlahVolumeDuaKubus(a, b){

//         var volumeA;
//         var volumeB;
//         var total;

//         volumeA = a * a * a;
//         volumeB = b * b * b;

//         total = volumeA + volumeB;

//         return total;

// }

/* kita bikin variable untuk menyimpan volumeA 
variable untuk menyimpan volumeB 
dan variable untuk menyimpan total 

lalu kita hitung satu satu 

volumeA itu menghitung sisi a 
volumeB itu menghitung sisi B 

dan terakhir total itu menjumlahkan volumeA ditambah volumeB

dan volumenya akan mengembalikan nilai apa? total ya 

begini

nah jadi sekarang kita punya sebuah function nih 

nah ini kalo kita jalankan 
belum tampil apa apa 

ya karena function ini baru kita buat saja belum kita jalankan 

nah itu dua hal yang berbeda ya 

ini baru kita buat 

nah cara menjalankannya bagaimana?


cara menjalankannya simple saja kalian cukup tuliskan nama functionnya 
ikuti dengan kurung buka dan kurung tutup 

lalu jika ada parameter simpan parameternya didalam kurung 

ya misalkan 8, 3



*/ 

// jumlahVolumeDuaKubus(8, 3);

/* nah ini artinya 

8 akan dikirim sebagai paramter a dan 3 nanti akan dikirim sebagai parameter b 

jadi nanti 8 akan masuk ke volumeA dan 3 akan masukke volumeB

nah sekarang gimana kalo kita jalankan 
saya save lalu saya refersh 

nah ternyata sama ya tidak tampil apa apa juga 
kenapa ini karena sama seperti kita coba tadi 

ini baru dieksekusi atau dijalankan 

sebetulnya nilainya sudah ada didalam memory 
tapi belum kita tampilkan saja ke layar 


ya kalo mau ditampilkan kalian bisa saja tuliskan didalam console atau didalam alert 

*/

// alert(jumlahVolumeDuaKubus(8, 3));

/* kalo saya refersh nanti dia akan muncul 


paham ya itu membuat dan menjalankan function 

nah sekarang enaknya gini kalo kita sudah membuat function 
nah kita bisa jalankan berulang ulang 

misalnya kita sudah coba hitung kubus 8 dan kubus 3 
misalkan saya sekarang mau hitung yang lain 

sekarang saya punya kubus 10 dan kubus 15
ini saya bisa hitung berulang ulang



*/

// alert(jumlahVolumeDuaKubus(10, 15));

/* kalo saya jalankan muncul ya kubus yang pertama 
kalo saya oke 

nah ini muncul hasil kubus yang ke 2 

jadi ini maksutnya 
kita buatnya sekali tapi kita bisa panggilnya berulang ulang kali menggunakan bahan baku yang berbeda beda 

gitu ya 
mudah mudahan kalian paham nih 

baik jadi mungkin itu ya penjelasan mengenai cara kita membuat function 
mudah mudahan kalian paham dengan penjelasan singkatnya 

dan nanti dimateri selanjutnya kita akan bahas lagi penjelasan lebih lanjut mengenai function 

jadi kalian tidak usah khawatir kalo sekarang masih merasa agak kebingungan 

ya sampai disini dulu materinya 

kita ketemu lagi dimateri berikutnya 

dan satu lagi jangan lupa titik koma ; */