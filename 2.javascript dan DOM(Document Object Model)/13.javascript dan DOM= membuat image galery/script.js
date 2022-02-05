const header = document.querySelector('header img');
const container = document.getElementsByClassName('container')[0];
const gambars = document.querySelectorAll('.gambar')

container.addEventListener('click', function(e){
    if(e.target.className === 'gambar'){
        // header.setAttribute('src', e.target.getAttribute('src'))

        // atau ada shorthadnnya 
        header.classList.add('fade')
        header.src = e.target.src

        setTimeout(function(){
            header.classList.remove('fade')
        }, 500)

        gambars.forEach(function(gambar){
            if(gambar.classList.contains('active')){
                gambar.classList.remove('active')
            }
        })
        e.target.classList.add('active')
    }
})