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

/*------------------------------------>
    Cookie Functions
<-----------------------------------*/

function setCookie(name, value) {								// Catch this 
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${UTCDate};path=/;SameSite=Lax`;
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    name = name + '=';
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null; // It wasn't null, it was something else 
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

getOperatingSystem();
getBrowser();
setCookie('Operating System', operatingSystem);
setCookie('Browser', browser);
setCookie('Screen Width', pageWidth);
setCookie('Screen Height', pageHeight);

function displayCookies() {
    const os = getCookie('Operating System');
    const browser = getCookie('Browser');
    const screenWidth = getCookie('Screen Width');
    const screenHeight = getCookie('Screen Height');

    log(os);
    log(browser);
    log('Screen Width:', screenWidth); // Haven't been able to remove this portion
    log('Screen Height:', screenHeight);
}


displayCookies();
log('Operating System (variable):', operatingSystem);
log('UTC Expiration Date:', UTCDate);
log('All Cookies:', document.cookie);
