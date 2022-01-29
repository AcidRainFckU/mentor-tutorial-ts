import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Form = {
  city: string;
  street: string;
  appart: string;
};
type Props = {
  nextStep: any;
  setFormValues: any;
};

const schema = yup
  .object({
    city: yup.string().required("Укажите город"),
    street: yup.string().required("Укажите улицу"),
    appart: yup.string().required("Укажите квартиру"),
  })
  .required();

const AdressForm: React.FC<Props> = ({ setFormValues, nextStep }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<Form>({ mode: "onChange", resolver: yupResolver(schema) });

  const handleClickRegister: SubmitHandler<Form> = (values) => {
    setFormValues((prev: any) => {
      return { ...prev, ...values };
    });
    reset();
    nextStep("result");
  };
  return (
    <form
      className="form-container"
      onSubmit={handleSubmit(handleClickRegister)}
    >
      <TextField
        className="text-field"
        id="city"
        label="Город"
        {...register("city")}
        helperText={errors.city && errors.city.message}
        error={!!errors.city}
      />
      <TextField
        className="text-field"
        id="street"
        label="Улица"
        {...register("street")}
        helperText={errors.street && errors.street.message}
        error={!!errors.street}
      />
      <TextField
        className="text-field"
        id="appart"
        label="Номер квартиры"
        {...register("appart")}
        helperText={errors.appart && errors.appart.message}
        error={!!errors.appart}
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
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};

export default AdressForm;
