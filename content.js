let isTranslated = false;
let isAudioEnabled = false;

let output_labels = [];

const restoreLabels = () => {
  let labels = document.getElementsByTagName("label");
  for (let i = 0, l = labels.length; i < l; i++) {
    labels[i].innerText = output_labels[i];
  }
}

const trandlateLabels = () => {
  let labels = document.getElementsByTagName("label");

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
    },
  });
}

const enableAudio = () => {
  console.log("inside enable audio");
  let labels = document.getElementsByTagName("label");
  for (let i = 0, l = labels.length; i < l; i++) {
    $(`<input class="sonores-play" onclick='responsiveVoice.speak(` + `"${labels[i].innerText}"` + `);' type='button' value='🔊 Play'/>`).insertAfter(labels[i]);
  }
}

const disableAudio = () => {
  const buttons = document.getElementsByClassName("sonores-play");
  const button_length  = buttons.length;
  for(let i = 0; i < button_length; i ++){
    buttons[0].remove();
  }
}

chrome.runtime.onMessage.addListener(function(
  request,
  sender,
  sendResponse,
) {
  
  if(request.data === "translate"){
    if(!isTranslated){
      trandlateLabels();
      isTranslated = true;
    }else{
      restoreLabels();
      isTranslated = false;
    }
  }
  if(request.data === "enableAudio"){
    if(!isAudioEnabled){
      enableAudio();
      isAudioEnabled = true;
    }
    else{
      disableAudio();
      isAudioEnabled = false;
    }
  }
  
  sendResponse();
});
