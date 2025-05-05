// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textarea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImg = document.querySelector('#explore img');
  const voiceSelect = document.getElementById('voice-select');
  const synth = window.speechSynthesis;

  function populateVoiceList() {
    let voices = [];
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Populate voices list
  populateVoiceList();


  talkButton.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) return;

    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0];
    const selectedName = selectedOption.getAttribute('data-name');
    const voices = synth.getVoices();
    const chosenVoice = voices.find(v => v.name === selectedName);

    if (chosenVoice) {
      utterThis.voice = chosenVoice;
    }

    utterThis.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };
    utterThis.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  });
}