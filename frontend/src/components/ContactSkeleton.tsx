import { Grid2, Skeleton, Typography } from "@mui/material";

export const ContactSkeleton = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={12} sx={{pb: 2}}>
                <Typography sx={{fontSize: 50}}><Skeleton /></Typography>
            </Grid2>
            <Grid2 container spacing ={2} size={12}>
                <Grid2 size={6}>
                    <Typography sx={{fontSize: 30}}>Phone:</Typography>
                </Grid2>
                <Grid2 size={6}>
                    <Typography sx={{fontSize: 30}}><Skeleton /></Typography>
                </Grid2>
            </Grid2>
            <Grid2 container spacing ={2} size={12}>
                <Grid2 size={6}>
                    <Typography sx={{fontSize: 30}}>Email:</Typography>
                </Grid2>
                <Grid2 size={6}>
                    <Typography sx={{fontSize: 30}}><Skeleton /></Typography>
                </Grid2>
            </Grid2>
            <Grid2 container spacing ={2} size={12}>
                <Grid2 size={6}>
                    <Typography sx={{fontSize: 30}}>Company:</Typography>
                </Grid2>
                <Grid2 size={6}>
                    <Typography sx={{fontSize: 30}}><Skeleton /></Typography>
                </Grid2>
            </Grid2>
            <Grid2 container spacing ={2} size={12}>
                <Grid2 size={6}>
                    <Typography sx={{fontSize: 30}}>Job Title:</Typography>
                </Grid2>
                <Grid2 size={6}>
                    <Typography sx={{fontSize: 30}}><Skeleton /></Typography>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}