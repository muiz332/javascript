/* javascript lanjutan: mengulang object


dimateri ini kita akan mengulang atau mengingat ingat dulu materi materi sebelumnya 

kali ini kita akan coba membuat object dengan berbegai cara 

kalo kalian masih inget, dimateri sebelumnya kita sudah pernah membuat object dengan 3 cara
yaitu 
1.object literal
2.function declaration
3.constructor

nah sebenarnya ada cara lain yaitu menggunakan object.create yang belum pernah kita coba 

misalnya saya mau buat object yang isinya nama lalu didalamnya ada energi 

lalu saya buat mehtod untuk menambah energinya 

dan masing masing object saya buat dengan cara yang berbeda beda
*/

//1.object literal
    // yang pertama membuat object dengan object literal
    //contoh
// let identitas = {
//     nama : 'muiz',
//     energi : 10,
//     tambahEnergi : function(energi){
//         this.energi += energi
//         return `nama ${this.nama} menambahkan energi sebanyak ${energi}`
//     }
// }

/* nah disini ada yang baru yaitu saya menggunakan ${}
tanda dolar lalu kurung kurawal

nah didalam javacript untuk menulis string itu bisa menggunakan kutip satu kutip dua atau ada yang baru kalian bisa pakai backtik (kutip yang berada sebelah tombol angka 1 `` )

ini namanya template string 
nah dengan menggunakan template string kalian bisa menulis seperti contoh diatas 

atau lebih jelasnya seperti ini

*/
// let nama = 'muiz'
// let umur = 16
// console.log(`halo nama saya ${nama} umur saya ${umur}`);

/* jadi bisa langsung dimasukkan nilainya tanpa menggunakan operator concate

kalian tidak perlu keluar dari stringnya lalu ditambah atau menggunakan tanda + untuk menggabungkan lebih dari satu string

kalian cukup tulis tanda dolar lalu kurung kurawal buka dan kurung kurawal tutup 
${}
lalu didalamnya kalian kasih nilai yang mau digabungkan 



*/





//2.function declaration
     // yang kedua membuat object dengan function declaration
     //contoh

// function identitas(nama, energi){
//     let i = {}
//     i.nama = nama;
//     i.energi = energi;
//     i.tambahEnergi = function(En){
//         this.energi += En
//         return `nama ${this.nama} menambahkan energi sebanyak ${En}`
//     }

//     return i
// }

// let muiz = identitas('muiz', 10)


// 3.constructor function (keyword new)
      //  yang ketiga membuat object dengan constructor function
      //contoh
// function Identitas(nama, energi){
//     this.nama = nama
//     this.energi = energi
//     this.tambahEnergi = function(En){
//         this.energi += En
//         return `nama ${this.nama} menambahkan energi sebanyak ${En}`
//     }
// }
// let husain = new Identitas('husain', 20);


/* 

ketiga cara ini harus kalian pahami dulu sebelum melanjutnya kemateri yang lebih dalam lagi
nah dimateri selanjutnya kita akan bahas mengenai Object.creater() ini

begitu contoh contoh bagaimana kita membuat object dengan berbagai cara
mudah mudahan kalian tambah inget lagi ya

sampai disini materi kali ini 
dan satu lagi jangan lupa titik koma ;


*/