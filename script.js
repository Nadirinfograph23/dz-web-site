// إجراء التابع الأساسي
document.addEventListener('DOMContentLoaded', function() {
    // إجراء التحميل للعناصر
    const hero = document.querySelector('.hero');
    
    // إجراء التفاعل مع العناصر
    hero.addEventListener('click', function() {
        console.log('تم النقر على العنصر');
    });
});