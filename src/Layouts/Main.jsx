import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import i18next from "i18next";
import HomePage from "../Pages/Home/Home";
import Header from "../headerfooter/header";
import Footer from "../headerfooter/footer";


const Main = () => {
  useEffect(() => {
    if (i18next.language === "ar") {
      document.dir = "rtl";
    }
  }, []);

  return (
    <>
      <Header/>
      <HomePage/>
      <Footer/>
    </>
  );
};

export default Main;