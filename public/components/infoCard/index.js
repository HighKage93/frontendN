import { Avatar, Button, Chip, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Briefcase, Download, Inbox, Link, MapPin } from "react-feather";
import "./infocard.css";

const InfoCard = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/documents/cv.pdf';
        link.download = 'cv.pdf';
        link.click();
    };
    return (
        <div
            style={{
                border: "4px solid white",
                borderRadius: "160px 0px 160px 0px",
                // height: "520px",
                width: "100%",
                boxShadow: "3px 3px 5px",
                textAlign: "center",
                margin: "20px"
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // height: "100vh",
                // flexDirection: "column"
            }}
        >
            <div
                className="col"
                style={{
                    display: "inline-block",
                    padding: "20px",
                    gap: "10px"
                }}
            >
                <Avatar 
                    className="spinning-avatar"
                    src="/icons/kamesamaprofile.jpg"
                    sx={{
                        height: "150px",
                        width: "150px",
                        border: "3px solid #12F7D6",
                        marginLeft: "25px",
                        marginTop: "25px"
                    }}
                    // onMouseEnter={() => setHovered(true)}
                    // onMouseLeave={() => setHovered(false)}
                />
                <Typography
                    sx={{
                        fontSize: "32px",
                        lineHeight: "42px",
                        fontWeight: "500",
                        height: "42px",
                        width: "96px",
                        color: "white",
                        marginLeft: "45px",
                        marginTop: "15px",
                        fontFamily: "IBM Plex Mono"
                    }}
                >
                    Mayur
                </Typography>
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "18px",
                        height: "18px",
                        color: "white",
                        marginTop: "10px",
                        fontFamily: "IBM Plex Mono"
                    }}
                >
                    Full-stack developer
                </Typography>
            </div>
            <div
                style={{
                    marginTop: "35px"
                }}
            >
                <div className="col"
                    style={{
                        marginLeft: "25px"
                    }}
                >
                    <div className="row"
                        style={{
                            marginBottom: "10px"
                        }}
                    >
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <Avatar >
                            <Inbox />
                        </Avatar>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "white",
                                lineHeight: "18px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            workmayur862@gmail.com
                        </Typography>
                    </div>
                    </div>
                    <div className="row"
                        style={{
                            marginBottom: "10px"
                        }}
                    >
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <Avatar >
                            <MapPin />
                        </Avatar>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "white",
                                lineHeight: "18px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            Mumbai, India
                        </Typography>
                    </div>
                    </div>
                    <div className="row"
                        style={{
                            marginBottom: "10px"
                        }}
                    >
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <Avatar >
                            <Briefcase />
                        </Avatar>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "white",
                                lineHeight: "18px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            Full-time / Freelancer
                        </Typography>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <Avatar >
                            <Link />
                        </Avatar>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "white",
                                lineHeight: "18px",
                                fontFamily: "IBM Plex Mono"
                            }}
                        >
                            mayur.patankar.com
                        </Typography>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row"
                style={{
                    marginTop: "20px",
                    marginLeft: "20px",
                    padding: "20px"
                }}
            >
                <div className="col-lg-3 col-md-1 col-sm-1">
                <Chip 
                   label="HTML"
                   sx={{
                        backgroundColor: "#12F7D6",
                        // width: "18px"
                   }} 
                />
                </div>
                <div className="col-lg-3 col-md-1 col-sm-1">
                <Chip 
                   label="CSS"
                   sx={{
                        backgroundColor: "#12F7D6",
                        // width: "18px"
                   }} 
                />
                </div>
                <div className="col-lg-3 col-md-1 col-sm-1">
                <Chip 
                   label="JS"
                   sx={{
                        backgroundColor: "#12F7D6",
                        // width: "18px"
                   }} 
                />
                </div>
                <div className="col-lg-3 col-md-1 col-sm-1">
                <Chip 
                   label="REACT"
                   sx={{
                        backgroundColor: "#12F7D6",
                        // width: "18px"
                   }} 
                />
                </div>
                {/* <div className="col-lg-3 col-md-1 col-sm-1">
                <Chip 
                   label="NEXT"
                   sx={{
                        backgroundColor: "#12F7D6",
                        // width: "18px"
                   }} 
                />
                </div> */}
            </div>
            <Button
                sx={{
                    height: "56px",
                    backgroundColor: "whitesmoke",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "400",
                    fontFamily: "IBM Plex Mono",
                    marginTop: "25px",
                    borderRadius: "15px",
                    marginBottom: "35px",
                    transition: "background-color 0.3s ease color 0.3s ease transform 0.3s ease",
                    "&:hover": {
                        backgroundColor: "whitesmoke",
                        color: "black",
                        // boxShadow: "2px 2px 2px",
                    }
                }}
                endIcon={<Download />}
                onClick={handleDownload}
            >
                Download CV
            </Button>
        </div>
    )
}

export default InfoCard;