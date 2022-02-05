/*

nah dimateri sebelumnya kita sudah melihat dan mencoba mengenai topik async dan
await yang sudah kita implementasikan saat kita melakukan refactoring
pada code fetch kita 

nah sekarang kita balik ya 


biasanya kita teori konsep dulu baru implementasinya
sekarang implementasinya dulu baru konsepnya

jadi sekarang kita akan lihat dulu secara definisi
mengenai async dan await 

kita mulai dari async dulu ya atau asyncronous function

asyncronous function adalah sebuah function yang bekerja secara asyncronous
(melalui event loop) yang menghasilkan implisit promise sebagai return valuenya
tapi cara penulisan codenya menggunakan penulisan syncronous 

nah apa itu implisit promise
intinya adalah  functionnya akan mengembalikan promise meskipun didalamnya
tidak ada code yang asyncronous

tapi cara penulisan codenya menggunakan penulisan yang syncronous


nah jadi dari definisi ini ada tiga hal ya yang bisa kita lihat


asyncronous function

- fungsi yang berjalankan secara asyncronous
- menghasilkan implisit promise
- cara penulisannya seperti syncronous function

mungkin dari implementasi sebelumnya kalian sudah bisa lihat ketiga definisi ini



nah selanjutnya penjelasan mengenai asyncronous function ini adalah

asyncronous function adalah sebuah async function dapat memiliki keyword await 
didalamnya untuk memberhentikan sementara eksekusi fungsinya
sambil menunggu promisenya selesai



yang kita coba implementasikan dimateri sebelumnya itu API fetch
jadi fetct itu adalah API yang menggunakan promise didalamnya 


nah sekarang kita akan coba implemtasi async dan await ini menggunakan promise biasa

nah sekarang kita bikin dulu promisenya 
kita kasih parameter resolve aja ya 

*/

// const coba = new Promise(resolve => resolve('selesai'))
// console.log(coba)


// kalo kita jalankan akan langsung fullfilld ya 
// Promise {<fulfilled>: 'selesai'}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "selesai"


/*

nah sekarang gimana kalo promisenya tidak langsung selesai 
tapi nunggu dulu selama beberapa waktu 

supaya nanti kelihatan asyncronousnya 

*/

// const coba = new Promise(resolve => {
//     setTimeout(function(){
//         resolve('selesai')
//     },2000)
// })
// console.log(coba)

/*

nah sekarang kita lihat
promise dibuat manual ya 

kalo resolve harusnya disimpan kedalam coba 
nah kan coba harusnya muncul resolve selesai ya 

kalo kita jalankan maka hasilnya akan pending
karena kita jalaninnya secara syncronous 

nah sekarang gimana caranya kalo nunggi dulu 
kita pakai method yang namanya then


*/

// const coba = new Promise(resolve => {
//     setTimeout(function(){
//         resolve('selesai')
//     },2000)
// })

// coba.then(res => console.log(coba))

/*

ketika resolve jalanin method thennya 
kalo kita jalankan maka akan muncul Promise {<fulfilled>: 'selesai'}

nah sekarang gimana kalo kita terapkan async dan await 
kedalam codingan kita ini 



nah untuk menerapkan async dan await kita butuh function
jadi promise ini akan saya simpan kedalam function 
sebagai return valuenya


*/
// function cobaPromise(){
//     return new Promise(resolve => {
//         setTimeout(function(){
//             resolve('selesai')
//         },2000)
//     })
// }

// const coba = cobaPromise()
// console.log(coba)
/*

nah kan kalo kita jalakan kita panggil coba promisenya
kemudian kita console 

nah cuma kalog gini hasilnya akan pending 
ya karena dia langsung dijalankan 
dan kita tetap butuh then


kalo saya jalankan maka hasilnya pending
kita coba dulu pakai then


*/

// function cobaPromise(){
//     return new Promise(resolve => {
//         setTimeout(function(){
//             resolve('selesai')
//         },2000)
//     })
// }

// const coba = cobaPromise()
// coba.then(re => console.log(re))

/*

nah dia akan nunggu dulu 2 detik kemudian thennya akan dijalankan oleh
callback resolve

kalo kita jalankan maka hasilnya akan selesai ya 

nah ini belum bisa menggunakan async dan await 
kalo kita ingin mengubahnya menjadi async dan await

berarti kita butuh function untuk memanggil function cobaPromisenya
jadi misalnya kita pakai anonymous function 

*/
// function cobaPromise(){
//     return new Promise(resolve => {
//         setTimeout(function(){
//             resolve('selesai')
//         },2000)
//     })
// }

// (function(){
//     hasil = cobaPromise()
//     console.log(hasil)
// })()

/*

nah karena ini sudah seperti function syncronous biasa ya 
jalankan cobaPromise 
masukkan kedalam variable tampilkan keconsole

nah sekarang kalo ini kita jalankan maka akan pending

lalu supaya jalan bagaimana?
tinggal kita kasih didepannya keyword async
untuk function yang memanggil cobaPromise


*/

// function cobaPromise(){
//     return new Promise(resolve => {
//         setTimeout(function(){
//             resolve('selesai')
//         },2000)
//     })
// }

// (async function(){
//     hasil = await cobaPromise()
//     console.log(hasil)
// })()

/*

jadi kita memberitahu ke javascript 
javascript didalam function ini akan ada sesuatu yang asyncronous 

oke jadi javascriptnya siap siap nunggu ada keyword await 
nah tinggal kita kasih tahu mana yang asyncronous

karena cobaPromise itu adalah asyncronous
kita kasih didepannya keyword await

jadi dia akan menunggu dulu sampai resolve

nah kalo ini kita jalanin 
nunggu dulu 2 detik baru deh muncul selesai

*/





// eror handling pada promise


/*

nah sekarang adalah bagaimana kita melakukan eror handling pada script 
async dan await kita 

kan kalo kita menggunakan promise itu ada resolve dan reject
yang mengatasi eror itu adalah method catch

jadi apa yang terjadi didalam reject itu adalah callbacknya catch


nah sekarang kita coba pakai then dan catch dulu ya 
nah saya mau check kalo misalkan waktu tunggunya dibawah 5 detik maka dia akan resolve dan
menampilkan selesai 


tapi kalo diatas 5 detik saya mau jalanin reject yang menampilkan terlalu lama

*/
// function cobaPromise(){
//     return new Promise((resolve,reject) => {
//         const waktu = 5000
//         if(waktu < 5000){
//             setTimeout(function(){
//                 resolve('selesai')
//             },waktu)
//         }else{
//             setTimeout(function(){
//                 reject('terlalu lama')
//             },2)
//         }
//     })
// }

// const coba = cobaPromise()
// coba.then(res => console.log(res))
//     .catch(er => console.log(er))


/*

nah ini kalo saya jalankan akan tampil terlalu lama ya
karena waktunya 5000

nah ini kalo pakai then dan catch 
nah sekarang gimana caranya 

nah masalahnya kita tidak bisa pakai then dan catch didalam async dan await



*/

// function cobaPromise(){
//     return new Promise((resolve,reject) => {
//         const waktu = 5000
//         if(waktu < 5000){
//             setTimeout(function(){
//                 resolve('selesai')
//             },waktu)
//         }else{
//             setTimeout(function(){
//                 reject('terlalu lama')
//             },2)
//         }
//     })
// }

// (async function(){
//     hasil = await cobaPromise()
//     console.log(hasil)
// })()

/*

async dan await itu  yang kita jalankan pasti ketika promisenya resolve
jadi begitu await itu asumsinya promisenya resolve

dan misalnya waktunya 5000 itukan reject
maka kalo kita jalankan maka tampilnya gini

latihan.js:314 Uncaught (in promise) terlalu lama

jadi datanya tidak tertangkap 
nah supaya ketangkap datanya gimana?

kalo pakai async dan await kita bisa menggunakan block try dan catch


*/

function cobaPromise(){
    return new Promise((resolve,reject) => {
        const waktu = 5000
        if(waktu < 5000){
            setTimeout(function(){
                resolve('selesai')
            },waktu)
        }else{
            setTimeout(function(){
                reject('terlalu lama')
            },2)
        }
    })
}

(async function(){
    try{
        hasil = await cobaPromise()
        console.log(hasil)
    }catch(er){
        console.log(er)
    }
})()


/*

jadi trynya itu untuk yang resolve
dan cacth itu untuk rejectnya

kalo catch itu ada parameternya
untuk yang catch kita tangkap erornya dari parameternya 

pesan yang ada didalam reject itu akan masuk kedalam parameternya catch ya 

lalu kita munculkan keconsole.log 
kalo kita jalankan akan tampil  terlalu lama



sip ya kita sudah tahu kalo pakai async dan await itu caranya begini
atau kalo mau kerena kita bisa tulis console.error()

jadi warnanya akan merah 
oke jadi seperti itu caranya menggunakan try dan catch


oke jadi mungkin itu materi kita mengenai async dan await ini 
dan juga kita bahas mengenai error handling ini 

mudah mudahan kalian paham

jadi itu saja untuk materi kali ini
kita akan ketemu lagi dimateri berikutnya

dan satu lagi jangan lupa titik koma ; 


*/