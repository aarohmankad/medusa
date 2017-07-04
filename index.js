let
	work_time = document.querySelector('#work_time').value,
	break_time = document.querySelector('#break_time').value;

document.querySelector('.btn-success').addEventListener('click', () => {
	work_time = document.querySelector('#work_time').value * 60000;
	break_time = document.querySelector('#break_time').value * 1000;

	chrome.runtime.sendMessage({
		state: 'UPDATE',
		work_time,
		break_time,
	}, (response) => {
		window.close();
	});
});
