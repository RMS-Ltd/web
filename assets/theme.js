/* Theme toggle — ES5; dark default; single click handler */
(function (window, document) {
  var STORAGE_KEY = 'rms-theme';
  var root = document.documentElement;
  var DEFAULT_THEME = 'dark';

  function readStoredTheme() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === 'light' || s === 'dark') return s;
    } catch (e) { /* Safari private mode, etc. */ }
    return null;
  }

  function getTheme() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark' || t === 'light') return t;
    var stored = readStoredTheme();
    return stored || DEFAULT_THEME;
  }

  function applyTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') theme = DEFAULT_THEME;
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { /* session-only preference */ }
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

    function onActivate(e) {
      if (e.type === 'click' && e.button !== 0) return;
      if (e.cancelable) e.preventDefault();
      toggleTheme();
    }

    btn.addEventListener('click', onActivate);
  }

  function init() {
    var theme = readStoredTheme() || DEFAULT_THEME;
    applyTheme(theme);
    bindToggle();
  }

  window.RMS_toggleTheme = toggleTheme;

  init();
})(window, document);
