import { expect, it } from "vitest";

const hasKey = (obj: object, key: PropertyKey) => {
    return obj.hasOwnProperty(key);
}

it("Should work on string keys", () => {
    const obj = {
        foo: "bar",
    }

    expect(hasKey(obj, "foo")).toBe(true)
    expect(hasKey(obj, "bar")).toBe(false)
})

it("Should work on number keys", () => {
    const obj = {
        123: 456
    }

    expect(hasKey(obj, 123)).toBe(true)
    expect(hasKey(obj, 456)).toBe(false)
})

it("Should work on Symbol keys", () => {
    const fooSymbol = Symbol("foo")
    const barSymbol = Symbol("bar")

    const obj = {
        [fooSymbol]: barSymbol
    }

    expect(hasKey(obj, fooSymbol)).toBe(true)
    expect(hasKey(obj, barSymbol)).toBe(false)
})