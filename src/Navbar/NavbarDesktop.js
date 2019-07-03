import React from 'react';
import { Row, Col } from 'antd';
import HomeLink from './HomeLink';
import './Navbar.css';

const Navbar = (props) => {

  return (
    <div className="navbar-container">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <HomeLink />
        </Col>
        <Col className="gutter-row" span={6} />
        <Col className="gutter-row" span={6} />
        <Col className="gutter-row" span={6}></Col>
      </Row>
    </div>
  );
}

export default Navbar;
