/*nilai dan type data pada javascript 

kali ini kita akan membahas nilai dan type data pada javascript 

kalian tahu tidak kalo misalnya didalam komputer kita kalo kita melihat jauh kedalam itu sebetulnya hanya ada data 

kita bisa membaca memodifikasi membuat data baru dan menghapusnya nah semua data ini tersimpan kedalam serangkaian bit 
lalu apa itu bit? 

bit/binary digit adalah satuan terkecil dari data yang ada didalam komputer kita 
nah disebut juga dengan binary digit atau bilangan biner 

nilainya itu hanya 0 dan 1 saja ( 0 / 1 ) kenapa? karena secara elektronika atau hardwere didalam komputer kita digit 1 itu terjadi ketika salah satu kompunen didalam komputer kita yang namanya transistor dialiri oleh listrik 

jadi jika transistor itu dialiri listrik maka terjadilah bit 1 dan 0 itu terjadi ketika transistor tersebut tidak dialiri oleh listrik 

jadi gampangnya anggap saja seperti lampu dirumah kalian ketika lampunya menyala itu artinya dialiri listrik terjadi bit 1 dan ketika lampunya padam itu tidak dialiri listrik terjadi bit 0

kalo kalian bingung kita ambil contoh sederhana seperti ini misalnnya kita membuat data yang bentuknya angka 23 dikomputer kita 

nah bagaimana komputer kita merepresentasikan angka 23 ini katanya tadi bit itu cuma ada 0 dan 1 ?

tapi sebelumnya kita lihat dulu ini deh 
kita balik dulu keteori matematik coba diinget inget lagi 

kalo misalkan kita menggunakan bilangan desimal bilangan desimal itu 0 - 9 ya maka angka 23 itu ita represestasikan sebagai berikut ini 

jadi didalam bilangan desimal itu ada yang namanya satuan puluhan ratusan ribuan dan seterusnya 

              ... 1000 | 100 | 10 | 1
              
nah kita punya angka 23 seperti ini itu kan ngitungnya kita bisa lakukan 3 didalam satuannya ya lalu 2 untuk puluhannya jadi 20 untuk ratusa dan ribuannya tidak ada dan kita jumlahkan jadilah angka 23 


       ... 1000 | 100 | 10 | 1
                |     | 20 | 3
                
nah angka 23  desimal ini itu kalo kita representasikan kedalam bilangan biner atau binery digit itu hasinya menjadi 
 1 0 1 1 1 
 
 nah kenapa bisa seperti ini ? itu karena representasinya bilangan biner itu seperti ini kalo didesimal tadi ada satuan puluhan ratusa ribuan kalo dalam bilangan biner itu representasinya seperti ini jadi dikali 2 saja secara berurutan 
 
                ...| 16 | 8 | 4 | 2 | 1 |
                   |    |   |   |   |   |
                  
jadi kalo misalkan saya  punya bilangan biner 1 0 1 1 1 nah cara mengitungnya sama seperti desimal tadi 
                   

                    |  1 | 0 | 1 | 1 | 1 |
                 ...| 16 | 8 | 4 | 2 | 1 |
                    | 16 | 0 | 4 | 2 | 1 | 23
                    
lalu akhirnya angka yang di bawah kita jumlahkan bilangan itu hasinya  23 atau bagaimana caranya agar menjadi 23 
kalo 0 dibawah 8 kita tulis bilangan binernya 0 jadi kalo angka paling bawah nilainya tidak 0 maka bilangan binernya kita hitung 1 

nah itulah yang terjadi ketika kalian membuat sebuah angka 23 didalam komputer kalian 

jadi semua data itu akhrinya direprentasikan dalam bilangan biner 


sekarang bayangkan didalam komputer kalian terdapat banyak bilangan biner / bit tentu saja didalam memori komputer kita itu sudah tidak ada lagi transistor kecil mungkin kita bisa representasikan menggunakan RAM dan untuk bisa bekerja dengan bit bit tersebut tanpa bingung komputer kita sudah bisa membagi bit bit tersebut kedalam beberapa poptongan 


potongan potongan tersebut disebut dengan nilai / value 

nanti meskipun nilai itu terbuat dari sekumpulan bit bisa saja nilai nilai itu memiliki peran yang berbeda dan peran inilah yang nantinya kita sebut dengan type data 

didalam javascritp ada 6 type data yang bisa kita gunakan 

-number (angka)
-string (tulisan)
-boolean 
-object
-function 
-underfined

jadi ini adalah peran dari bit bit yang ada dialama komputer kita 
nah nanti untuk membuat atau menggunakan sebuah nilai yang memiliki peran tertentu yang perlu kita lakukan adalah memanggil namanya 
maksutnya bagaimana? contohnya 

jika kita ingin membuat sebuah nilai yang typenya angka atau number yang perlu kita lakukan hanya perlu menuliskan angka seperti 10 -100 3.14 

nah maka nanti komputer secara otomatis membuatkan sebuah nilai yang type datanya number atau jika kita ingin membuat string misalnya maka cukup saja tuliskan tulisannya didalam sebuah kutip bisa kutip 1 atau kutip 2

'hello world'  
"muiz" 

nanti javascriptlah yang akan melakukan perubahan nilai nilai ini bit bit dalam komputer kalian jadi kita tidak usah khawatir bagaimana cara merubahnya nah nanti setiap nilai yang kita buat itu akan tersimpan di sebuah tempat dikomputer umumnya tersimpannya didalam RAM 

nah dan jika kita nanti membuat atau membutuhkan nilai yang sangat besar dalam satu waktu tertentu mungkin saja kita kehabisan bit karena memory itu ada kapasitasnya nah untungnya ini hannya terjadi ketika membutuhkan semua bitnya secara simultan atau dalam satu waktu yang bersamaan dan itu hampir tidak mungkin setidaknya untuk kasus kita nantinya 

jadi tidak usah khawatir kehabisa memory dan lagi sekarang komputer komputer atau laptop laptop yang ada itu memorynya itu sudah sangat besar lalu setelah itupun kalo kita tidak membutukan nilainya nilai tersebut akan menghilang kembali lagi bit kosong untuk digunakan lagi ketika kita butuh lagi 

jadi tidak usah khaawati bagaimana komputer kita mengelola bit bit tadi 

nah jadi begitu mungkin penjelasan singkat mengenai nilai dan type data yang ada didalam javascript 

dan dimateri selanjutnya kita akan bahas lebih detil mengenai type type data yang ada pada javascript tadi 

bagaimana cara membuatnya digunakan untuk apa dan bagaimana cara memakainya 

kita bertemu lagi dimateri selanjutnya dan satu lagi jangan lupa titik koma ;*/