// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textArea = document.querySelector('textarea');
  const imgFace = document.querySelector('img');
  var voices = [];
  
  //code taken from documentation https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event
  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });
  talkButton.addEventListener('click', (event) => {
    const speech = new SpeechSynthesisUtterance(textArea.value);
    const voiceType = voiceSelect.selectedOptions[0].getAttribute('data-name');
    //loop taken from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === voiceType) {
        speech.voice = voices[i];
      }
    }
    imgFace.src = "assets/images/smiling-open.png";
    synth.speak(speech);
    speech.addEventListener('end', (event) => { 
      imgFace.src = "assets/images/smiling.png";
    });
  });
}