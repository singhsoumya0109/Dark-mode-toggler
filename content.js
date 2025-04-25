chrome.storage.local.get("darkModeEnabled", (data) => {
  if (data.darkModeEnabled) {
    injectDarkMode();
  }
});

function injectDarkMode() {
  const style = document.createElement("style");
  style.id = "dark-mode-style";
  style.textContent = `
    html, body {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
    }
    img, video {
      filter: brightness(0.8) contrast(1.1);
    }
    a {
      color: #80cbc4 !important;
    }
    * {
      background-color: transparent !important;
      border-color: #444 !important;
    }
  `;
  document.head.appendChild(style);
}
