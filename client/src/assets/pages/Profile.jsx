import React from 'react';
import { useState } from 'react';

const Profile = () => {
  const [editing, setEditing] = useState(false);

  // Dummy data for demonstration
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer with a passion for creating innovative solutions.',
    profilePicture: 'https://via.placeholder.com/150',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{user.email}</p>
          <p className="text-gray-700 mb-6">{user.bio}</p>

          {/* Edit Button */}
          <button
            onClick={() => setEditing(!editing)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {editing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>

      {/* Edit Form (Conditionally Rendered) */}
      {editing && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Bio</label>
              <textarea
                defaultValue={user.bio}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
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
