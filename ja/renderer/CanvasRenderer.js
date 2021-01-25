class CanvasRenderer {
  constructor(w, h) {
    const canvas = document.createElement('canvas')
    this.w = canvas.width = w
    this.h = canvas.height = h
    this.view = canvas
    this.ctx = canvas.getContext('2d')
    this.ctx.imageSmoothingEnabled = false
    this.ctx.textBaseline = 'top'
  }

  render(container, clear = true) {
    const { ctx, view } = this

    function renderRec(container) {
      container.children.forEach(child => {

        if (child.visible === false) {
          return
        }

        ctx.save()

        if (child.pos) {
          ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y))
        }

        if (child.scale) {
          ctx.scale(child.scale.x, child.scale.y)
        }

        if (child.text) {
          const { font, fill, align } = child.style
          if (font) ctx.font = font
          if (fill) ctx.fillStyle = fill
          if (align) ctx.textAlign = align
          ctx.fillText(child.text, 0, 0)
        }

        if (child.shape) {
          ctx.fillStyle = child.fill
          ctx.fillRect(0, 0, child.w, child.h)
        }

        if (child.texture) {
          ctx.drawImage(child.texture.img, 0, 0)
        }

        if (child.children) {
          renderRec(child)
        }

        ctx.restore()
      })
    }
    if (clear) {
      ctx.clearRect(0, 0, this.w, this.h)
    }
    renderRec(container)
  }
}

export default CanvasRenderer