// public class field


/*


sekarang kita akan belajar mengenai public class field

biasanya saat kita ingin menambahkan field atau property dan value
kita biasanya menambahkan dicontruktor

nah tapi ada fitur baru dari proposal diecma script untuk membuat fitur public
class field yang dibuat diluar contructor selevel dengan penempatan method


kalian bisa lihat disi
https://github.com/tc39/proposal-class-fields


nah saat ini public class field sudah didukung oleh banyak browser ya
kalian bisa check browser apa saja yang telah mendukung fitur ini

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields#browser_compatibility


nah alasan kenapa dibuatkan fitur public class field ini karena properti yang dibuat didalam class 
itu sifatnya adalah public jadi biasa diakses dimanapun

nah karena didalam class itu semuanya public jadi terciptalah fitur public class field
dan private class field


nah sekarang kita bahas dulu mengenai public class field


jadi public itu artinya bisa diakases diluar class dan private hanya bisa diakses didalam class

nah untuk membuat public class field kita bisa langsung membuat nama fieldnya dengan valuenya
jika ingin menambahkan valuenya, jika tidak ada valuenya maka hasilnya adalah undefined
dan itu selevel dengan method


kita coba


*/

// class Customer{
//     firstName
//     lastName
//     balance = 0
// }


// const muiz = new Customer()
// console.log(muiz)



/*

jika kita lihat hasilnya akan menjadi seperti ini

{
    firstName: undefined, 
    lastName: undefined, 
    balance: 0
}

maka akan secara default kalo tidak kita isi valuenya akan undefined
sementara yang kita isi nilainya seperti property belance akan menjadi 0

ketika kalian membuatnya seperti ini maka properti yang ada didalam class
tersebut menjadi public class field

jadi dapat kita akses diluar class
contoh

*/

// console.log(muiz.balance) // 0

/*

kita bisa mengakses properti balance pada object muiz
dan itu diluar classnya

nah tapikan kalo misalkan kita mengisi valuenya seperti property balance
artinya semua object yang kita buat dari class customer, balancenya akan 0

nah bagaimana kalo misalkan user mau mengisi belancenya?
kita bisa pakai constructor untuk mengambil inputan dari user

dimana kita bisa masukkan nilainya ke field balance dari parameter contructornya
dimana parameter itu akan diisi saat classnya dipanggil

kita coba

*/

class Customer{
    firstName;
    lastName;
    balance;

    constructor(firstName,lastName,balance){
        this.firstName = firstName
        this.lastName = lastName
        this.balance = balance
    }
}


const muiz = new Customer('muiz','zuddin',5000)
console.log(muiz.firstName)


/*

jadi kita gunakan constructor untuk menginputkan data didalam class
secara dynamic

jadi ini adalah fitur public class field yang ada didalam javascript
mudah mudahan kalian paham









-----------------------------------

source programmer zaman now mysql

-----------------



*/