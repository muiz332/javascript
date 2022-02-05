/* membuat progam pengelolaan penumpang angkot dengan javascript

kali ini kita akan latihan setelah sebelumnya kita sudah belajar mengenai function dan array pada javascript ya 

ya kita akan latihan untuk menggunakan dua hal ini 
latihannya itu untuk membuat sebuah progam sederhana mengenai juragan angkot 

ya mungkin kalian masih ingin ditopik sebelumnya kita sudah pernah membuat sebuah progam mengenai juragan angkot ini ya 

ya kalo sebelumnya progam kita itu untuk mengelola angkotnya 
kali ini kita akan membuat progam untuk mengelola penumpang angkotnya 


ya jadi progam kita kali ini akan mengelola penumpang yang naik 
penumpang yang turun dimana dia duduk dan lain sebagainya 

ya jadi pasti akan seru banget 
nah ceritannya setiap angkot itu ada kursi untuk penumpang 

setiap kursi itu direpresentasikannya sebagai angka begitu 

ya ini nantinya kita bisa ubah sebagai array didalam progam kita 

ya jadi nanti kalo kita bikin progam kita anggap sebagai array

misalnya kita punya 

var penumpang = [];

ini arraynya kosong 
jadi ceritannya belum ada penumpangnya 
 

progam yang akan kita  buat itu terdiri dari 2 funsionalitas utama 

1. penumpang naik
    yang pertama kita akan kelola ketika penumpangnya naik angkot

    nanti kita akan representasikan menggunakan sebuah fungsi yang namanya tambah penumpang 

2.penumpang turun
    kita akan kelola juga ketika penumpangnya turun 

    ya nanti kita buat functionnya kita kasih nama saja hapus penumpang


ya tapi untuk sekarang kita fokus dulu diyang tambah penumpang ya 


1.tambah penumpang 

untuk yang tambah penumpang jadi nanti function tambah penumpang ini akan menerima 2 buah parameter 

parameter pertama adalah nama penumpang yang naik ke angkot 
ya nanti kita kirimkan nama penumpangnya 

lalu paramter kedua adalah array penumpangnya tadi 

ya jadi nanti penumpangnya akan duduk dikursi yang mana ya certanya geitu 

2.rules

lalu kita juga punya aturan 
aturannya seperti apa kita lihat satu satu ya 

    -jika angkot kosong, penumpang naik dan duduk dikursi yang pertama 
    -penumpang berikutnya duduk dikursi selanjutnya secara berurutan 
    -jika ada kursi kosong(kita tandai dengan undefined) karena penumpang turun, ketika ada penumpang yang naik berikutnya duduk dikursi yang kosong terlebih dahulu
    -asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik 
    -nama penumpang yang naik tidak boleh sama untuk menghindari kebingunangan ketika penumpangnya nanti turun 

    jika sama tampilkan informasi nama sudah ada didalam angkot 
    lalu tampilkan isi penumpangnya 


ya jadi itu yang harus kalian penuhi dalam membuat progam yang sederhana ini 
kalo sudah paham silakan kalian buat progam sederhana tersebut sebelum nanti kita akan kerjakan bareng bareng 

atau kalo kalian mau ada klunya ini saya kasih algoritmanya 
mungkin temen temen bisa mengerjakan berdasarkan algoritma yang saya berikan ini 


var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang){
    jika angkot kosong
       tambah penumpang diawal array 
       kembalikan isi array dan keluar dari function 

    else
       telusuri seluruh kursi dari awal 
           jika ada kursi kosong 
               tambah penumpang dikursi tersebut 
               kembalikan isi array dan keluar dari function
            
            jika sudah ada nama yang sama 
               tampilkan pesan kesalahannya 
               kembalikan isi array dan keluar dari function

            jika seluruh kursi terisi 
               tambah penumpang diakhir array 
               kembalikan isi array dan kelaur dari function 
}

silahkan dikerjakan nanti kita akan bikin bareng bareng 


oke ya kita coba bikin bareng bareng 

pertama kita punya array penumpang kosong 

*/
var penumpang = ['muiz', undefined];

// lalu kita bikin function exspression tambah penumpang yang menerima dua buah parameter 
// yang pertama nama penumpang dan yang kedua array penumpang 
// ya jadi nama penumpang ini akan masuk ke array penumpang 

var tambahPenumpang = function(namaPenumpang, penumpang){
    // oke yang pertama kita check dulu jika angkotnya kosong kita akan masukkan penumpang diawal array
    // coba gimana caranya mengecheck jika angkotnya kosong? 
    // cara mengechecknya paling gampang gini menggunakan length untuk menghitung element pada array
    // ya kalo arraynya kosong itukan lengthnya berapa? 0 ya jadi gini 
    if(penumpang.length === 0){
        penumpang.push(namaPenumpang);
        // lalu kembalikan nilainya
        return penumpang;
    }else{
        // else itu artinya kalo penumpangnya ada kita akan telusuri seluruh kursinya dari awal 
        // ini paling gampang kita bisa gunakan for saja 
        for(var i = 0; i < penumpang.length; i++){
            // kita check dulu jika ada kursi yang kosong ya kita tandai dengan undefined 
            if(penumpang[i] === undefined){
                // penumpang yang naik duduk dikursi yang kosong tersebut 
                penumpang[i] = namaPenumpang;
                return penumpang;
            
                // lalu kita check lagi jika sudah ada nama yang sama maka munculkan informasi kesalahannya 
            }else if(penumpang[i] === namaPenumpang){
                console.log(namaPenumpang + ' sudah ada didalam angkot');
                return penumpang;

                // lalu check jika seluruh kursi tersebut terisi jadi dia akan menuju kekursi yang terujung caranya gini
                // jika indeknya itu sama dengan penumpang.length kan ini tidak akan sama pasti kalo elementnya ada dua itu indexnya 1 nah kalo length 2 nah maka kita kurangi satu agar sama 
            }else if(i === penumpang.length - 1){
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

/* jadi begitu perogam sederhana kita untuk mengelola penumpang angkot 
ya silakan temen temen kalo punya solusi lain 

saya yakin ini mungkin belum yang paling efektif 

misalnya temen temen mau menggunakan for yang kita buat ini menggunakan filter misalnya atau menggunakan find silahkan saja mungkin saja ada cara yang lebih efektif lagi \

ya jadi itu latihannya mudah mudahan temen temen paham dasn tidak bingung ya 

intinya didalam progam sederhana ini kita sudah bisa coba mengimplementasikan function menggunakan function exspression dan juga menggunakan array

ya dan nanti dimateri selanjutnya kita akan lanjutnkan progam kita agar bisa mengelola penumpang yang turun 

ya nanti kita akan membuat sebuah function baru yang namanya hapus penumpang 

oke begitu ya sampai disini dulu materinya 

kita ketemu lagi dimater berikutnya 
dan satu lagi jangan lupa titik koma ; */
