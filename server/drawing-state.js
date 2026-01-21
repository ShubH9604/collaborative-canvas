import { v4 as uuid } from "uuid";

export class DrawingState {
  constructor() {
    this.operations = [];
    this.redoStack = [];
    this.activeStrokes = {}; // 🔥 key fix
  }

  startStroke(userId) {
    this.activeStrokes[userId] = {
      id: uuid(),
      userId,
      color: null,
      width: null,
      points: []
    };
  }

  addPoint(userId, point) {
    const stroke = this.activeStrokes[userId];
    if (!stroke) return;

    stroke.color ??= point.color;
    stroke.width ??= point.width;

    stroke.points.push({
      x: point.x,
      y: point.y
    });
  }

  endStroke(userId) {
    const stroke = this.activeStrokes[userId];
    if (!stroke) return;

    this.operations.push(stroke);
    this.redoStack = [];
    delete this.activeStrokes[userId];
  }

  undo() {
    const op = this.operations.pop();
    if (op) this.redoStack.push(op);
  }

  redo() {
    const op = this.redoStack.pop();
    if (op) this.operations.push(op);
  }
}