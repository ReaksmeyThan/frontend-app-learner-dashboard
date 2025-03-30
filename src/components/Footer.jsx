import Footer from '@edx/frontend-component-footer-edx';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import './Footer.scss';

const MyFooter = ({ onLanguageSelected = () => {} }) => {
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
        <div className="d-flex flex-row align-content-center justify-content-center">

          hello

          <Footer
            onLanguageSelected={onLanguageSelected}
            supportedLanguages={[
              { label: 'English', value: 'en' },
              { label: "ខ្មែរ", value: "km-kh" }, // eslint-disable-line
            ]}
          />
        </div>
      </AppContext.Provider>
    </IntlProvider>
  );
};
MyFooter.propTypes = {
  onLanguageSelected: PropTypes.func,
};

export default MyFooter;
