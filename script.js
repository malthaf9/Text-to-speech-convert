const textToSpeech = document.getElementById('text-to-speech');
const speakButton = document.getElementById('speak-button');
const voicesSelect = document.getElementById('voices');

// Populate the voices in the select element
function populateVoices() {
    const voices = window.speechSynthesis.getVoices();
    voicesSelect.innerHTML = voices
        .map((voice, index) => `<option value="${index}">${voice.name}</option>`)
        .join('');
}

populateVoices();

// Event listener for when voices are loaded
window.speechSynthesis.onvoiceschanged = populateVoices;

// Event listener for the speak button
speakButton.addEventListener('click', () => {
    const selectedVoiceIndex = voicesSelect.value;
    const selectedVoice = window.speechSynthesis.getVoices()[selectedVoiceIndex];

    const speech = new SpeechSynthesisUtterance(textToSpeech.value);
    speech.voice = selectedVoice;

    window.speechSynthesis.speak(speech);
});
