import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { StyledConatainerRL } from "../../components/containerRegisterAndLogin/style";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Navbar } from "../../components/navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { tUserReq } from "./type";
import { userCreateSchema } from "../../schemas/registerSchemas";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext/userContext";
import { ToastContainer } from "react-toastify";
import SpinLoading from "../../assets/Spin-1s-200px.gif";

export const Register = () => {
  const { register: registerUser, loadinSpin } = useContext(UserContext);
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<tUserReq>({
    resolver: zodResolver(userCreateSchema),
  });
  useEffect(() => {
    console.log(isSeller);
  }, [isSeller]);

  const onHandleSubmit: SubmitHandler<tUserReq> = (data) => {
    console.log(data);
    registerUser(data);

    reset();
  };

  return (
    <>
      <Navbar />
      <StyledConatainerRL>
        <ToastContainer />
        <div className="formRegister">
          <Form className="formLogin" onSubmit={handleSubmit(onHandleSubmit)}>
            <h2>Cadastro</h2>
            <p>Informações Pessoais</p>
            <Input
              label="Nome"
              type="text"
              placeholder="Ex: Samuel Leão"
              register={register("name")}
            />
            {errors.name ? (
              <span className="errorMessage">{errors.name.message}</span>
            ) : (
              <></>
            )}
            <Input
              label="Email"
              type="email"
              placeholder="Ex: samuel@kenzie.com.br"
              register={register("email")}
            />
            {errors.email ? (
              <span className="errorMessage">{errors.email.message}</span>
            ) : (
              <></>
            )}
            <Input
              label="CPF"
              type="text"
              placeholder="000.000.000-00"
              register={register("cpf")}
            />
            {errors.cpf ? (
              <span className="errorMessage">{errors.cpf.message}</span>
            ) : (
              <></>
            )}
            <Input
              label="Celular"
              type="text"
              placeholder="(DDD) 90000-0000"
              register={register("phone")}
            />
            {errors.phone ? (
              <span className="errorMessage">{errors.phone.message}</span>
            ) : (
              <></>
            )}
            <Input
              label="Data de Nascimento"
              type="number"
              placeholder="00/00/00"
              register={register("dateOfBirth")}
            />
            {errors.dateOfBirth ? (
              <span className="errorMessage">{errors.dateOfBirth.message}</span>
            ) : (
              <></>
            )}
            <Input
              label="Descrição"
              type="text"
              placeholder="Digitar descrição"
              register={register("description")}
            />
            {errors.description ? (
              <span className="errorMessage">{errors.description.message}</span>
            ) : (
              <></>
            )}
            <p>Informações de Endereço</p>
            <Input
              label="CEP"
              type="text"
              placeholder="00000.000"
              register={register("address.zipCode")}
            />
            {errors.address?.zipCode ? (
              <span className="errorMessage">
                {errors.address?.zipCode.message}
              </span>
            ) : (
              <></>
            )}
            <div className="formDoubleInput">
              <Input
                label="Estado"
                type="text"
                placeholder="Digitar Estado"
                register={register("address.state")}
              />
              {errors.address?.state ? (
                <span className="errorMessage">
                  {errors.address?.state.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                label="Cidade"
                type="text"
                placeholder="Digitar Cidade"
                register={register("address.city")}
              />
              {errors.address?.city ? (
                <span className="errorMessage">
                  {errors.address?.city.message}
                </span>
              ) : (
                <></>
              )}
            </div>
            <Input
              label="Rua"
              type="text"
              placeholder="Digitar Rua"
              register={register("address.street")}
            />
            {errors.address?.street ? (
              <span className="errorMessage">
                {errors.address?.street.message}
              </span>
            ) : (
              <></>
            )}
            <div className="formDoubleInput">
              <Input
                label="Numero"
                type="text"
                placeholder="Digitar Número"
                register={register("address.number")}
              />
              {errors.address?.number ? (
                <span className="errorMessage">
                  {errors.address?.number.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                label="Complemento"
                type="text"
                placeholder="Ex: apart 307"
                register={register("address.complement")}
              />
              {errors.address?.complement ? (
                <span className="errorMessage">
                  {errors.address?.complement.message}
                </span>
              ) : (
                <></>
              )}
            </div>
            <p>Tipo de conta</p>
            <div className="formButtonSeller">
              <button
                type="button"
                autoFocus={true}
                className={`${
                  !isSeller ? "active" : ""
                } formButtonSellerButton`}
                onClick={() => {
                  register("isSeller", { value: false });
                  setIsSeller(false);
                }}
              >
                Comprador
              </button>
              <button
                type="button"
                className={`${isSeller ? "active" : ""} formButtonSellerButton`}
                onClick={() => {
                  register("isSeller", { value: true });
                  setIsSeller(true);
                }}
              >
                Anunciante
              </button>
            </div>
            <Input
              label="Senha"
              type="password"
              placeholder="Digitar senha"
              register={register("password")}
            />
            {errors.password ? (
              <span className="errorMessage">{errors.password.message}</span>
            ) : (
              <></>
            )}
            <Input
              label="Comfirmar Senha"
              type="password"
              placeholder="Digitar senha"
              register={register("passwordConfirm")}
            />
            {errors.passwordConfirm ? (
              <span className="errorMessage">
                {errors.passwordConfirm.message}
              </span>
            ) : (
              <></>
            )}
            {!loadinSpin && (
              <Button buttonVariation="enter" type="submit">
                Finalizar Cadastro
              </Button>
            )}

            {loadinSpin && (
              <Button buttonVariation="enter" type="submit" disabled={true}>
                <img src={SpinLoading} alt="loading" />
              </Button>
            )}
          </Form>
        </div>
      </StyledConatainerRL>
      <Footer />
    </>
  );
};
