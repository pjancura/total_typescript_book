// this means that you will pass a string to a method
// the method, whatever it is. must return a string.
type Mapper = (item: string) => number;

// example implementation
const mapOverItems = (items: string[], map: Mapper) => {
    return items.map(map);
}

const arrayOfNumbers = mapOverItems(["1", "2", "3"], (item) => {
    return parseInt(item) * 100;
});

console.log(arrayOfNumbers)