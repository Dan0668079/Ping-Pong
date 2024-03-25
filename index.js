const canvasEl = document.querySelector('canvas');
const canvasCtx = canvasEl.getContext('2d');
console.log(canvasCtx)
const lineWidth = 15

function setup() {
  canvasEl.width = window.innerWidth;
  canvasCtx.width = window.innerWidth;
  canvasEl.height = window.innerHeight;
  canvasCtx.height = window.innerHeight;
}

function draw() {
  //! Desenho do Campo
  canvasCtx.fillStyle = ('#286047')
  canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  //! Desenho Linha Central
  canvasCtx.fillStyle = '#ffffff';

  const x = window.innerWidth / 2 - lineWidth / 2
  const y = 0
  const w = lineWidth
  const h = window.innerHeight

  canvasCtx.fillRect(x, y, w, h)
  //! Desenho Raquete esquerda
  canvasCtx.fillRect(10, 100, lineWidth, 200)
  //! Desenho Raquete esquerda
  canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 250, lineWidth, 200)
  //! Desenho da bolinha
  canvasCtx.beginPath()
  canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI, false)
  canvasCtx.fill()
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
