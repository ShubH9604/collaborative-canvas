### Data Flow
Client → WebSocket → Server → Broadcast → Clients

### Undo Strategy
Undo removes last global operation to maintain consistency.

### Conflict Resolution
No pixel-level conflicts. Strokes are immutable.

### Scaling
Rooms, Redis pub/sub, stroke batching.