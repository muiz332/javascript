/*
Callbacks


dimateri kali ini kita akan membahas mengenai callbacks
walaupun sebetulnya callback ini kita sudah pernah coba saat kita belajar mengenai high order function

tapi dimateri kali ini kita akan lihar lebih detik lagi apa itu callbacks
dan kenapa kita harus pakai

dan nantinya kita harus paham kenapa kita harus hindari

sekarang kita lihat dulu definisi dari callback ini 
jadi secara sederhana callback itu adalah sebuah function yang dikirimkan sebagai argument para function yang lain

kita tahu bahwa function itu dapat menerima berbagai argument ada string integer array object dah bahkan function lagi


ada juga yang mengatakan callback itu adalah sebuah function yang dieksekusi setelah function lainnya 
selesai dijalankan 

kita lihat maksutnya itu seperti apa
jadi kita langsung saja coba ya


nah saya akan kasih contoh dimana callback itu adalah sebuah function yang dieksekusi setelah function 
lainnya selesai dijalankan 

misalnya kita buat function yang namanya halo
dan dia menerima parameter string
dan dia hanya memunculkan alert dari parameter yang diterima


*/

// function halo(nama){
//     alert(`halo ${nama}`)
// }

/*

nah jadi function ini akan kita kirimkan sebagai parameter dari function yang lain
misalkan saya punya sebuah funciton lagi yang namanya tampilkan pesan

dan tampilkan pesan ini akan menerima parameter yaitu function halo tadi

*/

// function tampilkanPesan(callback){
//     // nah kita akan masukkan namanya menggunakna prompt

//     const nama = prompt('masukkan namamu: ')
//     // lalu kita masukan variable nama ini sebagai argument dari function yang kita kirimkan tadi

//     callback(nama)
// }

// // nah sekarnag kita halankan tampilkan pesan ini
// // dan kita kirimkan nih argumentnya yaitu function halo 

// tampilkanPesan(halo)

/*

kalo saya jalankan maka akan muncul prompt
kita masukkan namanya misalkan muiz

nah kemudian dia akan menjalankan fungsi callbacknya 
maka akan tampil alertnya

konsep seperti ini yang kita sebut dengan syncronous callback
jadi programnya itu menjalankan satu tugas dulu

ketika tugasnya selesai maka dia akan lanjut ketugas yang lain
dan sepertinya yang syncronous callback ini akan jarang kita gunakan

nanti yang kita butuhkan adalah yang asyncronous callback

nah bahkan kita bisa saja tidak bikin function baru seperti ini 
jadi didalam parameternya kita bisa pakai anonymous function atau bisa 
juga memakai arrow function


*/


// function tampilkanPesan(callback){

//     const nama = prompt('masukkan namamu: ')
//     callback(nama)
// }

// tampilkanPesan(nama => alert(`halo ${nama}`))

/*

kalo parameternya cuma satu kita tidak perlu menggunakan kurung ya 

nah yang kita butuhkan sebenarnya adalah pemahaman mengenai asyncronous callback
jadi dia membutuhkan waktu tunggu untuk menjalankan programmnya 



nah kita lihat contoh kasus berikut ini 
ceritanya saya punya variable yang namanya mhs yang typenya adalah array
yang didalamnya adalah object 

anggap saja ini kedepannya jadi JSON gitu

*/

const mhs = [
    {
        "nama" : 'muiz',
        "nrp" : "1121101980",
        "jurusan" : 'teknik informatika'
    },
    {
        "nama" : 'husain',
        "nrp" : "1121101981",
        "jurusan" : 'seni budaya'
    },
    {
        "nama" : 'hasan',
        "nrp" : "1121101982",
        "jurusan" : 'teknik mesin'
    }
]



/*

nah sekarang saya mau menampilkan semua nama mahasiswanya kedalam console

*/

// mhs.forEach(v => console.log(v.nama))


/*

kalo saya jalankan sudah muncul ya nama nama dari mahasiwanya
kita belum masuk keasyncronous callbacknya

tapi kalian lihat disini kalo kita pakai higher order function 
biasanya parameternya itu udah callback karena dia function juga sama seperti yang diatas tadi

tapi sekarang saya akan tulis begini 

*/
// console.log('mulai')
// mhs.forEach(v => console.log(v.nama))
// console.log('selesai')

/*

ini kalo kalian lihat adalah syncronou
jadi sintaxnya dieksekusi dari atas kebawah 

kalo kalian jalankan maka akan muncul seperti ini 

mulai
muiz
husain
hasan
selesai


nah kedepannya mungkin kita mengambil datanya tidak seperti ini 
bisa saja kita mengambil datanya lewat API punya orang lain
dan biasanya butuh waktu

dan kalo waktunya cukup lama maka console.log selesai ini tampilnya nunggu dulu 
foreachnya selesai karena dia blocking dan syncronous 

sekarang coba kita simulasikan seolah olah mengambil datanya itu lama






*/

// console.log('mulai')
// mhs.forEach(v => {
//     for(let i = 0; i<10000000; i++){
//         let date = new Date();
//     }
//     console.log(v.nama)
// })
// console.log('selesai')


/*

kalo kita jalankan maka datanya akan tampil lama ya 
setelah selasai datanya baru console.log selesai dijalankan

nah bayangkan kalo tidak selesai selesai maka script dibawah foreachnya akan lama dijalankannya
karena dia syncronous

nah sekarang gimana kalo kita ubah menjadi asyncronous


*/


// asyncronous callback

/*

nah ceritanya gini 
saya mau bikin sebuah function yang ketika function itu dijalankan
dia akan merequest data menggunakan ajax 

nanti kita lihat sekilas mengenai ajax pada javascript 

nah kita buat folder dulu namanya data
yang isinya adalah file json 

didalam file json itu datanya seperti data mhs jadi kita tinggal copas saja ya 
tapi untuk JSON itu harus menggunakan kutip 2 ya 


*/

/*

jadi ceritanya begini saya punya sebuah function 
namanya getDataMahasiswa dan dia akan menerima 3 parameter

yang pertama itu url /alamat penyimpanan datanya atau nanti ini bisa diganti dengan API
yang kedua adalah function callback ketika success atau ketika datanya berhasil diambil 
yang ketiga adalah function callback ketika eror 



*/

// function getDataMahasiswa(url,success,eror){
//     // sekarang saya akan jalankan si ajaxnya 
//     /*
    
//     nah untuk menjalankan ajaxnya kita panggil dulu  object
//     ajaxnya dengan menuliskan new XMLHttpRequest()
    
//     */
//     let xhr = new XMLHttpRequest()

//     /*
    
//     kemudian kita check nih ketika statenya sudah siap kita
//     akan jalankan sebuah function

//     untuk mengechek kalo udah ready menggunakan method onreadystatechange
//     yang kita isi dengan function 
    
//     */

//     xhr.onreadystatechange = function(){
//         // nah kita check nih 
//         // ketika sudah ready maka lakukan sesuatu
//         // 4 itu sudah ready karena perubahan state itu berubah dari 0-4
//         // dan masing masing state punya keadaanya sendiri sendiri
//         // kita menggunakan method readyState 

//         if(xhr.readyState === 4){
//             // kemudian kita check nih statusnya
//             // ketika statusnya 200 itu kita bisa mengakses sebuah halaman
//             // dalam hal ini halamannya mhs.json 

//             if(xhr.status === 200){
//                 // kalo oke maka kita butuh responnya
//                 // tapi respon ini saya akan kirimkan kefunction success

//                 success(xhr.response)
//             }else if(xhr.status === 404){
//                 // nah ketika statusnya 404 itu not found ya
//                 // maka jalankan callback erornya 
//                 // tidak perlu ada responnya kalo eror tinggal kita tampilkan pesan erornya 

//                 eror()
//             }
//         }
//     }

//     /*
    
//     nah sekarang kita jalankan ajxnya menggunakan method open()
//     fungsi ini memiliki 2 parameter  
//     yang pertama methodnya mau apa dan yang kedua urlnya mau kemana
    
//     */

//     xhr.open('get',url)
//     // nah untuk methodnya pakai get saja
//     // dan untuk urlnya kita ambil dari parameter
//     // dan yang terakhir kita send()

//     xhr.send()
// }

// /*

// nah adalah ajax menggunakan vanilla javascript 

// sekarang tinggal kita panggil functionnya 
// parameter pertama adalah urlnya yang kedua adalah ketka success dan yang ketiga callback ketika eror

// */

// getDataMahasiswa('data/mhs.json',result =>{
//     // kita coba lihat dulu isinya

//     console.log(result)
// },() => {

// })

/*

nah kalo kita jalankan maka akan eror 
kerena akses ke mhsnya diblock oleh cors

nah ini artinya kita harus jalankan kedalam sebuah web server 
yang paling simple kalian bisa simpan kedalam htdoc kalo kalian memiliki XAMPP

tapi kalian bisa pakai extention yang namnya live server 

*/

function getDataMahasiswa(url,success,eror){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.response)
            }else if(xhr.status === 404){
                eror()
            }
        }
    }

    xhr.open('get',url)
    xhr.send()
}

// getDataMahasiswa('data/mhs.json',result => {
//     // console.log(result)
//     // kalo saya jalankan akan tampil tapi bentuknya text
//     // kita butuh tampilnya itu object
//     // cara nya result ini harus kita parse dulu
//     // dengan menggunakan method JSON.parser()
//     data = JSON.parse(result)
//     // console.log(data)

//     // kalo ingin namanya saja yang muncul tinggal kita looping saja 
//     data.forEach(v => console.log(v.nama))
// },() => console.log('data tidak ditemukan'))



/*

nah sekarang apa bedanya yang kita lakukan ini dengan yang diatas
nah bedanya sekarang sudah asyncronous
buat mengecheknya kalian bisa gini

*/

// console.log('mulai')
// getDataMahasiswa('data/mhs.json',result => {
//     data = JSON.parse(result)
//     data.forEach(v => console.log(v.nama))
// },() => console.log('data tidak ditemukan'))

// console.log('selesai')



/*

mulai
selesai
muiz
husain
hasan

nah sekarang akan muncul mulai dan selesai dulu kemudian datanya 
karena console.log ini akan masuk ke stage lalu jalankan 
dan hilang

kemudian menjalankan function getDataMahasiwa ini 
karena ini bukan dari V8 enginnya maka dia tidak bisa menjalankan 
untuk menjalakan dia butuh web API

jadi dia masuk kedalam web API dulu
setelah dia masuk kan kosong stage nya maka console.log selesai dijalankan dulu

dari web API ketik adatanya sudah berhasil didalapatkan
maka akan mausk kedalam callback queue 

kemudian si event loop akan mengechek didalam stage nya apakah kosong?
dan ketika kosong makan akan diarahkan ke stage kemudian menjalankan pertahnya seperti callback yang ada didalam parameternya 


jadi mudah mudahan kalian paham ini adalah contoh asyncronous callback


dan kalo mau lebih gampang lagi kita bisa saja gunakan bantuan dari jquery

kalian googling saja jquery cdn kalian pilih saja yang uncompress atau yang minifide 
jangan pilih yang slim karena tidak ada ajaxnya 

kita pakai yang minifide aja ya 
begitu pula kalo kalian pakai boostrap itu jquerynya yang slim jadi harus kalian ganti ya 



*/

// pakai jquery


console.log('mulai')

/*

nah jadi jqeru kalian tinggal panggil methodnya yang namanya ajax
yang paramternya adalah object

*/

$.ajax({
    url : 'data/mhs.json',
    success: function(result){
        // nah kerennya datanya yang langsung dibalikin adalah json
        result.forEach(v => console.log(v.nama))
    },

    eror : (e) => {
        // kalo kalian mau menampilkan erornya tinggal 
        // kasih saja parameter dan munculkan menggunakan method responseText agar
        // erornya dalam bentuk text
        console.log(e.responseText)
    }
})

console.log('selesai')

/*

kalo kalian jalankan ya sama saja ya 

nah sebenarnya didalam javacript murni sudah ada fungsi yang baru untuk menggantikan 
ajax yang diatas jsquery

namanya fetch tapi nanti itu akan kita pelajari dimateri berikutnya 

intinya dimateri kali ini kalian sudah tahu bagaimana cara menggunakan asyncronous javascript
nah tapi ini kasusnya datanya masih berupa json 

dan nanti kita akan coba bikin aplikasi yang lebih real lagi
kita akan benar benar connect ke API sehingga kita bisa lihat bagaimana
cara pakai callback

dan nnatinya kita akan lihat kelemahan dari callback itu apa


jadi sampai disini dulu materi kali ini 
nudah mudahan kalian paham 

kita akan ketemu dimateri berikutnya 
dan satu lagi jangan lupa titik koma ; 


*/