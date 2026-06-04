1. Soal 1 
 
  Dosen memiliki data nilai mentah mahasiswa dalam bentuk array of object. 
  Nilai masih berupa angka 0–100, belum dikonversi ke huruf, dan belum disaring mana yang lulus. 
  Daripada menulis loop berulang untuk setiap kebutuhan, dosen ingin pendekatan functional — setiap transformasi menjadi fungsi kecil yang bisa digabung dan dipakai ulang kapanpun.
 
a. Buat fungsi murni toLetterGrade(score) yang mengonversi angka → huruf (A ≥ 80, B ≥ 70, C ≥ 60, D ≥ 50, E < 50).
b. Gunakan map untuk menghasilkan array baru yang setiap objeknya memiliki field tambahan grade berisi nilai huruf. Data asli tidak boleh diubah.
c. Gunakan filter untuk mendapatkan daftar mahasiswa yang lulus (nilai ≥ 60).
d. Gunakan reduce untuk menghitung rata-rata nilai keseluruhan. Hasilkan angka dibulatkan 2 desimal.
 


  output yang diharapkan 
  Hasil map (grade ditambahkan) { name: 'Ayu', score: 88, grade: 'A' } { name: 'Budi', score: 52, grade: 'D' } ...
  Hasil filter & reduce
  lulus: ['Ayu','Citra','Eka'] rata-rata: 70.20

  note : 

      should print : 
     
      1. if you using map, you need to print or console.log the value for each object that has done mapped like this [{ name: 'Ayu', score: 88, grade: 'A' }]
      2. if you using filter you need return student who pass the minimum score which is >= 60
      3. if you using reduce you need to return average score
     

2. Soal 2 


 Toko online memiliki log transaksi harian.
 Tim analis butuh beberapa ringkasan dari data yang sama: total pendapatan, kategori produk terlaris, dan daftar pembeli yang melakukan lebih dari satu transaksi. 
 Ketiga kebutuhan ini muncul bersamaan tanpa bisa diprediksi urutannya. Dengan pendekatan functional, setiap ringkasan ditulis sebagai fungsi independen yang bekerja pada data yang sama — tidak ada state bersama, tidak ada efek samping.
 


  
  Instruksi : 
  
a. Buat fungsi totalRevenue(transactions) menggunakan reduce yang mengembalikan total seluruh amount.
b. Buat fungsi revenueByCategory(transactions) menggunakan reduce yang mengembalikan objek { Buku: 220000, Elektronik: 770000 Fashion: 130000 }.
c. Buat fungsi repeatBuyers(transactions) yang mengembalikan array nama pembeli yang muncul lebih dari satu kali, tanpa duplikat.
d. Buat fungsi topCategory(transactions) yang mengembalikan nama kategori dengan total pendapatan tertinggi. Gunakan kembali fungsi dari poin b — jangan tulis ulang logika yang sama.
 


 hasil yang diharapkan : 
 totalRevenue 120000
repeatBuyers · topCategory
['Ayu', 'Budi'] 'Elektronik'
 
note untuk setiap fungsi yang terdapat pada soal 2 : 


function totalRevenue(transactions){
    return transactions.reduce((a,b) => a + b.amount,0); // should return number
}

function revenueByCategory(transactions){
    const grouppedObjectByRevenue = []; // should return    
    for(const item of transactions){
        const findIndexByName
        grouppedObjectByRevenue.push()
    }
     //should return object and the value if item category groupping
}

function repeatBuyers(transactions){
    return [] //should return duplicate buyer name in array (note: fill the duplicate value just once)
}

function topCategory(transactions){
    return {} //should return object category with highest spending
}