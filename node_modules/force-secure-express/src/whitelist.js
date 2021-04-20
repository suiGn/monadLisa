const toHash = require("./toHash");
const identity = require("./identity");
const isString = require("./isString");

module.exports = function (host) {
    if (!host) return null
    return [].concat(host)
    .filter(identity)
    .filter(isString)
    .reduce(toHash, {})
}