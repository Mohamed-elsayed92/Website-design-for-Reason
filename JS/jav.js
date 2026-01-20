// تعريف العناصر
const collapsibleNavbar = document.getElementById('collapsibleNavbar');
const menuElement = document.getElementById('collapsibleNavbar');
const navlinks = document.querySelectorAll('.nav-link');

// إنشاء نسخة من Bootstrap Collapse
const bsCollapse = new bootstrap.Collapse(menuElement, {
  toggle: false // منع التبديل التلقائي عند التحميل
});

// 1. عند الضغط على الزر الرئيسي: تبديل الحالة (فتح/إغلاق)
collapsibleNavbar.addEventListener('click', function () {
    bsCollapse.toggle();
});

// 2. عند الضغط على أي رابط داخل القائمة: يتم الإغلاق
navlinks.forEach(link => {
    link.addEventListener('click', function () {
        bsCollapse.hide();
    });
});

// ملاحظة: افتراضياً، Bootstrap Collapse لا يغلق القائمة 
// عند الضغط خارجها إلا إذا تم ضبطها كـ Dropdown. 
// الكود أعلاه يضمن السلوك المطلوب بدقة.
