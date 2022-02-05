/* javascript lanjutan: spread operator

kali ini kita akan membahas mengenai sesuatu yang dinamakan dengan spread operator dan rest parameter

apa itu spread operator dan rest parameter ini?
kedua hal ini direpresentasikan dengan tanda titik tiga kali ...

jadi meskipun notasinya sama tapi kedua hal ini bebeda
dan sebetulnya kita sudah pernah mencoba menggunakan notasi 3 titik ini ya dibeberapa materi sebelumnya 

tapi nanti kita akan lihat lebih detil lagi maksut dari spread operator dan rest parameter ini 

kita mulai dimateri ini dengan topik yang pertama yaitu spread operator 

jadi kita lihat dulu ya definisinya apa itu spread operator?

spread operator adalah sebuah operator yang memecah (exspand / unpack) iterable menjadi single element 

jadi yang tadinya iterable , yang tadinya banyak isinya dipecah menjadi single element 
jadi kalo kalian inget iterable itu ada banyak ya check aja dimateri sebelumnya 

bagaimana cara memecahnya? kita langsung saja lihat beberapa contoh kasus berikut ini 

misalnya saya punya variable mhs yang isinya adalah array
*/
// const mhs = ['muiz', 'husain', 'hasan'];

/* 
inget bahwa array itu kita bisa destructur 
kalo kita destructur tiap tiap elementnya itu langsung masuk kedalam variable terpisah

tapi kalo menggunakan spread operator misalnya gini
saya console mhs dan saya tambahkan ... didepannya

*/
// console.log(...mhs)

/* 
maka kalo yang tadinya array itu dipecah pecah menjadi tiap tiap elementnya 

kalo saya jalankan hasilnya
muiz husain hasan

nah sekarang kalian lihat bedanya ketika saya masuk kedalam arraynya
misalkan saya ambil index ke 0


*/
// const mhs = ['muiz', 'husain', 'hasan'];
// console.log(...mhs[0])

/* 
index ke 0 itu string dan string itu merupakan iterable object

sehingga kalo string kita pecah pakai spread operator hasilnya begini 
m u i z

jadi dia akan dipecah ya masing masing menjadi huruf terpisah
mudah mudahan kalian paham ya 

lalu kapan kita menggunakan spread operator ini


- mengubah menjadi array pada object iterable 

jadi kalo misalkan saya punya variable yang isinya string

*/
// const str = 'muiz'
// const arr = [...str]
// console.log(arr)

/* 
nah kalo saya tulis  didalam kurung sikunya ...str maka tiap tiap nilai pada str akan dipisah 
menjadi mu u i z dan tiap tiap nilai tersebut akan masuk kedalam array arr
sehingga kalo saya tulis console.log arr
maka hasilnya adalah array dari tiap tiap huruf pada string str



- menggabungkan dua array 
kalo kalo misalkan saya punya array namanya mhs 
lalu saya punya juga array yang namanya dosen misalnya 



*/
// const mhs = ['muiz', 'husain', 'hasan'];
// const dosen = ['sandhika', 'dody']
// const gabung = [...mhs, ...dosen]
// console.log(gabung)

/* 
saya bikin variable gabung dan gimana cara gabungnya?
caranya kalian cukup tuliskan kurung siku buka dan tutup 
dan didalamnya kita isi dengan spread mhs lalu koma dan spread dosen

jadi untuk tiap tiap nilai pada mhs dia akan masuk menjadi array 
lalu digabung dengan tiap tiap nilai yang ada pada dosen masuk menjadi array 


jadi nanti array gabung ini isini nya muiz husain hasan digabung dengan sandhika dody

sehingga kalo saya console log gabung maka isinya adalah gabungan dari dua array tadi

nah sebetulnya kita juga bisa pakai cara yang lain
dengan menggunakan method array yang namanya concate

nah kalo pakai concate kalian bisa tulis begini 

*/
// const mhs = ['muiz', 'husain', 'hasan'];
// const dosen = ['sandhika', 'dody']
// const gabung = mhs.concat(dosen)
// console.log(gabung)

/* 
nah ini hasilnya sama dengan spread operator kita 
jadi kalo saya jalanin hasilnya sama 

tapi dengan menggunakan spread operator itu kita bisa lebih flexible lagi
jika kita ingin menambahkan elementnya ditengah tengah mhs dan dosen

jadi misalnya saya mau gabungin mhs dan dosen tapi ditengah tengahnya saya mau kasih value array lain

mislakan saya mau tambahkan aji

*/
// const mhs = ['muiz', 'husain', 'hasan'];
// const dosen = ['sandhika', 'dody']
// const gabung = [...mhs, 'aji',...dosen]
// console.log(gabung)

/* 
jadi tinggal kita tambahkan ditengah tengah saja 
kalo pakai concate tidak semudah itu ya 
jadi lebih flexible kalo kita pakai spread operator

paham ya jadi kita bisa menggabungkan dua buah array atau lebih


-melakukan copy nilai pada array

selanjutanya kita bisa melakukan copy nilai pada array
contohnya saya punya array lagi mhs

ceritanya saya mau bikin array baru yang isinya sama dengan mhs
misalkan caranya begini 

*/
// const mhs = ['muiz', 'husain', 'hasan'];
// const mhs1 = mhs
// console.log(gabung)

/* 
nah ketika saya bikin variable mhs1 yang diisi dengan mhs 
harapannya kan isinya sama dengan mhs

kalo kita jalanka hasilnya sama

nah tapi problemnya kalo melakukan ini sebenarnya dia tidak benar benar melakukan copy
kenapa?

contohnya begini sebelum saya console mhs1 kita ganti mhs1[0] dengan sandhika


*/

// const mhs = ['muiz', 'husain', 'hasan'];
// const mhs1 = mhs
// mhs1[0] = 'sanhika'
// console.log(mhs1)

/* 
nah kan harusnya yang berubah itu hany array mhs index ke 0
jadi kalo saya console mhs1 isinya ["sandhika ", "husain", "hasan"]

tapi kalo saya console mhs isinya ["sandhika ", "husain", "hasan"]
jadi mhs ikut berubah padahal yang kita ingin ubah hanya array mhs1

jadi kalian tidak bisa mengcopy array seperti ini 
karena kalo kalian melakukan ini artinya membuar reverensinya 
jadi tetap saja mhs1 itu nunjuknya ke array mhs

jadi dia tidak benar benar mengcopy

jadi caranya kalo ingin mengcopy 
kalian harus menggunakan spread operator seperti ini 

*/
// const mhs = ['muiz', 'husain', 'hasan'];
// const mhs1 = [...mhs]
// mhs1[0] = 'sanhika'
// console.log(mhs1)

/* 
jadi tiap tiap single element pada array mhs kita jadi kan array baru
kita bungkus dengan kurung kusiku buka dan tutup

jadi kalo saya console mhs1 isinya ['sandhika', 'husain', 'hasan'];

kalo saya console mhs isinya ['muiz', 'husain', 'hasan'];

jadi array awalnya tetap ya 
jadi spread operator bisa juga digunakan untuk mengcopy array

gitu ya mudah mudaha sampai disini paham ya 


- contoh kasus menggunakan html 1

ceritanya didalam bodynya kalian bikin list yang isinya nama nama 

    <ul>
        <li>muiz</li>
        <li>hasan</li>
        <li>husain</li>
    </ul>

sekarang saya ingin mengambil nama namanya menggunakan DOM 
lalu saya simpan menggunakan array 

ya jadi saya ingin punya array yang isinya muiz,hasan,husain'

kalo mau pakai cara looping biasa kalian bisa gini 


*/
// const liNama = document.querySelectorAll('ul li')
// const arr = []
// for(const li of liNama){
//     arr.push(li.textContent)
// }
// console.log(arr)

/* 
karena ini iterable kalian bisa gunakan for of ya 
kalo saya jalankan hasilnya sudah bener ya ["muiz", "hasan", "husain"]

nah sebenarnya ini kita bisa menggunakan higher order function map
tapi kalo pakai map itu kita harus ubah dia menjadi array murni

karena ini iterable object kalian bisa menggunakan spread operator


*/
// const liNama = document.querySelectorAll('ul li')
// const arr = [...liNama].map(value => value.innerHTML)
// console.log(arr)

/* 
jadi tiap tiap nilai pada nodeList liNama kita spread lalu kita masukkan kedalam array
setelah kita ubah menjadi array murni baru kita bisa menggunakan map
kalo saya jalankan hasilnya seperti ini ["muiz", "hasan", "husain"]

jadi hasilnya sama


- contoh kasus html 2

misalnya didalam htmlnya saya punya h1 yang isinya muiz
dan kalian bisa kasih css sedikit ya sesuai keinginan kalian saja

nah ceritanya kalo saya hover tiap tiap hurufnya maka akan ada aksi tertentu
misalnya hurufnya menjadi lebih besar

kita tangkap dulu h1nya 

*/
const h1 = document.querySelector('.nama')
const value = [...h1.textContent].map(n => `<span>${n}</span>`).join('')
console.log(value)
/* 
lalu tiap tiap hurufnya saya sisipkan tag span
sehingga nanti spannya saya bisa kasih css
ketika saya hover hurufnya akan menjadi besar

jadi setelah saya tangkap h1nya 
saya bikin variable yang isi dari h1 lalu kita spread  

jadi value akan menjadi string dan string itu iterable kita bisa pecah single elemetnya 
dan kita masukkan kedalam array 

lalu kita map kembalikan tiap tiap hurufnya yang dibungkus dengan tag span dan kita join

kalo saya console muncul ya tiap tiap hurufnya akan dibungkus dengan span
<span>M</span><span>u</span><span>i</span><span>z</span>

tinggal kita masukkan value kedalam h1nya 
*/

h1.innerHTML = value

/* 
dan kita bisa tambahkan css dispannya
jangan lupa span itu displaynya inline 
kita kasih displaynya inline-block agar animasinya jalan ya 

kalo kita jalankan nah sudah ya tiap tiap hurufnya akan tertransform ketika saya hover

oke jadi seperti itu contoh penggunaan dari spread operator dimana kita bisa memisahkan iterable object menjadi single elements

mudah mudahan kalian paham 

baik jadi itu untuk materi kali ini pembahasan mengenasi spread operator 
dan dimateri berikutnya kita akan bahas rest parameter

jadi sampai disini dulu materinya 
kita ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ;  */
