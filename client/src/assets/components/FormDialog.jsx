import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "react-use-cart";


export default function FormDialog({ items, totalItems, totalPrice }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    mobileNumber: "",
    email: ""
  });

    const {
      emptyCart
    } = useCart();

  const handleUserFetch = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (open) {
      handleUserFetch();
    }
  }, [open]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const orderData = {
      userId: user._id,
      items, // Items data from props
      address: {
        addressLine1: formJson.addressLine1,
        addressLine2: formJson.addressLine2,
        city: formJson.city,
        state: formJson.state,
        postalCode: formJson.postalCode,
        mobileNumber: formJson.mobileNumber, // Ensure mobile number is included
      },
      totalItems,
      totalPrice,
    };

    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axios.post("http://localhost:3000/user/order", orderData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        emptyCart()
        navigate("/checkout");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Buy Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Enter Your Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="fullName"
            name="fullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            value={user.name || ""}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            id="addressLine1"
            name="addressLine1"
            label="Address Line 1"
            type="text"
            fullWidth
            variant="standard"
            value={user.addressLine1 || ""}
            onChange={(e) => setUser({ ...user, addressLine1: e.target.value })}
          />
          <TextField
            margin="dense"
            id="addressLine2"
            name="addressLine2"
            label="Address Line 2"
            type="text"
            fullWidth
            variant="standard"
            value={user.addressLine2 || ""}
            onChange={(e) => setUser({ ...user, addressLine2: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            id="city"
            name="city"
            label="City"
            type="text"
            fullWidth
            variant="standard"
            value={user.city || ""}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            id="state"
            name="state"
            label="State"
            type="text"
            fullWidth
            variant="standard"
            value={user.state || ""}
            onChange={(e) => setUser({ ...user, state: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            id="postalCode"
            name="postalCode"
            label="Postal Code"
            type="text"
            fullWidth
            variant="standard"
            value={user.postalCode || ""}
            onChange={(e) => setUser({ ...user, postalCode: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            type="tel"
            fullWidth
            variant="standard"
            value={user.mobileNumber || ""}
            onChange={(e) =>
              setUser({ ...user, mobileNumber: e.target.value })
            }
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={user.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
