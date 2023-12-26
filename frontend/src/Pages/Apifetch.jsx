import React, { useEffect, useState } from "react";
import axios from "axios";

const Apifetch = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/getitems")
      .then((res) => console.log(res.data));
  }, []);
  return <div>Apifetch</div>;
};
export default Apifetch;
