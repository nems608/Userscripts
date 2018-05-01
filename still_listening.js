// ==UserScript==
// @name         Pandora Still Listening
// @namespace    https://github.com/nems608
// @version      0.1
// @description  Automatically clickc the 'Still Listening' button on Pandora
// @author       Nic Mews-Schmuck
// @match        https://www.pandora.com/*
// @grant        none
// ==/UserScript==

function stillListening() {
  var popup = document.getElementsByClassName('StillListeningBody')[0];
  var btn = popup.getElementsByTagName('button')[0];
  btn.click();
}

setInterval(stillListening, 1000);
