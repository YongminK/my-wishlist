import React from "react";
import {Box, Container} from "@mui/material";
import Header from "views/Main/components/Header";
import Text from "views/Main/components/Text";

const classes = {
    frame: {
        backgroundImage: 'url("6157653.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-20px -20px",
        backgroundSize: "cover",
        height: "25vh",
    }
}

const Main = () => {
    return (
        <Container sx={{height: '100vh'}}>
            <Box sx={classes.frame}/>
            <Header/>
            <Text/>
            <Box sx={classes.frame}/>
        </Container>
    )
}

export default Main