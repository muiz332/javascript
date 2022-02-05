/*

nah dimateri kali ini kita akan belajar mengenai fetch
jadi apa itu fetch

fetch adalah sebuah API pada javascript modern yang tugasnya untuk mengambil data secara asyncronous atau ajax ya 
sama seperti kita melakukan XMLHttpRequest

jadi kalian harusnya masih inget ya aplikasi yang kita buat pada pertemuan sebelumnya 
yaitu aplikasi pencarian movie


dimana kita sudah berhasil terhubung kepublic API yang namanya omdb API
ya kita sudah berhasil untuk mencari film dan menampilkan detil dari film tersebut

nah aplikasi yang sudah kita buat ini menggunakan bantuan dari jquery
dimateri kali ini kita akan mencoba mengganti method ajax pada jaqury ini
menggunakan fetch 

sehingga kita nanti tidak akan mengandalkan library external seperti jquery
jadi performa yang kita dapatkan saat kita menggunakan vanilla javscript
tapi penulisan codenya juga jadi lebih sederhana karena kita menggunakan fetch yang mirip dengan jquery

jadi kita langsung saja ubah code sebelumnya menjadi fetch


*/

const tombolCari = document.querySelector('.btn-cari')
tombolCari.addEventListener('click',function(e){
  let key = e.target.parentElement.previousElementSibling.value
  fetch(`http://www.omdbapi.com/?apikey=2dd838b4&s=${key}`)
  .then(res => res.json())
  .then(re => {
      data = re.Search
      let card = ''
      data.forEach(d =>{
          card += cardMovie(d)
      })
      moviesContainer = document.querySelector('.movies-con')
      moviesContainer.innerHTML = card
      tombolDetil = document.querySelectorAll('.detil')
      
      tombolDetil.forEach(detil => {
        detil.addEventListener('click',function(){
          const id = this.dataset.imdb 
          fetch(`http://www.omdbapi.com/?apikey=2dd838b4&i=${id}`)
           .then(res => res.json())
           .then(response => {
            const movieDetil = document.querySelector('.detil-body')

            const h5 = document.querySelector('.modal-title')
            h5.innerHTML = response.Title

            movieDetil.innerHTML = modalMovie(response)
           })


        })
      })
  })
  
})


function cardMovie(d){
  return `<div class="col-sm-4">
            <div class="card">
                <img class="card-img-top img-fluid" src="${d.Poster}" alt="${d.Title}">
                <div class="card-body">
                  <h5 class="card-title">${d.Title}</h5>
                  <p>Year: ${d.Year}</p>
                  <a href="#" class="btn btn-primary detil" data-toggle="modal" data-target="#detil" data-imdb="${d.imdbID}">Details</a>
                </div>
              </div>
          </div>`
}


function modalMovie(response){
  return `<div class="container">
            <div class="row">
                <div class="col-4">
                    <img src="${response.Poster}" alt="${response.Title}" class="img-fluid">
                </div>
                <div class="col">
                    <ul class="list-group">
                        <li class="list-group-item">Year: ${response.Year}</li>
                        <li class="list-group-item">Release: ${response.Released}</li>
                        <li class="list-group-item">Duration: ${response.Runtime}</li>
                        <li class="list-group-item">Genre: ${response.Genre}</li>
                        <li class="list-group-item">${response.Plot}</li>
                      </ul>
                </div>
            </div>`
}

