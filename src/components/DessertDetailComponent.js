import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function DessertDetail(props) {
  function RenderDessert({ dessert }) {
    return (
      <div className="col-md-6">
        <Card>
          <CardImg top src={"http://localhost:3001/" + dessert.image} />
          <CardBody>
            <CardTitle>
              <b>{dessert.name}</b>
            </CardTitle>
            <CardText>{dessert.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="row-content">
      <div className="row">
        <div className="col-md-12">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dessert.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="row">
        <RenderDessert dessert={props.dessert} />
      </div>
    </div>
  );
}

export default DessertDetail;
