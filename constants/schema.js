import * as Yup from "yup";

export const formInitials = {
  name: "",
  email: "",
  phoneNumber: "",
  gender: "",
  hasPC: "Yes",
};

export const formValidation = Yup.object().shape({
  name: Yup.string().required().lowercase().min(4).max(255).label("Full name"),
  email: Yup.string().email().required().label("Email Address"),
  phoneNumber: Yup.string().required().label("Phone number"),
  gender: Yup.string().lowercase().required().label("Gender"),
  hasPC: Yup.string().lowercase().label("Own PC").required(),
});
