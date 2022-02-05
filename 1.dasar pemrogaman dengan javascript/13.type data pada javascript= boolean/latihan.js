/*type data pada javascritp: boolean

dimateri kali ini kita akan belajar salah satu type data yang ada didalam javascript yaitu boolean

apa itu boolean? 
boolean adalah sebuah type data yang digunakan untuk merepresentasikan logika true atau false 

jadi boolean ini adalah sebuah konsep yang sudah ada sebelum ada javascript

boolean ini sebenarnya digunakan dihampir semua bahasa pemrogaman, bahkan sebetulnya boolean sudah ada sejak lama karena dia ada didalam aljabar 

boolean pertama kali diciptakan oleh seseorang yang namanya  george boole pada tahun 1954 
george boole ini adalah seorang ahli matematika dalam bidang logika, nah didunia pemrogaman biasanya boolean ini digunakan pada statement pengkondisian, untuk menentukan aksi yang berbeda dan mengatur kendali progam

nah untuk pengkondisian ini akan kita bahas dimateri yang akan datang, sekali lagi ini lebih jelas ketika nanti kita bahas ketika kita belajar materi pengkondisian 

seperti yang dijelaskan tadi boolean memiliki dua buah nilai true | false 
jadi nanti true dihasilkan ketika kondisinya bernilai benar dan false dihasilkan ketika kondisinya bernilai salah 

contohnya begini jika nanti kita mempunyai sebuah variable misalnya 

var x = 10;

lalu kita masukkan 

x < 20

kedalam console, nah maka ekspresi ini akan menghasikan nilai boolean true sebetulnya ini sudah pernah kita coba kalo kalian mengikuti materi materi sebelumnya 

jadi ini sama saja dengan apakah 10 lebih kecil dari 20? jawabannya nanti true 

nah tidak hanya angka yang bisa kita check menggunakan boolean 

boolean bisa juga dihasilkan dari perbandingan string
contohnya seperti ini 
"Muiz" == "muiz"
false 

kalo misalkan kita tulis apakan string Muiz dengan huruf besar itu sama dengan string muiz dengan huruf kecil? ini nanti akan menghasilkan nilai false karena tidak sama 

nah contoh contoh yang barusan kita coba itu jika kita menggunakan console nanti pada prakteknya untuk menghasilkan nilai boolean tersebut disource code kita selain menggunakan pengkondisian tadi ya kita juga bisa menggunakan sebuah fungsi dijavascript yang namnya Boolean(nilai) dengan huruf B nya besar

nah nanti ekspresi tadi atau nilai yang tadi kita simpan kedalam tanda kurung buka dan kurung tutup ini 

contohnya kalo ekspresi tadi kita masukkan kedalam sini 
Boolean(10 < 20) 

maka ini sama saja akan menghasilkan nilai true tapi nanti ini kita tulisnya didalam source code kita bukan diconsole 

nah tapi selain kita memasukkan ekspresi seperti itu kita juga memasukkan hanya nilai saja, satu buah nilai 
contohnya kita bisa masukkan intejer didalam funsi boolean ini
Boolean(10)

mengenai fungsi juga akan kita bahas lebih lanjut dimateri yang akan datang 
ini dari hasil boolean angka 10 ini adalah true 

atau misalnya kita masukkan sebuah string 
Boolean("muiz")

ini juga akan menghasilkan true 

lalu misalnya kalo kita masukkan sebuah angka tapi sekarang angkanya 0
Boolean(0)
 
nah ini akan menghasilkan nilai false 

kalo kita masukkin angka 10 nilainya true kalo kita masukkin angka 0 nilainya false ini ada yang aneh ya

atau coba kita masukkan angka yang lain 
gimana kalo misalkan kita masukkan angka -1
Boolean(-1)

ini kira kira menurut kalian nilainya true atau false 
tadikan kalo angka 10 nilainya true kalo 0 nilanya false nah bagaimana kalo angka -1? 

nah ini ternyata nilainya true juga 
nah ini kenapa ya kira kira ?

ini karena nilai nilai yang ada pada javascript itu sebenarnya menyimpan nilai true atau false didalamnya 

ini disebut dengan nilai truthy | falsy 

coba kita lihat tabe berikut ini 

ini contohnya ada nilai nilai yang disebeut dengan truthy dan ada nilai nilai yang disebut dengan nilai falsy ini istilah saja dimana nilai nilai berikut ini menyimpan nilai true ata false  

                            truthy                 falsy

                            true                   false
                            none-zero number         0
                            "string"             "" atau ''
                            object                undefined 
                            array                   null
                            function                NaN

ini kalian lihat aja dulu kita tidak akan pahami sekarang cukup kalian pahami saja bahwa semua nilai didalam javascript menyimpan nilai boolean didalamnya

jadi tentu daja nilai truthy itu menghasilkan nilai true dan falsy menghasilkan nilai false 

pemahaman ini penting ya nanti terutama ketika kita belajar function dan pengkondisian 

nah tadi didalam tabel dikolom falsy itu kita melihat ada dua nilai ada yang disebut dengan undefined dan NULL 

nah ini juga kalian perlu ketahui 

undefined adalah sebuah type yang dihasilkan ketika kita mendeklarasikan sebuah variable tapi kita belum mengisikan nilainya 

jadi kita baru membuat misalkan
var x 
undefined

kita belum mengisi x misalnya diisi berapa gitu ya 
saat itu x nilainya undefined 

sedangkan null adalah nilai kosong yang bisa kita berika pada variable 

jadi kita bisa tulis 
var x = null

ini juga sama akan sangat terpakai ketika kita belajar pengkondisian dan function 

jadi kalian tidak usah bingung dulu mengenai dua nilai ini 



baik mungkin itu ya penjelasan mengenai type data boolean yang ada dijavascript

sekali lagi ini pengantar saja nanti mudah mudahan kalian akan lebih paham lagi ketika kita membahas topik topik yang lebih lanjut 


kita bertemu lagi dimateri selanjutnya dan satu lagi jangan lupa titik koma ; */
