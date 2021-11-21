import React from "react";
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
    header: {
        fontSize: "5rem",
        lineHeight: 0,
        fontWeight: 600
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box display={'flex'} justifyContent={'center'}>
            <p className={clsx('christmas-font',classes.header)}>My Wishlist</p>
        </Box>
    )
}

export default Header