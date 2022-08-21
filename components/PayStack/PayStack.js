import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { PaystackConsumer } from "react-paystack";
import { nanoid } from "nanoid";
import userApi from "../../routes/userApi";
import styles from "./PayStack.module.css";

const AMOUNT = 600000;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY_PAYSTACK;
const STACK_CONFIG = {
  reference: nanoid(),
  amount: AMOUNT,
  publicKey: PUBLIC_KEY,
  text: "Pay For Tuition",
};

const PayStack = () => {
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState({ verified: false });

  const handleFetchUser = async () => {
    if (userEmail.length < 5) return false;
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

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>
          Have you successfully enrolled and want to pay for the classes?
        </h1>

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
    </div>
  );
};

export default PayStack;
