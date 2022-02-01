import "./App.css";
import React, { useState, FormEvent } from "react";
import Form from "./components/Form";
import UserInfo from "./components/UserInfo";
import UserStats from "./components/UserStats";
import UserLocation from "./components/UserLoaction";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

type Profile = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  blog: string | null;
};

const App = () => {
  const [profileData, serProfileData] = useState<Profile | null>(); //ХРАНИТ ДАННЫЕ
  const [login, setLogin] = useState<string>(); //ХРАНИТ ЛОГИН АККАУНТА
  const [status, setStatus] = useState<boolean>(false); //СТАТУС ДЛЯ БЛОКИРОВКИ КНОПКИ

  const [loginParam, setLoginParam] = useSearchParams(); //URL

  const handleGetUser = (e: FormEvent<HTMLFormElement>) => {
    //ФУНКЦИЯ ДЛЯ ФОРМЫ, ДОБАЛЯЕТ ЛОГИН
    e.preventDefault();
    setLoginParam({ login: `${login}` });
  };

  async function findUser() {
    //ЗАПРОС ДАННЫХ
    setStatus(true);
    try {
      const { data } = await axios.get(
        `https://61f5353b62f1e300173c404c.mockapi.io/${loginParam.get("login")}`
      );
      serProfileData(data[0]);
    } catch (e) {
      serProfileData(null);
    } finally {
      setStatus(false);
    }
  }

  React.useEffect(() => {
    if (loginParam.get("login")) {
      //ВЫЗОВ ФУНКЦИИ ПРИ ИЗМЕНЕНИИ ЛОГИНА, КОТОРЫЙ ЗАПИСЫВАЕТСЯ В URL
      findUser(); //ФУНКЦИЯ СРАБОТАЕТ, ТОЛЬКО ЕСЛИ В URL НАПИСАН ЛОГИН
    }
  }, [loginParam]);

  return (
    <div className="app-container">
      <Form
        setLogin={setLogin}
        status={status}
        handleGetUser={handleGetUser}
        setLoginParam={setLoginParam}
      />
      {loginParam.get("login") &&
        (profileData ? (
          <div className="app-user">
            <UserInfo
              avatar_url={profileData.avatar_url}
              name={profileData.name}
              login={profileData.login}
              bio={profileData.bio}
            />
            <UserStats
              followers={profileData.followers}
              following={profileData.following}
              public_repos={profileData.public_repos}
            />
            <UserLocation
              location={profileData.location}
              blog={profileData.blog}
            />
          </div>
        ) : (
          <h1 className="cantFind">
            {status ? "Загрузка..." : "Пользователь не найден"}
          </h1>
        ))}
    </div>
  );
};

export default App;
