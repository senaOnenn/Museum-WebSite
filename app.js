function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Ana sayfa kontrolü
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
        // Koleksiyonlar (period.html) sayfası kontrolü
        else if (href && href.includes('period.html') && currentUrl.includes('period.html')) {
            link.classList.add('active');
        }
        // Hakkında sayfası kontrolü
        else if (href === 'about.html' && currentPage === 'about.html') {
            link.classList.add('active');
        }
        // Kaynakça sayfası kontrolü
        else if (href === 'sources.html' && currentPage === 'sources.html') {
            link.classList.add('active');
        }
        else {
            link.classList.remove('active');
        }
    });
}

function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
        });
    }
}

function initThemeMode() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Kaydedilmiş temayı kontrol et
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');

        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}


function initRandomArtifactButton() {
    const randomBtn = document.getElementById('randomArtifactBtn');
    if (!randomBtn) return;

    randomBtn.addEventListener('click', (e) => {
        e.preventDefault();

        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const artifacts = data.artifacts;
                const randomArt = artifacts[Math.floor(Math.random() * artifacts.length)];
                window.location.href = `detail.html?artId=${randomArt.id}`;
            })
            .catch(err => {
                console.error('Rastgele eser yüklenemedi:', err);
                alert('Bir hata oluştu, lütfen tekrar deneyin.');
            });
    });
}

function renderPeriods(periods) {
    const grid = document.getElementById('period-grid');
    if (!grid) return;

    grid.innerHTML = periods.map(p => `
        <article class="period-card">
            <div class="image-wrapper">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="card-info">
                <h2>${p.name}</h2>
                <p>${p.description}</p>
                <a href="period.html?id=${p.id}" class="btn-kesfet">Keşfet <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

function renderArtifacts(artifacts, periodId, periods) {
    const grid = document.getElementById('artifact-grid');
    if (!grid) return;

    const periodInfo = periods.find(p => p.id === periodId);

    if (periodInfo) {
        document.title = `${periodInfo.name} Eserleri | Dönemlerin İzinde`;
        const headerElement = document.querySelector('#period-header-info h1');
        if (headerElement) {
            headerElement.innerText = `${periodInfo.name} Eserleri`;
        }
    }

    const filtered = artifacts.filter(a => a.periodId === periodId);

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="artifact-loading">Bu döneme ait eser bulunamadı.</p>';
        return;
    }

    grid.innerHTML = filtered.map(a => `
        <article class="period-card">
            <div class="image-wrapper">
                <img src="${a.image}" alt="${a.name}" loading="lazy">
            </div>
            <div class="card-info">
                <h2>${a.name}</h2>
                <p class="artifact-date">📅 ${a.date}</p>
                <p>${a.description.substring(0, 80)}...</p>
                <a href="detail.html?artId=${a.id}" class="btn-kesfet">Eseri İncele <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

function renderDetail(artifacts, artId) {
    const art = artifacts.find(a => a.id.toString() === artId.toString());

    if (!art) {
        const detailArea = document.getElementById('artifact-detail');
        if (detailArea) {
            detailArea.innerHTML = '<p class="detail-error-message">Eser bulunamadı.</p>';
        }
        return;
    }

    document.title = `${art.name} | Dönemlerin İzinde`;
    const detailArea = document.getElementById('artifact-detail');

    if (!detailArea) return;

    // detail.html'deki doğru ID'leri kullanarak içerikleri doldur
    const titleElement = document.getElementById('artifact-title');
    const dateElement = document.getElementById('artifact-date');
    const locationElement = document.getElementById('artifact-location');
    const funFactElement = document.getElementById('artifact-funfact');
    const historyElement = document.getElementById('artifact-history');
    const significanceElement = document.getElementById('artifact-significance');
    const museumNoteElement = document.getElementById('artifact-museumNote');
    const imgElement = document.getElementById('artifact-img');

    if (titleElement) titleElement.innerText = art.name;
    if (dateElement) dateElement.innerText = art.date;
    if (locationElement) locationElement.innerText = art.location;
    if (funFactElement) funFactElement.innerText = art.funFact || 'Bu eser hakkında ilginç bir bilgi henüz eklenmedi.';
    if (historyElement) historyElement.innerText = art.history || 'Tarihsel arka plan bilgisi bulunmuyor.';
    if (significanceElement) significanceElement.innerText = art.significance || 'Eserin önemi hakkında bilgi bulunmuyor.';
    if (museumNoteElement) museumNoteElement.innerText = art.museumNote || 'Müze notu bulunmuyor.';
    if (imgElement) {
        imgElement.src = art.image;
        imgElement.alt = art.name;
    }
}

function loadRandomArtifact() {
    // Sadece ana sayfada çalışsın
    if (!document.getElementById('spotlight-img')) return;

    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const artifacts = data.artifacts;
            const randomArt = artifacts[Math.floor(Math.random() * artifacts.length)];
            const period = data.periods.find(p => p.id === randomArt.periodId);

            const imgElement = document.getElementById('spotlight-img');
            const titleElement = document.getElementById('spotlight-title');
            const dateElement = document.getElementById('spotlight-date');
            const quoteElement = document.getElementById('spotlight-quote');
            const descElement = document.getElementById('spotlight-desc');
            const linkElement = document.getElementById('spotlight-link');

            if (imgElement) {
                imgElement.src = randomArt.image;
                imgElement.alt = randomArt.name;
            }
            if (titleElement) titleElement.innerText = randomArt.name;
            if (dateElement) dateElement.innerText = `${randomArt.date} — ${period?.name || ''}`;
            if (quoteElement) quoteElement.innerText = randomArt.funFact || 'Bu eser, insanlık tarihinin en önemli miraslarından biridir.';
            if (descElement) descElement.innerText = randomArt.description.substring(0, 150) + (randomArt.description.length > 150 ? '...' : '');
            if (linkElement) linkElement.href = `detail.html?artId=${randomArt.id}`;
        })
        .catch(err => console.error('Günün eseri yüklenemedi:', err));
}


document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initMobileMenu();

    initThemeMode();

    initRandomArtifactButton();

    loadRandomArtifact();

    const params = new URLSearchParams(window.location.search);
    const periodId = params.get('id');
    const artifactId = params.get('artId');

    fetch('data.json')
        .then(res => {
            if (!res.ok) throw new Error('JSON yüklenemedi!');
            return res.json();
        })
        .then(data => {
            if (document.getElementById('period-grid')) {
                renderPeriods(data.periods);
            }
            if (periodId && document.getElementById('artifact-grid')) {
                renderArtifacts(data.artifacts, periodId, data.periods);
            }
            if (artifactId && document.getElementById('artifact-detail')) {
                renderDetail(data.artifacts, artifactId);
            }
        })
        .catch(err => {
            console.error('Veri yüklenirken hata oluştu:', err);
            const errorDiv = document.createElement('div');
            errorDiv.className = 'data-error-message';
            errorDiv.innerText = 'Veriler yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.';
            document.querySelector('main')?.prepend(errorDiv);
        });
});