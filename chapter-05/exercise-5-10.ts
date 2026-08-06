import type { Equal, Expect } from "@total-typescript/helpers";
import { type User } from "../chapter-04/exercise_4-12";

type APIResponse =
    | [
        status: "success",
        value: User[],
    ] 
    | [
        status: "error",
        value: string,
    ]

async function fetchData(): Promise<APIResponse> {
    try {
        const response = await fetch("https://api.example.com/data");

        if (!response.ok) {
            return [
                "error",
                "An error occurred"
            ];
        };
        const data = await response.json();

        return ["success", data];
    } catch (error) {
        return ["error", "An error occurred"];
    }
}

async function exampleFunc() {
    const [status, value] = await fetchData();

    if (status === "success") {
        console.log(value);

        type test = Expect<Equal<typeof value, User[]>>
    } else {
        console.error(value);

        type test = Expect<Equal<typeof value, string>>
    }
}