"use client";

import { useParams, useRouter } from "next/navigation";
import CompleteProfileFirstStep from "../components/complete-profile-first-step";
import CompleteProfileSecondStep from "../components/complete-profile-second-step";
import { FirstStepData, SecondStepData } from "@/types/member";

export default function CompleteProfileStep() {
  const params = useParams();
  const router = useRouter();

  const step = Number(params.step);
  const totalSteps = 2;

  if (isNaN(step) || step < 1 || step > totalSteps) {
    // Invalid step, redirect or show error
    router.push("/complete-profile/1");
    return null;
  }

  const handleFirstStepData = (data: FirstStepData) => {
    console.log(data);
  };

  const handleSecondStepData = (data: SecondStepData) => {
    console.log(data);
  };

  return (
    <div>
      {step === 1 && (
        <CompleteProfileFirstStep handleData={handleFirstStepData} />
      )}
      {step === 2 && (
        <CompleteProfileSecondStep handleData={handleSecondStepData} />
      )}
    </div>
  );
}
