import React from 'react'

const Item = ({img , title , about , category , btn}) => {
  return (
    <div data-aos="fade-up" className='rounded-md w-[48%] flex ph:flex-col ph:w-[100%]'>
        <img src={img} className=' rounded-md w-[35%] ph:w-[100%]' alt="" />
        <aside className='p-[20px] flex flex-col gap-2 w-[65%] ph:w-[100%]'>
            <p className="text-[20px] ph:text-[15px]">{title}</p>
            <p className="text-[18px] ph:text-[12px]">{about}</p>
            <p className="text-[18px] ph:text-[12px]">{category}</p>
            <p className=" text-[20px] text-[#01CD7D] ph:text-[15px]">{btn}</p>
        </aside>
    </div>
  )
}

export default Item