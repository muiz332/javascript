/*

nah dimateri kali ini kita akan latihan untuk menggunakan callback 
pada kasus yang lebih nyata lagi 

nanti didalamnya kita akan tetap menggunakan ajax dan jquery


*/

function showCards(d){
    return `<div class="col-md-3 my-5">
            <div class="card">
                <img class="card-img-top" src="${d.Poster}" >
                <div class="card-body">
                <h5 class="card-title">Judul: ${d.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Tahun: ${d.Year}</h6>
                <a href="#" class="btn btn-primary detail" data-imdbid="${d.imdbID}" data-toggle="modal" data-target="#movieDetailModal">Go somewhere</a>
                </div>
            </div>
        </div>`
}

function showMovie(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" alt="" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">Judul: ${m.Title}</li>
                            <li class="list-group-item">Tahun: ${m.Year}</li>
                            <li class="list-group-item">Genre: ${m.Genre}</li>
                            <li class="list-group-item">Released: ${m.Released}</li>
                            <li class="list-group-item">Writer: ${m.Writer}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}


// $.ajax({
//     url : 'http://www.omdbapi.com/?apikey=2dd838b4&s=lego',
//     success : function(result){
//         data = result.Search
//         len = data.length
//         let card = ''
//         data.forEach(d => {
//             card += showCards(d)
//         })
//         $('.movies').html(card)
//         // nah kalo kalian ingin mengetahui data apa yang diklik maka kalian bisa buat attribute data-namanya seperti data-toggle
//         $('.detail').click(function(){
//             // nah untuk menangkapnya kita panggil this elementnya lalu data('imdbid')
//             id = $(this).data('imdbid')
//             $.ajax({
//                 url : `http://www.omdbapi.com/?apikey=2dd838b4&i=${id}`,
//                 success : function(m){
//                     console.log(m)
//                     let movieDetil = showMovie(m)

//                     $('.modal-body').html(movieDetil)
//                 },

//                 error : e => {
//                     console.log(e.responseText)
//                 }
//             })
//         })
//     },
//     error : (e) => {
//         console.log(e.responseText)
//     }
// })

$('.search-button').click(function(){
    src = $('.input-keyword').val()
    $.ajax({
        url : `http://www.omdbapi.com/?apikey=2dd838b4&s=${src}`,
        success : function(result){
            data = result.Search
            let card = ''
            data.forEach(d => {
                card += showCards(d)
            })
            $('.movies').html(card)
            // nah kalo kalian ingin mengetahui data apa yang diklik maka kalian bisa buat attribute data-namanya seperti data-toggle
            $('.detail').click(function(){
                // nah untuk menangkapnya kita panggil this elementnya lalu data('imdbid')
                id = $(this).data('imdbid')
                $.ajax({
                    url : `http://www.omdbapi.com/?apikey=2dd838b4&i=${id}`,
                    success : function(m){
                        console.log(m)
                        let movieDetil = showMovie(m)
    
                        $('.modal-body').html(movieDetil)
                    },
    
                    error : e => {
                        console.log(e.responseText)
                    }
                })
            })
        },
        error : (e) => {
            console.log(e.responseText)
        }
    })
    
    
    
})