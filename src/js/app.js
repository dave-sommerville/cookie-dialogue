'use strict';

/*------------------------------------>
    Utility Functions 
<-----------------------------------*/

function select(selector, scope = document) {
	return scope.querySelector(selector);
}

function listen(event, selector, callback) {
	return selector.addEventListener(event, callback);
}

/*------------------------------------>
    Variable Declarations
<-----------------------------------*/
const toggle = select("#toggle");

const userAgent = navigator.userAgent;
let userLang = navigator.language;
let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;

/*------------------------------------>
    Utility Functions 
<-----------------------------------*/
function getOperatingSystem() {
	if (userAgent.includes("Windows")) {
			opSy.innerText = "Windows"; /* Redirecting output to cookie */
	} else if (userAgent.includes("Macintosh")) {
			opSy.innerText = "Mac OS";
	} else if (userAgent.includes("iPhone") || userAgent.includes("iPad") || userAgent.includes("iPod")) {
			opSy.innerText = "iOS";
	} else if (userAgent.includes("Android")) {
			opSy.innerText = "Android";
	} else if (userAgent.includes("Linux")) {
			opSy.innerText = "Linux";
	} else {
			opSy.innerText = "Your Operating System isn't recognized.";
	}
}

function getBrowser() {
	if (userAgent.includes("Firefox")) {
			browser.innerText = "Firefox";
	} else if (userAgent.includes("Edge") || userAgent.includes("edg")) {
			browser.innerText = "Edge";
	} else if (userAgent.includes("Chrome") && !userAgent.includes("Chromium")) {
			browser.innerText = "Chrome";
	} else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
			browser.innerText = "Opera";
	} else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
			browser.innerText = "Safari";
	} else {
			browser.innerText = "Your browser isn't recognized.";
	}
}

listen("change", toggle, () => {
	// if(toggle.checked) {
	// 	targetShape.classList.add('circle');
	// } else {
	// 	targetShape.classList.remove('circle');
	// }
});
