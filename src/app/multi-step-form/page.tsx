"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMultiStep } from "@/modules/multi-step-form/hooks/use-multi-step";
import { StepNameForm } from "@/modules/multi-step-form/components/step-name-form";
import { StepPasswordForm } from "@/modules/multi-step-form/components/step-password-form";
import { StepUsernameForm } from "@/modules/multi-step-form/components/step-username-form";
import { ProgressIndicator } from "@/modules/multi-step-form/components/progress-indicator";

const StepComponents = [
  {
    component: StepNameForm,
  },
  {
    component: StepPasswordForm,
  },
  {
    component: StepUsernameForm,
  },
];

const Page = () => {
  const { step, next, prev, jumpTo } = useMultiStep(StepComponents.length);

  const CurrentStepComponent = StepComponents[step].component;

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="min-w-md mx-auto p-8 space-y-8">
          <ProgressIndicator
            currentStep={step}
            totalSteps={StepComponents.length}
            onStepClick={jumpTo}
          />
          <CurrentStepComponent onPrev={prev} onNext={next} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Page;
