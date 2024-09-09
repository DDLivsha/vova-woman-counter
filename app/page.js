'use client'
import React, { useState, useRef } from 'react';

export default function Home() {

  const [animate, setAnimate] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    setAnimate(true);

    // Воспроизвести аудио
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Сбрасываем анимацию после завершения
    setTimeout(() => setAnimate(false), 2000);
  };


  return (
    <>
      <div className="bg-img flex justify-center items-center">

        <div className='flex flex-col items-center'>
          <div className='font-semibold text-[28px] flex flex-col items-center gap-3'>Вова Сексизм Момент<span className='counter text-[185px]'>12</span></div>
          <button onClick={handleClick} className='bg-gray-800 hover:bg-[#521082] text-white font-bold py-2 px-4 rounded-[19px] mt-4 leading-normal transition duration-200 ease-in text-[22px]'>Додати нову зраду</button>
        </div>
        <div className={`animated-div ${animate ? 'animate' : ''} absolute font-semibold`}>
          Woman
        </div>
        <audio ref={audioRef} src="/women-haha.mp3" />
      </div >
    </>
  );
}
