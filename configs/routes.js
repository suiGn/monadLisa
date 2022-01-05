/*
______ _____ _   _ _____ _____ _____ 
| ___ \  _  | | | |_   _|  ___/  ___|
| |_/ / | | | | | | | | | |__ \ `--. 
|    /| | | | | | | | | |  __| `--. \
| |\ \\ \_/ / |_| | | | | |___/\__/ /
\_| \_|\___/ \___/  \_/ \____/\____/ 
							monadLisa
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
 
exports.home = function(req, res){res.render('pages/index', { opt: ""})};
exports.terms = function(req, res){res.render('pages/terms')};
exports.notFound = function(req, res){res.render('pages/404')};