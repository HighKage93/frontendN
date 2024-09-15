import { Typography } from "@mui/material";

const TechStack = () => {
    return (
        <div
            style={{
                backgroundColor: "#1A1E23",
                boxShadow: "2px 2px 4px 0px #00000040",
                padding: "30px 35px 48px 33px",
                borderRadius: "80px"
            }}
        >
            <div className="row"
                style={{
                    marginTop: "20px",
                    marginRight: "10px"
                }}
            >
                <div className="col-lg-3 col-md-3">
                    <Typography
                        sx={{
                            color: "#12F7D6",
                            fontSize: "48px",
                            fontWeight: "500",
                            lineHeight: "62px",
                            fontFamily: "IBM Plex Mono"
                        }}
                    >
                        3
                    </Typography>
                </div>
                <div className="col-lg-9 col-md-9"
                    
                >
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "20px",
                            color: "white",
                            fontFamily: "IBM Plex Mono",
                            marginTop: "5px",
                        }}
                    >
                        Programming Language
                    </Typography>
                </div>
                <div className="col-lg-3 col-md-3">
                    <Typography
                        sx={{
                            color: "#12F7D6",
                            fontSize: "48px",
                            fontWeight: "500",
                            lineHeight: "62px",
                            fontFamily: "IBM Plex Mono",
                            marginTop: "10px"
                        }}
                    >
                        3
                    </Typography>
                </div>
                <div className="col-lg-9 col-md-9">
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "20px",
                            color: "white",
                            fontFamily: "IBM Plex Mono",
                            marginTop: "15px"
                        }}
                    >
                        Development Tools
                    </Typography>
                </div>
                <div className="col-lg-3 col-md-3">
                    <Typography
                        sx={{
                            color: "#12F7D6",
                            fontSize: "48px",
                            fontWeight: "500",
                            lineHeight: "62px",
                            fontFamily: "IBM Plex Mono",
                            marginTop: "10px"
                        }}
                    >
                        3
                    </Typography>
                </div>
                <div className="col-lg-9 col-md-9">
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "20px",
                            color: "white",
                            fontFamily: "IBM Plex Mono",
                            marginTop: "15px"
                        }}
                    >
                        Years of Experience
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default TechStack;