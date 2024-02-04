import React from 'react'

const HelperCard = ({img , title , about , price}) => {
  return (
    <div data-aos="fade-up" className='flex flex-col w-[20%] gap-3 ph:w-[100%]'>
        <img src={img} alt="picture" />
        <p className="text-[20px] font-boldo ph:text-[15px]">{title}</p>
        <p className="text-[16px] ph:text-[12px]  text-gray-600">{about}</p>
        <button className='bg-[#41B7E9] text-[white] rounded-md w-[50%] h-[5.5svh] ph:w-[100%]'>{price}</button>
    </div>
  )
}

export default HelperCard