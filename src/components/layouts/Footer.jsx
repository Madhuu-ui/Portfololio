import {Box, Toolbar, Typography} from '@mui/material'


export default function Footer(){
    return(
        <>
         <Box   sx={{
            textAlign:"center", p:2, bgcolor:"background.paper",
            position: "fixed",
            bottom: 0,
            width: "100%",
             }}>
            <Typography>
                © {new Date().getFullYear()} Madhu Mahesh
            </Typography>
        </Box>
        </>
    )
}