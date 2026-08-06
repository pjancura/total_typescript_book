import { handleFormData, concatName } from "./example";
import { type Expect, type Equal } from "@total-typescript/helpers";
import { it, expect } from "vitest";


it("Should handle a form submit", () => {
    const form = document.createElement("form");

    form.innerHTML = `
     <input name="name" value="John Doe" /> 
    `;
    
    document.body.appendChild(form);

    let value: Record<string, any> = {}; 

    form.onsubmit = (e) => {
       value = handleFormData(e);
        
        expect(value).toEqual({"name": "John Doe"});
    }

    form.requestSubmit();

    expect.assertions(1);
})

it("Should concat first and last name", () => {
    const result = concatName({
        fName: "Sydney",
        lName: "Heart"
    })

    type test = Expect<Equal<typeof result, string>>

    expect(result).toEqual("Sydney Heart")
})