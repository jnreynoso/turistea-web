import React, { useState, useEffect } from "react";
import axios from "axios";

const Route = ({ name, description, places }) => {
  return (
    <div
      style={{
        width: "50%",
        margin: "20px",
      }}
    >
      <p>
        <b>Ruta:</b> {name}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <p>
        <b>Lugares:</b> {places.map((e) => e.name).join(",")}
      </p>
    </div>
  );
};
const DetailSite = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-nodevs.cloudfunctions.net/fastifyFunction/routes"
      )
      .then(function ({ data: { payload } }) {
        setRoutes(payload);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div style={{ padding: "0 15%", display: "block" }}>
      <img
        style={{ objectFit: "fill" }}
        src="https://travel1tours.com/wp-content/uploads/2019/09/Lugares-turisticos-de-Peru.jpg"
        width={"100%"}
        height={"450px"}
      />
      <div style={{ paddingLeft: "45px" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {routes.map((el) => (
            <Route {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSite;
