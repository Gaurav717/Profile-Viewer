import React from "react";
import "./card2.css";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export default function Card2() {
  return (
    <div className="conCard">
      <PermContactCalendarIcon className="contact" />
      <div className="repoDesc">
        <div className="repoLoc">username/location</div>
        <div className="repotext">description here</div>
      </div>
    </div>
  );
}
