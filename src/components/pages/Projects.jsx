import {Typography, Box, Paper, Container, Button} from '@mui/material'

export default function Projects() {
    return(
        <>
        <Container sx={{py:7}}>
             <Typography variant="h4" color='white' sx={{py:5}}> ABOUT </Typography>
            <Typography variant="h6" color='white'>
            With 4+ years of experience as an Application Development Analyst at Accenture, I have honed my skills in React development,software development lifecycle, requirement gathering, user experience optimization, production support, risk management, and project management.
            </Typography>
            <Typography variant="h6" mt={2} color='white'>
             I have excelled in designing and developing UI components, translating designs into high-quality code, debugging and optimizing front-end architecture, and collaborating with cross-functional teams to achieve project objectives.            </Typography>
            <Typography variant="h6" mt={2} color='white'>
            My proficiency in React, React Hooks, Redux, JavaScript, SQL, CSS, has enabled me to contribute significantly to the development and maintenance of web applications.            </Typography>
        </Container>
   
        <Paper sx={{p:7, width: '100%'}}>
            <Typography variant="h4" color='white'> CERTIFICATES </Typography>    
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body1" color="white">
               The Ultimate React Course 2024
                Obtained this certificate from UDEMY. Its been great journey of learning and growth
             </Typography>
             <Button variant="contained" href="https://www.udemy.com/certificate/UC-2490beb3-25a8-4eb6-a0f8-eb3f223bde2f/" target="_blank"  rel="noopener noreferrer" sx={{ color: 'white' }}>
             View
             </Button>
                </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body1" color="white">
              FrontEnd Development Libraries
              Obtained this certificate from FREECODECAMP. Worked on Improving and developing my skills.
             </Typography>
             <Button variant="contained" href="https://www.udemy.com/certificate/UC-2490beb3-25a8-4eb6-a0f8-eb3f223bde2f/" target='_blank' rel='nooperner noreferrer' sx={{ color: 'white' }}>
             View
             </Button>
             </Box>

        </Paper>
        </>
    )
}