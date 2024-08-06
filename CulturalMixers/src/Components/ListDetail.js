import React from "react";
import "../css/List.css";
import { Link } from "react-router-dom";

const ListDetail = ({ user, index }) => {
  return (
    <li>
      <Link to={`/send/${index}`} state={{ user }} className="custom-link">
        <div className="EachList">
          <img
            className="ListUserIcon"
            src={user.User.icon}
            width="100px"
            alt={user.User.name}
          />
          <div className="ListuserName">{user.User.name}</div>
        </div>
      </Link>
    </li>
  );
};

export default ListDetail;
