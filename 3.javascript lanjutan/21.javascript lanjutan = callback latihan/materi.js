/*

nah kali ini kita akan menggunakan OMDBapi dan postman atau insomnia

dua aplikasi ini digunakan untuk malakukan request terhadap api
jadi ini untuk mengetes saja apakah koneksi kita keAPI berhasil atau tidak 

jadi silahkan buat api keynya dulu ya diOMDB

nanti kalo sudah kita bisa akses menggunakan link yang telah disediakan
http://www.omdbapi.com/?apikey=[yourkey]&


ganti saja youkeynya dengan key yang telah diberikan diemail
link tersebut kita copykan ke postman


nah didalam postman nya keynya kita tuliskan s
keynya kalian cari mau film apa

kemudian kita tekan send
nah kalo ada berarti kalian sudah terkoneksi dengan APInya


itu buat nyobain saja 
sekarang kita masuk kedalam codingannya

nah kita buatnya menggunakan bosstrap saja ya
jangan lupa jquerynya diganti karena defaultnya adalah slim 

kalo slim itu tidak memiliki ajax 
kita harus ganti minifide atau uncompress


nah setiap kalian request itu jatahnya berkurang 1 ya dari 1000

nah kita kan cari dengan key s ya 
s itu searc 

kalo s datanya akan tampil sedikit 
kalo kalian ingin datanya tampil secara detil maka kalian tuliskan i 
dan valuenya itu imdbID



*/



/*

nah jadi kita sudah menerapkan banyak materinya ya 
kita sudah banyak menggunakan callback

dan kalo lama kelamaan kita menggunakan ini
kita punya sesuatu yang disebut dengan callback hell

terlalu banyak callback
ciri cirinya adalah codenya semakin menjorok kedalam

jadi melakukan ini  sebetulnya tidak salah
tapi nanti ada cara yang lebih efiktif lagi 

dengan menggantikan fungsi jquery dengan fungsi bawaan javascript yaitu fetch

menggunakan jquery tidak salah tapi ketika kita menggunakan jquery perlu diingat
bahwa kita mengguanakn library external maka akan ada resource yang digunakan


jadi performancenya akan lebih lambat dibandingkan kita menggunakan 
bawaan dari javascript 

jadi kalo kita bisa melakukannya menggunakan javascript kenapa tidak
untuk menggantikan ajax kita gunakan fetch 

nah tapi sebelum kita menggunakan fetch kita harus paham 
apa itu promise 

dan itu akan kita pelajari dimateri berikutnya

nah untuk menghindari callback hell solusinya adalah menggunakan promise

ya jadi itu temen temen 
aplikasi sederhana kita walaupun simple tetapi cukup keren  ya

dan nanti aplikasi itu akan kita perbaiki lagi menggunakan apa
yang kita pelajari dimateri berikutnya

jadi sampai disini dulu materinya 
kita akan ketemu lagi dimateri berikutnya

dan satu lagi jangan lupa titik koma ;


*/