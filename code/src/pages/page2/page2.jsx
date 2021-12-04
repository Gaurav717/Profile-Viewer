import React from "react";
import "./page2.css";
import ReplyIcon from "@mui/icons-material/Reply";
import Card2 from "../../components/card2"
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Link } from "react-router-dom";
export default function Page2() {
  return (
    <div className="page-wrapper">
      <div className="page-box">
        <div className="btn">
          {" "}
          <Link to="/">
          <ReplyIcon /> back
          </Link>
         <p> Back </p>{" "}
        </div>
        <div className="page-head">
          <PermContactCalendarIcon className="lg-icon" />
          <div className="text">
            Username
            <p className="desc">@handle</p>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="info">
          <div className="word"> Bio</div>
          <div className="meaning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eveniet dolorem expedita alias numquam iure beatae, aliquam minima,
            ad cumque modi cons{" "}
          </div>
        </div>
        <div className="info">
          <div className="word"> Works at</div>
          <div className="meaning">lorem ipsum</div>
        </div>
        <div className="info-n">
          <div className="b2">
            <div className="word"> Repositories</div>
            <div className="meaning">34</div>
          </div>
          <div className="b1">
            <div className="word">Followers</div>
            <div className="meaning">34</div>
          </div>
        </div>

        <div className="word">
          Pinned repositories
          <div className="repo">
          <Card2 /><Card2 /><Card2 /><Card2 /><Card2 />
            </div>
          
        </div>
      </div>
    </div>
  );
}