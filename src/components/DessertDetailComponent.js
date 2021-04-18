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
import { Fade, Stagger } from "react-animation-components";

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

  function RenderComments({ comments }) {
    return (
      <div className="col-md-6">
        <h4>Comments</h4>
        <Stagger in>
          {comments.map((comment) => {
            return (
              <Fade in key={comment.id}>
                <li key={comment.id}>
                  {comment.comment}
                  <div className="dessert-comments">
                    <b>{comment.author}</b>,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </div>
                </li>
              </Fade>
            );
          })}
        </Stagger>
      </div>
    );
  }

  return (
    <div className="row-content">
      {props.dessert != null && (
        <div>
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
            {props.comments != null && (
              <RenderComments comments={props.comments} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DessertDetail;
