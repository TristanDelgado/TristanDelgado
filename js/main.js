(function () {
    var currentUrl = window.location.href.split('#')[0];

    document.querySelectorAll('.site-nav a').forEach(function (link) {
        if (link.href.split('#')[0] === currentUrl) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
