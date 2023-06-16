var activeTab = ""
var tabId = ""

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    activeTab = tabs[0];
    tabId = activeTab.id;
    });
document.getElementById("color").addEventListener("change", function(){
    var selectColor = document.getElementById("color").value;
    chrome.storage.sync.set({ color: selectColor })
    chrome.storage.sync.get(["color"], function(result) {
        document.querySelector("body").style.backgroundColor = result.color;
    }
    );
    uno(tabId);
});
function uno(tabId){
    chrome.scripting.executeScript({
        target : {tabId : tabId},
        files : [ "cambio.js" ],
    });
}