/* membuat progam pengelolaan angkot part2

kali ini kita akan melanjutkan progam kita masih mengenai function dan array

kita akan lanjutkan progam kita mengenai pengelolaan penumpang pada aplikasi juragan angkot kita 

ya kalo dimateri sebelumnya kita sudah belajar mengelola penumpang dengan menambahkan penumpang kedalam angkot

ya kita juga punya beberapa aturan 
dimana kita tahu kalo angkotnya kosong maka penumpang yang naik akan duduk berurutan dikursi nomor 1 dan seterusnya 

lalu jika ada kursi yang kosong karena penumpangnya turun 
ya walaupun dimater sebelumnya kita masih simulasikannya secara manual ya 

ada sebuah element didalam array yang nilainya undefined 
nah jika ada kursi kosong tersebut maka dia akan duduk dikursi yang kosong dulu sebelum diakhir

ya dan terakhir kita asumsikan tidak boleh ada nama yang sama supaya tidak membingungkan pada saat kita sekarang bikin function untuk menghapus penumpang karena penumpangnya turun 

oke jadi sekarang function yang kita buat adalah hapus penumpang 

masih didalam progam yang sama kita lanjutkan progam sebelumnya \

sekarang kita lihat dulu rulesnya 

ya sebetulnya kalo kalian paham mengenai function tambah penumpang 
harusnya yang hapus penumpang ini tidak ada masalah ya

karena jauh lebih gampang dari tambah penumpang 

1.hapus penumpang

kita punya dua parameter 
nama penumpang dan array penumpangnya 

jadi penumpangnya akan turun dikursi yang mana ya 


2.rules

lalu rulesnya juga agak mirip 

- jika angkot kosong tampilkan pesan bahwa angkotnya masih kosong 
- jika ada penumpang yang namanya sesuai dengan nama yang kita kirim dalam parameter, hapus nama penumpang pada array dengna memberi nilai undefined

- jika tidak ada penumpang yang namanya tidak sesuai, tampilkan pesan kesalahannya nama penumpang tidak ada didalam angkot 

ya jadi simple saja silakan kalo sudah paham coba langsung dibuat progamnya 

nanti kita akan cocokan dengan progam yang akan kita buat bareng bareng 

ya jadi sekarang silahkan kerjakan 
kalo sudah selesai boleh dilanjutkan 


kita bikin function exspression yang baru ya disini 

parameternya ada dua 
ada namaPenumpang dan penumpang 

*/
var penumpang = ['muiz', 'hasan'];

var hapusPenumpang = function(namaPenumpang, penumpang){
        // lalu kita akan check kondisi didalamnya dulu ya 
    // kondidi yang pertama ketika angkotnya kosong 
    if(penumpang.length === 0){
        console.log('angkotnya masih kosong')
        return penumpang;
        // selanjutnya ketika ada isinya 
    }else{
         // kalo sudah ada penumpangnya kita telusuri lagi menggunaka pengulangan 
        for(var i = 0; i < penumpang.length; i++){
            // lalu setelah itu kita akan check apakah penumpang dengan nomor kursi i itu namanya sama dengan nama penumpang yang kita kirim pada parameter functionnya 
            if(penumpang[i] === namaPenumpang){
            // kalo ada berarti kursi tersebut kita isi dengan undefined 
                penumpang[i] = undefined;
                return penumpang;

                // kalo tidak ada kita else if lagi
                // kalo sudah ditelusuri sampai index terakhir maka munculkan kesalahannya 
            }else if(i === penumpang.length -1){
                console.log(namaPenumpang + ' tidak ada didalam angkot')
                return penumpang;
            }
        }
    }
}
/* jadi ini lebih simple ya 

kita gabungkan dengan progam tambah penumpang yang kita buat dimateri sebelumnya 

setelah ditambah kalian bisa hapus dengan menggunakan function hapus penumnpang 

ya jadi begitu kita sudah bisa membuat pengelolaan data dari aplikasi juragan angkot kita 

kita sudah bisa mengelola penumpang yang naik dan penumpang yang turun 

baik jadi mungkin itu dulu ya materi kali ini latihan mengenai function dan array pada javascript 

mudah mudahan makin membuat temen temen paham pada dua topik tersebut

sekali lagi disini kita masih mencoba memahami konsep dasar pemrogamannya 

ya jadi sampai disini dulu materinya 
mungkin dimateri selanjutnya kita akan masuk ditopik terakhir dari seri ini 

topik berikutnya yang kita pelajari adalah mengenai object ya object pada javascript 

jadi sampai disini dulu materi kali ini 
sampai ketemu lagi dimateri berikutnya 

dan satu lagi jangan lupa titik koma ; */