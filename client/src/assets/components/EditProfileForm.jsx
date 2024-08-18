import React, { useState } from 'react';
import axios from 'axios';

const EditProfileForm = ({ formValues, setFormValues, setEditing }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      // Create FormData to handle both text and file uploads
      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('mobile', formValues.mobile);
      formData.append('addressLine1', formValues.addressLine1);
      formData.append('addressLine2', formValues.addressLine2);
      formData.append('pinCode', formValues.pinCode);
      if (profilePicture) {
        formData.append('profilePicture', profilePicture);
      }

      await axios.put("http://localhost:3000/user/profile/update", formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            name="MobileNo"
            value={formValues.mobile}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={formValues.addressLine1}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
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
          <label className="block text-gray-700 text-sm font-medium mb-2">Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
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
  );
};

export default EditProfileForm;
