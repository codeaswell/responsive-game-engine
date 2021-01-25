class Shape {
  constructor (w, h, fillColor, radius = 0) {
    this.pos = {x: 0, y: 0}
    this.fill = fillColor
    this.radius = radius
    this.w = w
    this.h = h
    this.shape = true
  }
}

export default Shape