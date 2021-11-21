import React from "react";
import {Container, ImageList, ImageListItem} from "@mui/material";
import {LIST} from "views/Gift/list";

const GiftPage = () => {
    return (
        <Container>
            <ImageList variant="masonry" cols={3} gap={8}>
                {LIST.map(item => (
                    <ImageListItem>
                        <img src={item}/>
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}

export default GiftPage