import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ContactForm = () => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContact((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/contacts", contact);
            setContact({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                jobTitle: "",
            });
            navigate("/all");
        } catch (error) {
            console.log("Error adding contact", error);
        }
    }

    return (
        <Grid2 container direction="column" alignItems="center" justifyContent="center" sx={{ height: "100vh", width: "100vw", textAlign: "center", backgroundColor: "lightblue" }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, width: "100%" }}>
                <Typography variant="h4" color="black" gutterBottom>
                    Add New Contact
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={6}>
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
                        <Grid2 size={12} sx={{ textAlign: "center"}}>
                            <Button type="submit" variant="contained" color="primary">
                                Add Contact
                            </Button>
                        </Grid2>
                    </Grid2>
                </form>
            </Paper>
        </Grid2>
    )
}