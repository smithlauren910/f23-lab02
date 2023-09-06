import { newRenderer } from "./renderer.js"
import { Rectangle, newRectangle } from "./shapes/rectangle.js";

const shape: Rectangle = newRectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw();