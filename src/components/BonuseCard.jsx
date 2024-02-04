import React from 'react'

const BonuseCard = ({img , title , about}) => {
  return (
    <div data-aos="fade-up" className='w-[45%] shadow-md p-[20px_8%_20px_20px] flex flex-col gap-4 ph:w-[100%]'>
        <img src={img} className='w-[50px] h-[50px]' alt="picture" />
        <p className='text-[20px]'>{title}</p>
        <p className='text-[16px] text-gray-400'>{about}</p>
    </div>
  )
}

export default BonuseCard