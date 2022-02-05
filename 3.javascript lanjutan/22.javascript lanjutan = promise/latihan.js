/*

dimateri kali ini kita akan membahas mengenai promise
setelah sebelumnya kita sudah belajar mengenai callback

bagaimana cara bikinnya dan bagaimana implementasinya 
kali ini kita akan membahas mengenai promise


nah jadi promise ini adalah sebuah solusi untuk menangani 
apa yang kita sebut dengan callback hell dimateri sebelumnya 

tapi sebelumnya kita lihat dulu apa itu promise
dan biar lebih gampang kita langsung praktekkan saja


sebelum kita masuk kedalam promise 
dimateri sebelumnya kita sudah tahu kalau mau melakukan request kesebuah api

itu kita bisa menggunakan jquery ajax seperti ini 
kita ambil dari omdb API ya 

*/

// $.ajax({
//     url : "http://www.omdbapi.com/?apikey=2dd838b4&s=dilan",
//     success : res => {
//         console.log(res.Search)
//     },

//     error : er => console.log(er.responseText)
// })

/*

nah sebenarnya simple nulisnya
tapi perlu kalian ingat ini menggunakan library jquery
maka akan ada resource tambahan

kalo kalian tidak mau mengandalkan jquery
kalian bisa menggunakan ajax versi vanilla javascript


oke jadi sintaxnya seperti ini 

*/

// const xhr = new XMLHttpRequest()
// xhr.addEventListener('readystatechange',function(){
//     if(this.readyState === 4){
//         if(this.status === 200){
//             success(this.response)
//         }else if(this.status === 404){
//             console.log(this.responseText)
//         }
//     }
// })

// xhr.open("GET", "http://www.omdbapi.com/?apikey=2dd838b4&s=dilan")
// xhr.send()

// function success(res){
//     res = JSON.parse(res).Search
//     console.log(res)
// }



/*

kalo ini kita jalankan kalian bisa lihat yang
dikembalikan itu sama ya 

sekarang kita tidak menggunakan library external 
kita tidak mengandalkan jquery


tapi kalian lihat nih lumayan banyak yang harus kita tulisnya

nah saat ini dijavascript modern ada cara yang lebih simple dari pada kita
menuliskan object ajax seperti yang diatas yaitu menggunakan fetch

saya bisa pakai method yang namanya fetch
lalu didalam argumentnya itu adalah urlnya 


*/

// const movie = fetch("http://www.omdbapi.com/?apikey=2dd838b4&s=dilan")
// console.log(movie)


/*

dan kalo ini saya simpan kedalam variable movie
kemudian saya munculkan movienya 

maka ini sudah melakukan request
hanya satu baris tapi probemnya yang dikembalikan adalah promise

Promise {<pending>}

nah misalkan kalo kita mau lihat isinya 
kita mau lihat film nya caranya begini



*/

// fetch("http://www.omdbapi.com/?apikey=2dd838b4&s=dilan")
//  .then(response => response.json())
//  .then(response => console.log(response.Search))


/*

kalian tulis methodnya fetch lalu titik then
lalu argumentnya berupa callback

lalu didalam callbacknya kita panggil method json

dan karena dia masih mengembalikan promise 
maka kita then lagi

lalu didalamnya callback lagi 
dan kita console.log saja responsenya 

kita lihat dulu ya 
jadi jangan bingung mengenai thenya 

kalo saya jalankan
maka tampilnya akan sama ya seperti ajax pada vanilla javascript


nah harusnya menggunakan fetch tapi masalahnya yang dikembalikan itu promise
dan kita akan bahas mengenai promise dulu sebelum kita masuk kefetch

*/


// promise


/*

jadi sekarang apa itu promise?
ya kalo dari artinya kalian bisa menebak dia itu janji


nah kalo dari definisinya itu seperti ini 
promise itu adalah sebuah object yang merepresentasikan keberhasilan
atau kegagalan dari sebuah event yang asyncronous yang akan terjadi dimasa mendatang


ya karena janji itu ditepatinya dimasa yang akan datang ya 
dan yang namanya janji itu pasti ada dua

bisa kita sebut (terpenuhi) atau kalo tidak terpenuhi disebutnya (ingkar) 

nah kalo didalam javascript janji ini kita sebut dengan state atau keadaanya
keadaan itu kalo terpenuhi kita sebut dengan (fulfilld) kalo diingkari janjinya
namanya (reject) 

dan ada satu keadaan lagi yang namanya (pending) atau waktu tunggu
nah ini waktu tunggunya janjinya terpenuhi atau tidak


dan untuk menjalankan keadaan ini ada tiga fungsi callback yang 
harus kalian inget

ada yang disebut dengan (resolve ) ini kita buat ketika janjinya terpenuhi
ada (reject) ini kita buat ketika janjinya diingkari

dan ada finally ini ketika waktu tunggunya selesai 
baik itu janjinya dipenuhi atau tidak dipenuhi 


dan yang terkhir didalam promise ini ada aksi yang harus kita lakukan
kika janjinya dipenui atau tidak terpenuhi

kalo tepenuhi kita sebut dengan then 
tadi kalian sudah lihat ya saya pakai then

kalo janjinya tidak terpenuhi maka yang dilakukan 
adalah catch

jadi kalo then akan menjalankan resolve 
dan kalo catch akan menjalankan rejected


sekarang kita lihat implementasinya 
kita bikin promise yang sangat sederhana

dan ingat sebetulnya promise kita pakai bisanya 
ketika kita mau request kesebuah API

tapi yang akan saya lakukan ini hanya untuk contoh saja ya 
jadi tidak akan request ke API

*/

// contoh 1


/*

misalnya saya janji1 
yang isinya object typnya constructor dan objectnya itu object khusus yang typenya 
promise

*/

// const janji1 = new Promise()

/*

dan dia menerima dua argument 
nanti kita bikinnya pakai callback 

parameter pertama itu adalah resolve yang bentuknya callback
dan parameter kedua namanya reject yang bentuknya juga callback

*/

// const janji1 = new Promise((resolve, reject) => {

// })


/*

nah didalamnya kita akan kasih kondisi 
kita akan kasih resolve ketika apa 
dan kita akan kasih reject ketika apa

misalkan gini saya punya sebuah variable  
misalkan namana variablenya ditepati yang kita isi dengan true



*/
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//     // kemudian saya check 
//     if(ditepati){
//         // kalo janjinya ditepati maka jalankan resolve
//         // mislakan saya isikan dengan string saja karena dia menerima satu argument
//         resolve('janji telah ditepati')
//         // nah sebenarinya ini bisa apa saja 
//         // bisa request ke API bisa menjalankan sebuah proses yang komplex
//     }else{
//         // kalo tidak ditepati kita panggil callback reject

//         reject('janji diingkari')
//     }
// })


/*

jadi saya punya sebuah varialbe janjdi 1 yang isinya promise
kalo kalian tuliskan diconsole janji 1 maka akan muncul janji telah ditepati 

kalo saya console

*/

// console.log(janji1)

/*

Promise {<fulfilled>: 'janji telah ditepati'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "janji telah ditepati"

maka dia akan menjalankan defaultnya 
bentuknya promise yang isinya sudah resolve

karena langsung dijalankan ya ini tidak ada waktu tunggunya 
yang hasilnya 

janji telah ditepati
oke ini kalo kalian mau menjalankan secara langsung


kalo misalkan kalian mau tangkap resolve dan rejectnya kalian  
bisa console.lognya didalam method then dan catchnya 

jadi kalian bisa tulis begini

*/

// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji telah ditepati')
//     }else{
//         reject('janji diingkari')
//     }
// })


// janji1.then(res => console.log(res))


/*

kita tulis then maka dia akan mengambil resolvenya yang bentuknya function 
kalo resolve kita ambil responya 

jadi apapun yang dimasukkan kedalam function resolvenya 
kita console.log resnya 

kalo kita jalankan maka akan tampil 
janji telah ditepati

itu kalo ditepati 
kalo gagal kita bisa langsung caining menggunakan method catch
untuk menjalankan yang rejectnya 



*/


// let ditepati = false
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji telah ditepati')
//     }else{
//         reject('janji diingkari')
//     }
// })


// janji1
//  .then(res => console.log(res))
//  .catch(res => console.log(res))


/*

kalo gagal atau catch jalakan function ambil responnya dari reject
nah callback yang ada didalam then akan masuk kedalam resolve

jadi resolve ini adalah function yang kita masukkan kedalam then
begitu pula yang reject 

kalo variable ditepati saya ganti dengan false
maka yang menjalankan akan rejectnya 

maka akan muncul janji diingkari


jadi begitu ya ini adalah cara membuat promise yang paling sederhana 
kita sudah mengambil resolve dan rejectnya


resolve ditangkap oleh then dan reject ditangkap oleh catch
mudah mudahan paham sampai sini nih

nah kita coba contoh yang kedua

*/



// contoh ke 2

/*

nah contoh yang kedua ini kita bikin supaya janjinya 
tidak langsung ditepati

jadi ada waktu tunggunya kerena biasanya memang seperti itu 
nunggu dulu karena mungkin datanya banyak atau prosesnya komplex 
sehingga tidak langsung beres

misalkan saya punya variable lagi namanya janji2

*/
// let ditepati = true
// const janji2 = new Promise((resolve, reject) =>{
//     if(ditepati){
//         // jadi sebelum menjalankan callback resolve atau rejectnya kita kasih setTimeout dulu
//         setTimeout(function(){
//             resolve('janji telah ditepati!')
//         },5000)

//     }else{
//         setTimeout(function(){
//             reject('janji telah diingkari!')
//         },5000)

//     }
// })


// console.log('mulai')
// console.log(janji2.then(res => console.log(janji2)))
// console.log('selesai')



/*

kita console.log mulai 
kita konsole.log janji2nya yang bentuk
lalu arrow functionya kita console.log janji2nya 

terakhir kita munculkan selesai

kita jalankan


mulai
Promise {<pending>}
selesai
nunggu 5 detik
Promise {<fulfilled>: 'janji telah ditepati!'}

nah jadi jelasnya asyncronousnya ya

sekarang kita bisa tambahkan satu lagi
method finally tadi ya 

nah mehtod finally ini dijalankan ketika waktu tunggunya sudah habis


*/


// console.log('mulai')
// janji2 
//  .finally(() => console.log('selesai menunggu'))
//  .then(res => console.log(res))
//  .catch(re => console.log(re))
// console.log('selesai')

/*

kalo kita jalankan maka akan tampil

mulai
selesai
selesai menunggu
janji telah ditepati!

jadi ketika waktu tunggunya selesai maka yang dijalankan adalah
yang finally dulu kemudian callbacknya 


jadi biasanya finally ini digunakan kalo kalian mau menambahkan 
misalnya animasi loading

jadi pada saat mulai promisnya 
animasi loading jalanin begitu finally matiin animasi loadingnya 

begitu temen temen ya 
jadi ini simulasi kalo misalkan kita pakai promise


dan terakhir didalam promise ada method yang namanya all
promise.all()


*/

// Promise.all()

/*

nah ini digunakan ketika kalian menjalankan lebih dari satu promise
sekaligus

nah contohnya gini anggap saja kalian konek keAPI yang berbeda



*/

const film = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve([{
            judul : 'naruto',
            tayang : 'TV series'
        }])

        // kita anggap nanti datanya berupa array of object
    },5000)
    setTimeout(function(){
        reject('janji telah diingkari!')
    },5000)

    
})


// nah selanjutnya kalian bisa connect ke API yang lain misalnya cuaca


const cuaca = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve([{
            kota : 'banyuwangi',
            temp : '26'
        }])

    },5000)
    setTimeout(function(){
        reject('janji telah diingkari!')
    },5000)

    
})


/*

jadi ada dua buat promise
kalo kalian mau menjalankannya satu satu 

*/


// film.then(res => console.log(res))
// cuaca.then(res => console.log(res))


/*

kalo kita jalankan sudah bisa ya 
tapi kalo kalian ingin menjalankannya sekaligus 

kalian bisa tulis begini

*/

// Promise.all([film,cuaca])
//  .then(res => console.log(res))

/*

nah didalam argumentya kalian bisa tuliskan array yang menyimpan
promise promisenya 

lalu saya bisa panggil then nya cukup satu kali
kalo saya jalankan maka akan tampil

 [Array(1), Array(1)]


kalo kalian tidak ingin munculnya array 
kalian bisa lakukan destructuring 


*/

Promise.all([film,cuaca])
 .then(res => {
    const [dataFilm, dataCuaca] = res
     console.log(dataFilm)
     console.log(dataCuaca)
 })


/*

kalo kita jalankan maka akan terpisah ya 

jadi ini cara kita menggunakan promise.all()

salah satu method yang dimiliki oleh promise 
mudah mudahan kalian paham


oke jadi itu mungkin mengenai promise
sekarang kalian sudah bisa lihat bahwa dengan menggunakan 
promise itu menyelesaikan masalah callback hell ya 

kalo kita sudah paham mengenai promise 
maka dimateri selanjutnya  kita akan kembali kekasus kita
yang aplikasi pencarian film 

kita akan ubah coding yang sebelumnya menggunakan ajax punyanya jquery
kita akan ganti fetch 

karena tadi diawal kalian sudah lihat bahwa fetch itu mengembalikan promise


ya jadi mungkin itu saja untuk materi kali ini 
kita akan ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ;

*/