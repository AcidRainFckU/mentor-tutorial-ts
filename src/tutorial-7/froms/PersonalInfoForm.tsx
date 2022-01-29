import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Form = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
type Props = {
  nextStep: any;
  setFormValues: any;
};
const schema = yup
  .object({
    email: yup
      .string()
      .email("Неверный формат почты")
      .required("Это обязательное поле"),
    firstName: yup
      .string()
      .min(2, "Имя должно содержать больше 2 символов")
      .required("Это обязательное поле"),
    lastName: yup.string().required("Это обязательное поле"),
    password: yup.string().min(3).required("Это обязательное поле"),
  })
  .required();

const PersonalInfoForm: React.FC<Props> = ({ nextStep, setFormValues }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<Form>({ mode: "onChange", resolver: yupResolver(schema) });

  const handleClickRegister: SubmitHandler<Form> = (values) => {
    setFormValues(values);
    nextStep("step2");
    reset();
  };
  return (
    <form
      className="form-container"
      onSubmit={handleSubmit(handleClickRegister)}
    >
      <TextField
        className="text-field"
        id="firstName"
        label="Имя"
        {...register("firstName")}
        helperText={errors.firstName && errors.firstName.message}
        error={!!errors.firstName}
      />
      <TextField
        className="text-field"
        id="standard-basic"
        label="Фамилия"
        {...register("lastName")}
        helperText={errors.lastName && errors.lastName.message}
        error={!!errors.lastName}
      />
      <TextField
        className="text-field"
        id="standard-basic"
        label="E-mail"
        {...register("email")}
        helperText={errors.email && errors.email.message}
        error={!!errors.email}
      />
      <TextField
        className="text-field"
        id="standard-basic"
        label="Пароль"
        {...register("password")}
        helperText={errors.password && errors.password.message}
        error={!!errors.password}
      />
      <div className="buttons">
        <Button
          className="button__clear"
          color="secondary"
          onClick={() => {
            reset();
          }}
          disabled={!isDirty}
        >
          Очистить
        </Button>
        <Button
          className="button"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Далее
        </Button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
