import OTPInput from "otp-input-react";

const OTP = ({ OTP, setOTP }) => {
  return (
    <>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={4}
        otpType='number'
        disabled={false}
        // secure
        inputStyles={{
          margin: "2px",
          backgroundColor: "#dddd",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      />
    </>
  );
};

export default OTP;
