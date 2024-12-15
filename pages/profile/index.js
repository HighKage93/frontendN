import { Typography } from "@mui/material";
import CircleMenu from "../../public/components/circleMenu"
import InfoCard from "../../public/components/infoCard";
import Description from "../../public/components/description";
import TechStack from "../../public/components/techStack";

const Profile = () => {
    return (
        <div
            style={{
                // backgroundColor: "grey",
                // height: "100vh"
                // width: "100%"
            }}
        >
            <div 
                // className="row" 
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <Typography
                    sx={{
                        color: "white",
                        fontSize: "117px",
                        fontFamily: "IBM Plex Mono"
                    }}
                >
                    DEVELOPER
                </Typography>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <InfoCard />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Description />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                    <TechStack />
                </div>
            </div>
        </div>
    )
}

export default Profile;