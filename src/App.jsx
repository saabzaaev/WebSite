
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Layout from "./Layout/Layout";
import Price from "./Pages/Price";
import Help from "./Pages/Help";
import Quations from "./Pages/Quations";
import Bonus from "./Pages/Bonus";
import Blog from "./Pages/Blog";
import Shoping from "./Pages/Shoping";


function App()
{
  const {t , i18n} = useTranslation()

  const changeLanguage = (language) =>
  {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    AOS.init();
  }, [])


  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<Layout/>,
        children:
        [
          {
            index:true,
            element:<Home/>
          },
          {
            path:"/about",
            element:<About/>
          },
          {
            path:"/price",
            element:<Price/>
          },
          {
            path:"/help",
            element:<Help/>
          },
          {
            path:"/quations",
            element:<Quations/>
          },
          {
            path:"/bonuse",
            element:<Bonus/>
          },
          {
            path:"/blog",
            element:<Blog/>
          },
          {
            path:"/shoping",
            element:<Shoping/>
          },
          {
            path:"*",
            element:<NotFound/>
          }
        ]
      }
    ]
  )

  return <RouterProvider router={router}/>
}

export default App
