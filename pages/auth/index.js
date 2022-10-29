import { backdropClasses, Grid, Input, Item } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";


export default function Auth() {
    const [email, setEmail] = useState('')
    const handleEmail = (e) => setEmail(e.target.value)
    return (
        <Container>
                <Grid container>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <p>Email</p>
                    <Input fullWidth />
                </Grid>
                <Grid item xs={4} />
                </Grid>
                
        </Container>
    )
}