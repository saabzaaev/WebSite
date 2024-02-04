import React from 'react'
import ShopCard from '../components/ShopCard'
import { useTranslation } from "react-i18next";
import '../App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Shoping = () => {
    const {t , i18n} = useTranslation()

    const changeLanguage = (language) =>
    {
      i18n.changeLanguage(language)
    }
  return (
    <div>

        {/* section 1 */}
        <section className="p-[50px_100px]  rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex flex-col gap-2 ph:p-[10px]">
            <p className="text-gray-300 text-[15px] ph:text-[10px]">{t("page-6.h1")}</p>
            <p className="text-[40px] font-bold text-white ph:text-[25px]">{t("page-6.h2")}</p>
        </section>

        {/* section 2 */}
        <section className='p-[50px_100px] rounded-2xl grid grid-cols-[18%_18%_18%_18%_18%] gap-[20px_3%] ph:grid-cols-[48%_48%] ph:grid-rows-30 ph:p-[10px] ph:hidden'>
            <ShopCard img={"./src/assets/l1.png"}  title={"Primark (Форма заказа)"} />
            <ShopCard img={"./src/assets/l2.png"}  title={"H&M"} />
            <ShopCard img={"./src/assets/l3.png"}  title={"Mangooutlet"} />
            <ShopCard img={"./src/assets/l4.png"}  title={"Next"} />
            <ShopCard img={"./src/assets/l5.png"}  title={"Sportdirect"} />
            <ShopCard img={"./src/assets/l6.png"}  title={"Clothing at Tesco"} />
            <ShopCard img={"./src/assets/l7.png"}  title={"George at ASDA"} />
            <ShopCard img={"./src/assets/l8.png"}  title={"Accessorize"} />
            <ShopCard img={"./src/assets/l9.png"}  title={"Adidas UK"} />
            <ShopCard img={"./src/assets/l10.png"} title={"Amazon"} />
            <ShopCard img={"./src/assets/l11.png"} title={"Matalan"} />
            <ShopCard img={"./src/assets/l12.png"} title={"Ebay"} />
            <ShopCard img={"./src/assets/l13.png"} title={"Crocs"} />
            <ShopCard img={"./src/assets/l14.png"} title={"Boohoo"} />
            <ShopCard img={"./src/assets/l15.png"} title={"ASOS"} />
            <ShopCard img={"./src/assets/l16.png"} title={"Mothercare"} />
            <ShopCard img={"./src/assets/l17.png"} title={"New Look"} />
            <ShopCard img={"./src/assets/l18.png"} title={"Puma"} />
            <ShopCard img={"./src/assets/l19.png"} title={"Timberland"} />
            <ShopCard img={"./src/assets/l20.png"} title={"Showroomprive"} />
            <ShopCard img={"./src/assets/l21.png"} title={"Brand Alley"} />
            <ShopCard img={"./src/assets/l22.png"} title={"M&S"} />
            <ShopCard img={"./src/assets/l23.png"} title={"Clarks"} />
            <ShopCard img={"./src/assets/l24.png"} title={"Zara"} />
            <ShopCard img={"./src/assets/l25.png"} title={"Mango"} />
            <ShopCard img={"./src/assets/l26.png"} title={"Mini Mode"} />
            <ShopCard img={"./src/assets/l27.png"} title={"Tucci Store"} />
            <ShopCard img={"./src/assets/l28.png"} title={"Betterware"} />
            <ShopCard img={"./src/assets/l29.png"} title={"Panachekids"} />
            <ShopCard img={"./src/assets/l30.png"} title={"Zulily"} />
        </section>

        {/* slider */}
        <Swiper id='slide' pagination={true} modules={[Pagination]} className="mySwiper ph:flex">
        <SwiperSlide><ShopCard img={"./src/assets/l1.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l2.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l3.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l4.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l5.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l6.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l7.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l8.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l9.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l10.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        </Swiper>
        <Swiper id='slide' pagination={true} modules={[Pagination]} className="mySwiper ph:flex">
        <SwiperSlide><ShopCard img={"./src/assets/l11.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l12.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l13.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l14.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l15.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l16.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l17.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l18.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l19.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l20.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        </Swiper>
        <Swiper id='slide' pagination={true} modules={[Pagination]} className="mySwiper ph:flex">
        <SwiperSlide><ShopCard img={"./src/assets/l21.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l22.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l23.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l24.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l25.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l26.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l27.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l28.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l29.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>
        <SwiperSlide><ShopCard img={"./src/assets/l30.png"}  title={"Primark (Форма заказа)"} /></SwiperSlide>

      </Swiper>

        {/* section 3 */}
        <section className="p-[100px] my-[50px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex justify-between items-center ph:flex-col ph:p-[10px] ph:items-start ph:gap-4">
            <p data-aos="fade-right" className="text-[40px] font-bold text-white ph:text-[20px]">{t("page-6.h3")}</p>
            <div data-aos="fade-left" className=" gap-3 h-[66px] flex ph:h-[35px]">
            <img src="./src/assets/w.png" className="w-[66px] h-[66px] ph:w-[35px] ph:h-[35px] rounded-full" alt="" />
            <img src="./src/assets/v.png" className="w-[66px] h-[66px] ph:w-[35px] ph:h-[35px] rounded-full" alt="" />
            <img src="./src/assets/c.png" className="w-[66px] h-[66px] ph:w-[35px] ph:h-[35px] rounded-full" alt="" />
            </div>
        </section>

        {/* footer  */}
        <section className="ph:mt-[30px]">
            <header className="text-[15px] p-[50px_100px] leading-8 text-gray-400 flex justify-between ph:p-[10px] ph:flex-col ph:items-center ph:text-center ph:gap-10">
                <div className="w-[20%] flex flex-col gap-7 ph:w-[100%] ph:flex-row">
                    <img src="./src/assets/Лого.png" alt="picture" />
                    <img src="./src/assets/i.png" className="w-[150px] h-[46px]" alt="picture" />
                </div>
                <ul>
                    <li className="text-black text-[18px] font-bold">{t("page.h110")}</li>
                    <li>{t("page.h111")}</li>
                    <li>{t("page.h112")}</li>
                    <li>{t("page.h113")}</li>
                    <li>{t("page.h114")}</li>
                    <li>{t("page.h115")}</li>
                    <li>{t("page.h116")}</li>
                    <li>{t("page.h117")}</li>
                </ul>
                <ul>
                    <li className="text-black text-[18px] font-bold">{t("page.h118")}</li>
                    <li>{t("page.h119")}</li>
                    <li>{t("page.h120")}</li>
                    <li>{t("page.h121")}</li>
                    <li>{t("page.h122")}</li>
                    <li>{t("page.h123")}</li>
                    <li>{t("page.h124")}</li>
                </ul>
                <ul>
                    <li className="text-black text-[18px] font-bold">{t("page.h125")}</li>
                    <li>{t("page.h126")}</li>
                    <li>{t("page.h127")}</li>
                    <li>{t("page.h128")}</li>
                    <li>{t("page.h129")}</li>
                    <li>{t("page.h130")}</li>
                </ul>
            </header>
            <hr className="border-[1px] border-gray-200 w-[90%] m-auto"/>
            <p className="text-center text-[12px] tracking-[1px] text-gray-400 mt-[20px]">{t("page.h131")}</p>
        </section>

    </div>
  )
}

export default Shoping