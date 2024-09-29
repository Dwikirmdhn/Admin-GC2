import axios from 'axios'
import { useState } from 'react';
import Toastify from 'toastify-js'
import { useNavigate } from "react-router-dom";

export default function LoginPage({ }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {

      const { data } = await axios.post(`https://h8-phase2-gc.vercel.app/apis/login`, { email, password });

      localStorage.setItem("access_token", data.data.access_token);
      navigate("/");

      Toastify({
        text: "Login success",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#008000",
        },
        onClick: function () { }, // Callback after click
      }).showToast();
    } catch (error) {
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FF0000",
        },
        onClick: function () { }, // Callback after click
      }).showToast();
    }
  }

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
      >
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-green-100"> {/* Changed background color */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              {/* Password input */}
              <div className="mb-4 relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="curent-password"
                />
              </div>
              {/* Login button */}
              <a href="index.html">
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">Login</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}