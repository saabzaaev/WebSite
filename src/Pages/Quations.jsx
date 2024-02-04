import React from 'react'
import QuationCard from '../components/QuationCard'
import { useTranslation } from "react-i18next";


const Quations = () => {
    const {t , i18n} = useTranslation()

    const changeLanguage = (language) =>
    {
      i18n.changeLanguage(language)
    }
  return (
    <div>

        {/* section 1 */}
        <section className="p-[100px] my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex flex-col gap-2 ph:gap-3 ph:p-[10px] ph:my-[10px]">
            <p className="text-gray-400 text-[10px]">{t("page-4.h1")}</p>
            <p className="text-[40px] font-bold text-white ph:text-[22px]">{t("page-4.h2")}</p>
        </section>

        {/* section 2 */}
        <section className="p-[20px] w-[80%] m-auto ph:p-[10px] ph:w-[100%]">
            <p className="text-[16px]">{t("page-4.h3")}</p>
            <input type="text" className='bg-transparent text-[20px] ph:text-[16px] border-b-[2px] border-b-gray-400 p-[10px_0_10px_0] text-gray-600 w-[100%] outline-none' placeholder={t("page-4.h4")} />
        </section>

        {/* section 3 */}
        <section className='p-[50px_100px] flex flex-col gap-7 ph:p-[10px]'>
            <p className="text-[40px] font-bold ph:text-[25px]">{t("page-4.h5")}</p>
            <QuationCard title={t("page-4.h6")} />
            <QuationCard title={t("page-4.h7")}/>
            <QuationCard title={t("page-4.h8")}/>
            <QuationCard title={t("page-4.h9")}/>
            <QuationCard title={t("page-4.h10")}/>
            <QuationCard title={t("page-4.h11")}/>
            <QuationCard title={t("page-4.h12")}/>
        </section>

        {/* section 4 */}
        <section className='p-[50px_100px] flex flex-col gap-7 ph:p-[10px]'>
            <p className="text-[40px] font-bold ph:text-[25px]">{t("page-4.h13")}</p>
            <QuationCard title={t("page-4.h14")}/>
            <QuationCard title={t("page-4.h15")}/>
            <QuationCard title={t("page-4.h16")}/>
            <QuationCard title={t("page-4.h17")}/>
            <QuationCard title={t("page-4.h18")}/>
            <QuationCard title={t("page-4.h19")}/>
            <QuationCard title={t("page-4.h20")}/>
        </section>

        {/* section 5 */}
        <section className='p-[50px_100px] flex flex-col gap-7 ph:p-[10px]'>
            <p className="text-[40px] font-bold ph:text-[25px]">{t("page-4.h21")}</p>
            <QuationCard title={t("page-4.h22")}/>
            <QuationCard title={t("page-4.h23")}/>
            <QuationCard title={t("page-4.h24")}/>
            <QuationCard title={t("page-4.h25")}/>
            <QuationCard title={t("page-4.h26")}/>
            <QuationCard title={t("page-4.h27")}/>
            <QuationCard title={t("page-4.h28")}/>
        </section>

        {/* section 6 */}
        <section className='p-[50px_100px] flex flex-col gap-7 ph:p-[10px]'>
            <p className="text-[40px] font-bold ph:text-[25px]">{t("page-4.h29")}</p>
            <QuationCard title={t("page-4.h30")}/>
            <QuationCard title={t("page-4.h31")}/>
            <QuationCard title={t("page-4.h32")}/>
        </section>

        {/* section 7 */}
        <section className='p-[50px_100px] flex flex-col gap-7 ph:p-[10px]'>
            <p className="text-[40px] font-bold ph:text-[25px]">{t("page-4.h33")}</p>
            <QuationCard title={t("page-4.h34")}/>
            <QuationCard title={t("page-4.h35")}/>
            <QuationCard title={t("page-4.h36")}/>
            <QuationCard title={t("page-4.h37")}/>
            <QuationCard title={t("page-4.h38")}/>
            <QuationCard title={t("page-4.h39")}/>
            <QuationCard title={t("page-4.h40")}/>
        </section>

        {/* section 8 */}
        <section className='p-[50px_100px] flex flex-col gap-7 ph:p-[10px]'>
            <p className="text-[40px] font-bold ph:text-[25px]">{t("page-4.h41")}</p>
            <QuationCard title={t("page-4.h42")}/>
            <QuationCard title={t("page-4.h43")}/>
            <QuationCard title={t("page-4.h44")}/>
            <QuationCard title={t("page-4.h45")}/>
            <QuationCard title={t("page-4.h46")}/>
            <QuationCard title={t("page-4.h47")}/>
        </section>

        {/* section 9 */}
        <section className="p-[100px] my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex justify-between items-center ph:flex-col ph:p-[10px] ph:items-start">
            <p data-aos="fade-right" className="text-[40px] font-bold text-white ph:text-[25px]">{t("page-4.h48")}</p>
            <div data-aos="fade-left" className=" gap-3 h-[66px] ph:h-[35px] flex">
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

export default Quations