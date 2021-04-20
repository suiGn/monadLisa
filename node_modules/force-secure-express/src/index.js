const createWhitelist = require("./whitelist");
const get = require("./get");

const getHost = req => get(req, "headers.host");
const getProtocol = req => get(req, "headers.x-forwarded-proto");
const isSecure = req => getProtocol(req) === "https";

module.exports = function forceSecure (hosts) {
    const whitelist = createWhitelist(hosts);

    function isMatch (req) {
        const host = getHost(req);
        if (!hosts) return true; // Force every url to be https
        return whitelist[host];
    }

    return function (req, res, next) {
        if (!isSecure(req) && isMatch(req)) {
            res.redirect(`https://${getHost(req)}${req.url}`);
            return;
        }

        next();
    }
}