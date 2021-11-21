import React from "react";
import {Box} from "@mui/material";
import styles from "views/Main/components/header.module.scss"

const Header = () => {
    return (
        <Box display={'flex'} justifyContent={'center'}>
            <p className={styles.christmasFont}>My Wishlist</p>
        </Box>
    )
}

export default Header