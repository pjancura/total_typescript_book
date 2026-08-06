// this is an example of narrowing the type of string 
// to the 4 specific strings

type Direction = 
    "up"
    | "down"
    | "left"
    | "right" 

function move(direction: Direction, distance: number) {
    // Move the specified destance in the given direction.
};

move("up", 10);

move("left", 5);

