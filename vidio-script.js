// Fungsi untuk menampilkan popup
function showPopup() {
    // Ambil jumlah kemunculan popup dari sessionStorage, jika tidak ada diatur ke 0
    var popupCount = sessionStorage.getItem('popupCount') || 0;

    // Cek apakah popup sudah muncul 3 kali
    if (popupCount < 3) {
        // Tampilkan popup
        document.getElementById('popupOverlay').style.display = 'flex';
        var video = document.getElementById("popupVideo");
        video.play(); // Mulai video segera setelah pop-up muncul

        // Tambah hitungan popup dan simpan ke sessionStorage
        sessionStorage.setItem('popupCount', ++popupCount);
    }
}

// Fungsi untuk menutup popup dan menghentikan video
function closePopup() {
    var video = document.getElementById("popupVideo");
    video.pause(); // Menghentikan video
    video.currentTime = 0; // Mengatur video ke awal
    document.getElementById('popupOverlay').style.display = 'none'; // Menutup popup
}

// Redirect ke link YouTube saat video diklik
document.getElementById('popupVideo').addEventListener('click', function() {
    window.location.href = "https://youtu.be/a-084pqI05U?si=zvLh0bDFzI9GIO8L";
});

// Menu toggle functionality
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('show');
});

// Tampilkan popup setelah 3 detik hanya jika belum muncul 3 kali
setTimeout(showPopup, 3000);
