import { Button } from "../../components/button";
import { ContainerRL } from "../../components/containerRegisterAndLogin";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Navbar } from "../../components/navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, loginSchema } from "../../schemas/loginSchema";
import { UserContext } from "../../context/userContext/userContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { ModalContext } from "../../context/modalContext/modalContext";
import { ModalResetPassword } from "../../components/globalModal/resetPassword";
import SpinLoading from "../../assets/Spin-1s-200px.gif";

export const Login = () => {
  const { submitLogin, unauthorized, setUnauthorized, navigate, loadinSpin } =
    useContext(UserContext);
  const { openModalResetPass, setOpenModalResetPass } =
    useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
      <Navbar />
      <ContainerRL>
        <ToastContainer />
        {openModalResetPass && <ModalResetPassword />}
        <Form className="formLogin" onSubmit={handleSubmit(submitLogin)}>
          <h2>Login</h2>
          <Input
            label="Email"
            type="email"
            placeholder="Digitar email"
            register={register("email")}
            onInput={() => setUnauthorized("")}
          />
          {errors.email?.message && (
            <span className="errorMessage">{errors.email.message}</span>
          )}
          <Input
            label="Senha"
            type="password"
            placeholder="Digitar senha"
            register={register("password")}
            onInput={() => setUnauthorized("")}
          />
          {errors.password?.message && (
            <span className="errorMessage">{errors.password.message}</span>
          )}
          {unauthorized && <span className="errorMessage">{unauthorized}</span>}
          <div className="forgotPassword">
            <p onClick={() => setOpenModalResetPass(true)}>
              Esqueci minha senha
            </p>
          </div>
          {!loadinSpin && (
            <Button buttonVariation="enter" type="submit">
              Entrar
            </Button>
          )}

          {loadinSpin && (
            <Button buttonVariation="enter" type="submit" disabled={true}>
              <img src={SpinLoading} alt="loading" />
            </Button>
          )}
          <div className="noHaveAccount">
            <p>Ainda não possui conta?</p>
          </div>
          <Button
            buttonVariation="register"
            type="button"
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </Button>
        </Form>
      </ContainerRL>
      <Footer />
    </>
  );
};
