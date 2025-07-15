"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OnboardingUsernameForm } from "@/modules/onboarding/components/onboarding-username-form";

const Page = () => {
  return (
    <div className="h-full flex flex-col space-y-8">
      <Dialog open={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <OnboardingUsernameForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
