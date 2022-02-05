/* javascript lanjutan: latihan template literal

nah dimateri kali ini kita akan bahas lebih lanjut mengenai html fragments 
jadi nanti kita akan lihat bagaimana menggunaan template litera ini untuk membentuk sebuah element html yang nantinya akan kita simpan di DOM

ya karena nanti didalamnya itu bisa kita simpan banyak hal 
kita bisa simpan pengulangan kita bisa simpan pengkondisian 
bahkan nanti kita bisa bikin exspressionnya bersarang

jadi untuk lebih jelasnya kita langsung saja coba contoh kasusnya ya 



- HTML fragments
sekarang  yang pertama akan kita coba adalah  kita lihat dulu bagaimana cara membuat html fragments ya 

misalnya saya punya sebuah object yang didalamnya terdapat beberapa properti
*/
// const mhs = {
//     nama : 'muiz',
//     umur : 18,
//     nrp : 83748,
//     email : 'muizzuddin392@gmail.com'
// }

// nah misalnya saya punya sebuah variable untuk menyimpan elementnya yang akan dirangkai sebagai html fragments
// kita bikin menggunakan template literal 

// const el = `<div class="mhs">
//                 <h2>${mhs.nama}</h2>
//                 <span class="nrp">${mhs.nrp}</span>
//             </div>`;

/* nah misalnya kita mau tampilkan didalam DOM
jadi kita bisa tulis begini
*/

// document.body.innerHTML = el

/* 
kalo saya jalankan didalam DOMnya teradapat elementnya ya 
dan ini sudah kita coba sebetulnya dimateri sebelumnya 
harusnya kalian sudah paham ya 

nah sekarang coba bayangkan gimana kalo misalkan kalian punya object mahasiswanya isinya banyak 
mungkin saja begitu ya kalian query ke database atau kalian minta data kesebuah API 
data mahasisawa dikembalikannya banyak 


- looping
nah kita bisa gunakan looping untuk mengulang data yang didapatkan 
misalkan saya punya array yang didalamnya terdapat object object


*/
// const mhs = [
//     {
//         nama : 'muiz',
//         email : 'muizzuddin392@gmail.com'
//     },
//     {
//         nama : 'husain',
//         email : 'husain322@gmail.com'
//     },
//     {
//         nama : 'hasan',
//         email : 'hasan292@gmail.com'
//     },

// ]


/* 
misalkan datanya ada 3 ya 
nah sekarang gimana caranya kita menampilkan data keDOMnya menggunakan html fragments yang kita looping
langsung didalam template literalnya 


*/
// const el = `<div class="mhs">
//                 <ul> 
//                     ${mhs.map(a => `<li> ${a.nama}</li>
//                                    <li> ${a.email} </li>`).join('')}
//                 </ul>
//             </div>`;

// document.body.innerHTML = el

/* 
nah didalam ul misalnya kita mau looping 
nah gimana cara kita looping? kita bisa gunakan exspression yang didalamnya kita panggil method map 
ke array mhs jadi dia akan mengembalikan array yang baru

karena seperti yang kalian ketahui didalam kurung kurawalnya kita bisa isi expressionnya 
dan map adalah expression

yang isi mapnya kita bisa kembalikan li yang didalamnya ada nama dan email didalam objectnya 

nah kalo terdapat tanda koma kita tambahkan join untuk mengubahnya jadi string

itu kalo kalian mau melakukan looping 





- pengkondisian
nah sekarang gimana kalo mau melakukan pengkondisian 

sebetulnya kita bisa pakai ternary ya 

contohnya kalian punya daftar lagu ya ada judul lagu dan ada penyanyinya  

*/

// const lagu = {
//     judul : 'tetap dalam jiwa',
//     penyanyi : 'isyana sarasvati'
// }

/* 
kalo misalkan kita mau menampilkan kedalam html fragments ini gampang ya sama kayak yang diatas ya 

*/

// const el = `<div class="lagu">
//                 <ul class="">
//                     <li class="">${lagu.penyanyi}</li>
//                     <li class="">${lagu.judul}</li>
//                 </ul>
//             </div>`

// document.body.innerHTML = el

/* nah kalo gini kan tidak ada yang aneh ya
tapi problemnya adalah ada lagu yang punya featuring

karena tidak semua lagu itu ada featnya 
nah kita bisa kasih kondisi seperti ini 

*/
// const lagu = {
//     judul : 'kau adalah',
//     penyanyi : 'isyana sarasvati',
//     feat : 'rayi putra'
// }

// const el = `<div class="lagu">
//                 <ul class="">
//                     <li class="">${lagu.penyanyi}</li>
//                     <li class="">${lagu.judul} ${(lagu.feat) ? `feat ${lagu.feat}` : ''}</li>
//                 </ul>
//             </div>`

// document.body.innerHTML = el


/* 
jadi disini saya jalankan expression lagi yang isinya 
jika ada lagu.feat maka tambahkan string feat siapa gitu ya 
dan jika tidak ada maka kita kosongkan

nah kita bisa kasih kondisi seperti ini 
kalo saya jalankan sudah bener ya 



- HTML fragments bersarang (nested)

dan yang terakhir kalo kita mau bikin html fragmentsnya bersarang

misalnya kita punya mahasiswa yang bentuknya object

*/
const mhs = {
    nama : 'muiz',
    semester : 5,
    mataKuliah : ['rekayasa web', 'analisis dan perancarang sistem informasi', 'pemrograman sistem interaktif', 'perancarang sistem berorientasi object']
}
/* 
jadi ceritanya ada mata kuliah yang typenya array 
karena mata kuliah disemester 5 itu banyak

nah gimana cara menampilkan semua data ini kedalam html fragments



*/
function cetakMataKuliah(mataKuliah){
       return   `<ol>
                    ${mataKuliah.map(a =>`<li>${a}</li>`).join('')}
                </ol>`
}
const el = `<div class="mhs">
                <h2>${mhs.nama}</h2>
                <span class="">semester ${mhs.semester}</span>
                <h4>Mata Kuliah</h4>
                    ${cetakMataKuliah(mhs.mataKuliah)}
            </div>`

document.body.innerHTML = el


/* 
dan untuk mata kuliahnya saya akan gunakan ol dan li yang dilooping 
yang saya kerjakan difunction terpisah yang menerima parameternya adalah array mataKuliah

jadi saya punya function namanya cetakMataKuliah 
lalu didalamnya tinggal kita return saja sebuah template literal

nah jadi kalian bisa lihat sekarang 
nama ngambil dari object, semester ngambil dari object juga
dan mata kuliahnya kita looping menggunakan map yang kita simpan kedalam sebuah funtion 

jadi bisa bersarang seperti ini mudah mudahan kalian paham

jadi mungkin itu contoh penggunaan dari HTML fragments yang kita buat menggunakan template literal

dan dimateri selanjutnya kita akan bahas mengenai template literal ini 
kita akan belajar mengenai tagged template 

jadi itu saja materinya mudah mudahan tidak bingung 
kita ketemu lagi dimateri berikunya 

dan seperti biasa jangan lupa titik koma ; */
