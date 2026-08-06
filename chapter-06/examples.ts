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