let
	work_time = document.querySelector('#work_time').value,
	break_time = document.querySelector('#break_time').value;

if (localStorage.getItem('medusa_work_time') && localStorage.getItem('medusa_break_time')) {
	work_time = localStorage.getItem('medusa_work_time');
	document.querySelector('#work_time').value = work_time;

	break_time = localStorage.getItem('medusa_break_time');
	document.querySelector('#break_time').value = break_time;
} else {
	localStorage.setItem('medusa_work_time', work_time);
	localStorage.setItem('medusa_break_time', break_time);
}

document.querySelector('.btn-success').addEventListener('click', () => {
	work_time = document.querySelector('#work_time').value * 60000;
	break_time = document.querySelector('#break_time').value * 1000;

	chrome.runtime.sendMessage({
		state: 'UPDATE',
		work_time,
		break_time,
	}, (response) => {
		localStorage.setItem('medusa_work_time', work_time / 60000);
		localStorage.setItem('medusa_break_time', break_time / 1000);
		
		window.close();
	});
});
