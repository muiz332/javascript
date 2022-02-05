/*Compiler VS Interpreter 

dimateri sebelumnnya ada 3 hal penting yang harus diperhatikan pada saat akan membuat progam 

1.bagaimana menuliskan source code
2.bagaimana source code dikonversikan ke bahasa mesin
3.bagaimana mengeksekusi source code 


yang kita bahas adalah bagaimana source code dikonversikan(diterjemahkan) ke bahasa mesin?

ada dua cara untuk menterjemahkan source code yang sudah kita buat kedalam bahasa mesin agar bisa kita jalankan 
ada source code yang harus kita compile menggunakan sesuatu yang namannya compailer ada yang harus kita terjemankan atau kita interpretasi menggunakan interpreter 

nah sebetulnya kita tidak perlu khawatir bagaimana kita melakukan dua hal ini karena tiap tiap bahasa pemrogaman sudah menyediakan cara untuk melakukan hal tersebut dan pada umumnya dilakukan secara otomatis tapi tidak ada salahnya jika kita tahu cara kerjanya dan perbedaanya 

sekarang kita bahas dulu apa itu compiler dan interpreter kita lihat dari cara kerjannya 

COMPILER
contohnya begini misalnya kita anggap saja ada dua komputer  A dan B 
nah si A ini ceritannya membuat progam nanti progamnnya akan diberikan pada si B jika menggunakan compiler maka ini yang akan terjadi 
jadi yang pertama si A akan membuat source code dia ngoding nah nanti si A ini akan mengcompile source code tersebut menggunakan sebuah compailer tergantung bahasa pemrogamannya apa pake compailer apa 
nah nanti setelah dicompilasi maka akan menghasilkan sebuah file baru dan file baru ini file hasil compilasinya akan diberikan kepada si B hasil compilasii ini biasanya dinamakan dengan file executable atau progam yang sudah bisa dieksekusi 

nah nantinya setelah si B menjalankan progamnya maka progamnya bisa dilihat oleh si B begitu nah si B tidak perlu memiliki compiler lagi dan si B itu tidak akan pernah meihat source code yang diberikan oleh si A jadi si B hannya menjalankan saja progam yang sudah diberi si A sourc codenya tetap ada disi A begitu 

sekarang kita lihat kalo menggunakan interpreter seprti apa 

INTERPRETER 
si A membuat sebuah source code nah tapi sekarnag si A tidak akan melakukan compile melaikan dia akan menduplikat source codenya (mengcopy) untuk diberikan kepada si B nah jadi source codenya yang diberikan kepada si B atau pada usernnya nah nanti si B ini harus menggunakan sebuah interpreter untuk menterjemahkan progamnya si A lalu dia akan menjalankan interpreternya sekaligus menjalankan progamnya jadi interpreter ini berjalan real time pada saat menterjemahkan source codenya baris per baris 

nah contoh yang sering kalian alami adalah ketika kalian membuka sebuah website nah hampir semua website yang ada sekarag itu ada source code javascript didalamnnya ketika websitenya kalian aksess sebetulnya ada sebuah interpreter yang terdapat diweb browser kalian yang gunanya untuk menterjemahkan javascript tadi jadi sebuah progam atau perintah perintah 

jadi itulah interpreter dan compiler tadi 

nah kira kira menurut kalian lebih baik mana? jadi masing masing memiliki kelebihan dan kekurangan 

kita lihat dibawah ini 

compiler 
kelebihannya 
1.siap untuk dijalankan 
2.lebih cepat (karena setelah dicompile itu teroptimasi kedalam bahasa mesin )
3.sourcode tidak terlihat 
source codenya akan lebih aman karena yang dilihat oleh user adalah hasil compilenya bukan source codenya jadi source codenya tetap ada diprogammernya 

kekurangannya 
1.tidak lintas plaform, maksutnya tidak lintas sistem operasi karena begitu dicompile hasil compilenya itu hanya akan compatible untuk sistem oparasi tertentu bahkan ketika sistem operasinya sama tapi cpunya berbeda atau prosesornya berbeda ada kemungkinan progamnya tidak jalan jadi harus dicompile ulang 
2.tidak fleksible, karena ketika ada kesalahan atau kalian ingin memodifikasi progamnya kalian harus melakukan compile ulang karena compile adalah langkah tambahan setelah kalian ngoding 
3.langkah tambahan 

interpreter
kelebihannya 
1.lintas platform, jadi tidak peduli sistem operasinya apa asalkan user punya interpreternya source codenya akan bisa dijalankan selama user punya web browsernya javascriptnya 
2.fleksible karena tidak perlu melakukan compile ulang jadi mudah untuk dimodifikasi dan mudah untuk diuji
3.mudah untuk diuji 

kekurangannya 
1.butuh interpreter, misalnya javascript tadi usernya butuh web browser kalo tidak punya web browser ya source codenya tidak bisa dijalankan 
2.lebih lambat, karena setiap kalia kita buka progamnya kita harus interpretasi dulu 
3.source code mudah diakses, karena yang diberikan source code jadi source codenya mudah diakses oleh user/orang lain 

jadi ini adalah kekurangan dan kelebihan dari compiler dan interpreter 


nah ternyata ada beberapa bahasa yang menggabungkan kedua ternik tersebut tekniknya disebut dengan teknik Hybrid atau bahasanya ada yang menyebut dengan intermedia language jadi dia menggabungkan kelebihanya compiler dan menggabungkan kelebihannya interpreter 

nah cara kerjannya kurang lebih seprti ini 
si A membuat source code saat dia sudah selesai dibuat dia melakuakn compile tapi setelah dicompile dia tidak menghasilkan file executable melainkan file yang namanya intermedia language/byte code jadi ini hasil compilenya belum executable 

nah intermedia language ini sudah cukup teroptimasi untuk bahasa mesin dan pada umumnya dia cross platform jadi pada umumnya dia bisa dijalankan disemua sistem operasi jadi ini kelebihan dari compiler dan interpreter sudah digabungkan nah setelah itu intermedia language ini diberikan kepada si B dan si B melakukan langkan terakhir untuk menjalankan progam itu dengan sesuatu yang dinamankan dengan JIT compilation(just in time compilation) 
nah itu yang dilakukan adalah dia melakukan compile sambil menjalankan progamnya sekaligus jadi begitu untuk pendekata hybrid 


nah sebatulnya secara teori semua bahasa pemrogaman itu bisa dijalankan menggunakan ketiga cara tadi tapi biasanya pada tiap tiap bahasa yang di gunakan hanya salah satunya saja 

nah berikut ini adalah beberapa contoh metode yagn digunakan pada bahasa yang sering digunakan 
jadi nanti kita lihat bahasa apa pakai metode apa 

contoh bahasa bahasa yang menggunakan compiler
-C
-C++
-objective C

lalu ada yang menggunakan interpreter 
-javascript 
-php

ada juga yang menggunakan metode hybrid 
-java
-vb.net
-python


nah setelah kalian memiliki pemahaman tadi bahwa bahasa apa menggunakan metode apa dan apa kelebihan dan kekurangannya 
sekarang pertanyannya adalah bahasa apa yang mau kalian pilih atau bagaimana sih memilih bahasa yang tepat? 

simplenya gini jadi jika kalian mau bahasa yang progamnya cepat maksutnya teroptimasi untuk bahasa mesin pada cpu tertntu gunakan bahasa yang memiliki compiler kalo mau fleksible bisa digunakan diberbagai sistem opertasi gunakan bahasa yang memiliki interpreter 

tapi pada akhirnya pemilihan bahasa itu kembali pada pertanyaan kalian mau bikin apa? 


web development
-php 
-c
-javascript
-c++
-java
-python
-ruby

game development
-c# 
-c 
-c++
-java
-python
-ruby

mobile app development
-c#
-c
-java

data analysis
-R
-python
-matlab

embeddeb sistem progamming 
-c
-c#
-python


kalo udah tau mau bikin apa nah dicari bahasa apa yang mendukung aplikasi atau progam yang ingin kalian bikin itu 

1. https://blog.udacity.com/2015/05/pick-your-first-programming-language.html


2. http://carlcheo.com/startcoding


3. https://www.codepolitan.com/bahasa-pemrograman-apa-cocok-dipelajari-pertama-kali

kalian bisa baca artikel bagus diatas mengenai pemilihan bahasa pemrogaman 

dan untuk seri ini seperti yang saya tulis pada judul materi yang nantinya akan kita pelajari adalah javascript

kenapa javascript? nah nanti kita akan bahas alasannya dimateri selanjutnya 

jadi sekian dulu untuk materi kali ini mudah mudahan kalian paham dan tidak bingung dengan penjelasannya 

sampai disini materinya kita bertemu lagi dimateri selanjutnya dan satu lagi jangan lupa titik koma ;*/