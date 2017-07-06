let
	work_time = 1200000,
	break_time = 20000,
	strict_mode = false,
	medusa = () => {
	  chrome.tabs.query({
	  	active: true,
	  	currentWindow: true
	  }, (tabs) => {
	    chrome.tabs.sendMessage(tabs[0].id, { break_time, strict_mode }, (response) => {});
	  });
	},
	schedule = setInterval(medusa, work_time);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.state) {
    case 'UPDATE':
      clearInterval(schedule);
      
      break_time = message.break_time;
      work_time = message.work_time;
      strict_mode = message.strict_mode;
      schedule = setInterval(medusa, work_time);
      
      sendResponse({ ok: true });
      break;
  }
});
