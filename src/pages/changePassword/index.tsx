import { ToastContainer } from "react-toastify";
import { Button } from "../../components/button";
import { ContainerRL } from "../../components/containerRegisterAndLogin";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Navbar } from "../../components/navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tPasswordUpdateReq } from "../../context/userContext/types";
import { changePasswordSchema } from "../../schemas/registerSchemas";
import { UserContext } from "../../context/userContext/userContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const ChangePassword = () => {
  const { token } = useParams();
  const { recoverPassword, setPasswordToken } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tPasswordUpdateReq>({
    resolver: zodResolver(changePasswordSchema),
  });
  setPasswordToken(token);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <ContainerRL>
        <Form
          className="formChangePassword"
          onSubmit={handleSubmit(recoverPassword)}
        >
          <h2>Alterar senha</h2>
          <Input
            label="Nova senha"
            type="password"
            placeholder="Digitar senha"
            register={register("password")}
          />
          {errors.password?.message && (
            <span className="errorMessage">{errors.password.message}</span>
          )}
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digitar senha"
            register={register("passwordConfirm")}
          />
          {errors.passwordConfirm?.message && (
            <span className="errorMessage">
              {errors.passwordConfirm.message}
            </span>
          )}
          <Button buttonVariation="enter" type="submit">
            Salvar alteração
          </Button>
        </Form>
      </ContainerRL>
      <Footer />
    </>
  );
};
