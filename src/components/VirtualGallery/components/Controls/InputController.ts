type ControllerState = {
  leftButton: boolean;
  rightButton: boolean;
  mouseXDelta: number;
  mouseYDelta: number;
  mouseX: number;
  mouseY: number;
  alpha: number;
  beta: number;
  gamma: number;
};

export class InputController {
  private target;
  current: ControllerState = {
    leftButton: false,
    rightButton: false,
    mouseXDelta: 0,
    mouseYDelta: 0,
    mouseX: 0,
    mouseY: 0,
    alpha: 0,
    beta: 0,
    gamma: 0,
  };
  private previous: ControllerState | null = null;
  private keys: { [key: string]: boolean } = {};

  constructor(target?: HTMLElement) {
    this.target = target || document;
    this.target.addEventListener(
      'mousedown',
      (e) => {
        this.onMouseDown(e as MouseEvent);
      },
      false,
    );
    this.target.addEventListener(
      'mousemove',
      (e) => {
        this.onMouseMove(e as MouseEvent);
      },
      false,
    );
    this.target.addEventListener(
      'mouseup',
      (e) => {
        this.onMouseUp(e as MouseEvent);
      },
      false,
    );
    this.target.addEventListener(
      'keydown',
      (e) => {
        this.onKeyDown(e as KeyboardEvent);
      },
      false,
    );
    this.target.addEventListener(
      'keyup',
      (e) => {
        this.onKeyUp(e as KeyboardEvent);
      },
      false,
    );
    window.addEventListener(
      'deviceorientation',
      (e) => {
        this.onDeviceOrientation(e as DeviceOrientationEvent);
      },
      true,
    );
  }

  private onDeviceOrientation(e: DeviceOrientationEvent) {
    if (!e.alpha || !e.beta || !e.gamma) {
      return;
    }
    this.current.alpha = e.alpha;
    this.current.beta = e.beta;
    this.current.gamma = e.gamma;
  }

  private onMouseMove(e: MouseEvent) {
    this.current.mouseX = e.pageX - window.innerWidth / 2;
    this.current.mouseY = e.pageY - window.innerHeight / 2;

    if (this.previous === null) {
      this.previous = { ...this.current };
    }

    this.current.mouseXDelta = this.current.mouseX - this.previous.mouseX;
    this.current.mouseYDelta = this.current.mouseY - this.previous.mouseY;
  }

  private onMouseDown(e: MouseEvent) {
    this.onMouseMove(e);

    switch (e.button) {
      case 0: {
        this.current.leftButton = true;
        break;
      }
      case 2: {
        this.current.rightButton = true;
        break;
      }
    }
  }

  private onMouseUp(e: MouseEvent) {
    this.onMouseMove(e);

    switch (e.button) {
      case 0: {
        this.current.leftButton = false;
        break;
      }
      case 2: {
        this.current.rightButton = false;
        break;
      }
    }
  }

  private onKeyDown(e: KeyboardEvent) {
    this.keys[e.code] = true;
  }

  private onKeyUp(e: KeyboardEvent) {
    this.keys[e.code] = false;
  }

  key(code: string) {
    return !!this.keys[code];
  }

  isReady() {
    return this.previous !== null;
  }

  update() {
    if (this.previous !== null) {
      this.current.mouseXDelta = this.current.mouseX - this.previous.mouseX;
      this.current.mouseYDelta = this.current.mouseY - this.previous.mouseY;

      this.previous = { ...this.current };
    }
  }
}
