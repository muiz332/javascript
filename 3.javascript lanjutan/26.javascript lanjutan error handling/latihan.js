/*

dimateri kali ini kita akan belajar mengani erro handling

ya sebetulnya dimateri mengenai async dan await 
itu kita sudah belajar mengenai beberapa error handling ya 


kita sudah pernah coba ketika kita punya promise
itu kita punya method yang kita gunakan sebagai error handling 
yaitu then dan catch


jadi ini kita anggap error handling yang pertama

nah terus yang kedua kita sudah menangani erroo pada code yang ascync dan await
kalo kita menggunakan async dan await itu kita pakai yang namanya try dan catch

karena codenya kita buat seolah olah codenya seperti syncronous

nah tapi ada satu yang belum kita coba
gimana kalo menggunakan fetch

nah kalian tahu fetch ini didalamnya mengembalikan promise ya 
tapi masalhnya kita tidak bikin sendiri fetch ini 

kita tidak tahu apa yang ada didalam method reject 
pada fetch ini 


yang kita coba adalah ketika fetchnya berhasil saja
atau istilahnya kita menjalankan apa yang ada didalam 
method resolvenya fetch


nah jadi dimateri kali ini kita akan coba membuka lagi
aplikasi pencarian film kita

kan itu didalamnya kita menggunakan fetch dan async await ya 

nah coba kita terapkan error handling kalo kalian sudah paham
kita akan terapkan secara sederhana dulu disini 


nah untuk mengetahui error apa yang kira kira akan muncul 
ini simple saja gimana kalo kita cari film tapi 
kosong

atau gimana kalo kita cari film yang tidak ada








*/

// function get_movies(key){
//     return fetch(`http://www.omdbapi.com/?apikey=2dd838b4&s=${key}`)
//             .then(resp => resp.json())
//             .then(re => re)
// }

// function tampil(data){
//     data.Search.forEach(e => console.log(e))
// }



// const tombol = document.querySelector('button')
// tombol.addEventListener('click', async function(){
//     const input = document.querySelector('.keyword')
//     const key = input.value

//     try{
//         const data_movie = await get_movies(key)
//         console.log(data_movie)
//         tampil(data_movie)
//     }catch(er){
//         console.log(er)
//     }
// })



/*

nah sekarang kalo saya cari movie yang sembarang 
ketika saya search erornya sudah ditangkap oleh catch in i


TypeError: Cannot read properties of undefined (reading 'forEach')
    at tampil (latihan.js:67)
    at HTMLButtonElement.<anonymous> (latihan.js:80)



tapi sekarang kita akan lihat apa saja yang bisa ditangkap errornya oleh 
fetch ini 

itu kalau filmnya tidak ada atau searchnya kosong

nah sekarang gimana kalo misalnya urlnya salah misalkan ya 

nah ini yang perlu kalian perhatikan ketika kita menggunakan fetch 
itu problemnya adalah error yang ditangkap oleh fetch 
ituhanya eror yang ada pada urlnya saja 

jadi sebetulnya kalo error yang tadi
yang kosong sama tidak ada filmnya 

itu erronya bukan dari fetch 
itu error dari browser 






*/




// function get_movies(key){
//     return fetch(`http://www.omdbapi.com/?apikey=2dd838b4&s=${key}`)
//             .then(resp => resp.json())
//             .then(re => re)
// }

// function tampil(data){
//     data.Search.forEach(e => console.log(e))
// }



// const tombol = document.querySelector('button')
// tombol.addEventListener('click', async function(){
//     const input = document.querySelector('.keyword')
//     const key = input.value

//     try{
//         const data_movie = await get_movies(key)
//         // tampil(data_movie)
//     }catch(er){
//         console.log(er)
//     }
// })


/*

nah sekarang kita coba matika yang tampil datanya
sekarang kalo saya cari film yang tidak ada 

maka sekarang tidak ada errornya 

jadi sebetulnya tidak ada yang masuk kedalam catch
karena fetch hanya akan reject begitu urlnya error


kalo urlnya salah baru dia error
nah padahal kita juga pengen ya menangkap erorr
ketika filmnya tidak ada


nah gimana caranya?


nah method resp.json()
ini harusnya hanya akan jalankan ketika datanya ada
ketika dikolom pencariannya ada 

nah jadi kita check dulu ya 

tapi kita lihat dulu isi dari responnya ya 

*/


// function get_movies(key){
//     return fetch(`http://www.omdbapi.com/?apikey=2dd838b4&s=${key}`)
//             .then(resp => console.log(resp))
//             .then(re => re)
// }

// function tampil(data){
//     data.Search.forEach(e => console.log(e))
// }



// const tombol = document.querySelector('button')
// tombol.addEventListener('click', async function(){
//     const input = document.querySelector('.keyword')
//     const key = input.value

//     try{
//         const data_movie = await get_movies(key)
//         // tampil(data_movie)
//     }catch(er){
//         console.log(er)
//     }
// })

/*

kalo mislakan kita jalankan ketika search kosong
itu sebetulnya jalan tapi datanya tidak ada 


kalo kita tulis sembarang berhasil juga tapi datanya tidak ada 

nah kapan ini akan error ya tadi ketika urlnya salah 
maka statusnya akan 401

dan ok nya false

nah kalian bisa check statusnya atau okny a

*/

function get_movies(key){
    return fetch(`ttp://www.omdbapi.com/?apikey=2dd838b4&s=${key}`)
            .then(resp => {
                if(!resp.ok){
                    // nah kalo gagal kita akan bikin eror untuk dilempar 
                    // ke catchnya menggunakan throw new Error()\
                    // kalo kalian ingin tampil unotorize kalian tulis resp.statustext
                    throw new Error(resp.statusText)
                }

                // kalo oke yang dikerjakan ini 
                return resp.json()
            })
            .then(re => {
                // nah setelah berhasil datanya ada isinya tidak
                if(re.Response === 'False'){
                    // jadi kalo error kita kiraimkan erornya ke catch lagi
                    throw new Error(re.Error)

                }
                return re.Search
            })
}

function tampil(data){
    data.forEach(e => console.log(e))
}



const tombol = document.querySelector('button')
tombol.addEventListener('click', async function(){
    const input = document.querySelector('.keyword')
    const key = input.value

    try{
        const data_movie = await get_movies(key)
        tampil(data_movie)
    }catch(er){
        console.log(er)
    }
})




/*

kalo kita jalankan sudah benar ya 
atau kalian bisa tampilakan kedalam alert


nah jadi itu eror handling pada javscript asyncronous kita
kita sudah coba pada promise 
kita sudah coba pada async dan await 


nah dimateri kali ini kita sudah coba pada fetch
mudah mudahan kalian paham 


itu saja untuk materi kali ini 
kita akan ketemu lagi dimateri selanjutnya 

dan seperti biasa jangan lupa titik koma ;

*/