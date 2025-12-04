// FUNGSI ALERT SAAT KIRIM PESAN (Demo)
// Ambil elemen form pertama yang ditemukan
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah web reload (loading ulang)
        
        // Tampilkan pesan sukses
        alert("Terima kasih! Pesan Anda berhasil dikirim.");
        
        // Kosongkan isi form
        form.reset();
    });
}