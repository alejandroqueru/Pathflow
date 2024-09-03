import React, { useState } from "react";
import { useMutation } from "react-query";
import { LoginApi } from "../api/LoginApi.js";
import { useAuth } from "../context/context.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [formState, createFormSetter] = useFormSetters({
  //     email: "",
  //     password: "",
  //   });
  const [error, setError] = useState("");
  const loginMutation = useMutation(LoginApi, {
    onError: (error) => {
      if (error.response && error.response.data) {
        setError("El correo electrónico o la contraseña son inválidos");
      } else {
        setError("Error durante el inicio de sesión");
      }
    },
    onSuccess: (data) => {
      login(data);
      navigate("/");
    },
  });

  const handleLogin = async () => {
    await loginMutation.mutateAsync({ email, password });
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="bg-white w-[30rem] h-[30rem] flex rounded-3xl items-center justify-center ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-medium text-black">¡Bienvenido!</h1>
          <p className="text-xl font-medium text-black">Inicia sesion</p>
          <form className="relative mb-4 w-full max-w-md ">
            <div className="relative mb-4 w-full">
              <input
                type="text"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                autoComplete="username"
                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>

            <div className="relative mb-4 w-full">
              <input
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                autoComplete="current-password"
                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            {error && <p className="text-red-500 mt-1">{error}</p>}

            <div className="flex justify-center items-center">
              <button
                className="bg-light-blue text-black py-2 px-20 rounded-lg hover:bg-blue-900 transition duration-300 relative"
                onClick={handleLogin}
                disabled={loginMutation.isLoading}
              >
                {!loginMutation.isLoading
                  ? "Login"
                  : loginMutation.isLoading && <div>...</div>}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="bg-strong-blue w-1/2 flex items-center justify-center">
        <img src={Stellar} className="h-full w-full pointer-events-none" />
      </div> */}
    </div>
  );
};

export { Login };
