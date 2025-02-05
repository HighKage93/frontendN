import { Typography, useMediaQuery } from "@mui/material";
import CircleMenu from "../../public/components/circleMenu"
import InfoCard from "../../public/components/infoCard";
import Description from "../../public/components/description";
import TechStack from "../../public/components/techStack";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [data, setData] = useState();
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get('http://localhost:8080/openai/test?prompt=How%are%you')
//             console.log(typeof response.data, ' response at fetch data');
//             if (typeof response.data === "string") {
//                 try {
//                     const convertedData = JSON.parse(response.data);
//                     console.log(convertedData, ' converted data ')
//                 } catch (error) {
//                     console.error("Error parsing JSON:", error);
//                 }
//             }            
// //            setData(response.data?.map((chunk) => chunk.response).join(""));
//         }
//         fetchData();
//     }, [])
    return (
        <>
            {isMobile ? (
            <div>
                <div className="row"
                    style={{
                        padding: 10,
                        marginRight: 0
                    }}
                >
                    <InfoCard />
                    <Description />
                    <div className="mt-5">
                        <TechStack />
                    </div>
                </div>
            </div>
        ) : (
            <div
            style={{
                // backgroundColor: "grey",
                // height: "100vh"
                // width: "100%"
            }}
        >
            <div 
                // className="row" 
                style={{ display: 'flex', justifyContent: 'center', padding: "10px" }}
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
            <div className="row" style={{ padding: "30px" }}>
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
        )}
        </>
    )
}

export default Profile;