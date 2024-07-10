// Function to add click and key event listeners
function addAudioListeners(buttonId, audioId, key) {
  var button = document.getElementById(buttonId);
  var audio = document.getElementById(audioId);

  // Add click event listener
  button.addEventListener("click", function () {
    audio.play();
    addYellowOutline(button);
  });

  // Add keydown event listener
  document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === key) {
      button.click();
    }
  });
}

// Function to add yellow outline to the clicked button and remove from others
function addYellowOutline(button) {
  // Remove the outline from all buttons
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (btn) {
    btn.classList.remove("outline-yellow");
  });

  // Add the outline to the clicked button
  button.classList.add("outline-yellow");
}

// List of button IDs, audio IDs, and corresponding keys
var audioMappings = [
  { buttonId: "btn_A", audioId: "clap", key: "a" },
  { buttonId: "btn_B", audioId: "hihat", key: "b" },
  { buttonId: "btn_C", audioId: "kick", key: "c" },
  { buttonId: "btn_D", audioId: "openhat", key: "d" },
  { buttonId: "btn_E", audioId: "boom", key: "e" },
  { buttonId: "btn_F", audioId: "ride", key: "f" },
  { buttonId: "btn_G", audioId: "snare", key: "g" },
  { buttonId: "btn_H", audioId: "tom", key: "h" },
  { buttonId: "btn_I", audioId: "tink", key: "i" },
  { buttonId: "btn_J", audioId: "mono", key: "j" },
  { buttonId: "btn_K", audioId: "stereo", key: "k" },
  { buttonId: "btn_L", audioId: "mono1", key: "l" },
  { buttonId: "btn_M", audioId: "pap", key: "m" },
  { buttonId: "btn_N", audioId: "stereo1", key: "n" },
  { buttonId: "btn_O", audioId: "nextoo", key: "o" },
  { buttonId: "btn_P", audioId: "nextpp", key: "p" },
  { buttonId: "btn_Q", audioId: "nextqq", key: "q" },
  { buttonId: "btn_R", audioId: "nextrr", key: "r" },
  { buttonId: "btn_S", audioId: "nextss", key: "s" },
  { buttonId: "btn_T", audioId: "nexttt", key: "t" },
  { buttonId: "btn_U", audioId: "nextuu", key: "u" },
  { buttonId: "btn_V", audioId: "nextvv", key: "v" },
  { buttonId: "btn_W", audioId: "nextww", key: "w" },
  { buttonId: "btn_X", audioId: "nextxx", key: "x" },
  { buttonId: "btn_Y", audioId: "nextyy", key: "y" },
  { buttonId: "btn_Z", audioId: "nextzz", key: "z" },
];

// Add event listeners for each mapping
audioMappings.forEach(mapping => {
  addAudioListeners(mapping.buttonId, mapping.audioId, mapping.key);
});
