document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('exploreBtn');
    
    exploreBtn.addEventListener('click', () => {
        // Simple click animation
        exploreBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            exploreBtn.style.transform = 'translateY(-2px)';
            alert('Welcome to Nexus UI! This is a simple interactive element.');
        }, 150);
    });

    // Add subtle parallax to glass panel based on mouse movement
    const panel = document.querySelector('.glass-panel');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        panel.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset transform on mouse leave
    document.addEventListener('mouseleave', () => {
        panel.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        panel.style.transition = 'transform 0.5s ease';
    });

    panel.addEventListener('mouseenter', () => {
        panel.style.transition = 'none';
    });
});
