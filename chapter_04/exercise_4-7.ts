import { type Rectangle } from "./sharedTypes/rectangle";

export const getRectangleArea = (rectangle: Rectangle) => {
    return rectangle.width * rectangle.height;
};

export const getRectanglePerimeter = (rectangle: Rectangle) => {
    return 2 *  (rectangle.width + rectangle.height);
}; 