import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import axios from "axios";

const UpdatePassword = ({ visible, onClose }) => {
  const [dialogVisible, setDialogVisible] = useState(visible);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  // Synchronize the visibility state with the prop
  useEffect(() => {
    setDialogVisible(visible);
  }, [visible]);

  const handleHide = () => {
    setDialogVisible(false);
    onClose(); // Call the onClose callback passed as a prop to notify the parent component
  };

 const handlePassword = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    const response = await axios.put(
      "http://localhost:3000/user/profile/updatePassword",
      {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
        confirmPassword: passwordData.newPassword, // Ensure this matches the new password
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Password updated successfully");
    handleHide();
  } catch (error) {
    console.error("Error updating password:", error);
    alert("Failed to update password.");
  }
};
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <Dialog
      visible={dialogVisible}
      modal
      onHide={handleHide}
      style={{ width: "450px" }}
    >
      <div
        className="flex flex-col bg-[#94b5fd] px-8 py-5 gap-4"
        style={{
          borderRadius: "12px",
          backgroundImage:
            "radial-gradient(circle at left top, var(--primary-400), var(--primary-700))",
        }}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block mx-auto"
        >
          {/* SVG content omitted for brevity */}
        </svg>
        <div className="inline-flex flex-column gap-2">
          <label
            htmlFor="currentPassword"
            className="text-primary-50 font-semibold"
          >
            Current Password
          </label>
          <InputText
            id="currentPassword"
            className="bg-white-alpha-20 border-none p-3 text-primary-50"
            value={passwordData.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div className="inline-flex flex-column gap-2">
          <label htmlFor="newPassword" className="text-primary-50 font-semibold">
            New Password
          </label>
          <InputText
            id="newPassword"
            className="bg-white-alpha-20 border-none p-3 text-primary-50"
            type="password"
            value={passwordData.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="inline-flex flex-column gap-2">
          <label htmlFor="confirmPassword" className="text-primary-50 font-semibold">
           Confirm Password
          </label>
          <InputText
            id="confirmPassword"
            className="bg-white-alpha-20 border-none p-3 text-primary-50"
            type="password"
            value={passwordData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex align-items-center gap-2">
          <Button
            label="Update"
            onClick={handlePassword}
            text
            className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
          />
          <Button
            label="Cancel"
            onClick={handleHide}
            text
            className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
          />
        </div>
      </div>
    </Dialog>
  );
};

export default UpdatePassword;
