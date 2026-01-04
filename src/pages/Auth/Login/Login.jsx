import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hook/useAuth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { setLoading, loginUser, loginWithGoogle, forgetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        setLoading(false);
        toast.success("Log in successful!!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => toast.error(error.message));
  };
  const handleForgetPassword = () => {
    const email = getValues("email");
    forgetPassword(email)
      .then(() => {
        toast.info("Password reset email sent");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        setLoading(false);
        toast.success("Log in successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="card bg-base-100 w-full md:max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="text-gray-400">Login with ZapShift</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset mt-3">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                className="input w-full"
                {...register("password", {
                  required: true,
                })}
                placeholder="Password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute mt-4 -ml-7 cursor-pointer z-50"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required.</p>
            )}

            <div>
              <button
                type="button"
                onClick={handleForgetPassword}
                className="link link-hover"
              >
                Forgot password?
              </button>
            </div>
            <button className="btn mt-4 bg-primary font-bold">Login</button>
            <p>
              Don’t have any account?{" "}
              <Link
                state={location.state}
                to="/register"
                className="text-green-900 underline"
              >
                Register
              </Link>
            </p>

            <p className="font-bold text-gray-500 text-center">Or</p>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn bg-gray-100"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
