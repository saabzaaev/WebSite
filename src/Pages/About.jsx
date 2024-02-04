import Reklama from "../components/Reklama"
import { useTranslation } from "react-i18next";


const About = () => {
  const {t , i18n} = useTranslation()

  const changeLanguage = (language) =>
  {
    i18n.changeLanguage(language)
  }
  return (
    <div>

      {/* section 1 */}
      <section className="p-[50px_100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex flex-col text-white gap-5 ph:p-[20px] ph:gap-3">
        <p className="text-[15px] text-gray-400 ph:text-[10px]">{t("page-1.h1")}</p>
        <p className="text-[40px] font-bold ph:text-[25px]">{t("page-1.h2")}</p>
        <p className="text-[20px] ph:text-[15px]">{t("page-1.h3")}</p>
        <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[18%] ph:w-[100%]">{t("page-1.h4")}</button>
      </section>

      {/* section 2 */}
      <section data-aos="fade-up" className="p-[50px_100px] flex flex-col gap-10 ph:p-[10px]">
        
        <p className="text-[40px] font-bold ph:text-[25px]">{t("page-1.h5")}</p>
        <p className="text-[20px] w-[65%] text-gray-600 ph:text-[15px] ph:w-[auto]">{t("page-1.h6")}</p>
        <Reklama img={"./src/assets/first.png"} num={"01"} title={t("page-1.h7")} about={t("page-1.h8")} />
        <Reklama img={"./src/assets/second.png"} num={"02"} title={t("page-1.h9")} about={t("page-1.h10")} />
        <Reklama img={"./src/assets/third.png"} num={"03"} title={t("page-1.h11")} about={t("page-1.h12")} />
        <Reklama img={"./src/assets/forth.png"} num={"04"} title={t("page-1.h13")} about={t("page-1.h14")} />
        <Reklama img={"./src/assets/five.png"} num={"05"} title={t("page-1.h15")} about={t("page-1.h16")} />
      </section>

      {/* section 3 */}
      <section className="p-[100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex justify-between items-center ph:flex-col ph:p-[10px] ph:items-start">
        <p data-aos="fade-right" className="text-[40px] font-bold text-white ph:text-[25px]">{t("page-1.h18")}</p>
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

export default About