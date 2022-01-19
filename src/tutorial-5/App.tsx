import React from "react";
import Form from "./components/Form";
import Reviews from "./components/Reviews";
import { AddComment } from "./types";
import { useForm } from "react-hook-form";

import "./App.scss";

export const AppContext: any = React.createContext(null); //Контекст для функции удаления коментария

function App() {
  const [comments, setComments] = React.useState<AddComment[]>([]); //Стейт с коментариями
  const { register, handleSubmit, reset } = useForm<AddComment>(); //Для формы

  React.useEffect(() => {
    //При рендере добавляет в стейт локальные комменты
    const localComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(localComments);
  }, []);

  React.useEffect(() => {
    //Обновляет локальные комменты
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const onSubmit = handleSubmit((data, event: any) => {
    //Функция добавляющаяя комменты
    let createReview: AddComment = { ...data }; //Создаю переменную, чтобы потом добавить дату в объект
    createReview.createdAt = new Date()
      .toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .toString();
    setComments([...comments, createReview]);
    reset();
  });

  const deleteComment = (id: number) => {
    //Удаление коммента
    setComments(comments.filter((_, i) => i !== id));
  };

  return (
    <div className="container">
      <div className="reviews-block">
        <AppContext.Provider value={{ deleteComment }}>
          <Reviews comments={comments} />
          <Form onSubmit={onSubmit} register={register} />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
