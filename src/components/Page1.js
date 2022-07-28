import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import EmailInput from "../atoms/EmailInput";
import classes from "./Page1.module.css";
import FirstNameInput from "../atoms/FirstNameInput";
import LastNameInput from "../atoms/LastNameInput";
import TelInput from "../atoms/TelInput";

const Page1 = () => {
  const { setUser, data } = useContext(AuthContext);
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("./page2");
  };

  const backPage = () => {
    navigate("/");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    try {
      for (let [inputName, value] of fd.entries()) {
        loginData[inputName] = value;
      }
      const res = setUser(
        loginData.name,
        loginData.last_name,
        loginData.email,
        loginData.tel
      );
      console.log(res, "name");
    } finally {
      nextPage();
    }
  };
  return (
    <>
      <div className={classes["main_container"]}>
        <div className={classes.left}>
          <div className={classes.title}>
            <h1>
              Hey,Rocketeer,what
              <br /> are your coordinates?
            </h1>
          </div>
          <form className={classes["form-wrapper"]} onSubmit={onSubmit}>
            <div className={classes["form-wrapper-inputs"]}>
              <div className={classes.name}>
                <FirstNameInput name="name" />
              </div>
              <div className={classes["last_name"]}>
                <LastNameInput name="last-name" />
              </div>
              <div className={classes.email}>
                <EmailInput name="email" />
              </div>
              <div className={classes.tel}>
                <TelInput name="tel" />
              </div>
              <div className={classes["container-dots"]}>
                {/* here should be array */}
                <button
                  type="button"
                  className={classes["left-arrow"]}
                  onClick={backPage}
                >
                  <AiOutlineArrowLeft />
                </button>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <button type="submit" className={classes["right-arrow"]}>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </form>
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
    </>
  );
};

export default Page1;
