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
const { log } = console;
const { cookie } = document;

// Setting expiry 
const date = new Date();
date.setSeconds(date.getSeconds() + 15);
let UTCDate = date.toUTCString();

let maxAge = 15;
// Below is mostly for reference atm
document.cookie = `City=Winnipeg; path=/; max-age=${maxAge}; SameSite=Lax`;
let fullNameKey = encodeURIComponent('Full name');
let fullNameValue = encodeURIComponent('John Smith');
let cityName = encodeURIComponent('New York');
document.cookie = `${fullNameKey}=${fullNameValue}`;
document.cookie = `City=${cityName}`;

// This will perform a log function instead
// Must remember to encode 
function printCookies() {
	if (document.cookie.length > 0) {
		const cookies = document.cookie.split('; ');
		for (let i = 0; i < cookies.length; i++) {
			console.log (`
				${decodeURIComponent(cookies[i].split('=')[0])}: ${decodeURIComponent(cookies[i].split('=')[1])}
			`);
		}
	} else {
	console.log('No coookies found');
	}
}
printCookies();
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
