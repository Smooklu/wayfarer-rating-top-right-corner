// ==UserScript==
// @name         Wayfarer Rating Top Right Corner
// @namespace    https://github.com/Smooklu/wayfarer-rating-top-right-corner
// @version      0.1
// @description  Adds your Wayfarer rating in the top right corner.
// @author       Smooklu
// @match        https://wayfarer.nianticlabs.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var request = new XMLHttpRequest();
    request.addEventListener("load", function(evt){
        var rating = document.createElement('section');
        rating.innerText = request.response.body.getElementsByClassName('rating-bar__segment--active')[0].innerText;
        rating.className = 'rating-bar__segment rating-bar__segment--active'
        rating.style = 'border-radius:20px 20px 20px 20px; text-transform:capitalize; margin-right:10px;'
        rating.title = request.response.body.getElementsByClassName('rating-bar__segment--active')[0].getAttribute('uib-tooltip')
        var profilepic = document.getElementsByClassName('inner-container')[1].children[0]
        document.body.children[0].children[2].insertBefore(rating,profilepic)
    }, false);

    request.open('GET', 'profile', true)
    request.responseType = "document"
    request.send();

})();
