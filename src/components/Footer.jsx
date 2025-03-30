import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Footer from '@edx/frontend-component-footer-edx';

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
        <Footer
          onLanguageSelected={onLanguageSelected}
          supportedLanguages={[
            { label: 'English', value: 'en' },
            { label: 'ខ្មែរ', value: 'km-kh' },
          ]}
        />
      </AppContext.Provider>
    </IntlProvider>
  );
};
MyFooter.propTypes = {
  onLanguageSelected: PropTypes.func,
};

export default MyFooter;
