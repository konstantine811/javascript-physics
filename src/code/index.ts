import { captureMouse, captureTouch } from "./utils/capture-events";

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  const canvas = document.getElementById("canvas");
  const mouse = captureMouse(canvas);
  const touch = captureTouch(canvas);
  canvas.addEventListener(
    "mousedown",
    () => {
      console.log("x: " + mouse.x + ", y:" + mouse.y);
    },
    false
  );
}
