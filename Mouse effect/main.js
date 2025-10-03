const flag = document.getElementById('cursorFlag');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Flag'i fareye taşı
    flag.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});
