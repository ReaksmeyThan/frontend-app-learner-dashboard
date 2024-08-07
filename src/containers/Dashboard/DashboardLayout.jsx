import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from '@openedx/paragon';
import PropTypes from 'prop-types';
import React from 'react';

import WidgetSidebar from '../WidgetContainers/WidgetSidebar';
import hooks from './hooks';

export const columnConfig = {
  courseList: {
    withSidebar: {
      lg: { span: 12, offset: 1 },
      xl: { span: 8, offset: 0 },
    },
    noSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 12, offset: 0 },
    },
  },
  sidebar: {
    lg: { span: 12, offset: 0 },
    xl: { span: 4, offset: 1 },
  },
};

export const DashboardLayout = ({ children }) => {
  const { isCollapsed, sidebarShowing } = hooks.useDashboardLayoutData();
  const courseListColumnProps = sidebarShowing
    ? columnConfig.courseList.withSidebar
    : columnConfig.courseList.noSidebar;

  const handleSearch = () => {
    const searchText = document.querySelector('.search-input').value;
    alert(`Searching for: ${searchText}`);
    // Add your search logic here
  };

  return (
    <Container className=" bg-accent-a-100">
      {/* Header Section */}
      <Row className="banner" style={{ backgroundImage: 'url(/Banner1.jpg)' }}>
        <Col
          className="banner-content d-flex justify-content-center align-items-center bg-accent-b"
          md={6}
        >
          <div className="contain-title align-items-left">
            <h1 className="title1">Welcome to CBC Academy </h1>
            <h1 className="title2">Online Courses</h1>

            <p>Build up your skills. Explore courses here</p>
            <Form className="search-form d-flex mt-3">
              <FormControl
                type="text"
                placeholder="What do you want to learn?"
                className="search-input"
              />
              <Button className="search-button" type="button" onClick={handleSearch}>
                SEARCH
                <i className="fa fa-search" />
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row className="justify-content-md-center">
        <Col {...courseListColumnProps} className="course-list-column">
          {children}
        </Col>
        <Col {...columnConfig.sidebar} className="sidebar-column">
          {!isCollapsed}
          <WidgetSidebar />
        </Col>
      </Row>
    </Container>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
