import BlogCard from "../components/BlogCard"
import { useTranslation } from "react-i18next";


const Blog = () => {
    const {t , i18n} = useTranslation()

    const changeLanguage = (language) =>
    {
      i18n.changeLanguage(language)
    }
  return (
    <div>

        {/* section 1 */}
        <section className="p-[50px_100px]  rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex flex-col gap-2 ph:p-[10px]">
            <p className="text-gray-400 text-[15px] ph:text-[10px]">{t("page-6.h1")}</p>
            <p className="text-[40px] font-bold text-white ph:text-[30px]">{t("page-6.h2")}</p>
        </section>

        {/* section 2 */}
        <section className="p-[50px_150px] flex flex-wrap gap-[30px_2%] ph:p-[10px]">
            <BlogCard img={"./src/assets/ph1.png"} title={t("page-6.h3")} />
            <BlogCard img={"./src/assets/ph2.png"} title={t("page-6.h4")} />
            <BlogCard img={"./src/assets/ph3.png"} title={t("page-6.h5")} />
            <BlogCard img={"./src/assets/ph4.png"} title={t("page-6.h6")} />
            <BlogCard img={"./src/assets/ph5.png"} title={t("page-6.h7")} />
            <BlogCard img={"./src/assets/ph6.png"} title={t("page-6.h8")} />
            <BlogCard img={"./src/assets/ph7.png"} title={t("page-6.h9")} />
            <BlogCard img={"./src/assets/ph8.png"} title={t("page-6.h10")} />
            <BlogCard img={"./src/assets/ph9.png"} title={t("page-6.h11")} />
            <BlogCard img={"./src/assets/ph10.png"} title={t("page-6.h12")} />
            <BlogCard img={"./src/assets/ph11.png"} title={t("page-6.h13")} />
            <BlogCard img={"./src/assets/ph12.png"} title={t("page-6.h14")} />
        </section>

        {/* section 3 */}
        <section className="p-[100px] my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex justify-between items-center ph:flex-col ph:p-[10px] ph:items-start">
            <p data-aos="fade-right" className="text-[40px] font-bold text-white ph:text-[25px]">Остались вопросы? Спросите нас в соцсетях!</p>
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

export default Blog