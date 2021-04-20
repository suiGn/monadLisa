const get = require("./get");

describe("Get nested value", () => {
    test("Empty", () => {
        const obj = { a: { b: 1 } }
        expect(get(obj)).toBe(obj)
    })

    test("Return object if path is not a string", () => {
        const obj = { a: { b: 1 } }
        expect(get(obj, 2)).toBe(obj)
    })

    test("a", () => {
        expect(get({ a: { b: 1 } }, "a")).toEqual({ b: 1 })
    })

    test("a.b", () => {
        expect(get({ a: { b: 1 } }, "a.b")).toBe(1)
    })

    test("x-forwarded-proto: https undefined", () => {
        const req = {
            headers: {
                "x-forwarded-proto": "https"
            }
        }
        expect(get(req, "a.b")).toBe(undefined)
    })

    test("x-forwarded-proto: https", () => {
        const req = {
            headers: {
                "x-forwarded-proto": "https"
            }
        }
        expect(get(req, "headers.x-forwarded-proto")).toBe("https")
    })
})