/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => (
  <footer>
    {/* Top Footer */}
    <div className="footer-top font-inter">
      <Container fluid className="d-flex flex-row align-content-center justify-content-center">
        <Row>
          <Col className=" d-flex flex-column justify-content-center " xl={{ span: 5, offset: 1 }} md={6} >
            <h2 className="text-white">Learn and Grow</h2>
            <p>
              Our edX learning experience is grounded in cutting-edge
              cognitive science. With more than two dozen distinct learning
              features to help you achieve your goals, our approach follows
              three key principles:
            </p>
            <strong>Experience</strong>
            <p>
              Learn new knowledge and skills in a variety of ways, from
              engaging video lectures and dynamic graphics to data
              visualizations and interactive elements.
            </p>
            <strong>Practice</strong>
            <p>
              Demonstrating your knowledge is a critical part of learning. edX
              courses and programs provide a space to practice with quizzes,
              open response assessments, virtual environments, and more.
            </p>
            <strong>Apply</strong>
            <p>
              Learning on edX transforms how you think and what you can do,
              and translates directly into the real world—immediately apply
              your new capabilities in the context of your job.
            </p>
          </Col>
          <Col
            className=" d-flex justify-content-center align-items-center"
            md={6}
          >
            <img src="/plower.png" alt="Logo" style={{ maxWidth: '300px' }} />
          </Col>
        </Row>
      </Container>
    </div>

    {/* Bottom Footer */}
    <div className="footer-bottom font-red-hat-display">
      <Container fluid>
        <Row className="text-center text-white text-md-left">
          {/* Logo and Social Media */}
          <Col
            xs={12}
            md={4}
            className="mb-4 mb-md-0 d-flex flex-column align-items-center"
          >
            <img
              src="/logo-white.png"
              alt="Logo"
              style={{ maxWidth: '200px' }}
            />

            <ul
              className="list-unstyled list-inline social-icons mt-3"
              style={{ maxWidth: '300px' }}
            >
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>

            <p className="mt-3">&copy; 2024 CBC. All rights reserved.</p>
            <div>
              {/* Language Selector */}
              {/* Add your language selector component or logic here */}
            </div>
          </Col>

          {/* Browse Courses */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-white mb-4 font-weight-bold">
              Browse Courses
            </h5>
            <ul className="list-unstyled  small">
              <li>
                <a href="#">Programming</a>
              </li>
              <li>
                <a href="#">Learn Economics</a>
              </li>
              <li>
                <a href="#">Learn Project</a>
              </li>
              <li>
                <a href="#">Learn Business</a>
              </li>
              <li>
                <a href="#">Learn Software</a>
              </li>
              <li>
                <a href="#">Learn Computer</a>
              </li>
            </ul>
          </Col>

          {/* About Us */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-white mb-4 font-weight-bold">
              About Us
            </h5>
            <ul className="list-unstyled  small">
              <li>
                <a href="#">Company Profile</a>
              </li>
              <li>
                <a href="#">Vision, Mission & Core Value</a>
              </li>
              <li>
                <a href="#">Shareholders</a>
              </li>
              <li>
                <a href="#">Board of Directors</a>
              </li>
              <li>
                <a href="#">Management Team</a>
              </li>
            </ul>
          </Col>

          {/* Media */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-white mb-4 font-weight-bold">
              Media
            </h5>
            <ul className="list-unstyled small">
              <li>
                <a href="#">Programming</a>
              </li>
              <li>
                <a href="#">CSR Activities</a>
              </li>
              <li>
                <a href="#">Videos and Photos</a>
              </li>
            </ul>
          </Col>

          {/* Our Members */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-white mb-4 font-weight-bold">
              Our Members
            </h5>
            <ul className="list-unstyled  small">
              <li>
                <a href="#">Benefits</a>
              </li>
              <li>
                <a href="#">How to become a member</a>
              </li>
              <li>
                <a href="#">Member Directory</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
);

export default Footer;
