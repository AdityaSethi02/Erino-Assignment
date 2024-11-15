import { MouseEvent, useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    IconButton,
    Paper,
    Popover,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid2,
    Typography,
} from "@mui/material";
import { BACKEND_URL } from "../config";
import { ArrowBack, ArrowForward, MoreVert } from "@mui/icons-material";
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
    const [currentPage, setCurrentPage] = useState(1);
    const contactsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/contacts`)
            .then((response) => {
                setContacts(response.data);
            })
            .catch((error) => {
                console.log("Error getting contacts", error);
            });
    }, []);

    const handlePopOverOpen = (e: MouseEvent<HTMLElement>, contactId: number) => {
        setAnchorEl(e.currentTarget);
        setSelectedContactId(contactId);
    };

    const handlePopOverClose = () => {
        setAnchorEl(null);
        setSelectedContactId(null);
    };

    const open = Boolean(anchorEl);

    const deleteContact = (contactId: number) => {
        setContacts((contacts) => contacts.filter((contact) => contact.id !== contactId));
        axios.delete(`${BACKEND_URL}/contacts/${contactId}`);
    };

    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(contacts.length / contactsPerPage)) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <Grid2
            sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "lightblue",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 4,
                    height: "90%",
                    width: "90%",
                    maxWidth: 5000,
                    maxHeight: 520
                }}
            >
                <Grid2>
                    <Typography variant="h4" color="black" gutterBottom sx={{textAlign: "center"}}>
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
                                {currentContacts.map((contact) => (
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
                                                    horizontal: "left",
                                                }}
                                                transformOrigin={{
                                                    vertical: "top",
                                                    horizontal: "left",
                                                }}
                                            >
                                                <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                </Grid2>
                {/* Fixed navigation */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Button disabled={currentPage === 1} onClick={handlePrevPage}>
                        <ArrowBack sx={{ color: "blue" }} />
                    </Button>
                    <Typography sx={{ alignSelf: "center" }}>
                        Page {currentPage} of {Math.ceil(contacts.length / contactsPerPage)}
                    </Typography>
                    <Button disabled={currentPage === Math.ceil(contacts.length / contactsPerPage)} onClick={handleNextPage}>
                        <ArrowForward sx={{ color: "blue" }} />
                    </Button>
                </Box>
            </Paper>
        </Grid2>
    );
};
