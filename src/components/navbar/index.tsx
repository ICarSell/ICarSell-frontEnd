import { NavMain } from "./style";
import MainLogo from "../../assets/Motors shop.svg";
import Bars from "../../assets/bars.svg";
import CloseX from "../../assets/xmark.svg";
import { useContext, useState } from "react";
import { DropDownMenu } from "../dropDown";
import { Button } from "../button";
import { UserContext } from "../../context/userContext/userContext";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context/modalContext/modalContext";

export const Navbar = () => {
  const { navigate, user } = useContext(UserContext);
  const { openModalUpdateAddress, openModalUpdateUser } =
    useContext(ModalContext);
  const token = localStorage.getItem("@TOKEN");
  const [dropDownOn, setDropDownOn] = useState(false);
  const [dropDownOnUser, setDropDownOnUser] = useState(false);

  return (
    <NavMain>
      <img
        src={MainLogo}
        alt="Motor shop"
        className="logo"
        onClick={() => navigate("/")}
      />

      {!dropDownOn && (
        <div className="desktop-div-main">
          {!token && (
            <img
              src={Bars}
              alt="Options bars"
              onClick={() => setDropDownOn(true)}
            />
          )}
          {!token && (
            <div className="desktop-div">
              <Link to={"/login"}>Fazer Login</Link>
              <Button
                type="button"
                buttonVariation="register"
                onClick={() => navigate("/register")}
              >
                Cadastrar
              </Button>
            </div>
          )}
          {token && (
            <div className="desktop-div-user">
              <div
                className="image-perfil"
                onClick={() => setDropDownOnUser(!dropDownOnUser)}
              >
                <p>{user?.name[0].toUpperCase()}</p>
              </div>
              <h3 onClick={() => setDropDownOnUser(!dropDownOnUser)}>
                {user?.name}
              </h3>
              {!openModalUpdateUser &&
                !openModalUpdateAddress &&
                dropDownOnUser && <DropDownMenu />}
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
            <Link to={"/login"}>Fazer Login</Link>
            <Button
              type="button"
              buttonVariation="register"
              onClick={() => navigate("/register")}
            >
              Cadastrar
            </Button>
          </div>
        </div>
      )}
    </NavMain>
  );
};
