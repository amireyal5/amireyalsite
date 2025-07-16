function initApp() {
    console.log("initApp() is running!");

    // Accordion functionality
    const accordionItems = Array.from(document.querySelectorAll('.fl-accordion-item'));
    console.log("Found accordion items:", accordionItems.length, accordionItems);

    accordionItems.forEach(clickedItem => {
        const button = clickedItem.querySelector('.fl-accordion-button');
        if (button) {
            button.addEventListener('click', () => {
                console.log("Accordion button clicked!");
                const wasActive = clickedItem.classList.contains('fl-accordion-item-active');

                // Close all items
                accordionItems.forEach(item => {
                    item.classList.remove('fl-accordion-item-active');
                    const content = item.querySelector('.fl-accordion-content');
                    const icon = item.querySelector('.fl-accordion-button-icon');
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
                    const content = clickedItem.querySelector('.fl-accordion-content');
                    const icon = clickedItem.querySelector('.fl-accordion-button-icon');
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
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navCollapse = document.querySelector('.fl-page-nav-collapse');
    console.log("Navbar Toggle found:", !!navbarToggle, navbarToggle);
    console.log("Nav Collapse found:", !!navCollapse, navCollapse);

    const openNav = () => {
        console.log("openNav() called. Current navCollapse classes:", navCollapse?.classList.value);
        if (navCollapse) {
            navCollapse.classList.add('in');
            navCollapse.setAttribute('aria-hidden', 'false');
            navCollapse.removeAttribute('inert');
        }
        document.body.classList.add('nav-open');
        if (navbarToggle) {
            navbarToggle.setAttribute('aria-expanded', 'true');
            navbarToggle.classList.add('is-active');
        }
        console.log("openNav() finished. New navCollapse classes:", navCollapse?.classList.value);
    };

    const closeNav = () => {
        console.log("closeNav() called. Current navCollapse classes:", navCollapse?.classList.value);
        if (navCollapse) {
            navCollapse.classList.remove('in');
            navCollapse.setAttribute('aria-hidden', 'true');
            navCollapse.setAttribute('inert', '');
        }
        document.body.classList.remove('nav-open');
        if (navbarToggle) {
            navbarToggle.setAttribute('aria-expanded', 'false');
            navbarToggle.classList.remove('is-active');
        }
        console.log("closeNav() finished. New navCollapse classes:", navCollapse?.classList.value);
    };

    if (navbarToggle && navCollapse) {
        navbarToggle.addEventListener('click', () => {
            console.log("Navbar toggle clicked! Checking navCollapse 'in' class:", navCollapse.classList.contains('in'));
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
    const navLinks = document.querySelectorAll('.fl-page-nav .nav-link');

    navLinks.forEach(link => {
        const linkFile = link.getAttribute('href');
        if (link.parentElement) {
            link.parentElement.classList.remove('current-menu-item');

            if (linkFile === currentFile) {
                link.parentElement.classList.add('current-menu-item');
            } else if ((currentFile === '' || currentFile === 'index.html') && (linkFile === 'index.html')) {
                link.parentElement.classList.add('current-menu-item');
            }
        }
    });
}

function initBlogFilter() {
    console.log("initBlogFilter() is running!");
    const postsContainer = document.querySelector('.blog-post-list-container');
    if (!postsContainer) {
        console.log("No .blog-post-list-container found. Skipping blog filter.");
        return;
    }
    console.log("Found blog posts container.");

    const filterStatusContainer = document.createElement('div');
    filterStatusContainer.className = 'blog-filter-status';
    postsContainer.parentNode?.insertBefore(filterStatusContainer, postsContainer);

    const posts = Array.from(postsContainer.querySelectorAll('.blog-post-item'));
    const sidebarLinks = document.querySelectorAll('.blog-sidebar a');

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

            const activeLink = document.querySelector(`.blog-sidebar a[href$="${hash}"]`);
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
                }
                else {
                    post.style.display = 'none';
                }
            });

            if (!hasVisiblePost) {
                filterStatusContainer.innerHTML += `<p>לא נמצאו מאמרים התואמים את הסינון.</p>`;
            }

        } catch (e) {
            console.error("Error decoding hash or filtering posts:", e);
            posts.forEach(post => post.style.display = 'flex');
        }
    };

    window.addEventListener('hashchange', filterPosts);
    filterPosts();
}

// Call initApp and initBlogFilter when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded event fired!");
    initApp();
    initBlogFilter();
});
