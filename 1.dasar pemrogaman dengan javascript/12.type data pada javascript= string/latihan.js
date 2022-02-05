/*type data pada javascript: string 

dimateri ini kita kan membahas salah satu type data yang ada pada javascript yaitu string 
jadi kalo menurut definisinya 

     "type data string dalam javascript 
digunakan untuk mempresentasikan data texttual"

atau data texttual tersebut sering plaint text 

nah untuk menuliskan string pada javascript yang perlu kita lakukan hanya membungkus data atau nilai kita menggunakan tanda kutip kalian bisa menggunakan kutip dua "" , atau kutip satu '' ini fungsinya sama saja ya 

contohnya jika kalian ingin menuliskan tulisan seperti ini 
"muhammad"
'muizzuddin'

kalian boleh menggunakan kutip dua atau kutip satu ya 
nah yang mesti kalian inget kalo kalian membuatnya dengan menggunakan kutip dua diawali dengan kutip dua dan diahiri juga  dengan kutip duajadi tidak boleh awalnya kutip dua diakhiri dengan kutip satu atau sebaliknya 

nah swkarang kapan kita menggunakan kutip dua atau kutip satu? sekali lagi in bebas saja ya kalo saya pribadi lebih suka dengan kutip satu kenapa karena untuk menulisnya dikeyboard kita tidak usah menekan tombol shift 

tapi kalian bisa mengganti ganntinya ketika kalian membutuhkan karakter kutip didalam string kalian 
nah ini penting ya 
contohnya gini 

kalo misalkan kalian punya didalam string kalian ada katakter kutip satu nah maka sebaiknya kalian membungkus kutip kalian menggunakan kutip dua "" 
"hari ini adalah hari jum'at"

sebalikanya jika didalam string kita ada kutip dua 
ini contohnya
'kami sedang mengadakan kegiatan 
"Gerakan Pungut Sampah"'

didalam stringnya misalkan ada tulisan "Gerakan Pungut Sampah" yang dibungkus dengan kutip dua nah keseluruhan string ini sebaiknya kalian bungkus dengan kutip satu supaya tidak eror 

tapi nanti kalian pasti menemukan keadaan dimana kalian akan membutuhkan keduanya dalam sebuah string 
contohnya seperti ini 
'"Gerakan Pungut Sampah" 
dilaksanakan pada hari jum'at'

nah jika kalian ingin menuliskan kutip dua dan kutip satu dalam sebuah string itu kalian tidak bisa membungkusnya dengan menggunakan kutip satu seperti yang diatas itu ya kalian bisa lihat ada kutip satunya ada kutip duanya 

nah begitu juga sebaliknya kalo kita bungkus ini dengan kutip dua 
""Gerakan Pungut Sampah" 
dilaksanakan pada hari jum'at"
ini akan tetap eror juga 

kenapa? karena begitu nanti javascript menemukan ada kutip dua berikutnya itu dianggapnya stringnya sudah selesai 

atau kita coba deh ya 
sekarang buka console dibrowser kalian
jika saya ingin menuliskan sebuah string misalnya saya menggunakan kutip dua seperti ini 
"Muhammad"

maka saya harus tutup dengan kutip dua 

ketika saya menulisnya dengan kutip satu 
'Muizzuddin'
maka saya harus menutupnya dengan kutip satu 

nah ketika tadi contohnya ya saya menggunakan kutip satu untuk menuliskan didalam ada kutip dua seperti ini 
'"Gerakan Pungut Sampah" dilakukan pada hari jum'at'
nah kalian bisa lihat ini dibungkus dengan menggunakan kutip satu ya 
tapi ini didalamnya karena ada kutip satu ini dianggapnya stringnya selesai ditanda kutip kata jum'at

jadi javascript tidak akan tahu apa arti dari at ini 
kalo saya pencet enter akan eror begitu pula sebaliknya 

misalkan kalo saya tulis pakai kutip dua didalamya ada kutip dua lagi kalian bisa lihat tulisannya juga berubah ya warnanya
""Gerakan Pungut Sampah" dilakukan pada hari jum'at"
ketika saya pencet enter erornya sama ya Unexpected identifier

sekarang identifiernya ini Gerakan Pungut Sampah javascript tidak tahu ini 

bagaimana kita mengatasi masalah tersebut?

yang kita butuhkan adalah sesuatu yang namanya escape charakter 
escape charakter in berfungsi untuk menampilkan sebuah karakter yang diinterpretasikan berbeda dalam sebuah bahasa pemrogaman contohnya kutip tadi 

kutip tadi diinterpretasikan sebagai pembuka dan penutup string 

nah untuk menuliskan kutip sebagai string kutip yang kita lakukan adalah menambahkan tanda backslash \ sebelum tanda kutipnya

jadi ini adalah yang disebut dengan escape charakter sehingga nanti kutipnya akan ditampilkan sebagai string kutip 
jadi contoh menulisnya seperti ini 
'"Gerakan Pungut Sampah" dilaksanakan pada hari jum\'at'

jika kalian membungkusnya dengan menggunakan kutip satu dan ingin menampilkan kutip satu didalamnya tambahkan backslash sebelum tanda kutip 

atau jika menggunakan kutip dua kalian boleh tuliskan seperti ini gitu ya 
"\"Gerakan Pungut Sampah\"dilakukan pada hari jum'at"

paham ya 

nah untuk escape charakter ini didalam javascript ada banyak ya 
kalian bisa lihat tabel berikut ini

escape charakter            hasil
    \0                   karakter NULL
    \'                        '
    \"                        "
    \\                        \
    \n                new line/baris baru 
    \t                        tab
    \b                     backspace
    \uxxxx                  unicode

kita coba dulu yang \\ 
jadi jika  tadi saya tulis dengan menggunakan kutip satu 
'ini adalah hari jum\'at'
kita tambahkan backslash untuk menampilkan kutip satu untuk menjadikannya sebagai string kutip
kalo kita pencet enter ini aman gitu ya

selanjutnya kalo misalkan saya mau menuliskan baris baru saya bisa menulis begini
'ini adalah hari \n jum\'at'
kalo saya pencet enter 
'ini adalah hari 
jum'at'

kalian bisa lihat jum'atnya turun satu baris kalo saya tambahkan \n nya dua kali maka 
'ini adalah hari 

jum'at' 
dia akan turun dua baris jum'atnya paham ya 

ketika saya ganti dengan \t maka nanti jum'atnya akan bertambah 1 buah tab
'ini adalah hari \t jum\'at'
pencet enter 
'ini adalah hari         jum\'at'


nah sekarang ada juga untuk menampilkan unicode 
nah unicode ini untuk menampilkan contohnya symbol mungkin ya yang biasa dilakukan adalah untuk menampilkan symbol dengan menambahkan backslash \u lalu urutan angka unicodenya \uxxxx

ini contohnya sepertin ini mungkin 
unicode      hasil
\u00A9        c
\u00AE        R
\u00B1        
\u00B5
\u2122        TM

kita coba ini kalo saya tulils didalam string 
'\u00A9'
itu dia akan menghasilkan copyright seperti ini 
"©"

atau kalo saya tulis kutip satu ini pakai kutip dua juga boleh ya 
"\u2122"
pencet enter 
"™"

nah ini untuk mehasilkan tm begitu
atau google aja unicode
ini jika ingin menggunakan unicode 


lalu didalam string itu ada yang disebut dengan concatenation/konkatenasi ini dengan menggunakan karakter + saya yakin kalo kalian mengikuti materi sebelumnya itu kita sudah pernah operator + ini sebagai operatro matematik/aritmatika atau sebagi operator penggabung dua atau lebih string 

nah lalu kita juga bisa membandingkan dua buah string dengan menggunakan operator perbanding == atau ===

nah ini akan mengechesck dua buah string sama atau tidak 
"Saya makan " === "saya makan"
false

tapi hati hati disini huruf besar dan huru kecil itu berbeda meskipun tulisannya sama 

dan yang terakhir didalam string itu ada sebuah fungsi yang dapat kita gunakan yaitu 
.length
menghitung panjang string 

sebenarnya banyak fungsi dari string yang nanti kita bisa gunakan tapi yang lain akan dibahas dimateri yang berbeda 

.length ini digunakan untuk menghitung panjang dari sebuah string 

contohnya jika saya punya sebuah string seperti ini
"M.Mu'izzuddin".length
13

jika saya tambahkan .length dibelakangnya maka dia akan menghasilkan sebuah angka dimana angka ini adalah jumlah karakter yang terdapat didalam stringnya 

kita coba 
misalkan saya punya string gini
"web programming unpas".length
21

jika saya tambahkan .length 
maka dia akan menghasilkan nilai 21 
ini 21 adalah jumlah karakter didalam string ini 

dan .length ini juga bisa kita simpan kedalam variable 

sekali lagi variable nanti akan kita bahas dimateri lain secara detil ini hanya untuk contoh penggunaanya saja 

misalkan saya punya variable namanya nama diisi dengan nama saya 
var nama = "Muhammad Mu'izzuddin" bisa juga begini var nama
                                            nama = "Muhammad Mu'izzuddin"

lalu saya tulis begini 
nama.length 
ini juga bisa ya jadi isi dari variable nama 
jadi jumlah karakter yang terdapat pada variable nama adalah 
20 
nah 20 ini juga menghitung karakter spasi jadi kalo string kalian ada spasi itu juga dihitung ya
kalian kalian bisa lihat disini bahwa ada 20 karakter 
M u h a m m a d   M  u  '  i  z  z  u  d  d  i  n
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20

paham ya

oke jadi mungkin itu ya sekilas mengenai string mudah mudahan kalian paham dan nanti string ini adalah salah satu type data yang akan banyak sekali kita gunakan diseri ini 

kita ketemu lagi dimateri berikutnya dan satu lagi jangan lupa titik koma ; */