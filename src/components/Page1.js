import React from "react";
import { useNavigate } from "react-router-dom";
import RocketMan from "../img/rocketman.png";
import classes from "./Page1.module.css";

const Page1 = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("./page2");
  };

  const backPage = () => {
    navigate("/");
  };
  return (
    <div className={classes["main_container"]}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h1>
            Hey,Rocketeer,what
            <br /> are your coordinates?
          </h1>
        </div>
        <div className={classes.img}></div>
      </div>
      <div className={classes.right}>
        <div className={classes["right-title"]}>
          <h1>Redberry Origins</h1>
        </div>
        <p className={classes.content}>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );
};

export default Page1;
