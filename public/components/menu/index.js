import { Avatar } from "@mui/material";
import { AlignCenter, Code, Monitor, User } from "react-feather";

const Menu = () => {
    return (
        <div
            className="mx-5 my-5"
            style={{
                borderRadius: "40px",
                border: "2px solid white",
                backgroundColor: "GrayText",
                width: "80px"
            }}
        >
            <div className="row mx-2 my-5">
                <div style={{
                    height: "40px",
                    width: "40px",

                }}>
                    <Avatar
                        sx={{
                            "&:hover": {
                                cursor: "pointer"
                            }
                        }}
                    >
                        <AlignCenter />
                    </Avatar>
                </div>
            </div>
            <div className="row">
                <div style={{
                    height: "40px",
                    width: "40px",

                }}>
                    <Avatar>
                        <User />
                    </Avatar>
                </div>
            </div>
            <div className="row">
                <div style={{
                    height: "40px",
                    width: "40px",

                }}>
                    <Avatar>
                        <Code />
                    </Avatar>
                </div>
            </div>
            <div className="row">
                <div style={{
                    height: "40px",
                    width: "40px",

                }}>
                    <Avatar>
                        <Monitor />
                    </Avatar>
                </div>
            </div>
            <div className="row">
                <div style={{
                    height: "40px",
                    width: "40px",

                }}>
                    <Avatar>
                        <AlignCenter />
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Menu;