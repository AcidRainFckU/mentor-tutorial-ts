import React from "react";
import { debounce } from "lodash";

type Props = {
  status: boolean;
  // setLogin: any;
  // handleGetUser: any;
  setLoginParam: any;
  // handleGetUser: () => void; \\\ВЫДАЕТ ОШИБКУ В APP.tsx
  // setLoginParam: (login: object) => void; \\\ВЫДАЕТ КАКОЙ-ТО ПИЗДЕЦ В APP.tsx
  // setLogin: (e: React.ChangeEventHandler<HTMLInputElement>) => void; \\\ВЫДАЕТ ЛЮТЫЙ ПИЗДЕЦ В APP.tsx
};

const Form: React.FC<Props> = ({
  // setLogin,
  status,
  // handleGetUser,
  setLoginParam,
}) => {
  const findUser = debounce((e: any) => {
    setLoginParam({ login: `${e.target.value}` });
  }, 500);
  return (
    <form className="app-form">
      <input
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
        onChange={findUser}
        required
      />
      <button disabled={status} className="app-form_btn">
        {!status ? "Найти" : "Загрузка..."}
      </button>
    </form>
  );
};

export default Form;
