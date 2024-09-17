// Tangani submit form kontak
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form yang sebenarnya

    // Ambil nilai dari input (bisa digunakan untuk validasi tambahan)
    const nama = document.querySelector('input[name="name"]').value;
    const pekerjaan = document.querySelector('input[name="job"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const contactType = document.querySelector('select[name="contact-type"]').value;
    const pesan = document.querySelector('textarea[name="message"]').value;

    // Simulasi pengiriman (form ini tidak benar-benar mengirim ke server)
    if (nama && pekerjaan && email && phone && contactType && pesan) {
        // Tampilkan pesan notifikasi
        const notification = document.getElementById('notification');
        notification.textContent = 'Pesan Anda berhasil dikirim!';
        notification.style.display = 'block';
        notification.classList.add('show');

        // Hapus notifikasi setelah beberapa detik
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.style.display = 'none';
            }, 500); // Sesuaikan waktu dengan animasi
        }, 3000); // Notifikasi akan hilang setelah 3 detik

        // Reset form setelah pengiriman
        document.getElementById('contactForm').reset();
    } else {
        alert('Silakan isi semua kolom.');
    }
});
