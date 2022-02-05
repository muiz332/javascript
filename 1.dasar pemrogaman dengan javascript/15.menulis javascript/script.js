/*menulis javascript 

dimateri materi sebelumnya kita sudah mencoba menuliskan sintax javascipt menggunakan console yang ada pada web browser 

nah dimateri kali ini kita akan cari tahu bagaimana menuliskan javascript didalam document website kita 

sebetulnya simple saja untuk menuliskan sintax javascript pada dokument web kita yang kita butuhkan adalah sebuah tag yang namanya script 

sekarang bagaimana kita menuliskan tag script ini?

kita coba lihat contoh berikut ini ya
pergi kehalaman html


*/

var  x = 10;
console.log('hello world');
console.log("isi dari variable x adalah " + x);

/* misalkan saya lupa menambahkan tiik diconsolenya ini kan jadinya salah ya sintaxnya ini kalo saya save terus saya jalankan 
nah maka dia akan menampilka eror seperti ini jangan dulu panik kalo misalkan kalian melihat eror kalo tidak tahu erornya apa minimal kalian lihat disebelah kanannya console ini ada tulisan script.js:24
*/
console.log('contoh');

/*ini artinya erornya ada difile script.js dibaris ke 24 
jadi yang perlu kalian lakukan sekarang adalah melihat filenya script.js lalu cari baris ke 24 ini tinggal dicari saja kira kira yang salahnya yang mana itu 

kalo misalkan kalian lihat erornya disini Uncaught ReferenceError: consolelog is not defined 

nah katanya tuh javascript tidak kenal yang namanya consolelog(); ini apa ya karena yang dia kenali adalah console.log();

nah jadi sekali lagi ini adalah fungsi dijavascript untuk menuliskan atau membuat log kedalam console 
untuk fungsinya sediri atau function ini akan saya jelaskan lebih detil nanti dimateri yang akan datang 

oke jadai itu ya sekilah mengenai penulisan javascript didocument html kita mulai materi yang akan datang yang kita lakukan adalah menuliskan javascript eksternal difile yang terpisah 

oke jadi sekian dulu materi kali ini mudah mudahan kalian suka 

kita ketemu lagi dimateri yang akan datang dan satu lagi jangan lupa titik koma ; */

console.log("saya" + x);