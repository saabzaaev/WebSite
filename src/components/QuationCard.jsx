import React from 'react'

const QuationCard = ({title}) => {
  return (
    <div data-aos="fade-up" className='p-[20px_2%] w-[96%] flex justify-between items-center shadow-lg rounded-xl ph:p-[10px_5px]'>
        <p className='text-[20px] ph:text-[14px]'>{title}</p>
        <img src="./src/assets/b.png" className='w-[25px] h-[15px] ph:w-[20px] ph:h-[10px] ph:ml-[10px]' alt="picture" />
    </div>
  )
}

export default QuationCard