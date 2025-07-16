import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";

type ProgressIndicatorProps = {
  totalSteps: number;
  currentStep: number;
  onStepClick: (step: number) => void;
};

export const ProgressIndicator = ({
  totalSteps,
  currentStep,
  onStepClick,
}: ProgressIndicatorProps) => {
  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <Stepper value={currentStep + 1}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <StepperItem key={index} step={index + 1} className="not-last:flex-1">
            <StepperTrigger onClick={() => onStepClick(index)}>
              <StepperIndicator />
            </StepperTrigger>
            {index < totalSteps - 1 && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  );
};
