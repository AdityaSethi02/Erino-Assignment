import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import { Box, Button, Grid2, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { BACKEND_URL } from "../config";

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
            await axios.post(`${BACKEND_URL}/contacts`, contact);
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
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    <Button onClick={() => navigate("/")} sx={{ minWidth: 0, padding: 0 }}>
                        <Typography variant="h4" color="black" gutterBottom>
                            <ArrowBack />
                        </Typography>
                    </Button>
                    <Typography variant="h4" color="black" gutterBottom sx={{ flexGrow: 1, textAlign: "center" }}>
                        Add Contact
                    </Typography>
                    <Button onClick={() => navigate("/all")} sx={{ minWidth: 0, padding: 0 }}>
                        <Typography variant="h4" color="black" gutterBottom>
                            <ArrowForward />
                        </Typography>
                    </Button>
                </Box>
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