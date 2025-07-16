function initApp() {
    console.log("initApp() is running!"); // וודא שהפונקציה הזו נקראת

    // Accordion functionality
    const accordionItems = Array.from(document.querySelectorAll<HTMLElement>('.fl-accordion-item'));
    console.log("Found accordion items:", accordionItems.length, accordionItems); // בדוק כמה אקורדיונים נמצאו ותדפיס אותם

    // ***** החלק שהיה חסר בטעות, ועכשיו חזר *****
    accordionItems.forEach(clickedItem => {
        const button = clickedItem.querySelector<HTMLElement>('.fl-accordion-button');
        if (button) {
            button.addEventListener('click', () => {
                console.log("Accordion button clicked!"); // בדוק אם הלחיצה נרשמת
                const wasActive = clickedItem.classList.contains('fl-accordion-item-active');

                // Close all items
                accordionItems.forEach(item => {
                    item.classList.remove('fl-accordion-item-active');
                    const content = item.querySelector<HTMLElement>('.fl-accordion-content');
                    const icon = item.querySelector<HTMLElement>('.fl-accordion-button-icon');
                    if (content) {
                        content.style.maxHeight = null;
                    }
                    if (icon) {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                });

                // If the clicked item wasn't active, open it.
                if (!wasActive) {
                    clickedItem.classList.add('fl-accordion-item-active');
                    const content = clickedItem.querySelector<HTMLElement>('.fl-accordion-content');
                    const icon = clickedItem.querySelector<HTMLElement>('.fl-accordion-button-icon');
                    if (content) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                    if (icon) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');
                    }
                }
            });
        }
    });
    // ***********************************************

    // Mobile navigation toggle
    const navbarToggle = document.querySelector<HTMLElement>('.navbar-toggle');
    const navCollapse = document.querySelector<HTMLElement>('.fl-page-nav-collapse');
    console.log("Navbar Toggle found:", !!navbarToggle, navbarToggle); // בדוק אם כפתור ההמבורגר נמצא
    console.log("Nav Collapse found:", !!navCollapse, navCollapse); // בדוק אם תפריט הניווט נמצא

    const openNav = () => {
        console.log("openNav() called. Current navCollapse classes:", navCollapse?.classList.value); // בדוק כיתות לפני הפתיחה
        if (navCollapse) {
            navCollapse.classList.add('in');
            navCollapse.setAttribute('aria-hidden', 'false');
            navCollapse.removeAttribute('inert'); // Added for accessibility
        }
        document.body.classList.add('nav-open');
        if (navbarToggle) {
            navbarToggle.setAttribute('aria-expanded', 'true');
            navbarToggle.classList.add('is-active');
        }
        console.log("openNav() finished. New navCollapse classes:", navCollapse?.classList.value); // בדוק כיתות אחרי הפתיחה
    };

    const closeNav = () => {
        console.log("closeNav() called. Current navCollapse classes:", navCollapse?.classList.value); // בדוק כיתות לפני הסגירה
        if (navCollapse) {
            navCollapse.classList.remove('in');
            navCollapse.setAttribute('aria-hidden', 'true');
            navCollapse.setAttribute('inert', ''); // Added for accessibility
        }
        document.body.classList.remove('nav-open');
        if (navbarToggle) {
            navbarToggle.setAttribute('aria-expanded', 'false');
            navbarToggle.classList.remove('is-active');
        }
        console.log("closeNav() finished. New navCollapse classes:", navCollapse?.classList.value); // בדוק כיתות אחרי הסגירה
    };

    if (navbarToggle && navCollapse) {
        navbarToggle.addEventListener('click', () => {
            console.log("Navbar toggle clicked! Checking navCollapse 'in' class:", navCollapse.classList.contains('in')); // בדוק מצב "in" בלחיצה
            if (navCollapse.classList.contains('in')) {
                closeNav();
            } else {
                openNav();
            }
        });
    }

    // Close nav on link click
    const navLinksInMenu = navCollapse ? Array.from(navCollapse.querySelectorAll('a')) : [];
    if (navLinksInMenu.length > 0) {
        navLinksInMenu.forEach(link => {
            link.addEventListener('click', closeNav);
        });
    }

    // Close nav on escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navCollapse?.classList.contains('in')) {
            closeNav();
        }
    });

    // Set active nav link
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.fl-page-nav .nav-link');

    navLinks.forEach(link => {
        const linkFile = link.getAttribute('href');
        if (link.parentElement) {
            link.parentElement.classList.remove('current-menu-item');

            if (linkFile === currentFile) {
                link.parentElement.classList.add('current-menu-item');
            } else if ((currentFile === '' || currentFile === 'index.html') && (linkFile === 'index.html')) {
                // This handles the case where the user is on the root path ('/' or '/index.html')
                link.parentElement.classList.add('current-menu-item');
            }
        }
    });
}

function initBlogFilter() {
    console.log("initBlogFilter() is running!"); // וודא שהפונקציה הזו נקראת
    const postsContainer = document.querySelector<HTMLElement>('.blog-post-list-container');
    if (!postsContainer) {
        console.log("No .blog-post-list-container found. Skipping blog filter.");
        return;
    }
    console.log("Found blog posts container.");

    const filterStatusContainer = document.createElement('div');
    filterStatusContainer.className = 'blog-filter-status';
    postsContainer.parentNode?.insertBefore(filterStatusContainer, postsContainer);

    const posts = Array.from(postsContainer.querySelectorAll<HTMLElement>('.blog-post-item'));
    const sidebarLinks = document.querySelectorAll<HTMLAnchorElement>('.blog-sidebar a');

    const filterPosts = () => {
        const hash = window.location.hash;
        filterStatusContainer.innerHTML = ''; // Clear previous status

        sidebarLinks.forEach(link => link.classList.remove('active-filter'));

        if (!hash || hash === '#') {
            posts.forEach(post => post.style.display = 'flex');
            return;
        }

        try {
            const decodedHash = decodeURIComponent(hash.substring(1));
            const [filterType, filterTerm] = decodedHash.split('-');

            if (!filterType || !filterTerm) {
                posts.forEach(post => post.style.display = 'flex');
                return;
            }

            const activeLink = document.querySelector<HTMLAnchorElement>(`.blog-sidebar a[href$="${hash}"]`);
            if(activeLink) activeLink.classList.add('active-filter');

            const typeText = filterType === 'category' ? 'קטגוריה' : 'ת
