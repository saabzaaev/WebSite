
const List = ({img , title , time , price , avarage}) => {
  return (
    <div data-aos="fade-up" className="p-[10px_20px] rounded-2xl flex justify-between shadow-xl ph:flex-col ph:flex-wrap ph:gap-10 ph:p-[10px] dark:bg-[#3025253a]">
        <div className="flex items-center gap-6 ph:w-[70%] ph:ml-[8%]">
            <img src={img} className="w-[50px] h-[50px]" alt="" />
            <p className="text-[20px] ph:text-[15px]">{title}</p>
        </div>

        <div className="flex gap-5 w-[40%] ph:w-[100%] ph:flex-col">
            <div className="border-l-[1px] border-l-[gray] flex flex-col gap-3 w-[33%] p-[5px_0_5px_30px] ph:border-none ph:flex-row ph:gap-5 ph:w-[100%] ph:justify-between">
                <p className="text-[12px]">Сроки:</p>
                <p className="text-[20px] ph:text-[16px]">{time}</p>
            </div>
            <div className="border-l-[1px] border-l-[gray] flex flex-col gap-3 w-[33%] p-[5px_0_5px_30px] ph:border-none ph:flex-row ph:gap-5 ph:w-[100%] ph:justify-between">
                <p className="text-[12px]">Стоимость доставки:</p>
                <p className="text-[20px] ph:text-[16px]">{price}</p>
            </div>
            <div className="border-x-[1px] border-x-[gray] flex flex-col gap-3 w-[33%] p-[5px_0_5px_30px] ph:border-none ph:flex-row ph:gap-5 ph:w-[100%] ph:justify-between">
                <p className="text-[12px]">Итого:</p>
                <p className="text-[20px] ph:text-[16px]">{avarage}</p>
            </div>
        </div>
    </div>
  )
}

export default List