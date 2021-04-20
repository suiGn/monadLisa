const forceSecure = require("./")

describe("Force Secure", () => {

    let req, res, headers, redirect, next

    beforeEach(() => {
        headers = {};
        req = { headers };
        redirect = jest.fn();
        next = jest.fn();
        res = { redirect };
    })

    test("Is a factory", () => {
        expect(typeof forceSecure()).toBe("function")
    })

    test("Should not redirect to https", () => {
        headers["x-forwarded-proto"] = "https";
        forceSecure()(req, res, next);
        expect(next).toBeCalled();
    })

    test("Should redirect to https", () => {
        req.url = "/a"
        headers["host"] = "example.com"
        headers["x-forwarded-proto"] = "http";
        forceSecure()(req, res, next);
        expect(redirect).toBeCalledWith("https://example.com/a");
    })

    test("Should not redirect to https if not whitelisted", () => {
        req.url = "/a"
        headers["host"] = "localhost:8000"
        headers["x-forwarded-proto"] = "http";
        forceSecure("example.com")(req, res, next);
        expect(next).toBeCalled();
    })

    test("Should redirect whitelisted to https", () => {
        req.url = "/a"
        headers["host"] = "example.com"
        headers["x-forwarded-proto"] = "http";
        forceSecure("example.com")(req, res, next);
        expect(redirect).toBeCalledWith("https://example.com/a");
    })

})