/* javascript dan DOM: DOM manipulation

baik jadi kalo temen temen masih inget dimateri sebelumnya kita membahas tentang manipulation DOM pada element
dimana kita sudah mencoba untuk memanipulation element itu seperti 

mengubah warna mengganti tulisannya menambahkan atribut dan mengelola classnya

nah sekarang  kita akan membahas manipulation pada node
dimana memanipulation node ini memungkinkan untuk bisa menambah node baru 

ya misalkan element baru pada DOM 
atau misalkan kita juga bisa menghapus element yang ada pada DOM dan bahkan mengganti element menggunakan element yang baru

nah untuk memanipulation node pada DOM ini 
javascript memiliki bebarapa method

manipulation node

- document.createElement();
- document.createTextNode();
- node.appendChild();
- node.insertBefore();
- parentNode.removeChild();
- parentNode.replaceChild();

dan sebetulnya masih banyak yang lain ya
tapi yang akan kita bahas hanya method method ini saja karena ini yang sering digunakan

oke ya jadi ini method method yang akan kita pelajari 
kita langsung saja masuk ke study kasus supaya kita bisa langsung coba bagaimana sih cara kerja dari method method ini


seperti bisa kita gunakan script html sederhana seperti dimateri sebelumnya 



jadi inti dari manipulation pada DOM ini adalah kita bisa membuat menghapus dan menambah element element yang ada pada DOM kita 

misalkan saya mau menambah paragraf baru setelah paragraf 3 
kan caranya kalo misalkan tidak pakai javacript kita tinggal tambahkan saja elementnya didalam htmlnya

misalkan 
<p> paragraf baru </p>

ini kalo pakai html

nah sekarang gimana kalo kita ingin melakukan hal yang sama tapi menggunakan javascript

yang terjadi jika kita menuliskan element pada DOM ada dua hal

yang pertama kita buat dulu elementnya

jadi begini
<p> </p>

ya jadi nanti kita nyuruh javascript bikinin dulu dong tag p

lalu nanti kita nyuruh javacript untuk membuat tulisan didalam p nya

misalkan paragraf baru

nanti kita bikinya kedua hal ini terpisah 
setelah nanti kita punya dua node seperti  ini

kita minta untuk memasukkan tulisan ini kedalam tag pnya

<p> paragraf baru </p>

ya jadi ada beberapa hal 
bikin dulu tag nya lalu bikin isinya setelah itu masukkan isinya kedalam tagnya

nah itu kita belum tampilkan kedalam htmlnya baru kita simpan kedalam memory

dan yang terakhir kita suruh supaya javascriptnya menyimpan node baru kita atau element kita kedalam section 

<section> 
  <p> paragraf baru </p>
</section>

ya jadi ada beberapa hal 
bikin dulu rangkai kemudian kita simpan kedalam tempat yang kita tuju

idenya begitu 

oke sekarang kita lakukan menggunakan javascirpt

nah kita lihat dulu methodnya 
yang pertama  ada document.createElement() jadi kita bikin dulu elementnya

yang kedua document.createTextNode(); jadi kita buat tulisan untuk nanti dimasukkan dalam tagnya

dan terakhir kita mau simpan dimana kita bisa pakai appendChild() atau insertBefore()

oke ya jadi ada beberapa hal ini untuk menambahkan satu element saja



kita lihat kita buat dulu elementnya

caranya saya bikin variable baru lalu diisi dengan document.createElement();

*/
const p = document.createElement('p');
// javascript bikinin dong element p didalam document
// setelah kalian nulis ini paragraf akan dibuat tapi belum disimpan dimana mana masih didalam memory
// jadi kalo kita jalankan tidak ada apa apa 

// sekarang kita bikin tulisan yang nantinya ada didalam tag p ini 

const textPbaru = document.createTextNode('paragraf baru');

/* javascript tolong dong buatkan text node yang namanya paragraf baru
lalu kita simpan didalam variable

nah ini dua node ini tidak ada hubungannya masih terpisah

ada sebuah element p kosong dan ada sebuah text 
text tersebut belum punya apa apa
masih terpisah dan ada didalam memory

nah sekaran kita akan simpan tulisan didalam paragraf
jadi dirangkai seperti kita merangkai bunga ya

jadi kita ambil dulu vasnya dan kita ambil dulu bunganya 
lalu kita simpan bunganya didalam vasnya dan kemudian kita letakkan ditempat yang kita inginkan

nah gimana caranya kalian bisa tulis begini

*/

p.appendChild(textPbaru);

/* javascript ambilin p yang isinya tag p lalu tambahkan child yang namanya textPbaru yang isinya paragraf baru

append itu artinya menambahkan 

jadi sekarang anggap saja p ini adalah vas bunganya dan textPbaru ini adalah bunganya

jadi kita baru punya vas yang berisi bunga
kalo saya jalankan tidak terjadi apa apa 

nah sekarang bagaimana caranya menyimpan paragrafnya kedalam htmlnya setelah paragarf 3 

jadi kita simpan p ini didalam section a
caranya kita ambil dulu section a nya

*/

const sectionA = document.getElementById('a');

// baru kita simpan vas bunga tadi kedalam ruang tamu anggap saja section a ini adalah ruang tamu
// jadi kalian tulis begini

sectionA.appendChild(p);

// saya tambahkan anak didalam sectionA yaitu p
/* coba kita jalankan 
nah tuh sudah muncul ya

jadi untuk membuat element dan menyimpannya ketempat yang kita inginkan kita butuh beberapa baris 

dibikin dulu dirangkai dan terakhir kita simpan ketempat yang kita inginkan

begitu temen temen mudah mudahan paham

itu menggunakan appendChild

nah sekarang gimana kalo kita gunakan yang kedua nih insertBefore();

kalo appendChild tadi kan simpan keakhir dari sebuah element parent
element parentnya mana? sectionA

appendChild itu simpan keakhir didalam element tersebut

nah sekarang bagaimana kalo saya ingin simpannya tidak diakhir 
misalnya ditengah tengah

contohnya kita ambil kasus lain
misalnya saya mau bikin list item baru tapi disimpannya disini setelah item1 sebelum item 2

coba kalian perhatikan dulu apa yang kita ambil 

berarti yang pertama kita bikin linya dulu

*/

const li = document.createElement('li');

// lalu kita buat tulisannya misalkan item baru
const textLi = document.createTextNode('item baru');

// tinggal kita masukkan textnya kedalam li
li.appendChild(textLi);
// kalo kita jalankan belum muncul karena kita baru bikin elementnya belum menempatkan elementnya 

// nah setelah kita membuat element baru yang kita inginkan dan nanti kita ingin sisipkan setelah item 1
// kita akan melakukan dua hal 

/* yang petama kita harus tahu dulu parent yang akan kita sisipkan ini 
untuk kasus ini yaitu ul

yang kedua kita harus tangkap element setelahnya
karena nanti kita akan menggunakan insertBefor supaya elementnya ada ditengah sebelum item 2 

ya jadi ul dan item 2 ini 

kita butuh ul dulu ya

*/
const ul = document.querySelector('section#b ul');
// lalu kita ambil juga li yang ke dua

const li2 = ul.querySelector('li:nth-child(2)');
// jadi cari anak kedua didalam ul


// nah kita sudah punya elementny yang kita rangkai kita sudah punya parent kita juga sudah punya element berikutnya 
// tinggal kita simpan caranya begini

ul.insertBefore(li, li2);

/* panggil element parentnya lalu kita insertBefore 
ya jadi simpan sebelum element apa didalam ul

lalu dalam kurung (node baru yang akan ditambahkan, ditambahkan sebelum element apa)

coba kita jalankan 
tuh sudah tersimpan kedalam tempat yang kita ingin kan

begitu temen temen jadi kita bisa simpan menggunakan insertbefore atau menggunakan appendChild

mudah mudahan kalian paham







sekarang kita akan coba remove child dan replaceChild

kalo dari namanya kalian sudah pasti bisa menembak remove itu buat menghapus replace itu buat mengganti 

kita coba


kita coba remove dulu  ya

misalnya kita hapus link ini 

caranya gimana 
yang pertama kita harus tahu dulu parentnya siapa 
yeng kedua kita harus tahu element apa yang akan dihapus

jadi ada dua hal yang harus kita tangkap

ya tadi kita sudah ambil sectionAnya kita pakai saja

*/

// kita tangkap a nya saja
// lingkup pencariannya kita persempit ya jadi kita nyarinya hanya didalam sectionA
const link = sectionA.getElementsByTagName('a')[0];
// kita sudah ambil parentnya dan kita sudah ambil element yang mau dihapus
// sekarang kita hapus

sectionA.removeChild(link);

/* javascript carikan saya sectionA lalu remove salah satu child didalamnya yaitu link

save lalu kita refresh hilang

itu cara kita menghapus childnya

gampang saja ya

terakhir kita akan coba replace childnya

jadi tadinya nodenya apa kita ganti dengan node yang baru

misalnya coba kita ganti paragraf 4 ini 

nanti kita akan ganti dengan h2 yang isinya judul baru

yang harus kita lakukan ada beberapa 
kita harus tangkap dulu parentnya yaitu sectionB 

kita tangkap dulu

*/
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];

// kita sudah tangkap element elementnya sekarang kita butuh element baru
// kita bikin dulu element barunya

const h2 = document.createElement('h2');
const texth2 = document.createTextNode('judul baru');
// kita masukkan textnya kedalam h2
h2.appendChild(texth2);

// sekarang kita lakukan replacenya 

sectionB.replaceChild(h2, p4)

/* ambil parentnya lalu kita replace child

nah replace child menerima dua parameter (node baru, node lama)
jadi node baru mereplece node lama 

kita lihat hasilnya 


ya jadi sekarang kita sudah bisa memodifikasi nodenya 

kita sudah bisa menambah 
ada dua yang ditambah yaitu paragraf baru yang kita simpan menggunakan appendChild 

ada item baru yang kita simpan menggunakan insertBefore

ada element yang hilang ada a yang kita hilangkan 

dan tarakhir kita replace p4 menjadi elemetn baru

begitu mudah mudahan sampai disini kalian paham

silahkan kalian modifikasi saja element element ini sesuai keinginan 

dan sebetulnya method method yang kita coba ini belum semuanya silahkan kalian cari saja method method yang lain 

tapi method method ini adalah method lama sudah disupport oleh semua browser

nah sekarang sudah ada method method baru yang fungsinya mirip mirip nih 


manipulation method baru

parentNode.append() menambahkan diakhir
parentNode.prepent() menambahkan diawal
childNode.before() sama seperti insertBefore
childNode.after()
childNode.remove()
childNode.replaceWith()


ini adalah method baru 
karena ini method baru jadi ada beberapa browser yang belum suport(mungkin sekarang sudah)

ya jadi silahkan kalian boleh coba method method ini 
supaya manipulation node nya lebih baik lagi


oke mungkin itu ya materi mengenai manipulation node ini

mudah mudahan temen temen paham 
jadi silahkan latihan sendiri dicoba method method yang sudah kita coba tadi sehingga kalian lebih paham lagi mengenai method methodnya 

dan dimateri selanjutnya kita akan masuk kemateri mengenai event 

nah kalo sebelumnya kita manipulation menggunakan console dimateri events kita akan menggunakan sebuah aksi 

ya misalkan ketika tombol ditekan mouse digerakkan 
ketika kita inputkan sesuatu dan lain lain 

dan itu aka membuat interaksi kita terhadap website akan makin seru lagi

jadi itu saja materi kita kali ini 

kita ketemu lagi dimateri berikutnya
dan satu lagi jangan lupa titik koma ;  */