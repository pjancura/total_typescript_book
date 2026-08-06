import { expect, test } from "vitest";

type APIResponse = 
    | {
        data: {
            id: string;
        };
    }
    | {
        error: string;
    };

const handleResponse = (response: APIResponse) => {
    if ("data" in response) {
       return response.data.id;
    } else {
        throw new Error(response.error);
    }
}

test("passes the test even with the error", () => {
    // there is no erorr in runtime, so this test passes:
    expect(() => 
    handleResponse({
        error: "Invalid argument",
    }),
    ).not.toThrowError();

    // but the data is returned instead of an error, so this test fails
    expect(
        handleResponse({
            error: "Invalid argument",
        }),
    ).toEqual("Should this be 'Error'?");
});