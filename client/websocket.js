import { replay } from "./state.js";

export function initSocket(canvas, manager) {
  const socket = io();
  let drawing = false;

  const color = document.getElementById("color");
  const width = document.getElementById("width");

  canvas.addEventListener("pointerdown", e => {
    drawing = true;
    socket.emit("draw:start");
    sendPoint(e, true);
  });

  canvas.addEventListener("pointermove", e => {
    if (!drawing) return;
    sendPoint(e, false);
  });

  canvas.addEventListener("pointerup", () => {
    drawing = false;
    socket.emit("draw:end");
  });

  function sendPoint(e, start) {
    const point = {
      x: e.offsetX,
      y: e.offsetY,
      color: color.value,
      width: width.value,
      start
    };

    // 🔥 draw immediately (client-side prediction)
    manager.drawPoint(point);

    socket.emit("draw:point", point);
  }

  // 🔥 receive remote points
  socket.on("draw:point", point => {
    manager.drawPoint(point);
  });

  socket.on("canvas:replay", ops => replay(manager, ops));

  document.getElementById("undo").onclick = () => socket.emit("undo");
  document.getElementById("redo").onclick = () => socket.emit("redo");
}