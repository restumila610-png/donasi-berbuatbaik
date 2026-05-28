document.addEventListener("DOMContentLoaded", function () {
    // Tombol Pop-up Form QRIS
    const openDonationButtons = document.querySelectorAll(".open-donation-btn");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const donationModal = document.getElementById("donation-modal");
    const submitDonationBtn = document.getElementById("submit-donation-btn");
    const successPage = document.getElementById("success-page");
    const backHomeBtn = document.getElementById("back-home-btn");
    const proofFileInput = document.getElementById("proof-file");

    // Elemen Baca Selengkapnya & Lihat Lebih Banyak
    const readMoreBtn = document.getElementById("read-more-btn");
    const extendedStory = document.getElementById("extended-story");
    const seeMoreDonorsBtn = document.getElementById("see-more-donors-btn");
    const moreDonors = document.getElementById("more-donors");

    // 1. Fungsi Buka Modal QRIS (Dari Tombol Atas maupun Sticky Bar Bawah)
    openDonationButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (donationModal) {
                donationModal.style.display = "block";
                donationModal.scrollTop = 0;
            }
        });
    });

    // 2. Fungsi Tutup Modal QRIS
    if (closeModalBtn && donationModal) {
        closeModalBtn.addEventListener("click", function () {
            donationModal.style.display = "none";
        });
    }

    // 3. Fungsi Tombol Baca Selengkapnya
    if (readMoreBtn && extendedStory) {
        readMoreBtn.addEventListener("click", function () {
            if (extendedStory.style.display === "none") {
                extendedStory.style.display = "block";
                readMoreBtn.innerHTML = 'Sembunyikan <i class="fa-solid fa-chevron-up"></i>';
            } else {
                extendedStory.style.display = "none";
                readMoreBtn.innerHTML = 'Baca Selengkapnya <i class="fa-solid fa-chevron-down"></i>';
            }
        });
    }

    // 4. Fungsi Tombol Lihat Lebih Banyak Donatur
    if (seeMoreDonorsBtn && moreDonors) {
        seeMoreDonorsBtn.addEventListener("click", function () {
            if (moreDonors.style.display === "none") {
                moreDonors.style.display = "block";
                seeMoreDonorsBtn.innerHTML = 'Sembunyikan <i class="fa-solid fa-chevron-up"></i>';
            } else {
                moreDonors.style.display = "none";
                seeMoreDonorsBtn.innerHTML = 'Lihat Lebih Banyak <i class="fa-solid fa-chevron-down"></i>';
            }
        });
    }

    // 5. Fungsi Konfirmasi Donasi (Halaman Sukses)
    if (submitDonationBtn && successPage) {
        submitDonationBtn.addEventListener("click", function () {
            if (proofFileInput && proofFileInput.files.length === 0) {
                alert("Harap pilih dan upload foto bukti transfer Anda terlebih dahulu!");
                return;
            }
            if (donationModal) donationModal.style.display = "none";
            successPage.style.display = "flex";
        });
    }

    // 6. Fungsi Kembali Ke Halaman Utama
    if (backHomeBtn && successPage) {
        backHomeBtn.addEventListener("click", function () {
            successPage.style.display = "none";
            if (proofFileInput) proofFileInput.value = "";
        });
    }
});
