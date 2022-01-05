/*
______ _____ _   _ _____ _____ _____ 
| ___ \  _  | | | |_   _|  ___/  ___|
| |_/ / | | | | | | | | | |__ \ `--. 
|    /| | | | | | | | | |  __| `--. \
| |\ \\ \_/ / |_| | | | | |___/\__/ /
\_| \_|\___/ \___/  \_/ \____/\____/ 
							CLEAKER
CODED BY: SUI GENERIS 
SIMPLE AND MASSIVE.
*/

const index = require('../index');
const method = require('./methods');
const config = require('./config');
var uuid = require('node-uuid');
const jwt = require('jsonwebtoken');

//DATA BASE CONNECTION
const { Client } = require('pg');
const theVault = new Client({
connectionString: "postgres://csicplnifqncpc:ce12c51c83e437148779a4f7e0d508722f0a5ce9f05f894f9b6f88b9f2d9b3f9@ec2-174-129-253-53.compute-1.amazonaws.com:5432/d70qi6m3chd89a",
ssl: { rejectUnauthorized: false }
});
theVault.connect();
 
exports.home = function(req, res){res.render('pages/main/index', { opt: ""})};

//subscribe
exports.subscribing = function(req,res){
	var clName = req.body.subName; 
	var usrname = req.body.subUsername; 
	var email = req.body.subEmail; 
	var pwd = req.body.subPwd; 
	var rtPwd = req.body.subRtPwd; 
	var uuid_numbr = uuid.v4();
	var verified = 0;
	var dt = new Date();
	if (method.nameRegex(clName) && method.usrnmRegex(usrname) && method.emailRegex(email)) {
	if (clName.length <= 3 || usrname.length <= 3 || email.length <= 3 || pwd.length <= 5){
	res.render("pages/main/index" ,{ opt: "Too short."});
	}else if (pwd != rtPwd){
	res.redirect("/");
	}else{
	//Verifies if the user already exists
	theVault.query('SELECT Usrname FROM Usrs WHERE Usrname = $1', [usrname], (err, resp) => {
	if(resp.rowCount >= 1){
		console.log("username exists");
		return;
			}else{	
			theVault.query('SELECT Email FROM Usrs WHERE Email = $1', [email], (err, resp) => {
			if(resp.rowCount >= 1){
			return;
				}else{				
		//STORES DATA
		theVault.query('INSERT INTO usrs (uuid, name, usrname, email, password, Verified, last_update) VALUES ($1, $2, $3, $4, $5, $6, $7)', [uuid_numbr, clName, usrname, email, pwd, verified, dt], (error, results) => {
		if (error) {
		throw error
				 }
		console.log("New user saved!");
		console.log(clName + usrname + email + pwd);
			})//closes Insert New Usr Into Table
			}//else
			})// Closes second query - email
				} //closes else first query 
				}) //closes the vault first query - username
			}// Pwd do not match
			res.render('pages/main/runme');
				}else{
				res.render("pages/main/index" ,{ opt: "Invalid Data Format!"});
			}
		}
				




