import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext/userContext";
import { LoadigPage } from "./style";
import MotorLogo from "../../assets/Motors shop.svg";
import Spin from "../../assets/Spin-0.8s-194px.gif";

export const ProtectedRoutes = () => {
  const { user, loadinSpin, announcementUser, announcement } =
    useContext(UserContext);
  useEffect(() => {
    console.log(loadinSpin);
  }, [loadinSpin]);

  if (loadinSpin) {
    return (
      <LoadigPage>
        <img src={MotorLogo} alt="Motor Shop" className="logo" />
        <img src={Spin} alt="Loading" className="spin" />
      </LoadigPage>
    );
  }

  return <>{announcement ? <Outlet /> : <Navigate to="/" />}</>;
};
