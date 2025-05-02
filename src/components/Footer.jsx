import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Col, Container, Row } from 'react-bootstrap';
import logoWhite from '../assets/logo-white.png';
import './Footer.scss';

const MyFooter = () => {
  const { formatMessage } = useIntl();
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
              <Col xs={9} md={9} lg={3} className="pb-4 d-flex justify-content-center">
                {/* Social Media Icons (commented out) */}
              </Col>
              {/* Links */}
              <Col xs={12} md={12} lg={4} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                <ul className="list-inline m-0">
                  <li className="list-inline-item mx-2">
                    <a href={getConfig().LMS_BASE_URL} className="text-white small">
                      {formatMessage({ id: 'myCourse', defaultMessage: 'My Course' })}
                    </a>
                  </li>
                  |
                  <li className="list-inline-item mx-2">
                    <a href={`${getConfig().LMS_BASE_URL}/library`} className="text-white small">

                      {formatMessage({ id: 'library', defaultMessage: 'Library' })}
                    </a>
                  </li>
                  |
                  <li className="list-inline-item mx-2">
                    <a href={`${getConfig().LMS_BASE_URL}/contact`} className="text-white small">

                      {formatMessage({ id: 'contactUs', defaultMessage: 'Contact Us' })}
                    </a>
                  </li>
                  |
                  <li className="list-inline-item mx-2">
                    <a href={getConfig().ACCOUNT_SETTINGS_URL} className="text-white small">

                      {formatMessage({ id: 'home', defaultMessage: 'Account' })}
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default MyFooter;
