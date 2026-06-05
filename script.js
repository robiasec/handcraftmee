document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen body
    const body = document.body;

    // Fungsi untuk cek posisi scroll
    function handleScroll() {
        const scrollValue = window.scrollY;

        // Jika scroll lebih dari 20 pixel, tambahkan class 'scrolled'
        if (scrollValue > 20) {
            body.classList.add("scrolled");
        } else {
            body.classList.remove("scrolled");
        }
    }

    // Jalankan fungsi saat user scroll
    window.addEventListener("scroll", handleScroll);
});
