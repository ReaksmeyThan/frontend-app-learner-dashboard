import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';

import { getConfig } from '@edx/frontend-platform';
import urls from 'data/services/lms/urls';
import { reduxHooks } from 'hooks';
// import { useTranslation } from 'react-i18next';
import BrandLogo from '../BrandLogo';
import { findCoursesNavClicked, useIsCollapsed } from '../hooks';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';

export const ExpandedHeader = () => {
  // const { t } = useTranslation(); // Get the t function from useTranslation
  const { formatMessage } = useIntl();
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  const isCollapsed = useIsCollapsed();

  const exploreCoursesClick = findCoursesNavClicked(urls.baseAppUrl(courseSearchUrl));

  if (isCollapsed) {
    return null;
  }

  return (
    <header className="d-flex shadow-sm align-items-center learner-variant-header pl-4">
      <div className=" header-wrapper d-flex justify-content-between align-items-center w-100">
        <div className=" flex-grow-1 d-flex align-items-center w-100">
          <BrandLogo />
          <Button as="a" href={`${getConfig().LMS_BASE_URL}`} variant="inverse-primary" className="p-4">
          {formatMessage(messages.home)}
          </Button>
          <Button as="a" href="urls.baseAppUrl(courseSearchUrl)" variant="inverse-primary" className="p-4 course-link">

          {formatMessage(messages.course)}
          </Button>

          <Button as="a" href={urls.baseAppUrl(courseSearchUrl)} variant="inverse-primary" className="p-4" onClick={exploreCoursesClick}>

          {formatMessage(messages.discoverNew)}
          </Button>

          <span className="flex-grow-1" />
        </div>

        <AuthenticatedUserDropdown />
      </div>
    </header>
  );
};

ExpandedHeader.propTypes = {};

export default ExpandedHeader;
