import { Button, Grid2, Paper, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Grid2 container direction="column" alignItems="center" justifyContent="center" sx={{ height: "100vh", width: "100vw", textAlign: "center", backgroundColor: "lightblue" }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, width: "100%" }}>
                <Typography variant="h4" color="black" gutterBottom sx={{mb: 1}}>
                    Erino Contacts
                </Typography>
                <Grid2 container justifyContent="center" sx={{ mb: 5}}>
                    <Grid2 size={12} sx={{ textAlign: "center"}}>
                        <a href="https://github.com/AdityaSethi02/Erino-Assignment" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                            <GitHub fontSize="large" />
                        </a>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={3}>
                    <Grid2 size={6} sx={{ textAlign: "right"}}>
                        <Button onClick={() => navigate("/create")} variant="contained" color="primary">
                            Add Contact
                        </Button>
                    </Grid2>
                    <Grid2 size={6} sx={{ textAlign: "left"}}>
                        <Button onClick={() => navigate("/all")} variant="contained" color="primary">
                            All Contacts
                        </Button>
                    </Grid2>
                </Grid2>
            </Paper>
        </Grid2>
    )
}