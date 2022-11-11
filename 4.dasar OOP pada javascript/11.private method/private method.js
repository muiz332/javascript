// private method

/*

nah sekarang kita akan membahas mengenai private method
dengan demikian akses modifier private atau lingkup akses private juga bisa 
dilakukan didalam method

caranya sama denga private class field, kita tinggal menambahkan tanda # 
didepan nama method yang kita buat

maka secara otomatis method tersebut akan berubah menjadi private method
kita coba


*/

class Person{
    say(name){
        if(name){
            return this.#sayWithName(name)
        }else{
            return this.#sayWithoutName()
        }
    }
    #sayWithoutName(){
        return 'hallo'
    }
    #sayWithName(name){
        return name
    }
}

const muiz = new Person()

console.log(muiz.say()) // halo

/*

jadi kita hanya bisa mengakses  method sayWithoutName dan sayWithName hanya
didalam classnya saja

jika kita akses maka dia akan error
jadi seperti itu cara menggunakan private metod
mudah mudahan kalian paham







-----------------------------------

source programmer zaman now mysql

-----------------



*/
