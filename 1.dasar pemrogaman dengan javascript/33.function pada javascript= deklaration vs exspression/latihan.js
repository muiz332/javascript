/* function pada javascript: declaration vs exspression

kali ini topiknya simle saja kita akan bahas mengenai perbandingan antara function declaration dan function exspression

jadi kalo temen temen inget diawal dari penjelasan mengenai function ini kita tahu bahwa cara penulisan function itu ada 2 ya 

dengan menggunakan deklarasi atau menggunakan exspression 
ya dimateri kali ini kita akan bahas perilaku dari masing masing cara penulisan tersebut 

serta kapan si kita akan menggunakan function declaraion dan function exspression ini

nah dibeberapa materi sebelumnya itu contoh function yang menggunakan type penulisan declaration 

ya atau kita lihat dulu ya bagaimana cara penulisan formal dari function declaration ini 

ya jadi untuk function declaration ini rumusnya itu seperti ini 
jadi kita punya keyword function dulu 

lalu selanjutnya ada indentifiernya atau nama functionnya jadi ini harus ada 
lalu dalam kurung boleh ada parameternya ya ini optional tapi tetap harus ada kurung buka dan kurung tutupnya 

lalu selanjutnya ada kurung kurawal untuk membungkus function bodynya 


function declaration

function identifire (parameter opt) {function body}

ya jadi ini rumusnya untuk menulis function declaration 

sedangkan untuk function exspression itu mirip banget ya nih kalian lihat 


function exspression 

function identifire opt (parameter opt ) {function body}

jadi didepannya tetap ada keyword function wajib ada lalu identifirenya itu optional 
nah jadi function exspression ini boleh aja tidak punya nama 

loh kok bisa ya, nanti kita lihat ya 
lalu selanjutnya sama saja ada tanda kurung untuk menyimpan parameternya ini optional 

dan diakhir ada kurung kurawal untuk menyimpan function bodynya 

ya jadi perbedaanya hanya di indentifirenya saja 
function exspression itu boleh saja tidak punya nama 
nah tapi selain itu ada juga perbedaanya, nanti kita lihat 


kita lihat contoh yang pertama dulu function declaration 
ini function yang sering kali kita buat dimateri materi sebelumnya 

ini saya punya sebuah function yang sangat sederhana ya 


function tampilPesan(nama){
    alert('halo ' + nama);
}
tampilPesan()

kalo pakai function declaration nulisnya gini 
keyword function, nama functionnya apa, lalu ada parameter, lalu didalamnya ada function body

jadi ini function yang gunanya untuk menampilkan pesan yang menggunakan popup alert yang tulisannya halo terus nanti namanya siapa tergantung dari argument yang dikirimkan 

ya ini function declaration harusnya ini tidak ada masalah 

nah sekarang kita lihat function yang sama kalo kita ubah menajdi function exspression 

nah jadi kalo function exspression itu sebetulnya sama sepeti ini ya 

function tampilPesan(nama){
    alert('halo ' + nama);
}
tampilPesan()

keyword funciton harus ada, nama functionya optional boleh ada boleh tidak
parameter, dan function body

nah tapi ini belum disebut dengan function exspression 


atau gini deh kalo kita hilangkan nama functionnya, katanya optional ya 
jadi bisa seperti ini 

function(nama){
    alert('halo ' + nama);
}

nah tapi apakah ini sudah disebut function exspression? belum juga
nah ini akan menjafdi function exspression ketika kita simpan kedalam sebuah exspression 

seperti ini 

var tampilPesan = function(nama){
    alert('halo ' + nama);
}
tampilPesan();

ketika kita simpan atau kita assignment kedalam sebuah variable 
nah ini baru sekarang disebut dengan function exspression 

jadi sekarang saya punya variable yang namannya tampilPesan 

tampilPesan ini bukan lagi saya simpan sebagai nama function tapi sekarang sebagi variable yang menyimpan sebuah function 

nah begitu ya 
jadi bedanya kalo function exspression itu biasanya disimpan kedalam sebuah variable 

oke jadi sekarang kita sudah tahu cara menulisnya seperti apa 

sekarang kita lihat perbedaan lebih lanjutnya seperti apa


function declaration

1.lebih flexible (dapat ditulis dimanapun)
    untuk function declaratio itu sebetulnya bisa kita bilang lebih flexible 

    kenapa lebih flexible?
    karena kita bisa tulis dimanapun

    nah maksutnya gimana?
    maksutnya gini, jadi kita bisa tulis declaration functionnya sebelum atau sesudah pemanggilan function

    jadi kita bisa panggil dulu baru dideklarasikan atau sebaliknya deklarasikan dulu baru kita panggil
    
    ya walaupun yang kita lakukan dimateri sebelumnya itu pasti dideklarasikan dulu baru dipanggil 

    nah ini terjadi karena didalam javascript itu ada konsep yang namanya hoisting

    dimana deklarasi sebuah function itu pasti disimpan terlebih dahulu didalam memory 
    ya tapi nanti untuk konsep hoisting ini kita akan bahas lebih lanjut dimateri yang lain ya supaya kalian tidak bingung

    pokoknya sekarang pahami dulu saja bahwa ada konsep hoisting yang membuat kita lebih flexible untuk membuat function declaration 

2.mudah dipahami pemula
    nah selanjutnya function declaration ini juga mudah dipahami untuk pemula 
    ya setidaknya untuk saya ketika saya baru belajar mengenai javascript ini 

    karena begini 
    kalo misalkan kita punya sebuah function seperti ini 

    function tampilPesan(nama){
        alert('halo ' + nama);
    }
    tampilPesan("muiz");

    lalu dibawah functionnya kita panggil, jadi seperti biasa kita lakukan sebelumnya ya 
    nah ini tidak ada masalah 

    pasti nanti tampil ke layar sebuah popup halo muiz gitu 

    tapi kalo sekarang kita balik 
    kita panggil dulu lalu kita deklarasikan functionnya dibawah codenya gitu ya 

    tampilPesan('muiz');

    function tampilPesan(nama){
        alert('halo ' + nama);
    }

    nah ini juga akan tampil normal 
    ya akan tampil popup halo muiz, nah ini gara gara konsep hoisting tadi 


    nah kalo function exspression tidak bisa kayak gitu
    dia harus didefinisikan dulu baru dipanggil nanti setelahnya, ya memang tidak seflexible declaration 

    tapi function exspression ini lebih powerfull
    ya didalamnya kita bisa membuat si function exspression ini sebagai yang disebut dengan closure 

    ya untuk closure ini akan saya bahas dimateri yang lain 
    karena kalo saya bahas sekarang mungkin saja akan membingungkan buat kalian yang baru belajar 

    ya pahami saja bahwa function exspression bisa kita buat sebagai closure atau sebagai argument untuk function yang lain

    nah ini udah cukup komplex nih

    dan yang terakhir dia bisa dibuat sebagai IIFE (Imediately Invoked Function exspression)

    nah jadi 3 hal ini untuk penggunaan javascript yang sudah komplex 

    gitu jadi kalo misalkan saya punya seperti ini 

    var tampilPesan = function(nama){
        alert('halo ' + nama);
    }
    tampilPesan('muiz');

    menggunakan function exspression dimana kita tulis dulu definisinya atau deklarasinya baru kita panggil 
    nah ini jalan dengan normal 

    tapi ketika kita balik panggil dulu lalu definisikan 

    tampilPesan('muiz');

    var tampilPesan = function(nama){
        alert('halo ' + nama);
    }

    nah ini eror tidak akan berjalan progamnya 

    ya jadi kalo pakai function exspression selalu tulis dulu deklarasi atau definisi functionnya baru dipanggil

    gitu ya mudah mudahan paham


sekarang pertannyaann terakhir kita pilih yang mana? kita gunakan yang mana?

nah ini secara umum saya bilang sama saja ya apalagi buat kalian yang baru belajar 

silahkan coba membuat function menggunakan declaration silahkan coba juga membuat function menggunakan exspression 

ya apalagi khusus untuk seri kita kali ini kita tidak menggunakan dulu kemampuan dari function exspression tadi 

cloure, argument, atau IIFE tadi 

jadi kalo misalkan kalian menggunakan yang declaration pun juga tidak masalah kalo misalkan itu memang yang lebih kalian bisa pahami 

nah tapi kalian mesti inget bahwa funtion exspression ini digunakan dipemrogaman javascript yang lebih lanjut dan lebih moderen gitu 

ya apalagi sekarang ada yang disebut dengan functional progamming 
nah itu cara penulisan functionnya sudah menggunakan function exspression 

lalu juga kalo misalkan kalian nanti menggunakan sebuah framework misalnya ya kalian pakai jquery contohnya 

nah didalam jquery yang digunakan adalah konsep function exspression gitu

jadi kalo misalkan kalian sudah paham mengenai mekanisme dan cara buat function declaration coba menulis functionnya menggunakan function exspression 

oke mungkin itu saja untuk materi kali ini simple saja bagimana kita membedakan antara function declaration dan function exspression 

mungkin kedepannya kita akan coba menulis semua function kita menggunakan function exspression supaya kalian bisa lebih paham lagi

oke sampai disini dulu materinya 

oke kita ketemu lagi dimateri yang akan datang 

dan satu lagi jangan lupa titik koma ; */