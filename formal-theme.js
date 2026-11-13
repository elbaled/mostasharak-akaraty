/* ==========================================================================
   ملف الهوية الرسمية الفاخرة (Corporate Luxury Theme) - مستشارك العقاري
   يُستدعى في نهاية ملف index.html عبر: <script src="formal-theme.js"></script>
   ========================================================================== */
(function () {
    // 1. حقن خط IBM Plex Sans Arabic الرسمي في <head>
    if (!document.getElementById('ibm-arabic-font')) {
        const fontLink = document.createElement('link');
        fontLink.id = 'ibm-arabic-font';
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap';
        document.head.appendChild(fontLink);
    }

    // 2. حقن تنسيقات الستايل الرسمي الفاخر
    if (!document.getElementById('formal-corporate-style')) {
        const style = document.createElement('style');
        style.id = 'formal-corporate-style';
        style.textContent = `
            :root {
                --navy-primary: #0b132b;
                --navy-secondary: #1c2541;
                --gold-primary: #b8892c;
                --gold-light: #d4af37;
                --bg-surface: #f7f8fa;
                --border-subtle: #e2e8f0;
            }

            /* الخطوط والخلفية العامة */
            body {
                font-family: 'IBM Plex Sans Arabic', 'Cairo', sans-serif !important;
                background-color: var(--bg-surface) !important;
                color: #1e293b !important;
            }

            /* شريط التنقل العلوي */
            nav.sticky {
                background: rgba(11, 19, 43, 0.96) !important;
                border-bottom: 1px solid rgba(212, 175, 55, 0.25) !important;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
            }

            nav.sticky button {
                background: rgba(255, 255, 255, 0.06) !important;
                border: 1px solid rgba(255, 255, 255, 0.14) !important;
                color: #f8fafc !important;
                border-radius: 6px !important;
                font-weight: 600 !important;
                box-shadow: none !important;
            }

            nav.sticky button:hover {
                background: rgba(212, 175, 55, 0.15) !important;
                border-color: var(--gold-light) !important;
                color: #fde68a !important;
            }

            nav.sticky button.gold-gradient {
                background: linear-gradient(135deg, #c59b27 0%, #9e7618 100%) !important;
                border: none !important;
                color: #ffffff !important;
            }

            /* الواجهة الرئيسية وصندوق البحث المعماري */
            .hero-bg {
                background: linear-gradient(180deg, rgba(11, 19, 43, 0.88) 0%, rgba(11, 19, 43, 0.94) 100%),
                            url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80') !important;
                background-size: cover !important;
                background-position: center !important;
                border-bottom: 3px solid var(--gold-primary);
            }

            .hero-bg > .container > * {
                animation-delay: 0.2s !important;
            }

            .hero-bg .bg-white.rounded-xl {
                border-radius: 8px !important;
                border: 1px solid #cbd5e1 !important;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25) !important;
            }

            .hero-bg input, .hero-bg select {
                background-color: #f8fafc !important;
                border: 1px solid #cbd5e1 !important;
                border-radius: 6px !important;
                color: #0f172a !important;
            }

            .hero-bg button {
                background-color: var(--navy-primary) !important;
                border-radius: 6px !important;
            }

            /* البطاقة التعريفية للمستشار العقاري */
            section.-mt-10 > div {
                border-radius: 10px !important;
                border: 1px solid #e2e8f0 !important;
                border-right: 5px solid var(--gold-primary) !important;
                box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08) !important;
            }

            #ownerCardAvatar {
                border-radius: 12px !important;
            }

            section.-mt-10 .rounded-full.gold-gradient {
                border-radius: 14px !important;
                padding: 3px !important;
            }

            #ownerCardWaBtn, #ownerCardCallBtn, #ownerCardFbBtn {
                border-radius: 6px !important;
                font-weight: 600 !important;
                box-shadow: none !important;
            }

            #ownerCardWaBtn {
                background-color: #0f5132 !important;
                border: 1px solid #198754 !important;
            }

            #ownerCardCallBtn {
                background-color: var(--navy-primary) !important;
            }

            #ownerCardFbBtn {
                background-color: #1e3a8a !important;
            }

            /* كروت العقارات */
            #propertiesGrid > div {
                border-radius: 8px !important;
                border: 1px solid #e2e8f0 !important;
                box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04) !important;
            }

            #propertiesGrid > div:hover {
                border-color: var(--gold-primary) !important;
                box-shadow: 0 14px 30px rgba(15, 23, 42, 0.1) !important;
                transform: translateY(-3px) !important;
            }

            #propertiesGrid span.rounded-full {
                border-radius: 4px !important;
                letter-spacing: 0.3px;
            }

            /* ختم تم البيع / التأجير الرسمي */
            #propertiesGrid span.-rotate-12,
            #modalDetailsContent span.-rotate-12 {
                transform: rotate(0deg) !important;
                border-radius: 6px !important;
                background-color: rgba(153, 27, 27, 0.92) !important;
                border: 1px solid rgba(255, 255, 255, 0.6) !important;
                font-size: 1.1rem !important;
                padding: 8px 24px !important;
            }

            /* الفيديو والإحصائيات وآراء العملاء */
            .vid-box {
                border-radius: 10px !important;
                border: 1px solid #cbd5e1;
                box-shadow: 0 15px 35px rgba(15, 23, 42, 0.12) !important;
            }

            .stats-bar, section.bg-slate-900 {
                background: var(--navy-primary) !important;
                border-top: 3px solid var(--gold-primary) !important;
            }

            .stat-tile {
                border-radius: 8px !important;
                background: rgba(255, 255, 255, 0.03) !important;
                border: 1px solid rgba(212, 175, 55, 0.2) !important;
            }

            /* الأزرار العائمة والشات */
            #floatWaBtn {
                animation: none !important;
                background-color: #128c7e !important;
                border: 2px solid #ffffff;
                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25) !important;
            }

            #floatChannelBtn {
                background-color: var(--navy-primary) !important;
                border: 1.5px solid var(--gold-light) !important;
                color: var(--gold-light) !important;
            }

            #openChatBtn {
                background-color: var(--navy-primary) !important;
                border: 2px solid var(--gold-light) !important;
                color: var(--gold-light) !important;
            }

            #siteChatWindow .bg-purple-600,
            #siteChatWindow button[type="submit"] {
                background-color: var(--navy-primary) !important;
                color: #ffffff !important;
            }

            /* النوافذ المنبثقة */
            [id$="Modal"] > div {
                border-radius: 10px !important;
                border-top: 4px solid var(--gold-primary) !important;
            }

            /* شاشة الانترو */
            #introScreen {
                background: radial-gradient(circle at center, #111c3a 0%, #070b19 100%) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // 3. تسريع شاشة الافتتاح لتختفي تلقائياً خلال 2.6 ثانية بشكل رسمي وأنيق
    window.addEventListener('DOMContentLoaded', function () {
        const screen = document.getElementById('introScreen');
        if (screen) {
            setTimeout(function () {
                screen.style.opacity = '0';
                setTimeout(function () {
                    screen.style.display = 'none';
                }, 450);
            }, 2600);
        }
    });
})();
