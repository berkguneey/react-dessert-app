import React from "react";

function Menu(props) {
  function RenderMenuItem({ dessert }) {
    return (
      <div>
        <b>
          {dessert.id}:{dessert.name}
        </b>{" "}
        - {dessert.category}
      </div>
    );
  }

  const menu = props.desserts.desserts.map((dessert) => {
    return (
      <div className="col-md-4" key={dessert.id}>
        <RenderMenuItem dessert={dessert} />
      </div>
    );
  });

  return <div className="row">{menu}</div>;
}

export default Menu;
