/* javascript lanjutan: asynchronous javascript

kali ini kita masuk ke topik menurut saya sangat penting 
kita akan bahas mengenai asynchronous programming khususnya pada javascript

nah tujuannya untuk belajar asynchronous ini adalah agar kegepannya kita tidak bingung 
ketika dihadapkan dengan teknik teknik prorgamming asynchronous pada javascript 
seperti callback , promise, ajax, async dan await

jadi sebelum kita masuk membahas mengenai topik topik ini 
ada baiknya kita pahami dulu betul betul mengenai konsep asynchronous 

nah sekarang kita balik lagi pada diri kita sendiri 
apa sih javascaript itu ya ?

kalo kalian baru belajar mengenai javascript untuk penjelasannya seperti ini 

javascript is high programming language, scripting, untype and interpreter language

atau penjelasan lainnya seperti ini 

javascript adalah bahasa pemrorgaman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser

nah penjelasan itu untuk orang yang baru belajar mengenai javascript

tapi karena kita sudah masuk mengenai javascript lanjutan pemahaman javascript itu bisa jadi lebih komplex ya 

jadi definisi javascript sekarang bisa seperti ini 

javascript is a single threaded, non-blocking, asynchronous and concurrent language

nah apa ini maksutnya 


untuk lebih jelasnya kalian bisa lihat dichannel web propramming unpas dimateri javascript lanjutan: asynchronous javascript










*/



console.log('satu')

window.setTimeout(() => {
    console.log('dua')
},0)

console.log('tiga')