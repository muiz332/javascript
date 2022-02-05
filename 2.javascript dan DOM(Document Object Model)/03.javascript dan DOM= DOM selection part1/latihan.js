/* javascript dan DOM: DOM selection

dimateri kita kali ini kita akan masuk ketopik yang sangat penting yaitu mengenai DOM selection 

dimana disini kita akan memilih element element pada DOM menggunakan javascript

nah DOM selection ini adalah tahap awal ketika kalian melakukan manipulasi atau penelusuran pada DOM

ya langsung saja kita lihat bagaimana kita melakukan seleksi pada element didalam DOM

jadi untuk melakukan seleksi pada DOM ada beberapa method yang bisa kalian gunakan 



DOM selection Method

1. getElementById();
    nah ini temen temen harus perhatikan cara penulaisan huruf besar dan huruf kecil

    nah jadi ini yang pertama method yang paling simple 
    yaitu kita memilih element yang ada didalam DOM kita berdasarkan Id nya

    ya temen temen inget ketika kita menggunakan id itu hanya boleh ada satu element yang memiliki id tertentu 
    ya jadi ketika kalian punya h1 terus kalian kasih id nya judul 

    nah kalian tidak boleh punya element lain yang idnya sama sama judul

2. getElementsByTagName()
    nah itu perhatika ada s nya 
    nah ini artinya tolong dong javascript carikan saya element element yang memiliki nama tag tertentu

    beda dengan id 
    kalo id hanya ada satu kalo tag name mungkin saja ada banyak

3. getElementsByClassName()
    nah ini carikan elements yang memiliki nama class tertentu

    nah beda dengan id 
    class itu boleh memiliki lebih dari satu nama element yang sama

    sehingga penulisannya ada s nya / jamak

4. querySelector()
    nah kalo ini termasuk method yang cukup baru dibanding dengan yang ada diatas 

5. querySelectorAll()
    nah kedua method ini digunakan untuk mencari element berdasarkan selectornya 

    nah selector ini bisa kalian anggap seperti kalian mencari element menggunakan css

    karena kita bisa menuliskan selector baik yang sederhana maupun yang komplex


nah nanti kita lihat bagaimana cara pakainya masing masing dari method ini 

tapi sebelumnya kita lihat dulu pada saat kita menggunakan method ini apa yang akan dikembalikan oleh method itu


method                               hasil
getElementById()                   element
getElementsByTagName()             HTMLCollection
getElementsByClassName()           HTMLCollection
querySelector()                     element
querySelectorAll()                 node list

jadi itu hasil kembalian dari method methodnya 

ya jadi itu dulu yang harus kalian pahami 
sekarang gimana kalo kita langsung implementasikan DOM selection kita pada halaman web sederhana yang akan kita buat

kalian bisa lihat bahwa didalam htmlnya itu simple saja 

saya punya style dasar supaya nanti kita bisa lihat bentuknya 

lalu dibawahnya kalian lihat saya punya beberapa element html

dan element html ini saya kasih artibut yang berbeda beda supaya kalian nanti bisa lihat bagaimana cara menyeleksinya

dan diakhir kita hubungkan halaman html ini dengan javascript menggunakan tag script

oke jadi itu saja dasarnya
ya dan nanti akan saya jelaskan sedikit kenapa kok kita simpan tag scriptnya dibawah 

kenapa tidak disimpan diatas
nanti akan masuk akal ketika kita menyeleksi DOMnya 


topik kita hari ini adalah DOM selection

1. getElementById()
    ada beberapa method tadi ya yang pertama adalah getElementById()

    ya inget inget penulisannya ini pakai camel case

    nah sebetulnya untuk menuliskan method ini didepannya kita harus kasih dulu node rootnya 

    ya jadi harus ada node rootnya 
    masih inget ya node root itu adalah document 

    ya jadi sebetulnya menulisnya begini
    document.getElementById();

    ya ini yang pertama 
    ini kalo kita baca, bacanya begini

    jadi kita minta tolong ke javascriptnya 
    javascript tolong dong carikan saya element yang memiliki id tertentu yang ada didalam document 

    coba kalian lihat pada tag htmlnya
    kita punya tag html yang memiliki id judul yaitu h1

    coba sekarang kita ambil element ini
    caranya gimana?

    caranya kalian harus bikin dulu sebuah variable untuk menampung element yang akan kita seleksi

    jadi misalkan saya menggunakan const ya 
    karena saya yakin nilai dari variablenya tidak akan berubah

*/

// const judul = document.getElementById('judul');

// ya jadi kita melakukan ini kita sudah menyeleksi element yang idnya judul lalu kita tampung kedalam variable judul
// nah sekarang apa maksutnya kita melakukan ini? tujuannya apa
// nah tujuannya nanti kita bisa melakukan apapun terhadap judul ini 
// misalkan yang paling gampang kita mau ubah stylenya kita mau ubah fontnya kita mau telusuri element lain berdasarkan element ini 

/* nah itu bisa
kita bisa lakukan apapun asal kita sudah menangkap atau menyeleksi element ini 

oke mudah mudahan paham 

nanti kita akan coba deh manipulasi sederhana walaupun topik mengenai manipulasi nanti akan kita bahas secara khusus

nah sekarang kita buka consolenya 
lalu coba ketikan judul 

nah tuh lihat otomatis ada sebuah element yang dikembalikan 
jadi sekarang javascriptnya tahu judul itu sekarang isinya h1 beserta isi node didalamnya 

jadi ada idnya ada tulisan hello worldnya 
paham ya jadi itu cara kita menyeleksi element 

dan kalian inget method getElementById mengembalikan apa?
dia mengembalikan element

jadi cuma satu elementnya 
ya jadi itu cara pertama kita menggunakan getElementById()


selanjutnya sebelum kita coba yang lain 
coba tag script yang ada i file htmlnya pindahkan ke atas 

scoba kita pindahkan didalam tag head saja

nah ini akan membuat script js kita tidak jalan 
kenapa?

kan kalo html itu dibacanya dari atas kebawah dari kiri kekanan 

nah dia akan dibaca dari atas kemudian masuk kedalam tag head lalu jalankan tag scriptnya 

scriptnya berisi 
bikin variable judul lalu ambil element yang memiliki id judul

nah sampai saat ini elementnya belum ada didalam memory
dia belum masuk kedalam memory karena judulnya berada dibawah 

ini sama saja dengan kita memanggil sebuah element sedangkan element tersbut belum kita buat
sehingga kalo kita jalankan 

saya ketik judul maka nilainya kosong
karena judulnya masih dibawah 

nah itulah kenapa script itu biasanya kita simpan dibawah sebelum tutup body

ya walaupun ada sih caranya 
cara mengakalin supaya scriptnya bisa tetep jalan ketika didalam head

terutama kalo kalian pakai jquery misalnya
ya tapi itu tidak akan kita bahas

intinya sebaiknya simpan saja scriptnya diakhir


sekarang element sudah kita tangkap menggunakan getElementById lalu kita masukkn kedalam variable

nah selanjutnya apa yang bisa kita lakukan?

coba kita manipulasi sedikit saja ya 
misalnya begini bagaimana kalo saya ubah warna tulisannya menjadi merah 

nah dengan menggunakan javascript kita bisa melakukan seperti css bahkan nanti bisa lebih keren lagi

coba gimana caranya kalo pakai javascript?


*/

// const judul = document.getElementById('judul');

//caranya gini
// kalian panggil si judul ini ya 
// judul ini sekaran bentuknya object yang siap kita manipulasi 
// ambil judulnya lalu berikan method style titik lagi lalu sekarang tuliskan properti css apa yang mau kalian berikan 

// judul.style.color = 'red';
/* misalnya color lalu kasih sama dengan lalu string valuenya 

nah coba kita jalankan 
tulisannya sudah berubah menjadi merah

jadi sama dengan menggunakan css tapi bedanya apa?
bedanya gini

coba kalian dibagian element h1 klik kanan inspect

sekarang kalian lihat didalam elementnya 
tiba tiba dia punya atribut baru didalam elementnya yaitu style color red

jadi dengan menggunakan javascript kalo kita ngasih style kesebuah element itu otomatis akan menambahkan inline css

ya jadi kita bisa memberikan style tapi hasilnya begini ada inline css

nah nanti ada caranya supaya kalian tidak menggunakan inline css
ketika kita masuk ketopik manipulasi DOM

nah selanjutnya bagaimana kalo misalkan saya ubah warnah backgroundnya

ya sama saja kalian tinggal tambahkan judul disini ubah stylenya lalu apa sintax css untuk merubah warna background
bakcground color

*/
// judul.style.backgroundColor = '#ccc'

// tapi kalian jangan menulisnya background-color begini
// karena tanda -  akan dianggap oleh javascript sebagai opertator matematik
// kalian harus menuliskannya menggunakan hurus camel case

// kalo saya jalankan sekarang backgroundnya berubah menjadi abu abu

/* kita juga bisa mengubah tulisan hello world tanpa menyentuh htmlnya cukup didalam scriptnya

misalnya saya tulis judul lalu kita pakai method innerHTML lalu diisi dengan apa 
misalnya muiz

*/

// judul.innerHTML = 'muiz'


/* oke ya begitu temen temen untuk menyeleksi menggunakan getElementById()

inget dia mengembalikan element



2. getElementsByTagName()
    selanjutnya kita bisa menyelaksi element menggunakan getElemetsByTagName()

    // document.getElementsByTagName()

    nah kalo ini artinya 
    javascript tolong dong carikan saya elment element yang memiliki nama tagnya apa gitu

    kita coba seleksi yang elementnya ada beberapa
    kita coba yang element p

    caranya tinggal tulis saja
*/

// const tagP =  document.getElementsByTagName('p');

/* sama saja seperti id tapi inget dia mengembalikan HTMLCollection

nanti kalo kalian lihat bentuknya mirip dengan array

coba tulis didalam console tagP dan lihat isinya

tuh lihat ada tulisan HTMLCollection(4) 

ini artinya ada 4 yang berhasil diseleksi oleh getElementsByTagName() ini 

karena ada 4 tag p

nah isinya kalian bisa lihat ini
[p.p1, p.p2, p.p3, p]

ada p yang memiliki class p1 
p yang class p2 ada p yang class p3 dan ada yang tidak memiliki class

dan kalo kalian lihat ini dibungkus dengan kurung siku artinya dia mirip dengan array

dia juga memiliki index dan dia juga memiliki method length

anggap saja ini bentuknya array
sehingga kalo dia array misalnya saya ingin mengubah backgroundnya menjadi warna biru mudah misalnya

caranya bagaimana?

saya tidak bisa menulis begini
tagP.style.backgroundColor = 'lightblue'

karena p ini adalah array 
kalo dijalankan dia akan eror

nah caranya bagaimana supaya bisa?
kita harus memberikan indexnya dimulai dari 0

misalkan saya mau yang paragraf 3 nya saya kasih warna biru muda

*/

// tagP[2].style.backgroundColor = 'lightblue';


/* sekarang coba jalankan
tuh baru dia berubah 

paham ya jadi kita bisa mengasih satu satu untuk element karena tagP itu htmlcollection

kalo mau semuanya bagaimana?
kalian bisa tulis satu persatu indexnya atau kalian gunakan looping

contohnya begini

*/

// for(let i = 0; i < tagP.length; i++){
//     tagP[i].style.backgroundColor = 'lightblue'
// }

/* oke jadi itu cara kita untuk melakukan pengulangan terhadap semua element yang sudah kita pilih menggunakan getElementsByTagName


nah sekarang jika kita mengambil sebuah element menggunakan getElementsByTagName meskipun elementnya hanya ada satu 

ya misalkan begini
*/

// const h1 = document.getElementsByTagName('h1')

/* cuma ada satu ya
tapi meskipun hanya ada satu itu bentuknya tetap HTMLCollection

kalo saya tulis h1 diconsole tetep saja dia bentuknya adalah HTMLCollection

nah kalo kita mau membuat dia menjadi element 
ya caranyakan kalian bisa tulis h1 terus indexnya 

atau kalo mau lebih gampang kalian cukup tulis indexnya disini

*/

// const h1 = document.getElementsByTagName('h1')[0];

/* ya jadi sama saja
ambil semua element lalu ambil yang indexke 0 saja 

nah baru disini kita bisa tulis 

*/

// h1.style.fontSize = '50px';

/* save lalu jalankan 

maka nanti tulisannya akan menjadi besar





3. getElementsByClassName()
    yang ketiga kita bisa gunakan getElementsByClassName()

    nah ini sama saja cari element element yang nama classnya apa gitu ya

    ini sama saja mengembalikan HTMLCollection 

    jadi misalnya nih ada class p1 untuk mengambil paragraf 1
    jadi saya tulinya begini



*/

// const p1 = document.getElementsByClassName('p1');

/* nah ini akan mengembalikan htmlcollection

kalo saya save lalu tulis diconsole p1 
nah lihat ya dia menghasilkan htmlcollection

jadi kalo misalkan p1 ini saya mau ganti warna tulisannya 
atau saya mau ganti tulisannya saja deh

jadi saya tidak bisa tulis langsung begini
p.innerHTML

harus saya kasih dulu index karena dia HTMLCollection

*/

// p1[0].innerHTML = 'diubah dari javascript'

// nah berubah ya 
// atau saya bisa pindah kurung sikunya disini

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';

/* save lalu refresh hasilnya sama 

gitu ya jadi getelementsbyclassname ini sama dengan getelementsbytagname

dua duanya menghasilkan HTMLCollection

oke jadi itu dulu yang akan kita bahas dimateri kali ini 
dan untuk yang query selector dan queryelectorall dimateri selanjutnya


jadi sekian dulu untuk materi kali ini mudah mudahan temen temen paham dan tidak bingung 

kita ketemu lagi dimateri berikutnya 

dan satu lagi jangan lupa titik koma ;  */
