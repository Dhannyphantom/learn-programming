import styles from "./Card.module.css";
import Image from "next/image";
import FormInput from "../FormInput/FormInput";
import { nanoid } from "nanoid";
import Button from "../Button/Button";

const boxData = [
  {
    id: nanoid(),
    name: "gender",
    icon: ["fas", "venus"],
    value: "Male",
    selected: false,
  },
  {
    id: nanoid(),
    name: "gender",
    icon: ["fas", "mars"],
    value: "Female",
    selected: false,
  },
];
const pcData = [
  {
    id: nanoid(),
    name: "gender",
    icon: ["fas", "thumbs-up"],
    value: "Yes",
    selected: true,
  },
  {
    id: nanoid(),
    name: "gender",
    icon: ["fas", "thumbs-down"],
    value: "No",
    selected: false,
  },
];

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <Image
          src="/logo.png"
          className={styles.image}
          width={150}
          alt="company image"
          height={150}
        />
        <h3>{`Let's get you Enrolled`}</h3>
        <p>Enroll now to Learn Programming & User Experience</p>
      </div>
      <div className={styles.rightPane}>
        <h4>Submit Your Info!</h4>
        <FormInput title="Name" placeholder="full name" />
        <FormInput title="Email" placeholder="email address" />
        <FormInput title="Contact" placeholder="phone number" />
        <FormInput
          title="Gender"
          boxData={boxData}
          placeholder="phone number"
          type="radio"
        />
        <FormInput
          title="Do you own a PC"
          boxData={pcData}
          placeholder="phone number"
          type="radio"
        />
        <Button />
      </div>
    </div>
  );
}
