import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[80px] w-full mx-auto ${styles.contentPaddingX} flex flex-row items-start gap-5`}>
        {/* <div className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}> */}
        <div className="xl:w-[60%] w-full flex flex-row items-start justify-start gap-5 pt-5">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 h-40 xs:h-80 violet-gradient' />
          </div>

          <div className="xl:max-w-4xl max-w-full h-full pt-6">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Pratheeksh</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              With code as my canvas, I build the visual language that shapes how users engage with the world.
              I translate ideas into captivating interfaces, breathing life into the digital world.
            </p>
          </div>
        </div>

        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;