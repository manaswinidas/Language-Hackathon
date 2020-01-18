document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('yes');
  button.addEventListener('click', function () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {data: 'yes'}, function(response) {
              console.log('success');
          });
      });
  });
});

