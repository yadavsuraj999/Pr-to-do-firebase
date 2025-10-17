import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { googleLogIn, logIn } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { auth } from "../firebase/config";

const Login = () => {

  const [input, setInput] = useState({ email: "", password: "" })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.email.trim() || !input.password.trim()) {
      toast.error("Please fill all the input fields");
      return;
    }
    dispatch(logIn(input));
    dispatch(googleLogIn(auth))

  }


  return (
    <div className="flex min-h-screen bg-gray-50 font-sans justify-center items-center">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 flex justify-center items-center p-8">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-semibold text-gray-800  text-center">To-Do Log In</h1>
            <p className="mb-8 text-center text-gray-500">"One List to Rule Them All"</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={input.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  id="password"
                  value={input.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="text-right mb-6">
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                Log In
              </button>


            </form>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-3 text-gray-400 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex justify-center">
              <button onClick={()=>dispatch(googleLogIn())} className="flex items-center justify-center w-full border-2 border-blue-500 rounded-lg py-2 hover:bg-blue-50 transition duration-200">
                <FcGoogle className="text-2xl mr-2" />
                <span className="text-gray-700 font-medium">Sign in with Google</span>
              </button>
            </div>

            <p className="text-center text-gray-500 mt-6 text-sm">
              Don’t have an account?{" "}
              <Link to={"/sign-up"}
                className="text-blue-600 hover:underline font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden md:flex md:flex-1 relative">
          <img
            src="/images/Log-In.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
