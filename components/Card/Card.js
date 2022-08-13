import { useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import FormInput from "../FormInput/FormInput";
import { Formik } from "formik";
import Button from "../Button/Button";
import formApi from "../../routes/formApi";
import { formInitials, formValidation } from "../../constants/schema";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../Loader/Loader";
import { boxData, pcData } from "../../constants/dataStore";
import FormButton from "../FormButton/FormButton";

export default function Card() {
  const [modal, setModal] = useState({ vis: false });
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setModal({ vis: false });
    try {
      const res = await formApi.post("/enroll", formData);
      setLoading(false);
      setModal({
        vis: true,
        msg: res.data.msg,
        type: "success",
      });
    } catch (err) {
      const resp = err?.response;
      setLoading(false);
      setModal({
        vis: true,
        msg: resp.status == 500 ? resp.statusText : resp?.data?.msg,
        type: "error",
      });
    }
  };

  return (
    <>
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
          <div className={styles.leftIcon}>
            <FontAwesomeIcon
              icon={["fas", "chevron-circle-right"]}
              color="white"
              size="2x"
            />
          </div>
        </div>
        <Formik
          validationSchema={formValidation}
          initialValues={formInitials}
          onSubmit={handleFormSubmit}
        >
          <div className={styles.rightPane}>
            <h4>Enrollment form</h4>
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
            <FormButton title="Enroll" />
            <Loader visible={loading} />
          </div>
        </Formik>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </>
  );
}
