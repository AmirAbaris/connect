"use client";

import { useParams, useRouter } from "next/navigation";
import CompleteProfileFirstStep from "../components/complete-profile-first-step";
import CompleteProfileSecondStep from "../components/complete-profile-second-step";


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

  return (
    <div>
      {step === 1 && <CompleteProfileFirstStep />}
      {step === 2 && <CompleteProfileSecondStep />}
    </div>
  );
}
