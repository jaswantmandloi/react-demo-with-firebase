import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";

import Layout from "../../Shared/Layout/LayoutConnect";

export default function UserDashboardTemplate() {
  
  return (
    <Layout>
      <Card>
        <CardImg
          top
          width="10%"
          src="http://mjtradingllc.com/wp-content/uploads/2017/11/user1_profile_1479986763.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{this.props.userData.name}</CardTitle>
          <CardSubtitle>{this.props.userData.email}</CardSubtitle>
          <CardText />

          <Row>
            <Col>Address</Col>
            <Col>
              {this.props.userData.address.street},{" "}
              {this.props.userData.address.city}
            </Col>
          </Row>
          <Row>
            <Col>Company</Col> <Col>{this.props.userData.company.name}</Col>
          </Row>
          <Row>
            <Col>Phone</Col> <Col>{this.props.userData.phone}</Col>
          </Row>
          <Row>
            <Col>Website</Col> <Col>{this.props.userData.website}</Col>
          </Row>

          <Button onClick={()=>{
            this.props.logout();
          }}>Logout</Button>
        </CardBody>
      </Card>
    </Layout>
  );
}
