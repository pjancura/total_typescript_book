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
