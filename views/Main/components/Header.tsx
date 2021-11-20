import React from "react";
import {Box, Typography} from "@mui/material";


const Header = () => {
    return (
        <Box display={'flex'} justifyContent={'center'}>
            <Typography sx={{
                fontFamily: 'Christmas',
                fontSize: "5rem",
                lineHeight: 0,
                fontWeight: 600
            }}>My Wishlist</Typography>
        </Box>
    )
}

export default Header