export class CanvasManager {
    constructor(ctx) {
      this.ctx = ctx;
      this.ctx.lineCap = "round";
    }
  
    clear() {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  
    drawPoint({ x, y, color, width, start }) {
      if (start) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
      }
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = width;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }