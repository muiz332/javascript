/* javascript lanjutan: higher order function

kita masuk ketopik yang baru mengenai sesuatu yang dinamakan dengan higher order function

nah ini cukup penting ketika kalian ingin belajar mengenai modern javascript

nah dimateri kali ini kita akan bahas dulu teorinya 
apa itu definisinya dan contohnya seperti apa

nanti dimateri berikutnya kita akan bahas implementasi dari higher order function ini

ya tapi sekarang kita lihat dulu definisi dari higher order function ini

jadi menurut eloquent javascript.net 
higher order function pada javascript adalah function yang beroprasi pada function yang lain,
baik itu digunakan sebagai argument maupun sebagai return value 

nah karena didalam javascript itu sebuah function disebut dengan first class function 
artinya inti dari javascript itu adalah function

nah dimana function ini diperlakukan sebagai object didalam javascript 
dan kalo kalian tahu object itu merupakan value sama seperti intejer atau string misalnya 

nah maka function juga kita bisa simpan sebagai argument maupun return value dari sebuah function yang lain

nah sebetulnya ini sudah kita coba ketika kita belajar mengenai closure dimateri sebelumnya 

coba kita lihat contoh berikut ini
misalkan saya punya sebuah function seperti ini

function kerjakanTugas(mataKuliah,  selesai){
    console.log(`Mulai mengerjakan tugas ${mataKuliah} `)
    selesai()
}

nah jadi kita punya sebuah function yang memiliki dua buah parameter 
nah parameter mataKuliah nanti kita simpan berupa string misalnya mata kuliahnya pemrograman web

lalu parameter kedua adalah selesai yang merupakan function 
nah jadi diluar functin kerjakanTugas ini kita harus membuat sebuah function yang tulisannya seperti ini

function selesai(){
    alert('selesai mengerjakan tugas');
}

nah jadi kalian bisa lihat nih kita menggunakan function sebagai argument 
dan ketika kita panggil bisa tulis begini

kerjakanTugas('pemrograman web', selesai);

parameter yang pertama adalah string dan parameter yang kedua adalah function 
nah jadi ketika kita jalankan diconsole akan tampil dan dibrowsernya akan tampil alertnya 

tapi kalian bisa langsung saja simpan functionnya didalam argumentnnya menggunakan anonymous function

nah gitu ya ini hanya contoh saja bahwa ketika kita menggunakan function kita bisa menyimpan function lagi sebagai argument

ya kalo sudah begini function kerjakan tugas ini bisa kita sebut dengan higher order function 

dan jika kalian punya function sebagai argument nantinya ini kita sebut dengan callback

oke jadi function yang kita simpan kedalam argument kita sebut sebagai callback sedangkan function yang memiliki argument berupa function itu disebut dengan higher order function

mudah mudahan sampai disini paham nih 


atau kita lihat contoh yang lain ya 
dibeberapa materi sebelumnya kita sudah coba menggunakan setTimeout() atau setInterval()

setTimeou(function(){
    console.log('hello world')
}, 1000)

nah setInterval() ataupun setTimeout() memiliki dua parameter 
parameter yang pertama adalah function lalu parameter yang kedua adalah intejer untuk menyimpan milisecond waktunya 

nah tapi kalian bisa lihat parameter pertamanya adalah sebuah function 
atau tadi istilahnya adalah callback

sehingga setTimeout ataupun setInterval kita bisa sebut dengan higher order function

atau misalkan contoh lainnya

const submit = document.querySelector('.submit')
submit.addEventListener('click', function(){
    console.log('tombol ditekan!')
})

ketika kalian ingin membuat sebuah tombol yang begitu tombolnya diklik lalu melakukan aksi tertentu 

nah kalo menggunkan DOM itu kan kita bisa bikin variable lalu kita ambil elementnya bisa menggunakan querySelector

lalu kita tambahkan addEventListener lalu eventnya apa dan callbacknya apa

nah ini juga bisa kita anggap sebagai higher order function

dan contoh lainnya ketika kita punya function yang return valuenya adalah function lagi 


function ucapkanSalam(waktu){
    return function (nama){
        console.log(`halo ${nama}, selamat ${waktu}  semoga harimu menyenangkan)
    }
}

let selamatMalam = ucapkanSalam('malam')
let muiz = selamatMalam('muiz')

nah ini sudah kita coba ya dimateri closure

kita punya function yang namanya ucapkanSalam yang didalamnya mereturn function lagi

nah sekarang function ucapkanSalam ini juga kita bisa sebut dengan higher order function 
karena didalamnya memiliki return value yang juga function

nah gitu ya 
sekarang mungkin pertanyaannya adalah kenapa sih kita harus menggunakan higher order function 
kenapa kita tidak bikin function biasa saja?

ada beberapa alasannya

1.abstraksi
    alasan yang pertama untuk sesuatu yang dinamakan dengan abstraksi 
    untuk membuat agar code yang kita buat itu bisa lebih sederhana atau bisa lebih simple gitu ya 

    karena dengan menggunakan function itu artinya kita menyembunyikan kerumitan code kita 

    karena semakin beser sebuah progam semakin tinggi kekomplexitas didalamnya 
    maka akan semakin membingungkan programmernya 

    jadi makin banyak codenya nah itu akan semakin membingungkan 
    nah ada baiknya kita pisahkan dengan function function sendiri

    dan ketika kita punya function didalam function nah itu harusnya akan membuat progamnya menjadi lebih simple 

nah terus ada sebuah anekdot 

ada dua buah cara merancar sebuah softwere
cara pertama adalah untuk membuat progamnya sesederhana mungkin sehingga jelas jelas tidak ada kekurangannya 
cara lainnya adalah untuk membuat progamnya sekomplex mungkin sehingga tidak ada kekurangan yang jelas

nah cara yang kedua ini kekurangannya ada tapi kekurangannya tidak jelas 

nah dari sini kita bisa lihat bahwa semakin simple progamnya semakin kecil kemungkinan ada kesalahan didalamnya 

nah sekarang kita lihat contoh berikut ini ya 
jadi misalkan saya punya progam sederhana seperti ini 

let total = 0,  count = 1

while(count <= 10){
    total += count
    count += 1
}
console.log(total)


nah jadi kita punya looping untuk totalnya ya jadi total akan nambah 1 nambah 2 sesuai dengan nilai countnya 

nah dengan menggunakan while kita bisa tulis seperti ini 

sekarang bandingkan dengan saya menulisnya begini misalnya 

console.log(sum(range(1, 10)))

ini kalo misalkan kalian jalankan mungkin eror ya 
tapi bayangkan saja ada definisi function yang namanya sum dan range 

nah tapi bayangkan ketika kalian manggil dua function ini secara bersamaan 
jadi ada function yang menjadi parameter function yang lain 

maka akan lebih simple  cukup satu baris saja 

karena kerumitannya kita sembunyikan kedalam function 

oke atau misalnya kita punya looping seperti ini lah

for(let  i = 0; i < 10; i++){
    console.log(i)
}

ya seperti tadi tapi sekarang kita gunakan yang for
ini mencetak console.log i nya ya 

kelihatannya simple tapi gimana kalo misalkan saya ingin loopingnya tidak 10 kali 
bisa 100 kali atau 1000 kali

nah kan berarti kita harus merubah angka 10 itu ya 
jadi tidak dinamis 

nah gimana kalo misalkan kita gunakan sebuah function 

function repeatLog(n){
    for(let i = 0; i < n; i++){
        console.log(n)
    }
}

repeatLog(10)

jadi nulis fornya cuma sekali 
kita ganti angka 10nya menjadi variable n yang menjadi argument dari repeatLog

sehingga kalo kita mau mengulang sebanyak apapun tinggal kasih repeat log 
lalu kasih argumentnya berapa

ya kan simple ya 
mau 10 kali tinggal tulis saja 10 mau 100 tinggal tulis 100
tanpa mengubah lagi loopingnya 

oke jadi dengan menggunakan function itu abstraksi

tapi kita bisa bikin ini lebih efektif lagi
nah pertannyaannya gimana kalo misalkan aksi yang dijalankan itu bukan console.log
tapi saya punya aksi yang lain 

misalnya saya mau tampilnya kedalam alert 
nah kita bisa bikin menjadi seperti ini

function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i)
    }
}
repeat(10, console.log)
repeat(10, alert)


jadi sekarang function repeatLognya saya ganti dengan repeat
lalu parameternya ada dua
n untuk menentukan aksinya mau diulang berapa kali dan action untuk aksi apa yang mau diulang 

kalo kalian mau console.log tinggal tulis ada console.log
kalo mau alert tinggal tulis saja alert

jadi kasus ini bisa kita buat lebih efektif dengan menggunakan higher order function

gitu ya temen temen 

dan alasan yang lain adalah dengan terbiasa kita membuat segala sesuatunya dengan function 
itu kita masuk kesebuah pendekatanyang namanya functional programming

ya saya tidak akan bahas lebih lanjut disini tapi dengan melakukan pendekatan kefunctional programming
karena sebetulnya javascript bukan bahasa pemrograman functional murni ya 

tapi bisa kita buat menjadi bahasa pemrograman functional
dan ketika kita menggunakan paradikma ini dengan benar itu akan membuat progam kita lebih efektif
lebih aman dan lebih efisien lagi

terakhir ini ada beberapa contoh dari higher order function ya terutama untuk pengelolaan array 

jadi inilah yang akan kita bahas dimateri materi berikutnya 

1. Array.prototype.map()
2. Array.prototype.filter()
3. Array.prototype.reduce()


jadi harusnya kalian sudah punya minimal gambaran mengenai apa itu higher order function dan kenapa kita gunakan ya 
sehingga nanti dimateri berikutnya kita langsung praktekkan saja penggunaan higher order function dengan tiga function ini

oke jadi mungkin itu saja untuk materi kali ini ya 
mudah mudahan paham 

kita akan ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ; */
