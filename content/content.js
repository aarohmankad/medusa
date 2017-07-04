chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (sender.tab) {
		return;
	}

	swal(`Look Away for ${request.break_time / 1000} seconds`);
	sendResponse({ ok: true });
})
