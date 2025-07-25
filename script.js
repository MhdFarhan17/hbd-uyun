document.addEventListener('DOMContentLoaded', () => {
    
    // Ambil semua elemen yang dibutuhkan
    const startButton = document.getElementById('start-button');
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const audio = document.getElementById('birthday-song');
    const confettiButton = document.getElementById('confetti-button');
    const scrollButtons = document.querySelectorAll('.scroll-btn');

    // --- Logika Tombol Pembuka ---
    // Fungsinya HANYA untuk menyembunyikan layar pembuka
    if (startButton) {
        startButton.addEventListener('click', () => {
            welcomeOverlay.classList.add('hidden');

            if (audio && audio.paused) {
                audio.currentTime = 108; // Mulai dari 1 menit 48 detik
                audio.play();
            }
        });
    }

    // --- Logika Tombol Scroll ---
    // Membuat semua tombol navigasi bisa scroll dengan mulus
    scrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Logika Tombol Kejutan Final ---
    // Fungsinya: MEMUTAR MUSIK + MEMUNCULKAN KONFETI
    if (confettiButton) {
        confettiButton.addEventListener('click', () => {
            
            // 1. Putar Musik dari bagian reff
            if (audio && audio.paused) {
                audio.currentTime = 142; // Mulai dari 1 menit 48 detik
                audio.play();
            }

            // 2. Tampilkan Hujan Konfeti
            // Pengaturan dasar konfeti
            const count = 200;
            const defaults = {
                origin: { y: 0.7 }
            };

            function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });

            // Ubah teks tombol setelah diklik
            confettiButton.textContent = "I Love You! ❤️";
        });
    }
});