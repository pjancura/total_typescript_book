import {type Expect, type Equal} from "@total-typescript/helpers";
import { expect, it } from "vitest";

let example1: string = "Hello, World!";
let example2: number = 1234567890;
let example3: boolean = false;
let example4: symbol = Symbol();
let example5: bigint = 123n;
let example6: null = null;
let example7: undefined = undefined;

export const add = (a: number, b: number) => {
    return a + b;
}

const result: number = add(1, 2);

type test = Expect<Equal<typeof result, number>>;

const concatTwoStrings = (a: string, b: string) => {
    return a.concat(b, " ");
}

const result2 = concatTwoStrings("Hello,", "World!");

type test2 = Expect<Equal<typeof result2, string>>;

export const handleFormData = (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);

    const value = Object.fromEntries(data.entries());

    return value;
}

export const concatName = (user: {fName: string, lName: string}) => {
    return `${user.fName} ${user.lName}`;  
}
