import Item from "../components/Item"
import { useTranslation } from "react-i18next";


const Price = () => {
  const {t , i18n} = useTranslation()

  const changeLanguage = (language) =>
  {
    i18n.changeLanguage(language)
  }
  
  return (
    <div>

      {/* section 1 */}
      <section className="p-[50px_100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex flex-col text-white gap-5 ph:p-[10px]">
        <p className="text-[15px] text-gray-400 ph:text-[8px]">{t("page-2.h1")}</p>
        <p className="text-[40px] font-bold ph:text-[25px]">{t("page-2.h2")}</p>
        <p className="text-[20px] ph:text-[15px]">{t("page-2.h3")}</p>
        <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[18%] ph:w-[100%]">{t("page-2.h4")}</button>
      </section>

      {/* section 2 */}
      <section className="p-[50px_100px] ph:p-[10px]">
        <p className="text-[40px] font-bold w-[50%] ph:text-[22px] ph:w-[auto]">{t("page-2.h5")}</p>
        
        <div className="flex flex-wrap gap-[50px_4%] ph:mt-[50px]">
            <Item img={"./src/assets/f1.png"} title={t("page-2.h6")} about={t("page-2.h7")} category={t("page-2.h8")} btn={t("page-2.h")}/>
            <Item img={"./src/assets/f2.png"} title={t("page-2.h9")} about={t("page-2.h10")} category={t("page-2.h11")} btn={t("page-2.h")}/>
            <Item img={"./src/assets/f3.png"} title={t("page-2.h12")} about={t("page-2.h13")} category={t("page-2.h14")} btn={t("page-2.h")}/>
            <Item img={"./src/assets/f4.png"} title={t("page-2.h15")} about={t("page-2.h16")}  btn={t("page-2.h")}/>
            <Item img={"./src/assets/f5.png"} title={t("page-2.h17")} about={t("page-2.h18")} category={t("page-2.h19")} btn={t("page-2.h")}/>
            <Item img={"./src/assets/f6.png"} title={t("page-2.h20")} about={t("page-2.h21")} category={t("page-2.h22")} btn={t("page-2.h")}/>
            <Item img={"./src/assets/f7.png"} title={t("page-2.h23")} about={t("page-2.h24")} category={t("page-2.h25")} btn={t("page-2.h")}/>
            <Item img={"./src/assets/f8.png"} title={t("page-2.h26")} about={t("page-2.h27")} category={t("page-2.h28")} btn={t("page-2.h")}/>
            <Item img={"./src/assets/f9.png"} title={t("page-2.h29")} about={t("page-2.h30")} category={t("page-2.h31")} btn={t("page-2.h")}/>
            <Item img={"./src/assets/f9.png"} title={t("page-2.h32")} about={t("page-2.h33")} btn={t("page-2.h")}/>
        </div>
      </section>

      {/* section 3 */}
      <section className="p-[100px] my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex justify-between items-center ph:flex-col ph:p-[10px] ph:items-start">
        <p data-aos="fade-right" className="text-[40px] font-bold text-white ph:text-[25px]">{t("page-2.h34")}</p>
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

export default Price