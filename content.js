chrome.runtime.onMessage.addListener(function(
  request,
  sender,
  sendResponse,
) {
  console.log("something happening from the extension");
  var data = request.data || 1;
  var labels = document.getElementsByTagName("label");
  var output_labels = [];

  for (let i = 0, l = labels.length; i < l; i++) {
    output_labels[i] = labels[i].innerText;
  }

  // TODOs : Have the original labels stored such that we dont need to hit
  // APIs while toggling between languages.
  var translatedLabels = [];

  let urlContent = encodeURI(output_labels.join("%"));

  $.ajax({
    url:
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=hi&dt=t&q=" +
      urlContent,
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    dataType: "json",

    success: function(data) {
      flag = 1;
      let translatedResponse = data[0][0][0];
      console.log(data[0][0][0]);
      translatedLabels = translatedResponse.split("% ");
      for (let i = 0, l = labels.length; i < l; i++) {
        labels[i].innerText = translatedLabels[i];
      }
      var play = document.getElementById("play");
      play.style.visibility = "visible";
      for (let i = 1; i < 5; i++) {
        var plays = "play" + i;
        console.log(plays);
        var play = document.getElementById(plays);
        play.style.visibility = "visible";
      }
    },
  });
  sendResponse({ data: data, success: true });
});
