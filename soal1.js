/** 
 * soal 
 * 
 * Dosen memiliki data nilai mentah mahasiswa dalam bentuk array of object. 
 * Nilai masih berupa angka 0–100, belum dikonversi ke huruf, dan belum disaring mana yang lulus. 
 * Daripada menulis loop berulang untuk setiap kebutuhan, dosen ingin pendekatan functional — setiap transformasi menjadi fungsi kecil yang bisa digabung dan dipakai ulang kapanpun.
 */

/** 
 * Task : 
 * 
 * a. Buat fungsi murni toLetterGrade(score) yang mengonversi angka → huruf (A ≥ 80, B ≥ 70, C ≥ 60, D ≥ 50, E < 50).
b. Gunakan map untuk menghasilkan array baru yang setiap objeknya memiliki field tambahan grade berisi nilai huruf. Data asli tidak boleh diubah.
c. Gunakan filter untuk mendapatkan daftar mahasiswa yang lulus (nilai ≥ 60).
d. Gunakan reduce untuk menghitung rata-rata nilai keseluruhan. Hasilkan angka dibulatkan 2 desimal.
 */

/** 
 * output yang diharapkan 
 * Hasil map (grade ditambahkan)
{ name: 'Ayu', score: 88, grade: 'A' } { name: 'Budi', score: 52, grade: 'D' } ...
Hasil filter & reduce
lulus: ['Ayu','Citra','Eka'] rata-rata: 70.20
 */

const students = [
    { name: 'Ayu', score: 88 },
    { name: 'Budi', score: 52 },
    { name: 'Citra', score: 75 },
    { name: 'Dani', score: 45 },
    { name: 'Eka', score: 91 },
];

