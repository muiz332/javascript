/* object pada javascript: latihan object

kali ini kita masih ada dimateri pemrogaman dasar 
dan sebelumnya kita sudah belajar mengenai object dan juga mengenai konsep this 

dan dimateri kali ini kita akan menerapkan pemahaman kita mengelai object yang sudah kita pelajari 

nah untuk latihannya kita akan melanjutkan lagi study kasus yang pernah kita buat dimateri sebelumnya yaitu mengenai juragan angkot 

ya kalo kalian inget pada kasus jugaran angkot ini kita sudah pernah membuat mengenai pengelolaan penumpang angkot

dan pengelolaan penumpang ini kita buat menggunakan array  pada javascript 

nah sekarang kita akan tambahkan komplexsitas progam kita yaitu untuk mengenlola angkotnya itu sendiri 

ya karena ada banyak komponen didalam angkot itu dan sekarang kita akan coba kelola data angkot ini menggunakan object 


nah untuk pengelolaan angkot ini yang akan kita lakukan ada beberapa hal ya terkait dengan angkot ini ya 

1.sopir
    jadi yang pertama kita akan mengetahui siapa sopir dari angkot yang kita kelola 

    ya misalakan nanti ceritannya kalian juragan angkot yang memiliki banyak angkot 
    nah tentu saja kalian pasti pengen tahu supir dari angkot tertentu itu siapa 

2.trayek 
    lalu kita juga harus tahu trayek dari angkot yang berjalan gitu ya 

3.kas
    yang ketiga kita bisa mengelola kas atau uang yang disimpan oleh supir angkot tadi 

    ya karena tiap penumpang yang turun itu kan pasti membayar sejumlah uang tertentu 
    nah nanti kita bisa kelola ada berapa kas dari angkot tertentu

4.penumpang
    nah lalu kita juga bisa kelola penumpangnya 
    ya jadi ini kenapa saya bilang lebih komplex tadi 

    jadi sekarang kita bisa sambil mengelola penumpang didalam pengelolaan angkot ini 

    nanti didalamnya ada mekanisme untuk penumpang naik 
    dan mekanisme untuk penumpang turun 

    ya nanti mungkin kita juga bisa sisipkan proses pembayaran pada saat penumpang itu turun 

    ya kurang lebih seperti itu 


sekarang kita ambil contoh misalkan saya punya sebuah angkot seperti ini 

kita sebut saja angkot1 yang mempunyai data awal itu seperti ini 

sopir muiz
jadi yang pertama dia punya sopir yang namanya muiz

lalu trayeknya itu muncar banyuwangi

lalu kita ini sialisasi bahwa ketika angkotnya pertama jalan itu penumpangnya kosong

nah nanti kalo ada penumpang naik maka penumpang ini baru ada isinya ]

dan yang terakhir misalnya kita kasih kas awalnya saja 0 

jadi karena belum ada penumpangnya ya jelas dia belum dapat uang jadi kasnya masih kosong

ya jadi coba pahami saja ilustrasinya seperti itu 

ceritanya kita mau mengelola sebuah angkot 

nah sekarang bagaimana pembuatan objectnya untuk mengelola angkot tadi 

nah kita langsung saja implementasikan pemahaman kita dari materi materi sebelumnya 

jadi sekarang silahkan temen temen pahami dulu bagaimana study kasusnya 
kalo temen temen mau buat duluan 

silahkan pause dulu 
coba dulu membuat object angkot yang  isinya terdapat properti dan method yang sudah tadi kita rancang diawal 

dan kalian coba membuat objectnya dengan menggunakan constrctor function agar lebih mudah saat mengelolanya


nah kalo sudah nanti silahkan dilanjutkan lagi 
nanti kita akan buat sama sama 



nah sekarang gimana kalo untuk membuat object angkot?
kita gunakan cara constructor saja biar gampang 


jadi kalian bisa bikin function kasih nama saja Angkot 
A nya huruf besar karena kita akan membuat function constructor 

lalu kita simpan properti properti yang nanti nya kita butuhkan pada saat angkot yang pertama diinisialisasi


*/

function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    //  kemudian kita bikin method yang berfungsi untuk menambah penumpang kita bisa kasih namanya penumpangNaik
    this.penumpangNaik = function(nama){
        // kita bisa masukan this,penumpang.length jadi ini artinya untuk menghitung array yang berada pada this.penumpang
        //untuk memanggil array penumpang kita tambahkan keyword this titik penumpang
        //this pada constructor berfungsi mengembalikan object yang baru dibuat 
        // disini object yang dibuat itu adalah angkot1 tapi kita tidak bisa panggil properti array penumpang dengan angkot1.penumpang
        //karena kalo kita tulis seperti itu berarti kita membuat function delcration jadi harus menggunakan keyword this
        if(this.penumpang.length === 0){
            this.penumpang.push(nama);
            return this.penumpang;
        }else{
            for(var i = 0; i , this.penumpang.length; i++){
                if(this.penumpang[i] === undefined){
                    this.penumpang[i] = nama;
                    return this.penumpang
                }else if(this.penumpang[i] === nama){
                    console.log('nama penumpang sudah ada didalam angkot');
                    return this.penumpang;
                }else if(i === this.penumpang.length - 1){
                    this.penumpang.push(nama);
                    return this.penumpang;
                }
            }
        }
    }

    // lalu kita bisa bikin method untuk penumpang turun kita kasih nama saja penumpang turun 
    // dan kita bisa tambahkan uang kas pada saat penumpangnya turun

    this.penumpangTurun = function(nama, bayar){
        if(this.penumpang.length === 0){
            console.log('penumpang masih kosong');
            return this.penumpang;
        }else{
            for(var i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] === nama){
                    this.penumpang[i] = undefined;
                    // kita tambahkan juga kasnya
                    this.kas += bayar;
                    return this.penumpang;
                }else if(i === this.penumpang.length - 1){
                    console.log(nama + ' tidak ada didalam angkot');
                    return this.penumpang;
                }
            }
        }
    }
}

// misalkan kita bikin object yang namanya angkot1 dan angkot2

var angkot1 = new Angkot('muiz', ['muncar', 'banyuwangi'], [], 0);

var angkot2 = new Angkot('husain', ['banyuwangi' , 'surabaya'], [], 0);


/* baik jadi mungkin itu ya temen temen latihannya untuk materi object kita mudah mudahan temen temen paham 

dan sepertinya ini adalah latihan terkahir kita untuk seri materi pemrogaman dengan javascript

dengan seri ini mudah mudahan temen temen bisa lebih paham lagi mengenai dasar dasar pemrogaman dasar khususnya dijavascript

dan inget ya konsep pemrogaman ini bisa kalian terapkan pada bahasan pemrogaman yang lain 

meskipun mungkin nanti sintaxnya saja yang berbeda 

sampai ketemu lagi dimeteri meteri berikutnya 

tetep semangat belajarnya tetep semangat ngodingnya 

dan satu lagi jangan lupa titik koma ; */

