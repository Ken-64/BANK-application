import React from "react";
import "../List.css";
import { Link } from "react-router-dom";

const ListDetail = ({ user, index }) => {
  return (
    <li>
      <Link to={`/send/${index}`} state={{ user }} className="custom-link">
        <div className="EachList">
          <img
            className="ListUserIcon"
            src={user.icon}
            width="100px"
            alt={user.name}
          />
          <div className="ListuserName">{user.name}</div>
        </div>
      </Link>
    </li>
  );
};

export default ListDetail;
