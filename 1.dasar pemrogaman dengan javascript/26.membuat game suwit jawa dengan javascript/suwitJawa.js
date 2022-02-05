var tanya = true;

while(tanya) {


/* membuat game suwit jawa menggunakan javascript

kalo kalian lilhat dijudul materi ini kita akan membuat sebuah game sederhana yaitu game suwit jawa ya untuk melawan computer nantinya 

kalian pasti taukan suwit jawa ya pasti tahu lah ya 
pokoknya game yang mengadu jadi kalian ya 
jari telunjut jempol dan kelingking

yang direpresentasikan menjadi
orang gajah dan semut gitu ya


nah jadi gamenya tuh gini 

kita akan membuat popup prompt ya untuk meminta inputan dari user untuk memilih 
mau memilih gajah semut atau orang gitu ya 

nah kalo misalkan kita memilih salah satu misalnya gajah 
pada saat menekan oke nah compter akan secara random memilih pilihannya juga 

contohnya saya pilih gajah computernya secara random memilih semut 

nah kita tantukan gajah melawan semut menang mana?menang semut ya 
kalian tampilkan hasilnya kamu kalah

nanti kalo kita tekan oke nanti dia diminta lagi apakah mau mengulang gamenya 

jika pencet oke diminta lagi 
kalo saya tulis gajah lagi nah sekarang computernya secara random memilih gajah juga sehingga hasilnya seri tidak ada yang menang 

nah paham gak?

jadi kita akan membuat game sederhana ini hanya menggunakan materi yang sudah kita pelajari sebelum ini 


oke sekarnag kita pikirkan dulu gimana cara kerja gamenya 

nah yang pertama kita hasu cari tahu dulu playernya milih apa 
ya jadi kita harus menangkap pilihan playernya 

playernya milih gajah semut atau orang 

lalu kita harus menangkap juga pilihan dari computer 
ya nanti menggunakan bilangan random
ya jadi kita akan membangkitkan bilangan random 

baru selanjutnya kita menentukan rulesnya atau aturannya 

menentukan rules itu apa menang lawan apa 
apa kalah lawan apa

dan diakhir tampilkan hasilnya ya 

ya jadi ini adalah algoritmanya atau sudocodenya ya kita sebutnya 



nah untuk menangkanp pilihan playernya 
misalkan saya punya variable namanya p aja begitu ya 

disini kita akan menggunakan sebuah prompt lalu kita kasih pesannya seperti ini 

*/

     var p = prompt('pilih: gajah, semut, orang ');

/* nah gimana nanti kalo misalkan usernya atau playernya memasukkan inputan selain 3 ini 
nah itu berarti harus kita tangani ya tapi untuk sekarang biarkan begini dulu 


nah kita udah menangkap pilihan playernya sekarnag kita akan menangkap pilihan dari computernya 

caranya gimana?
gimana kalo gini 

saya punya variable namanya comp gitu ya untuk menangkap pilihan computer

nah disini saya akan membangkitkan bilangan random menggunakan fungsi math 
ya kalian tidak usah khawatir dulu kalo belum paham mengenai fungsi nanti kita bahas dimateri berikutnya 

lihat ya kita memanggil librarynya javascript yang namanya math lalu methotnya atau fungsinya namanya random 

begini

*/

     var comp = Math.random();

/* nah ini artinya kita akan membangkitkan bilangan random dari 0 sampai 1 
dan tulisan Mathnya itu m nya hurus besar 
contohnya deh kalo misalkan saya console.log lalu saya jalankan 
*/

// console.log(comp);

/* nah lihat tuh ini adalah bilangan yang dibangkitkan 
kalo saya refresh berubah lagi 

ya jadi setiap saya membuka halamannya angkanya berubah ubah 

nah ini tinggal kita tentukan kalo angkanya berapa computernya milih semut 

kalo angkanya berapa computernya milih gajah dan kalo angkanya berapa computernya milih orang 
paham gak?

ya kita coba kita udah dapet angka randomnya 
gimana kalo saya tulis gini 

jika compnya nilainya gimana kalo saya tulis gini
0.34 

itu misalkan compnya kita timpa tadinya angka kita isi dengna string gajah misalkan 

tapi kalo misalkan compnya antara 0.34 sampai 0.66 gitu ya 

jika comp lebih besar sama dengan 0.34 dan lebih kecil dari 0.67
ini apa silahkan kalian tentukan sendiri misalnya ini orang begitu

*/

        if(comp < 0.34){
            comp = 'gajah';
        }else if(comp >= 0.34 && comp < 0.67){
            comp = 'orang';
        }else{
            comp = 'semut';
        }

/* nah sisanya berarti dia diatas 0.67 ya itu compnya  apa? dia semut begitu 

sudah nah sekarang si compnya ini udah punya nilainya 
jadi kalo saya simpan console.log lagi 

nanti yang tampil bukan angka tapi apa
random antara gajah orang dan semut 

*/
// console.log(comp);

/* muncul gajah saya refersh lagi nah sekarang orang 

sudah tuh nah sekarang computernya udah punya pilihan randomnya 

baru sekarang kita tentukan rulesnya apa?
misalkan gajah lawan orang menang siapa
gajah lawan semut menang siapa gitu ya 
gajah lawan gajah seri  

gimana kalo kita tangani yang seri dulu biar gamapang 

jika p itu sama dengan yang dipilih oleh computer dua duanya milih gajah misalnya ya 
maka kalian bisa tulis alert gitu ya hasilnya seri

atau bagaimana kita bikin alertnya kita simpan belakangan 
jadi gini 

gimana kalo kita bikin sebuah variable kita kasih nama hasil gitu ya yang diisi dengan string 
nanti hasil ini akan kita gunakan untuk menampilkan alert diakhir 

jadi kalo misalkan computer dan player memilih pilihan yang sama hasilnya diisi seri begitu 

lalu selanjutnya else if jika playernya misalnya memilih gajah 
berarti kita tentukan computernya sekarang pilih apa 

apakah computernya pilih orang apakah pilih semut 
kita tidak perlu lagi ngecheck apakah computernya pilih gajah 
kenapa? karena kita sudah check jika p hasilnya sama dengan comp maka hasilnya seri 

berarti kita check lagi if
jika computernya pilih orang 
gajah lawan orang menang mana? menang gajah ya karena orangnya diinjak gitu ya 

else hasilnya kalah 
else itukan berarti jika compuernya pilih semut gitu 

paham gak?
jadi kita check pilihan kita dulu baru kita check pilihan computer 

ya dan ini kita akan lakukan untuk pilihan kita yang lain 

ya ada else if lagi 
jika kita pilih orang misalnya 

maka kita check computernya itu milih apa 
jika computernya itu milih gajah beraerti kita kalah 

lalu else jika komputernya milih semut 
hasilnya menang 



*/

        var hasil = '';
        if(p == comp){
            hasil = 'seri'
        }else if(p == 'gajah'){
            // if(comp == 'orang'){
            //     hasil = 'menang'
            // }else{
            //     hasil = 'kalah'
            // }
            hasil = (comp == 'orang') ? 'menang' : 'kalah'

        }else if(p == 'orang'){
            // if(comp == 'gajah'){
            //     hasil = 'kalah'
            // }else{
            //     hasil = 'menang'
            // }

            hasil = (comp == 'gajah') ? 'kalah' : 'menang'
        }else if(p == 'semut'){
            hasil = (comp == 'gajah') ? 'menang' : 'kalah'
        }else{
            hasil = 'memasukkan pilihan yang salah'
        }


/* nah ini perhatikan ya kalo misalkan kita pilih if dan else saja 
kita sebetulnya bisa menggunakan operator ternary atau operator kondisional jadi kalian bisa ganti baris if dan else ini

ternary tu gini 

kita tulis kondisinya apa menggunakan kurung 
kalo misalkan computer sama dengan orang 
maka jika true hasilnya menang titik dua 
jika false hasilnya kalah 

ini satu baris ini sama dengan if dan else 
jadi bacanya gini 

check dulu apakah computer itu nilainya sama dengan orang jika true maka string menang akan masuk ke varibale hasil 
jika false maka string kalah akan masuk ke variable hasil 

begitu pula dengan yang ada dibawanya 
jika computer milih gajah kita kalah
jika computer milih semut kita menang 

terkhir else if kalo palyer milihnya semut 
maka hasilnya 
jika computer milih gajah maka hasilnya menang
jika computernya nilainya orang kita kalah

tingga kita tambahkan laig satu buah else buat apa?
kalo kita memauskkan inputan selain gajah semut dan orang 

ya jadi hasilnya kita isi dengan memasukkan pilihan yang salah 

begini jadi kita sudah menggunakan pengkondisian 

baru diakhir kita menampilkan hasilnya
kita tampilkan saja menggunkan alert 

kita kasih tau dulu


*/

     alert('kamu memilih: ' + p + ' dan computer memilih: ' + comp + '\nmaka hasilnya adalah kamu ' + hasil);

/* begini paham ya coba kita lihat hasilnya ini udah bener atau belum  

nah coba kita pilih orang ketika pencet tombol oke 
kita pilih orang dan computer pilih semut berarti menang 

ini kalo saya pencet oke lagi hilang harus saya refresh dulu baru ada lagi

kita pilih gajah computer milih semut kita kalah

atau kita kasih looping dulu ya apakah gamenya mau diulang atau tidak 

gimana caranya?
kita bungkus semuanya menggunakan while 

nah jadi gini 
saya punya variable diatasnya namanya tanya yang saya isi dengan nilai true 

lalu saya tulis gini selama tanya nilianya true maka lakukan aksi 
atau kita bisa menggunakan nilai truthy atau falsy 

dan diakhir kita check lagi kasih confirm 
jadi kalo confirm ini kan memunculkan pop up yang ada tombol oke atau cencel
kalu oke nilianya tru kalo cencel nilinya false 

dan diluat whilenya kita kasih alert terima kasih sudah bermail misalkan begitu  


*/

   tanya = confirm('lagi?');
}

alert('terima kasih sudah bermain');

/* kita coba save lalu refresh 
nah muncul prompt 
kita masukkan orang computer memilih semut kita menang 

lalu ada popup lagi nilai untuk mengulangan permainannya 
ditanya lagi? 
kalo saya tulis sembarang

maka kamu memilih pilihan yang salah 

jika tekan oke dia akan mengulang permainannya lagi

kalo saya pencet cencel maka muncul popup alert terima kasih sudah bermain 

sudah nih kita sudah membuat game yang sangat sederhana mennggunakan javascript yang sudah kita pelajari 

ya jadi itu mungkin materi kali ini kita memubat game yang sangat sederhana 

ini saya punya challenge buat kalian 
challengenya begini 

jadi aplikasinya konsepnya sama seperti tadi menggunakan popup dan control flow ya 
tapi sekarnag gamenya adalah game tebak angka 

mainnya gini coba silahkan kalian tebak angka dari 1 sampai 10 
itu jadi ini sama saja kita membangkitkan bilangan random dari 1 sampai 10 

kalo tadikan bilangan randomnya dari 0 sampai 1 
ya jadi nanti kalian cari cara 
gimana caranya membangkitkan bilangan random 1 sampai 10 bukan 0 sampai 1 

lalu bilangannya bilangan bulat bukan bilangan pecahan 

ya jadi kita harus menebak 1 sampai 10 dan kita dikasih 3 kesempatan 

kalo saya pencet oke kita diminta memsukkan angka tebakan 

misalkan 1 sampai 10 
kita pilih 7 misalnya ya 

kalo saya pencet oke 
nah ternyata yang kita pilih terlalu rendah 

kita masih punya 2 kesempatan 

kalo 7 masih rendah misalnya kita masukkan 9 ya 

nah kalo benar ada tulisannya anda benar angka yang dicari adalah angka 9 

nah kalo salah sampai 3 kali maka akan muncul 
kesempatan anda sudah habis anda gagal 

angka yang dicari adalah 2 

ya jadi gamenya simple mencari angka 1 sampai 10 

silahkan ini buat dicoba coba saja buat latihan 

silahkan kalian bisa modifikasi angkanya jadi lebih banyak atau lebih sedikit 

nyawanya lebih banyak atau lebih sedikit 

oke jadi mungkin itu ya materinya 

untuk materi kita kali ini menggabungkan apa yang sudah kita pelajari dari materi materi sebelumnya 

ya nanti kita ketemu lagi dimateri berikutnya 

itu kita akan membahas topik baru mengenai function 

ya jadi sampai disini dulu materinya 

kita ketemu lagi dimateri yang akan datang 

dan seperti biasa jangan lupa titik koma ; */