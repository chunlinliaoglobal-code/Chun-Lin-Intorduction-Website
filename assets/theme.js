(() => {
  const allowed = ['light', 'dark'];
  const storageKey = 'chun-lin-liao-theme';
  let initial = 'light';
  try { const saved = localStorage.getItem(storageKey); if (allowed.includes(saved)) initial = saved; } catch {}
  document.documentElement.dataset.theme = initial;
  const apply = (theme, persist = true) => {
    if (!allowed.includes(theme)) theme = 'light';
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('[data-theme-picker]').forEach(picker => { picker.value = theme; });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = {light:'#f5f7f9',dark:'#101b24'}[theme];
    if (persist) { try { localStorage.setItem(storageKey, theme); } catch {} }
  };
  const ready = () => {
    apply(initial, false);
    document.querySelectorAll('[data-theme-picker]').forEach(picker => {
      picker.addEventListener('change', () => apply(picker.value));
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
  window.addEventListener('storage', event => {
    if (event.key === storageKey) apply(event.newValue, false);
  });
})();
