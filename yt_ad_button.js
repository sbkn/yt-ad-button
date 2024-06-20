console.log("LOADING ..");
chrome.action.onClicked.addListener(function (tab) {
    
    chrome.tabs.executeScript(tab.tabId, {
        file: "content.js"
      }, function(err) {
      console.error(err);
      });
});
