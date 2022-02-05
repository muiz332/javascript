/*operator javascript: aritmatika, penugasan, dan perbandingan 

kali ini yang kita bahas adalah mengenai operator pada javascript 

apa itu operator? nah ini mirip ya dengan operator yang sudah kalian pelajari misalnya dimata pelajaran matematik 

jadi operator pada javscript adalah sebuah symbol yang digunakan untuk melakukan operasi, operasinya apa nah ini macam macam ya nanti kita lihat aja deh 

ada banyak jenis operator pada javascript diantarnya ada
aritmatika atau operator matematika 
penugasan
perbandingan 
logika
string 
kondisional 
typeof 

nah nanti semua ini akan kita bahas satu persatu nah operator operator ini dapat kita bagi berdasarkan jumlah operannya jadi untuk operator aritmatika sampai string itu kita sebut dengan operator binary sedangkan operator kondisional itu kita sebut dengan ternary dan operator typeof itu disebut dengan operator unary 

apa itu maksutnya kita lihat 
operator binary adalah sebuah operator yang membutuhkan 2 operand misalnya seperti ini 
operand1 operator operand2 

jadi kalian nanti punya operand1 lalu operatornya apa dan operand2 ini simpelnya kalo kalian melakukan operasi matematik ya 1 + 1 angka 1 pertama adalah operand1 tambahnya itu operator dan 1 yang kedua itu adalah operand2 

sedangkan operator unary itu hanya membutuhkan 1 operand 
operator operand1
operand1 operator

nah nanti kalian nulisnya bisa operatornya dulu lalu operandnya apa atau kebalikannya kalian nulis operandnya dulu baru operatornya apa 

dan yang terakhir operator ternary adalah operator yang membutuhkan 3 operand 

nah sekarang kita akan bahas dulu mengenai operator aritmatika atau disebut juga dengan operator matermatik ini gampang saja ya ada +, -, *, dan / 

nah yang harus kalian perhatika dalam javscript untuk melakukan perkalian itu kalian tidak menggunakan tanda silang ya atau hutuf x gitu kan kalo kita nulis dimatematik adalah tanda silang ya ini kita menggunakan tanda bintang ya atau kalo dikeyboard kalian tekan shift terus angka 8 

lalu ada satu lagi untuk javascript dan bahasa bahasa pemrogaman lain yang disebut dengan operator % atau ini desebut dengan modulo/modulus/sisa bagi nanti kita lihat cara penggunaannya ya 

misalnya kita gunakan lagi sebuah struktur html sederhana kita buka dibrowser lalu kita tampilkan consolenya terus misalnya kita masukkan operasi matematik simple saja misalnya 5 + 10 lalu kita pencet enter maka jvascript akan mengembalikan hasilnya 

untuk tadi yang sisa baginya itu yang dilakukan adalah misalnya gini 10 / 5 itukan hasilnya 2 ya 
tapi kalo saya tulis 10 % 5 ini hasilnya adalah 0 jadi modulus itu sisa dari pembagian jadi kalo 10 / 5 itu tidak ada sisanya maka hasil dari modulusnya 0 

beda ketika saya tulis 10 % 3 itu sisanya 1 paham ya tapi hati hati jika kalian melakukan beberapa operasi matematik secara bersamaan misalkan
1 + 2 * 3 - 4  nah ini jika kita operasikan dari kiri ke kanan akan menghasilkan angka 5, ini kalo misalkan saya enter ternyata hasilnya 3 bukan 5 kenapa? karena ada yang disebut dengan urutan operasi matematika atau operator precedence dimana ada operarot yang akan dikerjakan terlebih dahulu terlepas dari dimana kita menempatkanya dalam sebuah ekspresi 

urutannya adalah seperti ini saya singkat dengan KuKaBaTaKu atau ini singkatan dari (), *, /, +, - jadi yang akan selalu dikerjakan adalah ekspresi yang memiliki tanda kurung terlebih dahulu kalo tidak ada yang dikerjakan kali dulu terus bagi terus tambah terus kurang 

jadi kalo kita kembali kekasus kita kenapa hasilnya kok 3 itu karena yang dikerjakan adalah kurungnya dulu kalo tidak ada yang dikerjakan adalah kali dulu jadi 2 * 3 + 1 - 4 maka betul hasilnya 3

kalo kalian ingin hasilnya 5 berarti kalian harus tambahkan kurung (1 + 2) * 3 - 4 maka kurungnya akan dikerjakan terlebih dahulu baru kali nah ini maka hasilnya 5 paham ya

jadi itu operator aritmatika atau matematika 


selanjutnya ada operator penugasan/assignment yang paling sering ktia gunakan adalah tanda = dan ini kita gunakan kalo misalnya kita bekerja dengan variable sekarang untuk mencoba ini kita akan menggunakan sebuah variable dulu

nah meskipun kalian belum belajar dengan variable tidak apa apa ya kita coba dulu contohnya mudah mudahan kalian bisa paham karena nanti mengenai variable kita akan bahas dimateri yang terpisah 

misalkan begini untuk membuat variable dalam javascript kita itu menuliskan keywordnya var lalu spasi nama variablenya apa misalkan saya mau bikin variable yang namanya x lalu enter kalian tidak usah perdulikan terlebih dahulu kata undefined biarin saja 
var x 
undefined

selanjutnya jika kita kita menuliskan x = 10 dibawahnya ini artinya saya akan menugaskan angka 10 untuk berada didalam variable x , jadi meskipun symbolnya adalah = ini bukan membandingkan ini didalam pemrogaman artinya menugaskan operand yang sebelakn kanan (10) kedalam operan yang sebelah kiri (x) dari = kalo saya pencet enter dia akan mengembalikan angka 10 
x = 10
10

nah ini angka 10 sudah tersimpan ke dalam memory kalian meskipun kita clear consolenya kalo saya panggil x terus pencet enter komputer kalian masih mengingat nilainya jadi dia akan mengembalikan isi dari variable x 

sekarang jika kita menugaskan atau mengisikan lagi sebuah nilai baru kedalam x ini misalkan saya tulis x = 200 ketika saya pencet enter maka sekarang angka 10 ini akan digantikan oleh angka 200 

jadi kalo saya panggil x lalu enter yang tampil adalah angka 200 karena ini adalah nilai yang terakhir kita tugaskan didalam variable x paham ya

nah selain tanda = ini masih ada beberapa lagi jenis operator penugasan seperti

=
+=
-=
*=
/=
%=

nah kalo menggunakan salah satu dari operator ini nilai yang sebelumnya kita simpan didalam variable tidak akan dihilangkan atau istilahnya ditimpa tapi akan dilakukan operasi terlebih dahulu 

misalnya kita bikin lagi 
x = 10

sekarang jika kita tulis x += 5 maka 5 ini tidak akan menggantika angka 10 tapi dia akan dijumlahkan dulu sehingga hasilnya 15 nah angka 15 ini akan menggantika angka 10 tadi 

atau sama saja dengan seperti ini 

operator penugasan                sama saja dengan 
x += y                               x=x+y
x -= y                               x=x-y
x *= y                               x=x*y
x /= y                               x=x/y
x %= y                               x=x%y

silahkan kalian coba sendiri untuk operator yang lain selain += ini 

jadi itu adalah operator penugasan/assignment 

sekarang ada lagi operator perbandingan/comparison 
ini untuk membandingkan 2 dua buah operand 
ada banyak operator perbandingan ya kalian bisa lihat dibawah sini 

untuk membandingkan nilai kalian bisa gunakan 
operator perbandingan         katerangan
==                            sama dengan
!=                            tidak sama dengan
===                           strict sama dengan 
!==                           strict tidak sama dengan 
>                             lebih besar dari
<                             lebih kecil dari 
>=                            lebih besar sama dengan 
<=                            lebih kecil sama dengan 


dan operator perbandingan ini akan menghasilkan sebuah nilai boolean true/false, true jika benar false jika salah 

kita lihat contohnya ya 
kalo saya memasukkan angka
10 == 10 maka ini akan mengechek apakah angka 10 sama dengan angka 10? kalo saya enter akan mengembalikan nilai
true

10 == 15 apakah angka 10 sama dengan angka 15? tidak ya  maka hasilnya 
false  


atau kebalikannya 
10 != 10 apakah angka 10 tidak sama dengan angka 10? hasilnya false karena harusnya sama ya 
false

10 != 15 apakah 10 tidak sama dengan angka 15? pasti nilainya 
true 


nah lalu apa bedanya sama dengan yang 2 (==) dengan sama dengan yang 3 (===) ?

lihat ya
kalo kita tulis 
10 == 10 ini jelas hasilnya 
true

kalo kita tuliskan 
10 == "10"  kira kira hasilnya apa? nah javascript menganggap ini sama jadi nilainya
true  meskipun type datanya berbeda 

nah kalo kalian mau ngecek nilai dan type datanya apakan sama itu kalian menggunakan sama dengan 3 (===) ini disebut juga perbandingan yang strict(ketat) atau istilah lainnya adalah operator identitas jadi tidak hannya membandingka nilainya tapi juga membandingkan type datanya 

10 === "10" apakah angka 10 sama dengan string 10 ? tidak 
false

jadi saran saya yang nanti kalian gunakan adalah yang sama dengannya 3 (===) saja supaya menghindari kebingungan seperti ini 

silahkan kalian coba gunakan operator perbandingn yang lainnya untuk melihat hasilnya kita lanjutkan dimateri selanjutnya */ 