document.addEventListener('DOMContentLoaded', () => {
  startOS();

  function startOS() {
    console.log('[JS-Droid] Boot complete.');
    loadAppIcons();
    updateTime();
    setInterval(updateTime, 1000);
  }

  function loadAppIcons() {
    const grid = document.getElementById('app-grid');
    const apps = [
      { name: "Calculator", icon: "➕" },
      { name: "Notes", icon: "📝" },
      { name: "Terminal", icon: "💻" },
      { name: "Settings", icon: "⚙️" },
    ];

    apps.forEach(app => {
      const btn = document.createElement('button');
      btn.className = 'app-icon';
      btn.innerHTML = `<div>${app.icon}</div><span>${app.name}</span>`;
      btn.onclick = () => openApp(app.name.toLowerCase());
      grid.appendChild(btn);
    });
  }

  function updateTime() {
    const now = new Date();
    const timeEl = document.getElementById('status-time');
    timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function openApp(appId) {
    alert(`Opening ${appId}...`); // Placeholder
  }
});
