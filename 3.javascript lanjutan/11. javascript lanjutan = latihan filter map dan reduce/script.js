// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'))
console.log(videos)

const jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).map(durati => durati.dataset.duration).map(isi => {
    let hasil = isi.split(':')
    hasil = (+hasil[0] * 60) + +hasil[1]
    return hasil

}).reduce((acc, curr) => acc + curr) 


const jam = Math.floor(jslanjut / 3600)
const menit = Math.floor(jslanjut % 3600 / 60)
const detik = Math.floor(jslanjut % 60)

const jumlahVideo = document.querySelector('span.jumlah-video')
jumlahVideo.textContent = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length + ' video'

const totalDuration = document.querySelector('span.total-durasi')
totalDuration.textContent = `${jam} jam, ${menit} menit, ${detik} detik`





