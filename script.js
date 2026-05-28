document.addEventListener("DOMContentLoaded", function () {
    // 1. Ambil semua elemen penting dari HTML
    const openDonationBtn = document.getElementById("open-donation-btn");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const donationModal = document.getElementById("donation-modal");
    const submitDonationBtn = document.getElementById("submit-donation-btn");
    const successPage = document.getElementById("success-page");
    const backHomeBtn = document.getElementById("back-home-btn");
    const proofFileInput = document.getElementById("proof-file");

    // 2. Fungsi memunculkan pop-up QRIS saat tombol Donasi Sekarang diklik
    if (openDonationBtn && donationModal) {
        openDonationBtn.addEventListener("click", function () {
            donationModal.style.display = "block";
            donationModal.scrollTop = 0; // Scroll otomatis ke atas pop-up
        });
    }

    // 3. Fungsi menutup pop-up QRIS saat tombol Tutup [X] diklik
    if (closeModalBtn && donationModal) {
        closeModalBtn.addEventListener("click", function () {
            donationModal.style.display = "none";
        });
    }

    // 4. Fungsi memproses konfirmasi donasi setelah upload bukti
    if (submitDonationBtn && successPage) {
        submitDonationBtn.addEventListener("click", function () {
            // Validasi file upload
            if (proofFileInput && proofFileInput.files.length === 0) {
                alert("Harap pilih dan upload foto bukti transfer Anda terlebih dahulu!");
                return;
            }

            // Sembunyikan modal dan tampilkan halaman sukses
            if (donationModal) {
                donationModal.style.display = "none";
            }
            successPage.style.display = "flex";
        });
    }

    // 5. Fungsi kembali ke halaman utama dari halaman sukses
    if (backHomeBtn && successPage) {
        backHomeBtn.addEventListener("click", function () {
            successPage.style.display = "none";
            if (proofFileInput) {
                proofFileInput.value = ""; // Reset input file
            }
        });
    }
});
