import React from 'react'
import { useTranslation } from "react-i18next";


const BlogCard = ({img , title}) => {
  const {t , i18n} = useTranslation()

  const changeLanguage = (language) =>
  {
    i18n.changeLanguage(language)
  }
  return (
    <div data-aos="fade-up" className='w-[32%] rounded-[20px] shadow-md ph:w-[100%]'>
        <img src={img} className='rounded-[20px_20px_0_0] w-[100%]' alt="picture" />
        <aside className='p-[20px] flex flex-col gap-5'>
            <p className="text-[20px] w-[100%] m-auto">{title}</p>
            <div className='flex justify-between items-center text-gray-300 text-[10px] ph:text-[12px]'>
                <p>22.10.2021</p>
                <p>{t("page-6.h")}</p>
            </div>
        </aside>
    </div>
  )
}

export default BlogCard