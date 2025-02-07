import React, { ReactNode, useRef, useState, useEffect } from "react";
import { NavBar } from "../../components/navBar/navBar";
import { Footer } from "../../UI/footer/footer";

import en from "../../common/translation/en.json";
import hy from "../../common/translation/hy.json";
import ru from "../../common/translation/ru.json";

import { IntlProvider } from "react-intl";
import { useLocation } from "react-router-dom";
const language = {
  en: "en",
  ru: "ru",
  hy: "hy",
};

export const Layout = ({ children }) => {
  const [locale, setLocale] = useState(language.en);
  const location = useLocation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") ?? language.en;
    setLocale(savedLanguage);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  const changeLanguage = (lang) => {
    setLocale(lang);
    localStorage.setItem("language", lang);
  };

  const contactRef = useRef(null);
  const messages =
    locale === language.hy ? hy : locale === language.ru ? ru : en;

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>
        <NavBar
          onContactClick={scrollToContact}
          changeLanguage={changeLanguage}
        />
        {children}
        <Footer
          ref={contactRef}
          locale={locale}
          changeLanguage={changeLanguage}
        />
      </div>
    </IntlProvider>
  );
};
