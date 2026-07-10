type User = {
    name: string;
    age: number;
};

const userMap = new Map<number, User>();

userMap.set(1, {name: "Max", age: 30});

userMap.set(2, {name: "Manuel", age: 31});

userMap.set("3", {name: "Anna", age: 29});

userMap.set(3, "123");