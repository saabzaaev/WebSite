import React from 'react'

const Large = ({title , about , price }) => {
  return (
    <div data-aos="fade-up" className='flex justify-between p-[20px] rounded-md shadow-md items-center w-[100%] ph:p-[5px_10px]'>
        <div className='flex flex-col gap-1 w-[70%] ph:h-[10svh] ph:overflow-hidden'>
            <p className='text-[25px] font-bold ph:text-[15px]'>{title}</p>
            <p className='text-[15px]  text-gray-600 ph:text-[10px] '>{about}</p>
        </div>
        <div className='w-[30%] border-l-[1px] border-l-gray-400 p-[10px_10px_10px_20px] flex justify-center items-center ph:w-[30%] ph:h-[10svh] ph:overflow-hidden'>
            <p className='text-[15px] font-bold ph:text-[12px]'>{price}</p>
        </div>
    </div>
  )
}

export default Large