import { CanvasManager } from "./canvas.js";
import { initSocket } from "./websocket.js";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const manager = new CanvasManager(ctx);

initSocket(canvas, manager);