import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { PaystackConsumer } from "react-paystack";
import { nanoid } from "nanoid";
import userApi from "../../routes/userApi";

const AMOUNT = 600000;
const PUBLIC_KEY = "";
const STACK_CONFIG = {
  reference: nanoid(),
  amount: AMOUNT,
  publicKey: PUBLIC_KEY,
  text: "Pay For Tuition",
};

const PayStack = () => {
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState({ verified: false });

  const ConsumerProps = {
    ...STACK_CONFIG,
    email: user.email,
    metadata: {
      name: user.name,
      phone: user.phoneNumber,
    },
    onSuccess: (ref) => handlePaymentSuccess(ref),
    onClose: handlePaymentFailed,
  };

  const handleFetchUser = async () => {
    try {
      const res = await userApi.get(
        `/payment?email=${userEmail?.toLowerCase()}`
      );

      console.log(res.data);
      const userObj = res.data.user;
      setUser({
        verified: true,
        ...userObj,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handlePaymentSuccess = (ref) => {
    console.log("Successful");
  };
  const handlePaymentFailed = (type, ref) => {
    console.log("Failed");
  };

  return (
    <div>
      <Input
        title="Email"
        onChangeText={(n, v) => setUserEmail(v)}
        name="email"
        placeholder="registered email"
        value={userEmail}
      />
      {user.verified ? (
        <PaystackConsumer {...ConsumerProps}>
          {({ initializePayment }) => (
            <Button
              title="Pay Now"
              onPress={() =>
                initializePayment(handlePaymentSuccess, handlePaymentFailed)
              }
            />
          )}
        </PaystackConsumer>
      ) : (
        <Button title="Verify User" onPress={handleFetchUser} />
      )}
    </div>
  );
};

export default PayStack;
