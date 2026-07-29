type Circle = {
    kind: "circle";
    radius: number;
}

type Square = {
    kind: "square";
    sideLength: number;
}

export type Shape = Circle | Square;

function claculateArea(shape: Shape) {
    if (shape.kind === "circle") {
        // destructuring of a discriminated union should take place within the conditional branches
        const {radius} = shape;
        return Math.PI * radius * radius;
    } else {
        const {sideLength} = shape;
        return sideLength * sideLength;
    }
}