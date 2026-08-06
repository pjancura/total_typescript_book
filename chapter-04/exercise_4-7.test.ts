import { expect, it } from "vitest";
import { getRectangleArea, getRectanglePerimeter } from "./exercise_4-7";
import type { Equal, Expect } from "@total-typescript/helpers";


it("should return the area of a rectangle", () => {
    const result = getRectangleArea({
        width: 10,
        height: 20,
    });

    type test = Expect<Equal<typeof result, number>>;

    expect(result).toEqual(200);
});

it("should return the perimeter of a rectangle", () => {
    const result = getRectanglePerimeter({
        width: 10,
        height: 20
    });

    type test = Expect<Equal<typeof result, number>>;

    expect(result).toEqual(60);
})