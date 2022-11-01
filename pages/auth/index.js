import { backdropClasses, Grid, Input, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../app/slicer";

export default function Auth() {
    const count = useSelector((state) => state?.counter?.value)
    useEffect(() => {console.log(count)}, [count])
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const handleEmail = (e) => setEmail(e.target.value)
    const [pass, setPass] = useState('')
    const handlePass = (e) => setPass(e.target.value)
    const submit = () => {
        console.log('submit')
        dispatch(increment())
    }
    return (
        <Container>
                <Grid container>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Box 
                        className="mt-5"
                        style={{
                            // borderRadius: 35,
                            // backgroundColor: "#21b6ae",
                            // padding: "18px 36px",
                            fontSize: "25px",
                            color: 'black',
                            marginTop:100
                        }}
                    >
                            <p>Email</p>
                            <Input fullWidth value={email} onChange={handleEmail} />
                            <p>Password</p>
                            <Input value={pass} onChange={handlePass} fullWidth />
                            <Button 
                                onClick={submit} 
                            >
                                Submit
                            </Button>
                    </Box>
                </Grid>
                <Grid item xs={4} />
                </Grid>
                
        </Container>
    )
}