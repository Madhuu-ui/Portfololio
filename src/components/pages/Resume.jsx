import { Button, Typography,Container} from '@mui/material'
import Resumeanalyser from '../aiservices/Resumeanalyser'

export default function Resume(){
   return(
    <>
     <Container sx={{ py: 20 }}>
    <Typography variant="h3" color='white'>
        My Resume
    </Typography>
    <Button variant="contained" bgcolor="white" sx={{ mt: 2 }} href="/resume.docx">
        Download Resume
    </Button>
    <Resumeanalyser />
    </Container>
    </>
   )
}