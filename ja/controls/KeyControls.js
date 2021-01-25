class KeyControls {
  constructor() {

    this.keys = { 32: false }

    document.addEventListener('keydown', e => {
      if ([37, 38, 39, 40, 65].indexOf(e.which) >= 0) {
        e.preventDefault()
      }
      this.keys[e.which] = true
    }, false)

    document.addEventListener('keyup', e => {
      this.keys[e.which] = false
    }, false)

  }

  get action() {

    return this.keys[32]
  }

  get x() {
    if (this.keys[81] || this.keys[37]) // move left
      return -1

    if (this.keys[68] || this.keys[39]) // move right
      return 1

    return 0
  }

  get y() {
    if (this.keys[90] || this.keys[38]) // move up
      return -1

    if (this.keys[83] || this.keys[40]) // move down
      return 1

    return 0
  }
}

export default KeyControls