import buttonFooter from "../../assets/footer-icon.svg";
import logo from "../../assets/logo-icon.svg";
import { FooterStyled } from "./style";

export const Footer = () => {
  return (
    <FooterStyled>
      <img src={logo} alt="" />
      <p>@ 2022 - Todos os direitos reservados.</p>
      <img src={buttonFooter} alt="" />
    </FooterStyled>
  );
};
