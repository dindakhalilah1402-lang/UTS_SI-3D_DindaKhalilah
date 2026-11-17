document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link:not(.sign-out)");
    const welcomeTitle = document.getElementById("welcomeTitle");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetHref = link.getAttribute("href");

            // Jika link memiliki ID tujuan (bukan sekadar "#"), biarkan scroll berjalan
            if (targetHref === "#") {
                e.preventDefault();
            } else {
                // Berikan efek highlight warna pada bagian yang dituju
                const targetElement = document.querySelector(targetHref);
                if (targetElement) {
                    document.querySelectorAll(".card").forEach(c => c.classList.remove("highlight-box"));
                    targetElement.classList.add("highlight-box");

                    // Hilangkan efek warna sorotan setelah 1.8 detik
                    setTimeout(() => {
                        targetElement.classList.remove("highlight-box");
                    }, 1800);
                }
            }

            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");

            // Ubah judul banner sesuai menu yang diklik
            const newTitle = link.getAttribute("data-title");
            if (link.textContent.trim() === "Home") {
                welcomeTitle.innerHTML = `${newTitle}<br>Kelas SI-3D`;
            } else {
                welcomeTitle.innerHTML = `${newTitle}<br>Sistem Informasi - SI-3D`;
            }
        });
    });

    const searchInput = document.getElementById("searchInput");
    const searchableItems = document.querySelectorAll(".searchable-item");

    searchInput.addEventListener("keyup", () => {
        const keyword = searchInput.value.toLowerCase();

        searchableItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(keyword)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });

    const modal = document.getElementById("docModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-btn");
    const docLinks = document.querySelectorAll(".doc-link");

    docLinks.forEach(doc => {
        doc.addEventListener("click", (e) => {
            e.preventDefault();
            const docName = doc.getAttribute("data-doc");
            modalTitle.textContent = docName;
            modalBody.textContent = `Ini adalah halaman pratinjau untuk "${docName}". File tugas perkuliahan daring siap diunduh atau diperiksa.`;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    const signOutBtn = document.getElementById("signOutBtn");
    if (signOutBtn) {
        signOutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const confirmLogout = confirm("Apakah Anda yakin ingin keluar dari Royal Dashboard?");
            if (confirmLogout) {
                alert("Anda telah berhasil Sign Out.");
            }
        });
    }
});