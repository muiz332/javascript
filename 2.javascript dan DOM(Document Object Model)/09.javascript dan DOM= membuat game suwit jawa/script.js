const pilihan = [document.getElementsByClassName('gajah')[0], 
document.getElementsByClassName('orang')[0],document.getElementsByClassName('semut')[0]]

// pilihan Computer
let pilihanComp = function(){
    let comp = Math.random();
    const gambarComp = document.getElementsByClassName('img-komputer')[0];

    if(comp < 0.34){//gajah
        gambarComp.setAttribute('src', 'img/gajah.png');
        return 'gajah'
    }else if(comp >= 0.34 && comp < 0.75){//orang
        gambarComp.setAttribute('src', 'img/orang.png');
        return 'orang'
    }else{//semut
        gambarComp.setAttribute('src', 'img/semut.png');
        return 'semut'
    };
}

// acak gambar pilihan Computer
function putar(){
    const gambar = document.querySelector('.img-komputer');
    const acak = ['gajah', 'orang', 'semut'];
    let i = 0
    const sekarang = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - sekarang  > 1000){
            clearInterval;
            return;
        }
        gambar.setAttribute('src', 'img/' + acak[i++] + '.png')
        if(i === acak.length){
            i = 0
        }
    }, 100)
}

// banding dan tambah scorenya
let c = 0
let p = 0
function banding(a){
    const info = document.querySelector('.info');
    const scoreC = document.querySelector('.scoreComp');
    const scoreP = document.querySelector('.scorePlayer');
    let pil = pilihanComp()
    if(a === pil){
        info.innerHTML = 'seri'
    }else if(a === 'gajah'){
        if(pil === 'orang'){
            info.innerHTML = 'menang'
            p += 1
        }else{
            info.innerHTML = 'kalah'
            c += 1
        }
    }else if(a === 'orang'){
        if(pil === 'gajah'){
            info.innerHTML = 'kalah'
            c += 1
        }else{
            info.innerHTML = 'menang'
            p += 1
        }
    }else if(a === 'semut'){
        if(pil === 'orang'){
            info.innerHTML = 'kalah'
            c += 1
        }else{
            info.innerHTML = 'menang'
            p += 1
        }
    }
    scoreC.innerHTML = c
    scoreP.innerHTML = p
}
pilihan.forEach(function(event){
    event.addEventListener('click', function(){
        putar()

        setTimeout(function(){
            banding(event.getAttribute('class'))
        }, 1000)
    })
})