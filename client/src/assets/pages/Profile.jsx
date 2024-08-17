import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(null);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const user = response.data.user;

        // Ensure profile picture path uses '/' as separator
        const normalizedProfilePicture = user.profilePicture.replace(/\\/g, '/');

        setProfile({ ...user, profilePicture: normalizedProfilePicture });
        setFormValues({
          name: user.name || '',
          email: user.email || '',
          mobile: user.mobile || '',
          addressLine1: user.addressLine1 || '',
          addressLine2: user.addressLine2 || '',
          pinCode: user.pinCode || '',
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleUpdatePassword = ()=>{

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3000/user/profile", formValues);
      setProfile(formValues); // Update profile with new values
      setEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
          <img
            src={profile.profilePicture ? `http://localhost:3000/${profile.profilePicture}` : '/default-profile.png'}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-2">Name : {profile.name}</h1>
          <p className="text-lg text-gray-600 mb-4">Email : {profile.email}</p>
          <p className="text-gray-700 mb-6">Mobile No : {profile.MobileNo}</p>
          <p className="text-gray-700 mb-6">Address Line 1 : {profile.addressLine1}</p>
          <p className="text-gray-700 mb-6">Address Line 2 : {profile.addressLine2}</p>
          <p className="text-gray-700 mb-6">Pin code : {profile.pinCode}</p>

          {/* Edit Button */}
          <div className="buttons flex gap-8">
          <button
            onClick={() => setEditing(!editing)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {editing ? 'Save Changes' : 'Edit Profile'}
          </button>

          <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={handleUpdatePassword}
            >
              Update Password
            </button>
            </div>
        </div>
      </div>

      {/* Edit Form (Conditionally Rendered) */}
      {editing && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                value={formValues.mobile}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Address Line 1</label>
              <input
                type="text"
                name="address"
                value={formValues.addressLine1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Address Line 2</label>
              <input
                type="text"
                name="address"
                value={formValues.addressLine2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={formValues.pinCode}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Save Changes
            </button>

            
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
