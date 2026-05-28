import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("FORM DATA:", formData);

    try {
      const res = await api.post(
        "/api/auth/login",
        formData
      );

      console.log("FULL RESPONSE:", res);

      console.log("RESPONSE DATA:", res.data);

      const token = res.data?.data?.token;

      console.log("TOKEN:", token);

      if (!token) {
        alert("Token not found");
        return;
      }

      localStorage.setItem("token", token);

      alert("Login success");

      navigate("/");
    } catch (error) {
      console.log("FULL ERROR:", error);

      console.log(
        "ERROR RESPONSE:",
        error.response
      );

      alert(
        error?.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB] ">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          TouristPay Admin
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}