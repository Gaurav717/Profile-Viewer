import React from "react";
import "./card.css";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
export default function Card() {
  return (
    <div className="box">
      <div>
        <PermContactCalendarIcon className="icon"/>
      </div>
      <div className="text">
      Username
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vitae
          tempora quisquam do{" "}
        </p>
      </div>
    </div>
  );
}
