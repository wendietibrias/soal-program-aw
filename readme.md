Anda di perbolehkan mengunakan cara apa pun untuk menyelesaikan kode-kode program yang tersedia, terapkan prinsip menulis kode bersih saat anda menyelesaikan soal soal yang tersedia. 

Selesaikan studi kasus berikut menggunakan JavaScript.

Persyaratan:
- Program harus berjalan sesuai kebutuhan.
- Gunakan penamaan variabel yang jelas.
- Hindari pengulangan kode yang tidak perlu.
- Buat kode yang mudah dibaca dan dipelihara.

TERIMAKASIH.

1. Soal 1 
 
  Dosen memiliki data nilai mentah mahasiswa dalam bentuk array of object. 
  Nilai masih berupa angka 0–100, belum dikonversi ke huruf, dan belum disaring mana yang lulus. 
  Daripada menulis loop berulang untuk setiap kebutuhan, dosen ingin pendekatan functional — setiap transformasi menjadi fungsi kecil yang bisa digabung dan dipakai ulang kapanpun.
 
a. Buat fungsi murni toLetterGrade(score) yang mengonversi angka → huruf (A ≥ 80, B ≥ 70, C ≥ 60, D ≥ 50, E < 50).
b. Buat function yang  untuk menghasilkan array baru yang setiap objeknya memiliki field tambahan grade berisi nilai huruf. Data asli tidak boleh diubah.
c. Buat function yang  untuk mendapatkan daftar mahasiswa yang lulus (nilai ≥ 60).
d. Buat function yang  untuk menghitung rata-rata nilai keseluruhan. Hasilkan angka dibulatkan 2 desimal.
 

    hasil yang di harapkan : 

  1. kembalikan object mahasiswa dengan grade  [
  { name: 'Ayu', score: 88, grade: 'A' },
  { name: 'Budi', score: 52, grade: 'D' },
  { name: 'Citra', score: 75, grade: 'B' },
  { name: 'Dani', score: 45, grade: 'E' },
  { name: 'Eka', score: 91, grade: 'A' }
]
2. Kembalikan objek array yang hanya mengembalikan murid yang lulus [
  { name: 'Ayu', score: 88 },
  { name: 'Citra', score: 75 },
  { name: 'Eka', score: 91 }
]
3. Hitung rata rata dari keseluruhan siswa -> 70.2
     

2. Soal 2 


 Toko online memiliki log transaksi harian.
 Tim analis butuh beberapa ringkasan dari data yang sama: total pendapatan, kategori produk terlaris, dan daftar pembeli yang melakukan lebih dari satu transaksi. 
 Ketiga kebutuhan ini muncul bersamaan tanpa bisa diprediksi urutannya. Dengan pendekatan functional, setiap ringkasan ditulis sebagai fungsi independen yang bekerja pada data yang sama — tidak ada state bersama, tidak ada efek samping.
 

  Instruksi : 
  
a. Buat fungsi totalRevenue(transactions) menggunakan reduce yang mengembalikan total seluruh amount.
b. Buat fungsi revenueByCategory(transactions) menggunakan reduce yang mengembalikan objek { Buku: 220000, Elektronik: 770000 Fashion: 130000 }.
c. Buat fungsi repeatBuyers(transactions) yang mengembalikan array nama pembeli yang muncul lebih dari satu kali, tanpa duplikat.
d. Buat fungsi topCategory(transactions) yang mengembalikan nama kategori dengan total pendapatan tertinggi. Gunakan kembali fungsi dari poin b — jangan tulis ulang logika yang sama. Jika function saling berkaitan maka anda dapat memanggil function yang sudah ada sebelumnya.
 

 hasil yang diharapkan : 
 totalRevenue 120000
repeatBuyers · topCategory
['Ayu', 'Budi'] 'Elektronik'
 
note untuk setiap fungsi yang terdapat pada soal 2 : 


function totalRevenue(transactions){
    return  // should return number
}

function revenueByCategory(transactions){
     //should return object and the value if item category groupping
}

function repeatBuyers(transactions){
    return [] //should return duplicate buyer name in array (note: fill the duplicate value just once)
}

function topCategory(transactions){
    return {} //should return object category with highest spending
}

hasil yang di harapkan per function : 

1. 1120000 -> totalRevenue
2. revenue by category -> [
  { category: 'Buku', amount: 220000 },
  { category: 'Elektronik', amount: 770000 },
  { category: 'Fashion', amount: 130000 }
]
3. ['Ayu', 'Budi'] -> repeat buyers 
4. [
  { category: 'Elektronik', amount: 770000 },
  { category: 'Buku', amount: 220000 },
  { category: 'Fashion', amount: 130000 }
] -> total by category