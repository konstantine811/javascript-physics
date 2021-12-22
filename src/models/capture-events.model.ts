export interface IMousePosition {
  x: number;
  y: number;
}

export interface ITouchPosition extends IMousePosition {
  isPressed: boolean;
}
