import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hook/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setLoading, registerUser, loginWithGoogle, updateUserProfile } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleRegistration = (data) => {
    const profileImg = data.file[0];

    registerUser(data.email, data.password)
      .then(() => {
        const formData = new FormData();
        formData.append("image", profileImg);
        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_imageHostKey
        }`;
        axios.post(imageApiUrl, formData).then((res) => {
          const userprofile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userprofile)
            .then(() => {
              setLoading(false);
              toast.success("Registration successful!!");
              navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => toast.error(error.message));
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        setLoading(false);
        toast.success("Registration successful!!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="card bg-base-100 w-full md:max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Create an Account</h1>
        <p className="text-gray-400">Register with ZapShift</p>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset mt-3">
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("file", { required: true })}
              className="file-input w-full"
              placeholder="photo"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
            )}

            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input w-full"
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}

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
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
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
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must have at least one uppercase, at least one
                lowercase, at least one number and at least one special
                characters.
              </p>
            )}

            <button className="btn mt-4 bg-primary font-bold">Register</button>
            <p>
              Already have an account?{" "}
              <Link
                state={location.state}
                to="/login"
                className="text-green-900 underline"
              >
                Login
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
              Register with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
