import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="flex min-h-screen bg-gray-50 font-sans justify-center items-center">
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">

                <div className="hidden md:flex md:flex-1 relative bg-gray-50 justify-center items-center p-8">
                    <img
                        src="/images/Sign-Up.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full "
                    />
                </div>

                <div className="flex-1 flex justify-center items-center p-8">
                    <div className="w-full max-w-sm">
                        <h2 className="text-3xl font-semibold text-gray-800  text-center">
                            To-Do Sign Up
                        </h2>
                        <p className="text-center text-gray-500 mb-8">"One List to Rule Them All"</p>

                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Repeat Password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                            Sign Up
                        </button>

                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-3 text-gray-400 text-sm">or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        <div className="flex justify-center">
                            <button className="flex items-center justify-center w-full border-2 border-blue-500 rounded-lg py-2 hover:bg-blue-50 transition duration-200">
                                <FcGoogle className="text-2xl mr-2" />
                                <span className="text-gray-700 font-medium">Sign in with Google</span>
                            </button>
                        </div>

                        <p className="text-center text-gray-500 mt-6 text-sm">
                            Already have an account?{" "}
                            <Link to={"/"}  className="text-blue-600 hover:underline font-semibold">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;
