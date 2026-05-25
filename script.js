// إجراء بعض التحسينات لجعل الموقع أكثر متعة للمستخدم
const navLinks = document.querySelectorAll('nav ul li');

navLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hover');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('hover');
    });
});