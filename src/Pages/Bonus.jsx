import BonuseCard from "../components/BonuseCard"
import { useTranslation } from "react-i18next";


const Bonus = () => {
    const {t , i18n} = useTranslation()

    const changeLanguage = (language) =>
    {
      i18n.changeLanguage(language)
    }
  return (
    <div>

        {/* section 1 */}
        <section className="p-[100px] my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex flex-col gap-2 ph:gap-3 ph:p-[10px] ph:my-[10px]">
            <p className="text-gray-400 text-[10px]">{t("page-5.h1")}</p>
            <p className="text-[40px] font-bold text-white ph:text-[25px]">{t("page-5.h2")}</p>
            <p className="text-[20px] font-bold text-white ph:text-[15px]">{t("page-5.h3")}</p>
            <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[20%] ph:w-[100%]">{t("page-5.h4")}</button> 
        </section>

        {/* section 2 */}
        <section className="p-[50px_100px] ph:p-[10px] ph:my-[30px]">
            <p className="text-[40px] font-bold ph:text-[25px]">{t("page-5.h5")}</p>
            <div className="flex flex-wrap gap-[70px_10%] my-[100px] ph:gap-5 ph:my-[10px]">
                <BonuseCard img={"./src/assets/i1.png"} title={t("page-5.h6")} about={t("page-5.h7")}/>
                <BonuseCard img={"./src/assets/i2.png"} title={t("page-5.h8")} about={t("page-5.h9")}/>
                <BonuseCard img={"./src/assets/i3.png"} title={t("page-5.h10")} about={t("page-5.h11")}/>
                <BonuseCard img={"./src/assets/i4.png"} title={t("page-5.h12")} about={t("page-5.h13")}/>
                <BonuseCard img={"./src/assets/i5.png"} title={t("page-5.h14")} about={t("page-5.h15")}/>
            </div>
        </section>

        {/* section 3 */}
        <section className="p-[50px_100px] mb-[100px] text-white rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex items-center justify-between ph:flex-col ph:gap-10 ph:p-[10px]">
            <img data-aos="fade-right" src="./src/assets/rocet.png" className="w-[30%] ph:w-[100%]" alt="picture" />
            <aside data-aos="fade-left" className="w-[67%] flex flex-col gap-5 ph:w-[100%]">
                <p className="text-[55px] font-bold ph:text-[20px]">{t("page-5.h16")}</p>
                <p className="text-[20px] ph:text-[15px]">{t("page-5.h17")}</p>
                <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[20%] ph:w-[100%]">{t("page-5.h18")}</button> 
            </aside>
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

export default Bonus