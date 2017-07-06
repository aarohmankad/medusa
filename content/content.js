chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (sender.tab) {
		return;
	}

	let params = {
		title: `Rest your eyes for ${request.break_time / 1000} seconds`
	};

	if (request.strict_mode) {
		params['timer'] = request.break_time;
	}

	swal(params);
	sendResponse({ ok: true });
})
