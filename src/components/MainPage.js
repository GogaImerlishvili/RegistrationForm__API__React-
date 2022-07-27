import React from "react";
import { useNavigate } from "react-router-dom";
import RocketMan from "../img/rocketman.png";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/page1");
  };
  return (
    <div className={classes["main_container"]}>
      <div className={classes.title}>
        <h1>welcome rocketeer!</h1>
        <div className={classes["start-button"]}>
          <button type="button" onClick={nextPage}>
            Start Questionnaire
          </button>
        </div>
        <div className={classes["submitted-button"]}>
          <button>submitted button</button>
        </div>
        <div className={classes.img}>
          <img src={RocketMan} alt="rocket man" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
