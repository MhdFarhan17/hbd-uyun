document.addEventListener('DOMContentLoaded', () => {
    const confettiButton = document.getElementById('confetti-button');

    if (confettiButton) {
        confettiButton.addEventListener('click', () => {
            // Pengaturan konfeti
            const duration = 5 * 1000; // 5 detik
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                // Tembakkan konfeti dari kiri dan kanan
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#FFC0CB', '#FF69B4', '#C71585', '#FFFFFF'] }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#FFC0CB', '#FF69B4', '#C71585', '#FFFFFF'] }));
            }, 250);
        });
    }
});