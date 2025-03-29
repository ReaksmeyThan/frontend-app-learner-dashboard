import {
  Col,
  Container,
  Row,
} from '@openedx/paragon';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import React, { useEffect } from 'react';
import '../../i18n';
import WidgetSidebar from '../WidgetContainers/WidgetSidebar';
import hooks from './hooks';

export const columnConfig = {
  courseList: {
    withSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 9, offset: 0 },
    },
    noSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 12, offset: 0 },
    },
  },
  sidebar: {
    lg: { span: 12, offset: 0 },
    xl: { span: 4, offset: 0 },
  },
};

export const DashboardLayout = ({ children }) => {
  const { isCollapsed, sidebarShowing } = hooks.useDashboardLayoutData();
  const courseListColumnProps = sidebarShowing
    ? columnConfig.courseList.withSidebar
    : columnConfig.courseList.noSidebar;

  // const handleSearch = () => {
  //   const searchText = document.querySelector('.search-input').value;
  //   alert(`Searching for: ${searchText}`);
  //   // Add your search logic here
  // };

  const { formatMessage } = useIntl();

  useEffect(() => {
    // Ensuring language preference is consistent
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      localStorage.setItem('i18nextLng', 'en');
    }
  }, []);

  return (
    <Container fluid className="font-inter">


      {/* Main Content Section */}
      <Row className="flex-column d-flex justify-content-center align-content-center">
        <Col {...courseListColumnProps} className="course-list-column">
          {children}
        </Col>
        {sidebarShowing && (
          <Col {...columnConfig.sidebar} className="sidebar-column">
            {!isCollapsed && <WidgetSidebar />}
          </Col>
        )}
      </Row>
    </Container>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
