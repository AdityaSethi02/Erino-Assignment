import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Grid2 } from "@mui/material"; // Use Grid2 instead of Grid

export const ContactForm = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/contacts", contact);
      alert("Contact added successfully!");
      setContact({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
      });
    } catch (err) {
      console.error("Error adding contact", err);
      alert("Failed to add contact.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2}>
        <Grid2 size={6} component="div">
                <TextField
                    label="First Name"
                    fullWidth
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleChange}
                    required
                />
        </Grid2>
        <Grid2 size={6}>
            <TextField
                label="Last Name"
                fullWidth
                name="lastName"
                value={contact.lastName}
                onChange={handleChange}
                required
            />
        </Grid2>
        <Grid2 size={6}>
            <TextField
                label="Email"
                fullWidth
                name="email"
                value={contact.email}
                onChange={handleChange}
                required
            />
        </Grid2>
        <Grid2 size={6}>
            <TextField
                label="Phone"
                fullWidth
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                required
            />
        </Grid2>
        <Grid2 size={6}>
            <TextField
                label="Company"
                fullWidth
                name="company"
                value={contact.company}
                onChange={handleChange}
                required
            />
        </Grid2>
        <Grid2 size={6}>
            <TextField
                label="Job Title"
                fullWidth
                name="jobTitle"
                value={contact.jobTitle}
                onChange={handleChange}
                required
            />
        </Grid2>
        <Grid2 size={12}>
            <Button type="submit" variant="contained">
                Add Contact
            </Button>
        </Grid2>
    </Grid2>
    </form>
  );
};
