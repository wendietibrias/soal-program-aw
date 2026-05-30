/**
 * Toko online memiliki log transaksi harian.
 *  Tim analis butuh beberapa ringkasan dari data yang sama: total pendapatan, kategori produk terlaris, dan daftar pembeli yang melakukan lebih dari satu transaksi. 
 * Ketiga kebutuhan ini muncul bersamaan tanpa bisa diprediksi urutannya. Dengan pendekatan functional, setiap ringkasan ditulis sebagai fungsi independen yang bekerja pada data yang sama — tidak ada state bersama, tidak ada efek samping.
 */

/**
 * 
 * Instruksi : 
 * 
 * a. Buat fungsi totalRevenue(transactions) menggunakan reduce yang mengembalikan total seluruh amount.
b. Buat fungsi revenueByCategory(transactions) menggunakan reduce yang mengembalikan objek { Buku: 220000, Elektronik: 770000, Fashion: 130000 }.
c. Buat fungsi repeatBuyers(transactions) yang mengembalikan array nama pembeli yang muncul lebih dari satu kali, tanpa duplikat.
d. Buat fungsi topCategory(transactions) yang mengembalikan nama kategori dengan total pendapatan tertinggi. Gunakan kembali fungsi dari poin b — jangan tulis ulang logika yang sama.
 */

/**
 * hasil yang diharapkan : 
 * totalRevenue
1120000
repeatBuyers · topCategory
['Ayu', 'Budi'] 'Elektronik'
 */

const transactions = [
    { id: 1, buyer: 'Ayu', category: 'Buku', amount: 85000 },
    { id: 2, buyer: 'Budi', category: 'Elektronik', amount: 450000 },
    { id: 3, buyer: 'Ayu', category: 'Buku', amount: 60000 },
    { id: 4, buyer: 'Citra', category: 'Elektronik', amount: 320000 },
    { id: 5, buyer: 'Dani', category: 'Buku', amount: 75000 },
    { id: 6, buyer: 'Budi', category: 'Fashion', amount: 130000 },
];