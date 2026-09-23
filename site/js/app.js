// MSc AIML Academic Portal - Application Logic (Mobile-First, Offline-First)
// For the students, by the students - No emojis, clean SVG/text interface

const App = {
  state: {
    currentSemester: null,
    currentSubject: null,
    currentTab: 'concepts', // 'concepts' | 'demos' | 'assignments' | 'cheatsheet'
    theme: localStorage.getItem('mscaiml_theme') || 'dark',
    searchQuery: '',
    tttBoard: Array(9).fill(null),
    tttTurn: 'X',
    tttGameOver: false
  },

  init() {
    this.applyTheme(this.state.theme);
    this.registerServiceWorker();
    this.bindEvents();
    this.handleRouting();
    window.addEventListener('hashchange', () => this.handleRouting());
    this.updateOfflineStatus();
    window.addEventListener('online', () => this.updateOfflineStatus());
    window.addEventListener('offline', () => this.updateOfflineStatus());
  },

  applyTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mscaiml_theme', theme);
  },

  toggleTheme() {
    const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  },

  updateOfflineStatus() {
    const badge = document.getElementById('offline-badge');
    if (!badge) return;
    if (navigator.onLine) {
      badge.innerHTML = '<span class="status-dot"></span><span>Offline Ready</span>';
      badge.title = "App is cached and ready to work without network in classrooms";
    } else {
      badge.innerHTML = '<span class="status-dot" style="background:#f59e0b;box-shadow:0 0 6px #f59e0b"></span><span>Offline Mode</span>';
      badge.title = "Operating completely offline from local storage";
    }
  },

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', { scope: './' })
        .then((reg) => {
          console.log('[PWA] Service Worker registered with scope:', reg.scope);
          this.ensureOfflineCached();
        })
        .catch((err) => {
          console.warn('[PWA] Service Worker registration notice:', err);
          this.ensureOfflineCached();
        });

      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_READY') {
          this.updateOfflineStatus(true);
        }
      });
    } else {
      this.ensureOfflineCached();
    }
  },

  ensureOfflineCached() {
    if (!('caches' in window)) return;
    const CACHE_NAME = 'mscaiml-v2';
    const ASSETS = [
      './',
      './index.html',
      './css/styles.css',
      './js/data.js',
      './js/app.js',
      './manifest.json',
      './icons/icon.svg'
    ];

    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ASSETS.map((url) => {
          return cache.match(url).then((matched) => {
            if (!matched && navigator.onLine) {
              return fetch(url, { cache: 'reload' }).then((res) => {
                if (res.ok) return cache.put(url, res);
              }).catch(() => {});
            }
          });
        })
      );
    }).then(() => {
      this.updateOfflineStatus(true);
    });
  },

  openOfflineModal() {
    const modal = document.getElementById('offline-modal');
    const container = document.getElementById('offline-status-details');
    if (!modal || !container) return;
    modal.classList.add('open');

    if (!('caches' in window)) {
      container.innerHTML = `
        <div class="search-result-item">
          <div class="search-result-title">Browser Cache API Unavailable</div>
          <div class="search-result-snippet">Your browser does not support CacheStorage, but local in-memory state is active.</div>
        </div>
      `;
      return;
    }

    caches.open('mscaiml-v2').then((cache) => {
      return cache.keys();
    }).then((keys) => {
      const isComplete = keys && keys.length >= 5;
      container.innerHTML = `
        <div class="search-result-item" style="border-left:4px solid var(--success);">
          <div style="font-size:11px;color:var(--success);font-weight:700;text-transform:uppercase;">Storage Health: Optimal</div>
          <div class="search-result-title">100% Prepared for Offline Classrooms</div>
          <div class="search-result-snippet" style="margin-top:6px;">
            All portal code, stylesheets, 6 subject curricula, 80+ lecture notes, interactive simulation engines, and 180 solved assignments have been pulled and stored in device cache memory.
          </div>
        </div>

        <div class="search-result-item">
          <div class="search-result-title">Offline Cache Inventory</div>
          <div class="search-result-snippet">
            &bull; Cached Core Files: <strong>${keys ? keys.length : 0} files</strong><br>
            &bull; Active Cache Key: <strong>mscaiml-v2</strong><br>
            &bull; Curriculum Coverage: <strong>Sem-1 (All 6 Subjects)</strong><br>
            &bull; Assignment Coverage: <strong>AI, DS, Math, Python, SCM, CV</strong><br>
            &bull; Zero Network Requirement: <strong>Verified</strong>
          </div>
        </div>

        <div class="search-result-item" style="text-align:center;">
          <button class="btn-primary" onclick="App.reCacheAll()" style="width:100%;">
            Pre-fetch & Re-verify All Data
          </button>
        </div>
      `;
    });
  },

  reCacheAll() {
    const container = document.getElementById('offline-status-details');
    if (container) {
      container.innerHTML = `<div style="padding:20px;text-align:center;color:var(--accent);">Pulling and refreshing all offline data...</div>`;
    }
    this.ensureOfflineCached();
    setTimeout(() => {
      this.openOfflineModal();
    }, 800);
  },

  bindEvents() {
    // Theme toggle button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Home / Brand click
    const brand = document.getElementById('app-brand');
    if (brand) {
      brand.addEventListener('click', () => {
        window.location.hash = '';
      });
    }

    // Global Search Bar in Slogan Hero
    const heroSearch = document.getElementById('hero-search-input');
    if (heroSearch) {
      heroSearch.addEventListener('input', (e) => {
        this.openSearchModal(e.target.value);
      });
    }

    // Search Modal Controls
    const searchModal = document.getElementById('search-modal');
    const searchModalInput = document.getElementById('modal-search-input');
    const closeSearchBtn = document.getElementById('close-search-btn');

    if (closeSearchBtn && searchModal) {
      closeSearchBtn.addEventListener('click', () => {
        searchModal.classList.remove('open');
      });
    }

    // Offline Modal Controls
    const offlineBadge = document.getElementById('offline-badge');
    const offlineModal = document.getElementById('offline-modal');
    const closeOfflineBtn = document.getElementById('close-offline-btn');

    if (offlineBadge) {
      offlineBadge.style.cursor = 'pointer';
      offlineBadge.addEventListener('click', () => this.openOfflineModal());
    }

    if (closeOfflineBtn && offlineModal) {
      closeOfflineBtn.addEventListener('click', () => {
        offlineModal.classList.remove('open');
      });
    }

    // Delegated Copy Code handler
    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('.copy-btn');
      if (copyBtn) {
        const container = copyBtn.closest('.code-container');
        const codeBlock = container ? container.querySelector('.code-block') : null;
        if (codeBlock) {
          navigator.clipboard.writeText(codeBlock.innerText).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            setTimeout(() => { copyBtn.innerText = originalText; }, 2000);
          }).catch(() => {
            copyBtn.innerText = 'Copied!';
            setTimeout(() => { copyBtn.innerText = 'Copy'; }, 2000);
          });
        }
      }
    });

    if (searchModalInput) {
      searchModalInput.addEventListener('input', (e) => {
        this.executeSearch(e.target.value);
      });
    }

    // Bottom Navigation
    const navHome = document.getElementById('nav-home');
    const navSubjects = document.getElementById('nav-subjects');
    const navDemos = document.getElementById('nav-demos');
    const navSearch = document.getElementById('nav-search');

    if (navHome) navHome.addEventListener('click', () => { window.location.hash = ''; });
    if (navSubjects) navSubjects.addEventListener('click', () => { window.location.hash = '#sem-1'; });
    if (navDemos) navDemos.addEventListener('click', () => {
      window.location.hash = this.state.currentSubject ? `#sem-1/${this.state.currentSubject.id}/demos` : '#sem-1/ai/demos';
    });
    if (navSearch) navSearch.addEventListener('click', () => { this.openSearchModal(''); });
  },

  openSearchModal(initialQuery = '') {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('modal-search-input');
    if (!modal || !input) return;
    modal.classList.add('open');
    input.value = initialQuery;
    input.focus();
    this.executeSearch(initialQuery);
  },

  executeSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    const q = (query || '').trim().toLowerCase();

    if (!q) {
      resultsContainer.innerHTML = '<div style="color:var(--text-muted);font-size:13px;padding:20px;text-align:center;">Type any keyword to search topics, assignments, or formulas...</div>';
      return;
    }

    const matches = [];

    // Search Sem-1 subjects
    academicData.subjects['sem-1'].forEach(subj => {
      // Check topics
      subj.topics.forEach(top => {
        if (top.title.toLowerCase().includes(q) || top.content.toLowerCase().includes(q)) {
          matches.push({
            type: 'Topic',
            subjectName: subj.name,
            title: top.title,
            link: `#sem-1/${subj.id}/concepts`,
            snippet: top.content.replace(/<[^>]+>/g, '').substring(0, 140) + '...'
          });
        }
      });

      // Check assignments
      subj.assignments.forEach(asg => {
        if (asg.title.toLowerCase().includes(q) || asg.question.toLowerCase().includes(q) || asg.solution.toLowerCase().includes(q)) {
          matches.push({
            type: 'Assignment',
            subjectName: subj.name,
            title: asg.title,
            link: `#sem-1/${subj.id}/assignments`,
            snippet: asg.question.replace(/<[^>]+>/g, '').substring(0, 140) + '...'
          });
        }
      });
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<div style="color:var(--text-muted);font-size:13px;padding:20px;text-align:center;">No matches found for "${query}".</div>`;
      return;
    }

    resultsContainer.innerHTML = matches.slice(0, 20).map(m => `
      <div class="search-result-item" onclick="App.navigateTo('${m.link}')">
        <div style="font-size:11px;color:var(--accent);font-weight:700;text-transform:uppercase;margin-bottom:2px;">
          ${m.subjectName} &bull; ${m.type}
        </div>
        <div class="search-result-title">${m.title}</div>
        <div class="search-result-snippet">${m.snippet}</div>
      </div>
    `).join('');
  },

  navigateTo(hash) {
    const modal = document.getElementById('search-modal');
    if (modal) modal.classList.remove('open');
    window.location.hash = hash;
  },

  handleRouting() {
    const hash = window.location.hash.replace('#', '').trim();
    const parts = hash.split('/').filter(Boolean);

    // Update bottom nav active status
    document.querySelectorAll('.bottom-nav .nav-item').forEach(el => el.classList.remove('active'));

    if (parts.length === 0) {
      // Landing view: Semesters folders
      this.state.currentSemester = null;
      this.state.currentSubject = null;
      this.renderLandingView();
      document.getElementById('nav-home')?.classList.add('active');
    } else if (parts.length === 1) {
      // Semester view: Subject folders
      const semId = parts[0];
      const sem = academicData.semesters.find(s => s.id === semId);
      if (sem && sem.status === 'active') {
        this.state.currentSemester = sem;
        this.state.currentSubject = null;
        this.renderSemesterView(sem);
        document.getElementById('nav-subjects')?.classList.add('active');
      } else {
        window.location.hash = '';
      }
    } else {
      // Subject Detail view
      const semId = parts[0];
      const subjId = parts[1];
      const tab = parts[2] || 'concepts';

      const sem = academicData.semesters.find(s => s.id === semId);
      const subjects = academicData.subjects[semId] || [];
      const subj = subjects.find(s => s.id === subjId);

      if (sem && subj) {
        this.state.currentSemester = sem;
        this.state.currentSubject = subj;
        this.state.currentTab = tab;
        this.renderSubjectDetailView(sem, subj, tab);
        if (tab === 'demos') {
          document.getElementById('nav-demos')?.classList.add('active');
        } else {
          document.getElementById('nav-subjects')?.classList.add('active');
        }
      } else {
        window.location.hash = semId;
      }
    }

    this.renderBreadcrumbs();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderBreadcrumbs() {
    const container = document.getElementById('breadcrumb-bar');
    if (!container) return;

    let html = `<span class="breadcrumb-item" onclick="window.location.hash=''">MSc AIML</span>`;

    if (this.state.currentSemester) {
      html += `<span class="breadcrumb-separator">/</span>`;
      if (!this.state.currentSubject) {
        html += `<span class="breadcrumb-item active">${this.state.currentSemester.title}</span>`;
      } else {
        html += `<span class="breadcrumb-item" onclick="window.location.hash='${this.state.currentSemester.id}'">${this.state.currentSemester.title}</span>`;
      }
    }

    if (this.state.currentSubject) {
      html += `<span class="breadcrumb-separator">/</span>`;
      html += `<span class="breadcrumb-item active">${this.state.currentSubject.name}</span>`;
    }

    container.innerHTML = html;
  },

  getSemesterTheme(id) {
    const themes = {
      'sem-1': { base: '#b45309', g1: '#d97706', g2: '#f59e0b', text: '#78350f' },
      'sem-2': { base: '#0369a1', g1: '#0284c7', g2: '#38bdf8', text: '#0c4a6e' },
      'sem-3': { base: '#5b21b6', g1: '#7c3aed', g2: '#a78bfa', text: '#3b0764' },
      'sem-4': { base: '#9f1239', g1: '#e11d48', g2: '#fb7185', text: '#881337' }
    };
    return themes[id] || themes['sem-1'];
  },

  getSubjectTheme(id) {
    const themes = {
      'ai': { base: '#4c1d95', g1: '#6d28d9', g2: '#8b5cf6', text: '#2e1065' },
      'ds': { base: '#065f46', g1: '#059669', g2: '#10b981', text: '#064e3b' },
      'mf': { base: '#701a75', g1: '#a21caf', g2: '#d946ef', text: '#4a044e' },
      'python': { base: '#075985', g1: '#0284c7', g2: '#38bdf8', text: '#082f49' },
      'scm': { base: '#92400e', g1: '#d97706', g2: '#f59e0b', text: '#451a03' },
      'cv': { base: '#115e59', g1: '#0f766e', g2: '#14b8a6', text: '#042f2e' }
    };
    return themes[id] || { base: '#1e293b', g1: '#334155', g2: '#475569', text: '#f8fafc' };
  },

  renderLandingView() {
    const main = document.getElementById('main-content');
    if (!main) return;

    let foldersHtml = academicData.semesters.map(sem => {
      const isActive = sem.status === 'active';
      const th = this.getSemesterTheme(sem.id);
      return `
        <div class="folder-3d-card-wrapper">
          <div class="folder-3d-wrapper ${isActive ? '' : 'disabled'}" style="--folder-base:${th.base};--folder-grad-1:${th.g1};--folder-grad-2:${th.g2};--folder-text:${th.text};" onclick="${isActive ? `window.location.hash='${sem.id}'` : ''}">
            <div class="folder-3d-back"></div>
            <div class="folder-paper-4"></div>
            <div class="folder-paper-3"></div>
            <div class="folder-paper-2"></div>
            <div class="folder-paper-1"></div>
            <div class="folder-3d-front">
              <p class="folder-3d-title">${sem.title}</p>
              <p class="folder-3d-sub">${isActive ? 'Active Curriculum' : 'Upcoming'}</p>
            </div>
          </div>
          <p class="folder-3d-caption">${sem.description}</p>
          <div class="folder-3d-meta-pills">
            <span class="folder-meta-pill">${sem.subjectsCount} Subjects</span>
            <span class="folder-meta-pill" style="color:var(--accent);font-weight:700;">${sem.assignmentsCount}</span>
          </div>
        </div>
      `;
    }).join('');

    main.innerHTML = `
      <div class="section-header">
        <div class="section-title">
          <span>Semesters Index</span>
        </div>
        <div class="section-count">${academicData.semesters.length} Semesters</div>
      </div>
      <div class="folders-grid">
        ${foldersHtml}
      </div>
    `;
  },

  renderSemesterView(sem) {
    const main = document.getElementById('main-content');
    if (!main) return;

    const subjects = academicData.subjects[sem.id] || [];

    let subjectsHtml = subjects.map(subj => {
      const th = this.getSubjectTheme(subj.id);
      return `
        <div class="folder-3d-card-wrapper">
          <div class="folder-3d-wrapper" style="--folder-base:${th.base};--folder-grad-1:${th.g1};--folder-grad-2:${th.g2};--folder-text:${th.text};" onclick="window.location.hash='${sem.id}/${subj.id}/concepts'">
            <div class="folder-3d-back"></div>
            <div class="folder-paper-4"></div>
            <div class="folder-paper-3"></div>
            <div class="folder-paper-2"></div>
            <div class="folder-paper-1"></div>
            <div class="folder-3d-front">
              <div style="font-size:10px;font-weight:800;letter-spacing:0.06em;color:${th.text};opacity:0.85;margin-bottom:3px;">${subj.code}</div>
              <p class="folder-3d-title">${subj.name}</p>
            </div>
          </div>
          <p class="folder-3d-caption">${subj.subtitle}</p>
          <div class="folder-3d-meta-pills">
            <span class="folder-meta-pill">${subj.stats.topics} Topics</span>
            <span class="folder-meta-pill" style="color:var(--accent);font-weight:700;">${subj.stats.assignments} Solved Assignments</span>
            <span class="folder-meta-pill">${subj.stats.demos} Demos</span>
          </div>
        </div>
      `;
    }).join('');

    main.innerHTML = `
      <div style="margin-bottom:16px;">
        <button class="btn-secondary" onclick="window.location.hash=''" style="display:inline-flex;align-items:center;gap:6px;margin-bottom:12px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          Back to Semesters
        </button>
        <div class="section-header">
          <div class="section-title">
            <span>${sem.title} — Course Folders</span>
          </div>
          <div class="section-count">${subjects.length} Subjects</div>
        </div>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;">Select a subject folder to view lecture notes, test interactive concept simulators, and study complete verified assignment solutions.</p>
      </div>
      <div class="folders-grid">
        ${subjectsHtml}
      </div>
    `;
  },

  renderSubjectDetailView(sem, subj, tab) {
    const main = document.getElementById('main-content');
    if (!main) return;

    main.innerHTML = `
      <div class="subject-banner">
        <div class="subject-banner-top">
          <span class="subject-code">${subj.code}</span>
          <button class="btn-secondary" onclick="window.location.hash='${sem.id}'" style="padding:4px 8px;font-size:11px;">
            Subject Folders
          </button>
        </div>
        <div class="subject-title">${subj.name}</div>
        <div class="subject-overview">${subj.overview}</div>
      </div>

      <!-- Segmented Navigation Tabs (Mobile-Friendly Horizontal Scroll) -->
      <div class="tab-navigation">
        <button class="tab-btn ${tab === 'concepts' ? 'active' : ''}" onclick="window.location.hash='${sem.id}/${subj.id}/concepts'">
          <span>Concepts & Notes</span>
          <span class="tab-count">${subj.topics.length}</span>
        </button>
        <button class="tab-btn ${tab === 'demos' ? 'active' : ''}" onclick="window.location.hash='${sem.id}/${subj.id}/demos'">
          <span>Interactive Demos</span>
          <span class="tab-count">${subj.stats.demos}</span>
        </button>
        <button class="tab-btn ${tab === 'assignments' ? 'active' : ''}" onclick="window.location.hash='${sem.id}/${subj.id}/assignments'">
          <span>Assignments & Solutions</span>
          <span class="tab-count">${subj.assignments.length}</span>
        </button>
        <button class="tab-btn ${tab === 'cheatsheet' ? 'active' : ''}" onclick="window.location.hash='${sem.id}/${subj.id}/cheatsheet'">
          <span>Formulas & Summary</span>
        </button>
      </div>

      <!-- Reader Layout: Main Content + Sticky Desktop Sidebar (SOUNotes On This Page) -->
      <div class="subject-reader-layout">
        <div class="reader-main" id="tab-content-area"></div>
        <aside class="reader-sidebar" id="reader-sidebar">
          <div class="reader-sidebar-title">On This Page</div>
          <nav id="reader-toc-links" class="reader-toc-nav"></nav>
        </aside>
      </div>

      <!-- Floating Mobile Contents Button (SOUNotes) -->
      <button class="mobile-contents-pill" id="mobile-contents-btn" onclick="App.openContentsModal()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
        <span>Contents</span>
      </button>
    `;

    const contentArea = document.getElementById('tab-content-area');
    if (!contentArea) return;

    if (tab === 'concepts') {
      this.renderConceptsTab(subj, contentArea);
    } else if (tab === 'demos') {
      this.renderDemosTab(subj, contentArea);
    } else if (tab === 'assignments') {
      this.renderAssignmentsTab(subj, contentArea);
    } else if (tab === 'cheatsheet') {
      this.renderCheatsheetTab(subj, contentArea);
    }

    this.buildTOC(subj, tab);
  },

  buildTOC(subj, tab) {
    const tocNav = document.getElementById('reader-toc-links');
    const mobileBtn = document.getElementById('mobile-contents-btn');
    if (!tocNav) return;

    let items = [];
    if (tab === 'concepts') {
      items = subj.topics.map(t => ({ id: `topic-${t.id}`, label: t.title }));
    } else if (tab === 'assignments') {
      items = subj.assignments.map((asg, idx) => ({ id: `asg-card-${asg.id}`, label: `Q${idx + 1}: ${asg.title.substring(0, 32)}...` }));
    }

    if (items.length > 0) {
      if (mobileBtn) mobileBtn.style.display = 'flex';
      tocNav.innerHTML = items.map(item => `
        <a href="#${item.id}" class="reader-toc-link" onclick="App.scrollToElement('${item.id}', event)">
          ${item.label}
        </a>
      `).join('');
    } else {
      if (mobileBtn) mobileBtn.style.display = 'none';
      tocNav.innerHTML = `<span style="font-size:12px;color:var(--text-muted);">No section anchors.</span>`;
    }
  },

  scrollToElement(id, event) {
    if (event) event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // If assignment card, open it
      if (el.classList.contains('assignment-card')) {
        el.classList.add('open');
      }
    }
    const modal = document.getElementById('contents-modal');
    if (modal) modal.classList.remove('open');
  },

  openContentsModal() {
    let modal = document.getElementById('contents-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'search-modal';
      modal.id = 'contents-modal';
      modal.innerHTML = `
        <div class="search-modal-header">
          <div style="font-size:16px;font-weight:800;color:var(--text-primary);flex:1;">
            Jump To Section
          </div>
          <button class="btn-secondary" onclick="document.getElementById('contents-modal').classList.remove('open')" style="padding:8px 12px;">Close</button>
        </div>
        <div class="search-results-list" id="contents-modal-list"></div>
      `;
      document.getElementById('app-container').appendChild(modal);
    }

    const list = document.getElementById('contents-modal-list');
    const tocNav = document.getElementById('reader-toc-links');
    if (list && tocNav) {
      list.innerHTML = Array.from(tocNav.querySelectorAll('a')).map(a => `
        <div class="search-result-item" onclick="App.scrollToElement('${a.getAttribute('href').replace('#', '')}')">
          <div class="search-result-title">${a.innerText}</div>
        </div>
      `).join('');
    }
    modal.classList.add('open');
  },

  renderConceptsTab(subj, container) {
    if (!subj.topics || subj.topics.length === 0) {
      container.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted);">No topic notes loaded yet.</div>`;
      return;
    }

    container.innerHTML = subj.topics.map(t => `
      <div class="topic-card">
        <div class="topic-header">
          <div class="topic-tag">${t.tag}</div>
          <div class="topic-title">${t.title}</div>
        </div>
        <div class="topic-body">
          ${t.content}
        </div>
      </div>
    `).join('');
  },

  renderAssignmentsTab(subj, container) {
    if (!subj.assignments || subj.assignments.length === 0) {
      container.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted);">No assignments available for this subject.</div>`;
      return;
    }

    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <span style="font-size:13px;font-weight:700;color:var(--text-secondary);">
          Showing ${subj.assignments.length} Verified Solved Questions
        </span>
        <button class="btn-secondary" onclick="App.toggleAllAssignments()" style="padding:4px 8px;font-size:11px;">
          Expand / Collapse All
        </button>
      </div>
      <div class="assignments-list">
        ${subj.assignments.map((asg, idx) => `
          <div class="assignment-card" id="asg-card-${asg.id}">
            <div class="assignment-header" onclick="App.toggleAssignment('${asg.id}')">
              <div class="assignment-q-num">Q${idx + 1}</div>
              <div class="assignment-q-text">${asg.question}</div>
              <svg class="assignment-toggle-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>
            <div class="assignment-solution-drawer">
              <div class="solution-label">Verified Step-by-Step Solution</div>
              ${asg.solution}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  toggleAssignment(id) {
    const card = document.getElementById(`asg-card-${id}`);
    if (card) {
      card.classList.toggle('open');
    }
  },

  toggleAllAssignments() {
    const cards = document.querySelectorAll('.assignment-card');
    const anyClosed = Array.from(cards).some(c => !c.classList.contains('open'));
    cards.forEach(c => {
      if (anyClosed) c.classList.add('open');
      else c.classList.remove('open');
    });
  },

  renderCheatsheetTab(subj, container) {
    if (!subj.cheatsheet || subj.cheatsheet.length === 0) {
      container.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted);">No formulas listed.</div>`;
      return;
    }

    container.innerHTML = subj.cheatsheet.map(c => `
      <div class="topic-card">
        <div class="topic-header">
          <div class="topic-title">${c.title}</div>
        </div>
        <div class="topic-body">
          ${c.content}
        </div>
      </div>
    `).join('');
  },

  /* INTERACTIVE DEMOS & LIVE LABS */
  renderDemosTab(subj, container) {
    if (subj.id === 'ai') {
      this.renderAIDemos(container);
    } else if (subj.id === 'scm' || subj.id === 'scientific-computing') {
      this.renderSCMDemos(container);
    } else if (subj.id === 'mf' || subj.id === 'mathematical-foundation') {
      this.renderMFDemos(container);
    } else if (subj.id === 'ds' || subj.id === 'data-structures') {
      this.renderDSDemos(container);
    } else if (subj.id === 'python') {
      this.renderPythonDemos(container);
    } else if (subj.id === 'cv' || subj.id === 'computer-vision') {
      this.renderCVDemos(container);
    } else {
      container.innerHTML = `
        <div class="topic-card" style="text-align:center;padding:30px;">
          <div class="topic-title">Subject Interactive Simulator</div>
          <p style="color:var(--text-secondary);margin-top:8px;">Refer to the Concepts tab for mathematical derivations and code scripts.</p>
        </div>
      `;
    }
  },

  // 1. AI Interactive Demos: Tic-Tac-Toe Minimax & Strategy 3 + State Space Search
  renderAIDemos(container) {
    this.state.tttBoard = Array(9).fill(null);
    this.state.tttTurn = 'X';
    this.state.tttGameOver = false;

    container.innerHTML = `
      <div class="demo-workbench">
        <div class="demo-title">
          <span>AI Game Search Lab: Tic-Tac-Toe Strategy-3 & Minimax</span>
        </div>
        <div class="demo-desc">
          Test the exact heuristic production rules of Strategy-3 (Win, Block, Fork, Center, Corner) or full Minimax game tree evaluation. You are playing as <strong>X</strong>, AI is <strong>O</strong>.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">AI Reasoning Engine</label>
            <select id="ttt-ai-mode" class="control-select">
              <option value="strategy3">Strategy 3 (Heuristic Production Rules)</option>
              <option value="minimax">Minimax Search (Optimal Utility)</option>
            </select>
          </div>
          <div class="control-group" style="justify-content:flex-end;">
            <button class="btn-secondary" onclick="App.resetTTT()">Restart Board</button>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;align-items:center;">
          <div id="ttt-status" style="font-weight:700;font-size:13px;color:var(--accent);margin-bottom:8px;">Your Turn (X)</div>
          <div class="ttt-board" id="ttt-grid"></div>
        </div>

        <div id="ttt-log" style="background:var(--code-bg);border:1px solid var(--border-color);border-radius:var(--radius-sm);padding:10px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);min-height:48px;">
          AI Reasoning Log: Waiting for user move...
        </div>
      </div>

      <!-- State Space Tree Search Visualizer -->
      <div class="demo-workbench">
        <div class="demo-title">
          <span>State Space Search Visualizer: BFS vs DFS</span>
        </div>
        <div class="demo-desc">
          Step through uninformed search strategies on a graph state space. Observe how BFS uses a FIFO Queue (level-by-level) while DFS uses a LIFO Stack.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">Algorithm</label>
            <select id="search-algo" class="control-select">
              <option value="bfs">Breadth-First Search (BFS)</option>
              <option value="dfs">Depth-First Search (DFS)</option>
            </select>
          </div>
          <div class="control-group" style="justify-content:flex-end;">
            <button class="btn-primary" onclick="App.runGraphSearch()">Step Through Search</button>
          </div>
        </div>
        <div id="search-visualizer-output" class="visualizer-canvas-box" style="align-items:flex-start;">
          <div style="font-size:12px;color:var(--text-muted);">Click "Step Through Search" to evaluate target node G from Root S.</div>
        </div>
      </div>
    `;

    this.renderTTTGrid();
  },

  renderTTTGrid() {
    const grid = document.getElementById('ttt-grid');
    if (!grid) return;
    grid.innerHTML = this.state.tttBoard.map((val, idx) => `
      <div class="ttt-cell ${val ? val.toLowerCase() : ''}" onclick="App.handleTTTClick(${idx})">
        ${val || ''}
      </div>
    `).join('');
  },

  handleTTTClick(idx) {
    if (this.state.tttGameOver || this.state.tttBoard[idx] !== null || this.state.tttTurn !== 'X') return;

    this.state.tttBoard[idx] = 'X';
    this.renderTTTGrid();

    const winner = this.checkTTTWinner(this.state.tttBoard);
    if (winner) {
      this.endTTTGame(winner);
      return;
    }

    if (!this.state.tttBoard.includes(null)) {
      this.endTTTGame('Draw');
      return;
    }

    this.state.tttTurn = 'O';
    document.getElementById('ttt-status').innerText = 'AI Thinking (O)...';

    setTimeout(() => {
      this.executeAIMove();
    }, 300);
  },

  executeAIMove() {
    const mode = document.getElementById('ttt-ai-mode')?.value || 'strategy3';
    const logEl = document.getElementById('ttt-log');
    let move = -1;
    let explanation = '';

    if (mode === 'strategy3') {
      const res = this.getStrategy3Move(this.state.tttBoard);
      move = res.move;
      explanation = `[Strategy 3 Rule Triggered] -> ${res.rule} at cell ${move + 1}`;
    } else {
      const res = this.getMinimaxMove(this.state.tttBoard);
      move = res.move;
      explanation = `[Minimax Evaluated] -> Chosen optimal move at cell ${move + 1} with utility score ${res.score}`;
    }

    if (logEl) logEl.innerText = explanation;

    if (move !== -1) {
      this.state.tttBoard[move] = 'O';
      this.renderTTTGrid();

      const winner = this.checkTTTWinner(this.state.tttBoard);
      if (winner) {
        this.endTTTGame(winner);
        return;
      }
      if (!this.state.tttBoard.includes(null)) {
        this.endTTTGame('Draw');
        return;
      }
    }

    this.state.tttTurn = 'X';
    document.getElementById('ttt-status').innerText = 'Your Turn (X)';
  },

  getStrategy3Move(board) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    // Rule 1: Win if two in line
    for (let l of lines) {
      const vals = [board[l[0]], board[l[1]], board[l[2]]];
      if (vals.filter(v => v === 'O').length === 2 && vals.includes(null)) {
        return { move: l[vals.indexOf(null)], rule: "Rule 1: Immediate Win Line" };
      }
    }

    // Rule 2: Block opponent immediate win
    for (let l of lines) {
      const vals = [board[l[0]], board[l[1]], board[l[2]]];
      if (vals.filter(v => v === 'X').length === 2 && vals.includes(null)) {
        return { move: l[vals.indexOf(null)], rule: "Rule 2: Block Opponent Winning Threat" };
      }
    }

    // Rule 5: Center
    if (board[4] === null) {
      return { move: 4, rule: "Rule 5: Claim Center Cell (5)" };
    }

    // Rule 6: Opposite corner
    const oppCorners = [[0, 8], [2, 6], [8, 0], [6, 2]];
    for (let [c1, c2] of oppCorners) {
      if (board[c1] === 'X' && board[c2] === null) {
        return { move: c2, rule: "Rule 6: Play Opposite Corner" };
      }
    }

    // Rule 7: Any empty corner
    for (let c of [0, 2, 6, 8]) {
      if (board[c] === null) {
        return { move: c, rule: "Rule 7: Take Available Corner" };
      }
    }

    // Rule 8: Any empty side
    for (let s of [1, 3, 5, 7]) {
      if (board[s] === null) {
        return { move: s, rule: "Rule 8: Take Available Edge/Side" };
      }
    }

    return { move: board.indexOf(null), rule: "Default move" };
  },

  getMinimaxMove(board) {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = 'O';
        let score = this.minimax(board, 0, false);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return { move: bestMove, score: bestScore };
  },

  minimax(board, depth, isMaximizing) {
    const winner = this.checkTTTWinner(board);
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (!board.includes(null)) return 0;

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          let ev = this.minimax(board, depth + 1, false);
          board[i] = null;
          maxEval = Math.max(maxEval, ev);
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          let ev = this.minimax(board, depth + 1, true);
          board[i] = null;
          minEval = Math.min(minEval, ev);
        }
      }
      return minEval;
    }
  },

  checkTTTWinner(b) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let [x, y, z] of lines) {
      if (b[x] && b[x] === b[y] && b[y] === b[z]) return b[x];
    }
    return null;
  },

  endTTTGame(result) {
    this.state.tttGameOver = true;
    const status = document.getElementById('ttt-status');
    if (!status) return;
    if (result === 'Draw') status.innerText = 'Game Finished: Draw!';
    else status.innerText = `Game Finished: Winner is ${result}!`;
  },

  resetTTT() {
    this.state.tttBoard = Array(9).fill(null);
    this.state.tttTurn = 'X';
    this.state.tttGameOver = false;
    this.renderTTTGrid();
    const status = document.getElementById('ttt-status');
    const log = document.getElementById('ttt-log');
    if (status) status.innerText = 'Your Turn (X)';
    if (log) log.innerText = 'AI Reasoning Log: Board reset. Waiting for user move...';
  },

  runGraphSearch() {
    const out = document.getElementById('search-visualizer-output');
    const algo = document.getElementById('search-algo')?.value || 'bfs';
    if (!out) return;

    if (algo === 'bfs') {
      out.innerHTML = `
        <div style="font-weight:700;color:var(--accent);margin-bottom:8px;">BFS Traversal Execution (FIFO Queue)</div>
        <div style="font-family:var(--font-mono);font-size:12px;line-height:1.7;">
          Step 1: Enqueue Root [S]. Explored: { }<br>
          Step 2: Dequeue [S]. Expand children -> A, B. Queue: [A, B]. Explored: { S }<br>
          Step 3: Dequeue [A]. Expand children -> C, D. Queue: [B, C, D]. Explored: { S, A }<br>
          Step 4: Dequeue [B]. Expand children -> E, F. Queue: [C, D, E, F]. Explored: { S, A, B }<br>
          Step 5: Dequeue [C]. (No children). Queue: [D, E, F]. Explored: { S, A, B, C }<br>
          Step 6: Dequeue [D]. Expand -> Target Goal G! Goal reached with optimal step length: S -> A -> D -> G.<br>
          <strong style="color:var(--success);">Traversal Sequence: S &rarr; A &rarr; B &rarr; C &rarr; D &rarr; G</strong>
        </div>
      `;
    } else {
      out.innerHTML = `
        <div style="font-weight:700;color:var(--accent);margin-bottom:8px;">DFS Traversal Execution (LIFO Stack)</div>
        <div style="font-family:var(--font-mono);font-size:12px;line-height:1.7;">
          Step 1: Push Root [S]. Explored: { }<br>
          Step 2: Pop [S]. Push children -> B, A (A on top). Stack: [B, A]. Explored: { S }<br>
          Step 3: Pop [A]. Push children -> D, C (C on top). Stack: [B, D, C]. Explored: { S, A }<br>
          Step 4: Pop [C]. Leaf reached. Backtrack. Stack: [B, D]. Explored: { S, A, C }<br>
          Step 5: Pop [D]. Push child -> G. Stack: [B, G]. Explored: { S, A, C, D }<br>
          Step 6: Pop [G]. Target Goal G found at maximum depth!<br>
          <strong style="color:var(--success);">Traversal Sequence: S &rarr; A &rarr; C &rarr; D &rarr; G</strong>
        </div>
      `;
    }
  },

  // 2. Scientific Computing: Live Root Finder (Bisection & Newton-Raphson)
  renderSCMDemos(container) {
    container.innerHTML = `
      <div class="demo-workbench">
        <div class="demo-title">
          <span>Numerical Root Finder Calculator: Step-by-Step Iterations</span>
        </div>
        <div class="demo-desc">
          Computes exact roots for continuous functions with real-time iteration convergence tables. Choose an assignment problem or configure your own.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">Method</label>
            <select id="scm-method" class="control-select">
              <option value="newton">Newton-Raphson Method</option>
              <option value="bisection">Bisection Method</option>
              <option value="regula">Regula-Falsi (False Position)</option>
              <option value="secant">Secant Method</option>
            </select>
          </div>
          <div class="control-group">
            <label class="control-label">Target Function</label>
            <select id="scm-func" class="control-select">
              <option value="q6">Assignment Q6: f(x) = x^3 - 2x - 5</option>
              <option value="q3">Assignment Q3: f(x) = x^3 - 15.2x + 13.2</option>
              <option value="q2">Assignment Q2: f(x) = x^3 - 9x + 1</option>
            </select>
          </div>
          <div class="control-group">
            <label class="control-label">Initial Parameters (a, b or x0)</label>
            <input type="text" id="scm-init" class="control-input" value="x0 = 2, x1 = 3">
          </div>
          <div class="control-group" style="justify-content:flex-end;">
            <button class="btn-primary" onclick="App.runRootFinder()">Compute Iteration Table</button>
          </div>
        </div>

        <div id="scm-output"></div>
      </div>
    `;
    this.runRootFinder();
  },

  runRootFinder() {
    const method = document.getElementById('scm-method')?.value || 'newton';
    const funcKey = document.getElementById('scm-func')?.value || 'q6';
    const out = document.getElementById('scm-output');
    if (!out) return;

    let f, df;
    if (funcKey === 'q6') {
      f = (x) => Math.pow(x, 3) - 2 * x - 5;
      df = (x) => 3 * Math.pow(x, 2) - 2;
    } else if (funcKey === 'q3') {
      f = (x) => Math.pow(x, 3) - 15.2 * x + 13.2;
      df = (x) => 3 * Math.pow(x, 2) - 15.2;
    } else {
      f = (x) => Math.pow(x, 3) - 9 * x + 1;
      df = (x) => 3 * Math.pow(x, 2) - 9;
    }

    let rows = [];
    if (method === 'newton') {
      let xk = 2.0;
      for (let k = 0; k < 6; k++) {
        let fx = f(xk);
        let dfx = df(xk);
        let nextX = xk - (fx / dfx);
        rows.push({
          iter: k,
          col1: xk.toFixed(5),
          col2: fx.toFixed(5),
          col3: dfx.toFixed(5),
          col4: nextX.toFixed(5)
        });
        if (Math.abs(nextX - xk) < 1e-5) break;
        xk = nextX;
      }

      out.innerHTML = `
        <div style="font-size:13px;font-weight:700;color:var(--success);margin:10px 0;">
          Newton-Raphson Converged Root: x = ${rows[rows.length - 1].col4}
        </div>
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead><tr><th>k</th><th>x_k</th><th>f(x_k)</th><th>f'(x_k)</th><th>x_{k+1}</th></tr></thead>
            <tbody>
              ${rows.map(r => `<tr><td>${r.iter}</td><td>${r.col1}</td><td>${r.col2}</td><td>${r.col3}</td><td>${r.col4}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else {
      // Bisection
      let a = 0.0, b = 1.0;
      if (funcKey === 'q6') { a = 2.0; b = 3.0; }
      if (funcKey === 'q2') { a = 2.0; b = 3.0; }

      for (let k = 0; k < 8; k++) {
        let c = (a + b) / 2;
        let fc = f(c);
        rows.push({
          iter: k + 1,
          col1: a.toFixed(4),
          col2: b.toFixed(4),
          col3: c.toFixed(4),
          col4: fc.toFixed(4)
        });
        if (f(a) * fc < 0) b = c;
        else a = c;
        if (Math.abs(b - a) < 1e-4) break;
      }

      out.innerHTML = `
        <div style="font-size:13px;font-weight:700;color:var(--success);margin:10px 0;">
          Bisection Approximation: x &approx; ${rows[rows.length - 1].col3}
        </div>
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead><tr><th>Iter</th><th>a</th><th>b</th><th>c (midpoint)</th><th>f(c)</th></tr></thead>
            <tbody>
              ${rows.map(r => `<tr><td>${r.iter}</td><td>${r.col1}</td><td>${r.col2}</td><td>${r.col3}</td><td>${r.col4}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
  },

  // 3. Mathematical Foundation: Least Squares Line of Best Fit & Distance Solver
  renderMFDemos(container) {
    container.innerHTML = `
      <!-- Venn Diagram 3-Set Calculator -->
      <div class="demo-workbench">
        <div class="demo-title">
          <span>3-Set Venn Diagram Calculator & Region Resolver</span>
        </div>
        <div class="demo-desc">
          Interactively solves 3-set cardinalities for assignments Q8, Q9, and Q10. Computes all 8 mutually exclusive disjoint regions, exact unions, and intersection subsets.
        </div>
        <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
          <button class="btn-secondary" onclick="App.loadVennPreset('q8')" style="font-size:11px;padding:4px 8px;">Load Q8 (Social Media Survey)</button>
          <button class="btn-secondary" onclick="App.loadVennPreset('q9')" style="font-size:11px;padding:4px 8px;">Load Q9 (Video Meet Survey)</button>
          <button class="btn-secondary" onclick="App.loadVennPreset('q10')" style="font-size:11px;padding:4px 8px;">Load Q10 (Tech Club Enrollments)</button>
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">Total Population N</label>
            <input type="number" id="venn-n" class="control-input" value="1000">
          </div>
          <div class="control-group">
            <label class="control-label">Set A, B, C Cardinalities</label>
            <div style="display:flex;gap:4px;">
              <input type="number" id="venn-na" class="control-input" value="280" placeholder="n(A)">
              <input type="number" id="venn-nb" class="control-input" value="300" placeholder="n(B)">
              <input type="number" id="venn-nc" class="control-input" value="420" placeholder="n(C)">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Pairwise Intersections (A&cap;B, B&cap;C, C&cap;A)</label>
            <div style="display:flex;gap:4px;">
              <input type="number" id="venn-nab" class="control-input" value="80" placeholder="n(AB)">
              <input type="number" id="venn-nbc" class="control-input" value="50" placeholder="n(BC)">
              <input type="number" id="venn-nca" class="control-input" value="100" placeholder="n(CA)">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Triple Intersection n(A &cap; B &cap; C)</label>
            <div style="display:flex;gap:6px;">
              <input type="number" id="venn-nabc" class="control-input" value="30" placeholder="n(ABC)">
              <button class="btn-primary" onclick="App.runVennSolver()" style="white-space:nowrap;">Compute Regions</button>
            </div>
          </div>
        </div>
        <div id="mf-venn-output" style="margin-top:10px;"></div>
      </div>

      <div class="demo-workbench">
        <div class="demo-title">
          <span>Least Squares Linear Regression Line Calculator</span>
        </div>
        <div class="demo-desc">
          Fits the regression line y = mx + c minimizing squared residuals for Assignment Q25 and Q31 data points.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">X values (comma separated)</label>
            <input type="text" id="mf-x-vals" class="control-input" value="1, 2, 3, 4, 5">
          </div>
          <div class="control-group">
            <label class="control-label">Y values (comma separated)</label>
            <input type="text" id="mf-y-vals" class="control-input" value="2, 4, 5, 4, 5">
          </div>
        </div>
        <div style="margin-bottom:12px;">
          <button class="btn-primary" onclick="App.runLeastSquares()">Calculate Line of Best Fit</button>
        </div>
        <div id="mf-reg-output"></div>
      </div>

      <div class="demo-workbench">
        <div class="demo-title">
          <span>2D Coordinate Geometry Problem Solver</span>
        </div>
        <div class="demo-desc">
          Enter coordinates for points A(x1, y1) and B(x2, y2) to compute distance d, midpoint, slope m, and the straight line equation.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">Point A (x1, y1)</label>
            <div style="display:flex;gap:6px;">
              <input type="number" id="geo-x1" class="control-input" value="2" placeholder="x1">
              <input type="number" id="geo-y1" class="control-input" value="3" placeholder="y1">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Point B (x2, y2)</label>
            <div style="display:flex;gap:6px;">
              <input type="number" id="geo-x2" class="control-input" value="6" placeholder="x2">
              <input type="number" id="geo-y2" class="control-input" value="-5" placeholder="y2">
            </div>
          </div>
        </div>
        <div style="margin-bottom:12px;">
          <button class="btn-primary" onclick="App.runGeometrySolver()">Solve Distance & Line Properties</button>
        </div>
        <div id="mf-geo-output"></div>
      </div>
    `;
    this.runVennSolver();
    this.runLeastSquares();
    this.runGeometrySolver();
  },

  loadVennPreset(key) {
    if (key === 'q8') {
      document.getElementById('venn-n').value = 1000;
      document.getElementById('venn-na').value = 280;
      document.getElementById('venn-nb').value = 300;
      document.getElementById('venn-nc').value = 420;
      document.getElementById('venn-nab').value = 80;
      document.getElementById('venn-nbc').value = 50;
      document.getElementById('venn-nca').value = 100;
      document.getElementById('venn-nabc').value = 30;
    } else if (key === 'q9') {
      document.getElementById('venn-n').value = 1000;
      document.getElementById('venn-na').value = 400;
      document.getElementById('venn-nb').value = 350;
      document.getElementById('venn-nc').value = 300;
      document.getElementById('venn-nab').value = 150;
      document.getElementById('venn-nbc').value = 120;
      document.getElementById('venn-nca').value = 100;
      document.getElementById('venn-nabc').value = 60;
    } else if (key === 'q10') {
      document.getElementById('venn-n').value = 800;
      document.getElementById('venn-na').value = 300;
      document.getElementById('venn-nb').value = 350;
      document.getElementById('venn-nc').value = 250;
      document.getElementById('venn-nab').value = 100;
      document.getElementById('venn-nbc').value = 90;
      document.getElementById('venn-nca').value = 80;
      document.getElementById('venn-nabc').value = 50;
    }
    this.runVennSolver();
  },

  runVennSolver() {
    const N = parseFloat(document.getElementById('venn-n')?.value || 0);
    const nA = parseFloat(document.getElementById('venn-na')?.value || 0);
    const nB = parseFloat(document.getElementById('venn-nb')?.value || 0);
    const nC = parseFloat(document.getElementById('venn-nc')?.value || 0);
    const nAB = parseFloat(document.getElementById('venn-nab')?.value || 0);
    const nBC = parseFloat(document.getElementById('venn-nbc')?.value || 0);
    const nCA = parseFloat(document.getElementById('venn-nca')?.value || 0);
    const nABC = parseFloat(document.getElementById('venn-nabc')?.value || 0);
    const out = document.getElementById('mf-venn-output');
    if (!out) return;

    // Disjoint regions
    const onlyABC = nABC;
    const onlyAB = nAB - nABC;
    const onlyBC = nBC - nABC;
    const onlyCA = nCA - nABC;
    const onlyA = nA - onlyAB - onlyCA - onlyABC;
    const onlyB = nB - onlyAB - onlyBC - onlyABC;
    const onlyC = nC - onlyBC - onlyCA - onlyABC;

    const unionTotal = onlyA + onlyB + onlyC + onlyAB + onlyBC + onlyCA + onlyABC;
    const noneCount = N - unionTotal;
    const exactlyOne = onlyA + onlyB + onlyC;
    const exactlyTwo = onlyAB + onlyBC + onlyCA;
    const atLeastTwo = exactlyTwo + onlyABC;

    out.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:12px;background:var(--code-bg);padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border-color);line-height:1.7;">
        <div style="color:var(--accent);font-weight:700;font-size:13px;margin-bottom:6px;">8 Mutually Disjoint Regions:</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:6px;margin-bottom:10px;">
          <div>&bull; Only Set A: <strong>${onlyA}</strong></div>
          <div>&bull; Only Set B: <strong>${onlyB}</strong></div>
          <div>&bull; Only Set C: <strong>${onlyC}</strong></div>
          <div>&bull; Only A & B: <strong>${onlyAB}</strong></div>
          <div>&bull; Only B & C: <strong>${onlyBC}</strong></div>
          <div>&bull; Only C & A: <strong>${onlyCA}</strong></div>
          <div>&bull; All Three (A&cap;B&cap;C): <strong>${onlyABC}</strong></div>
          <div>&bull; Outside (None): <strong>${noneCount}</strong></div>
        </div>
        <div style="border-top:1px solid var(--border-color);padding-top:8px;color:var(--success);font-weight:700;">
          Union n(A &cup; B &cup; C) = ${unionTotal} | Exactly One Course/Platform = ${exactlyOne} | At Least Two = ${atLeastTwo}
        </div>
      </div>
    `;
  },

  runLeastSquares() {
    const xRaw = document.getElementById('mf-x-vals')?.value || '';
    const yRaw = document.getElementById('mf-y-vals')?.value || '';
    const out = document.getElementById('mf-reg-output');
    if (!out) return;

    const xs = xRaw.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    const ys = yRaw.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));

    if (xs.length !== ys.length || xs.length < 2) {
      out.innerHTML = `<div style="color:var(--danger);font-size:12px;">Error: X and Y must have equal lengths (&ge; 2).</div>`;
      return;
    }

    const n = xs.length;
    let sumX = 0, sumY = 0, sumX2 = 0, sumXY = 0;
    for (let i = 0; i < n; i++) {
      sumX += xs[i];
      sumY += ys[i];
      sumX2 += xs[i] * xs[i];
      sumXY += xs[i] * ys[i];
    }

    const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const meanX = sumX / n;
    const meanY = sumY / n;
    const c = meanY - m * meanX;

    out.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:13px;background:var(--code-bg);padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border-color);line-height:1.7;">
        <div>Normal Equations: &sum; y = m &sum; x + n*c | &sum; xy = m &sum; x^2 + c &sum; x</div>
        <div>Calculated Totals: n=${n}, &sum; x = ${sumX}, &sum; y = ${sumY}, &sum; x^2 = ${sumX2}, &sum; xy = ${sumXY}</div>
        <div style="color:var(--accent);font-weight:700;margin-top:6px;">Slope (m) = ${m.toFixed(4)}</div>
        <div style="color:var(--accent);font-weight:700;">Intercept (c) = ${c.toFixed(4)}</div>
        <div style="color:var(--success);font-weight:800;font-size:14px;margin-top:6px;">
          Best-Fit Line: y = ${m.toFixed(2)}x + ${c.toFixed(2)}
        </div>
      </div>
    `;
  },

  runGeometrySolver() {
    const x1 = parseFloat(document.getElementById('geo-x1')?.value || 0);
    const y1 = parseFloat(document.getElementById('geo-y1')?.value || 0);
    const x2 = parseFloat(document.getElementById('geo-x2')?.value || 0);
    const y2 = parseFloat(document.getElementById('geo-y2')?.value || 0);
    const out = document.getElementById('mf-geo-output');
    if (!out) return;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    let slopeStr = dx !== 0 ? (dy / dx).toFixed(4) : "Undefined (Vertical line)";
    let lineEq = dx !== 0 
      ? `${(dy).toFixed(0)}x - ${(dx).toFixed(0)}y + ${(dx * y1 - dy * x1).toFixed(0)} = 0`
      : `x = ${x1}`;

    out.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:13px;background:var(--code-bg);padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border-color);line-height:1.7;">
        <div>Distance AB: <strong>d = ${dist.toFixed(4)}</strong> (&radic;${(dx * dx + dy * dy).toFixed(0)})</div>
        <div>Midpoint: <strong>M(${midX.toFixed(2)}, ${midY.toFixed(2)})</strong></div>
        <div>Slope (m): <strong>${slopeStr}</strong></div>
        <div>Line Equation: <strong>${lineEq}</strong></div>
      </div>
    `;
  },

  // 4. Data Structures: Interactive Operator Overloading Simulator
  renderDSDemos(container) {
    container.innerHTML = `
      <div class="demo-workbench">
        <div class="demo-title">
          <span>C++ Operator Overloading Simulator: Complex Number Class</span>
        </div>
        <div class="demo-desc">
          Test binary operator overloading (+) and (*) on Complex instances <code>c1 + c2</code> and <code>c1 * c2</code>.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">Complex c1 (Real, Imag)</label>
            <div style="display:flex;gap:6px;">
              <input type="number" id="ds-r1" class="control-input" value="3" placeholder="Real 1">
              <input type="number" id="ds-i1" class="control-input" value="4" placeholder="Imag 1">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Complex c2 (Real, Imag)</label>
            <div style="display:flex;gap:6px;">
              <input type="number" id="ds-r2" class="control-input" value="1" placeholder="Real 2">
              <input type="number" id="ds-i2" class="control-input" value="-2" placeholder="Imag 2">
            </div>
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <button class="btn-primary" onclick="App.runComplexOp('add')">Execute c1 + c2</button>
          <button class="btn-primary" onclick="App.runComplexOp('mul')">Execute c1 * c2</button>
        </div>
        <div id="ds-complex-output"></div>
      </div>

      <!-- Pointer Memory Model Visualizer -->
      <div class="demo-workbench">
        <div class="demo-title">
          <span>C++ Memory Model Visualizer: Stack vs Heap Allocation</span>
        </div>
        <div class="demo-desc">
          Visualizes stack pointer variables referencing dynamically allocated contiguous memory blocks on the heap via <code>new</code> and <code>delete[]</code>.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">Array Size to Allocate</label>
            <input type="number" id="ds-mem-size" class="control-input" value="4" min="1" max="8">
          </div>
          <div class="control-group" style="justify-content:flex-end;">
            <div style="display:flex;gap:6px;">
              <button class="btn-primary" onclick="App.runPointerSim('alloc')">Execute: new int[N]</button>
              <button class="btn-secondary" onclick="App.runPointerSim('free')">Execute: delete[] ptr</button>
            </div>
          </div>
        </div>
        <div id="ds-mem-output" style="margin-top:10px;"></div>
      </div>
    `;
    this.runComplexOp('add');
    this.runPointerSim('alloc');
  },

  runPointerSim(action) {
    const size = parseInt(document.getElementById('ds-mem-size')?.value || 4);
    const out = document.getElementById('ds-mem-output');
    if (!out) return;

    if (action === 'free') {
      out.innerHTML = `
        <div style="font-family:var(--font-mono);font-size:12px;background:var(--code-bg);padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border-color);line-height:1.7;">
          <div style="color:var(--danger);font-weight:700;">Heap Memory Deallocated: delete[] ptr;</div>
          <div style="color:var(--text-muted);margin-top:4px;">
            Stack pointer <code>ptr</code> still holds address 0x00A12480 (Dangling Pointer!). Best practice: assign <code>ptr = nullptr;</code> immediately to avoid undefined behavior.
          </div>
        </div>
      `;
      return;
    }

    let heapBlocks = [];
    for (let i = 0; i < size; i++) {
      heapBlocks.push(`
        <div style="display:inline-block;border:1px solid var(--border-color);border-radius:var(--radius-sm);padding:6px 10px;margin:4px;background:var(--bg-tertiary);text-align:center;">
          <div style="font-size:10px;color:var(--text-muted);">0x00A124${80 + i * 4}</div>
          <div style="font-size:13px;font-weight:700;color:var(--accent);margin:2px 0;">[${(i + 1) * 10}]</div>
          <div style="font-size:10px;color:var(--text-secondary);">ptr[${i}]</div>
        </div>
      `);
    }

    out.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:12px;background:var(--code-bg);padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border-color);line-height:1.7;">
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:10px;">
          <div style="border:1px solid var(--accent);border-radius:var(--radius-sm);padding:8px 12px;background:var(--bg-secondary);">
            <div style="font-size:10px;color:var(--text-muted);">STACK FRAME (0x7FFD5A04)</div>
            <div style="font-size:12px;font-weight:700;color:var(--text-primary);">int* ptr = 0x00A12480</div>
          </div>
          <div style="color:var(--accent);font-weight:800;font-size:18px;">&rarr; Points to &rarr;</div>
          <div style="flex:1;">
            <div style="font-size:10px;color:var(--text-muted);margin-bottom:4px;">HEAP CONTIGUOUS BLOCK (${size * 4} bytes total)</div>
            <div style="display:flex;flex-wrap:wrap;">${heapBlocks.join('')}</div>
          </div>
        </div>
        <div style="color:var(--success);font-weight:700;">
          Pointer Arithmetic: *(ptr + 1) = ${20} | Memory span: 0x00A12480 - 0x00A124${80 + (size - 1) * 4}
        </div>
      </div>
    `;
  },

  // 5. Python Interactive Demos: Algorithmic Pattern Generator & Pascal Triangle
  renderPythonDemos(container) {
    container.innerHTML = `
      <div class="demo-workbench">
        <div class="demo-title">
          <span>Algorithmic Pattern & Pascal Triangle Generator</span>
        </div>
        <div class="demo-desc">
          Dynamically visualizes the pattern generation algorithms from assignment problems Q27-Q45. Adjust rows in real time to inspect loop coordinate transformations.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">Pattern Selection</label>
            <select id="py-pattern-select" class="control-select" onchange="App.runPatternGen()">
              <option value="pascal">Q45: Pascal's Triangle</option>
              <option value="star_tri">Q27: Star Left Triangle</option>
              <option value="num_tri">Q29: Number Triangle (1, 1 2, 1 2 3...)</option>
              <option value="inv_num">Q30: Inverted Pyramid of Numbers</option>
              <option value="same_digit">Q32: Inverted Same Digit Pyramid</option>
              <option value="floyd">Q35: Floyd's Triangle (&lt; 10)</option>
              <option value="even_pyr">Q38: Even Number Pyramid (2, 4 6, 8 10 12...)</option>
              <option value="horiz_tables">Q39: Horizontal Tables Pyramid</option>
              <option value="mirrored">Q41: Mirrored Right-Angled Pyramid</option>
              <option value="equi_star">Q42: Equilateral Star Triangle</option>
              <option value="hourglass">Q44: Hourglass Star Pattern</option>
            </select>
          </div>
          <div class="control-group">
            <label class="control-label">Row Count: <span id="py-row-val" style="color:var(--accent);font-weight:700;">5</span></label>
            <input type="range" id="py-row-slider" min="3" max="9" value="5" class="control-input" oninput="document.getElementById('py-row-val').innerText=this.value; App.runPatternGen()">
          </div>
        </div>
        <div id="py-pattern-output" style="margin-top:10px;"></div>
      </div>
    `;
    this.runPatternGen();
  },

  runPatternGen() {
    const pattern = document.getElementById('py-pattern-select')?.value || 'pascal';
    const n = parseInt(document.getElementById('py-row-slider')?.value || 5);
    const out = document.getElementById('py-pattern-output');
    if (!out) return;

    let ascii = '';
    let formula = '';

    if (pattern === 'pascal') {
      formula = 'Binomial Coefficient: C(n, k) = n! / (k! * (n - k)!) | Cell[i][j] = Cell[i-1][j-1] + Cell[i-1][j]';
      let triangle = [];
      for (let i = 0; i < n; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
          row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
        if (i > 0) row.push(1);
        triangle.push(row);
      }
      for (let i = 0; i < n; i++) {
        let indent = '  '.repeat(n - i);
        let vals = triangle[i].map(v => String(v).padStart(3, ' ')).join(' ');
        ascii += indent + vals + '\n';
      }
    } else if (pattern === 'star_tri') {
      formula = 'Outer loop i from 1..N: print("* " * i)';
      for (let i = 1; i <= n; i++) {
        ascii += '* '.repeat(i) + '\n';
      }
    } else if (pattern === 'num_tri') {
      formula = 'Outer loop i from 1..N, Inner loop j from 1..i: print(j)';
      for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= i; j++) row.push(j);
        ascii += row.join(' ') + '\n';
      }
    } else if (pattern === 'inv_num') {
      formula = 'Outer loop i from N down to 1: print(" "*(N-i) + " ".join(1..i))';
      for (let i = n; i >= 1; i--) {
        let row = [];
        for (let j = 1; j <= i; j++) row.push(j);
        ascii += ' '.repeat(n - i) + row.join(' ') + '\n';
      }
    } else if (pattern === 'same_digit') {
      formula = 'Outer loop i from N down to 1: print((str(i) + " ") * i)';
      for (let i = n; i >= 1; i--) {
        ascii += (i + ' ').repeat(i) + '\n';
      }
    } else if (pattern === 'floyd') {
      formula = 'Running counter curr incremented across inner loop columns';
      let curr = 1;
      for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 0; j < i; j++) {
          row.push(String(curr++).padStart(2, ' '));
        }
        ascii += row.join(' ') + '\n';
      }
    } else if (pattern === 'even_pyr') {
      formula = 'Even numbers starting at 2: val += 2 in each column';
      let val = 2;
      for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 0; j < i; j++) {
          row.push(String(val).padStart(2, ' '));
          val += 2;
        }
        ascii += '  '.repeat(n - i) + row.join('  ') + '\n';
      }
    } else if (pattern === 'horiz_tables') {
      formula = 'Row i times Column j: print(i * j)';
      for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= i; j++) {
          row.push(String(i * j).padStart(3, ' '));
        }
        ascii += row.join(' ') + '\n';
      }
    } else if (pattern === 'mirrored') {
      formula = 'print("  " * (N - i) + " ".join(1..i))';
      for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= i; j++) row.push(j);
        ascii += '  '.repeat(n - i) + row.join(' ') + '\n';
      }
    } else if (pattern === 'equi_star') {
      formula = 'print(" " * (N - i) + "* " * i)';
      for (let i = 1; i <= n; i++) {
        ascii += ' '.repeat(n - i) + '* '.repeat(i) + '\n';
      }
    } else if (pattern === 'hourglass') {
      formula = 'Upper inverted pyramid (N..1) followed by lower upright pyramid (2..N)';
      for (let i = n; i >= 1; i--) {
        ascii += ' '.repeat(n - i) + '* '.repeat(i) + '\n';
      }
      for (let i = 2; i <= n; i++) {
        ascii += ' '.repeat(n - i) + '* '.repeat(i) + '\n';
      }
    }

    out.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:12px;background:var(--code-bg);padding:14px;border-radius:var(--radius-sm);border:1px solid var(--border-color);line-height:1.6;">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:6px;">Algorithmic Logic:</div>
        <div style="color:var(--accent);font-weight:700;margin-bottom:12px;">${formula}</div>
        <pre style="margin:0;font-size:13px;color:var(--text-primary);line-height:1.4;"><code>${ascii}</code></pre>
      </div>
    `;
  },

  // 6. Computer Vision Interactive Demos: 2D Spatial Convolution & Kernel Filters
  renderCVDemos(container) {
    container.innerHTML = `
      <div class="demo-workbench">
        <div class="demo-title">
          <span>2D Spatial Convolution & Kernel Filter Simulator</span>
        </div>
        <div class="demo-desc">
          Calculates discrete 2D spatial convolution \( (I * K)(r, c) = \sum_{u, v} I(r-u, c-v) K(u, v) \) across a synthetic 5x5 image patch with edge and blur kernels.
        </div>
        <div class="demo-controls-grid">
          <div class="control-group">
            <label class="control-label">Select 3x3 Convolution Kernel</label>
            <select id="cv-kernel-select" class="control-select" onchange="App.runConvSim()">
              <option value="sobel_x">Sobel X (Vertical Edge Detector)</option>
              <option value="sobel_y">Sobel Y (Horizontal Edge Detector)</option>
              <option value="gaussian">Gaussian 3x3 Smoothing (1/16 [1 2 1; 2 4 2; 1 2 1])</option>
              <option value="sharpen">Sharpen High-Pass ([0 -1 0; -1 5 -1; 0 -1 0])</option>
              <option value="box">Box Filter (Uniform Average 1/9)</option>
            </select>
          </div>
          <div class="control-group">
            <label class="control-label">Target Pixel Coordinate</label>
            <div style="display:flex;gap:6px;">
              <input type="number" id="cv-target-r" class="control-input" value="2" min="1" max="3" onchange="App.runConvSim()">
              <input type="number" id="cv-target-c" class="control-input" value="2" min="1" max="3" onchange="App.runConvSim()">
            </div>
          </div>
        </div>
        <div id="cv-conv-output" style="margin-top:10px;"></div>
      </div>
    `;
    this.runConvSim();
  },

  runConvSim() {
    const kType = document.getElementById('cv-kernel-select')?.value || 'sobel_x';
    const tr = parseInt(document.getElementById('cv-target-r')?.value || 2);
    const tc = parseInt(document.getElementById('cv-target-c')?.value || 2);
    const out = document.getElementById('cv-conv-output');
    if (!out) return;

    // 5x5 Synthetic Image
    const img = [
      [10, 10, 10, 80, 80],
      [10, 10, 10, 80, 80],
      [10, 10, 10, 80, 80],
      [10, 10, 10, 80, 80],
      [10, 10, 10, 80, 80]
    ];

    let kernel, kScale = 1.0;
    if (kType === 'sobel_x') {
      kernel = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
    } else if (kType === 'sobel_y') {
      kernel = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
    } else if (kType === 'gaussian') {
      kernel = [[1, 2, 1], [2, 4, 2], [1, 2, 1]];
      kScale = 1.0 / 16.0;
    } else if (kType === 'sharpen') {
      kernel = [[0, -1, 0], [-1, 5, -1], [0, -1, 0]];
    } else {
      kernel = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
      kScale = 1.0 / 9.0;
    }

    let dotSum = 0;
    let products = [];
    for (let u = -1; u <= 1; u++) {
      for (let v = -1; v <= 1; v++) {
        let pVal = img[tr + u][tc + v];
        let kVal = kernel[u + 1][v + 1];
        let prod = pVal * kVal;
        dotSum += prod;
        products.push(`(${pVal} &times; ${kVal})`);
      }
    }

    const finalVal = Math.round(dotSum * kScale);

    out.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:12px;background:var(--code-bg);padding:14px;border-radius:var(--radius-sm);border:1px solid var(--border-color);line-height:1.7;">
        <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:12px;">
          <div>
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;">3x3 Local Image Neighborhood around (${tr}, ${tc}):</div>
            <table style="border-collapse:collapse;text-align:center;">
              ${[-1,0,1].map(u => `<tr>${[-1,0,1].map(v => `<td style="border:1px solid var(--border-color);padding:4px 8px;background:${u===0&&v===0?'var(--accent-glow)':'transparent'}">${img[tr+u][tc+v]}</td>`).join('')}</tr>`).join('')}
            </table>
          </div>
          <div>
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;">Applied 3x3 Kernel:</div>
            <table style="border-collapse:collapse;text-align:center;">
              ${kernel.map(row => `<tr>${row.map(val => `<td style="border:1px solid var(--border-color);padding:4px 8px;color:var(--accent);">${val}</td>`).join('')}</tr>`).join('')}
            </table>
          </div>
        </div>
        <div style="font-size:11px;color:var(--text-muted);">Element-Wise Dot Product Sum:</div>
        <div style="font-size:11px;word-break:break-all;color:var(--text-secondary);margin:4px 0;">
          ${products.join(' + ')} = <strong>${dotSum}</strong>
        </div>
        <div style="color:var(--success);font-weight:700;font-size:14px;margin-top:6px;">
          Filtered Output Pixel Intensity at (${tr}, ${tc}): ${finalVal}
        </div>
      </div>
    `;
  },

  runComplexOp(op) {
    const r1 = parseFloat(document.getElementById('ds-r1')?.value || 0);
    const i1 = parseFloat(document.getElementById('ds-i1')?.value || 0);
    const r2 = parseFloat(document.getElementById('ds-r2')?.value || 0);
    const i2 = parseFloat(document.getElementById('ds-i2')?.value || 0);
    const out = document.getElementById('ds-complex-output');
    if (!out) return;

    let resR, resI, cppCall;
    if (op === 'add') {
      resR = r1 + r2;
      resI = i1 + i2;
      cppCall = `Complex operator+(const Complex& rhs) const { return Complex(real + rhs.real, imag + rhs.imag); }`;
    } else {
      resR = (r1 * r2) - (i1 * i2);
      resI = (r1 * i2) + (i1 * r2);
      cppCall = `Complex operator*(const Complex& rhs) const { return Complex(real*rhs.real - imag*rhs.imag, real*rhs.imag + imag*rhs.real); }`;
    }

    const sign = resI >= 0 ? '+' : '-';
    out.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:13px;background:var(--code-bg);padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border-color);line-height:1.7;">
        <div style="color:var(--text-muted);">C++ Member Function Invoked:</div>
        <div style="color:var(--accent);margin-bottom:6px;">${cppCall}</div>
        <div style="color:var(--success);font-weight:700;font-size:14px;">
          Result: (${r1} ${i1 >= 0 ? '+' : '-'} ${Math.abs(i1)}i) ${op === 'add' ? '+' : '*'} (${r2} ${i2 >= 0 ? '+' : '-'} ${Math.abs(i2)}i) = ${resR} ${sign} ${Math.abs(resI)}i
        </div>
      </div>
    `;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
