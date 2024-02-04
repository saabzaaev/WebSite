import React from "react"

const ShopCard = ({img , title}) => {
  return (
    <div>
        <div data-aos="fade-up" className="p-[10px] rounded-[20px] flex flex-col gap-2 bg-[white] h-[200px]">
            <img src={img} className="w-[80%] m-auto" alt="picture" />
            <p className="text-[16px]">{title}</p>
        </div>
    </div>
  )
}

export default ShopCard