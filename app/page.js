'use client'
import React, { useState, useRef, useEffect } from 'react';

export default function Home() {

  const [animate, setAnimate] = useState(false);
  const [isNeedUpdate, setIsNeedUpdate] = useState(false);
  const audioRef = useRef(null);
  const [count, setCount] = useState(0);

  const GetData = async () => {
    try {

      const res = await fetch(`https://66dacea4f47a05d55be60e4e.mockapi.io/moment/counter`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })

      const posts = await res.json()
      setCount(posts[0].words);
    }
    catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    GetData();
    setIsNeedUpdate(false)
  }, [isNeedUpdate]);

  //===================PUT API====================
  const SaveNewCount = async () => {
    try {

      let newCount = count + 1

      const formRes = await fetch(`https://66dacea4f47a05d55be60e4e.mockapi.io/counter/1`, {
        method: "PUT",
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          "words": newCount,
        })
      })
    }
    catch (error) {
      console.log(error.message);
    }
  }
  //===================CLICK FUNCTION====================

  const handleClick = () => {
    setAnimate(true);

    if (audioRef.current) {
      audioRef.current.play();
    }

    setTimeout(() => setAnimate(false), 2000);

  };


  return (
    <>
      <div className="bg-img flex justify-center items-center">

        <div className='flex flex-col items-center'>
          <div className="font-semibold text-[28px] flex flex-col items-center gap-3">
            Вова Сексизм Момент
            <span className="counter text-[185px]">{count}</span>
          </div>
          <button onClick={() => {
            handleClick()
            SaveNewCount()
            setCount(count + 1)
          }} className='bg-gray-800 hover:bg-[#c60b0b] text-white font-bold py-2 px-4 rounded-[19px] mt-4 leading-normal transition duration-200 ease-in text-[22px]'>Додати нову зраду</button>
        </div>
        <div className={`animated-div ${animate ? 'animate' : ''} absolute font-semibold`}>
          Woman
        </div>
        <audio ref={audioRef} src="/women-haha.mp3" />
      </div >
    </>
  );
}
