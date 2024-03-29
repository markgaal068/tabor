"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link";
import Image from "next/image";


// AZ ESEMÉNYEK
const items = [
    {
        id: 1,
        color: "from-yellow-200 to-orange-300",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "/taborkep.png",
        link: "https://lama.dev",
    },
    {
        id: 2,
        color: "from-orange-300 to-red-300",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "/taborkep.png",
        link: "https://lama.dev",
    },
    {
        id: 3,
        color: "from-red-300 to-purple-300",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "/taborkep.png",
        link: "https://lama.dev",
    },
    {
        id: 4,
        color: "from-purple-300 to-green-200",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "/taborkep.png",
        link: "https://lama.dev",
    },
];


const EventsPage = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>

            <div className="h-[600vh]" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center "><h1 className="font-semibold">Közelgő Táborok</h1></div>

                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">

                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-green-100"></div>
                        {items.map(item => (<div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>

                            <div className="flex flex-col gap-8 text-white">

                                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>

                                <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                    <Image src={item.img} alt="" fill />
                                </div>

                                <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>

                                <Link href={item.link} className="flex justify-end"><button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-transparent hover:border hover:rounded hover:border-white hover:scale-105">Bővebben!</button></Link>
                            </div>
                        </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-yellow-50 to-green-100">
                <h1 className="text-6xl font-bold">Legyél Te is a táborozónk!</h1>
                <div className="relative">
                    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                        <defs>
                            <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0, 1 120,0 a 60, 60 0 0,1 -120,0" />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" startOffset="10%" className="text-xl">Szabó Andrea Táboroztató</textPath>
                        </text>
                    </motion.svg>
                    <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"><p className="text-xs md:text-base">Csatlakozz!</p></Link>
                </div>
            </div>

        </motion.div>
    )
}

export default EventsPage