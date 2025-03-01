import { useForm } from "react-hook-form";
import { Schema } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignUp() {
  const schema = yup.object({
    email: yup.string().required().email(),
    username: yup.string().required(),
    password: yup.string().required().min(8).max(16),
  });
  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(Schema),
  });
  return <div></div>;
}

export default SignUp;
