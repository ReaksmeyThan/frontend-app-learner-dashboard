import Footer from "@edx/frontend-component-footer-edx";
import React from "react";

import "./Footer.scss";

const MyFooter = () => {
  return (
    <Footer
      onLanguageSelected={(languageCode) => {
        /* set language */
      }}
      supportedLanguages={[
        { label: "English", value: "en" },
        { label: "Español", value: "es" },
      ]}
    />
  );
};
export default MyFooter;
