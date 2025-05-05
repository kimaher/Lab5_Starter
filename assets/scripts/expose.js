// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornselect = document.getElementById("horn-select");
  const hornimage = document.querySelector("#expose img");
  const sound = document.querySelector(".hidden");
  const volimage = document.querySelector("#volume-controls img");
  const vol = document.getElementById("volume");
  const button = document.querySelector("#expose button");
  const jsConfetti = new JSConfetti();

  hornselect.addEventListener("change", (select) => {
    if(select.target.value == "party-horn"){
      hornimage.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
    }
    if(select.target.value == "air-horn"){
      hornimage.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
    }
    if(select.target.value == "car-horn"){
      hornimage.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
    }
  });

  vol.addEventListener("input", (val) => {
    sound.volume = val.target.value/100;
    if(val.target.value == 0){
      volimage.src = "assets/icons/volume-level-0.svg";
    }
    else if(val.target.value <= 32){
      volimage.src = "assets/icons/volume-level-1.svg";
    }
    else if(val.target.value <= 66){
      volimage.src = "assets/icons/volume-level-2.svg";
    }
    else{
      volimage.src = "assets/icons/volume-level-3.svg";
    }
  });

  button.addEventListener("click", () => {
    if(sound.src != ""){
      sound.play();

      if(hornselect.value == "party-horn"){
        jsConfetti.addConfetti();
      }
    }
  });
}