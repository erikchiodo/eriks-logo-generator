const { CircleSVG, TriangleSVG, SquareSVG } = require("./shapes");
// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test suite for the shape class.
// The test case checks whether "Cricle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Rendering Test
describe("Circle", () => {
  test("Renders Circle SVG Content Successfully", () => {
    const shape = new CircleSVG("blue");
    expect(shape.renderShape()).toEqual(
      '<circle cx="150" cy="100" r= "100" fill="blue"/>'
    );
  });
});
// Square Rendering Test
describe("Square", () => {
  test("Renders Square SVG Content Successfully", () => {
    const shape = new SquareSVG("blue");
    expect(shape.renderShape()).toEqual(
      '<rect x="50" height="200" width= "200" fill="blue"/>'
    );
  });
});
// Triangle Rendering Test
describe("Triangle", () => {
  test("Renders Triangle SVG Content Successfully", () => {
    const shape = new TriangleSVG("blue");
    expect(shape.renderShape()).toEqual(
      '<polygon points="0,200 300,200 150,0" fill="blue"/>'
    );
  });
});
