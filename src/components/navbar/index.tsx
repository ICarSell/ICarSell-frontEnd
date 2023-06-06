import { NavMain } from "./style";
import MainLogo from "../../assets/Motors shop.svg";
import Bars from "../../assets/bars.svg";
import CloseX from "../../assets/xmark.svg";
import { useState } from "react";
import { DropDownMenu } from "../dropDown";
import { Button } from "../button";

export const Navbar = () => {
  const [dropDownOn, setDropDownOn] = useState(false);
  const [dropDownOnUser, setDropDownOnUser] = useState(false);
  const [userOn, setUserOn] = useState(false);
  return (
    <NavMain>
      <img
        src={MainLogo}
        alt="Motor shop"
        className="logo"
        onClick={() => setUserOn(!userOn)}
      />

      {!dropDownOn && (
        <div className="desktop-div-main">
          {!userOn && (
            <img
              src={Bars}
              alt="Options bars"
              onClick={() => setDropDownOn(true)}
            />
          )}
          {!userOn && (
            <div className="desktop-div">
              <a href="">Fazer Login</a>
              <Button type="button" buttonVariation="register">
                Cadastrar
              </Button>
            </div>
          )}
          {userOn && (
            <div className="desktop-div-user">
              <div
                className="img-user"
                onClick={() => setDropDownOnUser(!dropDownOnUser)}
              ></div>
              <h3 onClick={() => setDropDownOnUser(!dropDownOnUser)}>
                Diego André
              </h3>
              {dropDownOnUser && <DropDownMenu />}
            </div>
          )}
        </div>
      )}
      {dropDownOn && (
        <div className="dropDown-div">
          <img
            src={CloseX}
            alt="Options close"
            onClick={() => setDropDownOn(false)}
          />
          <div>
            <a href="">Fazer Login</a>
            <Button type="button" buttonVariation="register">
              Cadastrar
            </Button>
          </div>
        </div>
      )}
    </NavMain>
  );
};
