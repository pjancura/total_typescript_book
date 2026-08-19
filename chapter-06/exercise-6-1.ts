// type User = {
//     id: string;
//     createdAt: Date;
//     name: string;
//     email: string;
// }

// type Product = {
//     id: string;
//     createdAt: Date;
//     name: string;
//     price: string;
// }

type BaseEntity = {
    id: string;
    createdAt: Date;
    name: string;
}

type Product = 
    BaseEntity &
    {
        price: string;
}
    

type User = 
    BaseEntity &
    {
        email: string;
}

const newProduct: Product = {
    id: "1234567890",
    createdAt: new Date(2026, 8, 18),
    name: "Jim",
    price: "$1.25"
}

const newUser: User = {
    id: "0987654321",
    createdAt: new Date(2026, 7, 20),
    name: "Bob",
    email: "bob@gmail.com",
}