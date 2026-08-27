type Album = {
    title: string;
    artist: string;
    releaseYear: number;
}

type SalesData = {
    unitsSold: number;
    revenue: number;
}

type AlbumSales = Album & SalesData & {genre: string}

const wishYouWereHereSales: AlbumSales = {
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    releaseYear: 1975,
    unitsSold: 13000000,
    revenue: 65000000,
    genre: "rock",
}

type StringAndNumber = string & number; // actual type here is "never" because a value could never be a string and number

type User1 = {
    age: number;
}

type User2 = {
    age: string;
}

type User = User1 & User2

// hovering over User shows:
// type User = {
//     age: never;
// }

interface User3 {
    age: string;
}

interface User4 extends User3 {
    age: number;
}

// const albumAwards = {};

// albumAwards.Grammy = true; // red squiggly line under Grammy

const albumAwards: {
    [index: string]: boolean;
} = {};

albumAwards.Grammy = true;
albumAwards.MercuryPrize = false;
albumAwards.Billboard = true;

const albumAwards2: {
  [iCanBeAnythingJustADescription: string]: boolean;
} = {};

// the above syntax can also be used with types and interfaces

const albumAwards3: Record<string, boolean> = {};

albumAwards3.grammy = false;

const albumAwards4: Record<"Grammy" | "Mercury" | "Billboard", boolean> = {
    Grammy: true,
    Mercury: false,
    Billboard: true,    
};
// the union shown above can't be used with the index version of this syntax

type BaseAwards = "Grammy" | "MercuryPrize" | "Billboard";

type ExtendedAlbumAwards = Record<BaseAwards, boolean> & {
  [award: string]: boolean;
};

const extendedNominations: ExtendedAlbumAwards = {
  Grammy: true,
  MercuryPrize: false,
  Billboard: true, // Additional awards can be dynamically added.
  "American Music Awards": true,
};

interface BaseAwards2 {
  Grammy: boolean;
  MercuryPrize: boolean;
  Billboard: boolean;
}

interface ExtendedAlbumAwards2 extends BaseAwards2 {
  [award: string]: boolean;
}

interface Album2 {
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
}

type PartialAlbum = Partial<Album2>;

const updateAlbum = (album: PartialAlbum) => {
  // . . .
};

updateAlbum({title: "Geogaddi", artist: "Boards of Canada"});

type RequiredAlbum = Required<Album2>;

const doubleCup: RequiredAlbum = {
  title: "Double Cup",
  artist: "DJ Rashad",
  releaseYear: 2013,
  genre: "Juke",
};

type Album3 = {
    title: string;
    artist: string;
    releaseYear?: number;
    genre?: {
        parentGenre?: string;
        subGenre?: string;
    }
}

// required doesn't work for nested properties
type RequiredAlbum2 = Required<Album3>

type AlbumData = Pick<Album3, "title" | "artist">;

// common case to omit "id" prior to it being assigned
// small catch, you can omit properties that don't exist on the object type
type AlbumData2 = Omit<Album, "id" | "releaseYear" | "genre">;

type AlbumWithOnlyProducer = Pick<Album, "producer">; // red squiggly line under "producer"

// hovering over "producer" shows:
// Type '"producer"' does not satisfy the constraint 'keyof Album'.

type Album5 = { 
    id: string;
    title: string;
    genre: string;
}

type CollectorEdition = {
    id: string;
    title: string;
    limitedEditionFeatures: string[];
}

type DigitalRelease = {
    id: string;
    title: string; 
    digitalFormat: string;
}

type MusicProduct = Album | CollectorEdition | DigitalRelease;

// this produces the wrong type
type MusicProductWithoutId = Omit<MusicProduct, "id">

type DistributiveOmit<T, K extends PropertyKey> = T extends any
    ? Omit<T, K>
    : never;

type MusicProductWithoutId2 = DistributiveOmit<MusicProduct, "id">;