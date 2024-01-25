import * as THREE from 'three';

import { InputController } from './InputController';
import { clamp } from './clamp';

const KEYS = {
  a: 'KeyA',
  s: 'KeyS',
  w: 'KeyW',
  d: 'KeyD',
};

export class FirstPersonCamera {
  private camera;
  private input = new InputController();
  private rotation = new THREE.Quaternion();
  private translation = new THREE.Vector3(0, 170, 0);
  private phi = 0;
  private phiSpeed = 8;
  private theta = 0;
  private thetaSpeed = 5;
  private headBobActive = false;
  private headBobTimer = 0;

  constructor(camera: THREE.Camera) {
    this.camera = camera;
  }

  update(timeElapsedS: number) {
    this.updateRotation();
    this.updateCamera();
    this.updateTranslation(timeElapsedS);
    this.updateHeadBob(timeElapsedS);
    this.input.update();
  }

  private updateCamera() {
    this.camera.quaternion.copy(this.rotation);
    this.camera.position.copy(this.translation);
    this.camera.position.y += Math.sin(this.headBobTimer * 10) * 1.5;

    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(this.rotation);

    forward.multiplyScalar(100);
    forward.add(this.translation);

    this.camera.lookAt(forward);
  }

  private updateHeadBob(timeElapsedS: number) {
    if (this.headBobActive) {
      const wavelength = Math.PI;
      const nextStep =
        1 + Math.floor(((this.headBobTimer + 0.000001) * 10) / wavelength);
      const nextStepTime = (nextStep * wavelength) / 10;
      this.headBobTimer = Math.min(
        this.headBobTimer + timeElapsedS,
        nextStepTime,
      );

      if (this.headBobTimer == nextStepTime) {
        this.headBobActive = false;
      }
    }
  }

  private updateTranslation(timeElapsedS: number) {
    const forwardVelocity =
      (this.input.key(KEYS.w) ? 1 : 0) + (this.input.key(KEYS.s) ? -1 : 0);
    const strafeVelocity =
      (this.input.key(KEYS.a) ? 1 : 0) + (this.input.key(KEYS.d) ? -1 : 0);

    const qx = new THREE.Quaternion();
    qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.phi);

    const forward = new THREE.Vector3(0, 0, -10);
    forward.applyQuaternion(qx);
    forward.multiplyScalar(forwardVelocity * timeElapsedS * 10);

    const left = new THREE.Vector3(-10, 0, 0);
    left.applyQuaternion(qx);
    left.multiplyScalar(strafeVelocity * timeElapsedS * 10);

    const boundary = 450;
    if (this.translation.z + forward.z + left.z < -boundary) {
      forward.z = left.z = 0;
    } else if (this.translation.z + forward.z + left.z > boundary) {
      forward.z = left.z = 0;
    }
    if (this.translation.x + forward.x + left.x < -boundary) {
      forward.x = left.x = 0;
    } else if (this.translation.x + forward.x + left.x > boundary) {
      forward.x = left.x = 0;
    }

    this.translation.add(forward);
    this.translation.add(left);

    if (forwardVelocity != 0 || strafeVelocity != 0) {
      this.headBobActive = true;
    }
  }

  private updateRotation() {
    const xh = this.input.current.mouseXDelta / window.innerWidth;
    const yh = this.input.current.mouseYDelta / window.innerHeight;

    this.phi += -xh * this.phiSpeed;
    this.theta = clamp(
      this.theta + -yh * this.thetaSpeed,
      -Math.PI / 3,
      Math.PI / 3,
    );

    const qx = new THREE.Quaternion();
    qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.phi);
    const qz = new THREE.Quaternion();
    qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.theta);

    const q = new THREE.Quaternion();
    q.multiply(qx);
    q.multiply(qz);

    this.rotation.copy(q);
  }
}
