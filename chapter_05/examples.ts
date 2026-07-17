const message = Date.now() % 2 === 0 ? "Hello Tuesdays!" : null;

const logId = (id: string | number) => {
    console.log(id);
}

logId("1234");

logId(1234);

// logId(true);

type Id = string | number;

const logId2 = (id: Id) => {
    console.log(id);
}

type AllSortsOfStuff = 
    string 
    | number 
    | boolean
    | object
    | null
    | {
        id: string;
        name: string;
    }

type YesOrNo = "yes" | "no";
type StatusCode = 200 | 404 | 500;

document.addEventListener(
  // autocomplete will suggest DOMContentLoaded, mouseover, and so on.
  "click",
  () => {},
);

type DigitalFormat = "MP3" | "FLAC";

type PhysicalFormat = "LP" | "CD" | "Cassette";

type AlbumFormat = DigitalFormat | PhysicalFormat;

const getAlbumFormats  = (format: AlbumFormat) => {
    // function body
};

getAlbumFormats("MP3");

function logId(id: number) {
  console.log(`The id is ${id}`);
}

type User = {
  id: string | number;
};

const user: User = {
  id: 123,
};

logId(user.id); // red squiggly line under user.id