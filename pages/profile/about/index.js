/* eslint-disable jsx-a11y/alt-text */
import { Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import mpLogo from "../../../public/icons/webdev.png"

const About = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <div>
            {isMobile ? (
                <div className="row">
                    <div
                        style={{
                            border: "4px solid white",
                            borderRadius: "160px 0px 160px 0px",
                            // height: "520px",
                            // width: "20%",
                            boxShadow: "3px 3px 5px",
                            textAlign: "center",
                            marginRight: "20px"
                        }}
                    >
                    <Typography
                        sx={{
                            fontSize: "50px",
                            lineHeight: "42px",
                            fontWeight: "500",
                            height: "82px",
                            // width: "96px",
                            color: "white",
                            marginLeft: "45px",
                            marginTop: "25px",
                            fontFamily: "IBM Plex Mono"
                        }}
                    >
                        About me
                    </Typography>
                    </div>
                    <div
                        style={{
                            backgroundColor: "rgba(41, 47, 54, 0.5)",
                            borderRadius: "40px",
                            marginTop: "25px",
                            padding: "50px",
                            maringRight: "15px"
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#98FAEC",
                                fontSize: "18px",
                                fontFamily: "IBM Plex Mono",
                                
                            }}
                        >
                            {"<h1>"}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "52px",
                                lineHeight: "42px",
                                fontWeight: "500",
                                height: "82px",
                                // width: "96px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "15px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"Hello !"}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#98FAEC",
                                fontSize: "18px",
                                fontFamily: "IBM Plex Mono",
                                
                            }}
                        >
                            {"</h1>"}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#98FAEC",
                                fontSize: "18px",
                                fontFamily: "IBM Plex Mono",
                                marginTop: "30px"
                            }}
                        >
                            {"<p>"}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "25px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"My name is Mayur and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc."}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "25px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving."}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "25px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography."}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "25px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"I like to have my perspective and belief systems challenged so that I see the world through new eyes."}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#98FAEC",
                                fontSize: "18px",
                                fontFamily: "IBM Plex Mono",
                                marginTop: "20px"
                            }}
                        >
                            {"</p>"}
                        </Typography>
                    </div>
                </div>
            ) : (
                <div
            style={{
                // backgroundColor: "black"
            }}
        >
            <div className="row"
                style={{
                    marginTop: "70px",
                    marginLeft: "150px"
                }}
            >
                <div className="col-lg-8 col-md-8">
                    <div
                        style={{
                            border: "4px solid white",
                            borderRadius: "160px 0px 160px 0px",
                            // height: "520px",
                            // width: "20%",
                            boxShadow: "3px 3px 5px",
                            textAlign: "center",
                            margin: "20px"
                        }}
                    >
                    <Typography
                        sx={{
                            fontSize: "72px",
                            lineHeight: "42px",
                            fontWeight: "500",
                            height: "82px",
                            // width: "96px",
                            color: "white",
                            marginLeft: "45px",
                            marginTop: "25px",
                            fontFamily: "IBM Plex Mono"
                        }}
                    >
                        About me
                    </Typography>
                    </div>
                    <div
                        style={{
                            backgroundColor: "rgba(41, 47, 54, 0.5)",
                            borderRadius: "40px",
                            marginTop: "25px",
                            padding: "50px"
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#98FAEC",
                                fontSize: "18px",
                                fontFamily: "IBM Plex Mono",
                                
                            }}
                        >
                            {"<h1>"}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "52px",
                                lineHeight: "42px",
                                fontWeight: "500",
                                height: "82px",
                                // width: "96px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "15px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"Hello !"}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#98FAEC",
                                fontSize: "18px",
                                fontFamily: "IBM Plex Mono",
                                
                            }}
                        >
                            {"</h1>"}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#98FAEC",
                                fontSize: "18px",
                                fontFamily: "IBM Plex Mono",
                                marginTop: "30px"
                            }}
                        >
                            {"<p>"}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "25px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"My name is Mayur and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc."}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "25px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving."}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "25px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography."}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "white",
                                marginLeft: "45px",
                                marginTop: "25px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            {"I like to have my perspective and belief systems challenged so that I see the world through new eyes."}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#98FAEC",
                                fontSize: "18px",
                                fontFamily: "IBM Plex Mono",
                                marginTop: "20px"
                            }}
                        >
                            {"</p>"}
                        </Typography>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <Image 
                        src={mpLogo}
                        style={{
                            marginTop: "135px",
                            height: "800px",
                            width: "550px",
                            marginLeft: "45px"
                        }}
                    />
                </div>
            </div>
        </div>
            )}
        </div>
    )
}

export default About;