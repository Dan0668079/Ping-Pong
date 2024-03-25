const canvasEl = document.querySelector('canvas');
const canvasCtx = canvasEl.getContext('2d');
const gapX = 10
const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {
    //! Desenho do Campo
    canvasCtx.fillStyle = ('#286047')
    canvasCtx.fillRect(0, 0, this.w, this.h)
  }
}

const line = {
  w: 15,
  h: field.h,
  draw: function () {
    //! Desenho Linha Central
    canvasCtx.fillStyle = '#ffffff';

    const x = field.w / 2 - this.w / 2
    const y = 0
    const w = this.w
    const h = this.h

    canvasCtx.fillRect(x, y, w, h)
  }
}

const leftPaddle = {
  x: gapX,
  y: 350,
  w: line.w,
  h: 200,
  draw: function () {
    //! Desenho Raquete esquerda
    // canvasCtx.fillStyle = '#ffffff';
    canvasCtx.fillRect(this.x, this.y, this.w, this.h)
  }
}
const rightPaddle = {
  x: field.w - line.w - gapX,
  y: 50,
  w: line.w,
  h: 200,
  draw: function () {
    //! Desenho Raquete direita
    // canvasCtx.fillStyle = '#ffffff';
    canvasCtx.fillRect(this.x, this.y, this.w, this.h)

  }
}
const ball = {
  x: 300,
  y: 200,
  r: 20,
  draw: function () {
    //! Desenho da bolinha
    canvasCtx.beginPath()
    canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    canvasCtx.fill()
  }
}

function setup() {
  canvasEl.width = field.w;
  canvasEl.height = field.h;
  canvasCtx.width = field.w;
  canvasCtx.height = field.h;
}

function draw() {
  field.draw();
  line.draw();
  leftPaddle.draw();
  rightPaddle.draw();
  ball.draw();




  //! Desenho o placar
  canvasCtx.font = "bold 72px Arial"
  canvasCtx.textAlign = "center"
  canvasCtx.textBaseline = "top"
  canvasCtx.fillStyle = "#01341D"
  canvasCtx.fillText("3", window.innerWidth * 0.25, 50)
  canvasCtx.fillText("1", window.innerWidth * 0.75, 50)
}
setup();
draw();
