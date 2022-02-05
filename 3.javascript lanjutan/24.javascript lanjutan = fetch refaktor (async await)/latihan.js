/*

nah dimateri kali ini sebenarnya masih membahas kasus kita yang kemarin
tapi dimateri kali ini kita akan perbaiki code kita atau istilahnya adalah refactor

sehingga code kita lebih rapi lebih terstruktur dan lebih mudah dibaca
oke kita langsung saja masuk kedalam code kita





*/



// const tombolCari = document.querySelector('.btn-cari')
// tombolCari.addEventListener('click',function(e){
//   let key = e.target.parentElement.previousElementSibling.value
//   fetch(`http://www.omdbapi.com/?apikey=2dd838b4&s=${key}`)
//   .then(res => res.json())
//   .then(re => {
//       data = re.Search
//       let card = ''
//       data.forEach(d =>{
//           card += cardMovie(d)
//       })
//       moviesContainer = document.querySelector('.movies-con')
//       moviesContainer.innerHTML = card
//       tombolDetil = document.querySelectorAll('.detil')
      
//       tombolDetil.forEach(detil => {
//         detil.addEventListener('click',function(){
//           const id = this.dataset.imdb 
//           fetch(`http://www.omdbapi.com/?apikey=2dd838b4&i=${id}`)
//            .then(res => res.json())
//            .then(response => {
//             const movieDetil = document.querySelector('.detil-body')

//             const h5 = document.querySelector('.modal-title')
//             h5.innerHTML = response.Title

//             movieDetil.innerHTML = modalMovie(response)
//            })


//         })
//       })
//   })
  
// })




// function cardMovie(d){
//   return `<div class="col-sm-4">
//             <div class="card">
//                 <img class="card-img-top img-fluid" src="${d.Poster}" alt="${d.Title}">
//                 <div class="card-body">
//                   <h5 class="card-title">${d.Title}</h5>
//                   <p>Year: ${d.Year}</p>
//                   <a href="#" class="btn btn-primary detil" data-toggle="modal" data-target="#detil" data-imdb="${d.imdbID}">Details</a>
//                 </div>
//               </div>
//           </div>`
// }


// function modalMovie(response){
//   return `<div class="container">
//             <div class="row">
//                 <div class="col-4">
//                     <img src="${response.Poster}" alt="${response.Title}" class="img-fluid">
//                 </div>
//                 <div class="col">
//                     <ul class="list-group">
//                         <li class="list-group-item">Year: ${response.Year}</li>
//                         <li class="list-group-item">Release: ${response.Released}</li>
//                         <li class="list-group-item">Duration: ${response.Runtime}</li>
//                         <li class="list-group-item">Genre: ${response.Genre}</li>
//                         <li class="list-group-item">${response.Plot}</li>
//                       </ul>
//                 </div>
//             </div>`
// }







/*

nah sebenernya code kita ini tidak ada masalah ya 
tapi kita bisa perbaiki supaya lebih mudah dibaca lagi 

nah kita bisa masukkan fetctnya kedalam sebuah function yang syncronous

contohnya seperti ini 

*/


// function get_movies(cari){
//     return fetch(`http://www.omdbapi.com/?apikey=2dd838b4&s=${cari}`)
//      .then(response => response.json())
//      .then(data => data.Search)
// }


// // nah ketika function get_movies dijalankan akan mengembalikan data movies
// dataMovies = get_movies('dilan')
// console.log(dataMovies)


/*

kalo kita jalankan yang kembali bukan datanya tapi promise yang pending
padahal disini kita sudah menggunakan then
harusnya dia sudah jadi object dong


ketika kita bikin code kita semakin lebih modular menggunakan cara ini
yang kalian harus pahami cara kita ini adalah cara yang syncronous


jadi begitu get_movies dijalankan dia langsung jalan 
ketika pertama kali dijalankan maka hasilnya promise dan pending
karena dia harus mengambil data dulu dari API

setelah data balik harusnya ini resolve
tapi keburu kita masukkan kedalam console.log


kenapa begitu karena codingan kita ini adalah syncronous
javascriptnya tidak tahu kalo function get_movies adalah asyncronous

nah disinilah kita bisa memanfaatkan keyword yang namanya
async dan await

nah ini penting walaupun penjelasan lebih detilnya kita akan 
bahas dimateri berikutnya 

nah jadi caranya kita harus kasih tahu dulu ke javascriptnya 
bahwa function get_movies ini dialamnya bakalan ada 

sesuatu yang asyncronous
karena kalo kita tidak memberi tahu sijavscripnya akan menganggap syncronous semua

nah cara mengasih tahunya bagaimana?
cara ngasih tahunya  didepan keyword functionnya kita tulisnya async






*/

function getMovies(cari){
    return fetch(`http://www.omdbapi.com/?apikey=2dd838b4&s=${cari}`)
     .then(response => response.json())
     .then(data => data.Search)
}



document.querySelector('h1').addEventListener('click', async function(){
    
    data = await getMovies('dilan')
    console.log(data)
})


/*

ketika h1nya saya klik jalankan function

nah jadi  kita ngasih tahu nih kejavascript 
siap siap nih didalam function ini akan ada sesuatu yang asyncronous

nah tinggal kita ngasih tahu yang mana yang bakalan asyncronousnya

pada function itu dipanggil ya 


nah kita tuliskan didepan nama functionya keyword await 
jadi kalo ketemu getMovies 

diakan asyncronous ya membuatuhkan waktu tunggu dan mengembalikannya promise
nah berarti jangan langusung dimasukkan kedalam variable dataMovies

tapi tinggu dulu sampai promisenya resolve
kalo sudah baru masukkan kemovies baru deh jalanin console.lognya 


jadi singkatnya ini adalah cara kita untuk membuat coding kita terlihat seperti
syncronous padahal asyncronous




*/


/*

nah lalu kalian lihat dicodingan yang lama ketika tombol diklk
itu kan evenhandler kita berada didalam method then punyanya fetch yang pertama

nah sekarang kita akan bikin supaya diluar
supaya kita tidak mengganggu functionnya


nah ketika kita menyeleksi detilnya diluar method then 
jadi itu terjadi sebelum kita request ya 

maka code tersebut akan dijalankan terlebih dulu

document.querySelector('.detil')


sedangkan detilnya itu belum terbuat karena harus mengeklik tombol search dulu

coba sebelum kita mengeklik tombol search ada gak detil nya
tidak ada kan

nah ketika kita langung kasih event maka eventnya tidak akan jalan
karena tombol detil belum dibuat


lalu solusinya bagaimana?
nah ini kita harus pakai cara yang namanya event binding

jadi kita ngasih event yang awalnya belum ada tapi ketika ada envenya baru jalan

kalian bisa simpan event handlernya ke element document

document.addEventListener('click',funtion(e){
    if(e.target.classList.contains('detil')){
        maka jalanin requestnya 
    }
})

jadi didalam area document ketika diklik
dan yang diklik itu memiliki class yang namanya detil maka
lakukan requestnya 


nah jadi mungkin itu saja untuk materi kali ini
dan nanti dimateri berikutnya kita akan bahas lebih detil lagi mengenai 
async dan await ini 


mudah mudahan kalian paham dengan materinya 
kita ketemu lagi dimateri berikutnya 

dan seperti biasa jangan lupa titik koma ;


*/

