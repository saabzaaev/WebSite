import React from 'react'

const Boxes = ({title , about , w }) => {
  return (
    <div data-aos="fade-up" className='flex justify-between p-[20px] rounded-md shadow-md items-center w-[48%] ph:w-[100%] ph:p-[10px]'>
        <p className='text-[25px] font-bold ph:text-[16px]'>{title}</p>
        <div className='w-[30%] border-l-[1px] border-l-gray-400 p-[10px_10px_10px_20px] flex justify-center items-center'>
            <p className='text-[20px] font-bold ph:text-[10px]'>{about}</p>
        </div>
    </div>
  )
}

export default Boxes