/*

nah sekarang kita akan bahas mengenai construkctor inheritance 
didalam construkctor kita biasanya membuat properti dan method


nah didalam construkctor kita bisa memanggil construcktor yang lain 
nah dengan begitu kita bisa mewasisi semua properti yang dibuat diconstrukctor 
lain tersebut 

untuk memanggil construkctor lain nama construktor.clall(this,parameter)

kita coba 

*/

function Siswa(umur,jurusan){
    this.umur = umur
    this.jurusan = jurusan
    this.say = function(){
        console.log(`hallo ${this.nama}`)
    }
}

// nah misalnya saya ingin membuat construkctor yang namanya Siswa
// dan yang buat lagi yang namanya Idenstitas



function Identitas(nama,umur,jurusan){
    /*
    
    nah saya ingin mengambail semua properti dan method yang ada
    didalam Siswa 

    caranya kalian bisa tulis
    Siswa.call(this,nama)

    jadi ini lebih seperti mengcopy
    property dan method yang ada pada object lain
    
    */

    Siswa.call(this,umur,jurusan)
    this.nama = nama
}



const muiz = new Identitas('muiz',18,'Teknik informatika')
console.log(muiz.nama)
console.log(muiz.umur)
console.log(muiz.jurusan)
muiz.say()


/*

kalo saya jalankan maka akan tampil
muiz
18
Teknik informatika
hallo muiz

jadi seperti itu kita dapat memanggil properti dari construkctor lain


*/