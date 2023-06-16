var resultColor = ''

chrome.storage.sync.get(["color"], function(result) {
    document.querySelector("body").style.backgroundColor = result.color;
    var element = document.querySelectorAll("div.Ww4FFb")
    element.forEach(div => {
        div.style.backgroundColor = result.color;
    });
    }
);
