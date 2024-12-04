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

const userAgent = navigator.userAgent;
let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;

const date = new Date();
date.setSeconds(date.getSeconds() + 15); 
let UTCDate = date.toUTCString();

const osToggle = select('#toggle1');
const browserToggle = select('#toggle2');
const widthToggle = select('#toggle3');
const heightToggle = select('#toggle4');
const savePreferences = select('.save-preferences');
const acceptAllButton = select('.accept');
const cookieDialogue = select('.cookie-dialogue');
const cookieSettings = select('.cookie-settings');
const userSettings = select('.settings')

/*------------------------------------>
    Cookie Functions
<-----------------------------------*/
function hasCookies() {
	if (document.cookie.length <= 0) {
		cookieDialogue.classList.remove('hidden');
	}
}

function setCookie(name, value) {								// Catch this 
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${UTCDate};path=/;SameSite=Lax`;
}

function getCookie(name) {
	const match = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
	return match ? decodeURIComponent(match[1]) : null;
}

let operatingSystem = 'Unknown OS';

function getOperatingSystem() {
    if (userAgent.includes('Windows')) {
      operatingSystem = 'Operating System: Windows';
    } else if (userAgent.includes('Macintosh')) {
      operatingSystem = 'Operating System: Mac OS';
    } else if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
      operatingSystem = 'Operating System: iOS';
    } else if (userAgent.includes('Android')) {
      operatingSystem = 'Operating System: Android';
    } else if (userAgent.includes('Linux')) {
      operatingSystem = 'Operating System: Linux';
    }
}

let browser = 'Unknown Browser';

function getBrowser() {
    if (userAgent.includes('Firefox')) {
        browser = 'Browser: Firefox';
    } else if (userAgent.includes('Edge') || userAgent.includes('edg')) {
        browser = 'Browser: Edge';
    } else if (userAgent.includes('Chrome') && !userAgent.includes('Chromium')) {
        browser = 'Browser: Chrome';
    } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
        browser = 'Browser: Opera';
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        browser = 'Browser: Safari';
    }
}


function acceptAll() {
	setCookie("Operating System", operatingSystem);
	setCookie("Browser", browser);
	setCookie("Screen Width", pageWidth.toString());
	setCookie("Screen Height", pageHeight.toString());
}

function settings() {
	if (osToggle.checked) {
			setCookie("Operating System", operatingSystem);
	} 
	if (browserToggle.checked) {
			setCookie("Browser", browser);
	} 
	if (widthToggle.checked) {
			setCookie("Screen Width", pageWidth.toString());
	} 
	if (heightToggle.checked) {
			setCookie("Screen Height", pageHeight.toString());
	} 
}

listen('load', window, () => {
	hasCookies();
});

getOperatingSystem();
getBrowser();

listen('click', userSettings, () => {
	cookieSettings.classList.remove('hidden');
	cookieDialogue.classList.add('hidden');
});

listen('click', acceptAllButton, () => {
	acceptAll();
	cookieDialogue.classList.add('hidden');
});

listen('click', savePreferences, () => {
	settings();
	cookieSettings.classList.add('hidden');
});

log(getCookie('Operating System'));
log(getCookie('Browser'));
log(getCookie('Screen Width'));
log(getCookie('Screen Height'));
