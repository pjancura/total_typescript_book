
const audioElement = document.createElement("audio");

audioElement.play();

// document.addEventListener(
//     "", 
// )

const acceptsObj = (obj : {foo: string, bar: number, baz: boolean}) => {};

acceptsObj({foo: "help", bar: 1, baz: true})

type Album = {
    artist: string;
    title: string;
    year: number;
};

const album: Album = {
    artist: "Some artist",
    title: "Major Title",
    year: 1990,
};

const logUserJobTitle = (user:{
    job: {
        title: string;
    };
}) => {
    console.log(user.job.title)
}

const exampleUser = {
    job: {
        title: 123,
    },
};

logUserJobTitle(exampleUser);

const exampleUser2 = {
    job: {
        title: "123",
    },
};

logUserJobTitle(exampleUser2);

let element = document.getElementById(12);


let element2 = document.getElementById("12");

/**
 * Logs the values of an object to the console
 * 
 * @param obj - The object to log
 * 
 * @example 
 * ```ts
 * logValues({a:1, b:2});
 * // Output:
 * // a: 1
 * // b:2
 * ```
 */

export const logValues = (obj: any) => {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
};

const filterUsersById = (userToFilterById: string) => {
  return users.filter((user) => user.id === userToFilterById);
};