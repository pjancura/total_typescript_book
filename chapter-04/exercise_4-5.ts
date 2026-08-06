import { it, expect } from "vitest"
import { type Expect, type Equal } from "@total-typescript/helpers";

const concatName = (user: {first: string, last: string})  => {
    return `${user.first} ${user.last}`;
};

it("should return the full name", () => {
    const result = concatName({
        first: "John",
        last: "Doe",
    });

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toEqual("John Doe");
})
