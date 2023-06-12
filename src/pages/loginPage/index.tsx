import { Button } from "../../components/button";
import { ContainerRL } from "../../components/containerRegisterAndLogin";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Navbar } from "../../components/navbar";

export const Login = () => {
  return (
    <>
      <Navbar />
      <ContainerRL>
        <Form className="formLogin">
          <h2>Login</h2>
          <Input
            label="Email"
            type="email"
            placeholder="Digitar email"
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digitar senha"
          />
          <div className="forgotPassword">
            <p>Esqueci minha senha</p>
          </div>
          <Button buttonVariation="enter" type="submit">
            Entrar
          </Button>
          <div className="noHaveAccount">
            <p>Ainda não possui conta?</p>
          </div>
          <Button buttonVariation="register" type="button">
            Cadastrar
          </Button>
        </Form>
      </ContainerRL>
      <Footer />
    </>
  );
};
