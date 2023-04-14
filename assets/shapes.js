class svgAttributes {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

// Class that renders Circle SVG File
class CircleSVG extends svgAttributes {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
  render() {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r= "100" fill="${this.shapeColor}" />
    <text x="150" y="115" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`;
  }
}

// Class that renders Triangle SVG File
class TriangleSVG extends svgAttributes {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
  render() {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,200 150,10 270,200" fill="${this.shapeColor}" />
  <text x="150" y="160" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>
`;
  }
}

// Class that renders Rectangle SVG File
class SquareSVG extends svgAttributes {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
  render() {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" height="200" width= "200" fill="${this.shapeColor}" />
  <text x="150" y="120" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>
`;
  }
}

module.exports = { CircleSVG, TriangleSVG, SquareSVG };
