//      _ ___   _  _  __
//  |V||_  ||_|/ \| \(_ 
//  | ||__ || |\_/|_/__)	
//
	
const index = require('./index');
//DATA BASE CONNECTION
const { Client } = require('pg');
const theVault = new Client({
connectionString: "postgres://actrqichtajnmf:909f1306da4d36e65b81649e6677d30ae8e55a57925b0e501a0c1642e58d80bd@ec2-34-194-215-27.compute-1.amazonaws.com:5432/dhfui1h48dc48",
ssl: { rejectUnauthorized: false }
});
theVault.connect();

exports.storeFingerPrint = function storeFingerPrint(pckr){
					
					/* pckr data 
					 uuid: myUUID,
					 onDate: new Date(),
					 timezone:(new Date()).getTimezoneOffset()/60,
					 locationPath: window.location.pathname,
					 locationOrigin: location.origin,
					 refer: document.referrer,
					 historyLength: history.length,
					 screenHeight: window.screen.height,
					 screenWidth: window.screen.width,
					 language: navigator.language,
					 connectionSpeed: navigator.connectionSpeed,
					 platform: navigator.platform,
					 js: navigator.javaEnabled(),
					 cookiesEnabled: navigator.cookieEnabled,
					 cookies: document.cookie,
					 userAgent: navigator.userAgent,
					 webDriver: navigator.webdriver. */
	
	var uuid = pckr.cleaker.uuid;
	//var onDate = pckr.cleaker.onDate;
	//var timezone = pckr.cleaker.timezone;
	var locationPath = pckr.cleaker.locationPath;
	var locationOrigin = pckr.cleaker.locationOrigin;
	var referrer = pckr.cleaker.referrer;
	var history_length = pckr.cleaker.historyLength;
	var language = pckr.cleaker.language;
	var jsEnabled = pckr.cleaker.js;
	var cookiesEnabled = pckr.cleaker.cookiesEnabled;
	var cookies = pckr.cleaker.cookies;
	var platform = pckr.cleaker.platform;
	var connectionSpeed = pckr.cleaker.connectionSpeed;
	var screenHeight = pckr.cleaker.screenHeight;
	var screenWidth = pckr.cleaker.screenWidth;
	var navAgent = pckr.cleaker.userAgent;
	var webDriver = pckr.cleaker.webDriver;
	
	//STORES DATA
	theVault.query('INSERT INTO fingerprints (uuid_numbr, location_path, referrer, history_length, language, js_enabled, cookies_enabled, cookies, platform, connection_speed, nav_agent, webdriver, screen_height, screen_width) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)', [uuid, locationPath, referrer, history_length, language, jsEnabled, cookiesEnabled, cookies, platform, connectionSpeed, navAgent, webDriver, screenHeight, screenWidth], (error, results) => {
	if (error) {
	throw error
			 }
	console.log("fingerprint");
		})//closes Insert New Usr Into Table */
	
}

