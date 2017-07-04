let
	work_time = document.querySelector('#work_time').value,
	break_time = document.querySelector('#break_time').value;

document.querySelector('.btn-success').addEventListener('click', () => {
	work_time = document.querySelector('#work_time').value;
	break_time = document.querySelector('#break_time').value;

	chrome.runtime.sendMessage({
		state: 'UPDATE',
		work_time,
		break_time,
	}, (response) => {});
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.state) {
    case 'INITIAL':
      alert(message.message);
      break;
  }
});
