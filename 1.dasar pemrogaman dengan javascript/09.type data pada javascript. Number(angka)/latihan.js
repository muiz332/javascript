/*type data pada javascript: angka 

dimateri ini kita akan membahas type data pada javascript yaitu angka atau number 
perlu diketahui pada javascript angka itu direpresentasikan sebagai berikut 

numbers in javascript are double-precision floating point 64-bit format IEE 754 value

maksutnya bagaimana ya ? jadi intinya begini didalam javascript itu tidak ada yang namanya intejer atau bilangan bulat, yang ada hanyalah 
floating point tadi katanya ya atau bilangan pecahan 

nanti kita lihat bagaimana maksutnya ya, lalu tadi menurut definisinya ukuran angka yang bisa ditampung oleh javascript adalah 64-bit 
nah ini artinya kita bisa menyimpan angka sebesar 2pangkat 64-bit karena bit adalah bilangan biner 

atau ini sama saja dengan 18x10 pangkat 18 
18x1000 000 000 000 000
atau persisnya seperti ini 18446744073709551616

jadi sangat besar sekali tapi angka ini tidak bisa kita pakai semua kenapa? karena didalam 64-bit tadi ada beberapa penanda yang nanti harus 
kita gunakan untuk menampung angka angka tertntu 

kalo kalian masih bingung tidak apa apa ya, pokoknya pada dasarnya ada beberapa jenis angka yang dapat kita simpan dijavascript ya 
yang pertama kita bisa menyimpan angka tanpa desimal atau disebut dengan intejer misalnya 10, 1000, 123478 

katanya tadi tidak ada intejer ya? betul memang jika kita melihat bilangan bulat atau intejer pada javascript sebetulnya dibelakang layar 
adalah bilangan pecahan tapi tingkat akurasinya hanya sampai 15 digit 

nah maksutnya gimana kita lihat, misalnya saya punya struktur html sederhana kalo kita jalankan itu hasilnya kosong kalo misalkan kita akses 
consolenya supaya kita bisa bekerja dengan javscript ya 

kalo misalkan kita mengetikkan sebuah angka nanti javascript akan mengembalikan angka tersebut menjadi angka yang sama 

misalnya saya tulis 10 terus pencet enter kalian bisa lihat angka 10 kita dikirimkan ke javavsript dan javascript akan mengembalikan angka 10 
begitu pula dengan angka yang lainnya jadi javascript akan mengembalikan angka yang sama

nah jika kita memasukkan angkanya cukup besar lebih dari 15 digit nah nanti kalian akan lihat ada perubahan angka 

kalo misalkan saya memasukkan angka 9 sebanyak 15 digit maka akan dikembalikan bilangan yang sama tapi lihat ketika saya masukkan angka 9nya 
sebanyak 16 digit kalo saya pencet enter akan ada pembulatan jadi meskipun yang kita tulis adalah bilangan bulat yang diproses 
adalah bilangan pecahan 1/0

jadi tadi bilangan pecahannya sudah cukup untuk membulatkan menjadi angka yang berbeda jadi itu yang harus diperhatikan
tapi sebetulnya kalian tidak usah khawatir dengan hal ini, apa lagi jika kalian membuat aplikasi yang tidak membutuhkan angka dengan 
tingkat akurasi yang sangat tinggi seperti ini 

dan diseri ini kita hanya akan memperlajari perilaku dari angkanya saja kita tidak akan melakukan kalkulasi sampai sedetil itu 

yang ke dua kita bisa menyimpan angka dengan desimal atau bilangan pecahan, misalnya kita bisa menuliskaan 3.14, 0.4, 100.00  
tapi ati ati koma dijavscript ini diganti dengan titik contohnya kalo misalkan menggunakan console tadi kita bisa tulis 3.14, 20.2 
dan lain lain maksimal kita bisa menyimpan 17 digit dibelakang koma 

lalu hati hati ketika kalian menjumlahkan bilangan pecahan desimal karena kadang kadang hasilnya tidak sesuai dengan yang kalian harapkan 

kita coba lihat ini, kalo misalkan kalian tulis 0.3 + 0.7 ini hasilnya adalah 1
tapi jika kalian menjumlahkan 0.2 + 0.1 ini seharusnya 0.3 ya coba kita enter diconsolenya jadi javscript akan mengembalikan nilai ini 

jadi sebetulnya ada bilangan pecahan yang cukup kecil sehingga hasilnya tidak bulat 0.3 tapi     0.30000 000 000 000 004 jadi sekali 
lagi hati hati dalam menghitung bilangan pecahan karena hasilnya tidak terlalu akurat 

yang ketiga kita juga bisa menyimpan bilangan yang sangat besar atau sangat kecil dengan menggunakan eksponen 
contohnya jika kita menuliskan 123e5 nah ini akan menghasilkan 12300000 jadi 0 nya sebanyak lima kali 

atau sebaliknya jika kita menuliskan 123e-5 maka dia akan bilangan seperti ini 0.00123
silahkan kalian coba coba saja mengunakan eksponen untuk bilangan yang lain 

selanjutnya kita juga bisa menyimpan bilangan negatif misalnya kita tulis -23, -23.8, dan lain lain 
jadi sebetulnya 64-bit tadi itu tidak bisa kita pakai untuk menuliskan bilangan bulat positif saja,
banyak hal yang bisa kita gunakan 

dan urutan bit penggunaannya mungkin bisa dilihat seperti ini

1 bit digunakan sebagai penanda jika bilangan itu negatif (sign) 
11 bit digunakan untuk eksponen (exsponent)
dan sisanya 52 bit baru digunakan untuk angka sebenarnya (fraction) termasuk untuk menyimpan titik untuk pecahan 

lalu kalian jangan pernah mengawali angka dijavascript itu dengan angka 0 kenapa? ini juga hasilnya kadang kadang tidak sesuai dengan 
harapan kita contohnya begini kalo misalkan kita memasukkan angka 022 diconsole javascript ya silahkan kalian coba maka nanti hasilnya 
yaitu akan 18 

kok bisa? karena dengan kita menuliskan angka 0 diawal angka kita, bilangan kita akan dianggap sebagai bilangan oktal buka bilangan desimal 
bilangan desimal itukan basis 10 ya dari 0 sampai 9 kalo bilangan oktal itu basis 8 jadi angkanya dimulai dari 0 sampai 7 jadi ati ati

sama juga dengan kita mengawali angka kita dengan 0x nah ini akan dianggap sebagai bilangan heksa desimal bilangan heksa desimal ini basis 
16 jadi dimulai dari angka 0 sampai 9 dan huruf a sampai f

kalo kita menuliskan 0xff itu javascript akan mengembalikan nilainya menjadi 225 
jadi itu bagaimana javascript mengelola angka kita paham ya

lalu selanjutnya didalam javacsript juga ada yang disebut dengan angka special, angka special ini adalah 
Infinity  dengan huruf i besar 

-Infinity 
NaN atau ini singkatan dari not a number 

contohnya gini kalo misalkan kita membagi dengan angka 0 maka itu yang akan dikembalikan oleh javascript adalah nilai Infinity 
contoh 
2 / 0 = Infinity
-2 / 0 = -Infinity 

silahkan dicoba saja diconsole 

sedangkan jika kita membagi nilai 0 dengan 0 ini aka menghasilkan bilangan NaN 
NaN juga dihasilkan ketika kita membagi sebuah angka dengan string 
contoh
100 / "saya" maka hasilnya akan NaN 

hati hati juga ketika kalian membagi bilangan dengan string tapi string tersebut terdapat angka 
nah disini javascript akan membaca string tersebut dengan angka dan akan melakukan perhitungan sebagaimana membagi angka
contoh 

100 / "10"
menghasilkan 10  

jadi itu yang harus kalian perhatikan ya 

jadi itu ya penjelasan mengenai type data pada javascript dan kalo kalian masih bingung tidak usah khawatir nanti dimateri selanjutnya kita 
masih akan menggunakan angka angka ini karena dimateri selanjutnya kita akan membahas mengenai operator operasi apa yang dapat kita lakukan 
terhadap nilai nilai kita khususnya angka 

jadi sampai disii dulu materi kali ini ya 

kita ketemu lagi di materi selanjutnya dan satu lagu jangan lupa titik koma ;










-----------------------------------

source web programming unpas

-----------------



*/