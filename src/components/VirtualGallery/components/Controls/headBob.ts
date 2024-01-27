export type HeadBobState = {
  active: boolean;
  timer: number;
};

export const updateHeadBob =
  (state: HeadBobState) => (timeElapsedS: number) => {
    if (state.active) {
      const wavelength = Math.PI;
      const nextStep =
        1 + Math.floor(((state.timer + 0.000001) * 10) / wavelength);
      const nextStepTime = (nextStep * wavelength) / 10;
      state.timer = Math.min(state.timer + timeElapsedS, nextStepTime);

      if (state.timer == nextStepTime) {
        state.active = false;
      }
    }
  };
