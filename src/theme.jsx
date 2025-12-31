import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    mode: 'dark',
    palette:{
        primary:{
        main: "#1976d2",
        },
    background: {
        default: "#0f172a",
         paper: "#1e293b",
    },
},
    typography:{
        fontFamily: 'Roboto, Arial, sans-serif',
    }
})

export default theme

