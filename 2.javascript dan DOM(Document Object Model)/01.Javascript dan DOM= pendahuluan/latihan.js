/* javascript dan DOM : pendahuluan

dan dimateri kali ini kita akan memulai sebuah seri yang baru atau playlist yang baru 

seri kali ini akan membahas melanjutkan mengenai javascript yang sudah ada dimateri sebelum ini 

dan kali ini kita akan membahas sesuai yang dinamakan dengan DOM

ya atau kepanjangan dari Document Object Model

dan belajar mengenai DOM ini sangat penting ketika kalian akan berinteraksi dengan halaman web kalian
untuk membuat halamannya lebih interktif lebih menarik dan lebih baik lagi

jadi dimateri dasar pemrograman javascript kita belum berinterakhi dengan halaman web kita 

kita hanya menggunakan console sebagai alat interaksi kita  ya dan juga ada beberapa element popup

nah itu adalah bagian dari browser bukan dari bagian halaman html kalian  

nah ketika kita mau berinteraksi dengan halaman html maka kita butuh DOM ini 

nah sebelum kita masuk lebih dalam lagi mengenai DOM ini kita bahas definisinya dulu

apa sih DOM ini ?
ya jadi definisi dari DOM ini menurut mozila 

DOM adalah antar muka pemrograman untuk html yang mempresentasikan halaman web, sehingga progam dapat mengubah dan memanipulasi strukturnya 

gimana masih bingung ya 

maksutnya apatuh antar muka pemrograman dan memanipulasi strukturnya itu seperti apa

nah dari pada kita bingung memahami definisinya ini 

nanti kita kembali lagi kesini 

coba kita pecah dulu deh arti dari masing masing kata didalam DOM itu 

nanti kalo kita kembali kedefinisinya kalian sudah paham

nah coba kita lihat
Document Object Model

kata pertamanya itu Document 
nah maksutnya apa itu kata Document didalam DOM ini

ya Document itu adalah Document web kita tentu saja ya 


nah kalo kalian ada website seperti ini (buka index.htmlnya) yang kalian buka dengan menggunakan web browser 

yang kalian lihat didalam area yang putih itu adalam document isi dari websitenya 

isi dari websitenya tentu saja bagian dari windownyakan browsernya nah itu lain lagi

kita fokusnya diarea isi websitenya saja dan itu disebut dengan document



sekarang kita lihat apa itu object 
nah harusnya kalian sudah tahu ya kalo kalian mengikuti seri sebelumnya object itu contohnya seperti ini 


let mhs = {
    nama : 'muiz',
    nrp : 123,
    Email : muizzuddin332@gmail.com
}


nah jadi object itu adalah nilai atau type data yang ada didalam javascript 

ya contohnya seperti itu 
itu merupakan object yang sederhana ya 


jadi kita bikin object namanya mahasiswa yang didalamnya ada banyak nilai

nantinya object ini bisa kita buat sangat komplex 
\
kita bisa bikin object didalam object yang didalamnya ada array yang didalam array itu elementnya ada object lagi 

object yang dimaksut didalam DOM itu ya ini sama saja 


oke dan yang terakhir adalah Model

jadi model itu representasi terhadap sesuatu 

nah jadi kalo saya rangkai definisi dari DOM itu menurut saya definisinya seperti ini 


jadi DOM itu adalah representasi element html yang ada didalam document menjadi sebuah object 

jadi ada element html yang kalian bikin menggunakan file misalnya index.html itu nantinya oleh browser direpresentasikan sebagai object ya atau dimodelkan menjadi object dan disimpan didalam browsernya 


nanti kita lihat contohnya seperti apa


sekarang kita lihat ini 
kalo misalkan tadi kasusnya adalah website sederhana yang didalamnya terdapat beberapa element html 

nah itukan kita bikinnya dielement html menggunakan tag tag html begitu file itu dibuka dibrowser 

maka element element html tadi akan dibaca oleh browser dan diterjemahkan atau direpresentasikan sebagai object didalamnya 

makanya kalo kita coba gini 
kalian buka consolenya lalu ketikkan saja document 

nanti dia akan mengembalikan nilai #document dan itu ada simbol segitiganya itu artinya kalian bisa buka atau diklik

kalo kita buka atau klik tampilnya akan sama dengan tag tag html yang kalian tulis didalam index.html

kalo sekarang kita tulisnya begini

*/
// console.log(document);

/* ini sama saja ya akan menghasilkan nilai yang sama 

karena documentnya itu bertype object maka saya bisa juga panggil begini this.document atau window.document itu akan sama karena document itu adalah object yang berada didalam object window

jadi DOMnya itu ini representasi yang ada didalam browsernya 

gimana paham gak?

nah siDOM ini atau model document tadi itu didalam memory kalian tersimpan sebagai pohon herarki DOM 

atau ini ada yang bilang namanya DOM tree 
nah kenapa DOM tree?

karena nanti representaasinya mirip sebagai pohon
dia punya cabang dia punya akar dll


contohnya seperti ini

                                  html
             head                              body
         meta    title                     h1   p    ul 
                                                      li        li         li
                                                      item 1     item 2     item 3


jadi kalo misalkan kita buat halaman web yang tersimpan itu representasinya gini modelnya


ini sesuai herarki html yang kalian tulis 

kalo misalkan kita bikin html 
itu tag terluarnya pastika html lalu ada dua element utama ada head ada body dibawahnya 

jadi itu representasinya seperti itu 
jadi tag paling atasnya itu html lalu dia punya anak 2 ya cabangnya ada head ada body 

terus body juga punya banyak anak
dan head juga punya banyak anak

ini yang disebut dengan pohon herarki DOM
 
dan pemahaman mengenai pohon herarki ini nantinya sangat penting terutama ketika kalian memilih atau menyeleksi sebuah element atau menelusurinya 

ya tapi itu nanti lah ya 

tiap tiap kotak itu nantinya kita akan sebut sebagai node atau simpul yang bentuknya juga sama dia object juga

dan semua simpul ini dia berada dibawah satu simpul yang tadi namanya document

gitu ya mudah mudahan paham sampai sini 

atau kalo gak kita lihat contoh berikut ini 

misalnya saya punya element sderhana saja  seperti ini 

        <p>ini adalah paragraf dengan 
            <a href="tes.html">link</a>
            didalamnya 
        </p>

coba kira kira representasi pohon DOMnya seperti apa 
nah coba sampai disini kalian bisa kira kira gak ?

kalian bikin tag mana yang ada diatasnya dan tag mana yang menjadi anaknya 

ini hasilnya sepreti ini 


                         p 
 ini adalah paragraf        dengan didalamnya 
                    a      href 
                   link     tes.html


jadi tag terluarnya adalah p 
dan mempunya banyak anak

ini baru satu tag p 
gimana kalo misalnya halamannya komplex 

ya tentu saja DOM treenya akan sangat besar sekali begitu 


ya jadi kalo misalkan kita kembali ke kasus kita tadi 

yang representasinya kalian bisa lihat diconsole itu ada didalam object document direpresentasikan sebagai pohon herarki DOM atau DOM tree

nah sebetulnya object document ini dia merupakan bagian dari object yang lain yang lebih tinggi 

karena itu kan document hanya berada diarea putihnya saja area websitenya lah ya 


nah browser itu ada lagi object yang lebih tinggi
kita lihat 

sebetulnya diatas document itu ada lagi yang namanya window

window
    document ....
    history
    location 

document hanya salah satu bagian dari window

nah window ini isinya lebih besar lagi 
ya kalo tadi document hanya mengelola apa yang ada didalam website 

nah kalo window dia sampai bisa mengontrol browsernya 
dia tahu ukuran borsernya berapa 

dia tahu posisi cursor ada dimana 
dia tahu kita lagi scrool dijarak berapa dan lain sebagainya 

itu jadi ada object lagi yang lebih besar lagi 

jadi kalo kita lihat document itu hanya diarea putihnya saja 

nah window itu semuanya 
ya objectnya lebih besar lagi

ya tapi kita tidak perlu khawatikan object window kita fokus ke documentnya saja dulu

gimana kita bisa mengelola element element yang ada didalam website kita menggunakan DOM tadi 


jadi sampai disini mudah mudahan kalian paham kira kira DOM itu apa sih dan representasinya seperti apa


ya jadi kalo kita ulangi 

DOM itu tadi kita sebut dengan antar muka pemrograman berbasis object yang mempresentasikan document web

ya jadi kita sebut dengan antar muka pemrogaman ya 
kenapa ?
karena nantinya kita bisa menghubungkan element javascript kedalam tag html tadi 

antar mukanya apa? ya DOM tadi 

ya kita nanti menyuruh DOM untuk tolong carikan element apa 

sehingga kita bisa membuat seluruh komponen yang ada didalam Documentnya tadi kita bisa aksess dan manipulasi 

komponen

nah lalu komponen apa saja yang bisa kita manipulasi?

ya macam macam
yang paling gampang adalah element html

dicari elementnya terus kita manipulasi

terus kita bisa cari atributnya misalkan 
element tersebut punya atribut apa nanti bisa kita ubah


atau misalnya tulisannya atau textnya kita bisa ubah dari apa menjadi apa

dan masih banyak lagi yang bisa kita aksess dan manipulasi menggunakan DOM ini 


DOM dapat dimanipulasi (dibuat, diubah, dihapus) menggunakan javascript



nah jadi misalkan kalo kita buka sebuah website apapun itu
misalnya kalian buka toko online 

misalnya ada gambar bergerak secara otomatis 
yang ada bulet buletnya bisa diklik terus gambarnya berubah 

kalian klik menu terus tiba tiba menunya kebuka besar

nah itu tidak akan seperti itu kalo misalka tidak ada script yang mengakses DOMnya 


ya atau misalkan kalian mau bikin game menggunakan javascript 
itupun harus paham mengenai DOM 

ya sekali lagi DOM sangat penting dalam pemrogaman web

selanjutnya setelah kita tahu apa itu DOM apa yang bisa dilakukan DOM 

pertannyaannya sekarang apa yang akan kita pelajari diseri ini 


kita lihat yang pertama 

1.DOM selection
    kita akan belajar menyeleksi atau mengakses begitu ya
    bagai mana kita memilih element yang ada didalam DOM ini menggunakan javascript 

2.DOM manipulation
    kita bisa memanipulasi element pada html 
    misalkan menambah element baru menghapus mengubah dan lain sebagainya 

3.DOM traversal
    DOM traversal atau menelusuri element html lewat element html yang lain nah ini penting ya 

4.Event heandling
    lalu kita juga akan belajar mengenai event heandling dimana nanti kita akan melakukan perubahan pada DOMnya atau menelusuri DOmnya karena ada treeger misalkna ada strick klik cursor digerakkan dan lain sebagainya 

5.study kasus
    nah setelah kita belajar semua ini nanti kita akan membuat study kasus 
    kita akan membuat progam progam sederhana 

    ya mungkin nanti kita akan bikin kalkulator sederhana 
    kita akan bikin aplikasi untuk membuat slide show 
    atau nanti kita akan buat game sederhana ya 

    jadi diikuti saja terus serinya saya yakin pasti akan seru banget

oke ya temen temen jadi itu ya pengantar untuk seri ini 

mudah mudahan kalian semangat untuk mengikuti seri ini 

tinggal selanjutnya kita akan siap siap dimateri selanjutnya kita akan ngoding mengenai DOM ini 

oke jadi sampai disini dulu materinya 

kita akan ketemu lagi dimateri selanjutnya 

dan satu lagi jangan lupa titik koma ; */
