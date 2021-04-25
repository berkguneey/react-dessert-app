import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";

function Menu(props) {
  function RenderMenuItem({ dessert }) {
    return (
      <Card>
        <Link to={`/menu/${dessert.id}`}>
          <CardImg
            width="100%"
            src={"http://localhost:3001/" + dessert.image}
          />
          <CardImgOverlay>
            <CardTitle>
              <b>{dessert.name}</b>
            </CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    );
  }

  const menu = props.desserts.desserts.map((dessert) => {
    return (
      <div className="col-md-4" key={dessert.id}>
        <RenderMenuItem dessert={dessert} />
      </div>
    );
  });

  return (
    <div className="row-content">
      <div className="row">
        <div className="col-md-12">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      {props.desserts.isLoading ? (
        <div className="row">
          <Loading />
        </div>
      ) : (
        <div className="row">{menu}</div>
      )}
    </div>
  );
}

export default Menu;
