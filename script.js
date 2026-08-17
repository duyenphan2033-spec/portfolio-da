document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetDetail = document.getElementById(targetId);
        const clickedCard = this.closest('.project');

        const allCards = document.querySelectorAll('.project');
        const allDetails = document.querySelectorAll('.project-detail');

        const isAlreadyActive = clickedCard.classList.contains('active');

        allCards.forEach(card => card.classList.remove('active'));
        allDetails.forEach(detail => detail.classList.remove('active'));

        if (!isAlreadyActive) {
            clickedCard.classList.add('active');
            targetDetail.classList.add('active');
            targetDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Đóng menu khi bấm 1 link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});