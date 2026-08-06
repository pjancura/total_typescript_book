import type { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const concatName = (first: string, last: string = "Pocock") => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
};

const result = concatName("John", "Doe");

type test = Expect<Equal<typeof result, string>>;

const result2 = concatName("John");

type test2 = Expect<Equal<typeof result2, string>>;

it("should return the full name", () => {
    const result = concatName("John", "Doe");

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toEqual("John Doe");
})


it("should return the first name", () => {
    const result2 = concatName("John");

    type test2 = Expect<Equal<typeof result2, string>>;

    expect(result2).toEqual("John Pocock");
})