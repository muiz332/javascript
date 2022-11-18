// Error

/*



dimateri ini kita akan belajar mengenai class yang namanya Error pada javascript
saat membuat aplikasi sudah tentu kita tidak akan terhindar dari yang namanya
error 

didalam javascript error merupakan sesuatu yang sudah standart
banyak sekali class error didalam javascript

jadi kalo misakan error didalam javascript itu sudah ada representasi classnya
jadi kita akan dengan mudah untuk menggunakan Object Oriented Programming 
didalam javascript 

karena semuanya sekarang sudah ada implementasi class dan juga objectnya
namun semua class error didalam javascript itu selalu berujung dari class
yang namanya Error 

jadi seperti supert parentnya dari semua class error didalam javascript
artinya class Error adalah super class untuk semua jenis error didalam 
javascript

contoh class error yang terdapat didalam javascript adalah SyntaxError, TypeError, dan lain lain
semuanya kalian bisa baca didocumentasinya


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

jadi semua class error pada javascript itu extend ke class yang namanya Error





nah saat kita membuat instance object dari class error, tidak akan langsung terjadi error
jadi kita perlu memberitahu dulu nih kepada si javascriptnya

setelah kita membuat object dari class Error kita harus mentrigger agar instance object 
error yang kita buat itu terjadi 

nah cara kita perlu melempar error atau throw error
untuk mentrigger atau melempar suatu error, kita bisa menggunakan kata kunci throw 
diikuti dengan object yang kita buat dari class Error

jadi error itu terjadi maka secara otomatis program kita akan berhenti 
dan tidak akan menjalankan code dibawahnya lagi

dan kita juga bisa melihat message error yang kita buat didalam console


nah kita akan coba menggunakan class Math util dari materi sebelumnya 
untuk mengimplementasikan error


jadi kasusnya jika kita tidak menginputkan argument pada saat 
method sum itu dipanggil maka kita akan kasih error



*/


class MathUtl{
    static sum = function(...numbers){
        if(numbers.length === 0){
            // const error = new Error('argument tidak boleh kosong')
            // throw new error

            // atau

            throw new Error('argumen tidak boleh kosong')
        }
        let result = 0
        for(let i = 0; i < numbers.length; i++){
            result += numbers[i]
        }
        return result
    }
}

const sum = MathUtl.sum()
console.log('berhenti')

const sum1 = MathUtl.sum(1,2,3,4,5)
console.log(sum1) // 15



/*

nah jika kita lihat, ketika error itu terjadi maka
program yang berada dibawahnya terhenti 

jadi console.log berhenti tidak akan dijalankan

konsepnya mirip seperti return pada function
bedanya kalo throw untuk mentrigger terjadinya error

jadi jangan bikin error manual pakai if dan else 
tapi gunakanlah fitur error punyanya javascript

jadi seperti itu ya error didalam javascript
mudah mudahan kalian paham








-----------------------------------

source programmer zaman now javascript OOP

-----------------



*/