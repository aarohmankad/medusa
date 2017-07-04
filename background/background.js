let schedule = setInterval(() => {
  alert("Look Away for 20 seconds!");
}, 1200000);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.state) {
    case 'UPDATE':
      sendResponse({ ok: true });
      break;
  }
});
