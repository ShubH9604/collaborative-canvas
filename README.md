## ✨ Features

- **Real-time Collaborative Drawing**  
  Multiple users can draw simultaneously on a shared canvas with live synchronization using WebSockets.

- **Server-Authoritative State Management**  
  All drawing operations are validated, stored, and broadcast by the server to ensure consistent canvas state across all connected clients.

- **Global Undo / Redo**  
  Undo and redo actions operate on a shared operation history, ensuring deterministic behavior even when multiple users are drawing concurrently.

- **Low-Latency Drawing Experience**  
  Client-side prediction is used to provide smooth, responsive drawing while maintaining real-time synchronization with the server.

- **Raw HTML5 Canvas Implementation**  
  The drawing logic is implemented directly using the native Canvas API without relying on external drawing libraries.

---

## ⚠️ Known Limitations

- **Global Undo Behavior**  
  Undo and redo actions affect the most recent global drawing operation, regardless of the user who performed it. This design choice ensures consistency across all clients.

- **No Persistent Storage**  
  Canvas state is maintained in memory and is reset if the server restarts. Persistence can be added using a database or file-based storage.

- **Single Shared Canvas**  
  All connected users currently collaborate on a single canvas. Support for multiple isolated rooms can be added as an enhancement.

---


