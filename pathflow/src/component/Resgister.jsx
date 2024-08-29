import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RegisterApi } from "../api/RegisterApi";

const Resgister = () => {
  const navigate = useNavigate();
  const registerMutation = useMutation({ mutationFn: RegisterApi });
  const [name, setName] = useState();
  const [firstSurname, setFirstSurname] = useState();
  const [secondSurname, setSecondSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  if (registerMutation.isSuccess) {
    return navigate("/login");
  }

  return (
    <div className="text-black flex h-screen justify-center items-center shadow-3xl">
      <div className="bg-[#92AFD7] flex rounded-3xl  h-[45rem] w-[75%] gap-5 p-12">
        <div className=" flex rounded-3xl w-[40%] items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-4xl font-medium text-light-White">
              ¡Bienvenido!
            </h1>
            <p className="text-xl font-medium text-light-White">
              Crea tu cuenta para comenzar
            </p>
            <div className="relative mb-4 w-full max-w-md">
              {/* <UserRound
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              /> */}
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                className=" text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A7684]"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </div>
            <div className="relative mb-4 w-full max-w-md">
              {/* <LayoutPanelTop
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              /> */}
              <input
                type="text"
                placeholder="Ingresa tu primer apellido"
                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A7684]"
                onChange={(event) => setFirstSurname(event.target.value)}
                value={firstSurname}
              />
            </div>
            <div className="relative mb-4 w-full max-w-md">
              {/* <LayoutPanelTop
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              /> */}
              <input
                type="text"
                placeholder="Ingresa tu segundo apellido"
                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A7684]"
                onChange={(event) => setSecondSurname(event.target.value)}
                value={secondSurname}
              />
            </div>
            <div className="relative mb-4 w-full max-w-md">
              {/* <Inbox
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              /> */}
              <input
                type="text"
                placeholder="Ingresa tu correo electrónico"
                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A7684]"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="relative mb-4 w-full max-w-md">
              {/* <KeyRound
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              /> */}
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A7684]"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <button
              onClick={() =>
                registerMutation.mutate({
                  name,
                  firstSurname,
                  secondSurname,
                  email,
                  password,
                })
              }
              className="bg-light-blue text-white py-2 px-20 rounded-lg hover:bg-[#5A7684] transition duration-300"
            >
              Registrarse
            </button>
            {/* {registerMutation.isLoading && (
              <div className="mt-2">
                <SecondSpinner />
              </div>
            )} */}
          </div>
        </div>
        <div className=" flex rounded-3xl w-[60%] justify-center">
          <div className="inline-block relaive">
            <img
              src="https://doodleipsum.com/700/outline?i=b7ed233aa7645bd277a545d012037053"
              alt="Remote Life by Karthik Srinivas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resgister;
