"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OnboardingPasswordForm } from "@/modules/onboarding/components/onboarding-password-form";

const Page = () => {
  return (
    <div className="h-full flex flex-col space-y-8">
      <Dialog open={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <OnboardingPasswordForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
