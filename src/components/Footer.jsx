/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import logoWhite from '../assets/logo-white.png';
import './Footer.scss';

const Footer = () => {
  const supportedLanguages = [
    { code: 'en', label: 'English' },
    { code: 'kh', label: 'Khmer' },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(supportedLanguages[0].code);

  const onLanguageSelected = () => {
    console.info(`Selected language: ${selectedLanguage}`);
    // Add logic to handle language change here
    const selectedLang = supportedLanguages.find((lang) => lang.code === selectedLanguage);
    if (selectedLang) {
      localStorage.setItem('i18nextLng', selectedLang.code);
      // window.alert(`Language changed to: ${selectedLang.label}`);
      window.location.reload(); // Reload to apply the language change
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
                  <a href="#" className="text-white small">
                    'My Courses'
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white small">
                    Library
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white small">
                    Contact Us
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white small">
                    Account
                  </a>
                </li>
              </ul>
            </Col>

            {/* Language Selector */}
            <Col xs={9} md={9} lg={2} className="pb-4">
              <p className="mb-0">Change Language</p>
              <div className="d-flex align-items-center">
                <select className="form-select" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                  {supportedLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
                <button type="button" className="btn-submit" onClick={onLanguageSelected}>
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
