import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultPic from '../../../public/defaultProfilePic.jpg';
import EditProfileForm from '../components/EditProfileForm';
import UpdatePassword from '../components/UpdatePassword';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(null);
  const [updatePasswordVisible, setUpdatePasswordVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    state:'',
    city:''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        const user = response.data.user;
        const normalizedProfilePicture = user.profilePicture.replace(/\\/g, '/');

        setProfile({ ...user, profilePicture: normalizedProfilePicture });
        setFormValues({
          name: user.name || '',
          email: user.email || '',
          mobile: user.mobile || '',
          addressLine1: user.addressLine1 || '',
          addressLine2: user.addressLine2 || '',
          pinCode: user.pinCode || '',
          state: user.state|| '',
          city: user.city || '',
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUser();
  }, []);

  const handleEditToggle = () => setEditing(!editing);

  const handlePasswordDialogClose = () => {
    setUpdatePasswordVisible(false);
  };

  if (!profile) {
    return <div>404 Not Found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
          <img
            src={profile.profilePicture ? `http://localhost:3000/${profile.profilePicture}` : defaultPic}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-2">Name: {profile.name}</h1>
          <p className="text-lg text-gray-600 mb-4">Email: {profile.email}</p>
          <p className="text-gray-700 mb-6">Mobile No: {profile.MobileNo}</p>
          <p className="text-gray-700 mb-6">Address Line 1: {profile.addressLine1}</p>
          <p className="text-gray-700 mb-6">Address Line 2: {profile.addressLine2}</p>
          <p className="text-gray-700 mb-6">Pin code: {profile.city}</p>
          <p className="text-gray-700 mb-6">Pin code: {profile.state}</p>
          <p className="text-gray-700 mb-6">Pin code: {profile.pinCode}</p>

          {/* Buttons */}
          <div className="buttons flex gap-8">
            <button
              onClick={handleEditToggle}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {editing ? 'Save Changes' : 'Edit Profile'}
            </button>

            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => setUpdatePasswordVisible(true)}
            >
              Update Password
            </button>
          </div>
        </div>
      </div>

      {/* Edit Form (Conditionally Rendered) */}
      {editing && (
        <EditProfileForm
          formValues={formValues}
          setFormValues={setFormValues}
          setEditing={setEditing}
        />
      )}

      {/* Update Password Dialog */}
      {updatePasswordVisible && (
        <UpdatePassword
          visible={updatePasswordVisible}
          onClose={handlePasswordDialogClose}
        />
      )}
    </div>
  );
};

export default Profile;
