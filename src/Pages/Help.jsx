import Boxes from "../components/Boxes"
import HelperCard from "../components/HelperCard"
import Large from "../components/Large"
import List from "../components/List"
import { useTranslation } from "react-i18next";


const Help = () => {
    const {t , i18n} = useTranslation()

    const changeLanguage = (language) =>
    {
      i18n.changeLanguage(language)
    }
  return (
    <div>

        {/* section 1 */}
        <section className="p-[100px] my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex flex-col gap-2 ph:gap-3 ph:p-[10px] ph:my-[10px]">
            <p className="text-gray-400 text-[10px]">{t("page-3.h1")}</p>
            <p className="text-[40px] font-bold text-white ph:text-[20px]">{t("page-3.h2")}</p>
        </section>

        {/* section 2 */}
        <section className="flex justify-between p-[50px_100px] ph:p-[10px] ph:flex-col ph:gap-10">
            <HelperCard img={"./src/assets/p1.png"} title={t("page-3.h3")} about={t("page-3.h4")} price={t("page-3.h5")} />
            <HelperCard img={"./src/assets/p2.png"} title={t("page-3.h6")} about={t("page-3.h7")} price={t("page-3.h8")} />
            <HelperCard img={"./src/assets/p3.png"} title={t("page-3.h9")}  price={t("page-3.h10")} />
            <HelperCard img={"./src/assets/p4.png"} title={t("page-3.h11")} about={t("page-3.h12")} price={t("page-3.h13")} />
        </section>

        {/* section 3 */}
        <section className="p-[50px_100px] flex flex-col gap-10 ph:p-[10px] ph:flex-col">
            <aside className="w-[45%] flex-col gap-3 flex ph:w-[100%]">
                <p className="text-[30px] font-bold ph:text-[20px]">{t("page-3.h14")}</p>
                <p className=" ph:text-[12px]">{t("page-3.h15")}</p>
            </aside>
            <div className="flex justify-between ph:w-[100%] ph:flex-wrap ph:justify-between ph:gap-[30px_4%]">
                <div className="border-b-[1px] border-b-[gray] p-[10px_100px_10px_0] flex flex-col gap-5 ph:w-[48%]">
                    <p className="text-[14px]">{t("page-3.h16")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/map.png" className="" alt="" />
                        <p>{t("page-3.h17")}</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[gray] p-[10px_100px_10px_0] flex flex-col gap-5 ph:w-[48%]">
                    <p className="text-[14px]">{t("page-3.h18")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/dom.png" className="" alt="" />
                        <p>{t("page-3.h19")}</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[gray] p-[10px_80px_10px_0] flex flex-col gap-5 ph:w-[48%]">
                    <p className="text-[14px]">{t("page-3.h20")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/Notebook.png" className="" alt="" />
                        <p>{t("page-3.h21")}</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[gray] p-[10px_100px_10px_0] flex flex-col gap-5 ph:w-[48%]">
                    <p className="text-[14px]">{t("page-3.h22")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/Barbell.png" className="" alt="" />
                        <p>{t("page-3.h23")}</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[gray] p-[10px_80px_10px_0] flex flex-col gap-5 ph:w-[48%]">
                    <p className="text-[14px]">{t("page-3.h24")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/FileText.png" className="" alt="" />
                        <p>{t("page-3.h25")}</p>
                    </div>
                </div>
            </div>
            <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[20%] ph:w-[100%]">{t("page-3.h26")}</button>
        </section>

        {/* section 4 */}
        <section className="p-[50px_100px] flex flex-col gap-4 ph:p-[10px]">
            <p className="text-[40px] font-bold ph:text-[20px]">{t("page-3.h93")}</p>
            <List img={"./src/assets/10.png"} title={t("page-3.h94")} time={t("page-3.h95")} price={t("page-3.h96")} avarage={"£41.99"} />
            <List img={"./src/assets/11.png"} title={t("page-3.h97")} time={t("page-3.h98")} price={t("page-3.h99")} avarage={"£4.99"} />
            <List img={"./src/assets/15.png"} title={t("page-3.h100")} time={t("page-3.h101")} price={t("page-3.h102")} avarage={"£90.50"} />
        </section>

        {/* section 5 */}
        <section className="p-[50px_100px] ph:p-[10px] ph:my-[50px]">
            <p className="text-[40px] font-bold ph:text-[20px]">{t("page-3.h27")}</p>
            <div className="flex flex-wrap gap-[70px_4%] my-[50px] ph:flex-col ph:gap-4 ph:my-[10px]">
                <Boxes title={t("page-3.h28")} about={t("page-3.h29")} />
                <Boxes title={t("page-3.h30")} about={t("page-3.h31")} />
                <Boxes title={t("page-3.h32")} about={t("page-3.h33")} />
                <Boxes title={t("page-3.h34")} about={t("page-3.h35")} />
                <Boxes title={t("page-3.h36")} about={t("page-3.h37")} />
                <Boxes title={t("page-3.h38")} about={t("page-3.h39")} />
            </div>
            <div className="flex flex-col gap-7">
                <Large title={t("page-3.h40")} about={t("page-3.h41")} price={t("page-3.h42")} />
                <Large title={t("page-3.h43")} about={t("page-3.h44")} price={t("page-3.h45")} />
                <Large title={t("page-3.h46")} about={t("page-3.h47")} price={t("page-3.h48")} />
                <Large title={t("page-3.h49")} about={t("page-3.h50")} price={t("page-3.h51")} />
                <Large title={t("page-3.h52")} about={t("page-3.h53")} price={t("page-3.h54")} />
                <Large title={t("page-3.h55")} about={t("page-3.h56")} price={t("page-3.h57")} />
            </div>
        </section>

        {/* section 6 */}
        <section className="p-[50px_100px] ph:p-[10px]">
            <p className="text-[40px] font-bold ph:text-[18px] ph:my-[20px]">{t("page-3.h58")}</p>
            <Large title={t("page-3.h59")} about={t("page-3.h60")} price={t("page-3.h61")} />
            <Large title={t("page-3.h62")} about={t("page-3.h63")} price={t("page-3.h64")} />
        </section>

        {/* section 7 */}
        <section className="p-[50px_100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex justify-between items-center ph:p-[10px] ph:flex-col ph:gap-5">
            <img data-aos="fade-right" src="./src/assets/phone.png" className="w-[30%] ph:w-[100%]" alt="picture" />
            <aside data-aos="fade-left" className="w-[60%] text-[white] flex flex-col gap-5 ph:w-[100%]">
                <p className="text-[25px] font-bold ph:text-[16px]">{t("page-3.h5")}</p>
                <input type="text" className="bg-transparent border-b-[1px] border-b-gray-400 p-[10px_0_10px_0px] w-[60%] text-[20px] outline-none ph:w-[100%] ph:text-[12px]" placeholder={t("page-3.h66")} />
                <div className="flex items-center justify-between ph:flex-col-reverse ph:gap-3">
                    <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[20%] ph:w-[100%]">{t("page-3.h67")}</button>
                    <p className="text-[15px] text-gray-300 w-[70%] ph:w-[100%] ph:text-[10px]">{t("page-3.h68")}</p>
                </div>
            </aside>
        </section>

        {/* section 8 */}
        <section className="p-[50px_100px] flex flex-col gap-5 ph:p-[10px]">
            <p className="text-[30px] font-bold ph:text-[20px]">{t("page-3.h86")}</p>
            <Large title={t("page-3.h87")} price={t("page-3.h88")}/>
            <Large title={t("page-3.h89")} price={t("page-3.h90")}/>
            <Large title={t("page-3.h91")} price={t("page-3.h92")}/>
        </section>

        {/* section 9 */}
        <section className="p-[50px_100px] ph:p-[10px]">
            <p className="text-[30px] font-bold ph:text-[25px]">{t("page-3.h69")}</p>
            <div className=" grid grid-cols-[48%_48%] grid-rows-[auto_auto_auto] gap-[50px_4%] ph:grid-cols-[auto] ph:grid-rows-5">
                <Large title={t("page-3.h70")} about={t("page-3.h71")} price={t("page-3.h72")}/>
                <Large title={t("page-3.h73")} about={t("page-3.h74")} price={t("page-3.h75")} />
                <Large title={t("page-3.h76")} about={t("page-3.h77")} price={t("page-3.h78")} />
                <Large title={t("page-3.h79")} about={t("page-3.h80")} price={t("page-3.h81")} />
                <Large title={t("page-3.h82")} about={t("page-3.h83")} price={t("page-3.h84")} />
            </div>
        </section>

        {/* section 10 */}
        <section className="p-[100px] my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex justify-between items-center ph:flex-col ph:p-[10px] ph:items-start">
            <p data-aos="fade-right" className="text-[40px] font-bold text-white ph:text-[25px]">{t("page-3.h85")}</p>
            <div data-aos="fade-left" className=" gap-3 h-[66px] flex ph:h-[35px] ph:gap-5">
            <img src="./src/assets/w.png" className="w-[66px] h-[66px] ph:w-[35px] ph:h-[35px] rounded-full" alt="" />
            <img src="./src/assets/v.png" className="w-[66px] h-[66px] ph:w-[35px] ph:h-[35px] rounded-full" alt="" />
            <img src="./src/assets/c.png" className="w-[66px] h-[66px] ph:w-[35px] ph:h-[35px] rounded-full" alt="" />
            </div>
        </section>

        {/* footer  */}
        <section className="ph:mt-[30px]">
                <header className="text-[15px] p-[50px_100px] leading-8 text-gray-400 flex justify-between ph:p-[10px] ph:flex-col ph:items-center ph:text-center ph:gap-10">
                    <div className="w-[20%] flex flex-col gap-7 ph:flex-row ph:w-[100%]">
                        <img src="./src/assets/Лого.png" alt="picture" />
                        <img src="./src/assets/i.png" className="w-[150px] h-[46px]" alt="picture" />
                    </div>
                    <ul>
                        <li className="text-black text-[18px] font-bold">О компании</li>
                        <li>Услуги</li>
                        <li>Цены</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                        <li>Вакансии</li>
                        <li>Соглашение о персональных данных</li>
                        <li>Условия использования</li>
                    </ul>
                    <ul>
                        <li className="text-black text-[18px] font-bold">Полезное</li>
                        <li>Как работает наш сервис</li>
                        <li>Как покупать с оператором</li>
                        <li>Ответы на частые вопросы</li>
                        <li>Популярные магазины</li>
                        <li>Черный список магазинов</li>
                        <li>Актуальные распродажи</li>
                    </ul>
                    <ul>
                        <li className="text-black text-[18px] font-bold">Спецпроекты</li>
                        <li>50% на первую доставку</li>
                        <li>Скидки для постоянных клиентов</li>
                        <li>Реферальная программа</li>
                        <li>Кэшбек Mr. Rebates и Rakuten</li>
                        <li>Stop Fraud</li>
                    </ul>
                </header>
                <hr className="border-[1px] border-gray-200 w-[90%] m-auto"/>
                <p className="text-center text-[12px] tracking-[1px] text-gray-400 mt-[20px]">© 2021 Okeypost . Все права защищены.</p>
        </section>


    </div>
  )
}

export default Help