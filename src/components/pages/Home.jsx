import {Typography, Box, Container} from '@mui/material'
import Chatbot from '../aiservices/Chatbot'


export default function Home(){
    return(
        <>
        <Container sx={{py:20}}>
        <Typography variant="h2" color="white">Hi there! </Typography>
        <Typography variant="h2" color="white"> I'm Madhu 👋</Typography>
        <Typography variant="h6" color="white" mt={2}>
        React Developer with 4+ years of experience
        </Typography>
        <Box>
        <Typography variant="h5" color='white' mt={4}> I build scalable React applications with clean architecture
          and modern UI.</Typography>
        </Box>
        <Chatbot />
        </Container>
        </>
       
    )
}