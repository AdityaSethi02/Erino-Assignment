import { MouseEvent, useEffect, useState } from "react"
import axios from "axios"
import { Box, Button, Grid2, IconButton, Paper, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { BACKEND_URL } from "../config";
import { MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Contacts {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
}

export const AllContacts = () => {
    const [contacts, setContacts] = useState<Contacts[]>([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedContactId, setSelectedContactId] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/contacts`)
            .then((response) => {
                setContacts(response.data);
            })
            .catch((error) => {
                console.log("Error getting contacts", error);
            });
    }, []);

    const handlePopOverOpen = (e: MouseEvent<HTMLElement>, contactId: number) => {
        setAnchorEl(e.currentTarget);
        setSelectedContactId(contactId)
    }

    const handlePopOverClose = () => {
        setAnchorEl(null);
        setSelectedContactId(null)
    }

    const open = Boolean(anchorEl);

    const deleteContact = (contactId: number) => {
        console.log(contactId);
        setContacts((contacts) => contacts.filter(contact => contact.id !== contactId))
        axios.delete(`${BACKEND_URL}/contacts/${contactId}`);
    }

    return (
        <Grid2 container direction="column" alignItems="center" justifyContent="center" sx={{ height: "100vh", width: "100vw", textAlign: "center", backgroundColor: "lightblue" }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 5000, maxHeight: 500, height: "90%", width: "90%" }}>
                <Typography variant="h4" color="black" gutterBottom>
                    Contacts
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">First Name</TableCell>
                                <TableCell align="center">Last Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone</TableCell>
                                <TableCell align="center">Company</TableCell>
                                <TableCell align="center">Job Title</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contacts.map((contact) => (
                                <TableRow key={contact.id}>
                                    <TableCell align="center">{contact.firstName}</TableCell>
                                    <TableCell align="center">{contact.lastName}</TableCell>
                                    <TableCell align="center">{contact.email}</TableCell>
                                    <TableCell align="center">{contact.phone}</TableCell>
                                    <TableCell align="center">{contact.company}</TableCell>
                                    <TableCell align="center">{contact.jobTitle}</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={(event) => handlePopOverOpen(event, contact.id)}>
                                            <MoreVert />
                                        </IconButton>
                                        <Popover
                                            open={open && selectedContactId === contact.id}
                                            anchorEl={anchorEl}
                                            onClose={handlePopOverClose}
                                            anchorOrigin={{
                                                vertical: "top",
                                                horizontal: "left"
                                            }}
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "left"
                                            }}
                                        >
                                            <Box sx={{ display: "flex", flexDirection: "column"}}>
                                                <Button onClick={() => navigate(`/update/${contact.id}`)}>
                                                    <Typography sx={{ color: "black", pb: 1 }}>Edit</Typography>
                                                </Button>
                                                <Button onClick={() => navigate(`/contact/${contact.id}`)}>
                                                    <Typography sx={{ color: "black", pb: 1 }}>Details</Typography>
                                                </Button>
                                                <Button onClick={() => deleteContact(contact.id)}>
                                                    <Typography sx={{ pb: 1, color: "red" }}>Delete</Typography>
                                                </Button>
                                            </Box>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Grid2>
    )
}