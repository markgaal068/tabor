"use client"

import {motion} from "framer-motion"
import { useState } from "react"


const ContactPage = () => {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const text ="Írj egy e-mailt! 🤟"
    

    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
        
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        {/* textcontainer */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
            <div>
            {text.split("").map((letter,index) => (
                <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay:index*0.1}}>{letter}</motion.span>
            ))}
            </div>
        </div>
        {/* formcontainer */}
        <form className="h-1/2 lg:h-full lg:w-1/2 bg-yellow-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
            <span>Kedves Andrea!</span>
            <textarea rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none"/>
            <span>Az e-mail címem:</span>
            <input type="email" className="bg-transparent border-b-2 border-b-black outline-none"/>
            <span>Üdv,</span>
            <textarea rows={1} className="bg-transparent border-b-2 border-b-black outline-none resize-none"></textarea>
            <button className="bg-green-100 rounded font-semibold text-gray-600 p-4">Küldés!</button>
            {success && <span className="text-green-600 font-semibold">Az üzenet elküldése sikeres volt!</span>}
            {error && <span className="text-red-600 font-semibold">Ajjaj! Az üzenet elküldése sikertelen volt!</span>}
        </form>
        </div>
            
        </motion.div>
    )
}

export default ContactPage