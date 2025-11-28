document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = Array.from(document.querySelectorAll('[data-tab-target]'));
  const panels = Array.from(document.querySelectorAll('.tab-panel'));

  const setActiveTab = (targetId) => {
    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.tabTarget === targetId;
      btn.classList.toggle('active', isActive);
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle('active', isActive);
    });
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tabTarget;
      setActiveTab(targetId);
      if (targetId) {
        history.replaceState(null, '', '#' + targetId);
      }
    });
  });

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash) {
    const matchingTab = tabButtons.find((btn) => btn.dataset.tabTarget === initialHash);
    if (matchingTab) {
      setActiveTab(initialHash);
    }
  }
});
