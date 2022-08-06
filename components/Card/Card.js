import styles from "./Card.module.css";
import Image from "next/image";
import FormInput from "../FormInput/FormInput";
import { Formik } from "formik";
import { nanoid } from "nanoid";
import Button from "../Button/Button";
import formApi from "../../routes/formApi";
import { formInitials, formValidation } from "../../constants/schema";

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
  const handleFormSubmit = async (formData) => {
    try {
      const res = await formApi.post("/enroll", formData);
      console.log(res.data);
    } catch (err) {
      console.log("Erorr", err?.response?.data || err?.message);
    }

    // const res = await fetch("/api/form/enroll", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await res.json();
    // console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <Image
          src="/logo-transparent.png"
          className={styles.image}
          width={200}
          alt="company image"
          height={200}
        />
        <h3>{`Let's get you Enrolled`}</h3>
        <p>Enroll now to Learn Programming & User Experience</p>
      </div>
      <Formik
        validationSchema={formValidation}
        initialValues={formInitials}
        onSubmit={handleFormSubmit}
      >
        <div className={styles.rightPane}>
          <h4>Submit Your Info!</h4>
          <FormInput title="Name" name="name" placeholder="full name" />
          <FormInput title="Email" name="email" placeholder="email address" />
          <FormInput
            title="Contact"
            name="phoneNumber"
            placeholder="phone number"
          />
          <FormInput
            name="gender"
            title="Gender"
            boxData={boxData}
            placeholder="phone number"
            type="radio"
          />
          <FormInput
            title="Do you own a PC"
            boxData={pcData}
            name="hasPC"
            placeholder="phone number"
            type="radio"
          />
          <Button form />
        </div>
      </Formik>
    </div>
  );
}
