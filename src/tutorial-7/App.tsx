import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.scss";

type Form = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export default function App() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<Form>({ mode: "onChange" });

  const handleClickRegister: SubmitHandler<Form> = (values) => {
    console.log("ФОРМА!", values);
    reset();
  };

  return (
    <form className="App" onSubmit={handleSubmit(handleClickRegister)}>
      <TextField
        className="text-field"
        id="firstName"
        label="Имя"
        {...register("firstName", {
          validate: (value) => value !== "admin" || "Nice try!",
          required: "Это обязательное поле!",
        })}
        helperText={errors.firstName && errors.firstName.message}
        error={!!errors.firstName}
      />
      <TextField
        className="text-field"
        id="standard-basic"
        label="Фамилия"
        {...register("lastName", {
          required: "Это обязательное поле!",
        })}
        helperText={errors.lastName && errors.lastName.message}
        error={!!errors.lastName}
      />
      <TextField
        className="text-field"
        id="standard-basic"
        label="E-mail"
        {...register("email", {
          required: "Это обязательное поле!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
            message: "Это неверная почта!",
          },
        })}
        helperText={errors.email && errors.email.message}
        error={!!errors.email}
      />
      <TextField
        className="text-field"
        id="standard-basic"
        label="Пароль"
        {...register("password", {
          required: "Это обязательное поле!",
        })}
        helperText={errors.password && errors.password.message}
        error={!!errors.password}
      />
      <div className="buttons">
        <Button
          className="button"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Зарегистрироваться
        </Button>
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
      </div>
    </form>
  );
}
