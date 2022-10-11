/*kenapa belajar javascript? 

dimateri kali ini kita akan membahas kenapa sih kita belajarnya javascript? bukan bahasa pemrogaman yang lain
kita tahu ada beberapa bahasa pemrogaman yang pupular dan banyak digunakan oleh programmer programmer saat ini

tapi kenapa kita pilihnya javascript? kita lihat beberapa alasan berikut ini 

1. javacript itu gratis
    kita pilih javascrip karena javascript itu gratis yang artinya kita tidak perlu membeli sofwerenya lisensinya atau serial numbernya 

2. javacript tidak perlu installasi
    javascript itu tidak perlu instalasi, kenapa? karena tiap tiap browser itu sebetulnya sudah memiliki javascript didalamnya atau yang 
    kita sebut dengan enggine atau interpreter javascript 

3. hanya butuh browser
    javacript hanya butuh web browser, artinya selama kalian punya web browser kalian sudah bisa membuat dan menjalankan javascript, jadi 
    cukup simple apalagi untuk kita yang baru belajar pemrogaman 

kita tidak perlu repot repot instal dan konfigurasi seperti misalnya php yang mengharuskan kita menginstal web server atau c yang mengharuskan kita menginstal compiler atau python yang mengharuskan kita sedikit konfigurasi pada sistem kita 

alasan ini saja sudah cukup untuk kita sebagai pemula yang baru belajar pemogaman untuk memilih javascript sebagai bahasa pemrogaman 
pertamanya, tapi kita lihat lagi alasannya 

kita lihat dulu dari definisi wikipedia 

javascript is hight-level, scripting, untyped, and interpreted progamming language

- hight level language
    yang pertama itu katanya javascript itu adalah bahasa yang hight level language, javascript itu berada dikategori bahasa yang hight level 
    semakin mendekati keatas itu bahasanya semakin mudah dimengerti oleh manusia, jadi javascript itu berada di katergori bahasa tingkat 
    tinggi dan itu cocok untuk pemula karena bahasanya lebih mudah dimengerti 

- scripting
    lalu selanjutnya ada scripting atau scripting languag, apa itu maksutnya ?
    jadi gini javascript itu dibuat untuk berinteraksi dengan halaman web, setidaknya itu tujuan awal diciptakannya 

    jadi javascript itu sepesifik hanya untuk aplikasi web tidak sepeti bahasa bahasa misalnya c++, c#, java, atau objective-C yang merupakan bahasa
    pemrogaman yang digunakan untuk membuat aplikasi desktop yang berjalan didalam sebuah sistem operasi tertentu 

    javascript adalah sebuah bahasa scripting, bahasa scripting yaitu bahasa pemrogaman yang tertanam didalam sebuah progam yang lebih besar, jadi 
    yang hanya bisa menggunakan bahasa scripting ya hanya progam tadi 

    bahasa scripting itu tidak hanya javascript jadi ada bahasa lain seperti misalnya didalam progam adobe flash, kalo sekarang namanya adobe animate
    itu ada bahasa yang dinamakan dengan actionScript, jadi sama ada kata script didalamnya, biasanya yang ada kata script didalamnya merupakan bahasa
    yang ada didalam progam tertentu 

    nah jadi actionScript cuma jalan di adobe flash atau misalnya didalam microsof office itu kita bisa menggunakan script yang namanya VBScript nah
    begitu pula dengan javascript yang berada di didalam sebuah web browser apapun web browsernya baik itu google crome atau mozila fire fox dan lain
    lain itu bisa menjalankan javascript yang ada didalamnya 

    jadi ini adalah penjelasan mengenai scripting language 

- untyped
    lalu selanjutnya tadi ada yang disebut dengan untyped jadi javascript adalah kategori bahasa yang untyped
    apa itu maskutnya?

    pahami dulu konsepnya mungkin penjelasannya agak sedkit paanjang, jadi ada dua kategori bahasa pemrogaman berdasarkan bagaimana dia mengolah 
    type data didalamnya ada yang disebut dengan untyped dan ada yang disebut dengan typed 

    nah javascript dikategorikan dengan bahasa yang untyped atau kata lainnya adalah dinamically type nah maksutnya bagaimana? 
    kalo misalan kita membuat variable didalam bahasa pemrogaman yang untyped itu variablenya bisa diisi dengan tipe data yang berbeda
    
    misalnya awalnya kita isi dengan angka terus nanti belakangan kita isi dengan tulisan atau huruf, nah itu bisa saja kalo yang untyped 
    sedangkan yang type tidak, jadi contohnya mungkin seperti ini 

    kalian jangan dulu khawatir dengan sintaxnya kita lihat dulu saja konsepnya 

    misalnya untuk yang untyped jika kita deklarasikan sebuah variable seperti ini misalkan variable namanya x lalu kita isi dengan angka 
    maka sekarang variable x itu tipe datanya ita sebut dengan intejer(int) 

    untyped 

    var x = 1234;

    lalu nanti misalnya didalam bagian lain diprogamnya kita isi kembali x dengan sebuah tulisan atau kita sebut dengan string nanti ya 

    untyped 

    var x = 1234;
        x = "hello world";
        
    atau misalkan kita isi dengan objek seperti ini 

    untyped 

    var x = 1234;
        x = "hello world";
        x = {hello: "world"};
        
    nah ini oke, artinya tidak masalah 


    tapi kalo bahasa pemrogaman yang type pada awal kita mendeklarasikan variablenya, kita juga harus mendefinisikan type datanya sehingga kita 
    punya variable x yang tipe datanya intejer(int) diisi dengan 1234 

    type

    int x = 1234;

    lalu nanti kita ubah menjadi string atau tulisan 

    type 

    int x = 1234;
        x = "hello world";
        
    nah ini akan bermasalah atau akan eror

    nah jadi dengan javascript memiliki kategori untyped menurut saya itu memudahakan khususnya untuk yang mulai belajar pemrogaman, jadi kita 
    tidak perlu pendeklarasian (aturan main dalam sebuah progam) type data 

    walaupun kita mendefinisikan type data diwal juga memiliki keuntungan seperi efisiensi memory dan pencegahan logika progam yang salah 
    misalnya atau kalian punya pendapat lain tentang hal ini? 

    dan kalo kalian masih bingung dengan contoh ini atau dengan istilah istilah tadi seperti type data, int, string, dan lain lain itu tidak 
    usah khawatir ya nanti kita bahas lagi lebih lanjutnya dimateri materi yang akan datang 
    
    itu javascript memiliki kategori untype selanjutnya adalah interpreted 

- interpreter
    jadi javascript adalah bahasa interpreted harusnya kalian sudah tahu apa itu interpreter dan javacript adalah bahasa pemrogaman yang 
    harus dijalankan menggunakan interpreter, nah jadi itu menurut wikpedia 

nah selanjutnya saya punya ada quote menarik dari seseorang namanya matias atau mpjme jadi dia adalah seorang engginer dari spotify dari swedia 
buka saja funfunfunction diyoutube 

katanya dia bilang javascript itu, easy to learn, hard to master 

jadi javascript itu mudah untuk dipelajari tetapi cukup sulit jika ingin menjadi master untuk bahasa tersebut kenapa sulit? karena pembahasannya 
atau topiknya itu tidak habis habis tapi kalian jangan lihat dari sulitnya tetapi lihat sebagai menantangnya 

karena meskipun topiknya tidak habis habis dan teknologinya cepat sekali berkembangnya, penggunanya banyak sekali, javascript ini komunitasnya juga
besar sekali bahkan kalo kalian lihat sebuah surve yang dilakukan oleh stackoverflow.com itu katanya javascript adalah teknologi yang paling popular
kalian bisa lihat dia mengalahkan bahasa bahasa pemrogaman yang lain 

kalo kalian belum tahu stackoverflow.com ini adalah website yang keren sekali apa lagi kalo kalian adalah progammer pasti website ini 
adalah website yang sering kalian kunjungi kalo mau mencari solusi kalo misalknya progam kalian error 

nah selain itu juga didalam javascript itu dukungan framework dan librariesnya banyak sekali bahkan hampir semua atau apapun itu ada libraries javascriptnya dan seperti yang saya bilang tadi komunitasnya itu besar termasuk di indonesia 

kalian bisa saja gabung grub grub difacebook atau kalian bisa cari sendiri komunitas komunitas yang banyak banget 
jadi itu asalannya kenapa kita pilih javascript sebagai bahasa pemrogaman yang nantinya akan kita pelajari 

nah sekarang kalo pertanyaanya adalah apa sih yang bisa dilakukan oleh javascript? atau gini dengan belajar javascript kita bisa bikin apa aja sih? 
nah banyak baget yang bisa kita bikin dari javascript ini 

berikut ini adalah beberapa contohnya yang bisa dilakukan oleh javascript adalah 
client-side web development atau membuat dan mendukung pembuata aplikasi web dari sisi client 

kalian bisa menggunakan apa yang disebut dengan native javascript atau yang dikenal juga dengan nama valila javascript atau kata orang kita itu javascript biasa maksutnya javascript yang tanpa menggunakan libraries atau framework, nah ini yang nantinya akan kita penlajari, jadi javascript 
yang native 

atau kalian juga bisa mengembangkan web dengan menggunakan framework seperti JQuery atau yang sekarang yang sedang popular ada yang dinamakan 
dengan angular js, react, ember, backbone dan lain lain

nah itu semua framework dan libraries digunakan untuk membantu kalian mempercepat dan mempermudah penulisan javascript 


sekarang kalian juga bisa melakukan server-side development yaitu pembangunan aplikasi yang berjalan disisi server atau sekarang lebih dikenal 
dengan back end development kalo yang tadi client-side disebut juga dengan front end development 

nah pembangunan aplikasi server ini dipelopori dengan dibuatnya sebuah libraries yang namanya node js nah ini yang membuat javascript 
berjalan diservernya sendiri atau ada framework lain yang namanya expressjs misalnya 

hal lain yang bisa dilakukan oleh javascript juga adalah membuat browser exstention/ add-on jadi kalo misalkan kalian pernah instal crome 
exstention itu juga dibuat dengan javascript 

atau bahakan kalian ingin membuat aplikasi dekstop framework yang membantu membuatnya adalah elektron, appjs 
atau bahakn mobile app development frameworknya jquery mobile, cordova/phonegap

dan yang keren sekarang kalian bisa bikin aplikasi untuk IoT atau internet of thinks dan aplikasi untuk robot itu juga bisa menggunakan
javascript frameworknya cyclon js, jhonny-five

kalo misalkan kalian mau ngoding untuk microcontroler untuk drone atau untuk robot cerdas itu bisa dengan menggunakan bantuan javascript 

dan yang terakhir jangan lupa ada skema atau format data yang namanya json atau javascript objek notation yang digunakan untuk pertukaran 
data, json ini juga dibuat berdasarkan objek dalam javascript 

jadi banyak banget yang bisa dilakukan oleh javascript walaupun yang kita pelajari nantinya adalah dasar dasar dari javascript tapi itu bisa 
menjadi bekal dan fondasi yang kuat ketika kalian akan mebuat aplikasi aplikasi keren seperti ini 


oke jadi menurut saya memperlajari javascript itu selain penting juga seru dan menyenangkan nantinya
mudah mudahan kalian betah dan mengikuti dari awal sampai akhir karena saya yakin manfaatnya cukup banyak 

oke jadi itu akhir dari pendahuluan seri ini mudah mundahan tambah memantapkan kalian untuk belajar mengenai pemrogaman khususnya dengan 
bahasa pemrogaman javascript 

buat yang udah tidak sabar ingin ngoding jangan khawatir mulai materi berikutnya kita akan masuk ke topik javascriptnya 

sampai disini dulu materinya kita bertemu lagi dimateri selanjutnya dan satu lagi jangan lupa titik koma ;







from
web programming unpas

*/
