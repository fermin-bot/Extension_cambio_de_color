var color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && /^http/.test(tab.url)) {
    chrome.scripting.executeScript({
        target : {tabId : tabId},
        files : [ "cambio.js" ],
    });
  }
});
