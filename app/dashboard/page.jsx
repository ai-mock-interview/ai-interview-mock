// import { UserButton } from '@clerk/nextjs'
// import React from 'react'
// import AddNewInterview from './_components/AddNewInterview'
// import InterviewList from './_components/InterviewList'

// function Dashboard() {
//   return (
//     <div className='p-10'>
//         <h2 className='font-bold text-2xl'>Dashboard</h2>
//         <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>
//         <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
//           <AddNewInterview/>
//         </div>

//     </div>
//   )
// }

// export default Dashboard

"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { motion } from "framer-motion";
import Image from "next/image";
import interviewImage from "@/public/interview.avif"; // Make sure this path is correct

function Dashboard() {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-[#2ac6e6] to-[#15141b] text-center">
      {/* Header Section with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-bold text-4xl text-white tracking-wide drop-shadow-md">
          Dashboard
        </h2>
        <h2 className="text-blue-950 text-lg mt-1">
          Create and Start your AI Mockup Interview
        </h2>
      </motion.div>

      {/* Add Interview Section with Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 items-center my-5 gap-6"
      >
        {/* Add New Interview Button */}
        <div className="p-6 text-primary bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition flex justify-center">
          <AddNewInterview />
        </div>

        {/* Image beside the button */}
        <div className="flex justify-center">
          <Image 
            src={interviewImage} 
            alt="Mock Interview" 
            width={350} 
            height={350} 
            className="rounded-lg shadow-lg"
          />
        </div>
        
  <h2 className="text-2xl text-white font-bold mb-2">
    Wishing you a great interview! You've got this!
  </h2>


      </motion.div>
    </div>
  );
}

export default Dashboard;
