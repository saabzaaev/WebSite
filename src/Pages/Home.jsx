import Card from "../components/Card"
import List from "../components/List"
import '../App.css'
import { useTranslation } from "react-i18next";

const Home = () => {
    const {t , i18n} = useTranslation()

    const changeLanguage = (language) =>
    {
      i18n.changeLanguage(language)
    }
  return (
    <div>
        {/* section 1 */}
        <section className="p-[50px_100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex items-center justify-between ph:p-[10px] ph:flex-col ph:gap-10">
            <aside data-aos="fade-right" className="text-white w-[54%] flex flex-col gap-4 ph:w-[100%]">
                <p className="text-[65px] font-bold ph:text-[25px]">{t("page.h11")}</p>
                <p className="text-[20px] ph:text-[15px]">{t("page.h12")}</p>
                <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[35%] ph:w-[100%]">{t("page.h13")}</button>
            </aside>
            <img data-aos="fade-left" src="./src/assets/Иллюстрация.png" className="w-[40%] ph:w-[100%]" alt="picture" />
        </section>

        {/* section 2 */}
        <section className="p-[50px_100px] ph:p-[10px]">
            <p className="text-[25px] w-[20%] font-bold ph:text-[15px]">{t("page.h14")}</p>
            <header className="flex justify-between ph:flex-wrap ph:justify-between gap-[40px_10px] mt-[20px]">
                <div className="flex items-center gap-3 w-[20%] ph:w-[48%] dark:bg-[#3025253a] p-[10px]">
                    <img src="./src/assets/Иконка.png" alt="picture" className="w-[50px] h-[50px]" />
                    <p className="text-[20p]">{t("page.h15")}</p>
                </div>
                <div className="flex items-center gap-3 w-[20%] ph:w-[48%] dark:bg-[#3025253a] p-[10px]">
                    <img src="./src/assets/1.png" alt="picture" className="w-[50px] h-[50px]" />
                    <p className="text-[20p]">{t("page.h16")}</p>
                </div>
                <div className="flex items-center gap-3 w-[20%] ph:w-[48%] dark:bg-[#3025253a] p-[10px]">
                    <img src="./src/assets/2.png" alt="picture" className="w-[50px] h-[50px]" />
                    <p className="text-[20p]">{t("page.h17")}</p>
                </div>
                <div className="flex items-center gap-3 w-[20%] ph:w-[48%] dark:bg-[#3025253a] p-[10px]">
                    <img src="./src/assets/3.png" alt="picture" className="w-[50px] h-[50px]" />
                    <p className="text-[20p]">{t("page.h18")}</p>
                </div>
                <div className="flex items-center gap-3 w-[20%] ph:w-[48%] dark:bg-[#3025253a] p-[10px]">
                    <img src="./src/assets/4.png" alt="picture" className="w-[50px] h-[50px]" />
                    <p className="text-[20p]">{t("page.h19")}</p>
                </div>
                <div className="flex items-center gap-3 w-[20%] ph:w-[48%] dark:bg-[#3025253a] p-[10px]">
                    <img src="./src/assets/5.png" alt="picture" className="w-[50px] h-[50px]" />
                    <p className="text-[20p]">{t("page.h20")}</p>
                </div>
            </header>

            <footer className="grid grid-cols-[30%_30%_30%] grid-rows-[auto_auto] gap-[0px_3%] mt-[100px] ph:flex ph:flex-col ph:gap-10 ph:items-center">
                <div data-aos="fade-up" className="flex flex-col gap-20  dark:text-black">
                    <p className="text-[25px] font-bold">{t("page.h21")}</p>

                    <div className="p-[20px] rounded-3xl flex items-center gap-4 bg-[#F2F6FC]">
                        <img src="./src/assets/фон.png"  className="w-[75px] h-[55px]" alt="picture" />
                        <div>
                            <p>{t("page.h22")}</p>
                            <p className="text-[25px]">7891,46₽</p>
                        </div>
                    </div>
                </div>

                <img data-aos="fade-up" src="./src/assets/Куртка.png" alt="Picture" />

                <div data-aos="fade-up" className="flex flex-col gap-20  dark:text-black">
                    <p className="text-[25px] font-bold">{t("page.h25")}</p>

                    <div className="p-[20px] rounded-3xl flex items-center gap-4 bg-[#F2F6FC]">
                        <img src="./src/assets/фон1.png"  className="w-[75px] h-[55px]" alt="picture" />
                        <div>
                            <p>{t("page.h26")}</p>
                            <p className="text-[25px] text-[green]">£80.62</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className=" flex items-center gap-5">
                    <img src="./src/assets/futbolka.png" className="w-[120px] h-[120px]" alt=" picture" />
                    <img src="./src/assets/row.png" className="w-[80px] h-[30px]" alt="picture" />
                </div>

                <div data-aos="fade-up" className="flex flex-col justify-center items-center gap-4">
                    <p>{t("page.h23")}</p>
                    <p className="text-[20px]">{t("page.h24")} <span className="text-[green]"> $119.56</span></p>
                </div>

                <div data-aos="fade-up" className=" flex items-center justify-end gap-5">
                    <img src="./src/assets/row.png" className="w-[80px] h-[30px] rotate-180" alt="picture" />
                    <img src="./src/assets/Джинсы.png" className="w-[120px] h-[120px]" alt=" picture" />
                </div>
            </footer>
        </section>

        {/* section 3 */}
        <section data-aos="fade-up" className="p-[50px_100px] rounded-2xl flex items-center justify-between shadow-3xl ph:flex-wrap ph:p-[10px]">
            <div className="flex items-center gap-5 border-r-[1px] border-r-gray-400 p-[25px_20px]  justify-center ph:border-none ph:p-[10px] ph:w-[48%] ph:justify-start">
                <img src="./src/assets/6.png" className="w-[60px] h-[60px]" alt="picture" />
                <div className="w-[40%]">
                    <p className="text-[20px] ph:text-[15px] ">{t("page.h27")}</p>
                </div>
            </div>
            <div className="flex items-center gap-5 border-r-[1px] border-r-gray-400 p-[25px_20px]  justify-center ph:border-none ph:p-[10px] ph:w-[48%] ph:justify-start">
                <img src="./src/assets/7.png" className="w-[60px] h-[60px]" alt="picture" />
                <div className="w-[60%]">
                    <p className="text-[20px] ph:text-[15px] ">{t("page.h28")}</p>
                </div>
            </div>
            <div className="flex items-center gap-5 border-r-[1px] border-r-gray-400 p-[25px_20px] justify-center ph:border-none ph:p-[10px] ph:w-[48%] ph:justify-start">
                <img src="./src/assets/8.png" className="w-[60px] h-[60px]" alt="picture" />
                <div className="w-[40%]">
                    <p className="text-[20px] ph:text-[15px] ">{t("page.h29")}</p>
                </div>
            </div>
            <div className="flex items-center gap-5  p-[25px_20px] justify-center ph:p-[10px] ph:w-[48%] ph:justify-start">
                <img src="./src/assets/9.png" className="w-[60px] h-[60px]" alt="picture" />
                <div className="w-[60%]">
                    <p className="text-[20px] ph:text-[15px] ">{t("page.h30")}</p>
                </div>
            </div>
        </section>

        {/* section 4 */}
        <section className="p-[50px_100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex items-center justify-between ph:p-[10px] ph:flex-col">
            <img data-aos="fade-right" src="./src/assets/shop.png" className="w-[28%] ph:w-[100%]" alt="picture" />
            <aside data-aos="fade-left" className="text-white w-[70%] flex flex-col gap-4 ph:w-[100%]">
                <p className="text-[30px] font-bold ph:text-[20px]">{t("page.h31")}</p>
                <p className="text-[20px] ph:text-[15px]">{t("page.h32")}</p>
                <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[35%] ph:w-[100%]">{t("page.h33")}</button>
            </aside>
        </section>

        {/* section 5 */}
        <section data-aos="fade-up" className="p-[50px_100px] flex flex-col gap-10 ph:p-[10px]">
            <aside className="w-[45%] flex-col gap-3 flex ph:w-[100%]">
                <p className="text-[30px] font-bold ph:text-[25px]">{t("page.h34")}</p>
                <p className="">{t("page.h35")}</p>
            </aside>
            <div className="flex justify-between ph:w-[100%] ph:flex-wrap ph:justify-between ph:gap-[30px_4%]">
                <div className="border-b-[1px] border-b-[gray] p-[10px_100px_10px_0] flex flex-col gap-5 ph:w-[48%] dark:bg-[#3025253a]">
                    <p className="text-[14px]">{t("page.h36")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/map.png" className="" alt="" />
                        <p>{t("page.h37")}</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[gray] p-[10px_100px_10px_0] flex flex-col gap-5 ph:w-[48%] dark:bg-[#3025253a]">
                    <p className="text-[14px]">{t("page.h38")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/dom.png" className="" alt="" />
                        <p>{t("page.h39")}</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[gray] p-[10px_80px_10px_0] flex flex-col gap-5 ph:w-[48%] dark:bg-[#3025253a]">
                    <p className="text-[14px]">{t("page.h40")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/Notebook.png" className="" alt="" />
                        <p>{t("page.h41")}</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[gray] p-[10px_100px_10px_0] flex flex-col gap-5 ph:w-[48%] dark:bg-[#3025253a]">
                    <p className="text-[14px]">{t("page.h42")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/Barbell.png" className="" alt="" />
                        <p>0,5</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[gray] p-[10px_80px_10px_0] flex flex-col gap-5 ph:w-[48%] dark:bg-[#3025253a]">
                    <p className="text-[14px]">{t("page.h44")}</p>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/FileText.png" className="" alt="" />
                        <p>{t("page.h45")}</p>
                    </div>
                </div>
            </div>
            <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[20%] ph:w-[100%]">{t("page.h46")}</button>
        </section>

        {/* section 6 */}
        <section className="p-[50px_100px] ph:p-[10px] gap-5 flex flex-col">
            <p className="text-[40px] font-bold ph:text-[25px]">{t("page.h47")}</p>
            <List data-aos="fade-up" img={"./src/assets/10.png"} title={t("page.h48")} time={t("page.h50")} price={t("page.h52")} avarage={"£41.99"} />
            <List data-aos="fade-up" img={"./src/assets/11.png"} title={t("page.h55")} time={t("page.h56")} price={t("page.h57")} avarage={"£54.55"} />
            <List data-aos="fade-up" img={"./src/assets/15.png"} title={t("page.h59")} time={t("page.h60")} price={t("page.h61")} avarage={"£90.50"} />
        </section>

        {/* section 7 */}
        <section className="p-[50px_150px] flex flex-col gap-7 ph:p-[10px]">
            <p className="text-[40px] font-bold w-[50%] ph:text-[25px] ph:w-[100%]">{t("page.h63")}</p>
            <div className="flex justify-between items-start ph:flex-col ph:gap-9">
                <div data-aos="fade-up" className="w-[22%] flex flex-col gap-2 ph:w-[100%] ">
                    <img src="./src/assets/english.png" className="w-[] h-[]" alt="picture" />
                    <p className="text-[20px] w-[80%] font-bold">{t("page.h64")}</p>
                    <p>{t("page.h65")}</p>
                </div>
                <div data-aos="fade-up" className="w-[22%] flex flex-col gap-2 ph:w-[100%] ">
                    <img src="./src/assets/packet.png" className="w-[] h-[]" alt="picture" />
                    <p className="text-[20px] w-[90%] font-bold">{t("page.h66")}</p>
                    <p>{t("page.h67")}</p>
                </div>
                <div data-aos="fade-up" className="w-[22%] flex flex-col gap-2 ph:w-[100%] ">
                    <img src="./src/assets/teacher.png" className="w-[] h-[]" alt="picture" />
                    <p className="text-[20px] w-[90%] font-bold">{t("page.h68")}</p>
                    <p>{t("page.h69")}</p>
                </div>
                <div data-aos="fade-up" className="w-[22%] flex flex-col gap-2 ph:w-[100%] ">
                    <img src="./src/assets/order.png" className="w-[] h-[]" alt="picture" />
                    <p className="text-[20px] w-[90%] font-bold">{t("page.h70")}</p>
                    <p>{t("page.h71")}</p>
                </div>
            </div>
            <p>{t("page.h72")}</p>
            <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[20%] ph:w-[100%]">{t("page.h73")}</button>
        </section>

        {/* section 8 */}
        <section className="p-[50px_100px] mt-[50px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex items-center justify-between ph:flex-col ph:gap-7 ph:p-[10px]">
            <img data-aos="fade-right" src="./src/assets/hello.png" className="w-[28%] ph:w-[100%]" alt="picture" />
            <aside data-aos="fade-left" className="text-white w-[70%] flex flex-col gap-4 ph:w-[100%]">
                <p className="text-[30px] font-bold">{t("page.h74")}</p>
                <p className="text-[20px]">{t("page.h75")}</p>
                <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[35%] ph:w-[100%]">{t("page.h76")}</button>
            </aside>
        </section>

        {/* section 9 */}
        <section className="p-[50px_150px] ph:p-[10px]">
            <p className="text-[40px] font-bold w-[70%] ph:text-[25px] ph:w-[100%]">{t("page.h77")}</p>
            <p className="w-[40%] ph:w-[100%]">{t("page.h78")}</p>
            <div data-aos="fade-up" className="flex justify-between mt-[50px] ph:flex-col ph:gap-10">
                <div className="w-[30%] p-[20px] rounded-md shadow-2xl flex flex-col gap-3 ph:w-[100%] dark:bg-[#3025253a]">
                    <img src="./src/assets/12.png" className="w-[50px] h-[50px]" alt="picture" />
                    <p className="text-[18px] font-bold">{t("page.h79")}</p>
                    <p className="text-[14px]">{t("page.h80")}</p>
                </div>
                <div className="w-[30%] p-[20px] rounded-md shadow-2xl flex flex-col gap-3 ph:w-[100%] dark:bg-[#3025253a]">
                    <img src="./src/assets/13.png" className="w-[50px] h-[50px]" alt="picture" />
                    <p className="text-[18px] font-bold">{t("page.h81")}</p>
                    <p className="text-[14px]">{t("page.h82")}</p>
                </div>
                <div className="w-[30%] p-[20px] rounded-md shadow-2xl flex flex-col gap-3 ph:w-[100%] dark:bg-[#3025253a]">
                    <img src="./src/assets/14.png" className="w-[50px] h-[50px]" alt="picture" />
                    <p className="text-[18px] font-bold">{t("page.h83")}</p>
                    <p className="text-[14px]">{t("page.h84")}</p>
                </div>
            </div>
        </section>

        {/* section 10 */}
        <section className="p-[50px_100px] flex flex-col gap-5 ph:p-[10px]">
            <p className="text-[30px] font-bold ph:text-[25px]">{t("page.h85")}</p>
            <div data-aos="fade-up" className="flex flex-wrap gap-[50px_4%] ph:flex-col">
                <Card img={"./src/assets/karobka.png"} title={t("page.h86")} about={t("page.h87")} city={t("page.h91")} />
                <Card img={"./src/assets/bor.png"} title={t("page.h92")} about={t("page.h93")} city={t("page.h94")} />
                <Card img={"./src/assets/bor.png"} title={t("page.h95")} about={t("page.h96")} city={t("page.h97")} />
                <Card img={"./src/assets/karobka.png"} title={t("page.h98")} about={t("page.h99")} city={t("page.h100")} />
            </div>
            <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[15%] ph:w-[100%]">{t("page.h101")}</button>
        </section>

        {/* section 11 */}
        <section data-aos="fade-up" className="p-[50px_150px] flex flex-col gap-4 ph:p-[10px]">
            <p className="text-[30px] font-bold ph:text-[20px]">{t("page.h102")}</p>
            <p className="text-[18] text-[gray]">{t("page.h103")}</p>
            <p className="text-[18] text-[gray]">{t("page.h104")}</p>
            <p className="text-[18] text-[gray]">{t("page.h105")}</p>
            <p className="text-[18] text-[gray]">{t("page.h106")}</p>
        </section>

        {/* section 12 */}
        <section className="p-[50px_100px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] flex items-center justify-between ph:p-[10px] ph:flex-col ph:gap-8">
            <p data-aos="fade-right" className="text-[25px] font-bold w-[32%] text-white ph:text-[20px] ph:w-[100%]">{t("page.h107")}</p>
            <aside data-aos="fade-left" className="text-white flex gap-4 ph:w-[100%] ph:flex-col">
                <input type="text" className="w-[400px] bg-transparent outline-none border-b-[1px] border-b-gray-200 p-[0_0_10px_0] text-[20px] text-white ph:w-[100%]" placeholder={t("page.h108")}  />
                <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px] w-[200px] ph:w-[100%]">{t("page.h109")}</button>
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

export default Home