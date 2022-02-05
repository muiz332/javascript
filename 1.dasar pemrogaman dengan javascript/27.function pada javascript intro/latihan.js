/* function pada javascript intro 

dimateri kali ini kita akan sebuah konsep yang sangat penting didunia pemrogaming khususnya pada javscript 

kali ini kita akan membahas mengenai function 
apa itu function gimana cara bikinnya gimana cara pakainya dan perilakunya seperti apa 

kita akan bahas pada bagian ini 

jadi kalian tidak usah khawatir dimateri kali ini kita akan membahan mengenai teorinya dulu ya

untuk prakteknya dan implementasinya mungkin kita akan dimateri materi berikutnya 

jadi function itu kalo menurut douglas crockfrord itu si jagoan javscript ya 

function itu adalah kunci utama pada javscript yang membuat javascript sangat powerfull 

nah katanya kalo misalkan didalam bahasa pemrogaman lain kalian mengenal dengan istilah yang disebut dengan method class contructor module 

nah itu dijavascript semua hal ini bisa dilakukan hanya dengan function 

nah sekarang kita lihat definisi dari function itu sendiri ya

fucntion

- function adalah sebuah sub-progam / sub-routin yang dapat dipanggil dibagian lain pada progam 

        jadi ceritannya function itu adalah sub progam atau progam yang ada didalam progam lainnya dan progam tersebut dapat dipanggil pada bagian lain pada progamnya 

        jadi kalo bingung tidak usah khwatir ya nanti kita lihat implementasinya seperti apa 

- function ini merupakan struktur dasar pembentuk dari javascript atau yang disebut juga dengan fundamental beauting
   block 

        ya jadi javascript ini dibentuk dari function function didalamnya 

- disebut juga sebagai prosedur(kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)

        jadi sebuah function dibuat untuk melakukan tugas tertentu atau mengkalkulasi sebuah nilai tertentu 

- untuk dapat menggunakannya kita harus membuat terlebih dahulu function lalu memanggilnya 

        jadi dua hal ini sangat terkait ya, kalo kalian mau pakai functionnya harus dibuat dulu baru kalian bisa pakai atau memanggil 
        nah meskipun nantinya ada function yang kalian buat sendiri ada function yang dibuatkan oleh javascript 
        gitu ya jadi nanti kita lihat 

- function itu termasuk kedalam first-class object 

        jadi kalian tidak perlu khawatir dulu dengan istilahnya nanti kita bahas lebih lanjut apa itu first-class object 


jadi itu definisi dari function ini 

lalu selanjunya kenapa sih kita harus membuat function 
kenapa kita tidak menulis progam seperti biasa saja yang sudah kita coba lalukan dibeberapa materi sebelumn ini?

nah yang pertama karena masalah Reusability atau penggunaan kembali dari code yang sudah kita buat 
ya atau istilahnya itu DRY(do not repreat yourself)

jadi maksutnya itu dari pada kita menulis code progamnnya berulang ulang ya dengan menggunakan function 
kita nantinya cukup menuliskan satu buah block progam atau sub progam cukup sekali nanti kita panggil berulang ulang gitu ya 


lalu alasan lain adalah mengenai dekomposisi / abstraksi 
ini maksutnya untuk menyembunyikan komplexsitas dari progam yang kita buat 

karena kita pecah pecah lagi bagian bagian dari progamnnya 

ya dan itu terkait dengan modularitas
ketika kita menyembunyikan komplexsitasnya dengan cara membuat progam kita sub progam atau module module ya itu nantinya akan memudahkan nantinya pada saat kita akan menelusuri kesalahan 

ya dari pada kita menelusuri baris perbaris 
dengan adanya function kita akan dengan mudah mencari dimana letak kesalahan dari progam yang kita buat pada saat proses debuging misalnya nantinya 

begitu paham ya


selanjutnya ada dua ketegori function berdasarkan pembuatannya ya 

- jadi yang pertama ada yang disebut dengan built in function 

        atau ini istilahnya function yang sudah dibuatkan oleh javascript 
        ya jadi kita tinggal pakai saja dengan gratis 

- yang kedua ada user defined function 

        nah kalo yang ini function yang kita buat sendiri 
        nanti kita lihat coba satu persatu dari kategori function ini 



yang pertama yaitu built in function 

        jadi built in function ini seperti yang sudah saya bilang 
        fungsi yang sudah disediakan atau dibuat oleh javascript 

        nah kita tinggal memanggilnya saja atau tinggal dipakai saja

        nah cara pakainya bagaimana?
        sebetulnya sampai saat ini kalo kalian mengikuti seri ini dari awal kita sudah sering menggunakan function yang dibuat oleh javascript 

        contohnya kalo kalian pernah menggunakan 
            alert();
            prompt();
            confirm();

        itu artinya kalian sudah pernah memanggil built in function karena ketiga hal ini adalah function yang memang sudah dibuatkan oleh javascript 

        jadi ada didalam librarynya javascript ada didalam browser kalian itu kumpulan fungsi fungsi yang sudah dibuat 
        nah tinggal kita sebagai developer mau pakai atau tidak function tersebut 

        kalo mau pakai tinggall panggil saja 
        paham ya


        nah ada banyak function built in didalam javacript kalian tidak perlu menghafal satu persatu 
        ya kalian cukup tau yang sering digunakan saja 

        atau kalo kalian pengen atau ada function apa saja dan cara pakainya bagaimana tinggal kunjungi saja dokumentasinya

        nah berikut ini ada beberapa contoh built in function yang ada didalam javascript ya misalnya terkait denga string 
        itu ada function yang namanya 
        charAt(), slice(), split(), toString(), toLowecase(), toUppercase(), ....

        ya atau kalian bisa lihat refrensi lengkapnya diw3scholl 

        jadi functionya banyak ya yang bisa kita pakai 

        contohnya kalo misalkan saya menggunakan function yang charAt
        charAt ini fungsinya  untuk mengetahui ada character apa didalam sebuah string 

        contohnya deh kalian bisa lihat

        saya punya sebuah variable nama yagng saya ini dengan nama saya 
        lalu saya munculkan diconsole dan didalamnnya saya tulis nama.charAt(5)



*/

// var nama = 'muizzuddin';
// console.log(nama.charAt(5));

/* nah itu artinya saya meminta ke javascript 

tolong cari tahu ada character apa diposisi ke 5 dari sebuah string 
nah kalo kita hitung sampai 5 itu kan harusnya yang muncul huruf z ya 

lalu kenapa kok muncul huruf i ?
tapi kalian harus inget javascript selalu memulai sebuah index itu dari 0 jadi yang m inikita hitung dari 0 sampai 5

jadi itulah kenapa yang muncul adalah huruf u 

atau yang lainnya misalnya dalam hal matematika ya 
ada built in function untuk matematika 

misalnya menghitung 
sin(), cos(), tan(), random(), round(), floor(), ceil(), log(), ....

tingga kunjungi di w3school 

atau contohnya nih

misalnya untuk membangkitkan bilangan random itu kalian tinggal panggil Math.random 

lalu jika saya console.log bilangannya maka akan menghasilkan bilangan random dari 0 sampai 1 


*/

// var nama = Math.random();
// console.log(nama);

/* dan masih banyak lagi built in function yang lainnya 

yang saya kasil contoh itu hanya beberapa saja 
ya karena tidak mungkin saya tulis contohnya untuk semua built in function yang ada karena banyak banget ya

jadi setelah ini tugas kalian mencari tahu ada built in function apa saja yang ada didalam javascript 

dan cari tahu juga kira kira yang sering digunakan yang mana 
lalu cara pakainya gimana gitu ya 


selanjutnya yang tidak kalah pneting adalah mengenai 

user defined function 

- fungsi yang dibuat oleh kita sendiri 

        ya karena nanti pasti kalian akan sering banget menggunakan function kalian sendiri 
        gimana cara bikinnya?

- menggunakan keyword function 

        kalian harus menggunakan keyword function 

- nama functionnya(optional)

        boleh kalian kasih nama boleh tidak 
        nanti kita lihat ya kapan kalian boleh saja tidak kasih nama untuk sebuah function 

- parameter / argument 

        nah nanti didalam function ini kita bisa berikan parameter atau argument atau bahan baku begitu ya untuk sebuah function
        bahan baku yang bisa digunakan didalam sebuah function 

        parameter ini nantinya disimpan didalan kurung buka dan tutup() stelah kita menuliskan nama function 
        parameter juga boleh ada atau boleh tidak ada, dan jika ada boleh lebih dari satu 
        dan jika lebih dari satu pisah kan parameter tersebut dengan menggunakan koma (,)

- function body dibungkus dengan {}

        sama sperti kita membuat perngulangan atau pengkondisian yang didalam kurung kurawalnya berisi kumpulan statement

- dapat mengembalikan nilai (return value) atau tidak 

        jadi function itu boleh mengembalikan nilai atau tidak 

ya jadi cara kita membuat fungsi sendiri 

nah sekarang untuk membuatnya 
kalo tadi kita sudah tahu caranya harus ada komponen pembentuknya seperti apa 

nah sekarang cara bikinnya ada dua 

membuat user defined function 

- dengan deklarasi / function deklaration

- dengan ekapresi / function exspression

ya kita lihat satu persatu bagaimana cara membuatnya 




yang pertama dengan cara deklaration

contohnya begini saya ingin membuat progam yang menghitung penjumlahan dari dua buah bilangan 
dengan menggunakan funvtion deklaration maka saya buat seperti ini 


*/

// function jumlahDuaBilangan(a, b) {

//         var total;
//         total = a + b;

//         return total; 
// }

/* dengan keyword function 
lalu nama functionnya jumlahDuaBilangan 

lalu setelah itu saya beri kurung buka dan kurung tutup tempat saya menyimpan parameter a dan b misalnya ya 
untuk digunakan nanti didalam body functionnya 

lalu didalam functionnya saya punya sebuah variable namanya total dan total itu diisi dengan a + b
jadi hasil dari parameter tadi 

dan lalu saya mengembalikan nilai total 

nah ini contoh pembuatan function deklaration 

nah selanjutnya jika saya ingin membuat function yang sama menjumlahkan dua buah bilangan tapi menggunakan function exspression saya buatnya seperti ini 




function expression 


*/

// var jumlahDuaBilangan = function(a, b) {
//         var total;
//         total = a + b;

//         return total;
// }

/* jadi kalo function exspression saya simpan function kedalam sebuah variable 

jadi saya bikin variable dengan nama yang sama jumlahDuaBilangan yang diisi dengan function 
nah kalo ini tidak ada namanya 

langsung kurung buka dan kurung tutup tempat mengisi paramternya 
dan function bodynya diisi persis sama dengan function deklaration tadi 

ya jadi ini dua cara membuat function 
yang satu dengan deklarasi 
yang satu dengan ekspresi





sekarang kalo kita lihat struktur dari function ini kita ambil function deklaration 


*/

// function jumlahDuaBilangan(a, b){

//         var total;
//         total = a + b;

//         return total;
// }

/* itu kita pasti punya sebuah keyword function ya untuk membuat functionnya 
lalu kita punya nama function ada parameter 

ada function body 
dan ada nilai kembalian atau return value 

sekali lagi parameter boleh ada boleh tidak 
kalo tidak ada parameternya kurung buka dan kurung tutupnya tetap harus kalian tulis 

ya jadi kurung buka dan kurung tutupnya jangan dihilangkan walaupun parameternya tidak ada paham ya

dan nilai kembalian juga tidak harus ada 
jadi sebuah function boleh ada returnnya boleh tidak ada 

jadi inilah struktur pembentuk function yang sangant sederhana 

nah lalu setelah kita membuat function tentu saja kita ingin menjalankannya karena percuma kalo kalian bikin function tapi tidak pernah dipanggil atau dijalankan 


ya cara menjalankannya itu cukup dengan memanggil nama functionnya diikuti dengan kurung buka dan kurung tutup 

dan jika functionnya membutuhkan parameter maka silahkan langsung isi saja parameternya 
dan kelebihannya jika menggunakan function kalian bisa panggil functionnya berulang ulang dalam satu progam seperti ini


*/

// alert(jumlahDuaBilangan(1, 2));
// alert(jumlahDuaBilangan(25, 30));
// alert(jumlahDuaBilangan(1500, 17.5));

/* jadi kalian bisa menjumlahkan beberapa bilangan sekaligus 

nah ini saya memanggil function tadi ya jumlahDuaBilangan yang saya simpan kedalam sebuah alert jadi hasilnya akan muncul didalam pop up alert 

ya jadi kalo saya jalankan 
muncul tiga buah popupp alert yang bergantian 

angka 3 muncul karena saya jumlahkan bilangan 1 dan 2 
setelah saya pencet oke muncul popup yang ke dua 

untuk menjumlahkan function yang ke dua 
setelah itu muncul popup yang ke tiga untuk menjumlahkan function yang ke tiga 

gitu jadi sederhananya membuat dan menjalankan function itu seperti ini 


baik jadi itu mungkin ya penjelasan singkat mengenai teori dasar dari function 

meskipun singkat mudah mudahan kalian sudah punya gambaran mengenai apa itu function dan kenapa sih kita harus menggunakan function dalam progam kita 

kalo masih bingung tidak usah khwatir karena selanjutnya setelah ini kita akan bahas lebih detil lagi mengenai function ini ya 

karena sekali lagi saya kasih tahu pemahaman mengenai function ini sangat penting agar kalian dapat membuat progam yang lebih komplexs kedepannya 

nah topik apa saja nanti yang harus kita pahami 

jadi nanti kita akan pahami lebih lanjut ya mengenai user defined function ya 

lalu kita juga cari tahu apa perbedaan yang lebih detil lagi mengenai function deklaration dan function exspression 

lalu kita juga akan bahas lagi mengenai parameter atau argument 
lalu kita akan bahas mengenai return value digunakan untuk apa kapan boleh ada boleh tidak ada

ada juga yang penting mengenai scop atau lingkup dari function 

ya nah ini penting sekali untuk kalian pahami karena topik ini pasti akan sangat membingungkan untuk kalian yang baru belajar mengenai pemrogaman 

lalu ada lagi yang disebut dengan refactoring yaitu bagaimana cara kita agar lebih efektif lagi menuliskan code progam kita ya ini erat kaitannya dengan function 

lalu juga mungkin kita akan bahas mengenai hoisting ya adalah sebuah konsep yang harus kalian pahami tentang bagaimana perilaku dari interpreter dari javascript dalam membaca baris baris dari progam kita 

lalu ada konsep yang disebut dengan closure nah ini terkait dengan funtion exspiression 
ya jadi bagaimana membuat function expression yang lebih komplexs lagi 

lalu mungkin terakhir mengenai function ini kita akan membahas mengenai recurtion 

ya mungkin topik topik yang terkhir ini adalah topik yang cukup komplex dan membingungkan 
tapi nanti saya akan coba menjelaskannya sedetil mungkin 

khusus untuk recurtion ini simplenya adalah bagaimana sebuh function itu bisa memanggil dirinya sendiri 
ya mungkin agak aneh ya 

tapi kita lihat deh nanti gimana implementasinya 

ya jadi itu mungkin masih panjang perjalanan kita untuk memahami function ini tidak usah khawatir dipahami saja pelan pelan 

ya itu saja mungkin 

kita ketemu lagi dimateri yang akan datang dan satu lagi jangan lupa titik koma ; */

alert('selamat datang diprogam mencari akar\nkuadrat dari sebuah angka');

for(var ulang = true; ulang === true; ulang = confirm('lagi?')){

        var nilaiUser = parseInt(prompt('masukkan angka yang mau dikuadratkan'));

        alert(kuadrat(nilaiUser));

        function kuadrat(p){
                var akar;
                akar = Math.sqrt(p);

                return akar;
        }
}

alert('terima kasih');
