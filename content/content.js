chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (sender.tab) {
		return;
	}

	let params = {
		title: 'Rest your eyes',
		text: `I will close in ${request.break_time / 1000} seconds`,
		timer: request.break_time,
	};

	swal(params);
	sendResponse({ ok: true });
});
