"use client"

import {motion} from "framer-motion"

const GalleryPage = () => {
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
        Galéria</motion.div>
    )
}

export default GalleryPage