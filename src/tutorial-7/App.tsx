import "./App.scss";
import AdressForm from "./froms/AdressForm";
import PersonalInfoForm from "./froms/PersonalInfoForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";

export default function App() {
  const [formValues, setFormValues] = React.useState<any>({});
  const history = useNavigate();
  const nextStep = (name: any) => {
    history(name);
  };

  console.log(formValues);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PersonalInfoForm
              nextStep={nextStep}
              setFormValues={setFormValues}
            />
          }
        />
        <Route
          path="step2"
          element={
            <AdressForm nextStep={nextStep} setFormValues={setFormValues} />
          }
        />
        <Route
          path="result"
          element={
            <ul>
              <li>{formValues.firstName}</li>
              <li>{formValues.lastName}</li>
              <li>{formValues.email}</li>
              <li>{formValues.password}</li>
              <li>{formValues.city}</li>
              <li>{formValues.street}</li>
              <li>{formValues.appart}</li>
            </ul>
          }
        />
      </Routes>
    </div>
  );
}
