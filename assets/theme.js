/* Theme toggle — ES5 for broad browser support */
(function (window, document) {
  var STORAGE_KEY = 'rms-theme';
  var root = document.documentElement;

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function getTheme() {
    var t = root.getAttribute('data-theme');
    return t === 'dark' || t === 'light' ? t : systemTheme();
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { /* private mode */ }
    syncToggle(theme);
    syncMeta(theme);
  }

  function toggleTheme() {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  function syncToggle(theme) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var isDark = theme === 'dark';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    var label = btn.querySelector('.theme-toggle-label');
    if (label) label.textContent = isDark ? 'Light' : 'Dark';
  }

  function syncMeta(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0f1413' : '#0c3d3a');
    }
  }

  function bindToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn || btn.getAttribute('data-bound') === 'true') return;
    btn.setAttribute('data-bound', 'true');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleTheme();
    });
  }

  function init() {
    bindToggle();
    syncToggle(getTheme());
    syncMeta(getTheme());

    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function (e) {
        try {
          if (!localStorage.getItem(STORAGE_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
          }
        } catch (err) { /* ignore */ }
      };
      if (mq.addEventListener) {
        mq.addEventListener('change', onChange);
      } else if (mq.addListener) {
        mq.addListener(onChange);
      }
    }
  }

  window.RMS_toggleTheme = toggleTheme;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window, document);
