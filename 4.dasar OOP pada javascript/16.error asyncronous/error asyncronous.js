// error asyncronous


/*


sekarang kita akan membahas mengenai error secara asyncronous atau non blocking ya
saat terjadi error ada kalanya kita tidak ingin program kita berhenti 

nah didalam javascript itu kita bisa menangkap jika terjadinya error
kita bisa menggunakan yang namanya try catch statement untuk menangkap error


pada block try kita akan mengakses kode program yang kemungkinan akan menyebabkan 
error dan jika terjadi error, maka block try ini akan berhenti dan secara otomatis masuk
ke block catch

jadi nanti kita akan menangkap error, dan kita bisa tangani ketika terjadi 
error dan program kita tidak akan berhenti

tapi jika tidak ada error maka block catch itu tidak akan pernah 
dijalankan


kita coba

*/



// - Try dan catch

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


try{
    const sum = MathUtl.sum()
    console.log('berhenti')

}catch(err){
    console.log(err.message)
}


console.log('berjalan')

/*

nah didalam block try ini kalian masukkan code program yang sekiranya 
dapat terjadi error

seperti query kedatabase atau error yang kalian buat sendiri tapi 
ketika error code programnya tidak berhenti


ketika terjadi error maka errornya akan ditangkap oleh parameter err
lalu kita bisa tampilkan pesan errornya dengan cara

err.message

atau kalian juga bisa melakukan sesuatu jika terjadi error
ketika terjadi error 

console.log berhenti tidak akan berjalan 
dan langsung pindah ke block catch

kita coba jalankan 
maka yang tampil adalah argument tidak boleh kosong

tapi console.log berjalan akan dieksekusi
jadi tidak behenti code program kita

yang berhenti hanya pada block try saja


*/


try{
    const sum = MathUtl.sum(1,2,3)
    console.log('try berjalan')

}catch(err){
    console.log(err.message)
}


console.log('berjalan')

/*

jika tidak terjadi error maka akan menjalankan code
yang ada didalam try

jadi ketika tidak ada error maka block catch ini tidak akan dieksekusi
catch ini akan dieksekusi jika terjadi error saja


jadi ketika kalian throw errornya didalam try catch
maka code program setelah try catch akan tetap dijalankan


*/


try{

    const angka = 0
    if(!angka){
        throw new Error('harus lebih besar 0')
    }
    console.log(angka)
}catch(err){
    console.log(err.message)
}


console.log('berjalan\n\n')


/*

maka akan terjadi error tapi code setelah try dan catch akan tetap
dijalankan






- finally


kadang kita ingin melakukan sesuatu entah itu terjadi error ataupun tidak
dalam block try dan catch kita bisa menambahkan block finally

jadi block finally ini akan selalu dieksekusi setelah try dan catch selesai
entah itu terjadi error atau pun tidak 

nah misalkan kalian ingin mengeksekusi code program yang berhubungun 
dengan block try 

jika misalkan didalam block try itu kita melakukan connection kedatabase
maka block finally itu isinya menutup connection kedatabse

kita coba

*/



try{
    console.log(MathUtl.sum())
    console.log('try berjalan')
}catch(err){
    console.log(err.message)
}finally{
    console.log('code program berhenti')
}


/*

maka kalo kita jalankan entah itu error atau tidak maka block
finally ini akan tetap dijalankan







- try dan finally

nah kita juga bisa melakukan try finally tapi ini hanya digunakan dalam kasus
tertentu saja


kita coba


*/


class Counter{
    #counter = 1

    next(){
        try{
            return this.#counter
        }finally{
            this.#counter++
        }
    }
}


const counter = new Counter()

console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())


/*

nah misalkan kalo kalian ingin mengembalikkan data dan ingin mengubahnya sekaligus
maka kita bisa menggunakan try dan finally

ketika kita mengembalikan data maka setelah return code programnya tidak akan 
dijalankan

maka dari itu kita butuh finally
karena finally ini ada error atau tidak tetap akan dijalankan
meskipun kita return


kalo kita jalankan maka kita bisa melihat hasilnya 1 - 5



jadi itu mengenai error handling asyncronous ya
mudah mudahan kalian paham












-----------------------------------

source programmer zaman now javascript OOP

-----------------






*/