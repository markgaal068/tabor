"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import {motion} from "framer-motion";

const links = [
    { url: "/", title: "Főoldal"},
    { url: "/about", title: "Rólam"},
    { url: "/gallery", title: "Galéria"},
    { url: "/contact", title: "Kontakt"},
];


const Navbar = () => {
    // NAVBAR OPEN CLOSED STATEMENTS
    const [open, setOpen] = useState(false)


    // FRAMER MOTION COMPONENTS
    const topVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)",
        },
    };

    const centerVariants={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        },
    };

    const bottomVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)",
        },
    };


    const listVariants ={
        closed:{
            x:"100vw",
        },
        opened:{
            x: 0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2,
            },
        },
    };


    const listItemVariants={
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        },
    };



    return (
            // LINKS ON SITE
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link)=>(<NavLink link={link} key={link.title}/>))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:justify-center">
                <Link href="/" className="text-sm bg-green-500 rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Szabó</span>
                    <span className="w-12 h-8 rounded bg-yellow-100 text-black flex items-center justify-center">Andi</span>
                </Link>
            </div>
            {/* SOCIAL MEDIA LINKEK IKONOKKAL */}
            <div className="hidden md:flex gap-4 w-1/3 justify-end">
                <Link href ="#"> <Image src="/facebook.png" alt="" width={24} height={24} /> </Link>
                <Link href ="#"> <Image src="/facebook.png" alt="" width={24} height={24} /> </Link>
                <Link href ="#"> <Image src="/facebook.png" alt="" width={24} height={24} /> </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                   <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div> 
                   <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div> 
                   <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div> 
                </button>

                {/* MENU LIST */}
                {open && (
                <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-green-500 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map(link=>(
                        <motion.div variants={listItemVariants} className="" key={link.title}>
                        <Link href={link.url} key={link.title}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar