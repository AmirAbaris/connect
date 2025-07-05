"use client";

import { useParams, useRouter } from "next/navigation";
import CompleteProfileFirstStep from "../components/complete-profile-first-step";
import CompleteProfileSecondStep from "../components/complete-profile-second-step";
import { FirstStepData, Member, SecondStepData } from "@/types/member";
import { useMemberStore } from "@/providers/member-store-provider";
import useMember from "@/hooks/use-member";

export default function CompleteProfileStep() {
  const params = useParams();
  const router = useRouter();
  const memberState = useMemberStore((state) => state.member);
  const addMember = useMemberStore((state) => state.addMember);
  const { addToMember, isAdding } = useMember();

  const step = Number(params.step);
  const totalSteps = 2;

  if (isNaN(step) || step < 1 || step > totalSteps) {
    // Invalid step, redirect or show error
    router.push("/complete-profile/1");
    return null;
  }

  const handleFirstStepData = (data: FirstStepData) => {
    addMember(data);
  };

  const handleSecondStepData = async (data: SecondStepData) => {
    addMember(data);

    // db inset
    console.log(memberState);
    await addToMember(memberState as Omit<Member, "id">);
  };

  return (
    <div>
      {step === 1 && (
        <CompleteProfileFirstStep handleData={handleFirstStepData} />
      )}
      {step === 2 && (
        <CompleteProfileSecondStep
          handleData={handleSecondStepData}
          isLoading={isAdding}
        />
      )}
    </div>
  );
}
