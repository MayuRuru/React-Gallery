//import { FaTimes } from "react-icons/fa";
import React from "react";

function Picture(props) {
  return (
    <div>
      <li>
        <div>
          <img src={props.image} />
        </div>

        <div>
          <h3>{props.title}</h3>
          <p>{props.user}</p>
          <p>{props.description}</p>
        </div>
      </li>
    </div>
  );
}

/*
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
*/

export default Picture;
