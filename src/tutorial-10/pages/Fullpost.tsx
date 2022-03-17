import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";

import { posts } from "./Home";

const Fullpost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post: any = posts.find((obj) => obj.id === Number(id));

  if (!post) {
    return <h1>Статья не найдёна</h1>;
  }

  return (
    <div className="full-post">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.text}</p>

      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};

export default Fullpost;
