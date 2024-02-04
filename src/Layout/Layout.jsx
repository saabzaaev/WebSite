import { Link, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next";
import Switcher from '../components/Switcher'
import { useState } from "react";



const Layout = () => {

    const {t , i18n} = useTranslation()

    const changeLanguage = (language) =>
    {
      i18n.changeLanguage(language)
    }
    const [modal , setModal] = useState(false)


  return (
    <div>

        <div className="p-[25px_100px] flex justify-between items-center ph:p-[10px] dark:bg-[black] dark:text-white">
            <img src="./src/assets/Лого.png" alt="picture" />
            <ul className="flex gap-4 items-center ph:hidden">
                <li><Link to={"/"}>{t("page.h1")}</Link></li>
                <li><Link to={"/about"}>{t("page.h2")}</Link></li>
                <li><Link to={"/price"}>{t("page.h3")}</Link></li>
                <li><Link to={"/help"}>{t("page.h4")}</Link></li>
                <li><Link to={"/quations"}>{t("page.h5")}</Link></li>
                <li><Link to={"/bonuse"}>{t("page.h6")}</Link></li>
                <li><Link to={"/blog"}>{t("page.h7")}</Link></li>
                <li><Link to={"/shoping"}>{t("page.h8")}</Link></li>
                {/* <li><Link to={"/shoping"}> Магазины</Link></li> */}
            </ul>
            <Switcher/>
            <select className="dark:text-[black]" onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
            </select>
            <p onClick={() => setModal(true)} className="text-[30px] font-bold hidden ph:flex">=</p>
            <div className="flex items-center gap-10 ph:hidden">
                <p>{t("page.h9")}</p>
                <button className="bg-gradient-to-r from-[#00C97B] to-[#00D981] text-white rounded-[30px] p-[15px_25px]">{t("page.h10")}</button>
            </div>
        </div>
        <div className="p-[30px] ph:p-[10px] dark:bg-black dark:text-[white]">
            <Outlet/>
        </div>
        {
            modal ?
            (
                // <h1 className="text-[20px] absolute top-0 right-0">hello</h1>
                <div className="fixed h-[100%] top-0 left-0 bg-[#f2f2f2] p-[10px] rounded-md w-[70%] flex flex-col gap-4 z-50 ">
                    <h1 className="text-[20px] font-bold text-end" onClick={() => setModal(false)}>X</h1>
                    <Link to={"/"}><div className="w-[90%] rounded-[0_10px_10px_0] bg-[#ccc] p-[10px]">Home</div></Link>
                    <Link to={"/about"}><div className="w-[90%] rounded-[0_10px_10px_0] bg-[#ccc] p-[10px]">About</div></Link>
                    <Link to={"/price"}><div className="w-[90%] rounded-[0_10px_10px_0] bg-[#ccc] p-[10px]">Price</div></Link>
                    <Link to={"/help"}><div className="w-[90%] rounded-[0_10px_10px_0] bg-[#ccc] p-[10px]">Help</div></Link>
                    <Link to={"/quations"}><div className="w-[90%] rounded-[0_10px_10px_0] bg-[#ccc] p-[10px]">Quations</div></Link>
                    <Link to={"/bonuse"}><div className="w-[90%] rounded-[0_10px_10px_0] bg-[#ccc] p-[10px]">Bonuse</div></Link>
                    <Link to={"/blog"}><div className="w-[90%] rounded-[0_10px_10px_0] bg-[#ccc] p-[10px]">Blog</div></Link>
                    <Link to={"/shoping"}><div className="w-[90%] rounded-[0_10px_10px_0] bg-[#ccc] p-[10px]">Shop</div></Link>
                </div>
            )
            : null
        }
    </div>
  )
}

export default Layout