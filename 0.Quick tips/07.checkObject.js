// memeriksa object kosong atau tidak

/*

nah untuk memeriksa sebuah object kosong atau tidak kita
bisa menggunakan method Object.keys()

contoh

*/

const mahasiswa = {
    nama : "muiz",
    nim : "1121101980",
    jurusan : "teknik informatika"
}

if(Object.keys(mahasiswa).length){
    console.log('ada valuenya')
}else{
    console.log('tidak ada valuenya')
}

/*

kalo kalian jalankan maka akan tampil ada valuenya
tapi kalo kalian hapus properti dan valuenya 
maka akan tampil tidak ada valuenya

*/
