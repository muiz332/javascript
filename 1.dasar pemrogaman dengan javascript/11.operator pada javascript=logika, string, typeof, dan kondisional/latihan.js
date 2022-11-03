/*operator pada javascript: logika, string, kondisional, dan typeof 


- Operator logika


operator logika digunakan untuk menentukan logika dari beberapa ekspresi yang 
nanti kalian gabungkan 

ini adalah symbol dari operator logika

operator logika        keterangan 
 
&& (dan dan)            AND
|| (paip paip)          OR
!  (tanda seru)         NOT


cara penggunaanya begini, misalnya kalian akan mengechek apakan sebuah bilangan adalah bilangan genap atau bukan 
misalnya begini

saya punya variable x yang saya isi dengan angka 5 
x = 5
5

kalo operatornya lebih dari satu dan untuk menggunakan operator logikal kita gunakan kurung pembuka dan penutup
terus saya mau ngechek apakan x itu bilangan genap atau bukan? 


misalnya saya tulus begini 
(x % 2 === 0) artinya saya akan melakukan sisa bagi kepada angka lima, lalu jika mengasilkan angka 0 (genap) maka nilainya true dan jika false 
itu pasti ganjil, nah ini hasilnya true atau false?
false

karena 5 dibagi 2 itu ada sisanya yaitu sisa 1

kalo saya ingin mengcheck apakah sebuah bilangan itu adalah bilangan genap yang lebih kecil dari 10?
jadi ada dua kondisi ya,

yang pertama check bilangan genap
yang kedua check apakah bilangan itu lebih kecil dari 10 

kita bisa pencet atas diconsole untuk mengulang perintah yang sudah kalian masukkan 
kalian bisa tulis begini

x = 12
12

terus untuk menghilangkannya kalian bisa pencet ctrl k atau klik kanan clear console 
(x % 2 === 0)
true

tapi apakan 12 lebih kecil dari pada 10? tidak ya tapi kita akan gabungkan perintah tersebut 
(x % 2 === 0) && (x < 10)
false


nah ini artinya saya mengecheck apakah 12 bilangan genap? dan apakah 12 itu lebih kecil dari angka 10?

kalo menggunakan dan(AND) dua duanya harus true untuk mengasilkan true, jadi kalo yang kiri true, dan kalo yang kanan false hasilnya akan false 
begitu pula sebaliknya 

jadi untuk menghasilkan true 
misalkan
x = 8
8

(x % 2 === 0) && (x < 10)
true

maka hasilnya true

kalo kita gunakan operator OR, asal salah satunya benar maka nilainya pasti true
misal
x = 8
8

(x % 2 === 0) || (x < 10)
true
maka nilainya true kebetulan dua duanya true

misalkan
x = 12
12 
(x % 2 === 0) || (x < 10)
true

apakah 12 itu adalah angka yang genap? dan apakah 12 itu lebih kecil 10?
kalo kita jalankan hasilnya tetap true karena salah satunya benar 
dan ini nanti akan sering kita gunakan

dan yang terakhir itu operator NOT, operator NOT untuk membalikkan hasil booleannya 
contohnya yang tadinya hasilnya true dibalikin jadi false 
misalnya kita punya 

x = 10
10

kalo saya check begini apakah x itu lebih kecil dari pada 20?
x < 20
true

tapi kalo saya tulis begini apakah x lebih kecil dari pada 20, tapi saya tambahin tanda seru didepannya ini hasilnya true, dibalikin menjadi false 
!(x < 20)
false

bagitu untuk operator logika ya mudah mudahan tidak bingung




- Operator string

operator string kita buat dengan menggunakan tanda + , tanda + ini operator aritmatika ya? 
nah kebetulah dijavascript ini tanda + memiliki dua fungsi yaitu jika operannya adalah angka maka dia akan menjadi operator aritmatika sedangkan 
jika operandnya adalah string atau tulisan maka dia akan berubah menjadi operator penggabung string 
contohnya begini 

misalkan sekarang saya punya dua buah variable
ada variable a
ada variable b
misalkan saya isi dengan 

a = "apple"
"apple"
b = "pen"
"pen"

jika kita jumlahkan a dengan b maka apa hasilnya ?
a + b
"applepen"
tentu saja dia akan mengasilkan applepen ya

nah jika kalian ingin ada spasi di antara keduanya kalian cukup tuliskan begini 
a + " " + b
"apple pen"
maka hasilnya akan menjadi apple pen

kalian bisa lihat + nya berubah menjadi operator penggabung dua buah string 

nah sekarang bagaimana jika kita menggabungkan string dengan angka atau sebaliknya
nah disini javascript menanganinya dengan cara yang unik ya 

kita lihat kalo saya tulis 
10 + "10" ini hasilnya akan menjadi 
"1010"  dan dia bentuknya adalah string 

sama juga ketika saya tulis 
"10" + 10
"1010"
jadi dia string "1010" gitu 

tapi ketika saya tulis begini

10 + 10 + "10"    ini kira kira hasilnya apa? hasilnya jadi 
"2010" dan bentuknya adalah string 

tapi ketika saya tulis 
"10" + 10 + 10  berapa ini ? ini hasilnya menjadi 
"101010" dan bentuknya string 

jadi kalian bisa lihat javascript sudah bisa mengetahui type data apa yang dijumlahkan 

jika angka dengan angka maka hasilnya juga angka tapi jika salah satunya string maka tanda + ini berubah menjadi operator string 




- Operator typeof

operator typeof digunakan untuk mengetahui type data apa dari nilai yang kita masukkan ke dalamnya
lihat caranya kalian cukup menuliskan typeof(operand) dan ini adalah jenis operator yang unary 
karena hanya membutuhkan 1 operand 

contohnya jika kita kembali keconsole, terus saya tulis begini
typeof(10) artinya saya ingin mengetahui 10 ini type datanya apa 
"number" jadi dia akan mengembalikan number

sedangkan kalo, typeof("10") ini type datanya 
"string"

atau saya tulis gini, typeof(true) ini type datanya boolean
"boolean"

akan ada saatnya menggunakan typeof ini untuk mengetahui type datanya apa dari sebuah nilai 





- Operator kondisional

dan yang terakhir adalah operator kondisional dan ini jenis operatornya adalah operator ternary
dimana kita butuh 3 operand didalamnya

operator ini digunakan untuk melakukan pengechekan pada sebuah kondisi dan menentukan nilai yang dihasilkan ketika kondisinya bernilai true atau false 

cara menulisnya begini 
(kondisi) ? "benar" : "salah"

jadi kita harus punya dulu sebuah kondisi didalam kurung ya, lalu kita beri tanda tanda ? setelahnya jika kondisinya benar dia akan mengambil 
nilai sebelah kiri titik dua, dan jika kondisinya salah dia akan mengambil nilai setelah titik dua sebelah kanan

contohnya kalo misalkan kita punya kasus gini ini untuk mengechek bilangan ganjil atau genap

(x % 2 === 0) ? "genap" : "ganjil"

artinya jika kondisinya bernilai true maka yang dikembalikan adalah tulisan genap, jika kondisinya bernilai false maka yang dikembalikan adalah 
tulisan ganjil 

jadi tidak mengembalikan true or false tapi mengembalikan apapun yang kita tulis diantara titik duanya

nanti kita bisa mengganti tulisan genap dan ganjil menjadi apapun bisa angka, bisa boolean bahkan nanti kita bisa memanggil sebuah function 
tapi itu nanti lah ketika kita belajar mengenai block kondisional dan materi yang lainnya 

jadi sabar saja, untuk sekarang kalian bisa masukkan ekspresi ini kedalam console 

baik jadi itu mungkin penjelasan mengenai operator pada javascript cukup banyak ya 
mudah mudahan kalian tidak bingung dengan penjelasannya,

kalo bingung silahkan kalian ulang ulang aja materinya karena walaupun simple topik ini sangat 
mendukung untuk pembuatan progam kalian nantinya 


jadi sampai disini dulu materi kali ini sampai ketemu lagi dimateri selanjutnya 
dan satu lagi jangan lupa titik koma ;  









-----------------------------------

source web programming unpas

-----------------





*/