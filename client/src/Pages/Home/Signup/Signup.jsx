
import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isSeller: false,
    phoneNumber: "",
    email: "",
    address: "",
    shopName: "",
    shopLicenceNumber: "",
    gstinNumber: "",
    country: "",
    shopImage: null,
    idProof: null,
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSellerChange = (event) => {
    handleChange("isSeller", event.target.checked);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-checkbox-label">
          <h1>Signup</h1>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isSeller}
                onChange={handleSellerChange}
              />
            }
            label="I am a Seller"
          />
        </div>
        <div className="signup-fields">
          <div className="signup-personal">
            <div className="signup-fields">
              <TextField
                label="First Name"
                size="normal"
                margin="normal"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <TextField
                label="Last Name"
                size="normal"
                margin="normal"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <TextField
              label="Phone Number"
              size="normal"
              margin="normal"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
            <TextField
              label="Email"
              size="normal"
              margin="normal"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="Address"
              size="normal"
              multiline
              rows={4}
              margin="normal"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>
          <div className="signup-seller">
            {formData.isSeller && (
              <>
                <TextField
                  label="Shop Name"
                  size="normal"
                  margin="normal"
                  value={formData.shopName}
                  onChange={(e) => handleChange("shopName", e.target.value)}
                />
                <TextField
                  label="Shop Licence Number"
                  size="normal"
                  margin="normal"
                  value={formData.shopLicenceNumber}
                  onChange={(e) =>
                    handleChange("shopLicenceNumber", e.target.value)
                  }
                />
                <TextField
                  label="GSTIN Number"
                  size="normal"
                  margin="normal"
                  value={formData.gstinNumber}
                  onChange={(e) => handleChange("gstinNumber", e.target.value)}
                />
                <TextField
                  label="Country"
                  size="normal"
                  margin="normal"
                  value={formData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                />
                <TextField
                  label="Upload Shop Image"
                  size="normal"
                  type="file"
                  margin="normal"
                  onChange={(e) => handleChange("shopImage", e.target.files[0])}
                  focused
                />
                <TextField
                  label="Upload ID Proof"
                  size="normal"
                  type="file"
                  margin="normal"
                  onChange={(e) => handleChange("idProof", e.target.files[0])}
                  focused
                />
              </>
            )}
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="signup-button"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Signup;
