document.addEventListener('DOMContentLoaded', () => {
    // حدد جميع الروابط داخل القائمة المنسدلة
    const navLinks = document.querySelectorAll('#mohamed .nav-link');
    // حدد عنصر القائمة الرئيسي (الحاوية)
    const menuCollapse = document.getElementById('mohamed');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // استخدم وظيفة Bootstrap لإخفاء القائمة
            // تأكد من تضمين ملف Bootstrap JS في مشروعك ليعمل هذا السطر
            const bsCollapse = new bootstrap.Collapse(menuCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});