type User = {
    id: string;
    name: string;
};

const printUser = (user: User): void => {
    console.log(`id: ${user.id}, name: ${user.name}`)
}

type MakeChange = (user: User) => User;

const modifyUser = (user: User[], id: string, makeChange: MakeChange) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }

        return u;
    })
}

const users = [{id: "01", name: "Paul"}, {id: "02", name: "John"}, {id: "03", name: "Theresa"}];

const incrementIdByOne: MakeChange = (user: User) => {
    user.id = parseInt(user.id + 1).toString();

    return user;
}

modifyUser(users, "02", incrementIdByOne);

users.map((u) => {
    printUser(u);
})