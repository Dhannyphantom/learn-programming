import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { PaystackConsumer, usePaystackPayment } from "react-paystack";
import { nanoid } from "nanoid";
import userApi from "../../routes/userApi";
import styles from "./PayStack.module.css";
import UserDetail from "../UserDetail/UserDetail";

const AMOUNT = 610000;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY_PAYSTACK;
// const PUBLIC_KEY = "pk_test_28bf733e4c5ef3894b05fbea6732e0f5b93892d3";
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
        refId: nanoid(),
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
    reference: user.refId ?? nanoid(),
    metadata: {
      name: user.name,
      phone: user.phoneNumber,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>Pay For Your Class</h1>
        <p className={styles.subTitle}>
          Have you successfully enrolled and want to pay for your classes?
          <br />
        </p>

        <Input
          title="Email"
          onChangeText={(n, v) => setUserEmail(v)}
          name="email"
          placeholder="registered email"
          value={userEmail}
        />

        {/* REFACTOR CODE BELOW & LISTUSERS ITEM */}
        {user.verified && (
          <div className={styles.user}>
            <UserDetail item={user} />
          </div>
        )}
        <div className={styles.btn}>
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
    </div>
  );
};

export default PayStack;
