import { Grid, Button } from "@mui/material"
import { useRouter } from "next/router"

export default function Nava(){
    const router = useRouter()
    return (
        <div className="" style={{maxLength:240}}>
                <Grid container>
                <Grid item xs={6}>
                    <Button
                        style={{
                            // borderRadius: 35,
                            backgroundColor: "#21b6ae",
                            // padding: "18px 36px",
                            fontSize: "25px",
                            color: 'white'
                        }}
                        fullWidth
                        type="primary"
                        onClick={() => {
                            router.push('/auth')
                        }}
                    >
                        Log In
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        style={{
                            // borderRadius: 35,
                            backgroundColor: "#df6843",
                            // padding: "18px 36px",
                            fontSize: "25px",
                            color: "white"
                        }}
                        type="danger"
                        onClick={() => {}}
                        fullWidth

                    >
                        Register
                    </Button>
                </Grid>
                </Grid>
        </div>
    )
}