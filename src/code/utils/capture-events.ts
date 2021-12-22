import {
  IMousePosition,
  ITouchPosition,
} from "@src/models/capture-events.model";

export const captureMouse = (element: HTMLElement): IMousePosition => {
  const mouse: IMousePosition = { x: 0, y: 0 };

  element.addEventListener(
    "mousemove",
    (event) => {
      let x, y;
      if (event.pageX || event.pageY) {
        x = event.pageX;
        y = event.pageY;
      } else {
        x =
          event.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        y =
          event.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      x -= element.offsetLeft;
      y -= element.offsetTop;
      mouse.x = x;
      mouse.y = y;
    },
    false
  );
  return mouse;
};

export const captureTouch = (element: HTMLElement) => {
  const touch: ITouchPosition = { x: null, y: null, isPressed: false };

  element.addEventListener(
    "touchstart",
    () => {
      touch.isPressed = true;
    },
    false
  );

  element.addEventListener(
    "touchend",
    () => {
      touch.isPressed = false;
      touch.x = null;
      touch.y = null;
    },
    false
  );

  element.addEventListener(
    "touchmove",
    (event) => {
      let x, y;
      const touch_event = event.touches[0]; // first touch

      if (touch_event.pageX || touch_event.pageY) {
        x = touch_event.pageX;
        y = touch_event.pageY;
      } else {
        x =
          touch_event.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        y =
          touch_event.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      x -= element.offsetLeft;
      y -= element.offsetTop;
      touch.x = x;
      touch.y = y;
    },
    false
  );
  return touch;
};
