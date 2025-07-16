"use client";

import { useState } from "react";

export type MultiStepFormProps = {
  onPrev: () => void;
  onNext: () => void;
};

export const useMultiStep = (totalSteps: number) => {
  const [step, setStep] = useState(0);

  const jumpTo = (step: number) =>
    setStep(Math.max(0, Math.min(step, totalSteps - 1)));
  const prev = () => jumpTo(step - 1);
  const next = () => jumpTo(step + 1);

  return {
    step,
    prev,
    next,
    jumpTo,
  };
};
