import { useEffect, useState } from "react"
import axios from "axios"
import { Button, Grid2, Paper, Typography } from "@mui/material";
import { BACKEND_URL } from "../config";
import { useNavigate, useParams } from "react-router-dom";

interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
}

export const Contact = () => {
    const [contact, setContact] = useState<Contact>();
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/contacts/${id}`)
            .then((response) => {
                setContact(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Contact not found", error);
            })
    }, [id]);

    const deleteContact = (id: number) => {
        axios.delete(`${BACKEND_URL}/contacts/${id}`);
        navigate("/all");
    }

    return (
        <Grid2 container direction="column" alignItems="center" justifyContent="center" sx={{ height: "100vh", width: "100vw", textAlign: "center", backgroundColor: "lightblue" }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 5000, maxHeight: 500, height: "90%", width: "90%" }}>
                <Typography variant="h4" color="black" gutterBottom>
                    Contact Details
                </Typography>
                <Grid2 container spacing={2}>
                    <Grid2 size={6} sx={{pb: 2}}>
                        <Typography sx={{fontSize: 50}}>{contact?.firstName}  {contact?.lastName}</Typography>
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography></Typography>
                    </Grid2>
                    <Grid2 container spacing ={2} size={6}>
                        <Grid2 size={6}>
                            <Typography sx={{fontSize: 30}}>Phone:</Typography>
                        </Grid2>
                        <Grid2 size={6}>
                            <Typography sx={{fontSize: 30}}>{contact?.phone}</Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography></Typography>
                    </Grid2>
                    <Grid2 container spacing ={2} size={6}>
                        <Grid2 size={6}>
                            <Typography sx={{fontSize: 30}}>Email:</Typography>
                        </Grid2>
                        <Grid2 size={6}>
                            <Typography sx={{fontSize: 30}}>{contact?.email}</Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography></Typography>
                    </Grid2>
                    <Grid2 container spacing ={2} size={6}>
                        <Grid2 size={6}>
                            <Typography sx={{fontSize: 30}}>Company:</Typography>
                        </Grid2>
                        <Grid2 size={6}>
                            <Typography sx={{fontSize: 30}}>{contact?.company}</Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography></Typography>
                    </Grid2>
                    <Grid2 container spacing ={2} size={6}>
                        <Grid2 size={6}>
                            <Typography sx={{fontSize: 30}}>Job Title:</Typography>
                        </Grid2>
                        <Grid2 size={6}>
                            <Typography sx={{fontSize: 30}}>{contact?.jobTitle}</Typography>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={3} sx={{pt: 7}}>
                    <Grid2 size={6} sx={{ textAlign: "right"}}>
                        <Button onClick={() => navigate(`/update/${id}`)} variant="contained" color="primary" size="large">
                            Edit
                        </Button>
                    </Grid2>
                    <Grid2 size={6} sx={{ textAlign: "left"}}>
                        <Button onClick={() => contact && deleteContact(contact.id)} variant="contained" color="error" size="large">
                            Delete
                        </Button>
                    </Grid2>
                </Grid2>
            </Paper>
        </Grid2>
    )
}