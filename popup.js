const btn = document.getElementById("toggle");

chrome.storage.local.get("darkModeEnabled", (data) => {
  const enabled = data.darkModeEnabled || false;
  btn.textContent = enabled ? "Disable Dark Mode" : "Enable Dark Mode";
});

btn.addEventListener("click", async () => {
  chrome.storage.local.get("darkModeEnabled", (data) => {
    const enabled = data.darkModeEnabled || false;
    const newState = !enabled;

    chrome.storage.local.set({ darkModeEnabled: newState }, () => {
      btn.textContent = newState ? "Disable Dark Mode" : "Enable Dark Mode";
    });

    // Reload current tab so content script can reapply styles
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => window.location.reload(),
      });
    });
  });
});
