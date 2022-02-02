import React from "react";

type Props = {
  followers: number | string;
  following: number | string;
  public_repos: number | string;
};

const UserStats: React.FC<Props> = ({ followers, following, public_repos }) => {
  return (
    <ul className="app-user_stats">
      <li className="app-user_stats-item">
        Репозитории
        <span>{public_repos}</span>
      </li>
      <li className="app-user_stats-item">
        Подписчиков
        <span>{followers}</span>
      </li>
      <li className="app-user_stats-item">
        Подписок
        <span>{following}</span>
      </li>
    </ul>
  );
};

export default UserStats;
