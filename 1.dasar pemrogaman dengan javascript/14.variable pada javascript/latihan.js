/*variable pada javascript 

yang akan kita pelajari dimateri kali ini adalah mengenai variable ya

jadi variable ini adalah topik yang sangat penting didalam dunia pemrogaman karena semua bahasa pemrogaman memiliki konsep dari variable ini

kalo kalian mengikuti seri ini dari awal sebetulnya kita sudah sering mencoba membuat dan bekerja dengan variable ini 

nah sekarang kita akan lihat dulu definisi dari variable itu sendiri 

jadi apa itu variable? 
variable adalah sebuah tempat/wadah yang memiliki nama, yang digunakan untuk menyimpan nilai 

jadi dia adalah tempat/wadah untuk menyimpan nilai 

atau gampangnya gini deh bayangkan aja varibale ini seperti gelas atau mungkin seperti ember yang fungsinya kedua benda ini adalah sama sama sebagai tempat menampung sesuatu 

nah apa saja yang dapat ditampung? itu macem macem misalnya untuk ember ini meskipun secara umum dia digunakan untuk menampung air tapi bisa sajakan kita menyimpan benda benda lain didalam ember ini 

misalnya kita bisa menyimpan pasir didalamnya 

jadi sama seperti variable dia adalah tempat menampung nilai, nilainya bisa macam macam bisa angka bisa tulisan bisa boolean dan lain lain gitu ya

nah untuk memahami variable ini kita perlu paham dulu 3 hal berikut ini 

1.deklarasi 
  yang pertama kita harus paham dulu deklarasi 

2.inisialisasi 

3.assignment 

nah ini akan coba kita lihat satu persatu 

yang pertama adalah deklarasi, jadi deklarasi ini adalah sebuah tahap untuk mendaftarkan variable kedalam lingkup yang sesuai ini maksutnya bagaimana kita lihat belakangan ya 

jadi yang pertama kita daftarkan dulu si variable tersebut 

lalu yang kedua adalah proses inisialisasi yaitu proses untuk pemesanan atau penyediaan memory yang nantinya digunakan untuk variable 

dan yang terakhir adalah assignment adalah untuk menetapkan nilai yang spesifik untuk disimpan kedalam variable itu sendiri 

contohnya begini diakhiri dengan tanda ; 
jika kalian menuliskan 

var x; begini, ini artinya kalian mendeklarasikan sekaligus menginisialisasi variable yang namanya x 

jadi setelah kalian menuliskan var x ini artinya variable tersebuat akan didaftarkan didalam lingkup yang sesuai lalu akan dipesan 1 block memory untuk nantinya kita bisa menyimpan nilai didalamnya 

lalu jika kita menulis baris selanjutnya yaitu  
x = 20;

ini artinya proses assignment atau kita menugaskan angka 20 untuk disimpan kedalam variable x begitu ya 

nah biasakan untuk selalu melakukan deklarasi dan inisialisasi sebelum kita melakukan assignment 
kenapa? ini kita lakukan untuk mengindari hal hal yang tidak diinginkan 

nanti dimateri yang akan datang kita akan bahas apa yang akan terjadi ketika kita tidak menuliskan keyword var terlebih dahulu sebelum melakukan assignment 

jadi untuk sekarang terima aja dulu kalo kita itu wajib melakukan deklarasi dan inisialisasi 

selanjutnya untuk melakukan deklarasi ya kan kita tahu tadi kita bisa menggunakan var ya keywordnya 

tapi sebetulnya masih ada keyword lain yang bisa kita gunakan untuk mendeklarasikan variable yaitu let dan const

                                            deklarasi variable
                                                  var
                                                  let
                                                 const

yang masing masing keyword ini memiliki perilaku yang berbeda tapi khusus untuk seri ini yang akan kita bahas dan yang kita gunakan adalah yang var saja 

nanti ketika kita sudah lebih mahir dan paham mengenai javascript kita akan bahas mengenai dua keyword lainnya 

jadi yang akan kita pelajari diseri ini yang simple dulu saja kita akan belajar yang var ini saja gitu ya 

jadi saya ulangi untuk membuat variable yang perlu kita tuliskan itu hannya seperti ini kita tuliskan keywordnya var lalu spasi kita tulis nama variablenya apa gitu ya 

var <nama variable> 

nah nama variable ini bebas saja boleh kalian tulis sesuka kalian tapi dengan beberapa aturan
aturannya seperti ini 

1.tidak boleh menggunakan spasi 
yang pertama kalian tidak boleh menggunakan spasi pada pembuatan variable kalian, jadi kalo nama variablenya lebih dari satu kata itu tidak boleh pakai spasi 
var ga boleh pake spasi;

2.boleh mengandung angka tapi tidak boleh diawali dengan angka 
lalu nama variable boleh mengandung angka jadi didalamnya boleh angka tetapi tidak boleh diawali dengan angka, jadi seperti ini tidak boleh
var 1gaboleh;
tapi kalo angkanya tidak didepan misalnya dibelakang seperti ini
var boleh1;
nah ini boleh boleh saja 


kalo tadi namanya lebih dari satu kalian boleh memisahkan katanya dengan menggunakan underscore
var ini_juga_boleh;

atau kalian juga bisa menggunakan simbol dolar seperti ini 
var boleh$;
atau seperti ini digabungkan boleh saja
var $_$;

atau yang lebih baik kalian bisa menggunakan format penulisan seperti ini 
var iniBolehBanget;

ini silahkan kalian gunakan dan format penulisan yang terakhir ini, pembuatan variable ini yang sering digunakan untuk para progammer javascript 
var namaVariablePanjang;

format ini disebut dengan camel case
dimana huruf pertama dari kata pertama sebuah variable itu huruf kecil lalu hurf pertama dari kata kedua dan selanjutnya itu huruf kapital 

paham ya jadi itu cara penulisan variable 

selanjutnya selain cara penulisan tadi ada juga beberapa kata yang tidak boleh kita gunakan sebagai nama variable kata tersebut dinamakan dengan keyword dan reserved word nah ini adalah kata yang digunakan sebagai bagian dari sintax javascript 

jadi kita tidak boleh gunakan nama itu sebagai nama variable kita 
google saja kata katanya

nah ini cukup banyak ya 

kalian tidak perlu repot repot menghafalkan semua kata ini kenapa karena satu ini tidak akan keluar diujian yang kedua kita akan jarang sekali membuat variable dengan nama nama ini 

kalopun kita tidak sengaja membuat kata kata ini sebagai variable nanti pesan kesalahan yang muncul akan memberi tahu kita bahwa kita menggunakan keyword atau reserved word 

jadi kalian tinggal ganti saja nama variablenya 

nah lalu yang selanjutnya dalam pembuatan variable khususnya jika kita membuat banyak variable dalam satu progam dan sepertinya memang akan seperti itu nantinya ya kita bisa menggunakan yang namanya shorthand ini 

yaitu sintax untuk menyingkat penulisan variable 
cara penggunaanya seperti ini 

contohnya jika kita menuliskan variable dan melakukan assignment seperti ini 
var nama;
var umur;
var lulus;

jadi saya menulis 3 buah variable lalu kita assignment sebuah nilai kedalam sebuah variable variable tersebut kita bisa nulis seperti ini

nama = "muiz";
umur = 17;
lulus = true;

nah dengan menggunakan shorthand kalian cukup menuliskan satu kali keyword var 
var nama = "muiz", 
    umur = 17,
    lulus = true;

lalu kita bisa langsung melakukan assignment untuk tiap tiap variablenya 
jadi kita deklarasikan variablenya inisialisasikan variablenya langsung kita assignment dalam satu sintax atau dalam satu ekspresi seperti itu 

lalu untuk membuat variable berikutnya kita tidak perlu bikin keyword var lagi cukup kita tambahkan koma lalu tulis lagi nama variablenya apa dan akan diassignmet dengan nilai apa 

jadi silahkan kalian pilih saja mau menggunakan yang mana 

dan yang terakhir didalam variable ada yang disebut dengan lingkup variable atau variable scope ya

ini juga sangat penting untuk kita pahami supaya nantinya kita bisa menggunakan variable secara tepat ya

kalo misalkan tadi diawal kita bahas mengenai pendeklarasian variable dimana deklarasi variable itu artinya mendagtarkan variable kedalam lingkup yang spesifik 

lingkupnya itu ada discope ini tapi topik ini tidak akan saya jelaskan karena kalo saya jelaskan sekarang khawatirnya akan bingung karena untuk memahami ini kita butuh pemahaman mengenai function dan object terlebih dahulu gitu

jadi kita akan balik lagi untuk memahami topik ini setelah kita belajr function dan object 

jadi sepertinya itu saja penjelasan singkat mengenai variable pada javascript 

kita ketemu lagi dimateri selanjutnya dan satu lagi jangan lupa titik koma ; */