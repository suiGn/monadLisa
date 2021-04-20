const createWhitelist = require("./whitelist");

describe("Whitelist", () => {

    test("Should be a fn", () => {
        expect(typeof createWhitelist).toBe("function")
    })

    test("Should not create a whitelist", () => {
        expect(createWhitelist()).toBeNull()
    })

    test("Should create a whitelist with a single entry", () => {
        expect(createWhitelist("hodlstream.com")).toEqual({
            "hodlstream.com": true
        })
    })

    test("Should create a whitelist with a multiple entries", () => {
        expect(createWhitelist(["hodlstream.com", "sellwild.com"])).toEqual({
            "hodlstream.com": true,
            "sellwild.com": true
        })
    })

    test("Should ignore invalid entries", () => {
        expect(createWhitelist(["hodlstream.com", "sellwild.com", "", null, undefined, 1])).toEqual({
            "hodlstream.com": true,
            "sellwild.com": true
        })
    })

})