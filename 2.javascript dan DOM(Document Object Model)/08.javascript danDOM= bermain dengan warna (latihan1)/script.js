/* javascript dan DOM: bermain dengan warna

nah setelah dimateri materi sebelumnya kita sudah tahu apa itu DOM dan gimana cara penggunaannya 

dimateri kali ini kita akan latihan untuk menerapkan apa yang sudah kita pelajari dimateri sebelumnya kedalam sebuah study kasus sederhana

dan untuk latihan dimateri kali ini sederhana saja kita akan bermain dengan warna 

ya jadi nanti kita akan coba memanipulasi warna pada halaman web kita menggunakan method dari DOM yang sudah kita pelajari 



kita buat dulu ya struktur html sederhananya 
kita tambahkan h1 bermain dengan warna

ya jadi nanti kita bisa lihat bagaimana DOM ini memanipulasi node node atau element element pada halaman yang ada kaitannya dengan warna

yang pertama apa yang akan kita lakukan

1.membuat sebuah tombol 
    yang pertama simple saja, saya mau buat sebuah tombol dibawah h1

    yang ceritanya kalo tombolnya saya klik maka warna backgroundnya berubah menjadi warna favorit kalian masing masing

    kalo misalkan sudah tahu caranya silahkan kerjakan duluan

    bikin tombolnya boleh menggunakan javascript menggunakan manipulation node



oke sekarang kita coba sama sama 

saya bikinnya pakai html saja ya 
bikin button yang tulisannya ubah warna 

lalu tombol ini saya kasih atribut type yang namanya button

tombol itu typenya ada 3 ya ada button, submit dan reset
kita bikin button saja karena untuk submit dan reset kita butuh form

biar gampang nangkapnya saya kasih id misalnya tUbahWarna

sekarang kita bikin scriptnya 
nah apa yang akan kita lakukan?

yang pertama tangkap dulu buttonya 
yang kedua tangkap element yang akan kita tuju dalam hal ini adalah bodynya

*/

// tangkap tombol
// const button = document.getElementById('tUbahWarna');

// // kita tambahkan eventnya 
// // misalnya saya ingin pakai onclick
// button.onclick = function(){
//     // ketika button diklik jalankan function
//     // functionnya ubah warna background color dari body menjadi misalnya lightblue
//     // khusus untuk body dan head kita tidak perlu menggunakan method untuk menyeleksi langsung saja begini

//     document.body.style.backgroundColor = 'lightblue'
// }

/* coba kita save lalu jalankan
klik nah berubah ya 

berhasil ya jadi kita sudah berhasil menyeleksi element, mendengarkan event,  dan menjalankan event

nah sekarang gimana kalo saya ingin kalo saya klik sekali itu dia berubah jadi biru muda 
tapi kalo saya klik sekali lagi kembali lagi jadi putih

nah gimana kira kira caranya?
nah ini bisa kita lakukan dengan memanipulasi class 

sekarang gini gimana kalo saya buat cssnya yang namanya ubahwarna lalu mengubah background colornya
.ubahwarna{
    background-color: lightblue;
}
oke jadi saya buat class baru


nah sekarang saya akan melakuka ini 
ketika tombol diklik saya akan menambahkan class pada bodynya 
dan ketika tombol saya klik lagi hapus classnya 

nah itu inget gak pakai apa?




*/

const button = document.getElementById('tUbahWarna');

button.onclick = function(){
    // kita pakai classList untuk memanipulasi class

    // apa yang akan kita manipulasi?
    // kita gunakan sebuah method yang namanya toggle 

    // jadi toggle itu jika element tidak mempunyai nama class tertentu tambahkan classnya
    // jika elementnya mempunya nama class tertentu hapus nama class tersebut

    // apa nama classnya? biru-muda
    document.body.classList.toggle('biru-muda');
}

/* kita jalankan coba

kalo saya klik tambah classnya berubah backgroundnya menjadi biru muda
kalo saya klik lagi classnya dihapus backgroudnnya kembali seperti semula

paham ya itu menggunakan classList
itu kasus yang pertama



2.acak warna
    kasus yang kedua saya akan membuat sebuah tombol baru
    tapi sekarang ketika tombol baru saya klik itu warna backgroundnya tidak berubah menjadi warna favorit saya 

    tapi begitu saya klik warna backgroundnya berubah secara random
    kalo diklik pertama mungkin dia jadi hijau diklik lagi mungkin jadi merah dan seterusnya 

    nah gimana coba caranya
    tapi sekarang saya ingin buat tombolnya menggunakan javascript ya 


yang pertama kita akan buat dulu tombolnya
bikin tombolnya, bikin tulisan untuk tombolnya, lalu kita rangkai

kalo tombolnya sudah ada baru kita simpan tombolnya setelah tombol yang lama

paham ya 
kita coba

*/

// bikin tombolnya
const tAcakWarna = document.createElement('button');
// bikin isinya
const textAcakWarna = document.createTextNode('acak warna');
// lalu kita rangkai
tAcakWarna.appendChild(textAcakWarna);

// lalu saya ingin tombolnya punya atribut yang namanya yang valuenya button sama seperti tombol yang lama
tAcakWarna.setAttribute('type', 'button');

// jadi kita siapin dulu tombolnya, ketika kita simpan ketempat yang kita inginkan sudah rapi beserta atributnya

// tinggal kita simpan ketempat yang kita inginkan
// saya mau menyimpannya setelah tombol yang lama
// kita bisa pakai appendChild kita bisa pakai insertBefore
// atau kita bisa pakai yang baru kita punya after kita punya before
// jadi kalo saya lihat saya ingin menyimpannya setelah button yang lama
// jadi saya bisa pakai after

// tangkap dulu button yang lama (kita sudah punya ya diatas)
button.after(tAcakWarna);

/* bacanya  javascript tolong dong setelah button tambahkan tAcakWarna
coba jalankan

ada dua ya berdampingan itu karena displaynya inline
kalo kita check elementnya 
sudah ada button yang atributnya type valuenya button yang isinya acak warna

sekarang tinggal kita kasih event buat tombol baru ini

*/

tAcakWarna.addEventListener('click', function(){
    // katika diklik jalankan function, ada yang menyebutnya ini call back ya
    // nah saya ingin ketika diklik warnanya random 
    // jadi gini warna itu bisa kita isi dengan 3 nilai ya 
    // nama warna, heksa desimal, rgb

    // jadi saya bisa tulis rgb
    // document.body.style.backgroundColor = 'rgb(0, 0, 0)'
    /* merah hijau dan biru

    nilainya mulai dari 0 sampai 255
    kalo semua warnanya minimal(0) maka dia hitam
    kalo semua warnanya maximal(255) maka dia putih

    sekarang kita akan cari cara supaya warna ini random
    nah gimana caranya?

    nah kita pakai Math.random
    */

    // const r = Math.random()
    /* ini akan menghasilkan nilai random 0 sampai 1
    nah tapi saya ingin nilai randomnya itu antara 0 sampai 255

    caranya ada rumusnya 

    kalian bisa kali ini dengan 255 lalu ditambah dengan 1
    maka ini akan menghasilkan nilai antara 0 sampai 255
    */
//    const r = Math.random() * 255 + 1
//    // kita lihat
//    console.log(r)
   /* nah tidak akan lebih dari 255 ya
   tinggal kita hilangkan komanya

   kita bisa bulatkan ya
   kebilangan terdekat saja
   
   */
  const r = Math.round(Math.random()* 255 + 1);
//   console.log(r)
   // nah tinggal kita masukkan nih r ini sebagai angka angka didalam rgb 
   // saya gabungkan menggunakan concate

//    document.body.style.backgroundColor = 'rgb(' + r + ',0,0)'

   // sekarang kalo saya tulis begini maka nilai merahnya akan random
   // ini baru nilai merahnya saja hijau dan birunya belum

   // nah kita akan lakukan hal yang sama untuk hijau dan biru

   const g = Math.round(Math.random()* 255 + 1);
   const b = Math.round(Math.random()* 255 + 1);

   // tinggal kita ganti saja valuenya 
   document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

/* save lalu refresh 
tuh sekarang kalo diklik warnanya sudah random

gabungan atau kombinasi antara merah hijau dan biru


begitu temen temen untuk kasus yang kedua yaitu merubah warna secara random mengguakan tombol




3. element html 5
    nah untuk kasus ketiga ini kasus yang lebih seru lagi ni
    kita akan gunakan element dari html 5

    ceritanya dibawah element br ini saya mau bikin sebuah slider
    element form yang bisa digerakkan kekiri kekanan

    itu kita bisa gunakan input yang typenya adalah range
    nah ini kalo kita jalankan ada slidernya ya 

    nah jadi saya ingin membuat 3 buah slider
    slider yang pertama untuk mempresentasikan warna merah
    yang kedua untuk warna hijau dan yang ketiga untuk warna biru


    nah nanti kita akan menggerakkan slidernya sebagai pengganti dari komposisi kadar warna tersebut

    jadi kalo misalkan saya geser kekanan penuh ini merahnya 255
    kalo kekiri penuh ini merahnya 0

    nanti saya bikin lagi dua buah slider

nah coba gimana caranya?
kita kasih atribut name dulu didalam inputnya

range ini adalah element dari html 5  mungkin saja ada browser yang tidak support 
kalo tidak support type dari inputnya akan berubah menjadi text

paham ya 
nah sekarang kita kasih atribut nama misalnya merah

lalu sebelum tiap tiap slidernya saya mau kasih kotak kecil untuk menandai warna apa yang akan diubah oleh slidernya

kotak pertama saya kasih warna merah karena menandakan slider pertama mengubah warna merah
kecil saja ya kotaknya 



coba jalankan 
nah sudah ya 

kalo yang hijau dan biru belakangan karena kalo sudah jadi satu gampang nantinya 


nah kita tangkap dulu slidernya


*/

// const sMerah = document.querySelector('input[name=merah]');

// jadi ini bacanya javascript tolong carikan saya input yang memiliki atribut name yang valuenya merah

/* nah sekarang event apa yang mau didengarkan ketika element inputnya digeser geser?

nah kita bisa gunakan event yang namanya change
nah tapi change ini ada kekurangannya sedikit ya  

eventnya akan jalan ketika kita lepas kliknya 
jadikan diklik tahan geser belum berubah begitu dilepas baru berubah

kan kayaknya akan lebih keren begitu saya geser langsung berubah ya 
nah itu eventnya bukan pakai change 

nah ada yang namanya input 
kalo ini dia real time begitu digeser dia akan berubah

kita bisa pakai yang input ya
ya jadi kalian bisa tulis gini
*/

// sMerah.addEventListener('input', function(){
//     // nah sekarang kita akan menangkap nilainya 
//     //nilai dari slidernya jadi kalo slidernya digeser paling kanan mengembalikan nilai 255 kalo paling kiri 0 
//     // nah caranya gimana? kita bisa ambil valuenya 
//     // tapi sebelumnya kita pergi kehtmlnya kita kasih tau bahwa slider ini nilai minimalnya adalah 0 lalu nilai maksimalnya 255
//     // jadi nilai yang akan diambil adalah 0 sampai 255
//     // sekarang bagaimana cara mengambil nilainya?
//     /* kalian bisa pakai sMerah.value

//     ini buat mengambil nilai yang ada didalam element input
//     apapun element inputnya mau textfild radiobutton mau checbox 

//     apapun itu kita bisa ambil valuenya 
//     coba kita console.log dulu ya
//     */
//     console.log(sMerah.value);

// })

/* coba jalankan nah tuh ada ya nilainya 0 sampai 255
nah ini akan saya gunakan sebagai pengubah warna rednya 

nah gimana caranya 
kita tulis saja begini

*/
// sMerah.addEventListener('input', function(){
//     // nah kita ambil dulu nilainya ketika digeser
//     const r = sMerah.value;
//     // lalu saya ganti nilai rgbnya dengan r nya 
//     document.body.style.backgroundColor = 'rgb(' + r + ',0,0)'
// });

/* nah sekarang kita coba 
coba geser ini baru merah ya 

jadi ini semakin digeser kekanan merahnya semakin tinggi tapi hijau dan birunya tetap 0 karena kita belum bikin slidernya

sudah ya jadi begitu digeser berubah
paham gak? mudah mudahan paham ya

ini baru slider merah sekarang kita bikin slider hijau dan birunya 

kita bikin dulu dihtmlnya ya 


sekarang kita bikin dia jalan
tangkap dulu ya element elementnya
*/

const sMerah = document.querySelector('input[name=merah]');
const sHijau = document.querySelector('input[name=hijau]');
const sBiru = document.querySelector('input[name=biru]');

// nah sekarang kita tambahkan eventnya ditiap tiap input ketika digeser background bodynya berubah

sMerah.addEventListener('input', function(){
    // sekarang kita ambil semua nilai dari input ini untuk mengatur warnanya 
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor  = 'rgb('+ r + ','+ g + ',' + b +')'
})

// nah ketika digeser berubah warnanya 
// kita buat yang hijau dan biru ketika digeser warnanya juga berubah

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor  = 'rgb('+ r + ','+ g + ',' + b +')'
})

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor  = 'rgb('+ r + ','+ g + ',' + b +')'
})

/* nah coba jalankan 
nah silahkan deh geser geser 


dan ini bisa kalian gunakan untuk apa terserah ya 
misalnya kalian ingin usernya mengatuh sendiri warnanya silahkan tinggal geser geser saja

sampai disini temen temen bingung gak?
ya jadi ini sedikit yang bisa dilakukan oleh DOM untuk mengatur sebuah halaman 

kalo kalian ngerti DOM kalian udah punya kuasa terhadap element html apapun yang ada didalam website kalian


4. bermain dengan cursor

    sekarang kita juga akan bermain dengan cursor
    jadi ceritanya gini sekarang

    saya ingin ketika saya gerakkan mousenya kemanapun maka warna backgroundnya akan berubah 
    ya kalo saya gerakkan cursornya maka berubah terus

    ya jadi ini lebih keren lagi
    nah untuk melakukan ini idenya begini

    kita akan bekerja dengan posisi mouse 
    jadi nanti saya akan cari tau koordinat posisi dari cursornya ada dimana terhadap halaman ini

    dan nanti koordinatnya akan relatif terhadap tinggi dan lebar browsernya 
    koordinat itukan sumbu x dan sumbu y

    jadi kalo misalkan cursornya saya letakkan disebelah kiri pojok atas maka nilai dari x dan y nya adalah 0 
    dan ketika cursornya disebelah kanan pojok bawah maka nilai x dan y nya akan 255

    tergantung lebar dan tinggi dari browsernya 

nah kita coba 


sekarang apa yang akan kita lakukan?
nah yang pertama yang akan kita tangkap adalah bodynya

kenapa bodynya? karena nanti didalam bodynya kita bisa mengatur pergerakan mouse didalamnya 

jadi saya bisa tulis begini
*/

// eventnya namanya mousemove
document.body.addEventListener('mousemove', function(event){
    // jadi ketika sibody ini didalamnya kita gerakkan mousenya 
    /* ketika mouse bergerak didalam body jalanka function berikut
    
    nah sekarang kita akan cari tahu dua hal

    yang pertama kita cari tahu posisi mouse
    ada dua ya sumbu x dan sumbu y 

    nah gimana cara cari tahunya?
    kita bisa gunakan sebuah method yang namanya clientX untuk sumbu x dan clientY untuk sumbu y

    nah tapi clientX / clientY ini harus nempel pada sebuah object dan objectnya harus dikirim kedalam function 

    nah ini kalian tidak perlu bingung dulu ya 
    pokonya ada argiment yang dimasukkan ke parameternya biasanya namanya event atau e 

    dan nanti ini akan saya bahas dimateri lebih lanjut ya
    tapi untuk sekarang anggap saja ini adalah sebuah object yang terkait dengan event ya

    jadi kalo saya tulis begini 
    event.clientX
    saya bisa tahu posisi x ketika cursornya digerakkan 

    kalo saya tulis didalam console.log
    */

    // console.log(event.clientX)
    // kita lihat
    // sumbu x itu kekanan ya jadi kalo saya gerakkan kekanan nilainya akan menambah terus
    // kalo saya gerakkan kebawah tidak bertambah karena itu sumbu y 

    // paham ya jadi kita sudah tahu tuh cara cari tahu koordinat cursornya 

    // terus ada lagi ukuran browser untuk membatasi koordinat dari sumbu x / y nya jadi mulai dari 0 sampai 255

    // itu kita gunakan object window bukan object document karena browser itu adanya didalam object window
    // jadi kalo saya tulis begini

    // console.log(window.innerWidth);

    //nah innerWidth untuk mengetahui lebar dari kotak putihnya saja 
    // begitu mouse saya gerakkan maka muncul nilai dari lebar documentnya 

    // nah nanti kita apain angka angka itu?

    /* nah sekarang idenya begini
    saya ingin mendapat angka 0 sampai 255 ketika mouse digerakkan 

    saya bisa tulis begini

    */
//    const xPos = (event.clientX / window.innerWidth) * 255

   // jadi ini posisi x saya bagi dengan lebarnya dan dikali 255
   // misalnya posisi x 1 bagi 280 * 255

//    console.log(xPos)

   // tuh nilainya tidak akan lebih dari 255
   // nah supaya bulet kita tambahkan math.round

   const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//    console.log(xPos)

   // nah sumbu x akan mengganti red 
   // sumbu y akan mengganti green
   // nah karena kita punya 2 sumbu berarti nilai bluenya saya tetapkan saja 



   // tinggal kita bikin lagi posis y 
   // clientY dan innerHeight

   const yPos = Math.round((event.clientY / window.innerHeight) * 255);

      // nah sudah bulat ya tinggal kita masukkan kedalam kadar warnanya 

      document.body.style.backgroundColor = 'rgb('+ xPos + ',' + yPos + ', 100)'

});

/* kita coba 
nah sudah berubah ya 

sekarang kapanpun kita gerakkan dia akan berubah

nah tapi ini ada sedikit bug ya 

kalo saya masukkan mousenya kebawah dia tidak berubah 
tapi ketika mousenya saya geser keatas sedikit dia baru berubah 

nah ini kenapa?
ini terjadi karena kita simpan listenernya didalam body

harusnya body itu satu kotak putih ini ya 
tapi content kita belum sampai satu kotak sampai slider yang ketiga

dibawahnya tidak ada lagikan?
jadi sebetulnya  yang ada dibawah slider ketidak tidak dianggap sebagai body

sekarang kita harus bikin bodynya penuh
caranya kalian pakai css saja 

jadi kalian bisa tulis gini
html, body{
    height: 100%;
}

jadi penuh ya 



baik jadi mungkin begitu temen temen kali ini kita bermain dengan warna ya 
sekali lagi ini hanya exsperiment saja belum membuat website yang sebenarnya 

tapi silahkan kalo kalian ingin implementasikan untuk website kalian boleh saja

kita kan latihan lagi dengan membuat progam sederhana dimateri berikutnya 

itu saja temen temen
kita ketemu lagi dimateri berikutnya 
dan satu lagi jangan lupa titik koma ; */