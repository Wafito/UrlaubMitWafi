// --- PROGRESS BAR LOGIC (welcome.html) ---
const progressFill = document.getElementById('progress-fill');
const percentText = document.getElementById('percent');
const scannerSection = document.getElementById('scanner-section');
const questionSection = document.getElementById('question-section');

if (progressFill) {
    let width = 0;
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                scannerSection.classList.add('hidden');
                questionSection.classList.remove('hidden');
            }, 500);
        } else {
            width++;
            progressFill.style.width = width + '%';
            percentText.innerText = width + '%';
        }
    }, 40);
}

// --- MOVING NO BUTTON LOGIC ---
const noBtn = document.getElementById('no-btn');
let noCount = 0;

if (noBtn) {
    const moveButton = () => {
        noCount++;
        if (noCount >= 9) {
            window.location.href = 'angry_cat.html';
            return;
        }
        
        const x = Math.random() * (0.8 * window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (0.8 * window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });
}

// --- ANIMATIONS (yes_super.html) ---
function createHearts() {
    const emojis = ['❤️', '💖', '🌹', '✨', '🌸'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 150);
    }
}

function createConfetti() {
    // Einfache Konfetti-Logik mit bunten Divs
    for (let i = 0; i < 50; i++) {
        const conf = document.createElement('div');
        conf.className = 'heart';
        conf.style.width = '10px';
        conf.style.height = '10px';
        conf.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.animationDuration = (Math.random() * 2 + 1) + 's';
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 3000);
    }
}