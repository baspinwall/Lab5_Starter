// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornElement = document.getElementById('horn-select');
  const playAudioElement = document.querySelector("button");
  const sliderElement = document.querySelector("input");
  const audioElement = document.querySelector("audio");
  const imgElement = document.querySelector("img");
  const imgElement2 = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti();
  var confetti = false;

  hornElement.addEventListener('change', (event) => {
    confetti = false;
    if (event.target.value == "air-horn")
    {
      imgElement.src = "assets/images/air-horn.svg";
      audioElement.src = "assets/audio/air-horn.mp3";
    }  
    else if (event.target.value == "car-horn") 
    {
      imgElement.src = "assets/images/car-horn.svg";
      audioElement.src = "assets/audio/car-horn.mp3";
    }
    else if (event.target.value == "party-horn") 
    {
      imgElement.src = "assets/images/party-horn.svg";
      audioElement.src = "assets/audio/party-horn.mp3";
      confetti = true;
    }
  });

  sliderElement.addEventListener('input', (event) => {
    audioElement.volume = sliderElement.value / 100;
    if (event.target.value == 0)
    {
      imgElement2.src = "assets/icons/volume-level-0.svg";
    }  
    else if (event.target.value < 33) 
    {
      imgElement2.src = "assets/icons/volume-level-1.svg";
    }
    else if (event.target.value < 66) 
    {
      imgElement2.src = "assets/icons/volume-level-2.svg";
    } 
    else 
    {
      imgElement2.src = "assets/icons/volume-level-3.svg";
    }
  });

  playAudioElement.addEventListener('click', (event) => {
    audioElement.play();
    if (confetti)
    {
      jsConfetti.addConfetti();
    }
  });
}