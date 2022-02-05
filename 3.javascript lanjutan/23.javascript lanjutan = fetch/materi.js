/*

oke temen temen kita sudah menggunakan fetch  yang sangat sederhana 
karena fetch itu kita bisa pakai untuk kasus yang jauh lebih komplex 


kalo kita lihat diresourcenya 
fetch adalah sebuah method API pada javascript untuk mengambil resource 
dari jaringan dan mengembalikan promise yang selesai (fullfilled)
ketika ada respon yang tersedia 


untuk lengkapnya fetch itu menulisnya begini

fetch(resource,init)

init ini adalah konfigurasi tambahan misalnya pada header parameternya

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "96184d6484msh0b821f95cd5a6b9p14a39djsn9dfcb068e476"
	}
})


dan init ini dalam bentuk json
jadi keynya adalah string bukan property


nah untuk resource itu bisa 2
bisa url atau bisa sebuah object request seperti promise

nah sedangkan init ini optional didalamnya kita bisa kasih konfigurasi tambahan saat kita mengirimkan requestnya 

beberapa konfigurasinya seperti ini

method
headers 
body
mode
cache 
referrer
referrerPolicy
integrity 
keepalive
signal

untuk lebih detilnya kalian bisa baca didocumentasinya 

nah sedangkan responnya sendiri apa yang dikembalikan oleh difetchnya 
berupa promise 

didalamnya ada duda ada property dan ada method


property yang bisa kita gunakan ada macam macam
headers 
ok
redirected
status
statusText
type
url
body

jadi kalo kalian mau mengechek seperti dijquery
kan dijquery itu bisa success atau error

menggunakan fetch juga bisa
kalian pakai response.ok itu kalau success 

success itu kalo kita representasikan menggunakan statu code itu dari 200-299

kalo itu terjadi apa yang harus dilakukan 

atau kalo statusnya redirected 
jadi kalian bisa pakai kondisi

if(response.redirected) kalian mau melakukan apa

atau kalian mau butuh angka statusnya 
jadi if response.status == 200 kalian lakukan apa 

atau butuh textnya 
jadi status itu ada textnya 
kalo 200 itu statustextnya oke

jadi kallo statusTextnya oke kalian lakukan apa



dan ada juga methodnya 
untuk methodnya kita sudah coba 1 ya yaitu json()

clone()
error()
redirect()
blob()
formatData()
json()
text()


jadi kalo kita dapat respon lalu responsenya kita masukkan kedalam method json() nah nanti itu bentuknya promise yang kalo resolve baru jadi object 


atau kalian pengenya bentuknya blob atau binary large object
misalkan kalian mengupload file 

kalo pakai fetch kita bisa tangani filenya menjadi blob 
rata rata dari method ini mengembalikan promise juga 

jadi itulah kenapa kita harus paham dulu promise sebelum kita belajar fetch

mungkin nanti kedepannya kalo kita ketemu 
kasus lagi yang lebih komplex misalnya  kita mengirimkan datanya menggunakan post nanti kita akan pelajari lebih detil lagi mengenai fetch


tapi mudah mudahan sampai disini kalian paham ya 
jadi mungkin itu saja untuk materi kali ini 

kita akan ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ; 




*/