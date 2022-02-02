import React from "react";

type Props = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string | null;
};

const UserInfo: React.FC<Props> = ({ avatar_url, name, login, bio }) => {
  return (
    <div className="app-user_info">
      <div className="app-user_image">
        <img src={avatar_url} alt="" />
      </div>
      <div className="app-user_data">
        <h1 className="app-user_name">
          {name}
          <span>@{login.toLowerCase()}</span>
        </h1>
        <p className="app-user_about">{bio ? bio : "Био пустое"}</p>
      </div>
    </div>
  );
};

export default UserInfo;
