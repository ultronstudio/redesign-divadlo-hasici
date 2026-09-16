(() => {
  const searchToggle = document.querySelector('.search-toggle');
  const searchPanel = document.querySelector('.search-panel');

  searchToggle?.addEventListener('click', () => {
    searchPanel.hidden = !searchPanel.hidden;
    if (!searchPanel.hidden) document.getElementById('siteSearch')?.focus();
  });

  document.querySelectorAll('.site-search, .event-search').forEach(form => {
    form.addEventListener('submit', event => event.preventDefault());
  });
})();
