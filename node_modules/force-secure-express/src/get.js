const isString = require("./isString");

module.exports = function (obj, str) {
    if (!isString(str)) return obj

    return str
    .split(".")
    .reduce((p, c) => {
        if (!p) return p
        return p[c]
    }, obj)
}