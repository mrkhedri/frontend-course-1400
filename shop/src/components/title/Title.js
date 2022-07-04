import React from 'react'
import {Box, Container, Typography} from "@mui/material";

function Title({topic}) {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center ',
                justifyContent: 'center'
            }}
        >
            <Box mt={3} width={'10%'} borderBottom={'2px solid #e0b0e9'}/>

            <Typography sx={{py: 2}} variant={'h5'}>{topic}</Typography>

            <Box mb={3} width={'10%'} borderBottom={'1px solid #e0b0e9'}/>
        </Container>
    );
}

export default Title