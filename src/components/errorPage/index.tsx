import { ErrorStyled } from "./style";
import MotorLogo from "../../assets/Motors shop.svg";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <ErrorStyled>
      <div className="vertical-center">
        <div className="container">
          <div id="notfound" className="text-center ">
            <img src={MotorLogo} alt={"Motor Shop"} />
            <h2>Oops! Pagina não encontrada</h2>
            <p>Desculpe mas a pagina que você esta procurando não existe!</p>
            <Link to="/">Voltar para Homepage</Link>
          </div>
        </div>
      </div>
    </ErrorStyled>
  );
};
