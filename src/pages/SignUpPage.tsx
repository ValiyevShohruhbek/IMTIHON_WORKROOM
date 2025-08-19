import { useEffect, useState } from "react";
import Step1 from "../components/steps/step-1";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import ProgressStepAuth from "../components/ui/progress-step-auth";
import useStepProgressAuth from "../hooks/useStepProgressAuth";
import Step2 from "../components/steps/step-2";
import Step4 from "../components/steps/step-4";
import RegistrationState from "../store/RegistrationState";
import useRegister from "../hooks/requests/useRegister";
import useSubmitAnswer from "../hooks/requests/useSubmitAnswer";
import { toast } from "react-toastify";
import { Step3 } from "../components/steps/step-3";
import useSubmitAnswerStep3 from "../hooks/requests/useSubmiAnswerStep3";
import { useNavigate, useNavigation } from "react-router-dom";
import { api } from "../config/axios";

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalStep = 4;
  const navigate = useNavigate();

  const { progressData, setProgressData } = useStepProgressAuth();
  const { email, password } = RegistrationState();
  const { mutateAsync: registerMutate } = useRegister();
  const { mutateAsync: submitAnswerMutate } = useSubmitAnswer();
  const { mutateAsync: submitAnswerMutateStep3 } = useSubmitAnswerStep3();

  const handleSavePreviousStep = () => {
    const prev = progressData.find((step) => step.step === currentStep - 1);
    if (!prev) return;
    prev.isSuccess = true;
    setProgressData([...progressData]);
  };

  const goNext = () => {
    toast.success(`Step ${currentStep} successfully completed`);
    setCurrentStep((s) => Math.min(s + 1, totalStep));
  };

  const incrementCurrentStep = async () => {
    if (currentStep === 1) {
      try {
        if (!email || !password) {
          toast.error("Email va parol majburiy.");
          return;
        }

        const res = await registerMutate({ email, password });
        console.log(res);
        const userId = res?.data?.data?.id;
        if (userId) {
          localStorage.setItem("user_id", String(userId));
        }

        goNext();
      } catch (err: any) {
        const msg =
          err?.response?.data?.message || err?.message || "Register failed";
        toast.error(msg);
      }
      return;
    }

    if (currentStep === 2) {
      await submitAnswerMutate();
      goNext();
    }

    if (currentStep === 3) {
      await submitAnswerMutateStep3();
      goNext();
    }
    if (currentStep === 4) {
      api.post("/auth/check-step-successfull-complate", {
        user_id: localStorage.getItem("user_id"),
        step: 3,
      });
      navigate("/");
      toast.success("You successfully registrated");
    }
  };

  const decrementCurrentStep = () => {
    setCurrentStep((prevState) => Math.max(prevState - 1, 1));
  };

  useEffect(() => {
    if (currentStep !== 1) {
      handleSavePreviousStep();
    }
  }, [currentStep]);

  const getCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  };

  return (
    <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
      <div className="flex h-full gap-x-8">
        <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
          <div className="flex flex-col gap-y-14 h-full items-start">
            <div className="mt-4 text-white gap-x-8">
              <Icon.companyLogo />
            </div>
            <p className="description text-white text-[40px] max-w-[400px]">
              Get started
            </p>
            <ProgressStepAuth steps={progressData} currentStep={currentStep} />
          </div>
        </div>

        <div className="w-[100%] flex flex-col justify-between max-w-[70%] rounded-[24px] bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex flex-col max-w-[403px] w-full mx-auto items-center pt-[55px]">
            <span className="font-bold text-[14px] text-[#3F8CFF]">
              Step {currentStep}/{totalStep}
            </span>
            <h2 className="signin-title">
              {progressData[currentStep - 1]?.title ?? "Registration"}
            </h2>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex w-full flex-col gap-y-[15px] mt-[33px]"
            >
              {getCurrentStep()}
            </form>
          </div>

          <div className="border-t-2 border-[#E4E6E8] pt-[10px] pb-[10px] flex items-center justify-between">
            {currentStep !== 1 && (
              <Button
                variant="small"
                onClick={decrementCurrentStep}
                className="flex items-center !bg-transparent !text-bold !text-blue-400 !shadow-none gap-x-3"
              >
                <Icon.leftArrowIcon />
                Previous
              </Button>
            )}

            <Button
              variant="small"
              disabled={currentStep === totalStep + 1} // Disable Next button if it's the last step
              onClick={incrementCurrentStep}
              className={`flex items-center mr-10 gap-x-3 ${
                currentStep === totalStep ? "disabled" : "ml-auto"
              }`}
            >
              Next Step
              <Icon.rightArrowIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
