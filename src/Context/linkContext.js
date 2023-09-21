import { createContext, useState } from "react";
import { BsFacebook, BsGithub, BsTwitch, BsTiktok } from "react-icons/bs"
import { SiFrontendmentor, SiCodewars, SiHashnode } from "react-icons/si"

import { FaFreeCodeCamp, FaStackOverflow } from "react-icons/fa"
import { AiFillTwitterSquare, AiFillLinkedin, AiFillYoutube, AiFillCodepenSquare, AiFillGitlab, AiFillInstagram } from "react-icons/ai"

export const linkContext = createContext()


export const LinkContext = ({ children }) => {
    const linkTypes = [
        {
            id: "1",
            name: "Facebook",
            bg: "#4267B2",
            icon: <BsFacebook />,
            placeholder: "https://www.facebook.com/{username}"
        },
        {
            id: "2",
            name: "Frontend Mentor",
            bg: "#F5F5F5",
            icon: <SiFrontendmentor />,
            placeholder: "https://www.frontendmentor.io/profile/{username}"

        },
        {
            id: "3",
            name: "Twitter",
            bg: "#1DA1F2",
            icon: <AiFillTwitterSquare />,
            placeholder: "https://www.twitter.com/{username}",

        },
        {
            id: "4",
            name: "Linkedin",
            bg: "#0077b5",
            icon: <AiFillLinkedin />,
            placeholder: "https://www.linkedin/in/{username}",

        },
        {
            id: "5",
            name: "YouTube",
            bg: "#FF0000",
            icon: <AiFillYoutube />,
            placeholder: "https://www.youtube.com/@{username}",

        },
        {
            id: "6",
            name: "Github",
            bg: "#4078c0",
            icon: <BsGithub />,
            placeholder: "https://www.github.com/{username}"

        },

        {
            id: "7",
            name: "Twitch",
            bg: "#6441a5",
            icon: <BsTwitch />,
            placeholder: "https://www.twitch.com/{username}"

        },
        {
            id: "8",
            name: "Codewars",
            bg: "#f05656",
            icon: <SiCodewars />,
            placeholder: "https://www.codewars.com/users/.com/{username}"

        },
        {
            id: "9",
            name: "Codepen",
            bg: "#ffffff",
            icon: <AiFillCodepenSquare />,
            placeholder: "https://www.codepen.io/{username}"

        },
        {
            id: "10",
            name: "freeCodeCamp",
            bg: "#010101",
            icon: <FaFreeCodeCamp />,
            placeholder: "https://www.freecodecamp.com/{username}",

        },
        {
            id: "11",
            name: "GitLab",
            bg: "#fca326",
            icon: <AiFillGitlab />,
            placeholder: "https://www.gitlab.com/{username}",

        },
        {
            id: "12",
            name: "Hashnode",
            bg: "#0f172a",
            icon: <SiHashnode />,
            placeholder: "https://www.hashnode.com/@{username}",

        },
        {
            id: "13",
            name: "Stack Overflow",
            bg: "#f48225",
            icon: <FaStackOverflow />,
            placeholder: "https://www.stackoverflow.com/users/{userid}/{username}"
        },
        {
            id: "14",
            name: "Instagram",
            bg: "#feda75",
            icon: <AiFillInstagram />,
            placeholder: "https://www.Instagram.com/users/{userid}/{username}"
        },
        {
            id: "15",
            name: "Tiktok",
            bg: "#ff0050",
            icon: <BsTiktok />,
            placeholder: "https://www.tiktok.com/users/{userid}/{username}"
        }



    ]
    const [data, setData] = useState({
        avatar: '',
        name: '',
        email: '',
        links: []
    })
    const handleOnChangeAvatar = (avatar) => {
        setData((prev) => ({ ...prev, avatar }))
    }
    const handleOnChangeName = (name) => {
        setData((prev) => ({ ...prev, name }))
    }
    const handleOnChangeEmail = (email) => {
        setData((prev) => ({ ...prev, email }))
    }
    const addLink = (newLink) => { // { id: number, content: string, type: string, }
        setData((prev) => ({ ...prev, links: [newLink, ...prev.links] }))
    }
    const removeLink = (id) => {
        setData((prev) => {
            const newLinks = [...prev.links]
            const index = newLinks.findIndex((link) => link.id === id)
            if (index === -1) newLinks.splice(index, 1)
            return ({
                ...prev,
                links: newLinks
            })
        })
    }

    const editLink = (id, url, typeId) => {
        setData((prev) =>{
        const linkIndex = data.links.findIndex((link) => link.id === id);
        if (linkIndex !== -1) {
          const updatedData = [...prev.links];
          updatedData[linkIndex] = {
            ...updatedData[linkIndex],
            url,
            typeId,
          };
          return {
            ...prev,
            links: updatedData,
          }
        }})
    };
      
    return (<linkContext.Provider value={{
        linkTypes,
        data,
        handleOnChangeAvatar,
        handleOnChangeName,
        handleOnChangeEmail,
        addLink,
        removeLink,
        editLink


    }}>
        {children}
    </linkContext.Provider>)
}