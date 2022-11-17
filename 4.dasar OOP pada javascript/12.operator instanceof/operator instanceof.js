// operator intanceof


/*

kadang ada kasus yang mengharuskan untuk mengecheck apakah sebuah object berasal dari 
class tertentu atau bukan

untuk operator intanceof akan menghasilkan nilai boolean,true jika sebuah object dibuat dari class tertentu
dan false jika object tidak terbuat dari class tertentu

nah seperti apa cara pengguaannya kita coba


nah misalkan kita bikin class Employee dan Manager

*/

class Employee{

}

class Manager{

}


const muiz = new Employee()
const budi = new Manager()


console.info(muiz instanceof Employee) // true
console.info(muiz instanceof Manager) // false
console.info(budi instanceof Employee) // false
console.info(budi instanceof Manager) // true

/*

jadi seperti ini ya operator instanceof, kalian bisa mengecheck apakah sebuah object
itu dibuat dari kerangka class tertentu



nah jika didalam class tertentu memiliki inheritance dari class lain
maka operator instanceof ini juga support inheritance class

kita coba


*/

class Programmer{

}

class Person extends Programmer{

}

const muiz1 = new Person()

console.info(muiz1 instanceof Programmer) // true


/*

maka kita bisa mengecheck apakah sebuah object itu berasal dari class yang ada diextedsnya atau
class yang mewarisi peroprty dan methodnya


jadi seperti itu mengenai operator instance 
mudah mudahan kalian paham










-----------------------------------

source programmer zaman now javascript OOP

-----------------








*/