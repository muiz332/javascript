/*control flow pada javascript 

dan dimateri kali ini kita akan membahas mengenai sesuatu yang dinamakan dengan control flow atau alur kendali dari sebuah progam 

apa itu cotrol flow atau alur kendali? 
kita lihat dulu hal beikut ini ya 

jadi didalam pemrogaman ada yang disebut dengan normal flow atau alur normal 

maksutnya begini jadi apabila progam kita memiliki lebih dari satu statement dan pasti begini ya progam kita pasti memiliki lebih dari satu statement 

maka statement tersebut akan dieksekusi dari atas ke bawah atau dari kiri ke kanan

ya contohnya jika kita mempunya progam sederhana seperti ini dimana didalamnya terdapat lima buah statement ya 


alert('hello');
alert('nama');
alert('saya');
alert('muhammad');
alert('mu\'izzuddin');

maka statement ini akan dieksekusi dari atas kebawah sehingga hasilnya akan menampilkan dialog alert hallo lalu nama lalu saya muhammad dan yang terakhir mu'izzuddin

nah alert ini tidak akan tertukar dan akan berjalan setelah statement sebelumnya selesai dieksekusi begitu 

atau kita lihat contoh lain berikut ini 

var angka = prompt('masukkan angka');
alert('angka yang anda masukkan adalah ' + angka);

nah ini juga sama ya jadi jika kita punya dua buah statement seperti ini maka statementnya akan dieksekusi dari atas ke bawah 

meskipun nanti akan berhenti dulu di statement prompt ini dan menunggu sampai user selesai menuliskan sesuatu dikolom inputan dialog promptnya 

nah tapi begitu usernya menekan tombol oke maka progam akan kembali berjalan untuk mengeksekusi statement berikutnya begitu ya paham ya

nah ilustrasi eksekui progam tersebut bisa kita gambarkan sebagai panah seperti berikut ini 

                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                             \  ||  /
                                              \ || /
                                                \/

jadi mulai dari statement yang paling lalu turun kebawah begitu 

nah nanti pada saat kalian membuat progam alur progam atau control flownya itu tidak harus seperti itu bisa saja kita mengatur agar alurnya tidak lurus dari atas kebawah 

karena mungkin saja ada baris progam atau statement yang kita tidak ingin kita eksekusi (jalankan) karena hal tertentu begitu 

untuk melakukan hal tersebut membutuhkan sesuatu yang dinamakan dengan pengulangan dan pengkondisian 

nah dua hal inilah yang nantinya dapat mengatur alur dari progam kita 

coba kita bahas satu persatu 

yang pertama pengulangan atau yang dikenal juga dengan loop/interation
nah ini adalah sebuah konsep untuk mengerjakan atau mengeksekusi sebuah statement yang sama lebih dari satu kali atau berulang ya 

jadi jika tadi ilustrasi dari normal flow itu panah lurus kebawah 

maka untuk ilustrasi dari konsep pengulangan itu berbeda 
nah jadi kita lihat seperti ini 

jadi kita progam kita sedang mengeksekusi serangkain statement dari atas kebawah lalu nanti pada satu titik ada statement yang ingin kita lakukan secara berulang ada banyak statement yang sama yang ingin kita lakukan lebih dari satu kali 
maka kita akan lakukan dulu pengulangannya pengulangan pada statement tersebut sampai selesai 


                                                ||
                                                ||          |   |    |
                                                ||       |                |
                                                ||     |                     |
                                              \ || /  |                       |
                                                \/   |                         |
                                                 O                             |
                                                    /\                        |
                                                      |                       |
                                                        |                  |
                                                             |         |
                                                              |   |  |              
                                                                                        
                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                             \  ||  /
                                              \ || /
                                                \/                

lalu setelah itu kita lanjutkan lagi ke statement berikutnya begitu ya 

nah sintax pengulangan pada javascript itu ada banyak
ada yang namanya 
for 
while
do while

nah sintax ini nanti akan kita bahas lebih detil dimateri yang akan datang ya 

contoh yang paling sederhananya seperti ini 
nah misalkan kita punya beberapa statement seperti berikut ini 

alert('mulai');
alert('hello world');
alert('hello world');
alert('hello world');
alert('hello world');
alert('hello world');
alert('selesai');

dan akalo kalian lihat ada statement yang sama dan ada statement yang berbeda ya 
kalo kalian disini kita akan mengeksekusi alert yang bertuliskan hello world itu lebih dari satu kali 

ya ini sebanyak lima kali 
nah ini bisa kita ganti penulisan alert yang berisi hello world ini dengan sebuah sintax seperti ini 

alert('mulai');
for( var i = 0; i < 5; i++) {
    alert('hello world');
}
alert('selesai');

jadi disini kita menggunakan keyword for agar kita dapat melakukan pengulangan pada sintax yang kita ingin eksekusi berulangkali 

jadi cara menulisnya seperti ini

jadi sekali lagi detilnya akan kita bahas dimateri yang akan datang ya

tapi ini menghasilkan hasil yang sama seperti sintax sebelumnya bagitu ya

ini untuk pengulangan 
kalo kalian mau coba silahkan tulis saja sintax ini pada file javascript kalian 



nah selanjutnya adalah konsep pengkondisian atau ada yang menyebutnya dengna percabangan ya ini sama saja 

nah percabangan ini adalah sebuah keadaan dimana progam kita bisa memilih untuk mengeksekusi statement yang berbeda berdasarkan kondisi yang diberikan 

ya jadi ilustrasinya bisa kaliah lihat seperti ini 




                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                             \  ||  /
                                              \ || /
                                                \/
                                                 O )
                                                      )
                                                        )
                                                         )
                                                         )  true 
                                                        )
                                                       )
                                                     )
                                                 O )
                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                             \  ||  /
                                              \ || /
                                                \/








sama seperti sebelumnya setelah kita mengeksekusi serangkaian statement pada progam kita dari atas kebawah nanti pada satu titik progam kita akan diberikan sebuah kondisi 

nah nanti jika kondisi menghasilkan nilai true misalnya ya 
maka selanjutnya akan mengeksekusi statement yang berada dibawahnya 


tapi jika kondisi tadi menghasilkan nilai false maka yang dieksekusi adalah statement yang lain misalnya seperti ini 


                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                             \  ||  /
                                              \ || /
                                                \/
                                             (   O )
                                     (                )
                                 (                      )
                             (                            )
                         (                                )  true 
                     (                                   )
                 (                                      )
                (                                      )
                (                              O )
                 (                            ||
     false        (                           ||
                    (                         ||
              (                               ||   tidak dikerjakan oleh false
                         (                    ||
                      (                    \  ||  /
                      (                     \ || /
                        (                     \/
                         (                      O
()
()
                                               
                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                                ||
                                             \  ||  /
                                              \ || /
                                                \/


jadi ada statement yang tidak dikerjakan 
baru nanti selanjutnya seperti biasa melanjutkan statement berikutnya 

nah untuk pengkondisian juga ada beberapa sintax yang harus ktia pahami ya
ada yang yang namanya
if
if lalu else
if lalu else if lalu else if 
swhitch 


kita lihat contoh sederhananya seperti ini 
sekali lagi penjelasan mengenai pengkondisian ini akan kita bahas lebih detil lagi dimateri yang akan datang 

kalian bisa lihat ya ceritannya kita punya sebuah progam sederhana untuk melakukan pengecheckan apakah sebuah bilangan itu adalah bilangan genap atau bilangan ganjil 

jadi yang pertama kita minta dulu agar user memasukkan sebuah angka dan kita simpan kedalam variable angka 


*/                              

var angka = prompt('masukkan angka');
if(angka % 2 === 0) {

    alert(angka + ' adalah bilangan genap');

}else {

    alert(angka + ' adalah bilangan ganjil');

}

/*lalu kita lakukan pengecheckan menggunakan keywordnya if atau kita bacanya gini
jika angka yang dimasukkan tadi dibagi 2 sisa baginya sama dengan 0 
nah maka dia adalah bilangan genap 



tapi jika sisa baginya tidak sama dengan 0 maka dia akan masuk kebagian yang else ini sehingga yang akan tampil adalah bilangan ganjil 

ya sederhananya seperti ini 

mudah mudahan kalian paham 



baik jadi itu ya penjelasan singkat mengenai control flow atau alur progam pada javascript 

mudah mudahan bisa menjadi pengantar untuk nantinya kita akan bahas mengenai masing masing sintax untuk pengulangan dan pengkondisian tadi 


sampai disini materi kali ini ya 
kita ketemu lagi dimateri berikutnya dan satu lagi jangan lupa titik koma ; */