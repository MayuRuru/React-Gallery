import { FaTimes } from "react-icons/fa";
import React from "react";

const Picture = ({ item, onDelete }) => {
  return (
    <div>
      <h3>
        {item.title} <FaTimes onClick={() => onDelete(item.id)} />
      </h3>
      <p>{item.user}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Picture;
