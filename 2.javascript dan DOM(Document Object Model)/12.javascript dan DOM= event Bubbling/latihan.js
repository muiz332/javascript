/* javascript dan DOM: event bubbling

nah kita lanjut ke topik yang kedua

topik kedua ini dinamakan dengan event bubbling 

ya bubbling itu gelembung lah ya seperti kalian melihat gelembung air gitu

nah apa itu maksutnya kita lihat 


kalo misalkan kita kembali kecodingan kita
ya kita masih menggunakan script yang sama 

sekarang kita lihat
kita punya tombol close dan kita sudah menempelkan sebuah event kedalamnya 

*/
// const close = document.querySelectorAll('.close');
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//     })
// })

/* secara default ketika kita memberikan sebuah event pada element

maka event tersebut akan berlaku untuk element element pembungkusnya juga

jadi kalo misalkan kaliah kasih keclose akan berlaku juga untuk element pembungkusnya 
dan akan berlaku juga untuk element pembungkusnya lagi

jadi seperti gelembung air ya semakin keatas semakin keatas begitu

contohnya begini
kalo misalnya ya kita kan tadi ngasih eventnya kedalam closenya 

sekarang gimana kalo kita ngasih event kepembungkusnya juga yaitu card

nah misalkan begini

*/

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('oke')
//     })
// });

/* jadi untuk setiap card jika diklik munculkan alert oke

coba kalian jalankan
coba cardnya diklik 

kalo diklik maka dia akan keluar oke

paham ya ini tidak ada masalah ya 

nah sekarang gimana kalo saya klik tombol closenya ?
kira kira apa yang akan terjadi 

inget tombol close ini selain dia kasih event yang menhapus parentnya 

dia juga merupakan bagian dari card

paham gak?
jadi yang terjadi adalah ketika saya klik event pada cardnya kepanggil dulu 

baru setelah saya oke dia hilang
paham ya jadi maksutnya event bubbling itu 

ketika kita punya sebuah event ditombol close ini 
dan kita juga punya event dicard ini 

maka ketika jalankan event didalam tombol close yang cardnya juga nanti akan dijalankan

begitu pula kalo kita kasih event dicontainer 

jadi dia akan terus mengecheck keatas keatas sampai habis pembungkusnya 
ya sampai gelembungnya pecah sudah tidak ada element pembungkusnya lagi

mudah mudahan paham ilustrasinya

nah sekarang kan kita pengennya pada saat klik tombol close 
event pada cardnya tidak jalan

berarti kita harus hentikan gelembung itu kita harus stop sibubblingnya itu

caranya kita harus menambahkan sebuah method yang namanya stopPropagation();
didalam event closenya 



*/

// const close = document.querySelectorAll('.close');
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//         e.stopPropagation();
//     })
// })

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('oke')
//     })
// });


/* 
jadi sekarang sievent alert ini harusnya berhenti ditombol closenya 

coba kita jalankan 


kita klik closenya tuh alertnya tidak jalan
tapi kalo saya klik yang lain nah maka alertnya jalan 

begitu temen temen mudah mudahan paham ya 

jadi itu adalah dua method yang kita pelajari 
prevent default dan stopPropagation

nah untuk event bubbling ini kita bisa manfaatkan perilakunya  untuk memperbaiki progam yang sudah kita buat ini 

karena sebetulnya progam yang kita buat sudah jalan ya normal

tapi kurang efektiv ada beberapa hal yang membuat dia kurang efektiv

nah sekarang gimana cara memanfaatkan event bubbling ini?

yang kita lakukan ini sebetulnya masih memiliki kekurangan 

yang pertama lihat ya
kita menyeleksi seluruh element close 
berarti kita punya 4 buah element

nah lalu setiap elementnya kita tambahkan sebuah event yang namanya click

jadi setiap tombol close ini sudah ditempelin event click ini
ini tidak ada masalah ya 


nah sekarang kita lihat
gimana kalo saya buka elementnya diinspect

lalu saya coba tambahkan card baru tapi secara real time 

jadi saya edit langsung dielementnya tidak edit dihtmlnya

saya edit containernya klik kanan edit as html
lalu saya copy card terakhir

kalo sekarang saya punya 4 kartu 
nah ini kalian perhatikan

begitu kita buka browsernya diawal ya kan artinya ada 4 buah kartu lalu ketemu script nah disini akan menjalankan querySelectorAll nya

lalu setelah itu tiap tiap tombol closenya dikasih event klik jadi ada 4

nah ketika saya tambahkan sebuah kartu baru 
berarti tombol close yang baru kita buat harusnya tidak ada event kliknya karena kita baru tambahin

coba diklik
nah tidak mau ya 

karena belum ada event klik yang nempel dielementnya 

nah jadi yang kita lakukan ini kurang efektiv karena mungkin saja kedepannya kalian ingin menambahkan element baru itu secara real time

nah gimana cara benerinnya ?

balik dulu kehtmlnya
tadi yang kita lakukan adalah kita menempelkan event pada tombol close 

yang kalian tahu ketika diklik maka dia akan bubbling keatas kepembungkusnya 
lalu kepembungkusnya lagi container lalu kebody kehtml selesai

nah gimana  kalo sekarang kita balik?
gimana kalo kita simpan eventnya dicontainer 
sehingga nanti eventnya bisa tahu kita mengekilik apa 

didalam container ini 
nah kita ambil dulu containernya 

*/

const container = document.querySelector('.container');

// nah kita tambahkan event kliknya 

container.addEventListener('click', function(e){
    // ini berarti saya mengeklik apapun asalkan berada didalam container
    // kalo saya console.log a.target
    // maka nanti javascriptnya tahu saya sedang mengeklik apa
    console.log(e.target)

    // kalo saya klik fotonya maka javacriptnya tahu saya mengeklik element ini
    // ketika saya klik tombol close ini nah dia tahu juga

    // nah ini akan kita manfaatkan dengan mencari tahu apa yang kita klik

    // sekarang gini gimana caranya kita bisa tahu kita sedang mengeklik tombol close 

    if(e.target.className === 'close'){
        // kalo misalkan yang kita klik itu punya nama class yaitu close 
        // berartikan kita bisa mengeklik tombol close yang manapun

        // nah lalu kita ambil tagetnya dan parentnya 
        e.target.parentElement.style.display = 'none'
    }
})

/* 
coba kalo ini kita jalankan 

saya klik tombol closenya hilang ya 

nah dengan ini kalian bisa lihat jauh lebih efektiv 

kita hanya menempelkan satu buah event saja kedalam container

begitu mudah mudahan paham 

nah yang kedua dengan melakukan ini javacriptnya tidak peduli dengan adanya perubahan didalam element htmlnya 

meskipun perubahannya dilakukan secara instant

kalo saya tambhakan lagi elementnya secara instant 
sekarang kalo saya klik akan tetap hilang

karena yang dicheck oleh javscriptnya adalah containernya bukan element barunya 

ya jadi tetap eventnya sudah terpasang didalam containernya 

begitu 
ya jadi begitu cara menggunakan konsepnya 

ini kalo kalian ingin lebih yakin lagi kalian tambahkan preventDefault
untuk jaga jaga kalo misalnya yang diklik itu link

begitu mungkin topik kali ini 
mudah mudahan kalian tidak bingung ya

kita sudah belajar mengenai preventDefault() dan event bubbling

jadi itu saja temen temen 
kita akan ketemu lagi dimateri selanjutnya 

dan satu lagi jangan lupa titik koma ;  */