import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
class Landing extends Component {
  render() {
    return (
      <Container justify-content="center">
        <Row>
          <h4>
            SuperShop
          </h4>
        </Row>
        <Row>
          <Col md="auto">
            <Link to="/register"> Register </Link>
          </Col>
          <Col md="auto">
            <Link to="/login" > Log In </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(Landing);
