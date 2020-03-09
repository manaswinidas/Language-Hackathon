document.addEventListener("DOMContentLoaded", function() {
  var translateButton = document.getElementById("translate");
  var audioBtn = document.getElementById("audio");
  translateButton.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(
      tabs,
    ) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { data: "translate" },
        function(response) {
          window.close();
        },
      );
    });
  });
  audioBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(
      tabs,
    ) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { data: "enableAudio" },
        function(response) {
          console.log("success");
          window.close();
        },
      );
    });
  });
});
