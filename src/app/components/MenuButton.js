

import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const ClearIconButton = ({ handleClicks }) => {
    return (
        <div className="rounded-full bg-gradient-to-r to-gray from-gray-light mr-2 p-0.5" >
            <div className="rounded-full bg-gradient-to-r to-blue-dark from-black">
                <IconButton size="small"
                    fullWidth={false}
                    className="rounded-full"
                    onClick={handleClicks}
                    sx={{
                        backgroundColor: "transparent",
                        color: 'whitesmoke',
                    }}
                >
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

const MenuIconButton = ({ handleClicks }) => {
    return (
        <div className="rounded-full bg-gradient-to-r to-gray from-gray-light mr-2 p-0.5" >
            <div className="rounded-full bg-gradient-to-r to-blue-dark from-black ">
                <IconButton size="small"
                    fullWidth={false}
                    className="rounded-full"
                    onClick={handleClicks}
                    sx={{
                        backgroundColor: "transparent",
                        color: 'whitesmoke',
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </div>
        </div>
    )
}


const MenuButton = ({ menuState, handleClicks }) => {

    return (
        <div className="z-50 fixed mt-1 ml-1">
            {menuState ?
                <ClearIconButton handleClicks={handleClicks} />
                :
                <MenuIconButton handleClicks={handleClicks} />
            }
        </div>)
}

export default MenuButton;