// import React from 'react';
// import { motion } from 'framer-motion';
// import "./Landing.css"
// import icon from "../../../public/icons/downc.svg"

// export default function Landing() {
//   return (
//     <>
//         <div className='landing-main'>
//             <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='h2'>Welcome, I'm</motion.h2>

//             <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className='h1'>Seyon Ranjithkumar</motion.h1>

//             <motion.h3 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} className='h3'>Turning Ideas into Code and Projects into Reality.</motion.h3>
            
//             <div className="btn"><a href="/"><button>About Me <img src={icon} alt="" /></button></a></div>
//         </div>
//     </>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import "./Landing.css";
import icon from "../../../public/icons/downc.svg";

export default function Landing() {
  return (
    <>
      <div className='landing-main'>
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className='h2'
        >
          Welcome, I'm
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: [1, 1.05, 1] }} 
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} 
          className='h1'
        >
          Seyon Ranjithkumar
        </motion.h1>

        <motion.h3 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1 }} 
          className='h3'
        >
          Turning Ideas into Code and Projects into Reality.
        </motion.h3>
        
        <div className="btn">
          <a href="/">
            <button>
              About Me <img src={icon} alt="" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
