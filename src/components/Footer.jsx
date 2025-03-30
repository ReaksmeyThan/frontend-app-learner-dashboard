import Footer from '@edx/frontend-component-footer-edx';
import { getConfig } from '@edx/frontend-platform';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import logoWhite from '../assets/logo-white.png';
import './Footer.scss';

const MyFooter = ({ onLanguageSelected = () => {} }) => {
  const { t } = useTranslation();
  const contextValue = useMemo(
    () => ({
      authenticatedUser: null,
      config: {
        LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
      },
    }),
    [],
  );

  return (
    <IntlProvider locale={contextValue.config.LOCALE}>
      <AppContext.Provider value={contextValue}>
        <div className="d-flex row align-content-center justify-content-center">
          <footer className="footer-container">
            {/* Bottom Footer */}
            <div className="footer-bottom font-red-hat-display">
              <Container fluid>
                <Row className="text-left text-white text-md-left">
                  {/* Logo */}
                  <Col xs={12} md={12} lg={2} className="pl-0 d-flex justify-content-center">
                    <img src={logoWhite} alt="Logo" className="logo" />
                  </Col>

                  {/* Copyright */}
                  <Col xs={12} md={12} lg={3} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                    <p className="small m-0">&copy; 2024 Credit Bureau Cambodia. All rights reserved.</p>
                  </Col>

                  {/* Links */}
                  <Col xs={12} md={12} lg={4} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                    <ul className="list-inline m-0">
                      <li className="list-inline-item mx-2">
                        <a href={getConfig().LMS_BASE_URL} className="text-white small" data-translate-key="myCourse">
                          {t('myCourse')}

                        </a>
                      </li>
                      |
                      <li className="list-inline-item mx-2">
                        <a href={`${getConfig().LMS_BASE_URL}/library`} className="text-white small" data-translate-key="library">

                          {t('library')}

                        </a>
                      </li>
                      |
                      <li className="list-inline-item mx-2">
                        <a href={`${getConfig().LMS_BASE_URL}/contact`} className="text-white small" data-translate-key="contactUs">
                          {t('contactUs')}

                        </a>
                      </li>
                      |
                      <li className="list-inline-item mx-2">
                        <a href={getConfig().ACCOUNT_SETTINGS_URL} className="text-white small" data-translate-key="account">
                          {t('account')}

                        </a>
                      </li>
                    </ul>
                  </Col>

                  {/* Language Selector */}
                  <Col xs={9} md={9} lg={3} className="pb-4">
                    <Footer
                      onLanguageSelected={onLanguageSelected}
                      supportedLanguages={[
                        { label: 'English', value: 'en' },
                        { label: "ខ្មែរ", value: "km-kh" }, // eslint-disable-line
                      ]}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </footer>
        </div>
      </AppContext.Provider>
    </IntlProvider>
  );
};
MyFooter.propTypes = {
  onLanguageSelected: PropTypes.func,
};

export default MyFooter;
