let isTranslated = false;
let isAudioEnabled = false;

let output_labels = [];

let output_placeholders=[];

let caprturePermission = false;

let isSpeechInputEnabled = false;

let currentlyFocused = null;

let speechToText = "";

let recognition;

const activateSpeechAPI = () => {
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  recognition = new window.SpeechRecognition();

  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.continuous = true;

  recognition.onresult = (event) => {
    speechToText = event.results[0][0].transcript;
    console.log(speechToText);
  }
}

$("head").append(
  `<script src="https://code.responsivevoice.org/responsivevoice.js?key=yJQ0SRnY"></script>`,
);

$("input").focus((e) => {
  if($("#sonores-panel")) $("#sonores-panel").remove();

  if(isSpeechInputEnabled && $(e.target).attr("type") === "text") {
    currentlyFocused = e.target;
    $(
      `
      <div id="sonores-panel" style="padding-top:10px;">
        <button id="sonores-start" style="margin:2px;" class="btn btn-primary">Start</button>
        <button id="sonores-stop" style="margin:2px;" class="btn btn-primary">Stop</button>
        <button id="sonores-play" style="margin:2px;" class="btn btn-primary">Play</button>
      </div>
      `
    ).insertAfter(e.target);
  }

});

$(document).on("click", "#sonores-start" , function(event) {
  recognition.abort();
  recognition.start();
});

$(document).on("click", "#sonores-stop" , function(event) {
  recognition.stop();
  currentlyFocused.value = speechToText;
});

$(document).on("click", "#sonores-play" , function(event) {
  responsiveVoice.speak(currentlyFocused.value);
});

const restoreLabelsPlaceholders = () => {
  let labels = document.getElementsByTagName("label");
  for (let i = 0, l = labels.length; i < l; i++) {
    if(labels[i].innerText){
      labels[i].innerText = output_labels[i];
    }
  }
  var ids = $('.form-control').map(function() {
    return $(this).attr('id');
  });
  console.log(ids);
  for (let i = 0, l = ids.length; i < l; i++) {
    if(document.getElementById(ids[i]).placeholder){
      document.getElementById(ids[i]).placeholder = output_placeholders[i];
    }
  }
  if (isAudioEnabled) {
    disableAudio();
    enableAudio();
  }
};

const translateLabels = () => {
  let labels = document.getElementsByTagName("label");

  for (let i = 0, l = labels.length; i < l; i++) {
    if(labels[i].innerText){
      output_labels[i] = labels[i].innerText;
    }
  }

  if(output_labels.length === 0) return 0;

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
      let translatedResponse = data[0][0][0];
      console.log(data[0][0][0]);
      translatedLabels = translatedResponse.split("% ");
      for (let i = 0, l = labels.length; i < l; i++) {
        labels[i].innerText = translatedLabels[i];
      }

      if (isAudioEnabled) {
        disableAudio();
        enableAudio();
      }
    },
  });
};

const translatePlaceholders = () => {
  var ids = $('.form-control').map(function() {
    return $(this).attr('id');
  });

  for (let i = 0, l = ids.length; i < l; i++) {
    if(document.getElementById(ids[i]).placeholder){
      output_placeholders[i] = document.getElementById(ids[i]).placeholder;
    }
  }

  if(output_placeholders.length === 0) return 0;

  var translatedPlaceholders = [];

  let urlContent = encodeURI(output_placeholders.join("$"));
  console.log(urlContent);

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
      let translatedResponse = data[0][0][0];
      console.log(data[0][0][0]);
      translatedPlaceholders = translatedResponse.split("$ ");
      for (let i = 0, l = ids.length; i < l; i++) {
        document.getElementById(ids[i]).placeholder = translatedPlaceholders[i];
      }
    },
  });
};

const enableAudio = () => {
  console.log("inside enable audio");
  let labels = document.getElementsByTagName("label");
  for (let i = 0, l = labels.length; i < l; i++) {
    $(
      `<input class="sonores-play" onclick='responsiveVoice.speak(` +
        `"${labels[i].innerText}"` +
        `);' type='button' value='🔊 Play'/>`,
    ).insertAfter(labels[i]);
  }
};

const disableAudio = () => {
  const buttons = document.getElementsByClassName("sonores-play");
  const button_length = buttons.length;
  for (let i = 0; i < button_length; i++) {
    buttons[0].remove();
  }
};

chrome.runtime.onMessage.addListener(function(
  request,
  sender,
  sendResponse,
) {
  if (request.data === "translate") {
    if (!isTranslated) {
      translateLabels();
      translatePlaceholders();
      isTranslated = true;
    } else {
      restoreLabelsPlaceholders();
      isTranslated = false;
    }
  }
  if (request.data === "enableAudio") {
    if (!isAudioEnabled) {
      enableAudio();
      isAudioEnabled = true;
    } else {
      disableAudio();
      isAudioEnabled = false;
    }
  }
  if (request.data === "speechInput") {
    if (!caprturePermission){
      activateSpeechAPI();
      caprturePermission = true;
    }
    if (!isSpeechInputEnabled) {
      isSpeechInputEnabled = true;
    } else {
      isSpeechInputEnabled = false;
      $("#sonores-panel").remove();
    }
  }
  sendResponse();
});
