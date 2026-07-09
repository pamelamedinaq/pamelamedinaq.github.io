// Dark mode toggle (persisted in localStorage; html.dark is set early in <head>)
var darkInput = document.querySelector('.dark-toggle input');
if (darkInput) {
  darkInput.checked = document.documentElement.classList.contains('dark');
  darkInput.addEventListener('change', function () {
    document.documentElement.classList.toggle('dark', darkInput.checked);
    localStorage.setItem('theme', darkInput.checked ? 'dark' : 'light');
  });
}

// Expandable abstracts (+ / −)
document.querySelectorAll('.paper-header').forEach(function (header) {
  header.addEventListener('click', function (event) {
    if (event.target.closest('a')) return;
    var entry = header.closest('.paper-entry');
    var body = entry.querySelector('.paper-body');
    var open = entry.classList.toggle('open');
    body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
  });
});
