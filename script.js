// Mengambil element halaman / modal
const donationModal = document.getElementById('donationModal');
const successModal = document.getElementById('successModal');

// Fungsi membuka halaman kedua (Form QRIS)
function openDonationModal() {
    donationModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Kunci scroll halaman utama
}

// Fungsi menutup halaman kedua
function closeDonationModal() {
    donationModal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Fungsi memproses Submit Donasi (Berpindah ke halaman ketiga)
function submitDonation(event) {
    event.preventDefault(); // Mencegah reload browser
    
    // Sembunyikan form donasi, lalu tampilkan pop-up sukses terima kasih
    donationModal.style.display = "none";
    successModal.style.display = "flex";
}

// Fungsi Tombol "Kembali ke Form" di halaman ketiga
function resetAllModals() {
    successModal.style.display = "none";
    document.getElementById('uploadForm').reset(); // Reset pilihan file upload
    document.body.style.overflow = "auto";
}
