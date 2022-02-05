/* javascript dan DOM: prevent default


sekarang kita akan membahas sesuatu yang dinamakan dengan prevent default

preventDefault ini adalah sebuah method yang ada didalam object event 



*/
// const close = document.querySelectorAll('.close');
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'

//     })
// })

/* yang ada didalam parameter function itu 

tujuannya adalah untuk menghentikan aksi default yang dilakukan oleh sebuah element

nah maksutnya gimana coba kita lihat ya 

misalnya gini sekarang coba kalian kembali kescript htmlnya 

kalian lihat pada bagian yang close ini 
nah ini ceritanya saya buat menggunakan element span ya 

nah sekarang gini 
ginama kalo sekarang saya ubah span ini menjadi tag a yang memiliki class close juga

tapi karena saya tidak mau pindah kehalaman manapun saya kosongkan atribut hrefnya

dan ini akan saya copy kesemua span yang bawah ya 

yang kalo kita lihat hasilnya tombolnya sama saja 
tapi ada underline dibagian bawah 
nah itu bisa kalian hilangkan 

nah tapi lihat ketika saya klik 
nah itu tidak hilang tapi kayak seperti kedip 

nah itu kenapa kira kira?
nah ini karena ada aksi default yang dilakukan oleh tag a ini 

a itu kan dia hyper link dimana kalo kita klik dia akan pindah kehalaman lain 

halaman yang kita tulis pada atribut hrefnya

nah sekarang karena kita tidak tulis apa apa didalam atribut hrefnya 

nah ini artinya pada saat kita klik halamannya akan kembali kehalaman semula gitu

jadi otomatis dia akan merefresh lagi halamannya 
begitu halamannya direfresh ya pasti elementnya akan muncul lagi semuanya 

jadi pada saat saya klik sebenarnya hilang sebentar lalu halamannya merefresh lagi

nah sekarang gimana caranya supaya kita bisa menghentika aksi default itu?

karena kadang kadang menggunakan javascript kalian pengen membuat aksi sendiri dan menghentikan aksi defaultnya 

ya seperti kalian ketika mencet sebuah tombol 
ketika kalian melakukan checklist

ketika kalian memilih elemen dicobobox
melakukan submit pada form dan lain lain ya

nah kalian ada kalanya ingin menghentika aksi itu 
dan menggantinya dengan aksi punya kalian sendiri

nah ini caranya gimana?
gampang saja kalian lihat kesini

kita punya script sebelumnya 


*/

// const close = document.querySelectorAll('.close');
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'

//     })
// })

/* kalian lihat begitu tombol close diklik hilangkan parentnya 

nah setelah parentnya hilang halamannya direfresh 
nah kita tidak mau melakukan itu 

maka caranya kalian cukup panggil eventnya lalu tambahkan preventDefault

*/

const close = document.querySelectorAll('.close');
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'
        e.preventDefault();
    })
});


/* nah coba jalankan

kalo saya klik close 
nah itu hilang ya 

jadi aksi defaultnya tidak dijalankan 


jadi itu ya topik pertama ini mengenai menghentika aksi default menggunakan method preventDefault

mudah mudahan paham

kita lanjut dipart ke 2




*/