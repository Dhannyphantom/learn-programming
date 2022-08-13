import { useFormikContext } from "formik";
import Button from "../Button/Button";

export default function FormButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={handleSubmit} title={title} />;
}
