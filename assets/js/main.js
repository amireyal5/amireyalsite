function initApp() {
    // Accordion functionality
    const accordionItems = Array.from(document.querySelectorAll<HTMLElement>('.fl-accordion-item'));
    accordionItems.forEach(clickedItem => {
        const button = clickedItem.querySelector<HTMLElement>('.fl-accordion-button');
        if (button) {
            button.addEventListener('click', () => {
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

    // Mobile navigation toggle
    const navbarToggle = document.querySelector<HTMLElement>('.navbar-toggle');
    const navCollapse = document.querySelector<HTMLElement>('.fl-page-nav-collapse');

    const openNav = () => {
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
    };

    const closeNav = () => {
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
    };

    if (navbarToggle && navCollapse) {
        navbarToggle.addEventListener('click', () => {
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
    const postsContainer = document.querySelector<HTMLElement>('.blog-post-list-container');
    if (!postsContainer) return;

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

            const typeText = filterType === 'category' ? 'קטגוריה' : 'תגית';
            filterStatusContainer.innerHTML = `
                <h2>מציג מאמרים ב${typeText}: ${filterTerm}</h2>
                <a href="approach.html" class="clear-filter-btn">נקה סינון והצג הכל</a>
            `;

            let hasVisiblePost = false;
            posts.forEach(post => {
                const dataAttribute = filterType === 'category' ? post.dataset.categories : post.dataset.tags;
                const terms = dataAttribute ? dataAttribute.split(',').map(t => t.trim()) : [];

                if (terms.includes(filterTerm)) {
                    post.style.display = 'flex';
                    hasVisiblePost = true;
                } else {
                    post.style.display = 'none';
                }
            });

            if (!hasVisiblePost) {
                filterStatusContainer.innerHTML += `<p>לא נמצאו מאמרים התואמים את הסינון.</p>`;
            }

        } catch (e) {
            console.error("Error decoding hash:", e);
            posts.forEach(post => post.style.display = 'flex');
        }
    };

    window.addEventListener('hashchange', filterPosts);
    filterPosts(); // Initial run
}

// Call initApp and initBlogFilter when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initBlogFilter();
});
