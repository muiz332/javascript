/* javascript dan DOM: DOM selection

dan kali ini kita akan melanjutkan materi kita masih mengenai document object model 

kali ini kita masih membahas mengenai DOM selection bagian ke dua

dimateri sebelumnya kita sudah menecoba tiga method yaitu 
getElementById()
getElementsByTagName()
getElementsByTagName()


ya dan harusnya kalian sudah paham tuh bagaimana cara menggunakan masing masing method ini 

ya selain kalian paham mengenai method ini kalian juga harus paham mengenai apa yang dihasilkan dari masing masing method ini

ya kita tahu bahwa getElementById() itu mengembalikan element sedangkan 

getElementsByTagName() dan getElementsByClassName() itu menghasilkan HTMLCollection ya atau kumpulan dari element element

ya kali ini kita akan membahas dua method berikutnya yaitu querySelector dan querySelectorAll()


jadi fungsi dua method ini sebetulnya sama dengan tiga method sebelumnya yaitu untuk memilih sebuah element berdasarkan kriteria tertentu

nah tapi kita lihat nanti deh perbedaanya seperti apa

nah hasil yang didapatkan untuk method ini 

untuk yang querySelector dia sebetulnya sama dengan getElementById yaitu menghasilkan sebuah element

sedangkan querySelectorAll ini menghasilkan nodelist

dia agak berbeda dengan getElementsByTagName dan getElementsByClassName()


ya nanti perbedaan mengenai htmlcollection dan node list itu akan terasa ketika kita belajar mengenai manipulasi DOM

baik mungkin kita langsung saja coba ya bagaimana implementasi kedua method tersebut

jadi sama dengan materi sebelumnya kita akan bekerja dengan script html yang sama 


sekarang kita akan coba yang pertama dulu yaitu document.querySelector()

nah sebelum kita implementasikan kita pahami dulu deh apa artinya querySelector

nah kalo dari terjemahannya query itu artinya menanyakan 
menanyakan mengenai apa? mengenai selector

nah selector yang dimaksut disini kita bisa anggap sebagai selector css

ya jadi kalo kalian sudah tahu bagaimana memilih element html menggunakan css

kayaknya sekarang sudah tidak ada masalah

ya kita coba dulu saja deh menggunakan css

coba dengan menggunakan css bisa gak kalian ubah warna tulisan dari paragraf4 menjadi warna hijau

hanya paragraf 4 saja dan ubah warnanya menjadi hijau


nah kalo saya tulis begini
p{color: green;} ini artinya saya memilih semua tag p yang ada dihalaman html

kalo saya ingin paragraf4 saja saya bisa tulis begini 

#b p{
    color: green;
}

atau kalo mau lebih spesifik bisa tulis beserta nama elementnya

section#b p{color: green;}

ya itu contohnya menyeleksi menggunakan css
nah sekarang contoh lain misalnya 

saya ingin mengubah background color untuk item 2 ini menjadi orange
hanya yang item 2 saja 

saya bisa tulis begini

section#b ul li:nth-child(2){backgound-color: orange;}

ya jadi kita pakai yang namanya pseudo class
jadi ini bacanya 

css tolong dong carikan element li anak ke 2 yang ada didalam ul yang ada didalam section yang memiliki id b

nah kalo kita jalankan dicssnya dia akan menyeleksi element ke 2 saja

paham ya temen temen
nah ini yang kita tulis didalam css ini(section#b ul li:nth-child(2)) adalah selector  

ya mau yang simple atau yang komplex sama saja

nah selector ini lah yang nantinya akan kita gunakan kedalam method querySelector didalam javascript


4. querySelector()
    sekarang kita akan gunakan querySelector()

    sekali lagi ini menghasilkan element 
    jadi cuma satu element yang dikembalikan

    kita coba ya 
    misalnya saya mau target paragraf ke 4

*/

// const p4 = document.querySelector('#b p');

/* jadi yang kita isikan disini adalah selector cssnya 

kita save bukan console ketikkan p4
nah tuh lihat betul ya sudah terpilih paragraf 4

paham ya temen temen 

kalo kita mau warnai kita bisa tulis begini

*/

// p4.style.color = 'green';

/* tuh paragrafnya sudah berubah menjadi hijau

begitu caranya ya 
atau kita coba kasus yang kedua ya 

ubah background color dari list item ke 2 menjadi orange

caranya begini
*/

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange'

/* kita save refresh 
sudah ya jadi kita sudah bisa memilih satu element saja

begitu temen temen paham gak

jadi itu cara kita menggunakan querySelector

jadi kalo kalian sudah tahu mengenai css sudah tau mengenai bagaimana cara menyeleksi element menggunakan css kayaknya ini lebih gampang

apa lagi nanti ada saatnya kita itu tidak boleh mengubah ubah htmlnya

jadi tidak boleh tuh kita tambahin class tambahin id tapi kita ingin mentarget dan memanipulasi sebuah element 

ya caranya bisa pakai querySelector ini begitu ya

nah sekaran dengan menggunakan querySelector 
sekali lagi di mengembalikan element

kalo misalkan saya tulis begini
saya ingin menyeleksi semua paragraf

*/

// const p = document.querySelector('p');

// nah ini kan saya akan mencari semua tag p kan
// kalo dicssnya begitu kan

// tapi dengan menggunakan querySelector karena dia hanya mengembalikan satu element maka yang akan dikembalikan adalah element yang pertama kali ditemukan 

/* ya jadi harusnya yang ditarget adalah paragraf 1 

meskipun kita menulisnya p artinya semua paragraf
kita coba ya 

kita ganti tulisannya
*/

// p.innerHTML = 'ini diubah melalui javascript';

/* nih lihat harusnya semua paragraf ya 

coba kita lihat kita jalankan 

tuh dia hanya mengubah paragraf yang pertama saja 
paragraf lain tidak terpengaruh begitu

nah kalo misalkan ingin memilih semua gimana?
nah disitulah kita menggunakan method kita yang terkhir yaitu querySelectorAll



5. querySelectorAll

    nah kalo ini dia akan memilih semua element yang ada dihalaman 

    kita coba ya

*/

// const p = document.querySelectorAll('p');

/* begini kita save dulu ya kita jalankan

kita buka consolenya tulis p

[p.p1, p.p2, p.p3, p]

tuh lihat sekarang saya punya 4 buah element 
tapi typenya adalah nodelist bukan HTMLCollection lagi

paham ya jadi ini sebetulnya sama saja kalo saya tulis begini


*/

// const p1 = document.getElementsByTagName('p');

/* kalo saya jalankan 
nah sama saja tapi dia typenya HTMLCollection

oke kita kembali ke querySelectorAll


*/

// const p = document.querySelectorAll('p');


/* sekarang saya punya 4 element ya 

jadi kalo saya ingin warnai semuanya 
itu saya tidak bisa tulis p.style begini

kalo dijalankan maka akan eror
karena kita harus kasih index disini

*/

// p[2].style.backgroundColor = 'lightblue';

/* tuh dia berubah diparagraf ke 3

nah kalo mau semuanya bagaimana?
nah kita gunakan looping



*/

// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue'
// }

/* nah sekarang semua sudah terseleksi

oke jadi itu ya temen temen cara penggunakan dari 5 mehtod ini

dan mungkin sekarang pertanyaannya adalah 
kita mau gunakan yang mana?
atau kira kira mana yang terbaik dari kelima method ini

nah sebetulnya itu dari kasus yang kalian dapatkan 
tergantung dari kebutuhan kalian 

tapi ketika kalian diharuskan tidak merubah isi element html ya apa lagi menambah id menambah class

kalian bisa gunakan querySelector dan querySelectorAll


begitu ya
dan kalo dari sisi performents
method getElementById ini dan getElementsByTagName adalah method yang paling cepat dibanding dengan yang lain

jadi saran saya pastikan dulu kalian bisa gunakan dua element itu 
kalo misalkan dengan dua element itu kalian tidak bisa mentarget elementnya secara spesifik

baru silahkan gunakan yang lainnya


ya dan terakhir ada hal yang harus saya jelaskan dulu mengenai mengubah node root

nah ini juga salah satu cara agar kita dapat lebih efektif lagi memilih method yang cocok untuk seleksi DOM kita 

nah maksutnya apa mengubah node root coba kita lihat

nah sekarang coba kasusnya begini
kita akan mentarget paragraf ke 4 misalkan

coba ada beberapa kemungkinan yang ada 

kita tidak bisa target menggunakan getElementById karena dia tidak punya id
kita juga tidak bisa target menggunakan getElementsByClassName karena dia tidak punya class

berarti kita bisa target menggunakan getElementsByTagName

tinggal kita hitung saja dia urutan keberapa kemunculannya didalam Document

jadi misalnya saya punya
*/

// const p4 = document.getElementsByTagName('p');

// p4[3].style.backgroundColor = 'lightblue'


// atau kita bisa gunakan querySelectorAll

// const p5 = document.querySelectorAll('p');
// p5[3].style.backgroundColor = 'lightblue';

/* 
nah sama saja ya

nah tapi ada cara yang lain kita bisa mengubah scope dari node rootnya

kan secara default node root itu adalah document

jadi carikan element element p yang ada didalam document

nah kita bisa ganti nih documetnya kita persempit pencariannya

caranya gini misalnya saya mau seluruh section b ini

jadi saya bisa tulis begini

*/
// const sectionB = document.getElementById('b')

// nah sekarang jika saya ingin mencari paragraf 4 saya bisa tulis begini

// const p4 = sectionB.querySelector('p');


/* begini paham gak ?
jadi sekarang p yang ada didalam querySelector harusnya kan dia mencari yang ada didalam document

tapi saya ganti sectionB maka dia akan mencari hanya didalam sectionB

ketika saya tulis

*/
// p4.style.backgroundColor = 'orange'

/* maka dia harusnya berubah menjadi orange

tuh betul ya

atau gini saya balikin 

*/

// const sectionB = document.querySelector('#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange'

/* ya inget getElementsByTagName ini mengembalikan HTMLcolection jadi kita harus tulis indexnya

meskipun dia hanya ada satu element kita harus tuliskan indexnya sebagai array

jadi intinya kalian flexible sekali ketika ingin memilih element 
silahkan gunakan saja method yang tepat menurut kalian 


oke jadi itu mungkin temen temen untuk materi kali ini mengenai DOM selection
atau memilih element pada DOM kita

mudah mudahan kalian paham 
dan nanti dimateri berikutnya kita akan mulai membahas mengenai manipulasi dari DOM yang kita sudah seleksi

kita ketemu lagi dimateri selenjutnya 
dan satu lagi jangan lupa titik koma ; */




