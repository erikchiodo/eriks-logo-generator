const { CircleSVG, TriangleSVG, SquareSVG } = require("./shapes");
// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test suite for the shape class.
// The test case checks whether "Cricle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Shape
describe("Circle", () => {
  test("Renders Circle SVG Content Successfully", () => {
    let testCircle = new CircleSVG();
    let text = "EAC";
    let textColor = "YELLOW";
    let shape = "circle";
    shapeColor = "BLUE";
    testCircle.render(text, textColor, shape, shapeColor);
    expect(testCircle.render()).toEqual(
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r= "100" fill="${this.shapeColor}" />
    <text x="150" y="120" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`
    );
  });
});
// Square Shape
describe("Square", () => {
  test("Renders Square SVG Content Successfully", () => {
    let testSquare = new SquareSVG();
    let text = "EAC";
    let textColor = "YELLOW";
    let shape = "square";
    shapeColor = "BLUE";
    testSquare.render(text, textColor, shape, shapeColor);
    expect(testSquare.render()).toEqual(
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" height="200" width= "200" fill="${this.shapeColor}" />
  <text x="150" y="120" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>
`
    );
  });
});
// Triangle Shape
describe("Triangle", () => {
  test("Renders Triangle SVG Content Successfully", () => {
    let testTriangle = new TriangleSVG();
    let text = "EAC";
    let textColor = "YELLOW";
    let shape = "triangle";
    shapeColor = "BLUE";
    testTriangle.render(text, textColor, shape, shapeColor);
    expect(testTriangle.render()).toEqual(
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,200 150,10 270,200" fill="${this.shapeColor}" />
  <text x="150" y="160" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>
`
    );
  });
});
