import "./page1.css";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import Card from "../../components/card";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from "react-router-dom";
export default function Page1() {
  return (
    <div className="container-wrapper">
      <div className="header">
        <div className="head-top">
          <GitHubIcon className="giticon" /> <p>GitHub Profile Viewer</p>{" "}
        </div>
        <Input
          className="search-box"
         
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className="iconSearch" />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
            <CloseIcon className="iconSearch"/>
            </InputAdornment>
          }
          placeholder="Search user"
        />
       
      </div>

      <div className="container">
      <Link className="link" to="/page2">
        <Card />
      </Link>
      <Link className="link" to="/page2">
        <Card />
      </Link>
      <Link className="link" to="/page2">
        <Card />
      </Link>
      <Link className="link" to="/page2">
        <Card />
      </Link>
      <Link className="link" to="/page2">
        <Card />
      </Link>
      <Link className="link" to="/page2">
        <Card />
      </Link>
      
        
    {" "}
        <p>Note: more search result should be lazy loaded as user scroll down </p>
      </div>
      
    </div>
  );
}
