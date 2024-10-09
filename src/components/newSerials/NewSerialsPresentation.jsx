import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../index.css';
import play from '../../assets/play.png';


export default function NewFilmsPresentation({poster, names, settings }) {
  return (

    <div style={{ backgroundColor: 'rgb(5, 3, 24)' }} className='overflow-hidden '>
      <h1 className='text-white ml-[100px] mt-[20px]'>სერიალები</h1>
      <Slider {...settings} className='flex justify-center items-center m-[5%]'>
        {poster.map((item, index) => {
          return (
            <div key={index} className='flex flex-col items-center'>
              <div className='relative inline-block group m-[20px]'>
                <img src={item} className='h-[350px] hover:scale-110 cursor-pointer duration-150 rounded-[10px]'/>
                <img src={play} width={70} className='absolute top-[39%] left-[38%] translate-[-50%,-50%] opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300' />
                <p className='text-white mt-4 text-center max-w-[190px] overflow-hidden'>{names[index]}</p>
              </div>
            </div>
          )
        })}
      </Slider>
      <hr style={{ backgroundColor: 'rgb(1, 0, 253)' }} className='mb-[20px] border-0 h-[2px]  shadow-xl' />
      </div>
  )
}
