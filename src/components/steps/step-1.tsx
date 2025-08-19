import { useEffect, useRef, useState } from "react";
import useSendOtp from "../../hooks/requests/useSendOtp";
import useRegistrationStore from "../../store/RegistrationState";
import InputMask from "../ui/input-mask";
import { toast } from "react-toastify";
import OtpInput from "../ui/otp-input";
import CodeTimer from "../code-timer";
import Input from "../ui/Input";

const Step1 = () => {
  const [canSendOtp, setCanSendOtp] = useState<boolean>(true);
  const {
    mutateAsync,
    isSuccess: sendOtpSuccess,
    isError,
    error,
    isPending,
  } = useSendOtp();
  const ref = useRef<HTMLInputElement>(null);

  const { email, password, setEmail, setPassword } = useRegistrationStore();

  const [phoneNumber, setPhoneNumber] = useState<string>("+998773151707");
  const handleClick = () => {
    const phoneNumber = ref.current?.value;
    setPhoneNumber(phoneNumber);
    mutateAsync(phoneNumber);
  };

  useEffect(() => {
    if (sendOtpSuccess) {
      toast.success(`Sms code sended`);
      setCanSendOtp(false);
      localStorage.setItem("phone_number", phoneNumber);
    }
  }, [sendOtpSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error["response"].data.message);
    }
  }, [isError]);

  return (
    <>
      <InputMask
        handleClick={handleClick}
        isLoading={isPending}
        sendOtpSuccess={!canSendOtp}
        inputRef={ref}
        label="Mobile Number"
      />
      {!canSendOtp && (
        <OtpInput
          setCanSendOtp={setCanSendOtp}
          phone_number={phoneNumber}
          label="Code from SMS"
        />
      )}
      {!canSendOtp && (
        <CodeTimer
          setCanSendOtp={setCanSendOtp}
          phone_number={phoneNumber}
          time={59}
        />
      )}
      <Input
        inputClassName="w-full"
        type="email"
        required={true}
        label="Email Address"
        placeholder="youremail@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required={true}
        inputClassName="w-full"
        label="Create Password"
        type={"password"}
        placeholder="••••••••"
        eyeIcon={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default Step1;
