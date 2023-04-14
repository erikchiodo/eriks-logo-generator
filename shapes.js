class svgAttributes {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

const svgInstance = new svgAttributes("EAC", "GREEN", "CIRCLE", "BLUE");

console.log(svgInstance.text);
console.log(svgInstance.textColor);
console.log(svgInstance.shape);
console.log(svgInstance.shapeColor);

class CircleSVG extends svgAttributes {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
    svgRender = "";
  }
  render() {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r= "100" fill="${this.shapeColor}" />
    <text x="150" y="115" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`;
  }
}

CircleSVG.render();

module.exports = svgAttributes;
