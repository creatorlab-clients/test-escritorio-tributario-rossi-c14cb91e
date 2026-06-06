/* ═══════════════════════════════════════════════════════════════
   template-commercialisti-001 — Escritório Tributário Rossi
   script.js · law-editorial scroll · single-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/commercialisti-001/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // law-editorial — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w   = img.naturalWidth  || 800;
  var h   = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#0F2A5F" stop-opacity="0.10"/>'
    + '<stop offset="100%" stop-color="#1A56DB" stop-opacity="0.06"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="#F8F8F8"/>'
    + '<rect width="100%" height="100%" fill="url(#g)"/>'
    + '<text x="50%" y="50%" font-family="\'Fraunces\',Georgia,serif" font-size="16"'
    + ' font-style="italic" fill="#6B7280" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Regular icons — SVG inline ──────────────────────
var PHOSPHOR_ICONS = {

  // Calculator — Contabilidade mensal
  'calculator': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><rect x="40" y="40" width="176" height="176" rx="8"/><line x1="88" y1="40" x2="88" y2="216"/><line x1="40" y1="128" x2="216" y2="128"/><line x1="40" y1="88" x2="88" y2="88"/><line x1="116" y1="152" x2="140" y2="176"/><line x1="140" y1="152" x2="116" y2="176"/><line x1="164" y1="152" x2="164" y2="176"/><line x1="116" y1="88" x2="188" y2="88"/></svg>',

  // FileText — Declaração de impostos
  'file-text': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"/><polyline points="152,32 152,88 208,88"/><line x1="96" y1="136" x2="160" y2="136"/><line x1="96" y1="160" x2="160" y2="160"/><line x1="96" y1="112" x2="128" y2="112"/></svg>',

  // Receipt — Folha de pagamento
  'receipt': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><path d="M200,224l-24-24-24,24-24-24-24,24-24-24L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z"/><line x1="96" y1="104" x2="160" y2="104"/><line x1="96" y1="136" x2="160" y2="136"/><line x1="96" y1="168" x2="128" y2="168"/></svg>',

  // Briefcase — Consultoria fiscal
  'briefcase': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><rect x="24" y="72" width="208" height="152" rx="8"/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"/><line x1="24" y1="136" x2="232" y2="136"/><line x1="128" y1="112" x2="128" y2="160"/></svg>',

  // Users — MEI / Pequenas empresas
  'users': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" aria-hidden="true"><circle cx="88" cy="96" r="48"/><path d="M16,200a96,96,0,0,1,144,0"/><circle cx="192" cy="112" r="32"/><path d="M220,168a64,64,0,0,1,20,32"/></svg>',

  // ChartBar — Pessoa Física
  'chart-bar': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" aria-hidden="true"><line x1="32" y1="216" x2="224" y2="216"/><rect x="56" y="120" width="48" height="96"/><rect x="152" y="56" width="48" height="160"/><rect x="104" y="80" width="48" height="136"/></svg>',

  // CalendarCheck — Profissionais liberais / horário
  'calendar-check': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" aria-hidden="true"><rect x="32" y="48" width="192" height="176" rx="8"/><line x1="176" y1="24" x2="176" y2="56"/><line x1="80" y1="24" x2="80" y2="56"/><line x1="32" y1="96" x2="224" y2="96"/><polyline points="104,148 120,164 152,132"/></svg>',

  // ShieldCheck — Segurança / Tecnologia
  'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" aria-hidden="true"><path d="M40,114.79V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.77c0,84.17-71.87,111.79-87.55,116.92a7.74,7.74,0,0,1-4.9,0C107.87,226.58,40,199,40,114.79Z"/><polyline points="88,128 112,152 168,96"/></svg>',

  // Map Pin
  'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><path d="M128,16a80,80,0,1,0,80,80A80.09,80.09,0,0,0,128,16Z"/><circle cx="128" cy="96" r="24"/><path d="M64,216s16-48,64-48,64,48,64,48"/></svg>',

  // Phone
  'phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><path d="M159.38,185.79a96,96,0,0,1-89.17-89.17,8,8,0,0,1,2.19-6.4L87.6,75a8,8,0,0,1,11,.56l24,28a8,8,0,0,1-.44,11.13l-16.31,15.69a80.33,80.33,0,0,0,39.75,39.75l15.69-16.31a8,8,0,0,1,11.13-.44l28,24a8,8,0,0,1,.56,11L185.79,177.19A8,8,0,0,1,159.38,185.79Z"/></svg>',

  // Envelope
  'envelope': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><rect x="24" y="56" width="208" height="144" rx="8"/><polyline points="24,56 128,152 232,56"/></svg>',

  // WhatsApp Logo
  'whatsapp-logo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,81.06l11.48,22.94L101,118.37a8,8,0,0,0-.73,7.65,56.53,56.53,0,0,0,30.15,30.15,8,8,0,0,0,7.65-.73l14.37-9.08,22.94,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a88,88,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216l12.47-37.4a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z"/></svg>'
};

(function () {
  'use strict';

  // ── Inject Phosphor icons ──────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ────────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ────────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ──────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── IntersectionObserver — Fade Up, Stagger, Border Reveal ─
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card, .border-reveal').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    // Fallback: show all without animation
    document.querySelectorAll('.fade-up, .stagger-card, .border-reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Hero above-fold: trigger immediately ───────────────────
  setTimeout(function () {
    document.querySelectorAll('.hero .fade-up').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 80);

  // ── Scroll animation — canvas (cover mode §4.2) ────────────
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx          = canvas.getContext('2d');
  var images       = [];
  var currentFrame = 0;
  var pinEl        = section.querySelector('.scroll-anim-pin');
  var DPR          = Math.min(window.devicePixelRatio || 1, 2);

  function setupCanvas() {
    var w = pinEl.clientWidth;
    var h = pinEl.clientHeight;
    canvas.width  = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function renderFrame(img) {
    var cw = pinEl.clientWidth;
    var ch = pinEl.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    // Cover mode: fill container with no bars, no distortion
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, total > 0 ? scrolled / total : 0);
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  // Preload all frames
  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img = new Image();
      img.onload = function () {
        if (idx === 0) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      var num = String(idx + 1);
      while (num.length < FRAME_PAD) num = '0' + num;
      img.src = FRAME_PATH + FRAME_PREFIX + num + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    drawFrame(currentFrame);
  }, { passive: true });
  setupCanvas();

})();
