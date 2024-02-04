import React from 'react'

const Reklama = ({img , num , title , about }) => {
  return (
    <div data-aos="fade-up" className='flex w-[100%] ph:flex-col'>
        <img src={img} className='ph:w-[100%]' alt="picture" />
        <aside className='flex flex-col gap-3 p-[20px] ph:w-[100%]'>
            <header className='flex gap-5'>
                <p className="text-[40px] text-[#01CD7D] ph:text-[30px]">{num}</p>
                <p className='text-[20px] font-[700px] w-[40%] ph:w-auto ph:text-[15px]'>{title}</p>
            </header>
            <p className=" text-[18px] text-gray-600 ph:text-[12px]">{about}</p>
        </aside>
    </div>
  )
}

export default Reklama