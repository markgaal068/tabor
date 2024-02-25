"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const links = [
    { url: "/", title: "Főoldal"},
    { url: "/about", title: "Rólam"},
    { url: "/gallery", title: "Galéria"},
    { url: "/contact", title: "Kontakt"},
];


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
            // LINKS
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link)=>(<Link href={link.url} key={link.title}>{link.title}</Link>))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Szabó</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Andi</span>
                </Link>
            </div>
            {/* SOCIAL MEDIA LINKEK IKONOKKAL */}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href ="#"> <Image src="/facebook.png" alt="" width={24} height={24} /> </Link>
                <Link href ="#"> <Image src="/facebook.png" alt="" width={24} height={24} /> </Link>
                <Link href ="#"> <Image src="/facebook.png" alt="" width={24} height={24} /> </Link>
                <Link href ="#"> <Image src="/facebook.png" alt="" width={24} height={24} /> </Link>
                <Link href ="#"> <Image src="/facebook.png" alt="" width={24} height={24} /> </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                   <div className="w-10 h-1 bg-black rounded"></div> 
                   <div className="w-10 h-1 bg-black rounded"></div> 
                   <div className="w-10 h-1 bg-black rounded"></div> 
                </button>

                {/* MENU LIST */}
                {open && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map(link=>(
                        <Link href={link.url} key={link.title}>{link.title}</Link>
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default Navbar