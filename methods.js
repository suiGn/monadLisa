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
					
					/* pckr DATA ON CLEAKER.JS
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
					 webDriver: navigator.webdriver. 
	
					 publicIp: data.ip,
					 latitude: data.latitude,
					 longitude: data.longitude,
					 postalCode: data.postal_code,
					 district: data.district,
					 city: data.city
						*/
	
	var uuid = pckr.cleaker.uuid;
	var locationPath = pckr.cleaker.locationPath;
	var locationOrigin = pckr.cleaker.locationOrigin;
	var referrer = pckr.cleaker.referrer;
	var language = pckr.cleaker.language; //id
	var cookies = pckr.cleaker.cookies;
	var platform = pckr.cleaker.platform;
	var screenHeight = pckr.cleaker.screenHeight;
	var screenWidth = pckr.cleaker.screenWidth;
	var navAgent = pckr.cleaker.userAgent;
	var webDriver = pckr.cleaker.webDriver;
	var onDate = pckr.cleaker.onDate;
	var timezone = pckr.cleaker.timezone;
	
	var publicIp = pckr.cleaker.publicIp;
	var latitude = pckr.cleaker.latitude;
	var longitude = pckr.cleaker.longitude;
	var postalCode = pckr.cleaker.postalCode;
	var district = pckr.cleaker.district;
	var city = pckr.cleaker.city;
	
			 
	
	//STORES DATA
	theVault.query('INSERT INTO fingerprints (uuid_numbr, location_path, location_origin, referrer, language, cookies, platform, nav_agent, webdriver, screen_height, screen_width, timezone, ondate, public_ip, latitude, longitude, postal_code, district, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)', 
	[uuid, locationPath, locationOrigin, referrer, language, cookies, platform, navAgent, webDriver, screenHeight, screenWidth, timezone, onDate, publicIp, latitude, longitude, postalCode, district, city], (error, results) => {
	if (error) {
	throw error
			 }
	console.log("fs394");
		})//closes Insert New Usr Into Table */
	
}

