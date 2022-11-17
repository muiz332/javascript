// private class field


/*

nah sekarang kita akan membahas mengenai private class field

secara default saat kita menambahkan field, maka field tersebut dapat kita akses dari manapun
didalam class maupun diluar class

jika kita ingin membuat field secara private artinya hanya bisa diakses didalam class
kita bisa menggunakan tanda # sebelum nama fieldnya

kita coba

*/

class Counter{
    #counter = 0

    increment(){
        this.#counter++
    }
    decrement(){
        this.#counter--
    }
    get(){
        console.log(this.#counter)
    }
}

const counter = new Counter()
// console.log(counter.#counter)

/*

jadi kalo kita akses #counter maka akan ada error
karena dia tidak bisa diakses diluar class

dan kita coba jalankan method incrementnya sebanyak 5 kali

*/

counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()

counter.get() // 5
console.log(counter)

/*

jika kita ingin menampilkannya kita bisa tampilkan didalam method classnya
kalo kita jalankan maka hasil dari counternya menjadi 5

jadi itu cara kita membatasi akses dari property, kita bisa gunakan private class field
mudah mudahan kalian paham







-----------------------------------

source programmer zaman now javascript OOP

-----------------




*/