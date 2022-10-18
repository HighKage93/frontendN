import { Grid, Input, Item } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";


export default function Auth() {
    const [email, setEmail] = useState('')
    const handleEmail = (e) => setEmail(e.target.value)
    return (
        <Container spacing={2}>
                <Grid item xl={8} />
                <Grid item xl={8}>
                    <p>Email</p>
                    <Input />
                </Grid>
                <Grid item xl={8} />
                
        </Container>
    )
}