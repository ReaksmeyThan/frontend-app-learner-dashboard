import { getConfig } from '@edx/frontend-platform';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import logoWhite from '../assets/logo-white.png';
import './Footer.scss';

const MyFooter = () => {
  const { t } = useTranslation();

  // const [selectedLanguage, setSelectedLanguage] = useState('');

  // const handleLanguageChange = (event) => {
  //   const language = event.target.value;
  //   setSelectedLanguage(language);
  //   i18next.changeLanguage(language).catch((error) => {
  //     console.error('Error changing language:', error);
  //   });
  // };

  return (
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
              {/* <Col xs={9} md={9} lg={3} className="pb-4">
                <label htmlFor="language-selector" className="text-white small">
                  {t('selectLanguage')}
                </label>
                <select
                  id="language-selector"
                  className="form-select mt-3"
                  value={selectedLanguage}
                  onChange={setSelectedLanguage}

                >
                  <option value="en">English</option>
                  <option value="km-kh">{t('khmer')}</option>
                </select> */}
              {/* <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={() => handleLanguageChange({ target: { value: selectedLanguage } })}
                >
                  Submit
                </button> */}
              {/* </Col> */}
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};
MyFooter.propTypes = {
  // onLanguageSelected: PropTypes.func,
};

export default MyFooter;
