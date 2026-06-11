
function createSquares() {
    const bg = document.getElementById('squaresBg');
    const squareCount = 15; 

    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        
        const size = Math.random() * 50 + 20 + 'px';
        square.style.width = size;
        square.style.height = size;

        
        square.style.left = Math.random() * 100 + 'vw';
        square.style.animationDelay = Math.random() * 10 + 's';
        square.style.animationDuration = Math.random() * 15 + 15 + 's';

        bg.appendChild(square);
    }
}


const sections = document.querySelectorAll('section');

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15, 
});


sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(section);
});


window.addEventListener('DOMContentLoaded', () => {
    createSquares();
});