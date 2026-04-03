// ── Utilitário de sanitização ─────────────────────────
function esc(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Permite apenas tags inline seguras nos parágrafos do JSON
// (strong, em, a com href relativo/mailto)
function safeParagraph(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelectorAll('*').forEach(el => {
        const allowed = ['strong','em','a','span'];
        if (!allowed.includes(el.tagName.toLowerCase())) {
            el.replaceWith(document.createTextNode(el.textContent));
        }
        if (el.tagName.toLowerCase() === 'a') {
            const href = el.getAttribute('href') || '';
            if (!/^(https?:|mailto:|#)/.test(href)) el.removeAttribute('href');
            el.setAttribute('rel', 'noopener');
        }
        [...el.attributes].forEach(attr => {
            if (!['href','rel','title','class'].includes(attr.name)) el.removeAttribute(attr.name);
        });
    });
    return div.innerHTML;
}

// ── Nav shrink on scroll ──────────────────────────────
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── IntersectionObserver (fade-up) ────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
function observe(el) { observer.observe(el); }

// Observa elementos fade-up já presentes no HTML estático
document.querySelectorAll('.fade-up').forEach(observe);

// ── Loader genérico ───────────────────────────────────
async function loadJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${path}`);
    return res.json();
}

// ── HERO ──────────────────────────────────────────────
// Fonte: data/hero.json
loadJSON('data/hero.json').then(d => {
    const badgesHtml = d.badges.map(b =>
        `<span class="badge"><i class="${esc(b.icon)}"></i>&nbsp; ${esc(b.text)}</span>`
    ).join('');

    const ctaHtml = d.cta.map(c =>
        `<a href="${esc(c.href)}" class="btn ${esc(c.style)}"
            ${c.external ? 'target="_blank" rel="noopener"' : ''}>
            <i class="${esc(c.icon)}"></i> ${esc(c.label)}
        </a>`
    ).join('');

    document.getElementById('hero-content').innerHTML = `
        <div class="hero-eyebrow">${esc(d.eyebrow)}</div>
        <h1>${esc(d.headline)} <em>${esc(d.headline_em)}</em><br>${esc(d.headline_suffix)}</h1>
        <p class="hero-desc">${esc(d.description)}</p>
        <div class="hero-badges">${badgesHtml}</div>
        <div class="hero-cta">${ctaHtml}</div>`;

    if (d.photo) {
        document.getElementById('hero-visual').innerHTML =
            `<img src="${esc(d.photo)}" alt="${esc(d.photo_alt || 'Visual de destaque')}" loading="lazy">`;
    }

    const statsGrid = document.getElementById('stats-grid');
    d.stats.forEach((s, i) => {
        const el = document.createElement('div');
        el.className = 'stat-item fade-up';
        el.style.transitionDelay = `${i * 0.1}s`;
        el.innerHTML = `<span class="stat-number">${esc(s.number)}</span>
                        <span class="stat-label">${esc(s.label)}</span>`;
        statsGrid.appendChild(el);
        observe(el);
    });
}).catch(console.error);

// ── SOBRE ─────────────────────────────────────────────
// Fonte: data/sobre.json
loadJSON('data/sobre.json').then(d => {
    const parasHtml = d.paragraphs.map(p => `<p>${safeParagraph(p)}</p>`).join('');

    const highlightsHtml = d.highlights.map(h => `
        <div class="highlight-item">
            <div class="highlight-icon"><i class="${esc(h.icon)}"></i></div>
            <div class="highlight-text">
                <h4>${esc(h.title)}</h4>
                <p>${esc(h.description)}</p>
            </div>
        </div>`).join('');

    const photoHtml = d.photo
        ? `<div class="sobre-photo"><img src="${esc(d.photo)}" alt="${esc(d.photo_alt || 'Foto de perfil')}" loading="lazy"></div>`
        : '';

    const sobre = document.getElementById('sobre');
    sobre.innerHTML = `
        <div class="sobre-text fade-up">
            <span class="label-tag">${esc(d.label)}</span>
            <h2>${esc(d.title)}</h2>
            ${parasHtml}
        </div>
        <div class="sobre-right fade-up" style="transition-delay:.15s">
            ${photoHtml}
            <div class="sobre-highlights">${highlightsHtml}</div>
        </div>`;
    sobre.querySelectorAll('.fade-up').forEach(observe);
}).catch(console.error);

// ── ÁREAS ─────────────────────────────────────────────
// Fonte: data/areas.json
loadJSON('data/areas.json').then(d => {
    const cardsHtml = d.areas.map((a, i) => `
        <div class="expertise-card fade-up" style="transition-delay:${i * 0.1}s">
            <div class="card-icon"><i class="${esc(a.icon)}"></i></div>
            <h3>${esc(a.title)}</h3>
            <p>${esc(a.description)}</p>
        </div>`).join('');

    const expertise = document.getElementById('expertise');
    expertise.innerHTML = `
        <div class="section-header fade-up">
            <span class="label-tag">${esc(d.label)}</span>
            <h2>${esc(d.title)}</h2>
            <p class="section-sub">${esc(d.subtitle)}</p>
        </div>
        <div class="expertise-grid">${cardsHtml}</div>`;
    expertise.querySelectorAll('.fade-up').forEach(observe);
}).catch(console.error);

// ── CONTATO / FOOTER ──────────────────────────────────
// Fonte: data/contato.json
loadJSON('data/contato.json').then(d => {
    const socialHtml = d.social.map(s =>
        `<a href="${esc(s.href)}" title="${esc(s.title)}"><i class="${esc(s.icon)}"></i></a>`
    ).join('');

    const contactHtml = d.contact_items.map(c => {
        let inner;
        if (c.type === 'email') {
            inner = `<a href="mailto:${esc(c.value)}">${esc(c.label)}</a>`;
        } else if (c.type === 'link') {
            inner = `<a href="${esc(c.value)}" target="_blank" rel="noopener">${esc(c.label)}</a>`;
        } else {
            inner = `<span>${esc(c.label)}</span>`;
        }
        return `<div class="contact-item"><i class="${esc(c.icon)}"></i>${inner}</div>`;
    }).join('');

    document.getElementById('contato').innerHTML = `
        <div class="footer-top">
            <div class="footer-brand">
                <h3>${esc(d.name)}</h3>
                <p class="subtitle">${esc(d.subtitle)}</p>
                <p>${esc(d.availability)}</p>
                <div class="social-links">${socialHtml}</div>
            </div>
            <div class="footer-contact">
                <h4>Contato &amp; Links</h4>
                ${contactHtml}
            </div>
        </div>
        <div class="footer-bottom">
            <p>${esc(d.footer_copy)}</p>
            <p>${esc(d.footer_sub)}</p>
        </div>`;
}).catch(console.error);

// ── PUBLICAÇÕES ───────────────────────────────────────
// Fonte: data/publications.json
(async function loadPublications() {
    const grid    = document.getElementById('pub-grid');
    const loading = document.getElementById('pub-loading');
    const filters = document.getElementById('pub-filters');

    let publications = [];
    try {
        publications = await loadJSON('data/publications.json');
    } catch {
        loading.outerHTML = `<p class="pub-error">
            <i class="fas fa-exclamation-circle"></i>
            Não foi possível carregar as publicações. Verifique <code>data/publications.json</code>.
        </p>`;
        return;
    }

    publications.sort((a, b) => parseInt(b.year) - parseInt(a.year));

    const allTags = ['Todas', ...new Set(publications.flatMap(p => p.tags || []))];
    allTags.forEach((tag, i) => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn' + (i === 0 ? ' active' : '');
        btn.textContent = tag;
        btn.dataset.tag = tag;
        btn.addEventListener('click', () => applyFilter(tag));
        filters.appendChild(btn);
    });

    loading.remove();
    publications.forEach((pub, index) => {
        const card = document.createElement('div');
        card.className = 'pub-card visible fade-up';
        card.style.transitionDelay = `${index * 0.1}s`;
        card.dataset.tags = JSON.stringify(pub.tags || []);

        const tagsHtml = (pub.tags || [])
            .map(t => `<span class="pub-tag">${esc(t)}</span>`).join('');
        const linkLabel = pub.type === 'Tese de Doutorado' ? 'Acessar documento' : 'Acessar publicação';

        card.innerHTML = `
            <span class="pub-year">${esc(pub.year)}</span>
            <div class="pub-content">
                <div class="pub-journal">${esc(pub.journal)} · ${esc(pub.type)}</div>
                <a href="publication.html?id=${esc(pub.id)}" class="pub-title">
                    ${esc(pub.title)}
                </a>
                <p class="pub-desc">${esc(pub.description)}</p>
                <div class="pub-tag-list">${tagsHtml}</div>
                <a href="publication.html?id=${esc(pub.id)}" class="pub-link">
                    ${linkLabel} <i class="fas fa-arrow-right"></i>
                </a>
            </div>`;

        grid.appendChild(card);
        observe(card);
    });

    function applyFilter(tag) {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.tag === tag);
        });
        document.querySelectorAll('.pub-card').forEach(card => {
            const cardTags = JSON.parse(card.dataset.tags);
            card.classList.toggle('visible', tag === 'Todas' || cardTags.includes(tag));
        });
    }
})();
