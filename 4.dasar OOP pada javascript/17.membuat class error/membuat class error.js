// membuat class error


/*



nah sekarang kita akan belajar bagaiman cara membuat class error secara manual
walaupun javascript sudah memiliki standart class error 

namun alangkah baiknya kita membedakan tiap error dari sebuah object
jadi jangan dipukul rata semua pakai class error

untuk membuat class error sendiri cukup menambahkan extends dari class Error
dan jangan lupa tambahkan parameter message agar kita bisa menambahkan 
pesan errornya dan dikirim parent classnya yaitu class Error


misalkan kita ingin membuat class dengan nama validation error
yang mewarisi properti dan method dari class Error


*/

class validationError extends Error{
    constructor(message,field){
        super(message)
        this.field = field   
    }
}


/*

jadi messagenya saya kiirimke ke class Error lalu fieldnya itu adalah
keterangan errornya dimana dan apa

jadi cukup seperti ini saja kalo kalian bikin class error
jadi class error itu dibuat biasanya untuk validation error

atau bikin database error, ya kalian bikin class yang namanya
database error

api error dan lain lain


jadi kalian harus membuat class error yang berbeda beda sesuai
dengan jenis class errornya

nah sekarang kita gunakan


*/


class MathUtl{
    static sum = function(...numbers){
        if(numbers.length === 0){

            throw new validationError('parameter harus lebih dari 0','numbers')
        }
        let result = 0
        for(let i = 0; i < numbers.length; i++){
            result += numbers[i]
        }
        return result
    }
}



/*

nah salah satu kegunaan kita membuat class error, kita bisa menyisipkan 
informasi tambahan

contohnya kalian ingin menambahkan field apa yang error
kalian bisa buat properti field yang isinya apa yang error

contohnya yang error pada bagian numbersnya
tinggal tambahkan numbers diparameter keduanya

kita coba


*/

try{
    console.log(MathUtl.sum())
}catch(err){
    if(err instanceof validationError){
        console.log(`terjadi error pada bagian ${err.field} dengan error ${err.message}`)
    }else{
        console.log(err.message)
    }
} 

/*

nah disini kalian bisa check kalo errornya itu berasal dari class ValidationError
maka tampilkan properti field dan messagenya

jika tidak cukup tampilkan messagenya saja

jadi seperti ini kalo kalian membuat class error secara manual
dan ini merupakan rekomendasinya

jadi seperti itu cara membuat class error secara manual
pada javascript

mudah mudahan kalian paham











-----------------------------------

source programmer zaman now javascript OOP

-----------------







*/