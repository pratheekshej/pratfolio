import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[80px] w-full mx-auto ${styles.contentPaddingX} flex flex-row items-start gap-5 pt-16`}>
        {/* <div className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}> */}
        <div className="flex flex-row justify-start items-start gap-5 w-full"> {/* xl:w-[60%] */}
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#915EFF] rounded-full w-5 h-5' />
            <div className='w-1 h-40 xs:h-80 violet-gradient' />
          </div>

          <div className="max-w-full xl:max-w-5xl h-full">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Pratheeksh</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              With code as my canvas, I build the visual language that shapes how users engage with the world.
              I translate ideas into captivating interfaces, breathing life into the digital world.
            </p>
          </div>
        </div>
        {/* <ComputersCanvas /> */}
      </div>

      <div className='bottom-32 xs:bottom-10 absolute flex justify-center items-center w-full'>
        <a href='#about'>
          <div className='flex justify-center items-start border-4 border-secondary p-2 rounded-3xl w-[35px] h-[64px]'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='bg-secondary mb-1 rounded-full w-3 h-3'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;