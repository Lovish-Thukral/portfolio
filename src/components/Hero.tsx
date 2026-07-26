import assets from '../assets/assets'
import { motion } from 'motion/react'

function Hero() {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-3 pt-20' id='home'>

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.7, type: 'tween' }}
      >
        <img
          src={assets.me}
          alt='Lovish'
          className='w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border border-neutral-700'
        />
      </motion.div>

      {/* Small Intro */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='dark:text-white text-lg md:text-2xl font-medium'
      >
        Hi, I’m Lovish.
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-5xl font-bold leading-tight px-4'
      >
        A Developer, Who Makes City Computers Survive Planetary Loads.
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='dark:text-neutral-300 text-neutral-700 text-base md:text-xl max-w-3xl mt-2 leading-relaxed px-6 font-serif'
      >
        The beauty of code isn’t in writing it, but in how little the next developer suffers reading it.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-8'
      >

        <a
          href='#contact'
          className='px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white transition hover:scale-105'
        >
          Say Hi  👋
        </a>

        <a
          href={assets.resume}
          className='px-8 py-3 rounded-full border border-neutral-500 dark:text-white transition hover:scale-105'
        >
          Resume
        </a>
        <motion.div>

        </motion.div>

      </motion.div>

    </div>
  )
}

export default Hero