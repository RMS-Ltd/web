(function () {
  var SITE_VERSION = '0.0.18';
  var year = document.getElementById('year');
  var version = document.getElementById('site-version');
  if (year) year.textContent = new Date().getFullYear();
  if (version) version.textContent = 'v' + SITE_VERSION;
})();
