/* eslint-disable react/no-unescaped-entities */
import { Typography, useMediaQuery } from "@mui/material";

const Description = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <div
            style={{
                marginTop: "25px",
                marginLeft: "35px",
                width: "90%"
            }}
        >
            <div>
            <Typography
                style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#98FAEC",
                    fontFamily: "IBM Plex Mono"
                }}
            >
                {"<h1>"}
            </Typography>
            <Typography
                sx={{
                    fontSize: isMobile ? "40px" : "64px",
                    fontWeight: "400",
                    lineHeight: isMobile ? "60px" : "72px",
                    color: "white",
                    fontFamily: "IBM Plex Mono",
                    marginLeft: "15px"
                }}
            >
                Hey
            </Typography>
            <Typography
                sx={{
                    fontSize: isMobile ? "40px" : "64px",
                    fontWeight: "400",
                    lineHeight: isMobile ? "60px" : "72px",
                    color: "white",
                    fontFamily: "IBM Plex Mono",
                    marginLeft: "15px"
                }}
            >
                I'm Mayur,
            </Typography>
            <Typography
                sx={{
                    fontSize: isMobile ? "40px" : "64px",
                    fontWeight: "400",
                    lineHeight: isMobile ? "60px" : "72px",
                    color: "white",
                    fontFamily: "IBM Plex Mono",
                    marginLeft: "15px"
                }}
            >
                Full-Stack Developer
            </Typography>
            <Typography
                style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#98FAEC",
                    fontFamily: "IBM Plex Mono"
                }}
            >
                {"</h1>"}
            </Typography>
            </div>
            <div
                style={{
                    marginTop: "35px"
                }}
            >
            <Typography
                style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#98FAEC",
                    fontFamily: "IBM Plex Mono"
                }}
            >
                {"<p>"}
            </Typography>
            <Typography
                style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#98FAEC",
                    fontFamily: "IBM Plex Mono",
                    marginLeft: "35px"
                }}
            >
                I help businesses grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done.
            </Typography>
            <Typography
                style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#98FAEC",
                    fontFamily: "IBM Plex Mono"
                }}
            >
                {"</p>"}
            </Typography>
            </div>
        </div>
    )
}

export default Description;