import React, { useState } from "react";
// import defaultProfilePic from "/defaultProfilePic.jpg";
import axios from "axios";
import defaultProfilePic from "/profileImage.jpg"
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [profilePicture, setProfilePicture] = useState(defaultProfilePic);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  const navigate = useNavigate()
  
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("MobileNo", mobileNumber);
    formData.append("addressLine1", address1);
    formData.append("addressLine2", address2);
    formData.append("pinCode", pincode);
    formData.append("profilePicture", profilePicture || defaultProfilePic);
    formData.append("state", state );
    formData.append("city",city);

    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );
      console.log(response.data);
      console.log(response.data.message) 
        toast.success(response.data.message);
        navigate('/login')

      
    } catch (error) {
      console.log("Error in Client Side", error);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Sign up
        </h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-2">

            <div className="mb-4">
              <div className="flex items-center space-x-4 flex-col">
                <img
                  src={
                    profilePicture instanceof File
                      ? URL.createObjectURL(profilePicture)
                      : profilePicture
                  }
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                />
                <input
                  id="profile-picture"
                  name="profile-picture"
                  type="file"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold  file:bg-indigo-50 file:text-indigo-700  hover:file:bg-indigo-100"
                  onChange={handleProfilePictureChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="mobile-number" className="sr-only">
                Mobile No.
              </label>
              <input
                id="mobile-number"
                name="mobile-number"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city" className="sr-only">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="state" className="sr-only">
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="address1" className="sr-only">
                Address Line 1
              </label>
              <input
                id="address1"
                name="address1"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Address Line 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="address2" className="sr-only">
                Address Line 2
              </label>
              <input
                id="address2"
                name="address2"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Address Line 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="pincode" className="sr-only">
                Pin Code
              </label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Pin Code"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSignup}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </a>
        </p>
      </div>
      <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
    </div>
  );
};

export default Signup;
