import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Rating({ rating, onClick = () => {} }) {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span onClick={() => onClick(index + 1)} style={{ cursor: "pointer" }}>
          {rating > index ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
}
