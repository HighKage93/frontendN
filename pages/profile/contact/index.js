import { Button, styled, TextareaAutosize, TextField, Typography } from "@mui/material"
import { useState } from "react"
import EmailService from "../../../services/email";

const StyledTextFieldArea = styled(TextField)`
    & .MuiOutlinedInput-root {
        min-height: 40px;
        font-family: DM Sans, sans-serif;
        font-size: 14px;
        font-weight: 400;
        border-radius: 4px;
    }
    & .Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid white !important;
        box-shadow: var(--shadow-i);
    }
    & .Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline {
        border: 1px solid red !important;
    }
    & .MuiFormHelperText-root {
        font-size: 10px;
        font-weight: 400;
        text-align: right;
        color: white;
        margin-right: 0px;
    }
    & .MuiOutlinedInput-notchedOutline {
        border: 1px solid white;
    }
    & .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled {
        background: grey;
        border: none;
    }
`

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        contact: "",
        subject: "",
        message: ""
    });
    const handleChange = (e, key) => {
        let temp = formData;
        temp[key] = e.target.value
    }
    // const emailService = new EmailService();
    const handleSend = () => {}
    return (
        <div className="col">
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}  
        >
            <Typography
                sx={{
                    color: "white",
                    fontSize: "35px",
                    fontWeight: "500"
                }}
            >
                Feel Free to Stalk !
            </Typography>
            
        </div>
        <div className="mt-5">
        <Typography
                sx={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "500"
                }}
            >
                Your Email
            </Typography>
            <StyledTextFieldArea 
                // fullWidth
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
            />
            <Typography
                sx={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "500",
                    margintTop: "25px"
                }}
            >
                Contact No.
            </Typography>
            <StyledTextFieldArea 
                type="number"
                onChange={(e) => handleChange(e, "contact")}
                // fullWidth
                value={formData.contact}
            />
            <Typography
                sx={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "500",
                    margintTop: "25px"
                }}
            >
                Subject
            </Typography>
            <StyledTextFieldArea 
                // fullWidth
                value={formData.subject}
                onChange={(e) => handleChange(e, "subject")}
            />
            <Typography
                sx={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "500",
                    margintTop: "25px"
                }}
            >
                Message
            </Typography>
            <StyledTextFieldArea 
                minRows={4}
                // fullWidth
                value={formData.message}
                onChange={(e) => handleChange(e, "message")}
            />
            <Button
                sx={{
                    color: "white",
                    background: '1px solid white',
                    marginTop: "15px"
                }}
                // fullWidth
                style={{
                    background: "1px solid white"
                }}
                onClick={handleSend}
            >
                Send
            </Button>
        </div>
        </div>
    )
}

export default Contact;