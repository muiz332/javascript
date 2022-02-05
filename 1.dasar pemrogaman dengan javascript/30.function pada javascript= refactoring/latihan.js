/* function pada javascript: refactoring 

dan dimateri kali ini kita akan membahas mengenai bagaimana cara membuat penulisan kode progam kita menjadi lebih efisien 

penulisan code menjadi lebih efisien merupakan salah batu bagian dari sebuah konsep yang dinamakan dengan refactoring 

apa itu refactoring?
refactoring adalah sebuah proses mengubah code agar menjadi lebih 'baik' tanpa mengubah fungsionalitasnya 

nah kenapa kata baik ini ditulis didalam kutip?
karena baik ini relatif ya bisa beragam maknanya nanti kita lihat 

sekarang kenapa kita harus melakukan refactoring?
nah ada banyak alasannya 

1.redability

        yang pertama menganai redability atau keterbacaan ya atau kemudahan dalam membaca code progam 

        karena progam yang baik adalah progam tidak hanya mudah dibaca oleh pembuatnya tapi juga oleh orang lain gitu
        karena nantinya membuat progam itu pasti dilakukan secara colaboratif dalam sebuah team 

        jadi kita harus pastikan code yang kita tulis itu mudah dibaca dan dipahami juga oleh orang lain 

2.DRY ( don't repeat yourself )

        nah yang kedua adalah DRY nah hal ini kaitannya dengan duplikasi code ya bisa penggunaan variable yang berlebihan, efisiensi penggunaan function, method atau yang lainnya 
    
3.testability

        atau penulisan code agar mudah saat nantinya dilakukan pengujian 

4.performance

        yang keempat adalah performance yaitu bagaimana kita menulis code yang dapat meningkatkan performance dari code progamnya 

        nah contoh sederhananya adalah ketika kalian menggunakan looping dengan baik gitu ya 
        ya atau kalian memilih type data yang tepat untuk sebuah nilai

        atau pengalokasian memory yang efektif misalnya dalam bahasa pemrogaman tertentu 

5.maintainability

        yaitu bagaimana nantinya code progam kita dapat dengan mudah dikelola atau dikembangkan 



jadi itu adalah beberapa manfaat dari teknik refactoring 

nah topik mengenai refactoring ini sebenarnya cukup luas dan mendalam bahkan secara akademik ada beberapa kampus yang menjadikan ini sebagai mata kuliah tersendiri 

nah dimateri kali ini kita tidak akan membahas ini semua ya

yang akan kita bahas hanya hal yang sangat sederhana saja yaitu bagaimana membuat code progam kita sedikit lebih efisien 

ya cerita yang tadi itu hanya wawasan saja 

nah yang sekarang akan kita lakukan adalah refactoring sederhana pada progam yang sudah kita buat pada materi sebelum ini

kalian masih inget kan pada saat membuat function penjumlahan volume dua buah kubus 

nah jadi ini function yang sudah pernah kita buat ya

*/

// function jumlahVolumeDuaKubus(a, b){
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;

// }

// alert(jumlahVolumeDuaKubus(8, 3));

/* jadi function ini melakukan hal yang sangat sederhana yaitu menghitung volume dari dua buah kubus lalu menjulahkannya 

dan setelah kita coba ini sebetulnya tidak ada masalah ini sudah jalan dengan normal 

nah ini kalian lihat ya setelah kita buat functionnya lalu kita panggil dibawahnya untuk menampilkan jumlah volume dari dua kubus yang satu memiliki sisinya 8 dan yang satu memiliki sisinya 3 

dan ini kalo kita lihat hasilnya maka akan menampilkan nilai penjumlahan dua volume ya 539

nah sebetulnya code progam ini tidak ada masalah sudah berjalan dengan normal 

tetapi kali kita liat source codenya 
nah sebenarnya ini bisa kita tulis jauh lebih efisien lagi 

kenapa?
karena disini kita terlalu banyak membuat variable 

coba kalian lihat dulu deh kira kira ada gak variable yang sebenarnya tidak kita butuhkan?
kalo ada kira kira yang mana?


nah mungkin yang variable volumeA dan volumeB ya
coba kita lihat pada saat kita menerima nilai dari parameter itu kita melakukan perkalian ya 

inikan menghitung volume dulu dari kubus A a * a * a lalu kita tampung kedalam variable volumeA 

nah gimana kalo gini 
a * a * a ini kita langsung saja masukkan ke dalam variable total
bisa sajakan?

jadi sekarang kita tidak butuh nih variable volumeA 
bener gak?

*/

// function jumlahVolumeDuaKubus(a, b){
//     var volumeB;
//     var total;

//     volumeB = b * b * b;
//     total = a * a * a + volumeB;

//     return total;

// }

// alert(jumlahVolumeDuaKubus(8, 3));


/* bener gak ya dengan itu kita menghemat satu buah variable 

ya kan kalian inget begitu kita membuat variable ya var volumeA itu artinya kita memesan tempat didalam memori kita 
nah dengan menghilangkan volumeA berarti kita sudah melakukan penghematan 

nah kalo gitu berarti kita juga tidak butuh volume b ya 
nah ini kita bisa hilangkan juga 




*/

// function jumlahVolumeDuaKubus(a, b){
//     var total;
//     total = a * a * a + b * b * b;

//     return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));

/* sehingga kita tidak butuh lagi variable volumeB 

nah ini kalian tidak usah khawatir karena pasti kita akan mengerjakan yang perkalaian dulu ya 

sebetulnya kalian tidak usah menambahkan kurung juga tidak apa apa 

nah begitu jadi kita sudah menghemat dua buah variable 

nah sebetulnya kalo kalian lihat lagi bahka kita sebetulnya tidak butuh variable total

karena kita bisa saja memasukkan perkalian tersebut kedalam returnnya 

nah lihat ya kalo variable total kita hapus berarti function kita hanya satu baris


*/

function jumlahVolumeDuaKubus(a, b){

    return (a * a * a) + (b * b * b);
}

alert(jumlahVolumeDuaKubus(8, 3));

/* jadi lebih efisien dari pada kita membuat tiga buah variable yang sebetulnya fungsinya adalah tempat penyimpanan sementara

dan ini kalo kita jalankan 
ya hasilnya masih tetap sama 539


nah jadi itu maksutnya refactoring sederhana yang bisa kalian lakukan

jadi tipsnya adalah jika kalian sudah selesai membuat sebuah progam ketika kalian masih punya waktu coba telusuri code progamnya kira kira ada gak sesuatu yang bisa kalian buat lebih baik lagi

misalnya simplenya seperti tadi ya
ada gak sebetulnya variable yang kita tidak butuhkan?

atau ketika membuat pengulangan 
pengulangannya bisa dibuat lebih efektif atau tidak 

atau juga kalian bisa perbaiki hal hal yang lainnya 

oke jadi mungkin itu ya materi singkat mengenai refactoring ini 

ya sekali lagi sebenarnya topi mengenai refactoring ini lebih luas lagi 

kita hanya mencoba sedikit saja bagaimana teknik bagaimana membuat code kita lebih efisien lagi 

oke jadi mungkin itu ya untuk materi kali ini

kita bertemu lagi dimateri yang akan datang 

dan satu lagi jangan lupa titik koma ; */
