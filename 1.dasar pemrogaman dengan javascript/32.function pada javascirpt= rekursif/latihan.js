/* function pada javascript: rekursif

dimateri kali ini kita akan membahas sebuah konsep didalam dunia pemrogaman yang dinamakan dengan rekursif atau istilahnya rekursi / recursion

nah tapi sebelum kita bisa memahami mengenai rekursif ini kita harus memahami dulu mengenai rekursif 

jadi apa itu rekursif?
rekursif adalah sebuah fungsi yang memanggil dirinya sendiri 

nah kok bisa ya 
nanti kita lihat ya

kita kembali dulu mengenai pemahaman kita mengenai function dibeberapa materi sebelumnya 

kita tahu bahwa function itu dijalankan ketika kita mempunyai sebuah input yang dimasukkan kedalam function dan nanti menghasilkan sebuah output 

input ====> function ====> output 

gitu ya karakteristik dari function 

nah untuk rekursif ini yang terjadi adalah begini 

kita punya sebuah input 
nah nanti input ini akan masuk kedalam sebuah function ya functionya akan dijalankan 

ya tapi setelah dijalankan didalamnya itu ada baris code yang memanggil dirinya sendiri ( function itu sendiri )

jadi didalam function ada pemanggilan dirinya sendiri 
didalamnya lagi ada pemanggilan dirinya sendiri 

dan begitu seterusnya sampai suatu saat pemanggilannya berhenti dan menghasilkan sebuah nilai 

ya harapannya begitu 

nah tapi mungkin saja ketika kalian menginplementasikan konsep rekursif ini pemanggilannya tidak berhenti berhenti 

sama seperti kita menggunakan loopping itu kita mungkin saja masuk kedalam looping yang tidak pernah berakhir 

nah hati hati menggunakan rekursif pun bisa seperti itu 

ya jadi nanti pastikan pada saat menggunakan rekursif ini functionnya harus berkhir dan dia harus menghasilakan sebuah nilai 

coba kita lihat contoh berikut ini 

nah kalo misalkan kalian punya code sederhana saja seperti ini 

ya kalian lihat misalkan kita punya sebuah function namanya tes 
yang didalamnya itu mengembalikan function tes itu sendiri 

function tes(){
    return tes();
}
tes();


nah maka setelah nanti tesnya dijalankan itu functionnya akan terus terusan memanggil dirinya sendiri tanpa ada akhirnya

sehingga nanti hasilnya kalo kalian jalankan didalam consolenya akan muncul seperti ini 

ya ada tulisan 
maximum call stack size exceeded

nah ini artinya terlalu banyak pemanggilan function rekursif 

atau contoh sederhananya kita liaht kasus seperti ini deh ya 

misalnya saya punya script sederhana seperti ini 

saya ingin mencetak nilai ke layar dari 10 sampai 1 gitu mundur 

ya sebetulnya itukan kita bisa menggunakan looping ya 

saya punya for disini 
lalu saya tulis disini var i sama dengan 10 

lalu i lebih besar sama dengan 1 
lalu i-- 

ya jadi loopingnya mundur 

*/

// for(var i = 10; i >= 1; i--){
//     console.log(i);
// }

/* disini kita bisa console.log(i)
ini kalo saya jalankan maka hasilnya menampilkan angka 10 sampai 1 

itu kalo kita menggunakan looping

nah sekarang looping ini kita bisa ubah menggunakan function rekursif 

ya misalnya caranya gini 

kita buat sebuah function misalnya namanya tampilAngka begini

yang memiliki parameternya n ya untuk jumlah angkanya 


*/
// function tampilAngka(n){
//     console.log(n);
//     return tampilAngka(n-1)
// }
// tampilAngka(10);
/* lalu functionnya gini 
tampilkan nilainya 

lalu function ini akan mengembalikan tampilAngka lagi 
jadi memanggil dirinya sendiri tapi sekarnag argumentnya saya kurangi 1 

jadi kalo awalnya angkanya 5 
nanti 5 ditampilkan 

lalu panggil lagi 5 kurang 1 

jadi harapannya akan berkurang 

terus berkurang satu demi satu ya 

nih kita panggil functionnya tampilAngk kita kasih angkanya  10 ya awalnya 

coba kalian lihat ya 
nanti 10 masuk ke parameter n 

lalu dicetak angka 10 
lalu dikurangi 1  

mamanggil lagi functionnya 9 kurangi 1 lagi 
panggil lagi functionnya 8 dan seterusnya 


nah coba kalian lihat ini kira kira pemanggilan functionnya akan berakhir atua tidak?

ini kelihatannya tidak akan berakhir ya 
nah hati hati kalo dijalankan browsernya akan muter muter terus 

terus sampai dia tidak sanggup lagi untuk melakukan pemanggilan rekursifnya 

tampilnya sama ya
maximum call stack size exceeded 

jadi terlalu banyak pemanggilan rekursifnya 

walaupun kalo discroll ke atas awalnya 10 9 sampai 1 itu betul tapi karena kita tidak suruh dia berhenti diangka 1 maka dia terus terusan memanggil samapi akhirnya dia tidak sanggup lagi

nah itu jadi ati ati begitu melakukan pemanggilan secara rekursif harus ada kondisi berhentinya 


nah kondisi berhentinya itu kita sebut dengan bace case 

bace case yaitu kondisi akhir dari rekursif yang menghasilkan nilai 

jadi kalo misalkan function tampilAngka tadi mau kita berhentikan nah itu kita harus tambahkan base case 
contohnya seperti ini 

function cetakAngka(n){
    if(n === 0){
        return;
    }

    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);

kita bikin sebuah kondisi jika nanti pada akhirnya nilainya sama dengan 0 maka return 

ini returnnya saya tidak kasih nilai apapun 
karena ini fungsinya hanya untuk memberhentikan function 

jadi ini yang kita sebut dengan base case 
ya jadi kondisi rekursifnya suatu saat akan berhenti 

ya kalau kita coba kembali ke codenya 
kita tinggal tambahkan base casenya if 


kalo nanti pada akhirnya si n ini bernilai 0 
kan dia berkurang kurang terus ya 

maka kalian boleh tulis disini return untuk menghentikan functionnya 

*/

// function tampilAngka(n){
//     if(n === 0) return;

//     console.log(n);
//     tampilAngka(n-1);
// }

// tampilAngka(10);


/* atau biar lebih simple saya tambahkan saja begini sama saja ya 

sekarang kita lihat lagi 

kembali kebrowsernya kita refresh 
nah kalian lihat berhenti dari 10 sampai 1 

ini udah bener 

jadi begitu ya kalian harus menggunakan base case agar rekursifnya bisa berhenti 

karena kalau tidak dia akan terus terusan memanggil dirinya sendiri 


nah contoh lain atau contoh classic yang biasanya digunakan dalam rekursif ini adalah faktorial

ya kalian inget faktorial ya 
adalah konsep matematik untuk melakukan perkalian seperti ini

5! = 5 x 4 x 3 x 2 x 1

nah ini akan sangat mudah dilakukan menggunakan rekursif 

kalo kalian lihat sintax berikut ini 
misalkan saya punya function namanya faktorial yang menerima parameternya n

function faktorial(n){
    if(n === 0) return 1;

    return n * faktorial(n-1)
}
faktorial(5);

nanti jika n nya nilainya sama dengan 0 maka kembalikan nilai 1 
nah nanti nilai yang sebenarnya yang angka 1 ini 

nanti kita lihat ya 

lalu functionnya mengembalikan nilai n dikali ini rekursifnya faktorial n - 1 


ini kalo kita telusuri jadinya seperti ini 

ya yang pertama kita panggil faktorial(5)

nah dia akan mengechek 5 akan masuk ke parameter n 
di check apakah 5 sama dengan 0 ini skip 

masuk ke sini 
kembalikan nilai 5 dikali faktorial(5-1)

jadi dikali faktorial 4 

jadi hasilnya gini 5 * faktorial(4)

nah nanti difaktorial 4 nya dia masuk lagi kedalam functionnya 

5 * (4 * faktorial(3))

5 * (4 * (3 * faktorial(2)))
5 * (4 * (3 * (2 * faktorial(1))))

nah begitu seterusnya sampai nanti dia masuk kefaktorial 1 
kalo satu kan 

apakah sama dengan 0?  skip

lalu faktorial(1-1)
faktorial(0)

nah begitu 0 dia mengecheck 
apakah 0 sama dengan 0? true 

kembalikan angka 1 

nah baru sekarang bisa dihitung 




5 * (4 * (3 * (2 *1)))
5 * (4 * (3 * 2))
5 * (4 * 6)
5 * 24

120


jadi kalo misalkan function faktorial ini kalian jalankan dengan mengirimkan argumentnya 5 pasti hasilnya  nanti 120

paham ya 

jad itu contoh pemanfaatan rekursif untuk menghitung faktorial sebuah nilai 

nah selanjutnya semua looping itu bisa dibuat rekursif, tapi tidak sebaliknya 

nah jadi kalo kita membuat sesuatu dengan rekursif belum tentu kita bisa buatkan loopingnya 

nah contohnya yang tadi ya 

untuk cetak angka itu sebetulnya bisa kita gunakan looping  
nah tapi looping ini sudah kita terjemahkan menjadi rekursif 

ya sama juga untuk faktorial tadi 
sebetulnya untuk menghasilkan faktorial kita bisa gunakan looping 

tapi tadi kita sudah coba menggunakan teknik rekursif supaya codenya lebih elegan 

nah jadi itu contoh sederhananya 

selanjutnya untuk implementasi rekursif itu banyak sekali ya 



implemetasi rekursif 

1.menggantikan looping 
        yang tadi kita sudah coba untuk menggantikan looping 

2.fibonacci 
        lalu kita juga bisa membuat sebuah deret fibonacci 
        buat yang belum tahu silahkan cari aja apa itu deret fibonacci 

        tadi juga kita bisa melalukan faktorial 

3.pencarian dan penelusuran pada struktur data list dan tree 
        bahkan kalian bisa melakukan pencarian dan penelusuran pada struktur data list dan tree

4.bahasa pemrogaman yang tidak memiliki pengulangan 
        lalu rekursif ini juga digunakan untuk bahasa yang tidak memiliki konsep pengulangan 

        ya jadi ada bahasa pemrogaman yang tidak punya pengulangan didalamnya 

        contohnya 
        haskell, erlang, prolog dll

        nah karena mereka tidak punya pengulangan jadi mau tidak mau harus melakukan konsep rekursif 

5.dll
        ya masih banyak lagi bisa untuk melakukan intelegensi buatan pasti menggunakan rekursif ya untuk backtracking misalnya 

        atau untuk melalukan pembuatan game ya kalian meentukan kolisi antar object nah itu juga menggunakan rekursif


ya tapi tidak usah khawatir sampai kesana kita baru belajar mengenai konsep dasar rekursifnya saja 

jadi mungkin itu saja penjelasan singkat mengenai rekursif 
ya konsep yang memang tidak mudah untuk dipahami 

ya tapi penting untuk kalian kuasai nantinya 

ya tapi minimal sekarang mungkin kalian sudah bisa paham joks saya tadi diawal materi ini

ya kalo kalian mau coba google juga punya joks yang sama 

kalo kalian ketika recursion digooglenya 
maka nanti googlenya nanya 

apakah maksut kamu itu recursion 
ya muter muter aja ya 


jadi mudah mudahan kalian sekarang paham ya 

sampai disini dulu materinya 

kita ketemu lagi dimateri yang akan datang 
dan seperti biasa jangan lupa titik koma ; */

