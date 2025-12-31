import {Typography, Box, Button, TextField, Paper} from '@mui/material'
import {useState} from 'react'
import askAI from './askAI'

export default function Resumeanalyser(){
    const[text, setText] = useState()
    const [analysis, setAnalysis] = useState("");

    const handleanalyse = async()=>{
        const result = await askAI(
        `Analyze this resume and suggest improvements:\n${text}`
        )
        setAnalysis(result)       
    }
    return(
        <>
        <Paper sx={{ p: 3, mt: 3 }}>
       <Typography variant="h5" color='white' >AI Resume Analyzer</Typography>
       <TextField 
        multiline  
        rows={5}
        fullWidth
        bgcolor='white'
        sx={{ mt: 2, color:'white' }}
        placeholder="Paste resume content..."
        onChange={(e) => setText(e.target.value)}></TextField>
        <Button variant="contained" bgcolor='white' sx={{ mt: 2 }}onClick={handleanalyse}>
            Analyze
        </Button>
         {analysis && (
        <Typography sx={{ mt: 2 }} color="white" whiteSpace= "pre-wrap"
                wordBreak= "break-word">
          {analysis}
        </Typography>)}
            </Paper>
        </>
    )
}