/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useIntl } from '@edx/frontend-platform/i18n'; // Use useIntl hook
import logoWhite from '../assets/logo-white.png';
import messages from '../containers/Dashboard/messages'; // Import messages directly
import './Footer.scss';

const Footer = () => {
  const { formatMessage } = useIntl(); // Destructure formatMessage from useIntl
  const supportedLanguages = [
    { code: 'en', label: 'English' },
    { code: 'kh', label: 'ខ្មែរ' },
  ];

  // Initialize selected language from localStorage or default to 'en'
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('i18nextLng') || 'en'
  );

  useEffect(() => {
    // Apply translations dynamically on initial load
    translatePage(selectedLanguage);
  }, [selectedLanguage]);

  const translatePage = (languageCode) => {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-translate-key');
      const translatedText = messages[languageCode]?.[key]?.defaultMessage || key;
      element.textContent = translatedText;
    });
  };

  const onLanguageSelected = () => {
    const selectedLang = supportedLanguages.find((lang) => lang.code === selectedLanguage);
    if (selectedLang) {
      localStorage.setItem('i18nextLng', selectedLang.code);
      translatePage(selectedLang.code); // Apply translations dynamically
    }
  };

  return (
    <footer className="footer-bottom-wrapper">
      {/* Bottom Footer */}
      <div className="footer-bottom font-red-hat-display">
        <Container fluid>
          <Row className="text-left text-white text-md-left pt-4">
            {/* Logo */}
            <Col xs={12} md={12} lg={2} className="pl-0 d-flex justify-content-center">
              <img src={logoWhite} alt="Logo" className="logo" />
            </Col>

            {/* Copyright */}
            <Col xs={12} md={12} lg={4} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
              <p className="small m-0">&copy; 2024 Credit Bureau Cambodia. All rights reserved.</p>
            </Col>

            {/* Links */}
            <Col xs={12} md={12} lg={4} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
              <ul className="list-inline m-0">
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white small" data-translate-key="myCourse">
                    {formatMessage({ id: `myCourse`, defaultMessage: messages[selectedLanguage]?.myCourse })}
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white small" data-translate-key="library">
                    {formatMessage({ id: `library`, defaultMessage: messages[selectedLanguage]?.library })}
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white small" data-translate-key="contactUs">
                    {formatMessage({ id: `contactUs`, defaultMessage: messages[selectedLanguage]?.contactUs })}
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white small" data-translate-key="account">
                    {formatMessage({ id: `account`, defaultMessage: messages[selectedLanguage]?.account })}
                  </a>
                </li>
              </ul>
            </Col>

            {/* Language Selector */}
            <Col xs={9} md={9} lg={2} className="pb-4">
              <p className="mb-0">Change Language</p>
              <div className="d-flex align-items-center">
                <select
                  className="form-select"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  aria-label="Select Language"
                >
                  {supportedLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn-submit"
                  onClick={onLanguageSelected}
                  aria-label="Submit Language Change"
                >
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
