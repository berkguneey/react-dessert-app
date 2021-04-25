import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="row-content">
      <div className="row">
        <div className="col-md-12">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            interdum ultrices ipsum sit amet tristique. Quisque risus nisi,
            gravida at venenatis in, convallis id turpis. Aliquam quis aliquet
            sapien, ac fermentum diam. Aliquam imperdiet non nisl quis rhoncus.
            Pellentesque maximus congue tempor. Maecenas augue libero, viverra
            eget tortor vel, imperdiet feugiat velit. Pellentesque nisl nibh,
            porta at sapien quis, volutpat molestie eros. Nulla interdum rutrum
            mattis. Sed sit amet lectus egestas, luctus ex sit amet, venenatis
            purus. Maecenas interdum dui vitae metus placerat, eu porta ligula
            feugiat. Phasellus sit amet imperdiet est.
          </p>
          <p>
            Ut quis ex gravida, mollis neque eget, molestie quam. Duis feugiat
            vitae ante non varius. Suspendisse ac velit vulputate, congue nisl
            vel, aliquam sem. Fusce in tortor eu ante porttitor accumsan.
            Vivamus pretium tempor pellentesque. Duis id quam turpis. Curabitur
            dolor massa, faucibus non purus id, molestie hendrerit justo.
            Integer efficitur magna at urna pulvinar consequat. Donec in
            consequat odio. Maecenas ac finibus orci, quis bibendum neque.
            Nullam lobortis iaculis orci sit amet imperdiet. Curabitur rutrum
            eleifend interdum.
          </p>
        </div>

        <div className="col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Column1</dt>
                <dd className="col-6">Value1</dd>
                <dt className="col-6">Column2</dt>
                <dd className="col-6">Value2</dd>
                <dt className="col-6">Column3</dt>
                <dd className="col-6">Value3</dd>
                <dt className="col-6">Column4</dt>
                <dd className="col-6">Value4</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  I love the desert especially the fruit one looks lovely and
                  delicious.
                </p>
                <footer className="blockquote-footer">
                  Lucifer Morningstar, The Wit and Wisdom of Lucifer
                  Morningstar, 2021
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
