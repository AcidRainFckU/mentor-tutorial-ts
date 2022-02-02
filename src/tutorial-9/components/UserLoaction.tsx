import React from "react";

type Props = {
  location: string | null;
  blog: string | null;
};

const UserLocation: React.FC<Props> = ({ location, blog }) => {
  return (
    <ul className="app-user_location">
      <li className="app-user_location-item">
        {location ? location : "Местонахождение неизвестно"}
      </li>
      <li className="app-user_location-item">
        <a href="http://archakov.im">{blog ? blog : "Ссылок нет"}</a>
      </li>
    </ul>
  );
};

export default UserLocation;
