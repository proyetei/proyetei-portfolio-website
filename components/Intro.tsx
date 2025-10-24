import { subTitle } from "@/fonts/font";
import CustomText from "./TitleText";
import Image from "next/image";
import { motion } from "framer-motion"
export default function Intro(){
    return(
        <motion.div
        initial={{y: 100, opacity: 0,}}
        animate={{
          y: 0,
          opacity: 1,
          transition: {duration: 0.5, ease: 'easeInOut'}
        }}
        exit={{
          opacity: 0,
          transition: {duration: 0.25, ease: 'easeInOut'}
        }}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className={`${subTitle.className} flex flex-row items-end text-3xl gap-3 my-4`}> Hi, I&apos;m <CustomText text="PROYETEI"/> </div>
                <p className="md:text-2xl text-lg dark:text-indigo-400 text-blue-700 font-semibold"> Efficient problem solver and self-starter, seasoned in fast-paced working environments </p>
                <p className="md:text-xl text-sm my-4">I am a <span className="dark:text-blue-400 text-blue-700">Computer Science graduate</span> from <span className="dark:text-blue-400 text-blue-700"> McMaster University </span>.
                I have contributed to major feature launches <span className="dark:text-blue-400 text-blue-700"> impacting 200K+ people </span> and automating systems in customer-facing consoles with high traffic.</p>
            </div>
            <div className="flex items-center justify-center ">
                <Image src="/proyetei.jpg" alt="proyetei" width={450} height={450} className="drop-shadow-lightblue" />
            </div>
        </div>
        </motion.div>
    )
}