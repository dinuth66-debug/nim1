function createHearts() {
    const emojis = ['❤️', '💖', '✨', '🌸', '💘', '💕'];
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHearts, 300);

function moveButton() {
    const noBtn = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function nextPage() {
    const container = document.getElementById('mainContainer');
    container.innerHTML = `
        <h1 style="font-size: 3rem;">I knew you'd say yes, Nimaya! 🥰</h1>
        <img id="val-photo" src="pew-pew.jpg" alt="Pew Pew Hearts">
        <p style="font-size: 1.5rem; color: #ff4d6d; font-family: 'Dancing Script';">
            I'm the luckiest person in the world! ❤️
        </p>
    `;
}
