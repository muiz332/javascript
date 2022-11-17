// static class field


/*


nah sekarang kita akan membahas mengenai static class field
static adalah kata kunci yang bisa kita tambahkan sebelum nama field atau method

biasanya ketika kita membuat field atau method maka secara otomatis field tersebut akan menjadi
object yang dibuatnya atau instancenya objectnya dan methodnya akan berada didalam prototype

nah jika kita menambahkan kata kunci static maka itu tidak akan
terjadi 



jika kita menambahkan static class filed secara otomatis field tersebut tidak ada diwariskan ke object yang dibuat
melainkan milik class itu sendiri 

static class field ini biasanya digunakan untuk membuat untuk membuat utility field atau function
nah untuk mengakses tidak lagi dari object yang buat melainkan dari class itu sendiri

jadi biasanya kita gunakan static class field itu sebagai tempat untuk menyimpan 
sesuatu secara global


static class field itu sifatnya global artinya bisa diakses dari mana saja

kita coba


*/


class Configuration{
    static name = 'belajar oop javascript'
    static version = '1.0.0'
    static author = 'muiz'
    static reference = 'programmer zaman now'
}

const config = new Configuration
console.info(config)


/*

jadi kalo kalian lihat properti name, version,author, dan reference
itu tidak ada didalam object confignya

karena static akan mengabaikan pewarisan properti dari class ke object
yang dibuat

nah sekarang pertanyaannya gimana cara mengakses properti yang memiliki
kata kunci static ini?

cara mengaksesnya sama seperti kalian memanggil properti didalam object
tapi kalian tulis nama classnya bukan nama object yang dibuatnya

lalu nama propertinya apa
kita coba


*/

console.log(Configuration.name)
console.log(Configuration.version)
console.log(Configuration.author)
console.log(Configuration.reference)


// nah kalian bisa juga mengubahnya seperti object

Configuration.version = '2.0.0'
console.log(Configuration.version)


/*

jadi itu materi mengenai static class field 
mudah mudahan kalian paham








-----------------------------------

source programmer zaman now javascript OOP

-----------------



*/