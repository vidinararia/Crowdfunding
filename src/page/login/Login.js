import React, { useState } from "react";
import { InputForm } from "../../component/input-form/InputForm";

export default function Login() {
  const [show, setShow] = useState(false);

  const handleShowPassword = () => {
    setShow((prevValue) => !prevValue);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 p-5 md:p-0">
      <div className="bg-white px-5 py-10 md:px-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-2">Login Akun</h1>
        <p className="text-gray-400 mb-5">
          Silahkan Login jika sudah terdaftar.
        </p>
        <InputForm label={"E-mail"} placeholder={"E-mail"} />
        <div className="relative">
          <InputForm
            label={"Password"}
            type={show ? "text" : "password"}
            placeholder={"Password"}
          />
          <div
            className="cursor-pointer text-xl text-gray-300 absolute top-10 right-3"
            onClick={handleShowPassword}
          >
            <ion-icon name={show ? "eye-off" : "eye"}></ion-icon>
          </div>
        </div>
        <button className="w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all">
          Login
        </button>
        <p className="text-gray-500 mt-3">
          Belum memiliki akun?{" "}
          <a
            href="/register"
            className="cursor-pointer text-blue-500 hover:underline hover:text-blue-700"
          >
            Daftar disini
          </a>
        </p>
      </div>
    </div>
  );
}
