import { DrawingState } from "./drawing-state.js";

const state = new DrawingState();

export function handleConnection(socket, io) {

  socket.on("draw:start", () => {
    state.startStroke(socket.id);
  });

  socket.on("draw:point", point => {
    state.addPoint(socket.id, point);

    // 🔥 broadcast to ALL except sender
    socket.broadcast.emit("draw:point", point);
  });

  socket.on("draw:end", () => {
    state.endStroke(socket.id);
  });

  socket.on("undo", () => {
    state.undo();
    io.emit("canvas:replay", state.operations);
  });

  socket.on("redo", () => {
    state.redo();
    io.emit("canvas:replay", state.operations);
  });

  socket.on("disconnect", () => {
    delete state.activeStrokes?.[socket.id];
  });
}