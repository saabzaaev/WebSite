import React from 'react'

const Card = ({img , title , about , city}) => {
  return (
    <div data-aos="fade-up" className='flex w-[48%] ph:w-[100%]'>
        <img src={img} className='w-[35%] ph:w-[50%] ' alt="picture" />
        <aside className='w-[65%] p-[15px]  flex flex-col justify-between ph:w-[50%]'>
            <div className='flex flex-col gap-3'>
                <p className="text-[20px] font-bold ph:text-[15px]">{title}</p>
                <img src="./src/assets/star.png" className='mt-[-10px] w-[100px] h-[20px] ph:w-[80px] ph:h-[15px]' alt="" />
                <p className='text-[15px] ph:text-[12px]'>{about}</p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-[12px]'>Дата: 16 Ноября 2021</p>
                <p className='text-[12px]'>Город: {city}</p>
            </div>
        </aside>
    </div>
  )
}

export default Card