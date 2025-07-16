
function initApp() {
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.fl-accordion-item');
    accordionItems.forEach(item => {
        const button = item.querySelector<HTMLElement>('.fl-accordion-button');
        const content = item.querySelector<HTMLElement>('.fl-accordion-content');
        
        if (button && content) {
            const icon = button.querySelector('.fl-accordion-button-icon');
            button.addEventListener('click', () => {
                const isExpanded = item.classList.contains('fl-accordion-item-active');
                
                // Close all other accordions
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('fl-accordion-item-active');
                        const otherContent = otherItem.querySelector<HTMLElement>('.fl-accordion-content');
                        if (otherContent) {
                            otherContent.style.maxHeight = null;
                        }
                        const otherIcon = otherItem.querySelector('.fl-accordion-button-icon');
                        if (otherIcon) {
                           otherIcon.classList.remove('fa-minus');
                           otherIcon.classList.add('fa-plus');
                        }
                    }
                });

                // Toggle the clicked accordion
                if (isExpanded) {
                    item.classList.remove('fl-accordion-item-active');
                    content.style.maxHeight = null;
                    if (icon) {
                       icon.classList.remove('fa-minus');
                       icon.classList.add('fa-plus');
                    }
                } else {
                    item.classList.add('fl-accordion-item-active');
                    content.style.maxHeight = content.scrollHeight + 'px';
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
    const closeNavButton = navCollapse?.querySelector<HTMLElement>('.close-nav-button');

    const openNav = () => {
        if (navCollapse) {
            navCollapse.classList.add('in');
            navCollapse.setAttribute('aria-hidden', 'false');
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

    if (closeNavButton) {
        closeNavButton.addEventListener('click', closeNav);
    }

    // Close nav on link click
    const navLinksInMenu = navCollapse?.querySelectorAll('a');
    navLinksInMenu?.forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // Close nav on escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navCollapse?.classList.contains('in')) {
            closeNav();
        }
    });


    // Set active nav link
    const currentFile = window.location.pathname.split('/').pop();
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

document.addEventListener('DOMContentLoaded', initApp);