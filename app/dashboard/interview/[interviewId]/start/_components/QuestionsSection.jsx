"use client";
import { text } from 'drizzle-orm/gel-core';
import { Lightbulb, Speech, Volume2 } from 'lucide-react';
import React from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
const textToSpeech=(text)=>{
    if('speechSynthesis' in window){
        const speech=new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech)
    }
    else{
        alert('Sorry, Your browser does not support text to speech')
    }
}
  
return (
    mockInterviewQuestion?.length > 0 && (
      <div className='text-white p-5 border rounded-lg m-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {mockInterviewQuestion.map((question, index) => (
            <h2
              key={index}
              className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
                activeQuestionIndex === index
                  ? 'bg-black text-white' // Active question gets black background
                  : 'bg-secondary text-black' // Default to secondary color
              }`}
            >
              Question {index + 1}
            </h2>
          ))}
        </div>

        <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.Question}</h2>
      
      {/* <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)}/> */}

      <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
        <h2 className='flex gap-2 items-center text-primary'>
            <Lightbulb/>
            <strong>Note:</strong>
        </h2>

        <h2 className='text-sm text-blue-500 my-2'>
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
        </h2>
      </div>
      
      </div>
    )
  );
}

export default QuestionsSection;

