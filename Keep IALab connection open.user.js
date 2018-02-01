// ==UserScript==
// @name         Keep IALab connection open
// @namespace    github.com/nems608
// @version      0.1
// @description  Modification to Alex Gartner's proxy. Reconnects websocket when it closes
// @author       Nic Mews-Schmuck
// @match        https://agartner.com/mks/*
// @grant        none
// ==/UserScript==

function heartbeat() {
    var dim = wmks.getRemoteScreenSize();
    wmks.setRemoteScreenSize(dim[0], dim[1]);
}

setInterval(heartbeat, 10000);