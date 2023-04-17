class SvgAttributes {
  constructor(text, textColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
  }
  render() {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${this.shape}<text x="150" y="125" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}

// Class that renders Circle Shape Text
class CircleSVG {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setColor() {
    return this.shapeColor;
  }
  renderShape() {
    return `<circle cx="150" cy="100" r= "100" fill="${this.shapeColor}"/>`;
  }
}

// Class that renders Triangle Shape Text
class TriangleSVG {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setColor() {
    return this.shapeColor;
  }
  renderShape() {
    return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`;
  }
}

// Class that renders Rectangle Shape Text
class SquareSVG {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setColor() {
    return this.shapeColor;
  }
  renderShape() {
    return `<rect x="50" height="200" width= "200" fill="${this.shapeColor}"/>`;
  }
}

module.exports = {
  SvgAttributes,
  CircleSVG,
  TriangleSVG,
  SquareSVG,
};
