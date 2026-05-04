/* ==========================================================================
   EBRAR KILIÇ & BEYZA DEMİRTAŞ - Dinamik Müze Altyapısı
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
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
            console.error(err);
        });
});

function renderPeriods(periods) {
    const grid = document.getElementById('period-grid');
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
    const periodInfo = periods.find(p => p.id === periodId);

    if (periodInfo) {
        document.title = `${periodInfo.name} Eserleri`;
        document.querySelector('#period-header-info h1').innerText = `${periodInfo.name} Eserleri`;
    }

    const filtered = artifacts.filter(a => a.periodId === periodId);
    grid.innerHTML = filtered.map(a => `
        <article class="period-card">
            <div class="image-wrapper">
                <img src="${a.image}" alt="${a.name}" loading="lazy">
            </div>
            <div class="card-info">
                <h2>${a.name}</h2>
                <p style="font-weight: 500;">Tarih: ${a.date}</p>
                <p>${a.description.substring(0, 80)}...</p>
                <a href="detail.html?artId=${a.id}" class="btn-kesfet">Eseri İncele <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

function renderDetail(artifacts, artId) {
    // ID hem sayı hem metin olsa bile bulması için toString() yapıyoruz
    const art = artifacts.find(a => a.id.toString() === artId.toString());

    if (art) {
        document.title = `${art.name} | Müze Koleksiyonu`;
        const detailArea = document.getElementById('artifact-detail');

        // app.js içindeki renderDetail fonksiyonunun içi
        detailArea.innerHTML = `
    <div class="detail-layout">
        <!-- SOL TARAF: METİN KUTUSU -->
        <div class="detail-content">
            <div class="eser-kunyesi">${art.date} — ${art.location}</div>
            <h1 class="eser-ana-baslik">${art.name}</h1>
            
            <div class="profesyonel-metin-blogu">
                <h3>Tarihsel Arka Plan</h3>
                <p>${art.history || art.description}</p>
            </div>

            <div class="profesyonel-metin-blogu">
                <h3>Eserin Önemi</h3>
                <p>${art.significance || 'Bu eser döneminin en nadide parçalarından biridir.'}</p>
            </div>
        </div>

        <!-- SAĞ TARAF: RESİM KUTUSU -->
        <div class="detail-image">
            <img src="${art.image}" alt="${art.name}">
        </div>
    </div>
`;
    }
}