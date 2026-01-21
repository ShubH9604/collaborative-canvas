export function replay(canvas, operations) {
    canvas.clear();
    operations.forEach(op => {
      op.points.forEach((p, i) => {
        canvas.drawPoint({
          ...p,
          start: i === 0,
          color: op.color,
          width: op.width
        });
      });
    });
  }