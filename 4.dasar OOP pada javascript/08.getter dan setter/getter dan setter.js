// getter dan setter



/*


sekarang kita akan membahas mengenai getter dan setter

class juga mendukung pembuatan getter dan setter 
seperti didalam object kita bisa melakukan implementasi getter dan setter didalam class

tapi perlu diingat getter dan setter ini akan berada diprototype bukan diobject yang jadi
jadi method dan juga getter dan setter akan berada didalam prototype

kita coba



*/


class Person{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    get fullName(){
        return this.firstName + this.lastName
    }
    set fullName(name){
        const separater = name.split(' ')
        this.firstName = separater[0]
        this.lastName = separater[1]
    }
}



const muiz = new Person('muiz','zuddin')
console.log(muiz)

/*

nah kalo kalian lihat diconsolenya, kita tidak melihat method fullName, 
kita bisa melihatnya didalam prototypenya

ada get fullName
dan set fullName


nah untuk get itu biasanya digunakan untuk mengambil semua property yang ada didalam
object

untuk set digunakan untuk mengubah property yang ada didalam object

misalnya kita ingin mengambil fullNamenya

*/

console.log(muiz.fullName) // muizzuddin


// misalkan kita ingin mengubah fullNamenya

muiz.fullName = 'hasan husain'

// dan kita check 

console.log(muiz.fullName) // hasanhusain
console.log(muiz)

/*

nah maka fullNamenya akan tampil hasanhusain
jadi ini lah implementasi getter dan setter

mudah mudahan kalian paham









-----------------------------------

source programmer zaman now mysql

-----------------




*/