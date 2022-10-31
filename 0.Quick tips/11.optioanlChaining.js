// optional chaining


/*

misalkan kalian ingin mengecheck property yang ada didalam object
jadi misalkan kita punya object seperti ini


*/

const mahasiswa = {
    nama : "muiz",
    medsos : {
        ig : 'ig'
    }
}


if(mahasiswa.medsos && mahasiswa.medsos.ig){
    console.log('oke')
}

/*

jadi kita ingin mengecheck sebuah properti memiliki nilai atau tidak
dan didalamnya ada properti ig dan ingin mengecheck apakah ada nilainya
atau tidak maka kita bisa mengechecknya seperti itu

ada cara yang lebih baik yaitu dengan optional chaingin 
caranya

*/

const siswa = {
    nama : "muiz",
    medsos : {
        ig : 'ig'
    }
}

if(mahasiswa?.medsos?.ig){
    console.log('ke')
}

/*

nah jadi kita cukup menggunakan tanda tanya untuk menanyakan apakah properti medsosnya 
itu ada nilainya atau tidak dan properti ig itu ada nilanya atau tidak

jadi tidak perlu menggunakan operator and lagi ya untuk mengecheck nested 
property dari sebuah object

*/