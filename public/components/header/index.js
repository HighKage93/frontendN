import { Button, Typography } from "@mui/material";
import mpLogo from '../../../public/icons/mpLogo.svg'

const Header = () => {
    return (
        <div
            style={{
                boxShadow: "2px 2px 10px black"
            }}
        >
            <div className="row"
        style={{
            height: "120px",
            display: "flex",
            alignItems: "center",  // Vertical center alignment
            backgroundColor: "whitesmoke",
            
        }}
        >
            <div className="col-lg-6 col-md-6">
                <img 
                    src={mpLogo}
                />
            </div>
            <div className="col-lg-1 col-md-1">
                <Button>
                    Home
                </Button>
            </div>
            <div className="col-lg-1 col-md-1">
                <Button>
                    Home
                </Button>
            </div>
            <div className="col-lg-1 col-md-1">
                <Button>
                    Home
                </Button>
            </div>
            <div className="col-lg-1 col-md-1">
                <Button>
                    Home
                </Button>
            </div>
            <div className="col-lg-1 col-md-1">
                <Button>
                    Home
                </Button>
            </div>
        </div>
        </div>
    )
}

export default Header;