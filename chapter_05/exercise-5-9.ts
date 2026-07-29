import { type Shape } from "./exercise-5-8"; 

function calculateArea(shape: Shape) {
    const {kind} = shape;
    switch(kind) {
        case "circle": 
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.sideLength * shape.sideLength;
    }
}

