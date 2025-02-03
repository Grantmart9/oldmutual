
import React, { useState } from "react"
import * as motion from "motion/react-client"
import { Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const pages = [{ page_name: "Home", page_path: "/" },
{ page_name: "Services", page_path: "/services" },
{ page_name: "Tokens", page_path: "/tokens" },
{ page_name: "Rewards", page_path: "/rewards" },
{ page_name: "History", page_path: "/history" },
]

const MenuButtons = () => {
    const [hooverOn, setHooverOn] = useState(false);
    const handleHoverOn = () => { setHooverOn(true) };
    const handleHoverOff = () => { setHooverOn(false) };

    const TopButtons = () => {
        return (
            <div
                className="grid grid-flow-col-dense gap-2 rounded-full  shadow-sm">
                {pages.map((page, i) =>
                    <Button key={i} size="small"
                        fullWidth={false}
                        className="rounded-full"
                        onMouseOver={handleHoverOn}

                        sx={{
                            backgroundColor: "transparent",
                            color: 'whitesmoke',
                            padding: '1pt',
                            '&:hover': {
                                backgroundColor: "whitesmoke",
                                color: 'gray',
                            }, textTransform: "none",
                        }}
                        href={page.page_path} >{page.page_name}
                    </Button>
                )}
            </div>)
    }

    const BottomButtons = () => {
        return (
            <motion.div
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{
                    type: "spring",
                    bounce: 0.2,
                    stiffness: 300,
                    damping: 8,
                    mass: 20,
                    duration: 1,
                }} >
                {hooverOn ?
                    <div className="grid grid-flow-col gap-1">
                        <Button size="small"
                            fullWidth={false}
                            className="rounded-full"
                            sx={{
                                backgroundColor: "transparent",
                                color: 'whitesmoke',
                                padding: '1pt',
                                '&:hover': {
                                    backgroundColor: "whitesmoke",
                                    color: 'gray',
                                }, textTransform: "none",
                            }}
                        >Menu1
                        </Button>
                        <Button size="small"
                            fullWidth={false}
                            className="rounded-full"
                            sx={{
                                backgroundColor: "transparent",
                                color: 'whitesmoke',
                                padding: '1pt',
                                '&:hover': {
                                    backgroundColor: "whitesmoke",
                                    color: 'gray',
                                }, textTransform: "none",
                            }}
                        >Menu2
                        </Button>
                        <Button size="small"
                            fullWidth={false}
                            className="rounded-full"
                            sx={{
                                backgroundColor: "transparent",
                                color: 'whitesmoke',
                                padding: '1pt',
                                '&:hover': {
                                    backgroundColor: "whitesmoke",
                                    color: 'gray',
                                }, textTransform: "none",
                            }}
                        >Menu3
                        </Button>
                        <Button size="small"
                            fullWidth={false}
                            className="rounded-full"
                            sx={{
                                backgroundColor: "transparent",
                                color: 'whitesmoke',
                                padding: '1pt',
                                '&:hover': {
                                    backgroundColor: "whitesmoke",
                                    color: 'gray',
                                }, textTransform: "none",
                            }}
                        >Menu4
                        </Button>
                        <Button size="small"
                            fullWidth={false}
                            className="rounded-full"
                            sx={{
                                backgroundColor: "transparent",
                                color: 'whitesmoke',
                                padding: '1pt',
                                '&:hover': {
                                    backgroundColor: "whitesmoke",
                                    color: 'gray',
                                }, textTransform: "none",
                            }}
                        >Menu5
                        </Button>
                        <Button size="small"
                            fullWidth={false}
                            className="rounded-full"
                            sx={{
                                backgroundColor: "transparent",
                                color: 'whitesmoke',
                                padding: '1pt',
                                '&:hover': {
                                    backgroundColor: "whitesmoke",
                                    color: 'gray',
                                }, textTransform: "none",
                            }}
                        >Menu6
                        </Button>
                        <Button size="small"
                            fullWidth={false}
                            className="rounded-full"
                            sx={{
                                backgroundColor: "transparent",
                                color: 'whitesmoke',
                                padding: '1pt',
                                '&:hover': {
                                    backgroundColor: "whitesmoke",
                                    color: 'gray',
                                }, textTransform: "none",
                            }}
                        >Menu7
                        </Button>
                    </div> : null}
            </motion.div>)
    }

    return (
        <div onMouseLeave={handleHoverOff} className="grid grid-flow-row gap-0 rounded-full bg-gradient-to-r from-blue-dark to-black shadow-sm px-4 py-0.5">
            <TopButtons />
            <BottomButtons />
        </div>)
}



const MenuButtonsAnimation = ({ pages }) => {
    return (
        <motion.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{
                type: "spring",
                bounce: 0.2,
                stiffness: 300,
                damping: 80,
                mass: 10,
                duration: 0.4,
            }} className="p-0.5 bg-gradient-to-r to-gray from-gray-light rounded-full">
            <MenuButtons pages={pages} />
        </motion.div>)
}

const NavBar = ({ menuState }) => {

    return (
        <div className="z-50 fixed ml-11 mt-1.5">
            {menuState ?
                <MenuButtonsAnimation />
                : null
            }
        </div>
    )
}

export default NavBar;