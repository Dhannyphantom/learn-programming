import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { Pay } from "react-paystack";

const AMOUNT = 600000;
const PUBLIC_KEY = "";

const PayStack = () => {
  const [userEmail, setUserEmail] = useState("");
  return (
    <div>
      <Input
        title="Email"
        onChangeText={(n, v) => setUserEmail(v)}
        name="email"
        placeholder="registered email"
        value={userEmail}
      />
      <Button title="Pay" />
    </div>
  );
};

export default PayStack;
