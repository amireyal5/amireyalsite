/* Reset & General Setup */
:root {
    /* Updated Color Palette: "שלווה מקצועית" */
    --primary-color: #2C3E50; /* כחול כהה / כחול-אפור עמוק - לאלמנטים ראשיים, כותרות */
    --secondary-color: #457B9D; /* כחול בינוני/ירקרק-אפרפר - לאלמנטים משניים, קישורים */
    --accent-color: #759B7F; /* ירוק עמוק/מרווה - לכפתורי קריאה לפעולה, הדגשות */
    --text-color: #7F8C8D; /* אפור חם - לטקסט רגיל */
    --light-text-color: #fff; /* לבן - לטקסט על רקעים כהים */
    --background-color: #F4F1DE; /* בז' בהיר / קרם - לרקע ראשי */
    --light-background-color: #FDFBF6; /* קרם מעט בהיר יותר לווריאציות עדינות */

    /* New variables mapped to the "שלווה מקצועית" palette */
    --contrast-color: var(--primary-color); /* ממופה לצבע ראשי */
    --heading-color: var(--primary-color); /* ממופה לצבע ראשי */
    --light-accent-bg: color-mix(in srgb, var(--background-color) 90%, white); /* רקע בהיר יותר, נגזר מהרקע הראשי */
    --border-color: color-mix(in srgb, var(--text-color) 20%, white); /* גבול על בסיס צבע טקסט */

    --font-main: 'Heebo', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;
}

html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: var(--font-main);
    color: var(--text-color);
    background-color: var(--background-color); /* שימוש במשתנה */
    line-height: 1.6;
    direction: rtl;
}

a {
    color: var(--secondary-color); /* שימוש בצבע משני לקישורים */
    text-decoration: none;
    background-color: transparent;
    transition: color 0.3s;
}
a:hover {
    text-decoration: underline;
    color: var(--primary-color); /* כחול כהה יותר בריחוף */
}
a:active, a:hover {
    outline: 0;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0.5em;
    color: var(--heading-color); /* כותרות ראשיות משתמשות בצבע כותרת */
}
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }

p {
    margin: 0 0 1em 0;
}

ul {
    padding-right: 20px;
}

.container {
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.fl-page {
    overflow-x: hidden;
}

/* For sr-only labels */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}


/* Header */
.fl-page-header {
    background: var(--light-background-color); /* רקע בהיר לכותרת */
    border-bottom: 1px solid var(--border-color); /* גבול עדין */
    z-index: 1000;
    position: sticky;
    top: 0;
}

.fl-page-header-wrap {
    padding: 15px 0;
}

.fl-page-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.fl-logo-custom { display: inline-block; }
.fl-logo-custom:hover { text-decoration: none; }

.fl-logo-custom .fl-logo-main {
    font-size: 28px;
    font-weight: 700;
    color: var(--heading-color); /* שימוש בצבע כותרת */
    display: block;
    line-height: 1.2;
}
.fl-logo-custom .fl-logo-sub {
    font-size: 14px;
    color: var(--text-color); /* שימוש במשתנה צבע טקסט */
    display: block;
}

.fl-page-header-text {
    text-align: left;
    font-size: 14px;
}
.fl-page-header-text span {
    font-weight: bold;
    display: block;
    color: var(--text-color); /* שימוש בצבע טקסט */
    margin-bottom: 5px;
}

.header-contact-methods {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
}

.header-contact-methods a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    color: var(--text-color); /* שימוש בצבע טקסט */
}

.header-contact-methods a:hover {
    color: var(--secondary-color); /* שימוש בצבע משני בריחוף */
    text-decoration: none;
}

.header-contact-methods a i {
    color: var(--secondary-color); /* אייקונים משתמשים בצבע משני */
    font-size: 16px;
}

/* Navigation */
.fl-page-nav-wrap {
    background: var(--primary-color); /* רקע ניווט משתמש בצבע ראשי */
}
.navbar-default {
    border: none;
    background: transparent;
    margin: 0;
}
.fl-page-nav.navbar {
    padding: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-nav {
    display: flex;
    flex-direction: row;
    padding-right: 0;
    margin-bottom: 0;
    list-style: none;
}

.navbar-nav .nav-item .nav-link {
    color: var(--light-text-color);
    padding: 15px 20px;
    font-size: 16px;
    font-weight: 400;
    transition: background-color 0.3s;
    display: block;
}

.navbar-nav .nav-item.current-menu-item .nav-link,
.navbar-nav .nav-item .nav-link:hover {
    background-color: rgba(255,255,255,0.1);
    text-decoration: none;
}

.fl-nav-button {
    background-color: var(--accent-color); /* כפתור קריאה לפעולה משתמש בצבע מבטא */
    color: var(--light-text-color);
    padding: 10px 25px;
    border-radius: 5px;
    font-weight: bold;
    align-self: center;
    transition: background-color 0.3s, color 0.3s;
    white-space: nowrap;
}
.fl-nav-button:hover {
    background-color: color-mix(in srgb, var(--accent-color) 80%, black); /* מעט כהה יותר בריחוף */
    color: var(--light-text-color);
    text-decoration: none;
}

.navbar-toggle { display: none; }


/* Desktop Navigation Height Increase */
@media (min-width: 768px) {
    .fl-page-nav-collapse {
        display: flex !important;
        flex-basis: auto;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .navbar-nav .nav-item .nav-link {
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .fl-nav-button {
        padding: 15px 30px;
        margin-right: 20px;
    }
}


/* Mobile Navigation */
@media (max-width: 767.98px) {
    body.nav-open {
      overflow: hidden;
    }

    .fl-page-header-row {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .fl-page-header-logo { margin-bottom: 15px; }
    .fl-page-header-text { text-align: center; }

    .header-contact-methods {
        justify-content: center;
        gap: 10px 15px;
    }

    .navbar-toggle {
        display: block;
        padding: .25rem .75rem;
        font-size: 1.25rem;
        line-height: 1;
        background-color: transparent;
        border: 1px solid rgba(255,255,255,.5);
        border-radius: .25rem;
        color: white;
        margin: 10px 0;
        position: relative;
        width: 36px;
        height: 36px;
        transition: opacity 0.3s;
        cursor: pointer;
    }

    .navbar-toggle .icon-bar {
        background-color: #fff;
        height: 2px;
        width: 22px;
        display: block;
        margin: 4px auto;
        transition: all 0.3s ease-in-out;
        position: absolute;
        left: 6px;
        transform-origin: center;
    }

    .navbar-toggle .icon-bar:nth-child(2) {
        top: 9px;
    }
    .navbar-toggle .icon-bar:nth-child(3) {
        top: 15px;
    }
     .navbar-toggle .icon-bar:nth-child(4) {
        top: 21px;
    }
    
    .navbar-toggle.is-active .icon-bar:nth-child(2) {
        transform: translateY(6px) rotate(45deg);
    }
    .navbar-toggle.is-active .icon-bar:nth-child(3) {
        opacity: 0;
    }
    .navbar-toggle.is-active .icon-bar:nth-child(4) {
        transform: translateY(-6px) rotate(-45deg);
    }

    .fl-page-nav-collapse {
        visibility: hidden;
        opacity: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        z-index: 1001;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s, visibility 0.3s;
        padding: 20px;
        box-sizing: border-box;
    }

    .fl-page-nav-collapse.in {
        visibility: visible;
        opacity: 1;
    }

    .navbar-nav {
        flex-direction: column;
        width: 100%;
        text-align: center;
        padding: 0;
        margin: 0;
    }
    .navbar-nav .nav-item {
        width: 100%;
    }
    .navbar-nav .nav-item .nav-link {
        padding: 15px 20px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        font-size: 1.5rem;
        display: block;
    }
    .navbar-nav .nav-item:first-of-type .nav-link {
        border-top: 1px solid rgba(255,255,255,0.1);
    }
    .fl-nav-button {
        display: inline-block;
        text-align: center;
        margin: 30px 15px 15px;
        padding: 15px 30px;
        font-size: 1.2rem;
    }
}


/* Hero Section */
.fl-row-bg-photo {
    background-size: cover;
    background-position: center center;
    position: relative;
    padding: 120px 0;
    color: var(--light-text-color);
    text-align: center;
}
.fl-row-bg-overlay::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
}
.fl-row-content-wrap {
    position: relative;
    z-index: 2;
}
h1.fl-heading { color: #fff; }
.fl-heading .fl-heading-text {
    font-size: 3.25rem;
    font-weight: 700;
}
h2.fl-heading .fl-heading-text {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
}
.fl-node-page-hero h1 .fl-heading-text {
    font-size: 2.75rem;
}


/* General Content Styles */
.fl-row {
    padding: 60px 0;
}
.section-title {
    text-align: center;
    font-size: 2.25rem;
    margin-bottom: 40px;
    color: var(--heading-color);
}
.fl-row-content.fl-row-fixed-width {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
}

/* Intro Section on Homepage */
#intro-section {
    background-color: var(--light-accent-bg);
}

.intro-section-container {
    display: flex;
    align-items: center;
    gap: 40px;
}

.intro-image-col {
    flex: 0 0 220px; /* Fixed width for the image column */
    text-align: center;
}

/* Added rule to target the specific class name from your HTML for the profile image */
.intro-image-col img,
.amireyal_profile\.webp img { /* שימו לב ל-`\.` כדי לברוח מנקודה בשם המחלקה */
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 50%; /* זהו הכלל שהופך את התמונה לעגולה */
    border: 5px solid #fff;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.intro-text-col {
    flex: 1;
    min-width: 300px; /* Ensure it doesn't get too squished */
}

.intro-text-col h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: var(--heading-color);
}

.intro-text-col p {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1rem;
}

.intro-text-col .read-more-link {
    font-weight: bold;
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s;
    border-bottom: 2px solid var(--secondary-color);
    padding-bottom: 2px;
    display: inline-block;
}

.intro-text-col .read-more-link:hover {
    color: var(--secondary-color);
    border-bottom-color: var(--primary-color);
    text-decoration: none;
}


/* Home - Services Overview */
.services-cards-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}
.service-card {
    flex: 1;
    min-width: 280px;
    max-width: 350px;
    text-align: center;
    padding: 30px 20px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background: var(--light-background-color);
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
}
.service-card img {
    max-width: 80px;
    height: 80px;
    margin: 0 auto 15px auto;
    object-fit: contain;
}
.service-card h3 {
    color: var(--heading-color);
    font-size: 1.5rem;
}
.service-card p {
    font-size: 1rem;
    flex-grow: 1;
}
.service-card .fl-button {
    margin-top: auto;
}

.fl-button {
    background-color: var(--accent-color);
    color: var(--light-text-color);
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: bold;
    display: inline-block;
    transition: background-color 0.3s, color 0.3s;
    border: none;
}
.fl-button:hover {
    background-color: color-mix(in srgb, var(--accent-color) 80%, black);
    color: var(--light-text-color);
    text-decoration: none;
}

/* Page Content Common Styles */
.fl-rich-text { line-height: 1.8; }
.fl-col, .fl-col-group { position: relative; }
.fl-col-content { padding: 15px; }

/* About Page */
#about .fl-col-group {
    display: flex;
    align-items: center;
    gap: 30px;
}
.fl-photo-crop-circle .fl-photo-content img {
    border-radius: 50%;
    max-width: 200px;
}
.fl-col-small { flex: 0 0 250px; }


/* About Page - Audience Section */
#audience-section {
    background-color: var(--light-accent-bg);
}

.audience-cards-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.audience-card {
    flex: 1;
    min-width: 280px;
    max-width: 350px;
    padding: 30px 25px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background: var(--light-background-color);
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    text-align: right;
}

.audience-card h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.audience-card p {
    font-size: 1rem;
    flex-grow: 1;
    line-height: 1.7;
}

/* About Page - Approach & Experience */
#approach-experience .two-col-layout .text-col h3 {
    margin-bottom: 15px;
}
#approach-experience .highlight-box ul {
    list-style: none;
    padding-right: 0;
}
#approach-experience .highlight-box ul li {
    padding-right: 25px;
    margin-bottom: 10px;
    position: relative;
}
#approach-experience .highlight-box ul li::before {
    content: '✓';
    color: var(--secondary-color);
    position: absolute;
    right: 0;
    top: 2px;
}

/* Services Page */
.content-section {
    padding: 40px 0;
}
.content-section:first-child { padding-top: 0; }
.content-section h2, .content-section h3 {
    text-align: center;
    margin-bottom: 20px;
}
.content-section ul {
    list-style: none;
    padding-right: 0;
}
.content-section ul li {
    padding-right: 25px;
    margin-bottom: 10px;
    position: relative;
}
.content-section ul li::before {
    content: '✓';
    color: var(--accent-color);
    position: absolute;
    right: 0;
}
.two-col-layout {
    display: flex;
    gap: 40px;
    align-items: flex-start;
}
.two-col-layout .text-col { flex: 1; }
.two-col-layout .image-col { flex: 1; max-width: 45%; }
.two-col-layout .image-col img { max-width: 100%; border-radius: 5px;}
.highlight-box {
    background-color: var(--light-accent-bg);
    border-right: 5px solid var(--primary-color);
    padding: 30px;
    border-radius: 0 5px 5px 0;
    height: 100%;
    box-sizing: border-box;
}
.single-col-with-image img {
    display: block;
    max-width: 250px;
    margin: 30px auto 0;
    border-radius: 50%;
}
.fl-button-center {
    text-align: center;
}

/* FAQ Page */
#faq { background-color: var(--light-accent-bg); }
.fl-accordion {
    max-width: 800px;
    margin: 0 auto;
}
.fl-accordion-item {
    border-bottom: 1px solid var(--border-color);
}
.fl-accordion-button {
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.1rem;
    width: 100%;
    border: none;
    background: none;
    text-align: right;
    color: var(--heading-color);
}
.fl-accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    background: var(--light-background-color);
}
.fl-accordion-content p {
    padding: 20px;
    margin: 0;
}

/* Blog Page */
#blog-section {
    background-color: var(--light-background-color);
}

.blog-filter-status {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
}
.blog-filter-status h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}
.clear-filter-btn {
    font-weight: bold;
    color: var(--secondary-color);
}
.clear-filter-btn:hover {
    color: var(--primary-color);
}

.blog-post-list-container article {
    border-bottom: 1px solid var(--border-color);
}

.blog-post-list-container article:last-of-type {
    border-bottom: none;
}

.blog-post-item {
    display: flex;
    gap: 25px;
    padding: 40px 0;
    align-items: flex-start;
}

.blog-post-item-image {
    flex-shrink: 0;
    width: 280px;
    height: 180px;
    background-color: var(--primary-color);
    color: var(--light-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
}
.blog-post-item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}

.blog-post-item-content {
    flex: 1;
}

.blog-post-item-title {
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 10px;
}

.blog-post-item-title a {
    color: var(--heading-color);
    text-decoration: none;
    transition: color 0.2s;
}

.blog-post-item-title a:hover {
    color: var(--secondary-color);
}

.blog-post-item-excerpt {
    font-size: 1rem;
    color: var(--text-color);
    line-height: 1.7;
    margin: 0;
    flex-grow: 1;
    padding-bottom: 15px;
}

.blog-post-item-meta {
    font-size: 0.9rem;
    color: var(--text-color);
    margin-top: auto;
}


/* Contact Page */
#contact-page-container {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--background-color);
}

#contact-page-container .fl-row-content.fl-row-fixed-width {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
}

.contact-page-content {
    text-align: center;
}

.contact-header {
    margin-bottom: 30px;
}

.contact-profile-badge {
    display: inline-flex;
    align-items: center;
    background-color: var(--light-background-color);
    border-radius: 50px;
    padding: 8px 20px 8px 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    direction: rtl;
}

.contact-profile-badge img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 15px;
}

.contact-profile-badge span {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color);
}

.contact-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--heading-color);
}

.contact-intro {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-color);
    max-width: 650px;
    margin: 0 auto 30px auto;
}

#contact-page-container .contact-details-list {
    justify-content: center;
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
    padding: 0;
    list-style: none;
}

#contact-page-container .contact-details-list li {
    margin-bottom: 0;
}

#contact-page-container .contact-details-list a {
    color: var(--text-color);
    font-size: 1.1rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
}

#contact-page-container .contact-details-list a:hover {
    color: var(--secondary-color);
    text-decoration: none;
}

#contact-page-container .contact-details-list i {
    color: var(--secondary-color);
    margin-left: 10px;
    font-size: 20px;
}

.contact-form-container {
    background-color: var(--light-accent-bg);
    padding: 40px;
    border-radius: 8px;
    text-align: right;
    margin-top: 30px;
}

.contact-form-container .form-group {
    margin-bottom: 20px;
}

.contact-form-container label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 1rem;
    color: var(--text-color);
}

.contact-form-container input,
.contact-form-container textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
    transition: border-color .3s, box-shadow .3s;
}

.contact-form-container input:focus,
.contact-form-container textarea:focus {
    border-color: var(--contrast-color);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--contrast-color) 30%, transparent);
    outline: none;
}

.contact-form-container .fl-button {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    background-color: var(--secondary-color);
    border: none;
    color: var(--light-text-color);
}
.contact-form-container .fl-button:hover {
    background-color: color-mix(in srgb, var(--secondary-color) 80%, black);
    color: var(--light-text-color);
}


/* Footer */
.fl-page-footer-wrap {
    background-color: #2b2b2b;
    color: #a9a9a9;
    padding: 50px 0 20px 0;
    text-align: center;
}
.footer-cta {
    font-size: 1.5rem;
    color: #fff;
}
.footer-contact-info a {
    color: var(--secondary-color);
    margin: 0 15px;
    font-size: 1.25rem;
    font-weight: bold;
}
.footer-contact-info a:hover {
    color: #fff;
}
.footer-address { margin-top: 15px; font-size: 1.125rem; color: #fff;}
.footer-location-info {
    max-width: 600px;
    margin: 15px auto 0;
}
.footer-bottom-bar {
    border-top: 1px solid #444;
    padding-top: 20px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-nav-links a {
    color: #a9a9a9;
    margin: 0 10px;
}
.footer-social-links a {
    color: #a9a9a9;
    margin: 0 8px;
    font-size: 18px;
}
.fl-page-footer-text {
    margin-top: 30px;
    font-size: 13px;
    border-top: 1px solid #444;
    padding-top: 20px;
}

/* Scroll Down Arrow */
.scroll-down-arrow {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    color: #fff;
    font-size: 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.7);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
    animation: bounce-arrow 2s infinite ease-in-out;
}

.scroll-down-arrow:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    text-decoration: none;
}

@keyframes bounce-arrow {
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    40% {
        transform: translateX(-50%) translateY(-15px);
    }
    60% {
        transform: translateX(-50%) translateY(-7px);
    }
}

/* Responsive Adjustments */
@media (max-width: 991.98px) {
    .fl-heading .fl-heading-text { font-size: 2.75rem; }
    h2.fl-heading .fl-heading-text { font-size: 1.25rem; }
}

@media (max-width: 767.98px) {
    .fl-row { padding: 40px 0; }
    .fl-heading .fl-heading-text { font-size: 2rem; }
    h2.fl-heading .fl-heading-text { font-size: 1.1rem; }
    .section-title { font-size: 1.75rem; }

    .home-hero .scroll-down-arrow {
        display: none;
    }

    .intro-section-container {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
    .intro-image-col {
        flex-basis: auto;
    }
    .intro-image-col img {
        width: 180px;
        height: 180px;
    }
    .intro-text-col h2 {
        font-size: 1.8rem;
    }

    #about .fl-col-group,
    .two-col-layout {
        flex-direction: column;
    }
    #about .fl-col-small { text-align: center; flex-basis: auto; }
    .two-col-layout .image-col { max-width: 80%; margin: 20px auto 0; }
    
    #audience-section {
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .audience-card {
        text-align: center;
    }
    
    .blog-post-item {
        flex-direction: column;
    }

    .blog-post-item-image {
        width: 100%;
        height: 200px;
    }

    .contact-form-container {
        padding: 20px;
    }

    #contact-page-container .contact-details-list {
        flex-direction: column;
        gap: 20px;
    }

    .footer-contact-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .footer-bottom-bar { flex-direction: column; gap: 15px; }
}

@media (min-width: 992px) {
    .home-hero {
        padding-top: 240px;
        padding-bottom: 240px;
    }
}

/* CTA Section */
.cta-section-wrapper {
    background-color: var(--primary-color);
    padding: 60px 0;
    color: var(--text-color);
}
.cta-section-wrapper .cta-content {
    text-align: center;
}
.cta-section-wrapper h2 {
    color: var(--light-text-color);
    font-size: 2.5rem;
    margin-bottom: 15px;
}
.cta-section-wrapper p {
    font-size: 1.15rem;
    max-width: 700px;
    margin: 0 auto 30px auto;
    opacity: 0.9;
    color: var(--light-text-color);
}
.cta-form .form-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}
.cta-form .form-group {
    flex: 1 1 auto;
}
.cta-form input[type="text"],
.cta-form input[type="email"],
.cta-form input[type="tel"] {
    width: 100%;
    padding: 15px;
    border-radius: 30px;
    border: 1px solid transparent;
    font-family: var(--font-main);
    font-size: 1rem;
    box-sizing: border-box;
    text-align: right;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.cta-form input::placeholder {
    color: #888;
}
.cta-form input:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--secondary-color) 30%, transparent);
    outline: none;
}
.cta-form .btn-cta-orange {
    background-color: var(--accent-color);
    color: var(--light-text-color);
    border-radius: 30px;
    padding: 15px 35px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.2s;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.cta-form .btn-cta-orange:hover {
    background-color: color-mix(in srgb, var(--accent-color) 80%, black);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transform: translateY(1px);
    color: var(--light-text-color);
}

@media (min-width: 992px) {
    .cta-form .form-group {
       max-width: 280px;
    }
    .cta-form .form-group:last-child {
        flex-grow: 0;
        min-width: auto;
    }
     .cta-form .btn-cta-orange {
       width: auto;
    }
}

@media (max-width: 991.98px) {
    .cta-form .form-row {
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
    }
     .cta-form .form-group {
        width: 100%;
    }
}

@media (max-width: 767px) {
    .cta-section-wrapper h2 {
        font-size: 2rem;
    }
}

/* Blog Post Single Page */
#blog-post-section {
    background-color: var(--background-color);
    padding-top: 60px;
    padding-bottom: 60px;
}

.blog-post-full-content {
    max-width: 100%;
}

.blog-post-meta {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    flex-wrap: wrap;
    gap: 10px 25px;
    font-size: 0.9rem;
    color: var(--text-color);
}

.blog-post-meta span {
    display: inline-flex;
    align-items: center;
}

.blog-post-meta i {
    margin-left: 8px;
    color: var(--secondary-color);
}

.post-categories a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.2s;
}

.post-categories a:hover {
    color: var(--primary-color);
    text-decoration: underline;
}

.blog-post-body {
    line-height: 1.8;
    font-size: 1.1rem;
    color: var(--text-color);
}

.blog-post-body h2,
.blog-post-body h3,
.blog-post-body h4 {
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.4;
}

.blog-post-body h2 {
    font-size: 2rem;
    border-bottom: 2px solid var(--light-accent-bg);
    padding-bottom: 0.5em;
}

.blog-post-body h3 {
    font-size: 1.6rem;
}

.blog-post-body h4 {
    font-size: 1.3rem;
    color: var(--primary-color);
}


.blog-post-body p {
    margin-bottom: 1.5em;
}

.blog-post-body strong {
    font-weight: 600;
    color: var(--heading-color);
}

/* Blog Post Single Page Layout */
.blog-post-layout-container {
    display: flex;
    gap: 40px;
    align-items: flex-start;
}

.blog-post-main-content {
    flex: 1;
    min-width: 0; /* Prevents flexbox overflow */
}

.blog-sidebar {
    flex: 0 0 300px; /* Fixed width sidebar */
    position: sticky;
    top: 100px; /* Adjust based on header height */
}

.sidebar-widget {
    margin-bottom: 40px;
    background-color: var(--light-accent-bg);
    padding: 25px;
    border-radius: 5px;
}

.sidebar-widget .widget-title {
    font-size: 1.25rem;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--secondary-color);
    color: var(--heading-color);
}

.sidebar-widget ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar-widget ul li {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-color);
}
.sidebar-widget ul li:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.sidebar-widget ul li a {
    text-decoration: none;
    color: var(--text-color);
    transition: color 0.2s;
    font-weight: 500;
}

.sidebar-widget ul li a:hover {
    color: var(--primary-color);
}

.sidebar-widget ul li a.active-filter {
    font-weight: bold;
    color: var(--primary-color);
}


.sidebar-widget .tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.sidebar-widget .tag {
    display: inline-block;
    background-color: var(--light-background-color);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.2s;
}

.sidebar-widget .tag:hover, .sidebar-widget .tag.active-filter {
    background-color: var(--secondary-color);
    color: var(--light-text-color);
    border-color: var(--secondary-color);
    text-decoration: none;
}


/* Responsive for blog post layout */
@media (max-width: 991.98px) {
    .blog-post-layout-container {
        flex-direction: column;
    }
    .blog-sidebar {
        flex: 1 1 auto;
        width: 100%;
        position: static;
        margin-top: 40px;
    }
}
