import React from 'react'
import message from '../assets/chat.png'
import share from '../assets/send.png'


export default function Footer() {

    const links = ['მთავარი','ფილმები','სერიალები','კონტაქტი']

  return (
    <div style={{ backgroundColor: 'rgb(5, 3, 24)' }} className='flex justify-evenly gap-[50px]'>
        <div  className='flex gap-[20px] flex-wrap w-[900px]'>
            {links.map((item,index) => (
                <p key={index} className='text-white  text-[20px] hover:text-gray-400 hover:cursor-pointer'>{item}</p>
            ))}
            
            <div className=''>
                <p className='text-white mt-[120px]'>© 2024 BSP. ALL RIGHTS RESERVED.</p>
            </div>

           
         </div>

         <div>
             <div className='flex gap-[50px]'>
                <div className='group flex flex-col justify-center items-center'>
                    <div style={{ backgroundColor: 'rgb(1, 0, 253)' }} className='h-[20px] rounded-[20px] w-[70px] group-hover:pb-[100px] cursor-pointer duration-500'>
                        <p style={{color: 'rgb(1, 0, 253)' }} >dkodd</p>
                    </div>
                    <img src={message} width={35} className='invert absolute mt-[55px] z-50 group-hover:mt-[0px] cursor-pointer'/>

                </div>

                <div>
                    <div className='group flex flex-col justify-center items-center'>
                        <div style={{ backgroundColor: 'rgb(1, 0, 253)' }} className='h-[20px] rounded-[20px] w-[70px] group-hover:pb-[100px] cursor-pointer duration-500'>
                            <p style={{color: 'rgb(1, 0, 253)' }} >dkodd</p>
                        </div>
                        <img src={share} width={35} className='invert absolute mt-[55px] z-50 group-hover:mt-[0px] cursor-pointer'/>
                    </div>
                </div>
             </div>
        </div>
        
    </div>
  )
}
