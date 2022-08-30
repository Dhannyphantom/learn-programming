import styles from "./FormInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormikContext } from "formik";
import Input from "../Input/Input";

export default function FormInput({
  title,
  placeholder = "",
  name,
  boxData = [],
  type = "text",
}) {
  const { errors, values, touched, setFieldTouched, setFieldValue } =
    useFormikContext();

  const onChangeInput = (formName, formValue) => {
    setFieldValue(formName, formValue);
  };

  return (
    <div>
      <Input
        name={name}
        values={values}
        value={values[name]}
        onBlur={() => setFieldTouched(name, true, true)}
        title={title}
        boxData={boxData}
        type={type}
        placeholder={placeholder}
        onChangeText={onChangeInput}
      />
      {errors[name] && touched[name] && (
        <p className={styles.error}> {errors[name]} </p>
      )}
    </div>
  );
}
