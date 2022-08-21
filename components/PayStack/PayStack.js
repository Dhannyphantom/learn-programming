import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { PaystackConsumer, usePaystackPayment } from "react-paystack";
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

const PayButton = ({ config, handlePaymentFailed, handlePaymentSuccess }) => {
  const initializePayment = usePaystackPayment(config);

  return (
    <Button
      title="Pay Now"
      onPress={() => {
        console.log(config);
        initializePayment(handlePaymentSuccess, handlePaymentFailed);
      }}
    />
  );
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

  const consumerProps = {
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
          Have you successfully enrolled and want to pay for your classes?
        </h1>

        <Input
          title="Email"
          onChangeText={(n, v) => setUserEmail(v)}
          name="email"
          placeholder="registered email"
          value={userEmail}
        />
        {user.verified ? (
          <PayButton
            config={consumerProps}
            handlePaymentFailed={handlePaymentFailed}
            handlePaymentSuccess={handlePaymentSuccess}
          />
        ) : (
          <Button title="Verify User" onPress={handleFetchUser} />
        )}
      </div>
    </div>
  );
};

export default PayStack;
