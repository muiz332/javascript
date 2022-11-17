// static class method

/*


kali ini kita akan membahas mengenai static class method
nah kita bisa menggunakan static untuk method

sama seperti field jika kita menambahkan static dimethod maka method 
tersebut menjadi milik class bukan milik object yang dibuat, dan juga
bukan milik prototype lagi

dan untuk mengaksesnya sama seperti static class fieldnya
nama classnya lalu diikuti dengan titik nama methodnya

kita coba


*/


class MathUtl{
    static sum = function(...numbers){
        let result = 0
        for(let i = 0; i < numbers.length; i++){
            result += numbers[i]
        }
        return result
    }
}


const sum = MathUtl.sum(1,2,3,4,5)
console.log(sum) // 15

/*



jadi seperti itu ya cara penggunaan dari static class method
mudah mudahan kalian paham











-----------------------------------

source programmer zaman now javascript OOP

-----------------



*/